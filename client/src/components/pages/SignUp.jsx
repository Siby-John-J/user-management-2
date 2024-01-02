import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './Signup.css'
import office from '../../../public/images/office.jpg'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpass, setRpass] = useState('')
  const { id } = useParams()

  const navigate = useNavigate()

  const tags = document.getElementsByTagName('input')

  async function createUser() {
    const res = await fetch('http://localhost:2000/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        rpass: rpass
      })
    })

    const json = await res.json()

    if(json.data === undefined) {
      if(password === rpass) {
        tags[3].style.borderBottom = '2px solid blue'
        tags[3].style.color = 'black'
        tags[3].placeholder = ''
        
        // console.log(json)

        alert(json.msg)

        if(id === 'profile') {
          navigate('/')
        } else {
          navigate('/' + id)
        }
      } else {
        tags[3].style.borderBottom = '2px solid red'
        tags[3].style.color = 'red'
        tags[3].placeholder = 'invalid input'
      }
    } else {
      for(let i = 0; i < 3; i++) {
        if(json.data.includes(tags[i].className)) {
          tags[i].style.borderBottom = '2px solid red'
          tags[i].style.color = 'red'
          tags[i].placeholder = 'invalid input'
        }
      }
  
     if(rpass === '' || rpass !== password) {
        tags[3].style.borderBottom = '2px solid red'
        tags[3].style.color = 'red'
        tags[3].value = 'enter the same password'

        tags[2].style.borderBottom = '2px solid red'
        tags[2].style.color = 'red'
        tags[2].value = 'enter the same password'
      }
    }
    }

  
  return (
    <div className='signupMain'>
        <div className="part-1">
            <h1>Sign up</h1>
            <input type="text" onClick={(e) => {
              const match = /border-bottom:.*?(\w+);/.exec(e.target.style.cssText)

              if(match[1] === 'red') {
                e.target.value = ''
              }
              setName('')
            }} className='name' onChange={(e) => setName(e.target.value)} placeholder='Your name' />
            <input type="text" onClick={(e) => {
              const match = /border-bottom:.*?(\w+);/.exec(e.target.style.cssText)

              if(match[1] === 'red') {
                e.target.value = ''
              }
              setEmail('')
            }} className='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="text" onClick={(e) => {
              const match = /border-bottom:.*?(\w+);/.exec(e.target.style.cssText)

              if(match[1] === 'red') {
                e.target.value = ''
              }
              setPassword('')
            }} className='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <input type="text" onClick={(e) => {
              const match = /border-bottom:.*?(\w+);/.exec(e.target.style.cssText)

              if(password === rpass) {
                // alert('same pass')
              } else {
                if(match[1] === 'red') {
                  e.target.value = ''
                  setRpass('')
                }
              }
            }} className='re_pass' onChange={(e) => setRpass(e.target.value)} placeholder='Repeat Password' />
            <button onClick={() => {


            for(let i = 0; i < 3; i++) {
              tags[i].style.borderBottom = '2px solid blue'
              tags[i].style.color = 'black'
              tags[i].placeholder = tags[i].className
            }
              createUser()
            }}>
              Register
            </button>
            {/* {
              checkForEmpty() ? <button onClick={() => {
                createUser()
              }}>
              <Link to={'/'}>Register</Link>
              </button> :
              <button disabled>
                Register
              </button>
            } */}

        </div>
        <div className="part-2">
            <img src={office} alt="" />
        </div>
    </div>
  )
}

export default SignUp