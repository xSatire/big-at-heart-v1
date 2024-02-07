"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const Pagination = ({ count }: any) => {
  const ITEM_PER_PAGE: number = 2;
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);

  const handleClick = (mode: string) => {
    if (mode === "prev") {
      params.set("page", (parseInt(page) - 1).toString());
      console.log("prev clicked");
    } else {
      params.set("page", (parseInt(page) + 1).toString());
      console.log("Next Clicked");
    }
    replace(`${pathname}?${params}`);
  };

  const noPrev: boolean = parseInt(page) <= 1;
  const noNext: boolean = parseInt(page) * ITEM_PER_PAGE >= count;

  return (
    <div className="flex justify-between">
      <button
        className="py-1 px-3 bg-slate-100 text-slate-900 text-bold rounded-lg border-solid font-semibold border-black"
        disabled={noPrev}
        onClick={() => {
          handleClick("prev");
        }}
      >
        Previous
      </button>
      <button
        className="py-1 px-3 bg-slate-100 text-slate-900 text-bold rounded-lg border-solid font-semibold border-black"
        disabled={noNext}
        onClick={() => {
          handleClick("next");
        }}
      >
        Next
      </button>
    </div>
  );
};
