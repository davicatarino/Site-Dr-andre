import AnimatedScrollingRight from './subs/scrollRight'
import Title from './subs/title'

export default function SixthSection() {
  const CardData = [
    {
      title: 'Suporte Sempre Disponível',
      para: 'Compreendo a importância do acompanhamento contínuo. Por isso, ofereço minha disponibilidade via WhatsApp para qualquer dúvida ou emergência, pois sei que sua dor não pode esperar.',
    },
    {
      title: 'Acolhimento',
      para: 'Aqui você é ouvido e respeitado. Cada dor e preocupação são importantes, e juntos, decidimos o melhor caminho para o seu tratamento.',
    },
    {
      title: 'Experiência em Reumatologia e Dor',
      para: 'Com 16 anos de experiência, Dra. Débora traz profundidade em tratar diversas condições reumáticas, apoiada por uma sólida base acadêmica e prática.',
    },
    {
      title: 'Atualização constante',
      para: 'Dra. Débora se mantém na vanguarda da Reumatologia, participando de todos os congressos nacionais para trazer o que há de mais novo e eficaz para o seu cuidado.',
    },
  ]
  return (
    <div className="flex flex-col gap-2 p-4 sm:flex-row">
      <div className="flex h-[100%] flex-col gap-5 sm:w-[80%]">
        <div className="flex flex-col items-center justify-center">
          <Title title="MECS." color="#000" />
          <b>Massagem expressa contra estresse</b>
        </div>
        <AnimatedScrollingRight className={'flex flex-col gap-4'}>
          {CardData.map((CardItem) => (
            <div
              key={CardItem.title}
              className="flex flex-col items-center justify-center rounded-3xl bg-[#dcdef9] p-4 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-[#E59251]">
                {CardItem.title}
              </h2>
              <p>{CardItem.para}</p>
            </div>
          ))}
        </AnimatedScrollingRight>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="./assets/dr.jpg"
          className="h-full w-[80%] rounded-2xl"
          alt=""
        />
      </div>
    </div>
  )
}
