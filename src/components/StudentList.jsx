import StudentItem from './StudentItem';

const StudentList = ({ students, onDelete }) => {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students found. Add a student to get started!</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      {students.map((student) => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default StudentList;
