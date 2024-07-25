'use client'
import AnimatedScrollingRight from './subs/scrollRight'

import Title from './subs/title'
import { useState } from 'react'

export default function SeventhSection() {
  const faqData = [
    {
      question:
        'Por que escolher a Dra. Débora Aguiar para o tratamento das minhas dores crônicas?',
      answer:
        'A Dra. Debora Aguiar é uma especialista em Reumatologia e Dor com mais de 16 anos de experiència, oferecendo tratamentos personalizados para alivio eficaz da dor.',
    },
    {
      question: 'Quais tratamentos a Dra. Débora Aguiar oferece?',
      answer:
        'A Dra. Débora Aguiar oferece uma ampla gama de tratamentos para dores crônicas, incluindo fisioterapia, acupuntura, medicamentos e intervenções invasivas, como bloqueios nervosos e radiofrequência.',
    },
    {
      question: 'Como agendar uma consulta e qual é o horário de atendimento?',
      answer:
        'Para agendar uma consulta com a Dra. Débora Aguiar, você pode ligar para o número X ou acessar o site Y. O horário de atendimento é de segunda a sexta, das 9h às 18h.',
    },
    {
      question:
        'Por que escolher a Dra. Débora Aguiar para o tratamento das minhas dores crônicas?',
      answer:
        'A Dra. Debora Aguiar é uma especialista em Reumatologia e Dor com mais de 16 anos de experiència, oferecendo tratamentos personalizados para alivio eficaz da dor.',
    },
    {
      question: 'Quais tratamentos a Dra. Débora Aguiar oferece?',
      answer:
        'A Dra. Débora Aguiar oferece uma ampla gama de tratamentos para dores crônicas, incluindo fisioterapia, acupuntura, medicamentos e intervenções invasivas, como bloqueios nervosos e radiofrequência.',
    },
    {
      question: 'Como agendar uma consulta e qual é o horário de atendimento?',
      answer:
        'Para agendar uma consulta com a Dra. Débora Aguiar, você pode ligar para o número X ou acessar o site Y. O horário de atendimento é de segunda a sexta, das 9h às 18h.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-2 p-4">
      <div className="mb-4">
        <Title title="FAQ." color="#E59251" />
      </div>
      <AnimatedScrollingRight className={'flex flex-col gap-5 sm:w-[60%]'}>
        {faqData.map((faqItem, index) => (
          <div
            key={faqItem.question}
            className="flex flex-col items-center justify-center rounded-3xl bg-[#ffffff] p-2"
            onClick={() => toggleDropdown(index)}
          >
            <div className="grid grid-cols-3 items-center justify-items-end sm:gap-4">
              <h2
                className={`${openIndex === index ? 'text-[#E59251]' : 'text-[#000]'} col-span-2 cursor-pointer text-xl font-semibold hover:text-[#E59251]`}
              >
                {faqItem.question}
              </h2>
              <div className="w-[20%]">
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="float-right size-6 flex-none text-right"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 18.75 7.5-7.5 7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="mt-4">{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </AnimatedScrollingRight>
    </div>
  )
}
