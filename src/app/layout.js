import './globals.css'

export const metadata = {
  title: 'Dr. André Gama',
  description:
    'página pessoal do fisioterapeuta e idealizador da massagem expressa de combate ao stress.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dr. André Gama</title>
        <meta
          name="description"
          content="página pessoal do fisioterapeuta e idealizador da massagem expressa de combate ao stress."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
