import PaginationControls from "@/components/pagination"

export default function Home({searchParams}: {searchParams: { [key:string]: string | string[] | undefined }}) {

  const data = [
    "entry 1",
    "entry 2",
    "entry 3",
    "entry 4",
    "entry 5",
    "entry 6",
    "entry 7",
    "entry 8",
    "entry 9",
    "entry 10",
    "entry 11",
    "entry 12",
    "entry 13",
    "entry 14",
    "entry 15",
    "entry 16",
  ]

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  const entries = data.slice(start, end)

  const count = data.length

  console.log(count)

  return (
    <div>
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}
      <PaginationControls count={count} />
    </div>
  );
}
