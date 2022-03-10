import { useEffect, useState } from 'react'

import request from '../api'

type User = {
  id: number
  name: string
  email: string
}

const ProfileScreen = () => {
  const [user, setUser] = useState<User>({ id: 0, name: '', email: '' })
  const [disabled, setDisabled] = useState(true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name
    setUser({ ...user, [name]: e.target.value })
  }
  useEffect(() => {
    void (async () => {
      try {
        const { data } = await request.get<User>('/user')
        setUser(data)
      } catch (error: unknown) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <>
      {user.email ? (
        <>
          <form>
            <input
              type="text"
              name="name"
              value={user.name}
              disabled={disabled}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              disabled={disabled}
              onChange={handleChange}
            />
          </form>
          <button onClick={() => setDisabled(false)}> Edit</button>
          <button onClick={() => setDisabled(true)}> Update</button>
        </>
      ) : null}
    </>
  )
}

export default ProfileScreen
