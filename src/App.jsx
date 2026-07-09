import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', age: 21, course: 'Software Engineering' },
    { id: 2, name: 'Bob Smith', age: 22, course: 'Data Science' }
  ]);

  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now(),
    };
    setStudents([newStudent, ...students]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Student Portal</h1>
        <p>Manage your students seamlessly</p>
      </header>

      <main className="main-content">
        <section>
          <StudentForm onAddStudent={handleAddStudent} />
        </section>
        
        <section>
          <StudentList 
            students={students} 
            onDelete={handleDeleteStudent} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
