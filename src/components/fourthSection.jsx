import AnimatedScrollingUp from './subs/scrollUp'
import Title from './subs/title'

export default function fourthSection() {
  const CardData = [
    {
      img: 'dr.jpg',
      title: 'Artrite reumatoide',
      para: 'Tratamentos para reduzir a inflamação nas articulações, aliviando a dor e melhorando a mobilidade.',
    },
    {
      img: 'dr.jpg',
      title: 'Artrose',
      para: 'Tratamentos para aliviar a dor, melhorar a função articular e retardar o desgaste cartilaginoso.',
    },
    {
      img: 'dr.jpg',
      title: 'Lúpus',
      para: 'Tratamentos para controlar sintomas variados, reduzindo inflamação e minimizando impactos nas articulações, pele e órgãos internos.',
    },
    {
      img: 'dr.jpg',
      title: 'fibromialgia',
      para: 'Tratamentos para gerenciar dor generalizada, melhorar o sono e abordar aspectos emocionais.',
    },
    {
      img: 'dr.jpg',
      title: 'Osteoporose',
      para: 'Tratamentos para fortalecer ossos, prevenir fraturas e melhorar densidade óssea.',
    },
    {
      img: 'dr.jpg',
      title: 'reumatismo',
      para: 'Tratamentos abrangentes para aliviar dor, reduzir inflamação e preservar função articular.',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 sm:h-[80vh]">
      <Title title="Tratamentos." color="#E59251" />
      <AnimatedScrollingUp className={'w-full sm:grid sm:grid-cols-3'}>
        {CardData.map((CardItem) => (
          <div
            key={CardItem.title}
            className="glass2 flex flex-row items-center gap-2 p-0"
          >
            <div>
              <img
                src="./assets/dr.jpg"
                alt=""
                className="h-[100px] w-full rounded-[10px] object-cover object-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[19.2px] font-semibold">{CardItem.title}</h2>
              <p className="text-[13.33px]">{CardItem.para}</p>
            </div>
          </div>
        ))}
      </AnimatedScrollingUp>
    </div>
  )
}
