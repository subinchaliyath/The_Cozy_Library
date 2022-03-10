import Footer from './Footer'
import Header from './Header'
import styled from '@emotion/styled'
import { largeScreen } from '../styles/media-queries'

const Main = styled.main`
  min-height: 88vh;
  max-width: ${largeScreen};
  margin: 0 auto;
  padding: 15px;
`
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
