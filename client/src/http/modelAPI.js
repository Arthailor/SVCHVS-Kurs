import { $authHost, $host } from "./index"


//Trips
export const createTrip = async (trip) => {
    const { data } = await $authHost.post('api/trip/', trip)
    return data
}

export const fetchTrips = async (town, page, limit) => {
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

export const fetchClasses = async (page, limit) => {
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

export const fetchStudents = async (classClassId, page, limit) => {
    const { data } = await $host.get('api/student/', {
        params: {
            classClassId, page, limit
        }
    })
    return data
}

export const deleteStudent = async (id) => {
    const { data } = await $authHost.delete('api/student/' + id)
    return data
}

//Excursions
export const createExcursion = async (tripTripId, classClassId, date) => {
    const { data } = await $authHost.post('api/excursion/', { tripTripId, classClassId, date })
    return data
}

export const fetchExcursions = async (trip_id, class_id, page, limit = 5) => {
    const { data } = await $host.get('api/excursion/', {
        params: {
            trip_id, class_id, page, limit
        }
    })
    return data
}

export const deleteExcursion = async (id) => {
    const { data } = await $authHost.delete('api/excursion/' + id)
    return data
}

//Attendance
export const createAttendance = async (studentStudentId, status, date) => {
    const { data } = await $authHost.post('api/attendance/', { studentStudentId, status, date })
    return data
}

export const fetchAttendance = async (student_id) => {
    const { data } = await $host.get('api/attendance/', {
        params: {
            student_id
        }
    })
    return data
}

export const deleteAttendance = async (id) => {
    const { data } = await $authHost.delete('api/attendance/' + id)
    return data
}

//Events
export const createEvent = async (name, date) => {
    const { data } = await $authHost.post('api/event/', { name, date })
    return data
}

export const fetchEvents = async (date, page, limit) => {
    const { data } = await $host.get('api/event/', {
        params: {
            date, page, limit
        }
    })
    return data
}

export const deleteEvent = async (id) => {
    const { data } = await $authHost.delete('api/event/' + id)
    return data
}

//Participants
export const createParticipant = async (studentStudentId, classClassId, eventEventId, grade) => {
    const { data } = await $authHost.post('api/participant/', { studentStudentId, classClassId, eventEventId, grade })
    return data
}

export const fetchParticipants = async (event_id, page, limit) => {
    const { data } = await $host.get('api/participant/', {
        params: {
            event_id, page, limit
        }
    })
    return data
}

export const deleteParticipant = async (id) => {
    const { data } = await $authHost.delete('api/participant/' + id)
    return data
}
