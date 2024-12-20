import { $authHost, $host } from "./index"

export const createTrip = async (trip) => {
    const { data } = await $authHost.post('api/trip/', trip)
    return data
}

export const fetchTrips = async (town, page, limit = 5) => {
    const { data } = await $host.get('api/trip/', {params: {
        town, page, limit
    }})
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