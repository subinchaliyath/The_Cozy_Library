import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { addBook } from '../state/actions'

const AddBookForm = () => {
  const dispatch = useDispatch()

  return (
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
      }}
    >
      <Form>
        <label htmlFor="bookName">Book Name</label>
        <Field name="bookName" type="text" />
        <ErrorMessage name="bookName" />

        <label htmlFor="author">Author</label>
        <Field name="author" type="text" />
        <ErrorMessage name="author" />

        <label htmlFor="imgURL">Image URL</label>
        <Field name="imgURL" type="text" />
        <ErrorMessage name="imgURL" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
export default AddBookForm
