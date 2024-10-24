import AnimatedScrollingRight from './subs/scrollRight'

export default function FirstSection() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-evenly p-4 sm:flex-row">
      <AnimatedScrollingRight
        className={
          'mb-4 mt-4 flex h-full w-full flex-col items-center justify-center gap-4 leading-loose sm:mb-24 sm:mt-0 sm:w-[51,77%] sm:items-start'
        }
      >
        <h2 className="flex flex-col text-[16.2px] font-medium leading-7 text-[#404040]">
          <b className="text-[#404040]">Fisioterapeuta e Gestão do Estresse.</b>
        </h2>
        <h2 className="text-center text-[22px] font-medium leading-[1.2em] text-[#404040] sm:text-start sm:text-[27.65px]">
          <b className="text-[#E59251]">
            Transformando desafios em bem-estar e qualidade de vida.
          </b>{' '}
          Alívio de dores, tensões osteomusculares, doenças, distúrbios e agudos
          crônicos.
        </h2>
        {/*  <button className="btn-agend2 animate-bounce">agende agora</button> */}
      </AnimatedScrollingRight>

      <img
        src="./assets/corpo.png"
        className="mt-6 w-full rounded-xl sm:w-[25%]"
        alt=""
      />
    </div>
  )
}
