import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './StudentList.scss';

const StudentList = ({ studentData }) => {

  /**
   * lifted state here: hiding and showing grades
   * Keep track of which students should have expanded cards
   * Possible data types:
   * - array of ids ["1", "3"] // expands only students with ids 1 & 3
   */
  const [expanded, setExpanded] = useState([]);


  const handleToggleExpanded = (id) => {
    // be careful not to mutate the state -- use copies of expanded array
    // if the id is not in the expanded array, add it to the array
    if (!expanded.includes(id)){
      // add it to a copy of the expanded array
      // take all the things currently in our array, and then add 1 last element which is the `id`
      const newExpanded = [...expanded, id]
      setExpanded(newExpanded);
    } else {
      // remove the id from a copy of the expanded array
        // - we are making a copy of the array that includes everything except for the `id` 
        // - the array will have everything except for the thing we want to remove
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  }


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
    // `contentClassName` for array of classnames
    let contentClassName = 'StudentList__content';
    
    if (dataToDisplay.length === 0){
      contentClassName += ' StudentList__content--center';

      return (
        <div className={contentClassName}>
          No results for {searchInput}
        </div>
      )
    } else {
      return (
        <div className={contentClassName}>
          {/* if the current student's id is in the expanded array, the expanded prop sould be true; else false */}
          {dataToDisplay.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      );
    }
  };


  // console.log(`<StudentList/> rendered! search input: ${searchInput}`)
  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input 
          value={searchInput}
          type="text" 
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
      
        {renderContent()}
      
    </div>
  );
};

export default StudentList;