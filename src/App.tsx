import { Card } from './components/card.tsx'
import { Footer } from './components/footer.tsx'
import { Header } from './components/header.tsx'
import { MainContent } from './components/mainContent.tsx'
import GlobalStyle from './GlobalStyle.tsx'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Card />
        <Card />
      </MainContent>
      <Footer />
    </>
  )
}
