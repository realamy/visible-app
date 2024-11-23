import { Service } from '@/types/service'

export interface SearchFilters {
  categories: string[]
  skills: string[]
  location: string
  budget: string
}

export interface SearchResult {
  services: Service[]
  total: number
  page: number
  pageSize: number
}

// Common categories for home services and handymen
export const serviceCategories = [
  'Plumbing',
  'Electrical Work',
  'Painting',
  'Carpentry',
  'Home Renovation',
  'Cleaning',
  'Moving Services',
  'Gardening',
  'HVAC',
  'Appliance Repair',
  'Masonry',
  'Tiling',
  'Roofing',
  'Security Systems',
  'Interior Design'
]

export async function searchServices(
  query: string,
  filters: SearchFilters,
  page = 1,
  pageSize = 10
): Promise<SearchResult> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800))

  // Mock data - replace with actual API call
  const mockServices: Service[] = [
    {
      id: '1',
      title: 'Professional Plumbing Services',
      description: 'Expert plumber for all your plumbing needs. Available 24/7 for emergencies.',
      price: 2500,
      rating: 4.8,
      reviews: 127,
      category: 'Plumbing',
      location: 'Algiers',
      freelancer: {
        id: '1',
        name: 'Ahmed Benali',
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Benali',
        rating: 4.9,
        totalReviews: 156,
        verified: true,
        yearsOfExperience: 8,
        responseTime: '1 hour',
        languages: ['Arabic', 'French']
      }
    },
    {
      id: '2',
      title: 'Expert House Painter',
      description: 'Interior and exterior painting services. Quality work with attention to detail.',
      price: 3000,
      rating: 4.7,
      reviews: 98,
      category: 'Painting',
      location: 'Oran',
      freelancer: {
        id: '2',
        name: 'Karim Mansouri',
        avatar: 'https://ui-avatars.com/api/?name=Karim+Mansouri',
        rating: 4.8,
        totalReviews: 123,
        verified: true,
        yearsOfExperience: 5,
        responseTime: '2 hours',
        languages: ['Arabic', 'French', 'English']
      }
    },
    {
      id: '3',
      title: 'Home Renovation Specialist',
      description: 'Complete home renovation services. Kitchen, bathroom, and full house remodeling.',
      price: 15000,
      rating: 4.9,
      reviews: 75,
      category: 'Home Renovation',
      location: 'Constantine',
      freelancer: {
        id: '3',
        name: 'Mohamed Larbi',
        avatar: 'https://ui-avatars.com/api/?name=Mohamed+Larbi',
        rating: 5.0,
        totalReviews: 89,
        verified: true,
        yearsOfExperience: 12,
        responseTime: '1 hour',
        languages: ['Arabic', 'French']
      }
    },
    {
      id: '4',
      title: 'Professional Electrician',
      description: 'Licensed electrician for all electrical installations and repairs. Safety first!',
      price: 2000,
      rating: 4.8,
      reviews: 112,
      category: 'Electrical Work',
      location: 'Setif',
      freelancer: {
        id: '4',
        name: 'Sofiane Boudjema',
        avatar: 'https://ui-avatars.com/api/?name=Sofiane+Boudjema',
        rating: 4.7,
        totalReviews: 156,
        verified: true,
        yearsOfExperience: 6,
        responseTime: '30 minutes',
        languages: ['Arabic', 'French']
      }
    },
    {
      id: '5',
      title: 'Garden Maintenance Services',
      description: 'Professional gardening, lawn care, and landscape maintenance services.',
      price: 1800,
      rating: 4.6,
      reviews: 67,
      category: 'Gardening',
      location: 'Blida',
      freelancer: {
        id: '5',
        name: 'Amina Kadi',
        avatar: 'https://ui-avatars.com/api/?name=Amina+Kadi',
        rating: 4.8,
        totalReviews: 82,
        verified: true,
        yearsOfExperience: 4,
        responseTime: '1 hour',
        languages: ['Arabic', 'French']
      }
    }
  ]

  // Filter logic
  let filteredServices = mockServices.filter(service => {
    const matchesQuery = !query || 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())

    const matchesCategory = !filters.categories.length || 
      filters.categories.includes(service.category)

    const matchesLocation = !filters.location || 
      service.location.toLowerCase() === filters.location.toLowerCase()

    const matchesBudget = !filters.budget || (() => {
      switch(filters.budget) {
        case 'low':
          return service.price <= 2000
        case 'mid':
          return service.price > 2000 && service.price <= 5000
        case 'high':
          return service.price > 5000
        default:
          return true
      }
    })()

    return matchesQuery && matchesCategory && matchesLocation && matchesBudget
  })

  // Sort by rating and reviews
  filteredServices.sort((a, b) => {
    // First by rating
    if (b.rating !== a.rating) {
      return b.rating - a.rating
    }
    // Then by number of reviews
    return b.reviews - a.reviews
  })

  // Pagination
  const start = (page - 1) * pageSize
  const paginatedServices = filteredServices.slice(start, start + pageSize)

  return {
    services: paginatedServices,
    total: filteredServices.length,
    page,
    pageSize
  }
}
