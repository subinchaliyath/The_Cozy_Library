import styled from '@emotion/styled'
import { BookDetails } from '../models'
import { dark, lightdark } from '../styles/colors'
import Author from '../assets/images/author.svg'

type FigureProps = {
  bookImg: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  padding: 24px;
  border-radius: 15px;
  background-color: ${lightdark};
`
const Figure = styled.figure<FigureProps>`
  width: 100%;
  height: 230px;
  background-image: ${({ bookImg }) => `url('${bookImg}')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 7px;
  position: relative;
`
const Title = styled.h2`
  width: 100%;
  font-weight: 600;
  padding-bottom: 0.6rem;
  border-bottom: 0.1px solid ${dark};
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 15px 0;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  p {
    text-transform: capitalize;
    padding-bottom: 0.4rem;
  }
`

type BookPros = {
  book: BookDetails
}

const Book = ({ book }: BookPros) => {
  return (
    <Container>
      <Figure bookImg={book.img} />
      <Title>{book.name}</Title>
      <Footer>
        <p>₹{book.price}</p>
        <img src={Author} alt="author" />
        <p>{book.author.name}</p>
      </Footer>
    </Container>
  )
}

export default Book
