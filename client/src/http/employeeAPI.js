import { $authHost, $host } from "./index"
import { jwtDecode } from "jwt-decode"

export const registration = async (email, password) => {
    const { data } = await $host.post('api/employee/registration', { email, password })
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/employee/login', { email, password })
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/employee/auth')
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}