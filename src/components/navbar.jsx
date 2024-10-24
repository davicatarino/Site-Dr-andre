'use client'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Trabalho', href: '/#trabalho', current: true },
  { name: 'MECs', href: '/#mecs', current: true },
  { name: 'Teste de Estresse', href: '/stressTest.html', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [showTopBanner, setShowTopBanner] = useState(true)

  // Função para fechar o banner quando o X for clicado
  const handleCloseBanner = () => {
    setShowTopBanner(false)
  }

  return (
    <Disclosure
      as="nav"
      className="left-0 top-0 z-50 w-full bg-[#d4d8fa] shadow-md"
    >
      {/* Elemento do topo que será escondido ao clicar no X */}
      {showTopBanner && (
        <div className="gradient 1 relative isolate z-10 flex w-full items-center justify-center gap-x-6 overflow-hidden py-2.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              Este site se destina a divulgação da MECS.
            </p>
          </div>
          <div className="static left-0 flex justify-end sm:relative sm:left-[30rem]">
            <button
              type="button"
              className="p-3 focus-visible:outline-offset-[-4px]"
              onClick={handleCloseBanner} // Fecha o banner ao clicar no X
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </div>
      )}

      {/* Navbar principal */}
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.name === 'Home' ? 'btn2' : 'btn',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://youtube.com/live/v1l1TtIJKI8?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-agend">Conheça a MECS!</button>
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
