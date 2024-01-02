import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../redux/searchSlice'
import adminAuthSlice from '../../../redux/adminAuthSlice'
import { setAdminAuth } from '../../../redux/adminAuthSlice'

function Header() {
  const dispatch = useDispatch()
  
  return (
    <div className='adminHeader'>
        <input type="text" onChange={(e) => {
          dispatch(setSearch(e.target.value))
        }} placeholder='search' />
        <button>
            <Link to='/create/admin_panel'>Create User</ Link>
        </button>
        <button onClick={() => {
          dispatch(setAdminAuth())
        }}>
          {/* <Link to='/admin_login'>Log out</ Link> */}
          Log out
        </button>
    </div>
  )
}

export default Header
