import { Mail, MapPin, Link as LinkIcon, Calendar, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Mock user data - replace with API call
const user = {
  name: "Mohamed Amine",
  title: "Full Stack Developer",
  location: "Algiers, Algeria",
  email: "mohamed.amine@example.com",
  website: "www.mohamedamine.dev",
  joined: "January 2023",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3",
  bio: "Passionate full-stack developer with 5+ years of experience in web development. Specialized in React, Node.js, and cloud technologies.",
  stats: {
    completedProjects: 48,
    totalEarnings: 450000,
    rating: 4.9,
    reviews: 32
  },
  skills: [
    "React.js", "Node.js", "TypeScript", "MongoDB", "AWS", 
    "Docker", "GraphQL", "Next.js", "Tailwind CSS"
  ],
  recentProjects: [
    {
      id: 1,
      title: "E-commerce Platform Development",
      client: "Digital Store DZ",
      completion: "December 2023",
      rating: 5.0
    },
    {
      id: 2,
      title: "Real Estate Management System",
      client: "Properties Algeria",
      completion: "November 2023",
      rating: 4.8
    },
    {
      id: 3,
      title: "Healthcare Appointment Platform",
      client: "MedCare Algeria",
      completion: "October 2023",
      rating: 5.0
    }
  ]
}

const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-lg text-muted-foreground">{user.title}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LinkIcon className="h-4 w-4" />
                  <span>{user.website}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joined}</span>
                </div>
              </div>

              <p className="text-foreground/80">{user.bio}</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button>Edit Profile</Button>
              <Button variant="outline">Share Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{user.stats.completedProjects}</div>
            <p className="text-muted-foreground">Completed Projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">
              {user.stats.totalEarnings.toLocaleString('fr-DZ')} DZD
            </div>
            <p className="text-muted-foreground">Total Earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{user.stats.rating}</div>
            <p className="text-muted-foreground">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{user.stats.reviews}</div>
            <p className="text-muted-foreground">Client Reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Skills</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Projects</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {user.recentProjects.map((project) => (
              <div key={project.id} className="flex items-start justify-between pb-6 border-b last:border-0 last:pb-0">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Client: {project.client}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Completed: {project.completion}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{project.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
