const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Employee} = require('../models/models')

const generateJwt = (employee_id, email) => {
    return jwt.sign({employee_id, email}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class EmployeeController{
    async registration (req, res, next) {
        const {email, password, name, surname, position} = req.body
        if (!email || !password)
        {
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await Employee.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Email already registered'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const employee = await Employee.create({name, surname, position, email, password: hashPassword})
        const token = generateJwt(employee.employee_id, employee.email)
        return res.json({token})
    }

    async login (req, res, next) {
        try {
            const {email, password} = req.body
            const employee = await Employee.findOne({where: {email: email}})
            if (!employee) {
                return next(ApiError.internal('There is no such email in database'))
            }
            let comparePassword = bcrypt.compareSync(password, employee.password)
            if (!comparePassword) {
                return next(ApiError.internal('Wrong password'))
            }
            const token = generateJwt (employee.employee_id, employee.email)
            return res.json({token})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async check (req, res, next) {
        console.log(req.employee)
        const token = generateJwt (req.employee.employee_id, req.employee.email)
        return res.json({token})
    }
}

module.exports = new EmployeeController()