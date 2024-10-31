"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    count: number;
  }

export default function PaginationControls({ hasNextPage, hasPrevPage, count }: PaginationControlsProps) {

  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div>
        <button
            onClick={() => {
                router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
            }}
        >Prev Page</button>
        <div>
            {page} / {Math.ceil(count / Number(per_page))}
        </div>
        <button
            onClick={() => {
                router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
            }}
        >Next Page</button>
    </div>
  )
}