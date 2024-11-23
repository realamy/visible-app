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
  Briefcase,
  Users,
  Grid,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react'
import { useNavigation } from '@/contexts/navigation-context'

import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

const MobileNav = () => {
  const location = useLocation()
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
  const menuSections = [
    {
      title: 'Profile',
      items: [
        {
          name: 'Your Profile',
          href: '/profile',
          icon: UserCircle,
          description: 'View and edit your profile',
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
      title: 'Settings & Support',
      items: [
        {
          name: 'Settings',
          href: '/settings',
          icon: Settings,
          description: 'Manage your account',
        },
        {
          name: 'Help Center',
          href: '/help',
          icon: HelpCircle,
          description: 'Get help and support',
        },
        {
          name: 'Sign Out',
          href: '/logout',
          icon: LogOut,
          description: 'Sign out of your account',
        },
      ],
    },
  ]

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
        <div className="fixed inset-x-0 top-0 bottom-0 z-40 bg-background md:hidden overflow-y-auto">
        <div className="h-full">
          {/* Title Section */}
          <div className="px-4 h-16 flex items-center border-b">
            <span className="text-2xl font-semibold">Menu</span>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                <UserCircle className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg">Guest User</h2>
                <p className="text-sm text-muted-foreground">Sign in to your account</p>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="py-2 px-2">
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
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors"
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
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Theme
              </h3>
              <div className="flex gap-2">
                {themeOptions.map((option) => {
                  const Icon = option.icon
                  const isActive = theme === option.value
                  return (
                    <button
                      key={option.value}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                      )}
                      onClick={() => setTheme(option.value)}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{option.name}</span>
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
          <div className="flex items-center justify-between">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e)
                    } else {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className={cn(
                    "flex flex-col items-center py-2 px-3 min-w-[4rem] relative transition-colors",
                    isActive
                      ? "text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="relative">
                    <Icon className={cn("w-6 h-6 transition-transform", isActive && "scale-105")} />
                    {item.badge && (
                      <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-0.5 font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Bottom Padding for Content */}
      <div className="pb-16 md:pb-0" />
    </>
  )
}

export default MobileNav
