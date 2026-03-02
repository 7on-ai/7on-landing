import type React from "react"
import Image from "next/image"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Image src="/main-icon.svg" alt="Logo" width={711} height={711} className="w-full h-auto" />
    </div>
  )
}
