"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface itemObj {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
}

export const MenuLinks = ({ item }: itemObj) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex justify-start items-center m-2 p-3 gap-2 rounded-2xl hover:bg-rose-200  ${
        pathname == item.path ? "bg-rose-200" : ""
      }`}
    >
      <div>{item.icon}</div>
      <div className="font-bold">{item.title}</div>
    </Link>
  );
};
