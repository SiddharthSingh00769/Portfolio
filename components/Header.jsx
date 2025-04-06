import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Sid<span className="text-accent">.</span>
                </h1>
            </Link>
            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button className="cursor-pointer bg-accent text-primary hover:bg-[#00e187]">Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
