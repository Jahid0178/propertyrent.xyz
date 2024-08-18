"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface PaginationWrapperProps {
  page: number;
  limit: number;
  total: number;
}

const PaginationWrapper = ({ page, limit, total }: PaginationWrapperProps) => {
  const searchParams = useSearchParams();

  let pages = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pages.push(i);
  }

  const currentPage = searchParams.get("page") ?? "1";
  const currentLimit = searchParams.get("limit") ?? "12";

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${Number(currentPage) - 1}&limit=${currentLimit}`}
            className={`${page <= 1 ? "hidden" : ""}`}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}&limit=${limit}`}
              isActive={page === Number(currentPage)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`?page=${Number(currentPage) + 1}&limit=${currentLimit}`}
            className={`${page >= pages.length ? "hidden" : ""}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWrapper;
