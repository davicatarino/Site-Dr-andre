// pages/index.jsx
import AnimatedScrollingFade from './subs/scrollFade'
import Title from './subs/title'

export default function ThirdSection() {
  return (
    <AnimatedScrollingFade
      className={
        'flex flex-col items-center justify-center gap-2 p-4 sm:flex-row'
      }
    >
      <div className="glass flex flex-col items-center justify-center gap-8 p-4 sm:w-[100%]">
        <Title title="Meu Trabalho" />
        <div className="flex flex-col gap-4 text-[19.2px]">
          <p>
            Dr. André Gama é fisioterapeuta especialista em ortopedia,
            acupuntura, fitoterapia, naturopatia, RPG e manipulação articular,
            com mais de 30 anos de experiência ajudando pessoas a melhorar sua
            qualidade de vida, reduzindo dores e combatendo o estresse. Atuando
            em consultórios, clínicas, hospitais, SPRs e na internet. Criador da
            <b> Massagem Expressa de Combate ao Estresse (MECS),</b> onde são
            utiliza técnicas comprovadas para reduzir as tensões
            musculoesqueléticas, promovendo o bem-estar de maneira acessível e
            prática.
          </p>
          <p>
            A <b>MECS</b> é uma iniciativa do <b>Tour no Stress®</b> , projeto
            que oferece práticas corporais para gestão do estresse. Dr. André
            também é responsável pela <b> E²T - Eco Ergo Treat®</b>, que
            desenvolve equipamentos ergonômicos para melhorar a performance e
            reduzir distresse dos pacientes e profissionais com ou sem
            deficiências. É autor do <b>Planejalismo®</b> , um sistema de
            gestão/administração focado na redução do estresse laboral,
            organizacional e sócio-político, e do <b>Consciêncialismo</b> , uma
            forma de equacionamento de conhecimentos que evita o distresse por
            divergências de interpretações da realidade.
          </p>
          <p>
            Seu compromisso é oferecer soluções terapêuticas inovadoras e
            eficazes, combinando abordagens naturais e tecnológicas para
            proporcionar mais saúde e qualidade de vida.
          </p>
        </div>
      </div>
      {/*   <div className="flex items-center justify-center">
        <img
          src="./assets/IMG_7411.JPG"
          className="h-full w-[100%] rounded-br-full rounded-tl-full"
          alt=""
        />
      </div> */}
    </AnimatedScrollingFade>
  )
}
