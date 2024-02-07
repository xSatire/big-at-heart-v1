import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
import { MdLockOpen } from "react-icons/md";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex gap-x-3", font.className)}>
        <MdLockOpen />
        Auth
      </h1>
      <p className="text-muted-foreground text-sm ">{label}</p>
    </div>
  );
};
