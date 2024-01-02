import jwt from 'jsonwebtoken'

export const sign = (id : string) => {
    const token = jwt.sign(id, 'key')
    return token
}

export const verify = (id: string) => {
    const token = jwt.verify(id, 'key')
    return token
}
