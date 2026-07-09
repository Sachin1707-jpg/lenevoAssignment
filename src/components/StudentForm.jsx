import { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) return;

    onAddStudent({ name, age, course });
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <div className="form-card">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="form-input"
            placeholder="20"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            className="form-input"
            placeholder="Computer Science"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
