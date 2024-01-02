import React, { useEffect } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { json, useLocation, useNavigate } from 'react-router-dom'
import { setProfile } from '../../redux/modelSlice'
import { setAuth } from '../../redux/authSlice'
import { inc } from '../../redux/profileSlice'

function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const model = useSelector((state) => state.model)
  const auth = useSelector((state) => state.auth)

  const navigate = useNavigate()

  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const id = params.get('id')

  async function getUser(Id) {
    
    const get = await fetch('http://localhost:2000/user/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: Id
      })
    })
    
    const json = await get.json()

    return json
  }

  useEffect(() => {
    async function tokenSet() {
      // const set = await fetch('http://localhost:2000/user/set_token', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     key: name
      //   })
      // })
      // const set = await axios.post('http://localhost:2000/user/set_token', {withCredentails: true}, {
      //   key: name
      // })

      console.log(auth, document.cookie)
      

      if(auth.isLogin) {
        const data = await getUser(id)
        
        dispatch(inc(data.data))
      } else if(document.cookie){

        console.log('herer')

        const token = document.cookie.split('=')[1]

        const get = await fetch('http://localhost:2000/user/auth?token=' + token)
        const json = await get.json()

        const data = await getUser(json)


      } else {
        navigate('/')
      }
    }
    
    tokenSet()
  }, [model])
  
  return (
    <div className='mainProfile'>
        <div className="p1">
            <div className="image">
              <img src={'http://localhost:2000/images/' + profile.image} alt="" />
            </div>
            <h3>{profile.name}</h3>
            <label>{profile.email}</label>
            {/* <label htmlFor="">{profile.email}</label> */}
            {/* <div className="prof-details">
                <div className="inn post">
                  <h2>12</h2>
                  <label htmlFor="">Posts</label>
                </div>
                <div className="inn follow">
                <h2>12</h2>
                  <label htmlFor="">Posts</label>
                </div>
                <div className="inn likes">
                <h2>12</h2>
                  <label htmlFor="">Posts</label>
                </div>
            </div> */}
            <button onClick={() => {
              dispatch(setProfile())
            }}>Edit Profile</button>
            <button onClick={ async() => {
              const clear = await fetch('http://localhost:2000/user/logout', {credentials: 'include'})
              dispatch(setAuth(''))
              navigate('/')
            }}>Logout</button>
        </div>
        {/* <div className="p2">
            <div className="banner">

            </div>
        </div> */}
    </div>
  )
}

export default Profile