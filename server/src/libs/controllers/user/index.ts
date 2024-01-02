import userCreate from "./userCreate"
import userDelete from "./userDelete"
import userEdit from "./userEdit"
import userLogin from "./userLogin"
import userLogout from "./userLogout"
import setToken from "./setToken"
import getUser from './userSet'
import userAuth from "./userAuth"
import userGet from "./userGet"

export = (dependency: any) => {
    return {
        user_get: getUser(dependency),
        user_create: userCreate(dependency),
        user_delete: userDelete(dependency),
        user_edit: userEdit(dependency),
        user_login: userLogin(dependency),
        user_logout: userLogout(dependency),
        user_auth: userAuth(dependency),
        set_token: setToken(dependency),
        get_user: userGet(dependency)
    }
}