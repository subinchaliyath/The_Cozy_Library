import { render, screen } from '@testing-library/react'
import Book from '../components/Book'

const data = {
  name: 'The Psychology of Money ',
  author: {
    name: 'morgan housel',
  },
  img: 'https://rukminim1.flixcart.com/image/612/612/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70',
  price: 175,
  id: '1',
}

it('renders book card with data', () => {
  render(<Book book={data} />)
  const name = screen.getByRole('heading', {
    name: /the psychology of money/i,
  })
  expect(name).toBeInTheDocument()
})
