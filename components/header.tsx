import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="fixed z-10 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-center container">
        <Link href="/">
          <Logo className="w-[48px] md:w-[60px]" />
        </Link>
      </header>
    </div>
  )
}
