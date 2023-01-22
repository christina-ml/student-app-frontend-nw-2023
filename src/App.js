import { useEffect, useState } from 'react';
import './App.css';
import StudentList from './components/StudentList/StudentList';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
/*
 * React will look into the dependency array to see
 * Always have an empty array
 * If something has changed in the state of your app - something a user enters into a form to make another api call?
 */

// TODO: Get this value from .env
const API_URL = 'http://localhost:8888';

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('<App /> useEffect() fired');
    async function fetchData() {
      try {
        // Show the user that we're loading...
        setLoading(true);
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        console.log('<App /> useEffect() fetched data', json);
        const { data } = json;
        setStudentData(data);
        // Stop showing the user the loading UI...
        setLoading(false);
      } catch (err){
        console.log(`<App /> useEffect error: ${err.message}`);
        setLoading(false);
        setError(err.msg);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (error) {
      return <Error error={error} />
    } else {
      return <StudentList studentData={studentData} />
    }
  }

  console.log(`<App /> rendered! num students = ${studentData.length}`);
  return (
    <div className="App">
       {/* {loading ? 
        <Loading />
       : 
        <StudentList studentData={studentData} />
       } */}
       {renderContent()}
    </div>
  );
}

export default App;
