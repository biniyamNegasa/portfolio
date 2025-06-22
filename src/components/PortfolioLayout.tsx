"use client";

import { useState, useEffect } from "react";
import {
  Code2,
  Trophy,
  Briefcase,
  User,
  Wrench,
  Menu,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TableOfContents } from "@/components/TableOfContents";
import { MobileNavigation } from "@/components/MobileNavigation";
import { ProjectCard } from "@/components/ProjectCard";
import {
  socialLinks,
  projects,
  experiences,
  tools,
  achievements,
} from "@/lib/data";
import Link from "next/link";

export function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "projects",
        "experience",
        "tools",
        "extras",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Left Sidebar - Social Icons (hidden on mobile) */}
      <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 h-auto py-8 w-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-r-2xl hidden md:block">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </aside>

      {/* Mobile Navigation Button (only visible on mobile) */}
      <Button
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-md lg:hidden"
        onClick={() => setIsMobileNavOpen(true)}
      >
        <Menu className="h-5 w-5 text-white" />
      </Button>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileNavOpen}
        onCloseAction={() => setIsMobileNavOpen(false)}
        activeSection={activeSection}
        socialLinks={socialLinks}
      />

      {/* Main Content */}
      <main className="md:ml-24 lg:mr-80">
        <div className="mx-auto max-w-4xl px-6 py-8">
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <div className="mb-6 lg:flex lg:items-center lg:justify-between">
              <div>
                <Link href="/">
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                    Your Name
                  </h1>
                </Link>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Software Engineer
                </p>

                {/* Social links for mobile - visible only on small screens */}
                <div className="flex items-center justify-center md:hidden mt-4 gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className="h-9 w-9 rounded-md"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-10 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-blue-600">
                <User className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Introduction
              </h2>
            </div>
            <div className="pt-6 pb-6">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Hello! I&apos;m a passionate full-stack developer with over 4
                years of experience building modern web applications. I
                specialize in React, Next.js, and TypeScript, with a strong
                background in both frontend and backend development.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                When I&apos;m not coding, you&apos;ll find me solving
                algorithmic challenges on competitive programming platforms or
                exploring new technologies. I&apos;m always eager to learn and
                take on new challenges that push the boundaries of what&apos;s
                possible on the web.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-10 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-blue-600">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <Link
              href="/projects"
              className="block text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 decoration-2 mt-6 text-right"
            >
              View all projects
            </Link>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-10 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-blue-600">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-slate-600 dark:text-slate-300 mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="self-start lg:self-center bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tools & Technologies */}
          <section id="tools" className="mb-10 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-blue-600">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Tools & Technologies
              </h2>
            </div>
            <div className="grid gap-6">
              {Object.entries(tools).map(([category, items]) => (
                <Card
                  key={category}
                  className="border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competitive Programming */}
          <section id="extras" className="mb-10 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-blue-600">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Competitive Programming
              </h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center gap-2">
                      {achievement.platform}
                      {<achievement.icon className="h-5 w-5 inline-block" />}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600 dark:text-slate-300 mt-1">
                      Max Rating: {achievement.stats}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      <Link
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Right Sidebar - Table of Contents (always visible on desktop) */}
      <aside className="hidden lg:block">
        <TableOfContents activeSection={activeSection} />
      </aside>
      <footer className="flex items-center justify-center h-12 w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-sm">
        <div>© 2025 Biniyam Negasa</div>
      </footer>
    </div>
  );
}
