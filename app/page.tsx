import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="font-barlow">Welcome to the course</h1>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
