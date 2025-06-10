import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main>
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
      <h1>Hello World</h1>
    </main>
  );
}
