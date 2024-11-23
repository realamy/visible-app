export interface Freelancer {
  id: string
  name: string
  avatar: string
  rating: number
  totalReviews: number
}

export interface Service {
  id: string
  title: string
  description: string
  price: number
  rating: number
  reviews: number
  category: string
  location: string
  freelancer: Freelancer
}
