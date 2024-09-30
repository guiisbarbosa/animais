import { Card } from './components/card.tsx'
import { Header } from './components/header.tsx'
import GlobalStyle from './GlobalStyle.tsx'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Card />
    </>
  )
}
