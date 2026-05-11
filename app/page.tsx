import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end space-x-6">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="font-barlow">Home Page</h1>
  
    </div>
  );
}
