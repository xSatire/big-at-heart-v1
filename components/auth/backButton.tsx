import Link from "next/link";
import { Button } from "../ui/button";

interface backButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: backButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
