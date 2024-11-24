import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import type { UserType } from '@/pages/auth/sign-up'

// Common schema for both user types
const basicInfoFields = {
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
} as const

const basicInfoSchema = z.object(basicInfoFields).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Freelancer-specific schemas
const professionalInfoFields = {
  profession: z.string().min(2, 'Profession is required'),
  experience: z.string().min(1, 'Years of experience is required'),
  skills: z.string().min(2, 'Skills are required'),
} as const

const freelancerAdditionalInfoFields = {
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  location: z.string().min(2, 'Location is required'),
  hourlyRate: z.string().min(1, 'Hourly rate is required'),
} as const

// Client-specific schema
const companyInfoFields = {
  companyName: z.string().min(2, 'Company name is required'),
  industry: z.string().min(2, 'Industry is required'),
  companySize: z.string().min(1, 'Company size is required'),
} as const

interface MultiStepFormProps {
  userType: UserType
}

export function MultiStepForm({ userType }: MultiStepFormProps) {
  const { t } = useTranslation()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Create the appropriate schema based on user type
  const fullSchema = userType === 'freelancer'
    ? z.object({
        ...basicInfoFields,
        ...professionalInfoFields,
        ...freelancerAdditionalInfoFields,
      })
    : z.object({
        ...basicInfoFields,
        ...companyInfoFields,
      })

  type FormData = z.infer<typeof fullSchema>

  const form = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      ...(userType === 'freelancer' ? {
        profession: '',
        experience: '',
        skills: '',
        bio: '',
        location: '',
        hourlyRate: '',
      } : {
        companyName: '',
        industry: '',
        companySize: '',
      }),
    },
  })

  const totalSteps = userType === 'freelancer' ? 3 : 2
  const progress = (step / totalSteps) * 100

  const onSubmit = async (data: FormData) => {
    if (step < totalSteps) {
      setStep(step + 1)
      return
    }

    try {
      setIsLoading(true)
      // Handle final submission here
      console.log('Form submitted:', data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('auth.createAccount')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {userType === 'freelancer' 
            ? t('auth.createFreelancerAccount')
            : t('auth.createClientAccount')
          }
        </p>
      </div>

      <Progress value={progress} className="h-1" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Step 1: Basic Info (Common for both types) */}
          {step === 1 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.namePlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.emailPlaceholder')} type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.password')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.passwordPlaceholder')} type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.confirmPassword')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.confirmPasswordPlaceholder')} type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Step 2: Professional Info (Freelancer) or Company Info (Client) */}
          {step === 2 && userType === 'freelancer' && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.profession')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('auth.selectProfession')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="writer">Writer</SelectItem>
                        <SelectItem value="marketer">Marketer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.experience')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('auth.selectExperience')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.skills')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.skillsPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 2 && userType === 'client' && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.companyName')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.companyNamePlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.industry')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('auth.selectIndustry')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.companySize')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('auth.selectCompanySize')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Step 3: Additional Info (Freelancer only) */}
          {step === 3 && userType === 'freelancer' && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.bio')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('auth.bioPlaceholder')}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.location')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.locationPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.hourlyRate')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.hourlyRatePlaceholder')} type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <div className="flex gap-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="w-full"
              >
                {t('common.back')}
              </Button>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {step === totalSteps ? t('auth.createAccount') : t('common.next')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
