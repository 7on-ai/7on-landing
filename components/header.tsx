import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-20 left-0 w-full">
      <header className="flex items-center justify-center container">
        <Link href="/">
          <Logo className="w-[60px] md:w-[90px]" />
        </Link>
      </header>
    </div>
  )
}
