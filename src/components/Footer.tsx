import styled from '@emotion/styled'
import { lightdark } from '../styles/colors'

const FooterContainer = styled.footer`
  p {
    padding: 20px 0;
    text-align: center;
    background-color: ${lightdark};
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Copyright &copy; The Cozy Library</p>
    </FooterContainer>
  )
}

export default Footer
