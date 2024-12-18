const ApiError = require("../error/apiError")
const { Attendance, Student } = require("../models/models")

class AttendanceController{
    async create (req, res, next) {
        try {
            const { studentStudentId, status, date } = req.body
            if (!studentStudentId)
                return next(ApiError.badRequest('No student id'))
            const student = await Student.findOne({where: {student_id: studentStudentId}})
            if (!student)
                return next(ApiError.badRequest('Incorrect student id'))
            const attendance = await Attendance.create({ studentStudentId, status, date })

            return res.json(attendance)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const { attendance_id } = req.params
            const attendance = await Attendance.findOne(
                { where: { attendance_id: attendance_id } },
            )
            if (!attendance)
                return next(ApiError.badRequest('Incorrect attendance id'))
            await Attendance.destroy(
                { where: { attendance_id: attendance_id } },
            )
            return res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        let { student_id, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let attendances
        if (!student_id) {
            attendances = await Attendance.findAndCountAll({ limit, offset })
        }
        if (student_id) {
            attendances = await Attendance.findAndCountAll({ where: { studentStudentId: student_id }, limit, offset })
        }
        return res.json(attendances)
    }

}

module.exports = new AttendanceController()