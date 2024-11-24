import { useTranslation } from 'react-i18next'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type UserType = 'freelancer' | 'client' | null

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void
  selectedType: UserType
}

export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('auth.chooseAccountType')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('auth.accountTypeDescription')}
        </p>
      </div>

      <div className="grid gap-4">
        <Button
          variant="outline"
          className={cn(
            'h-auto text-left rtl:text-right relative w-full',
            selectedType === 'client' && 'ring-2 ring-primary'
          )}
          onClick={() => onSelect('client')}
        >
          <div className="flex items-start gap-3 p-3 w-full rtl:flex-row-reverse">
            <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
              <Icons.briefcase className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base">
                {t('auth.clientTitle')}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 whitespace-normal">
                {t('auth.clientDescription')}
              </p>
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className={cn(
            'h-auto text-left rtl:text-right relative w-full',
            selectedType === 'freelancer' && 'ring-2 ring-primary'
          )}
          onClick={() => onSelect('freelancer')}
        >
          <div className="flex items-start gap-3 p-3 w-full rtl:flex-row-reverse">
            <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
              <Icons.user className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base">
                {t('auth.freelancerTitle')}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 whitespace-normal">
                {t('auth.freelancerDescription')}
              </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}
