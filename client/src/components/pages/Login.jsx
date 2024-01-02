import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import { setAdminAuth } from '../../redux/adminAuthSlice'
import './Login.css'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')

  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {

    // console.log(token)
    async function response() {

      if(token !== undefined) {
        const response = await axios.get("http://localhost:2000/user/auth?token=" + token)
        const data = response.data

        navigate('/profile?id=' + data.id)
      }
    }

    response()
    
    if(auth.isLogin) {
      navigate('/profile?id=' + auth.id)
    }
  },[])

  const input = {
    username: username,
    password: password
  }

  async function login() {
    const request = await axios.post('http://localhost:2000/user/login', input, {withCredentials: true})

    if(request.data.msg === 'no_user') {
      return 'no_user'
    } else if(request.data.msg === 'error_auth') {
      return {msg: 'error_auth', data: request.data.data}
    } else {
      dispatch(setAuth(request.data.id))
      navigate('/profile?id=' + request.data.id)
    }
  }

  return (
    <div className='mainLogin'>
    <div className="part1">
      <h1>Sign in to Account</h1>
      <input type="email" onChange={(e) => {
        setUsername(e.target.value)
      }} placeholder='Email' />
      <input type="password" onChange={(e) => {
        setPassword(e.target.value)
      }} placeholder='Password' />
      
      <button onClick={async() => {
        const res = await login()
          // setUsername('')
          // setPassword('')
        if(res === 'no_user') {
          // navigate('/profile?id=' + res)
          alert('no user found')
        } else {
          // console.log(res)
          if(res.data.length > 1) {
            alert('invalid email and password')
          } else if(res.data[0] == 'username') {
            alert('invalid username')
          } else {
            alert('invalid password')
          }
        }
      }}>
        {/* <Link to='/profile'>Sign Up</Link> */}
        Sign In
      </button>
      <a href="/admin_login">
        Sign in as Admin
      </a>
    </div>
    <div className="part2">
      <h1>Hello, User</h1>
      <label htmlFor="">
        Fill up personal info
        and start your journey.
      </label>
      <button>
        <Link to='/create/profile'>Sign Up</Link>
      </button>
    </div>
  </div>
  )
}

function adminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.admin_auth)

  useEffect(() => {
    if(auth) {
      navigate('/admin_panel')
    }
  }, [])

  async function authAdmin() {
    if(email !== '' && password !== '') {
      const get = await fetch('http://localhost:2000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const json = await get.json()

      if(json.res === 'error') {
        alert('invalid email or password')
      } else {
        if(json.res) {
          dispatch(setAdminAuth())
          navigate('/admin_panel')
        } else {
          alert('password or email are incorrect')
        }
        } 
      } else if(email === '' && password === '') {
        alert('please enter the email and password')
      } else if(password === '') {
        alert('please enter the password')
      } else if(email === '') {
        alert('please enter the email')
      }
  }
  // console.log(email, password)

  return (
    <div className='mainLogin'>
    <div className="part1">
      <h1>Sign in to Account</h1>
      <input type="text" onChange={(e) => {
        setEmail(e.target.value)
      }} placeholder='Email' />
      <input type="text" onChange={(e) => {
        setPassword(e.target.value)
      }} placeholder='Password' />
      <button onClick={() => {
        authAdmin()
      }} style={{'backgroundColor': '#0174BE'}}>
        {/* <Link to='/admin_panel'>Sign In</Link> */}
        Sign In
      </button>
      <a href="/">
        Sign in as User
      </a>
    </div>
    <div className="part2" style={{
      'background-color':'#0174BE'
    }}>
      <h1>Hello, Admin</h1>
      <label htmlFor="">
        Fill up personal info
        and start your journey.
      </label>
    </div>
  </div>
  )
}

export default Login
export { adminLogin }