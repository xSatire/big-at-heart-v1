"use client";

import { MdSearch } from "react-icons/md";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchComponenent = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex bg-slate-700 items-center py-1 rounded-xl pl-1">
      <MdSearch size={15} />
      <input
        type="text"
        placeholder="search..."
        className="bg-transparent border-none pl-1 focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};
