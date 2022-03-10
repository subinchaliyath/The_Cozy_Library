import styled from '@emotion/styled'
import { dark, lightdark } from '../styles/colors'

const Container = styled.div`
  width: 330px;
  height: 450px;
  padding: 24px;
  border-radius: 15px;
  background-color: ${lightdark};
`
const Figure = styled.figure`
  width: 100%;
  height: 276px;
  background-image: url('https://rukminim1.flixcart.com/image/416/416/kzn17680/regionalbooks/z/q/v/rich-dad-poor-dad-english-paperback-english-original-imagbhuvraunzgva.jpeg?q=70');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 7px;
  margin-bottom: 24px;
  position: relative;
`
const Title = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 17px;
    font-weight: 600;
    border-bottom: 0.1px solid ${dark};
  }
`
const Author = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 17px 0;
  img {
    width: 40px;
    height: 40px;
    border: 1px solid white;
    margin-right: 15px;
    border-radius: 50%;
  }
  p {
    font-weight: 600;
  }
`

type BookPros = {
  book: {
    id: number
    name: string
    author: string
    img: string
  }
}

const Book = ({ book }: BookPros) => {
  return (
    <Container>
      <Figure />
      <Title>
        <h1>{book.name}</h1>
      </Title>
      <Author>
        <img
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIj5ZB8aLmZqqVk4QSMxi4Axm80Lja4JtTg&usqp=CAU'
          }
          alt="author"
        />
        <p>{book.author}</p>
      </Author>
    </Container>
  )
}

export default Book
