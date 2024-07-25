import AnimatedScrollingFade from './subs/scrollFade'
import Title from './subs/title'

export default function fifithSection() {
  return (
    <AnimatedScrollingFade
      className={'flex flex-col items-center justify-end gap-2 p-4'}
    >
      <div className="flex flex-col-reverse justify-center gap-4 sm:flex-row">
        <div className="">
          <img src="./assets/andre.png" alt="" />
        </div>
        <div className="glass p-4 sm:w-[50%]">
          <Title title="Dr.André gama." color="#E59251" />

          <div className="flex h-full flex-col items-center justify-center text-[19.2px]">
            Sou Dra. Débora Aguiar, Médica desde 2008, com especialização em
            Reumatologia e Dor.
            <b>
              Meu objetivo é transformar a vida de quem sofre com dores
              incômodas e persistentes.
            </b>{' '}
            Seja nas juntas, na coluna ou pelo corpo todo, entendo o quanto é
            desafiador conviver com a dor que não dá trégua e com a rigidez que
            torna cada amanhecer um obstáculo. Sei também como é enfrentar o
            cansaço que nem o melhor descanso consegue aliviar. Minha missão é
            identificar a causa raiz desses sintomas e oferecer tratamentos que
            realmente fazem a diferença,
            <b>
              resgatando sua qualidade de vida e permitindo que você retome suas
              atividades sem dor.
            </b>
          </div>
        </div>
      </div>
      <div className="glass p-4">
        <div className="w-[90%] text-[19.2px]">
          Meu compromisso é{' '}
          <b className="underline">ir além do alívio temporário </b>,
          mergulhando fundo para encontrar e combater a raiz de seu desconforto.
          Com empatia, escuta ativa e tratamentos baseados em evidências, me
          dedico a oferecer soluções eficazes que permitem a você retomar as
          rédeas da sua vida, reduzindo significativamente a dor e as limitações
          impostas por essas condições.
        </div>
        <ul className="ml-8 list-disc text-base font-normal sm:text-[13.33px]">
          <li>Formada pela Universidade Federal Fluminense em 2008.</li>
          <li>
            Residência em Clínica Médica no Hospital Federal de Bonsucesso, RQE:
            24090.
          </li>
          <li>
            Residência em Reumatologia no Hospital Federal dos Servidores do
            Estado, com título de especialista em 2013, RQE: 24091.
          </li>

          <li>
            Atuação na área de dor pela Associação Médica Brasileira, RQE:
            45809.
          </li>
        </ul>
      </div>
    </AnimatedScrollingFade>
  )
}
