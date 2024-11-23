import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  UserCircle,
  Menu,
  BellRing,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  LogInIcon,
  Briefcase,
  Users,
  Grid,
  Sun,
  Moon,
  Laptop,
  UserPlus,
} from 'lucide-react'
import { useNavigation } from '@/contexts/navigation-context'
import { useAuth } from '@/contexts/auth-context'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

const MobileNav = () => {
  const location = useLocation()
  const { isAuthenticated, user, logout, login } = useAuth()
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation()
  const { theme, setTheme } = useTheme()

  // Main navigation tabs
  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
    },
    ...(isAuthenticated ? [
      {
        name: 'Messages',
        href: '/messages',
        icon: MessageSquare,
        badge: 3,
      },
      {
        name: 'Notifications',
        href: '/notifications',
        icon: BellRing,
        badge: 5,
      },
    ] : []),
    {
      name: 'Menu',
      href: '#',
      icon: Menu,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()
        setIsMobileMenuOpen(!isMobileMenuOpen)
      },
    },
  ]

  // Menu sections for the overlay
  const authenticatedMenuSections = [
    {
      title: 'Profile',
      items: [
        {
          name: 'Your Profile',
          href: '/profile',
          icon: UserCircle,
          description: 'View and edit your profile',
        },
        {
          name: 'Settings',
          href: '/settings',
          icon: Settings,
          description: 'Manage your account',
        },
      ],
    },
    {
      title: 'Find Work',
      items: [
        {
          name: 'Browse Services',
          href: '/services',
          icon: Grid,
          description: 'Explore available services',
        },
        {
          name: 'Find Freelancers',
          href: '/freelancers',
          icon: Users,
          description: 'Connect with talented professionals',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          name: 'Help Center',
          href: '/help',
          icon: HelpCircle,
          description: 'Get help and support',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          name: 'Sign Out',
          href: '#',
          icon: LogOut,
          description: 'Sign out of your account',
          onClick: () => {
            logout()
            setIsMobileMenuOpen(false)
          },
          className: 'text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50',
        },
      ],
    },
  ]

  const unauthenticatedMenuSections = [
    {
      title: 'Get Started',
      items: [
        {
          name: 'Sign In',
          href: '#',
          icon: LogInIcon,
          description: 'Access your account',
          onClick: () => {
            login()
            setIsMobileMenuOpen(false)
          },
          className: 'text-primary hover:text-primary-600',
        },
        {
          name: 'Create Account',
          href: '/signup',
          icon: UserPlus,
          description: 'Join our community',
          className: 'text-primary hover:text-primary-600',
        },
      ],
    },
    {
      title: 'Explore',
      items: [
        {
          name: 'Browse Services',
          href: '/services',
          icon: Grid,
          description: 'Explore available services',
        },
        {
          name: 'Find Freelancers',
          href: '/freelancers',
          icon: Users,
          description: 'Connect with talented professionals',
        },
        {
          name: 'Help Center',
          href: '/help',
          icon: HelpCircle,
          description: 'Get help and support',
        },
      ],
    },
  ]

  const menuSections = isAuthenticated ? authenticatedMenuSections : unauthenticatedMenuSections

  const themeOptions = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: Laptop },
  ]

  // Handle scroll blocking
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen, setIsMobileMenuOpen])

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 bottom-0 z-40 bg-background md:hidden">
          <div className="h-full flex flex-col">
            {/* Title Section */}
            <div className="flex-shrink-0 px-4 h-16 flex items-center justify-between border-b">
              <span className="text-2xl font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-accent"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* User Profile Section */}
            <div className="flex-shrink-0 p-4 border-b">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  <UserCircle className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  {isAuthenticated ? (
                    <div>
                      <h2 className="font-semibold text-lg">{user.name}</h2>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-semibold text-lg">Welcome to Visible</h2>
                      <p className="text-sm text-muted-foreground">Sign in to access all features</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Menu Sections - Scrollable */}
            <div className="flex-1 overflow-y-auto py-2 px-2">
              {menuSections.map((section) => (
                <div key={section.title} className="mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground px-2 mb-1">
                    {section.title}
                  </h3>
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          if (item.onClick) {
                            item.onClick()
                          } else {
                            setIsMobileMenuOpen(false)
                          }
                        }}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors",
                          item.className
                        )}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{item.name}</div>
                          <p className="text-sm text-muted-foreground truncate">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Theme Section */}
              <div className="px-4 py-2 mb-16">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Theme
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {themeOptions.map((option) => {
                    const Icon = option.icon
                    const isActive = theme === option.value
                    return (
                      <button
                        key={option.value}
                        className={cn(
                          "flex flex-col items-center justify-center p-2 rounded-lg gap-1 hover:bg-accent transition-colors",
                          isActive && "bg-accent"
                        )}
                        onClick={() => setTheme(option.value)}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs">{option.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
        <nav className="container mx-auto px-2">
          <ul className="flex justify-around -mb-px text-sm font-medium text-center">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={item.onClick}
                    className={cn(
                      'inline-flex flex-col items-center justify-center w-full p-4 border-t-2 hover:text-primary hover:border-primary',
                      isActive
                        ? 'text-primary border-primary'
                        : 'border-transparent'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="mt-1 text-xs">{item.name}</span>
                    {item.badge && (
                      <span className="absolute top-3 right-1/4 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
