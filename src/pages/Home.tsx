import { 
  Search, 
  ArrowRight, 
  TrendingUp, 
  Star, 
  Clock, 
  Globe, 
  Code, 
  Palette, 
  Megaphone,
  Users,
  Lock,
  CheckCircle2,
  ChevronRight,
  Heart,
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Home as HomeIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { SearchSection } from '@/components/layout/SearchSection'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const popularCategories = [
  // Digital Services
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications",
    icon: Code,
    count: 245,
    type: "digital"
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Logos, branding, and visual identity",
    icon: Palette,
    count: 189,
    type: "digital"
  },
  // Home Services
  {
    id: 3,
    title: "Plumbing",
    description: "Repairs, installations, and maintenance",
    icon: Wrench,
    count: 167,
    type: "home"
  },
  {
    id: 4,
    title: "Electrical",
    description: "Wiring, fixtures, and repairs",
    icon: Zap,
    count: 134,
    type: "home"
  }
]

const features = [
  {
    title: "Local Talent",
    description: "Connect with skilled Algerian professionals",
    icon: Users
  },
  {
    title: "Secure Payments",
    description: "Safe and reliable payment processing",
    icon: Lock
  },
  {
    title: "Quality Work",
    description: "Verified professionals and review system",
    icon: CheckCircle2
  }
]

