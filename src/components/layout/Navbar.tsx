import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useNavigation } from '@/contexts/navigation-context'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { LogoWithEyeIteration } from "@/components/Logo/Logo"
import { useTranslation } from "react-i18next"
import { 
  Search, 
  LogIn, 
  UserPlus, 
  User, 
  Settings, 
  Briefcase, 
  LogOut,
  Mail
} from 'lucide-react'
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserDropdownContent = () => {
  const { user, logout } = useAuth()
  const { t } = useTranslation()
  
  return (
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel className="p-0">
        <div className="flex items-center justify-start gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
        {t('nav.menu.account')}
      </DropdownMenuLabel>
      <DropdownMenuItem asChild>
        <Link to="/profile" className="flex w-full items-center">
          <User className="mr-2 h-4 w-4" />
          {t('nav.profile')}
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/settings" className="flex w-full items-center">
          <Settings className="mr-2 h-4 w-4" />
          {t('nav.settings')}
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
        {t('nav.menu.work')}
      </DropdownMenuLabel>
      <DropdownMenuItem asChild>
        <Link to="/projects" className="flex w-full items-center">
          <Briefcase className="mr-2 h-4 w-4" />
          {t('nav.projects')}
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/messages" className="flex w-full items-center">
          <Mail className="mr-2 h-4 w-4" />
          {t('nav.messages')}
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={logout}>
        <LogOut className="mr-2 h-4 w-4" />
        {t('nav.signOut')}
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

const Navbar = () => {
  const { isMobileMenuOpen } = useNavigation()
  const { isAuthenticated, user, login } = useAuth()
  const { t } = useTranslation()

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background",
      isMobileMenuOpen ? "hidden md:block" : "block"
    )}>
      <div className="container flex h-14 items-center justify-between">
        {/* Logo - Visible on all screens */}
        <LogoWithEyeIteration />

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => {/* Add search functionality */}}
          >
            <Search className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <UserDropdownContent />
            </DropdownMenu>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={login}
              >
                <LogIn className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
              >
                <Link to="/signup">
                  <UserPlus className="h-5 w-5" />
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.services')}
          </Link>
          <Link to="/freelancers" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.freelancers')}
          </Link>
        </nav>

        {/* Right Section - Theme & Auth (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden md:block">
            <ThemeToggle size="sm" />
          </div>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <UserDropdownContent />
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="hidden md:inline-flex" onClick={login}>
                {t('nav.signIn')}
              </Button>
              <Button className="hidden md:inline-flex" asChild>
                <Link to="/signup">{t('nav.getStarted')}</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
