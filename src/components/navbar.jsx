'use client'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import useScrollDirection from './../components/subs/scrollDirection' // importe o hook personalizado

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Trabalho', href: '#trabalho', current: true },
  { name: 'Tratamentos', href: '#tratamento', current: true },
  { name: 'Quem sou', href: '#quem', current: true },
  { name: 'MECs', href: '#mecs', current: true },
  { name: 'FAQ', href: '#FAQ', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`left-0 top-0 z-50 w-full bg-[#cacdf7] px-2 transition duration-300 ease-in-out sm:fixed sm:px-6 lg:px-8 ${isNavbarFixed ? 'shadow-md' : ''} ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
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
            <button className="btn-agend">agende agora</button>
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
