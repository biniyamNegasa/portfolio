import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center py-8 px-6">
      <Link href="/" className="hover:underline">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
          Biniyam Negasa
        </h1>
      </Link>
      <main>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-md bg-blue-600">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
