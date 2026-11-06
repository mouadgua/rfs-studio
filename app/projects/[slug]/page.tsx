import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import ProjectGallery from "@/components/ui/project-gallery";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project ? `${project.name} — rfs studio` : "Projet — rfs studio" };
}

function ProjectPageFallback() {
  return <main className="min-h-screen bg-[#f4f0e8]" />;
}

async function ProjectPageContent({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f0e8] px-6 text-[#1d2b24]">
        <div><h1 className="text-4xl">Projet introuvable</h1><Link href="/#work" className="mt-6 inline-flex underline">Retour aux projets</Link></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#1d2b24]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="h-4 w-4" /> Tous les projets</Link>
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">rfs studio</span>
      </header>
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">{project.category}</p>
            <h1 className="mt-6 max-w-3xl text-6xl tracking-[-0.08em] md:text-8xl">{project.name}</h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#68736b]">{project.summary}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#d7b995]" style={{ backgroundColor: project.accent }}>
            {project.preview ? <Image src={project.preview} alt={`Aperçu de ${project.name}`} width={1200} height={900} quality={70} priority className="aspect-[4/3] h-full w-full object-cover" /> : <div className="flex aspect-[4/3] items-end p-10"><span className="text-[12rem] font-semibold leading-none tracking-[-0.15em] text-[#1d2b24]/70">{project.initials}</span></div>}
          </div>
        </div>
        <div className="mt-20 grid gap-12 border-t border-[#d9cdbd] pt-12 md:grid-cols-[0.35fr_1fr]">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">À propos du projet</p>
          <div><p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.03em] md:text-4xl">{project.description}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1d2b24] px-5 py-3 text-sm text-[#f4f0e8] hover:bg-[#d96f4f]">Visiter le projet <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} accent={project.accent} />
        )}
        {project.video && (
          <section className="mt-24">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
              Project film
            </p>
            <video
              controls
              preload="metadata"
              poster={project.video.poster}
              className="aspect-video w-full rounded-[2rem] bg-[#1d2b24] object-cover"
              aria-label={project.video.title ?? `${project.name} project film`}
            >
              <source src={project.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        )}
        {project.fieldNotes && project.fieldNotes.length > 0 && (
          <section className="mt-24 border-t border-[#d9cdbd] pt-12">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
                  Notes from the field
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl tracking-[-0.06em] md:text-6xl">
                  What shaped the work.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#68736b]">
                The choices, questions, and small discoveries behind the final experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {project.fieldNotes.map((note, index) => (
                <article key={`${note.title}-${index}`} className="border-t border-[#bcae9c] pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d96f4f]">
                    {note.label}
                  </p>
                  <h3 className="mt-8 text-2xl leading-tight tracking-[-0.05em]">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#68736b]">{note.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {project.contentBlocks && project.contentBlocks.length > 0 && (
          <section className="mt-24 grid gap-10 border-t border-[#d9cdbd] pt-12 md:grid-cols-[0.35fr_1fr]">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
              Behind the work
            </p>
            <div className="space-y-12">
              {project.contentBlocks.map((block, index) => (
                <article key={`${block.title}-${index}`}>
                  <h2 className="text-3xl tracking-[-0.05em] md:text-5xl">{block.title}</h2>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#68736b]">
                    {block.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectPageFallback />}>
      <ProjectPageContent params={params} />
    </Suspense>
  );
}
