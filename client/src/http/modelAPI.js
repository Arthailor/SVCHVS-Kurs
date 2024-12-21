import { $authHost, $host } from "./index"


//Trips
export const createTrip = async (trip) => {
    const { data } = await $authHost.post('api/trip/', trip)
    return data
}

export const fetchTrips = async (town, page, limit = 5) => {
    const { data } = await $host.get('api/trip/', {
        params: {
            town, page, limit
        }
    })
    return data
}

export const fetchOneTrip = async (id) => {
    const { data } = await $host.get('api/trip/' + id)
    return data
}

export const deleteTrip = async (id) => {
    const { data } = await $authHost.delete('api/trip/' + id)
    return data
}


//Classes
export const createClass = async (name, employeeEmployeeId) => {
    const { data } = await $authHost.post('api/class/', { name, employeeEmployeeId })
    return data
}

export const fetchClasses = async (page, limit = 5) => {
    const { data } = await $host.get('api/class/', {
        params: {
            page, limit
        }
    })
    return data
}

export const deleteClass = async (id) => {
    const { data } = await $authHost.delete('api/class/' + id)
    return data
}

//Students
export const createStudent = async (name, surname, classClassId) => {
    const { data } = await $authHost.post('api/student/', { name, surname, classClassId })
    return data
}

export const fetchStudents = async () => {
    const { data } = await $host.get('api/student/')
    return data
}

export const deleteStudent = async (id) => {
    const { data } = await $authHost.delete('api/student/' + id)
    return data
}