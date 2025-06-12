"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { sections } from "@/lib/data";

interface MobileNavigationProps {
  isOpen: boolean;
  onCloseAction: () => void;
  activeSection: string;
  socialLinks: Array<{
    icon: React.ElementType;
    href: string;
    label: string;
  }>;
}

export function MobileNavigation({
  isOpen,
  onCloseAction,
  activeSection,
  socialLinks,
}: MobileNavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onCloseAction();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop - clicking here will close the navigation */}
      <div className="absolute inset-0 bg-black/50" onClick={onCloseAction} />

      {/* Navigation Panel */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-72 bg-white dark:bg-slate-800 p-4 shadow-lg rounded-l-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Contents
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onCloseAction}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

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

        {/* Social Links */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
            Connect
          </h3>
          <div className="flex flex-wrap gap-2">
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
  );
}
