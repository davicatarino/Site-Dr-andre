// pages/index.jsx
import AnimatedScrollingFade from './subs/scrollFade'
import Title from './subs/title'

export default function ThirdSection() {
  return (
    <AnimatedScrollingFade
      className={
        'flex flex-col items-center justify-center gap-2 p-4 sm:h-[100vh] sm:flex-row'
      }
    >
      <div className="glass flex h-[100%] flex-col items-center justify-center gap-8 p-4 sm:w-[90%]">
        <Title title="Meu trabalho." color="#E59251" />
        <div className="text-[19.2px]">
          Aqui no consultório, entendo as lutas diárias enfrentadas por aqueles
          que vivem com{' '}
          <b className="underline">dores que parecem nunca dar trégua</b>, seja
          nas articulações, na coluna ou por todo o corpo. Sei como é começar o
          dia já lutando contra a rigidez e carregar o peso do cansaço que não
          desaparece, mesmo após um descanso adequado.
        </div>
        <div className="text-[19.2px]">
          Meu compromisso é{' '}
          <b className="underline">ir além do alívio temporário</b>, mergulhando
          fundo para encontrar e combater a raiz de seu desconforto. Com
          empatia, escuta ativa e tratamentos baseados em evidências, me dedico
          a oferecer soluções eficazes que permitem a você retomar as rédeas da
          sua vida, reduzindo significativamente a dor e as limitações impostas
          por essas condições.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="./assets/dr.jpg"
          className="h-full w-full rounded-br-full rounded-tl-full"
          alt=""
        />
      </div>
    </AnimatedScrollingFade>
  )
}
