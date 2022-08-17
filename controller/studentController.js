const User = require('../models/student-model')

const addStudent =(req, res) => {
    var existstudents= User.getStudentDetails()
    console.log(existstudents)
    const newId = Math.floor(Math.random()*100)
    console.log(req.body)
    existstudents[newId]=req.body
    User.saveStudentDetails(existstudents)
    var name = existstudents[newId]['name']
    res.render('welcome',{name:name})
}

const getAllStudentDetails = (req, res) => {
    const students = User.getStudentDetails()
    console.log(students)
    res.send(students)
}

const getStudent =(req,res)=>{
    console.log(req.query.id)
    students = User.getStudentDetails()
    var name =students[req.query.id]['name']
    res.render('welcome',{name:name})
}

const updatestudent=(req, res) => {
    res.send("student updated successfully!")
}

const deleteStudent=(req, res) => {
    res.send("student deleted successfully!")
}

const studentRegisteration = (req, res) => {
    res.sendFile('register.html', { root: './views' })
}

module.exports = {
    addStudent,
    getAllStudentDetails,
    updatestudent,
    deleteStudent,
    getStudent,
    studentRegisteration
}