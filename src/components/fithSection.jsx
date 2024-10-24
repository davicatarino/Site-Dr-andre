import AnimatedScrollingFade from './subs/scrollFade'
import Title from './subs/title'

export default function FifthSection() {
  return (
    <div>
      <Title title="Breve História da MECS" />
      <AnimatedScrollingFade
        className={
          'grid grid-cols-1 items-center justify-end gap-2 p-4 sm:grid-cols-2'
        }
      >
        <div className="flex flex-col-reverse justify-center gap-4 sm:flex-row">
          {/*  <div className="">
          <img src="./assets/andre.png" alt="Dr. André Gama" />
        </div> */}
          <div className="flex flex-col items-center justify-center gap-6 p-4">
            <div className="flex flex-col items-center justify-center text-[19.2px]">
              Massagem Expressa de Combate ao Stresse (MECS) foi desenvolvida a
              partir de 2003 com o objetivo de criar uma técnica rápida e
              eficiente de massagem para combater o estresse. A massagem é
              aplicada por cima da roupa, em sessões de 15 minutos, foi pensada
              para ser fácil de aprender e ensinar.
              <b>
                {' '}
                O método combina princípios orientais e ocidentais para promover
                bem-estar, melhorar saúde e relacionamentos.
              </b>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="w-[90%] text-[19.2px]">
            <b className="underline"> A MECS é simples e eficaz</b>, criada para
            ser aplicada em qualquer lugar, sem a necessidade de equipamentos
            especiais, apenas com as mãos e um local para o assistido deitar. A
            técnica foi testada e aprovada por muitos assistidos, com um índice
            de 98% de satisfação. Ela oferece alívio imediato do estresse, um
            dos principais fatores de desencadeamento de várias doenças e
            distúrbios, e queixa comum nos consultórios.
          </div>
        </div>
        {/* <div className="p-4">
          <h1 className="mb-4 ml-7 text-4xl font-bold">Resumo</h1>
          <ul className="ml-8 list-disc text-lg font-normal sm:text-[13.33px]">
            <li>Fácil de aprender e aplicar.</li>
            <li>
              Combina técnicas orientais e ocidentais para eficiência máxima.
            </li>
            <li>Alívio do estresse em apenas 15 minutos.</li>
            <li>
              Aplicada por cima da roupa, sem necessidade de equipamentos.
            </li>
          </ul>
        </div> */}
      </AnimatedScrollingFade>
    </div>
  )
}
