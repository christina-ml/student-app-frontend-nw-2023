import React from 'react';
import './StudentGrades.scss';

const StudentGrades = ({grades}) => {
  return (
    <div>
        <ul>
            {grades.map((grade, index) => (
                <li>Test {index + 1} {grade.score}%</li>
            ))}
        </ul>
    </div>
  )
}

export default StudentGrades;

/**
 * these 3 functions do exactly the same thing, 
 * only difference is using the parentheses when writing it

    const greet = (name) => {
        return `Hello, ${name}`
    };

    greet('Kong'); // "Hello, Kong"

    const greet2 = (name) => `Hello, ${name}`
    greet2('Isidro); // "Hello, Isidro"

    const greet3 = (name) => (`Hello, ${name}`);

 */