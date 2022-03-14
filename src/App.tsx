import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Layout from './components/Layout'
import HomeScreen from './screens/HomeScreen'
import PageNotFound from './screens/PageNotFound'
import ProfileScreen from './screens/ProfileScreen'
import { getUserDetails } from './state/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDetails())
  }, [dispatch])
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomeScreen />
              </Layout>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Layout>
                <ProfileScreen />
              </Layout>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
