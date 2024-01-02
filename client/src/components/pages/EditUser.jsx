import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../redux/modelSlice";
import axios from 'axios'
import "./EditUser.css";

function EditUser() {
    const model = useSelector((state) => state.model)
    const detail = useSelector((state) => state.profile)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')

    const [isImgSet, setImg] = useState(false)

    useEffect(() => {
        setName(detail.name)
        setEmail(detail.email)
        setPassword(detail.password)
    }, [detail])
    
    const dispatch = useDispatch()

    async function editUser() {
        const set = await fetch('http://localhost:2000/user/edit', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: detail._id,
                name: name,
                email: email,
                password: password
            })
        })

        const json = await set.json()

        setImg(!isImgSet)
        dispatch(setProfile())
    }

    return (
        <div className="editModel" style={{ display: model ? "flex" : "none" }}>
            <div className="actiondiv">
                <button
                    onClick={() => {
                        dispatch(setProfile())
                    }}
                >
                    x
                </button>
            </div>
            <div className="imagediv">
                <input className="image_set" type="file" onChange={async(event) => {
                    setImage(event.target.files[0])
                    const form = new FormData()
                    form.append('file', event.target.files[0])
                    // console.log(event.target.files[0])
                    const set = await axios.patch('http://localhost:2000/user/image?id='+detail._id, form, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    })
                    // const set = await fetch('http://localhost:2000/user/image', form)
                }} />
            </div>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} value={name} />
            <input type="text" onChange={(e) => {
                setEmail(e.target.value)
            }} value={email} />
            <input type="text" onChange={(e) => {
                setPassword(e.target.value)
            }} value={password} />
            <button className="set" onClick={editUser}>Set</button>
        </div>
    )
}

export default EditUser;
