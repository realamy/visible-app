import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useNavigation } from '@/contexts/navigation-context'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { LogoWithEyeIteration } from "@/components/Logo/Logo";

const Navbar = () => {
  const { isMobileMenuOpen } = useNavigation()

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background",
      isMobileMenuOpen ? "hidden md:block" : "block"
    )}>
      <div className="container flex h-14 items-center">
      <Link to="/">
        <LogoWithEyeIteration />
      </Link>
        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link to="/freelancers" className="text-sm font-medium transition-colors hover:text-primary">
            Freelancers
          </Link>
        </nav>

        {/* Right Section - Theme & Auth */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ThemeToggle size="sm" />
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
