const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Employee = sequelize.define('employee',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    position: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
})

const Class = sequelize.define('class',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    number_of_students: {type: DataTypes.INTEGER, allowNull: false}
})

const Student = sequelize.define('student',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}
})

Employee.hasOne(Class)
Class.belongsTo(Employee)

Class.hasOne(Student)
Student.belongsTo(Class)

module.exports = {
    Employee,
    Class,
    Student
}