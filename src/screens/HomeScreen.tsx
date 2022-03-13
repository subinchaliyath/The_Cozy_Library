import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Book from '../components/Book'
import { mobile } from '../styles/media-queries'
import request from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../state/actions'

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
  useSelector(state => console.log(state))

  const dispatch = useDispatch()
  useEffect(() => {
    void (async () => {
      try {
        const { data } = await request.get<Book[]>('/data')
        setBooks(data)
      } catch (error: unknown) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    dispatch(getUserDetails())
  }, [dispatch])
  return (
    <>
      <Section>
        {books?.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </Section>
    </>
  )
}

export default HomeScreen
