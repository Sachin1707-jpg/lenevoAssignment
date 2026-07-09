const StudentItem = ({ student, onDelete }) => {
  return (
    <div className="student-item">
      <div className="student-info">
        <div className="student-name">{student.name}</div>
        <div className="student-details">
          <span className="student-detail-item">
            <span className="student-detail-label">Age:</span> {student.age}
          </span>
          <span className="student-detail-item">
            <span className="student-detail-label">Course:</span> {student.course}
          </span>
        </div>
      </div>
      <button 
        className="btn-delete"
        onClick={() => onDelete(student.id)}
        aria-label={`Delete ${student.name}`}
      >
        Delete
      </button>
    </div>
  );
};

export default StudentItem;
