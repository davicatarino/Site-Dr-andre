'use client'
import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline' // Usando o ícone de seta para cima do HeroIcons

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar o botão quando o usuário rolar mais de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolar suavemente até o topo
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="rounded-full bg-gray-800 p-3 text-white shadow-lg transition hover:bg-gray-600"
          >
            <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  )
}
