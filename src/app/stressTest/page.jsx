'use client'
import { useState } from 'react'
import '../../../public/styles.css'
import './../../app/globals.css'
import NavBar from '@/components/navbar'
import NinethSection from '@/components/ninethSection'

export default function StressTest() {
  const [responses, setResponses] = useState(Array(10).fill(0)) // Inicializa as respostas com 0
  const [finalScore, setFinalScore] = useState(null) // Estado para armazenar a pontuação final
  const [stressLevel, setStressLevel] = useState('') // Estado para armazenar o nível de estresse

  // Perguntas do teste (traduzidas)
  const questions = [
    'No último mês, com que frequência você ficou chateado porque algo inesperado aconteceu?',
    'No último mês, com que frequência você sentiu que não conseguia controlar as coisas importantes da sua vida?',
    'No último mês, com que frequência você se sentiu nervoso e estressado?',
    'No último mês, com que frequência você se sentiu confiante sobre sua capacidade de lidar com questões pessoais?',
    'No último mês, com que frequência você sentiu que as coisas estavam indo do jeito que você queria?',
    'No último mês, com que frequência você sentiu que não conseguia lidar com todas as coisas que tinha para fazer?',
    'No último mês, com que frequência você conseguiu controlar irritações em sua vida?',
    'No último mês, com que frequência você sentiu que estava no controle de tudo?',
    'No último mês, com que frequência você ficou com raiva por causa de coisas fora do seu controle?',
    'No último mês, com que frequência você sentiu que as dificuldades estavam se acumulando tanto que você não conseguia superá-las?',
  ]

  // Função para lidar com a seleção das respostas
  const handleSelection = (index, value) => {
    const updatedResponses = [...responses]
    updatedResponses[index] = parseInt(value)
    setResponses(updatedResponses)
  }

  // Função para calcular o resultado final
  const handleSubmit = (e) => {
    e.preventDefault()

    // Inverte as respostas para as perguntas 4, 5, 7 e 8
    const invertedIndices = [3, 4, 6, 7]
    const finalScore = responses.reduce((total, value, index) => {
      if (invertedIndices.includes(index)) {
        return total + (4 - value)
      }
      return total + value
    }, 0)

    // Avaliação do nível de estresse
    let stressLevel = ''
    if (finalScore < 16) {
      stressLevel = 'relativamente pouco estresse'
    } else if (finalScore >= 16 && finalScore <= 30) {
      stressLevel = 'nível moderado a alto de estresse'
    } else if (finalScore > 30) {
      stressLevel = 'nível muito alto de estresse'
    }

    setFinalScore(finalScore)
    setStressLevel(stressLevel)
  }

  return (
    <div className="bg-[url('/assets/Sprinkle.svg')]">
      <NavBar />
      <div className="glass m-4 flex flex-col items-center justify-center p-8 sm:m-24 sm:p-24">
        <h1 className="mb-6 text-3xl font-bold">Teste de Estresse</h1>
        <p className="mb-2 text-2xl font-bold sm:w-[100%]">
          Por favor, responda às seguintes perguntas pensando em como você tem
          se sentido durante o mês passado, usando a seguinte escala:
        </p>
        <p className="mb-6 text-xl font-bold sm:w-[100%]">
          0 = Nunca, 1 = Quase Nunca, 2 = Às Vezes, 3 = Bastante Frequentemente,
          4 = Muito Frequentemente.
        </p>
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-3 text-xl font-semibold">{question}</h2>
              <div>
                {[0, 1, 2, 3, 4].map((value) => (
                  <label key={value} className="mx-2 inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={value}
                      onChange={(e) => handleSelection(index, e.target.value)}
                      className="mr-2"
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Calcular Nível de Estresse
          </button>
        </form>

        {/* Condicionalmente exibir a pontuação e nível de estresse */}
        {finalScore !== null && (
          <div className="mb-6 mt-6 rounded bg-gray-200 p-4 text-center">
            <h3 className="text-2xl font-bold">Resultado:</h3>
            <p className="text-xl">Sua pontuação é {finalScore}.</p>
            <p className="text-xl">Você tem {stressLevel}.</p>
          </div>
        )}

        <p className="mb-6 sm:w-[50%]">
          Dessa forma, a pontuação total representará seu estresse geral, com
          pontuações mais altas representando níveis mais altos de estresse. A
          pessoa média obtém pontuação 16 neste teste, o que indica que ela está
          passando por pouco ou algum estresse. Se sua pontuação for menor que
          16, você terá relativamente pouco estresse em comparação à média das
          pessoas. Se sua pontuação estiver entre 20 e 30, você tem níveis de
          estresse moderados a altos. Se sua pontuação for acima de 30, você
          terá níveis muito altos de estresse. Se você pontuou mais de 20, é
          recomendado que você procure ajuda para gerenciamento de estresse.
        </p>
        <p className="mt-6 sm:w-[50%]">
          Fonte:{' '}
          <a
            href="https://www.isma-us.org/stress-test"
            target="_blank"
            className="text-blue-600 underline"
          >
            ISMA - International Stress Management Association
          </a>
        </p>
        <p className="mb-6 sm:w-[50%]">
          Este teste foi originalmente desenvolvido e publicado pela{' '}
          <a
            href="https://www.isma-us.org"
            target="_blank"
            className="text-blue-600 underline"
          >
            ISMA
          </a>
          . Ele ajuda a identificar níveis de estresse com base em respostas
          sobre sentimentos e reações nas últimas semanas.
        </p>
      </div>
      <NinethSection />
    </div>
  )
}
