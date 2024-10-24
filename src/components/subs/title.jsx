export default function Title({ title, color }) {
  return (
    <h1
      className={`text-center text-[47.78px] font-bold leading-[1.2em] text-[${color}]`}
    >
      {title}
    </h1>
  )
}
