import AnimatedScrollingRight from './subs/scrollRight'

export default function FirstSection() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-evenly p-4 sm:flex-row">
      <AnimatedScrollingRight
        className={
          'flex h-[100%] w-full flex-col items-start justify-center gap-4 leading-loose sm:w-[51,77%]'
        }
      >
        <h2 className="flex flex-col text-[19.2px] font-medium leading-7 text-[#404040]">
          <b className="text-[#404040]">Fisioterapeuta e Gestão do Estresse.</b>
        </h2>
        <h2 className="text-[25px] font-medium leading-[1.2em] text-[#404040] sm:text-[27.65px]">
          Alívio de dores musculares, tensões acumuladas e fadiga persistente.
          <b className="text-[#E59251]">
            Transformando desafios em bem-estar e qualidade de vida.
          </b>
        </h2>
        <button className="btn-agend2 animate-bounce">agende agora</button>
      </AnimatedScrollingRight>
      <div>
        <img src="./assets/andre.png" alt="" />
      </div>
    </div>
  )
}
