import { getPaginationRange } from "./utils"

interface PaginationProps {
    page: number
    total: number
    limit: number
    onPageChange: (page: number) => void
};

export default function Pagination ({
    page,
    total,
    limit,
    onPageChange,
}: PaginationProps) {
    const totalPages = Math.ceil(total / limit)
    const pages = getPaginationRange(page, totalPages);

    return (
        <nav className="w-full flex gap-3 items-center justify-center py-[64px] desktop:py-[100px] text-[14px] tablet:text-[14px] desktop:tablet:text-[24px]">
            {pages.map((p, idx) =>
                p === 'dots' ? (
                    <span
                        key={`dots-${idx}`}
                        className="w-[32px] h-[32px] desktop:w-[42px] desktop:h-[42px] border rounded-[4px] text-center text-[#FDFFFF]"
                    >
                        …
                    </span>
                ) : (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        className={`w-[32px] h-[32px] desktop:w-[42px] desktop:h-[42px] border border-[#FDFFFF] rounded-[4px] transition-bg duration-300 ${p === page
                                ? 'bg-[#FDFFFF] text-[#1C1C1C]'
                                : 'cursor-pointer text-[#FDFFFF] hover:border-[#FF6600]'
                            }`}
                    >
                        {p}
                    </button>
                ),
            )}
        </nav>
    );
};