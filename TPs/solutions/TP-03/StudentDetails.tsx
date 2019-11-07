import React from 'react'
import Student from './model/Student'
import FormLabel from '@material-ui/core/FormLabel'

type Props = {student : Student}

const StudentDetails = ({ student } : Props) => (
  <FormLabel>
    {student !== Student.NULL ? (
      <div style={{ margin: '20px' }}>{[student.firstname, ' ', student.lastname]}</div>
    ) : (
      <div style={{ margin: '20px', backgroundColor: 'red' }}>Aucun étudiant sélectionné !</div>
    )}
  </FormLabel>
)

export default StudentDetails
