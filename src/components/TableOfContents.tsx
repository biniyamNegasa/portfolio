"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { sections } from "@/lib/data";

interface TableOfContentsProps {
  activeSection: string;
}

export function TableOfContents({ activeSection }: TableOfContentsProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-72 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-l-2xl">
      <div className="h-auto max-h-[80vh] p-6 overflow-auto">
        <CardHeader className="px-0 pt-0 pb-4">
          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 py-0">
          <nav className="space-y-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left h-auto p-3 rounded-md",
                  activeSection === section.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700",
                )}
                onClick={() => scrollToSection(section.id)}
              >
                <div className="flex items-center gap-3 w-full">
                  <div
                    className={cn(
                      "p-1.5 rounded-md",
                      activeSection === section.id
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-700",
                    )}
                  >
                    <section.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{section.label}</span>
                </div>
              </Button>
            ))}
          </nav>
        </CardContent>
      </div>
    </div>
  );
}
