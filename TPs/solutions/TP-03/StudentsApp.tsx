import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './model/Student'

const StudentsApp = () => {
  const [students, setStudents] = useState<ReadonlyArray<Student>>([])
  const [filter, setFilter] = useState<string>('')
  const [selectedStudent, setSelectedStudent] = useState(Student.NULL)

  useEffect(() => {
    axios
      .get<ReadonlyArray<any>>('./students.json')
      .then(({ data: students }) => students.map((s: any) => new Student(s.id, s.lastname, s.firstname, s.grades)))
      .then(students => setStudents(students))
  }, [])

  const handleFilterChange = (f: string) => {
    setFilter(f)
  }

  const handleSelectStudent = (s: Student) => {
    setSelectedStudent(s)
  }

  const filteredStudents = (students: ReadonlyArray<Student>, filter: string) =>
    students.filter(s => s.firstname.includes(filter) || s.lastname.includes(filter))

  return (
    <>
      <Filter onChange={handleFilterChange} />
      <StudentsTable students={filteredStudents(students, filter)} selectStudent={handleSelectStudent} />
      <StudentDetails student={selectedStudent} />
    </>
  )
}

export default StudentsApp
