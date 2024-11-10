import { Footer } from './components/footer/footer.tsx'
import { Header } from './components/header/header.tsx'
import { MainContent } from './components/mainContent/mainContent.tsx'

import GlobalStyle from './GlobalStyle.tsx'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}
