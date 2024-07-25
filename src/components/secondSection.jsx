import AnimatedScrollingUp from './subs/scrollUp'

export default function SecondSection() {
  const CardData = [
    {
      img: 'assist.png',
      title: 'atendimento personalizado',
      para: 'Acompanhamento individualizado para suas necessidades específicas, garantindo um plano de tratamento eficaz e adaptado ao seu estilo de vida.',
    },
    {
      img: 'med.png',
      title: 'Redução do estresse',
      para: ' Técnicas especializadas para transformar o estresse em um aliado, promovendo bem-estar e resiliência através da Massagem Expressa de Combate ao Stress (MECS).',
    },
    {
      img: 'arv.png',
      title: 'Abordagem Holística',
      para: 'Integração de terapias manuais, acupuntura e fitoterapia para promover uma saúde completa, abordando corpo e mente de forma harmoniosa.',
    },
    {
      img: 'meda.png',
      title: ' experiencia e confiabilidade',
      para: 'Profissional com vasta experiência e conhecimento, dedicado a oferecer soluções inovadoras e eficazes para a promoção da saúde e qualidade de vida.',
    },
  ]
  return (
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
          <img src={`./assets/${CardItem.img}`} className="w-[40%]" alt="" />
          <h2 className="flex flex-col text-[19.2px] font-semibold leading-7 text-[#404040]">
            {CardItem.title}
          </h2>
          <p className="text-base text-[#404040]">{CardItem.para}</p>
        </div>
      ))}
    </AnimatedScrollingUp>
  )
}
