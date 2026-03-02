import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="fixed z-20 pt-8 md:pt-14 top-10 left-0 w-full">
      <header className="flex items-center justify-center container">
        <Link href="/">
          <Logo className="w-[711px] md:w-[711px]" />
        </Link>
      </header>
    </div>
  )
}
