const express = require('express')
const studentroute = express.Router()

const studentController=require('../controller/studentController')

studentroute.use(express.json())
studentroute.use(express.urlencoded())

studentroute.get('/student/all',studentController.getAllStudentDetails )

studentroute.get('/student',studentController.getStudent)

studentroute.get('/student/register', studentController.studentRegisteration)

studentroute.post('/student/addstudent', studentController.addStudent)

studentroute.put('/student/updatestudent', studentController.updatestudent)

studentroute.delete('/student/deletestudent',studentController.addStudent )

module.exports = studentroute