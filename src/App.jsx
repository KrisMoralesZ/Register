import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [studentList, setStudentsList] = useState([])
  const apiUrl = 'localhost:8080/api/students';

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to Load students')
        }
        const data = response.json();
        setStudentsList(data)
      } catch (error) {
        console.error('Error fetching Students', error);
        throw error;
      }
    };

    getStudents();
  }, [])


  console.log("@@@@@", studentList)
  return (
    <div className="App">
      <h1>Sistema de Registro Escolar</h1>

    </div>
  );
}

export default App;
