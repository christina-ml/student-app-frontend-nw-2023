import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './StudentList.scss';

const StudentList = ({ studentData }) => {
  console.log(`<StudentList /> rendered!`);
  // when I type in the input, I should see filtered results by name
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  // body of function - filter data here
  // create a var to hold teh filtered data
  let dataToDisplay = studentData;

  // if searchInput is truthy (not empty string)
  // reassign dataToDisplay with the filtered data
  if (searchInput) {
    // we only reach this code if the user has typed something
    dataToDisplay = studentData.filter((student) => {
      // If the student's full name includes the searchInput, return true
      // otherwise false
      // (case insensitive)
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    })
  }

  // If dataToDisplay.length === 0, 
  //     show "no results for {searchInput}"
  //     Else: render student cards 
     
  const renderContent = () => {
    if (dataToDisplay.length === 0){
      return `No results for ${searchInput}`;
    } else {
      return (
        dataToDisplay.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))
      )
    }
  }

  // array of classnames
  let contentClassName = 'StudentList__content';
  if (dataToDisplay.length === 0) {
    contentClassName += " StudentList__content--center";
  }


  // console.log(`<StudentList/> rendered! search input: ${searchInput}`)
  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input 
          value={searchInput}
          type="text" 
          placeholder="search by name"
          onChange={handleChange}
        />
      </div>
      <div className={contentClassName}>
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentList;