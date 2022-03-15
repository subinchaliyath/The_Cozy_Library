import { Formik, Field, Form, ErrorMessage } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'
import { brand, warning, dark, light } from '../styles/colors'
import closeIcon from '../assets/images/close.svg'
import editIcon from '../assets/images/edit.svg'
import { UserDetails } from '../models'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserDetails } from '../state/actions/userActions'

type ContainerProps = {
  active: boolean
}
type ProfileProps = {
  userData: UserDetails
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
    width: 100%;
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
  margin: 1rem 3rem 3rem;
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
  &:hover {
    background: ${dark};
    color: ${light};
  }
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

const ProfileForm = ({ userData }: ProfileProps) => {
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  return (
    <FormContainer>
      <CloseIcon
        src={edit ? closeIcon : editIcon}
        alt="close"
        onClick={() => setEdit(!edit)}
      />
      <Title>Personal Information </Title>
      <Formik
        initialValues={{
          name: userData.name,
          email: userData.email,
          address: userData.address || '',
          mobile: userData.mobile,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateUserDetails({ ...values, id: userData.id }))
          setEdit(false)
          setSubmitting(false)
        }}
      >
        {({ values }) => (
          <Form>
            <Container active={Boolean(values.name)}>
              <Field name="name" id="name" type="text" disabled={!edit} />
              <label htmlFor="name">Name</label>
              <p>
                <ErrorMessage name="name" />
              </p>
            </Container>
            <Container active={Boolean(values.email)}>
              <Field name="email" id="email" type="text" disabled={true} />
              <label htmlFor="email">Email</label>
              <p>
                <ErrorMessage name="email" />
              </p>
            </Container>
            <Container active={Boolean(values.mobile)}>
              <Field name="mobile" id="mobile" type="number" disabled={!edit} />
              <label htmlFor="mobile">Mobile</label>
              <p>
                <ErrorMessage name="mobile" />
              </p>
            </Container>
            <Container active={Boolean(values.address)}>
              <Field name="address" id="address" type="text" disabled={!edit} />
              <label htmlFor="address">Address</label>
              <p>
                <ErrorMessage name="address" />
              </p>
            </Container>
            {edit && <Button type="submit">Submit</Button>}
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}
export default ProfileForm
