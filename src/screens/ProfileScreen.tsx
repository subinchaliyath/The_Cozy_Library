import ProfileForm from '../components/ProfileForm'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { UsersState } from '../models'

const ProfileScreen = () => {
  const { data, error, loading }: UsersState = useTypedSelector(
    state => state.userDetails,
  )

  return (
    <>
      {data && <ProfileForm userData={data} />}
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
    </>
  )
}

export default ProfileScreen
