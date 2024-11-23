import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarProvider, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { LayoutDashboard, Briefcase, MessageSquare, Settings, Wallet, Star, Clock } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigation = [
  {
    name: "dashboard.nav.overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "dashboard.nav.projects",
    href: "/dashboard/projects",
    icon: Briefcase,
  },
  {
    name: "dashboard.nav.messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    name: "dashboard.nav.earnings",
    href: "/dashboard/earnings",
    icon: Wallet,
  },
  {
    name: "dashboard.nav.reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },
  {
    name: "dashboard.nav.availability",
    href: "/dashboard/availability",
    icon: Clock,
  },
  {
    name: "dashboard.nav.settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export default function DashboardLayout() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { pathname } = useLocation()
  const isRTL = language === 'ar'

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className={cn(
        "flex h-[calc(100vh-4rem)]",
        isRTL && "flex-row-reverse"
      )}>
        <SidebarProvider defaultOpen>
          <Sidebar>
            <SidebarHeader className="flex h-14 items-center border-b px-4">
              <SidebarTrigger />
              <span className="ml-2 text-lg font-semibold">
                {t('dashboard.overview.title')}
              </span>
            </SidebarHeader>
            <SidebarContent className="flex flex-col gap-4">
              <SidebarMenu>
                {navigation.map((item) => {
                  const isActive = item.end 
                    ? pathname === item.href
                    : pathname.startsWith(item.href)

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link to={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{t(item.name)}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
        <div className="flex-1 border-l dark:border-l-slate-800">
          <div className="h-full px-6 py-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
