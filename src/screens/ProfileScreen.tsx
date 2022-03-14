import { useState } from 'react'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { UsersState } from '../models'

// type User = {
//   id: number
//   name: string
//   email: string
// }

const ProfileScreen = () => {
  const [disabled, setDisabled] = useState(true)
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const name = e.target.name
  //   setUser({ ...userData, [name]: e.target.value })
  // }
  const {
    data: userData,
    error,
    loading,
  }: UsersState = useTypedSelector(state => state.userDetails)

  return (
    <>
      {userData?.email ? (
        <>
          <form>
            <input
              type="text"
              name="name"
              value={userData.name}
              disabled={disabled}
            />
            <br />
            <input
              type="email"
              name="email"
              value={userData.email}
              disabled={disabled}
            />
          </form>
          <button onClick={() => setDisabled(false)}> Edit</button>
          <button onClick={() => setDisabled(true)}> Update</button>
        </>
      ) : null}
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
    </>
  )
}

export default ProfileScreen
