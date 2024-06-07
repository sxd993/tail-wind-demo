import Link from "next/link"
export default function SubMenu() {

  return (
    <span class='flex flex-col absolute bg-pink-500 top-full right-0 whitespace-nowrap rounded-b-md'>
      <Link class='font-bold ' href='#'>7 day ticket</Link>
    </span>
  )

}