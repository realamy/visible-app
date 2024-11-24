import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Freelancers from '@/pages/Freelancers'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'
import DashboardLayout from '@/pages/dashboard/layout'
import DashboardOverview from '@/pages/dashboard/overview'
import SignInPage from '@/pages/auth/sign-in'
import SignUpPage from '@/pages/auth/sign-up'
import AuthLayout from '@/layouts/auth-layout'
import { cn } from '@/lib/utils'

function App() {
  const { pathname } = useLocation()
  const isDashboard = pathname.startsWith('/dashboard')
  const isAuth = pathname.startsWith('/auth')

  if (isAuth) {
    return (
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    )
  }

  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className={cn(
        !isDashboard && "container mx-auto px-4 py-8"
      )}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <DashboardOverview />
            </DashboardLayout>
          } />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

export default App
