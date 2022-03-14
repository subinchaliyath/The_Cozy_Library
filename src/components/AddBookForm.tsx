import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import * as Yup from 'yup'
import { addBook } from '../state/actions'
import { brand, warning, dark } from '../styles/colors'
import close from '../assets/images/close.svg'

type ContainerProps = {
  active: boolean
}
type AddBookProps = {
  setShowAddBook: (a: boolean) => void
}
const Container = styled.div<ContainerProps>`
  position: relative;
  margin-top: 1rem;
  input {
    border: none;
    background: #fafafa;
    border-radius: 0.5rem;
    padding: 1.5rem 0.75rem 0.5rem;
    box-shadow: inset 0 0 0.5rem rgba(26, 26, 44, 0.05);
    outline: none;
    width: 20rem;
    font-weight: 700;
    transition: all 0.2s;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 1rem;
    opacity: 0.75;
    transition: all 0.2s;
    color: #1a1a2c;
  }
  p {
    color: ${warning};
  }
  ${({ active }) =>
    active &&
    `label{left: 0.75rem;
    top: 0.4rem;
    font-size: 0.85rem;
    opacity: 0.25;}
    input{
    font-size: 1.3rem;

    }
    `}

  input:focus + label,
  select.active + label,
  select:focus + label {
    left: 0.75rem;
    top: 0.4rem;
    font-size: 0.65rem;
    opacity: 0.25;
  }
`
const FormContainer = styled.div`
  position: relative;
  margin: 5rem 3rem 3rem;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
`
const Button = styled.button`
  background: ${brand};
  margin-top: 1rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  padding: 1rem 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`
const CloseIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
`
const Title = styled.h3`
  color: ${dark};
  text-align: center;
`

const AddBookForm = ({ setShowAddBook }: AddBookProps) => {
  const dispatch = useDispatch()

  return (
    <FormContainer>
      <CloseIcon
        src={close}
        alt="close"
        onClick={() => setShowAddBook(false)}
      />
      <Title>Add Book</Title>
      <Formik
        initialValues={{ bookName: '', author: '', imgURL: '' }}
        validationSchema={Yup.object({
          bookName: Yup.string().required('Required'),
          author: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          imgURL: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { bookName, author, imgURL } = values
          dispatch(addBook({ name: bookName, author, img: imgURL }))
          setSubmitting(false)
          setShowAddBook(false)
        }}
      >
        {({ values }) => (
          <Form>
            <Container active={Boolean(values.bookName)}>
              <Field name="bookName" id="bookName" type="text" />
              <label htmlFor="bookName">Book Name</label>
              <p>
                <ErrorMessage name="bookName" />
              </p>
            </Container>
            <Container active={Boolean(values.author)}>
              <Field name="author" id="author" type="text" />
              <label htmlFor="author">Author</label>
              <p>
                <ErrorMessage name="author" />
              </p>
            </Container>
            <Container active={Boolean(values.imgURL)}>
              <Field name="imgURL" id="imgURL" type="text" />
              <label htmlFor="imgURL">Image URL</label>
              <p>
                <ErrorMessage name="imgURL" />
              </p>
            </Container>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}
export default AddBookForm
