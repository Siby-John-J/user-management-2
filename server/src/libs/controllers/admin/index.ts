import adminLogin from "./adminLogin"
import adminLogout from "./adminLogout"
import adminGetAll from "./adminGetAll"

export = (dependency: any) => {
    return {
        admin_login: adminLogin(dependency),
        admin_logout: adminLogout(dependency),
        getall_user: adminGetAll(dependency)
    }
}