const topProfessionals = [
  {
    id: 1,
    name: "Sarah Ahmed",
    title: "Full Stack Developer",
    rating: 4.9,
    reviews: 127,
    image: "https://ui-avatars.com/api/?name=Sarah+Ahmed",
    badges: ["Top Rated", "Quick Response"],
    type: "digital"
  },
  {
    id: 2,
    name: "Ahmed Benali",
    title: "Master Plumber",
    rating: 4.8,
    reviews: 98,
    image: "https://ui-avatars.com/api/?name=Ahmed+Benali",
    badges: ["Licensed Pro"],
    type: "home"
  },
  {
    id: 3,
    name: "Amina Kadi",
    title: "UI/UX Designer",
    rating: 5.0,
    reviews: 156,
    image: "https://ui-avatars.com/api/?name=Amina+Kadi",
    badges: ["Top Rated Plus"],
    type: "digital"
  }
]

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 dark:bg-primary/10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Find Skilled{' '}
                <span className="text-primary">Local Professionals</span>
                <br />
                for Any Project
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Connect with talented freelancers and local service providers for all your digital and home improvement needs
              </p>
            </div>
            
            <div className="mt-10">
              <SearchSection />
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                Popular:
                {['Web Development', 'Graphic Design', 'Plumbing', 'Electrical'].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Trusted Across Algeria</h3>
            <p className="text-sm font-medium text-muted-foreground">
              Connecting professionals and clients in all 48 wilayas
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold">15K+</p>
              <p className="text-sm text-muted-foreground text-center">Active Professionals</p>
            </div>
            
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold">25K+</p>
              <p className="text-sm text-muted-foreground text-center">Completed Projects</p>
            </div>
            
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="text-sm text-muted-foreground text-center">Average Rating</p>
            </div>
            
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold">48</p>
              <p className="text-sm text-muted-foreground text-center">Wilayas Covered</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-center space-y-4 mb-8">
              <h4 className="text-xl font-semibold tracking-tight">Featured In Leading Media</h4>
              <p className="text-sm text-muted-foreground">
                Our platform has been recognized by major Algerian and international media outlets
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  name: 'Echorouk',
                  type: 'News',
                  reach: '2M+ Readers'
                },
                {
                  name: 'El Watan',
                  type: 'Press',
                  reach: '1.5M+ Readers'
                },
                {
                  name: 'Liberté',
                  type: 'Media',
                  reach: '1M+ Readers'
                },
                {
                  name: 'TSA',
                  type: 'Digital News',
                  reach: '3M+ Monthly Visits'
                },
                {
                  name: 'El Khabar',
                  type: 'News',
                  reach: '1.8M+ Readers'
                },
                {
                  name: 'DZ Entreprise',
                  type: 'Business',
                  reach: '500K+ Readers'
                }
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="col-span-1 group"
                >
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors">
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {partner.type}
                    </span>
                    <span className="text-xs font-medium text-primary/80">
                      {partner.reach}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="link" className="text-sm text-muted-foreground hover:text-primary">
                View all press coverage
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our most requested digital and home services
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {popularCategories.map((category) => (
              <Card
                key={category.id}
                className="group relative overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    {category.type === "digital" ? (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        <span className="hidden sm:inline">Digital Service</span>
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <HomeIcon className="h-3 w-3" />
                        <span className="hidden sm:inline">Home Service</span>
                      </Badge>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold sm:text-lg">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {category.count}+ professionals
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      {category.type === "digital" ? "Hire Now" : "Book Now"} <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We connect you with verified professionals for all your project needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Visible Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to hire or ready to work, Visible makes it simple. Choose your path:
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" className="min-w-[140px]">
                <Users className="mr-2 h-4 w-4" />
                I'm a Client
              </Button>
              <Button variant="outline" className="min-w-[140px]">
                <Wrench className="mr-2 h-4 w-4" />
                I'm a Professional
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-primary/10 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Describe Your Needs",
                  description: "Tell us what you're looking for - whether it's a website design or home repair",
                  icon: Search,
                  benefits: ["Smart matching algorithm", "Detailed project templates", "Instant cost estimates"],
                  cta: "Browse Categories"
                },
                {
                  step: 2,
                  title: "Compare Professionals",
                  description: "Review verified profiles, past work, and client feedback to find your perfect match",
                  icon: CheckCircle2,
                  benefits: ["Verified reviews", "Portfolio showcase", "Experience level indicators"],
                  cta: "View Top Pros"
                },
                {
                  step: 3,
                  title: "Connect & Collaborate",
                  description: "Discuss project details, timeline, and pricing with selected professionals",
                  icon: Users,
                  benefits: ["Secure messaging", "Video consultations", "Custom proposals"],
                  cta: "Learn More"
                },
                {
                  step: 4,
                  title: "Complete Project",
                  description: "Work gets done, payment is released only when you're 100% satisfied",
                  icon: Lock,
                  benefits: ["Secure payments", "Work guarantee", "Dispute resolution"],
                  cta: "Get Started"
                }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="flex flex-col h-full bg-card rounded-lg border p-6 hover:border-primary/50 transition-colors">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <span className="text-sm font-bold">{item.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">
                      {item.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="mt-4 space-y-2">
                      {item.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle2 className="mr-2 h-3 w-3 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Button variant="ghost" className="mt-4 w-full justify-between group-hover:bg-primary/5">
                      {item.cta}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-full border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
              <Star className="mr-2 h-4 w-4 text-primary" />
              Join over 40,000 satisfied clients across Algeria
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px]">
                Post a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Become a Professional
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real projects, real results
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                client: "Tech Startup",
                service: "Web Development",
                professional: "Sarah Ahmed",
                description: "Complete e-commerce platform built in 6 weeks",
                result: "150% increase in online sales",
                type: "digital"
              },
              {
                client: "Villa Owner",
                service: "Plumbing",
                professional: "Ahmed Benali",
                description: "Complete bathroom renovation",
                result: "Completed 3 days ahead of schedule",
                type: "home"
              },
              {
                client: "Local Restaurant",
                service: "Graphic Design",
                professional: "Amina Kadi",
                description: "Brand identity refresh",
                result: "30% increase in customer engagement",
                type: "digital"
              }
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={story.type === "digital" ? "default" : "secondary"}>
                      {story.type === "digital" ? "Digital Service" : "Home Service"}
                    </Badge>
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold">{story.client}</h3>
                  <p className="text-sm text-primary mt-1">{story.service}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{story.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium">By {story.professional}</span>
                    <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                      {story.result}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Professionals */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Top Rated Professionals
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Work with talented freelancers and skilled service providers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {topProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="group relative overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">{professional.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {professional.title}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{professional.rating}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        ({professional.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {professional.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs sm:text-sm">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="w-full text-sm" variant="outline">
                        {professional.type === "digital" ? "Hire Now" : "Book Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2">
              Browse All Professionals
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
