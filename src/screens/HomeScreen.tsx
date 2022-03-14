import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Book from '../components/Book'
import { mobile } from '../styles/media-queries'
import request from '../api'
import AddBookForm from '../components/AddBookForm'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  ${mobile} {
    flex-direction: column;
  }
`
type Book = {
  id: number
  name: string
  author: string
  img: string
}

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[] | []>([])
  const [showAddBook, setShowAddBook] = useState(false)
  const { data } = useTypedSelector(state => state.addBook)

  useEffect(() => {
    void (async () => {
      try {
        const { data } = await request.get<Book[]>('/data')
        setBooks(data)
      } catch (error: unknown) {
        console.log(error)
      }
    })()
  }, [data])

  return (
    <>
      <button onClick={() => setShowAddBook(true)}>Add Book</button>
      {showAddBook && <AddBookForm />}
      <Section>
        {books?.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </Section>
    </>
  )
}

export default HomeScreen
