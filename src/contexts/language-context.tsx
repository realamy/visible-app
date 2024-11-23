import React, { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SupportedLanguages } from '@/types/i18next'
import { DirectionProvider } from '@radix-ui/react-direction'

type Direction = 'ltr' | 'rtl'

type LanguageContextType = {
  currentLanguage: SupportedLanguages
  changeLanguage: (lang: SupportedLanguages) => void
  direction: Direction
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: SupportedLanguages) => {
    i18n.changeLanguage(lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as SupportedLanguages || 'en'
    changeLanguage(savedLanguage)
  }, [])

  const direction = i18n.dir() as Direction

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: (i18n.language as SupportedLanguages) || 'en',
        changeLanguage,
        direction
      }}
    >
      <DirectionProvider dir={direction}>
        {children}
      </DirectionProvider>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
