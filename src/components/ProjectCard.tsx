import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="pt-0 border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800 overflow-hidden flex flex-col h-full">
      <div className="relative h-72 w-full">
        <Image
          src={project.image || "/frieren.jpg"}
          alt={project.title}
          fill
          className="object-cover object-left-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-slate-900 dark:text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="mt-2 text-slate-600 dark:text-slate-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 pt-0">
        {project.github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button
            size="sm"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

