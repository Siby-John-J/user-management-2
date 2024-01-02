import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../../../redux/modelSlice'
import { inc } from '../../../redux/profileSlice'
import './UserList.css'

function UserList() {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.search)
  const model = useSelector((state) => state.model)

  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  
  useEffect(() => {
    setData(data.filter(data => {
      return data.name.startsWith(search)
    }))
  }, [search])
  
  useEffect(() => {
    async function getAllUser() {
      const get = await fetch('http://localhost:2000/admin/getall')
      const json = await get.json()
      
      setData(json.data)
    }

    getAllUser()
  },[model])

  async function deleteUser(id) {
    const response = await fetch("http://localhost:2000/admin/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
    
    if(response.ok) {
      setData(prev => prev.filter(user => user._id !== id))
    }
  }

  return (
    <div className='userListMain'>
        {/* <div className='header'>
            <h1 style={{width: '14em', height: '2em'}}>Name</h1>
            <h1 style={{width: '14em', height: '2em'}}>Email</h1>
            <h1 style={{width: '14em', height: '2em'}}>Actions</h1>
        </div> */}
        <div className='data_list'>
            {
              data.map((data) => {
                return (
                  <div className='single_data' style={{textAlign: 'center', height: '3em'}}>
                  <div className='name'>
                    <div className="img">
                      <img src={'http://localhost:2000/images/' + data.image} alt="none" />
                    </div>
                    <label htmlFor="">{data.name}</label>
                  </div>
                  <div className='email_field'>{data.email}</div>
                  <div className='controls'>
                    <button className='edit' onClick={() => {
                      dispatch(setProfile())
                      dispatch(inc(data))
                    }}>edit</button>
                    <button className='delete' onClick={() => {
                      deleteUser(data._id)
                    }}>delete</button>
                  </div>
                </div>
                )
              })
            }
        </div >
    </div>
  )
}

export default UserList
