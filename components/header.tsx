import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-20 left-0 w-full">
      <header className="flex items-center justify-center container">
        <Link href="/">
          <Logo className="w-[111px] md:w-[111px]" />
        </Link>
      </header>
    </div>
  )
}
