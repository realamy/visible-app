import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { NavigationProvider } from '@/contexts/navigation-context'
import { AuthProvider } from '@/contexts/auth-context'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileNav from '@/components/layout/MobileNav'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Freelancers from '@/pages/Freelancers'
import Profile from '@/pages/Profile'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Router>
        <AuthProvider>
          <NavigationProvider>
            <div className="relative min-h-screen bg-background font-sans antialiased">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/freelancers" element={<Freelancers />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <Footer />
              <MobileNav />
            </div>
          </NavigationProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
