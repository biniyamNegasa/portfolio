import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biniyam Negasa - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-18 right-4">
            <ModeToggle />
          </div>
          {children}
          <footer className="flex items-center justify-center h-12 w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-sm">
            <div>© 2025 Biniyam Negasa</div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
