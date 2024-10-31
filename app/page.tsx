import PaginationControls from "@/components/pagination"

export default async function Home({searchParams}: {searchParams: { [key:string]: string | string[] | undefined }}) {

  const params = await searchParams; 

  // Now, safely access page and per_page
  const page = (Array.isArray(params['page']) ? params['page'][0] : params['page']) ?? '1';
  const per_page = (Array.isArray(params['per_page']) ? params['per_page'][0] : params['per_page']) ?? '5';

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
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,
    `entry ${Math.random()}`,

  ]


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
      <PaginationControls
        count={count} 
        hasNextPage={end < data.length} 
        hasPrevPage={start > 0} 
      />
    </div>
  );
}
