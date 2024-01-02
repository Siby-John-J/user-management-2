// import './App.css'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile'
import { adminLogin } from './components/pages/Login'
import AdminPanel from './components/pages/admin/AdminPanel'
import EditUser from './components/pages/EditUser'

function App() {

  return (
    <>
        <Routes>
          {/* <Navigate /> */}
          <Route exact path='/' Component={Login} />
          <Route path='/create/:id' Component={SignUp} />
          <Route path='/profile' Component={Profile} />
          <Route path='/admin_login' Component={adminLogin} />
          <Route path='/admin_panel' Component={AdminPanel} />
        </Routes>
        <EditUser />
      {/* <Login /> */}
    </>
  )
}

export default App
