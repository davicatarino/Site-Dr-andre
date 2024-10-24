import AnimatedScrollingUp from './subs/scrollUp'
import Title from './subs/title'

export default function SecondSection() {
  const CardData = [
    {
      img: 'logo_azul_r_tñs-removebg-preview.png',
      title: 'Tour no Stress®',
      para: 'Atividades e técnicas de terapias físicas e cognitivas de redução de diestresse (efeito negativo do stress). ',
      weight: 'w-[60%]',
    },
    {
      img: 'Eco_Ergo_Treat_Frontal-removebg-preview.png',
      title: 'Eco Ergo Treat®',
      para: 'Produtos Ergonômicos => Soluções em equipamentos de redução do diestresse e adaptativos para patologias e melhoria de performance laboral.',
      weight: 'w-[160px]',
    },
    {
      img: 'Logo_Vs_fB-removebg-preview.png',

      para: 'Sistemas de gestão pública e privada para redução do diestresse laboral e social. ',
      weight: 'w-[160px]',
    },
    {
      img: 'logo-consciencialismo.jpeg',
      title: 'Consciencialismo',
      para: 'Sistema filosófico que promove compreensão e distresse entre as diversas culturas humanas.',
      weight: 'w-[160px]',
    },
  ]
  return (
    <div>
      <Title title="Outros Projetos" color="#000" />,
      <AnimatedScrollingUp
        className={
          'flex flex-col justify-evenly gap-8 p-4 sm:grid sm:grid-cols-4'
        }
      >
        {CardData.map((CardItem) => (
          <div
            key={CardItem.title}
            className="glass flex h-[100%] flex-col items-center gap-2 p-4 hover:scale-95"
          >
            <img
              src={`./assets/${CardItem.img}`}
              className={`${CardItem.weight} rounded-3xl`}
              alt=""
            />
            <h2 className="flex flex-col text-[19.2px] font-semibold leading-7 text-[#404040]">
              {CardItem.title}
            </h2>
            <p className="text-base text-[#404040]">{CardItem.para}</p>
          </div>
        ))}
      </AnimatedScrollingUp>
    </div>
  )
}
