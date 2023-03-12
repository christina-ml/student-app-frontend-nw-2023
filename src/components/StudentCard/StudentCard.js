import StudentGrades from '../StudentGrades/StudentGrades';
import './StudentCard.scss';

import { FaPlus, FaMinus } from 'react-icons/fa';

const StudentCard = ({ student, expanded, onClick }) => {
  const { city, company, email, firstName, grades, id, lastName, pic, skill } = student;

  // removed state of `showGrades`(mike used "expanded") to "lift state" into parent component `<StudentList.js/>`

  const findAverageGrades = (grades) => {
    // Converted the grades to numbers
    const numericGrades = grades.map((grade) => Number(grade.score));

    // Add up all the grades
    // Init total = 0
    let total = 0;
    // For each grade, add grade to total
    for (const grade of numericGrades) {
      total += grade;
    }

    // Divide total by number of grades and assign to a var
    const average = total / numericGrades.length;

    return average.toFixed(2);
  }

  // console.log(`<StudentCard /> rendered name=${firstName}`);
  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar" >
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info" >
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>City: {city}</li>
          <li>Email: {email}</li>
          <li>Company: {company} </li>
          <li>Skill: {skill}</li>
          <li>Average: {findAverageGrades(grades)}%</li>
        </ul>
        {expanded && <StudentGrades grades={grades}  />}
      </div>
      <button onClick={onClick}>
        {expanded ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
};

export default StudentCard;
