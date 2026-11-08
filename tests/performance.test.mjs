import { spawn } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { setTimeout as wait } from "node:timers/promises";
import { after, before, describe, test } from "node:test";
import assert from "node:assert/strict";

const root = fileURLToPath(new URL("..", import.meta.url));
const port = 4317;
const baseUrl = `http://127.0.0.1:${port}`;
const requestTimeoutMs = 5_000;
const maxRouteResponseBytes = 500_000;
const maxProjectAssetBytes = 4 * 1024 * 1024;
const maxProjectAssetsBytes = 16 * 1024 * 1024;
const routes = [
  "/",
  "/journal/creative-summit",
  "/journal/meaningful-design",
  "/journal/idea-to-identity",
  "/projects/aether-dashboard",
  "/projects/barberelite",
  "/projects/clinique-espace-patient",
  "/projects/cod-master",
  "/projects/generateur-devis",
  "/projects/domi-azure",
  "/projects/kollectif-cafe",
  "/projects/neochrome-streetwear",
  "/projects/tarif-sync-pos",
];

let server;

async function request(path) {
  const startedAt = performance.now();
  const response = await fetch(`${baseUrl}${path}`, {
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  const body = await response.text();

  return {
    status: response.status,
    bytes: Buffer.byteLength(body),
    body,
    durationMs: Math.round(performance.now() - startedAt),
  };
}

async function waitForServer() {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`, {
        signal: AbortSignal.timeout(1_000),
      });
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await wait(250);
  }

  throw new Error("Production server did not become ready within 30 seconds");
}

before(async () => {
  server = spawn(
    process.execPath,
    [join(root, "node_modules", "next", "dist", "bin", "next"), "start", "-p", String(port)],
    {
      cwd: root,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: "ignore",
    },
  );
  await waitForServer();
});

after(() => {
  server?.kill();
});

describe("production route performance", () => {
  for (const route of routes) {
    test(`${route} responds successfully within the timeout`, async () => {
      const result = await request(route);

      assert.equal(result.status, 200, `${route} returned HTTP ${result.status}`);
      assert.match(result.body, /rfs studio/i, `${route} did not render the application shell`);
      assert.doesNotMatch(
        result.body,
        /introuvable/i,
        `${route} rendered a not-found page`,
      );
      assert.ok(
        result.bytes < maxRouteResponseBytes,
        `${route} returned ${result.bytes} bytes; expected less than ${maxRouteResponseBytes}`,
      );
    });
  }
});

test("project image assets stay within the memory and transfer budget", async () => {
  const projectDirectory = join(root, "public", "projects");
  const assets = await readdir(projectDirectory);
  const sizes = await Promise.all(
    assets.map(async (asset) => ({
      asset,
      bytes: (await stat(join(projectDirectory, asset))).size,
    })),
  );
  const totalBytes = sizes.reduce((total, asset) => total + asset.bytes, 0);
  const oversizedAssets = sizes.filter((asset) => asset.bytes > maxProjectAssetBytes);

  assert.deepEqual(
    oversizedAssets,
    [],
    `Project assets exceed ${maxProjectAssetBytes} bytes: ${JSON.stringify(oversizedAssets)}`,
  );
  assert.ok(
    totalBytes < maxProjectAssetsBytes,
    `Project assets total ${totalBytes} bytes; expected less than ${maxProjectAssetsBytes}`,
  );
});
