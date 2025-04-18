import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <img src="/logo.png" alt="Golden Link" className="h-24" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/404" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/404" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/404" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4 ">
          <Button className="bg-red-500 text-white" variant="outline">Get Quote</Button>
        </div>
      </div>
    </nav>
  )
}
