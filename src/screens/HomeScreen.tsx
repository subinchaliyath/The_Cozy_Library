import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Book from '../components/Book'
import { mobile } from '../styles/media-queries'
import request from '../api'
import AddBookForm from '../components/AddBookForm'
import Modal from '../components/Modal'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { brand } from '../styles/colors'

const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  ${mobile} {
    flex-direction: column;
  }
`
const AddButton = styled.button`
  background: ${brand};
  margin: 1rem 0;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  font-weight: 700;
  display: block;
  margin-left: auto;
  text-transform: uppercase;
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
      <AddButton onClick={() => setShowAddBook(true)}>Add Book</AddButton>
      {showAddBook && (
        <Modal>
          <AddBookForm setShowAddBook={setShowAddBook} />
        </Modal>
      )}
      <Section>
        {books?.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </Section>
    </>
  )
}

export default HomeScreen
