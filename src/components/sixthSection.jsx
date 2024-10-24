import AnimatedScrollingRight from './subs/scrollRight'
import Title from './subs/title'

export default function SixthSection() {
  const CardData = [
    {
      title: 'Uma Técnica Simples, Eficaz e Transformadora',
      para: 'A MECS foi criada para ser uma solução rápida e acessível de combate ao estresse. Em apenas 15 minutos, você poderá utilizar a MECS para promover relaxamento, aliviar tensões e melhorar o bem-estar de quem está ao seu redor.',
    },
    {
      title: 'Benefícios Comprovados',
      para: 'O Curso de Massagem Expressa ensina métodos que combinam o melhor das tradições terapêuticas ocidentais e orientais, promovendo alívio imediato das tensões e prevenção de problemas de saúde associados ao estresse.',
    },
    {
      title: 'Acesso Fácil e Conteúdo Atualizado',
      para: 'O aprendizado é 100% online e permite que você faça no seu ritmo. Com vídeos, materiais complementares e suporte contínuo, você terá todas as ferramentas necessárias para dominar a técnica e aplicá-la em seu dia a dia, tornando-o melhor.',
    },
    {
      title: 'Uma Oportunidade para Todos',
      para: 'A MECS é indicada tanto para quem busca melhorar sua própria qualidade de vida quanto para quem deseja ajudar amigos, familiares ou até mesmo profissionais que desejam ampliar seu conhecimento na área da saúde e bem-estar.',
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-4 sm:flex-row">
      <div className="flex h-[100%] flex-col gap-5 sm:w-[130%]">
        <div className="flex flex-col items-center justify-center">
          <Title title="MECS" color="#000" />
          <b>
            Massagem Expressa de Combate ao{' '}
            <span className="italic">Stress</span>
          </b>
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
          src="./assets/massageImage.jpeg"
          className="h-[50%] w-[100%] rounded-2xl"
          alt=""
        />
      </div>
    </div>
  )
}
