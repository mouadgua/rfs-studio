import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project ? `${project.name} — rfs studio` : "Projet — rfs studio" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
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
            {project.preview ? <Image src={project.preview} alt={`Aperçu de ${project.name}`} width={1200} height={900} className="aspect-[4/3] h-full w-full object-cover" /> : <div className="flex aspect-[4/3] items-end p-10"><span className="text-[12rem] font-semibold leading-none tracking-[-0.15em] text-[#1d2b24]/70">{project.initials}</span></div>}
          </div>
        </div>
        <div className="mt-20 grid gap-12 border-t border-[#d9cdbd] pt-12 md:grid-cols-[0.35fr_1fr]">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">À propos du projet</p>
          <div><p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.03em] md:text-4xl">{project.description}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1d2b24] px-5 py-3 text-sm text-[#f4f0e8] hover:bg-[#d96f4f]">Visiter le projet <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </div>
    </main>
  );
}
