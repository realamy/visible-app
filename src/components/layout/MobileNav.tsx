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
  Globe,
} from 'lucide-react'
import { useNavigation } from '@/contexts/navigation-context'
import { useAuth } from '@/contexts/auth-context'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/language-context'
import { LanguageCode } from '@/data/categories'

const MobileNav = () => {
  const location = useLocation()
  const { isAuthenticated, user, logout, login } = useAuth()
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation()
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const { language, setLanguage } = useLanguage()

  // Available languages
  const languages = [
    { code: 'en' as LanguageCode, name: 'English' },
    { code: 'fr' as LanguageCode, name: 'Français' },
    { code: 'ar' as LanguageCode, name: 'العربية', dir: 'rtl' }
  ]

  // Main navigation tabs
  const navigation = [
    {
      name: t('menu.navigation.home'),
      href: '/',
      icon: Home,
    },
    {
      name: t('menu.navigation.services'),
      href: '/services',
      icon: Briefcase,
    },
    ...(isAuthenticated ? [
      {
        name: t('menu.navigation.messages'),
        href: '/messages',
        icon: MessageSquare,
        badge: 3,
      },
      {
        name: t('menu.navigation.notifications'),
        href: '/notifications',
        icon: BellRing,
        badge: 5,
      },
    ] : []),
    {
      name: t('menu.navigation.menu'),
      href: '#',
      icon: Menu,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()
        setIsMobileMenuOpen(!isMobileMenuOpen)
      },
    },
  ]

  const authenticatedMenuSections = [
    {
      title: t('menu.sections.profile.title'),
      items: [
        {
          name: t('menu.sections.profile.yourProfile'),
          href: '/profile',
          icon: UserCircle,
          description: t('menu.sections.profile.viewProfile'),
        },
        {
          name: t('menu.sections.profile.settings'),
          href: '/settings',
          icon: Settings,
          description: t('menu.sections.profile.manageAccount'),
        },
      ],
    },
    {
      title: t('menu.sections.findWork.title'),
      items: [
        {
          name: t('menu.sections.findWork.browseServices'),
          href: '/services',
          icon: Grid,
          description: t('menu.sections.findWork.exploreServices'),
        },
        {
          name: t('menu.sections.findWork.findFreelancers'),
          href: '/freelancers',
          icon: Users,
          description: t('menu.sections.findWork.connectProfessionals'),
        },
      ],
    },
    {
      title: t('menu.sections.support.title'),
      items: [
        {
          name: t('menu.sections.support.helpCenter'),
          href: '/help',
          icon: HelpCircle,
          description: t('menu.sections.support.getHelp'),
        },
      ],
    },
  ]

  const unauthenticatedMenuSections = [
    {
      title: t('menu.sections.account.title'),
      items: [
        {
          name: t('menu.sections.account.signIn'),
          href: '#',
          icon: LogInIcon,
          description: t('menu.sections.account.signInDesc'),
          onClick: () => {
            login()
            setIsMobileMenuOpen(false)
          },
          className: 'text-primary hover:text-primary-600',
        },
        {
          name: t('menu.sections.account.createAccount'),
          href: '/signup',
          icon: UserPlus,
          description: t('menu.sections.account.createAccountDesc'),
          className: 'text-primary hover:text-primary-600',
        },
      ],
    },
    {
      title: t('menu.sections.findWork.title'),
      items: [
        {
          name: t('menu.sections.findWork.browseServices'),
          href: '/services',
          icon: Grid,
          description: t('menu.sections.findWork.exploreServices'),
        },
        {
          name: t('menu.sections.findWork.findFreelancers'),
          href: '/freelancers',
          icon: Users,
          description: t('menu.sections.findWork.connectProfessionals'),
        },
      ],
    },
    {
      title: t('menu.sections.support.title'),
      items: [
        {
          name: t('menu.sections.support.helpCenter'),
          href: '/help',
          icon: HelpCircle,
          description: t('menu.sections.support.getHelp'),
        },
      ],
    },
  ]

  const menuSections = isAuthenticated ? authenticatedMenuSections : unauthenticatedMenuSections

  const themeOptions = [
    { name: t('menu.theme.light'), value: 'light', icon: Sun },
    { name: t('menu.theme.dark'), value: 'dark', icon: Moon },
    { name: t('menu.theme.system'), value: 'system', icon: Laptop },
  ]

  // Handle scroll blocking
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 bottom-0 z-40 bg-background md:hidden">
          <div className="h-full flex flex-col">
            {/* Title Section */}
            <div className="flex-shrink-0 px-6 h-16 flex items-center justify-between border-b">
              <span className="text-xl font-semibold">{t('menu.title')}</span>
            </div>

            {/* User Profile Section */}
            <div className="flex-shrink-0 p-6 border-b bg-muted/10">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  <UserCircle className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  {isAuthenticated ? (
                    <div>
                      <h2 className="font-semibold text-lg truncate">
                        {t('menu.welcome.authenticated.title', { name: user.name })}
                      </h2>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-semibold text-lg truncate">{t('menu.welcome.guest.title')}</h2>
                      <p className="text-sm text-muted-foreground truncate">{t('menu.welcome.guest.subtitle')}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Menu Sections - Scrollable */}
            <div className="flex-1 overflow-y-auto py-4 px-4">
              {menuSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground px-2 mb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
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
                          "flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-colors",
                          "hover:bg-muted/50 active:bg-muted",
                          item.className
                        )}
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{item.name}</div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Theme Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground px-2 mb-3">
                  {t('menu.theme.title')}
                </h3>
                <div className="grid grid-cols-3 gap-2 px-2">
                  {themeOptions.map((option) => {
                    const Icon = option.icon
                    const isActive = theme === option.value
                    return (
                      <button
                        key={option.value}
                        className={cn(
                          "flex flex-col items-center justify-center p-3 rounded-lg gap-2 transition-colors",
                          "hover:bg-muted/50 active:bg-muted",
                          isActive && "bg-muted"
                        )}
                        onClick={() => setTheme(option.value)}
                      >
                        <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                        <span className={cn("text-xs", isActive && "font-medium text-primary")}>
                          {option.name}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Language Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground px-2 mb-3">
                  {t('menu.language.title')}
                </h3>
                <div className="space-y-1 px-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={cn(
                        "w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-colors",
                        "hover:bg-muted/50 active:bg-muted",
                        language === lang.code && "bg-muted"
                      )}
                      onClick={() => setLanguage(lang.code)}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <Globe className={cn("w-4 h-4", language === lang.code && "text-primary")} />
                      </div>
                      <div className="flex-1 min-w-0 text-start">
                        <div className={cn("font-medium truncate", language === lang.code && "text-primary")}>
                          {lang.name}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {language === lang.code 
                            ? t('menu.language.current', { language: lang.name })
                            : t('menu.language.switch', { language: lang.name })}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sign Out Button - Only for authenticated users */}
              {isAuthenticated && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground px-2 mb-3">
                    {t('menu.sections.account.title')}
                  </h3>
                  <div className="space-y-1 px-2">
                    <button
                      onClick={() => {
                        logout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg
                        text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50
                        transition-colors"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center">
                        <LogOut className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0 text-start">
                        <div className="font-medium truncate">{t('menu.sections.account.signOut')}</div>
                        <p className="text-sm text-muted-foreground truncate">
                          {t('menu.sections.account.signOutDesc')}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
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
              const isActive = isMobileMenuOpen 
                ? item.name === t('menu.navigation.menu')
                : location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        item.onClick(e)
                      } else {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className={cn(
                      'inline-flex flex-col items-center justify-center w-full p-4 border-t-2 hover:text-primary hover:border-primary transition-colors',
                      isActive
                        ? 'text-primary border-primary'
                        : 'text-muted-foreground border-transparent'
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive && "scale-105")} />
                    <span className={cn("mt-1 text-xs", isActive && "font-medium")}>{item.name}</span>
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
