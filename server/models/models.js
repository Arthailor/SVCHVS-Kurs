const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Employee = sequelize.define('employee',{
    employee_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    position: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
})

const Class = sequelize.define('class',{
    class_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Student = sequelize.define('student',{
    student_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}
})

const Trip = sequelize.define('trip',{
    trip_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    town: {type: DataTypes.STRING, allowNull: false},
    point_of_interest: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(755), allowNull: true},
    img: {type: DataTypes.STRING, allowNull: true}
})

const Excursion = sequelize.define('excursion',{
    excursion_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false}
})

const Attendance = sequelize.define('attendance',{
    attendance_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false}
})

const Event = sequelize.define('event',{
    event_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false}
})

const Participant = sequelize.define('participant',{
    participant_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    grade: {type: DataTypes.INTEGER, allowNull: false}
})

Employee.hasOne(Class)
Class.belongsTo(Employee)

Class.hasOne(Student)
Student.belongsTo(Class)

Class.belongsToMany(Trip,{through: Excursion})
Trip.belongsToMany(Class,{through: Excursion})

Student.hasMany(Attendance)
Attendance.belongsTo(Student)

Student.belongsToMany(Event,{through: Participant})
Class.belongsToMany(Event,{through: Participant})
Event.belongsToMany(Student,{through: Participant})
Event.belongsToMany(Class,{through: Participant})

module.exports = {
    Employee,
    Class,
    Student,
    Trip,
    Excursion,
    Attendance,
    Event,
    Participant
}