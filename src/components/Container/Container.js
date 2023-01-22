import React from 'react';

import "./Container.scss";

/**
 * memory
 *             myString     
 *                |
 * -- -- -- -- "hello"
 * 
 * let myString = "hello"
 * myString = "bye"
 * 
 *                     myString   myArr   
 *                          |      |
 * -- -- -- -- "hello" -- "bye" ['hello']
 * 
 * const myArr = []
 * myArr.push("hello") // OK
 * myArr = ["yo", "bye", "pizza"] // ERROR
 */


/**
 * difference between 'Container__center' and 'Container--center'?
 * both are totally fine
 * CSS convention called Block Element Modifier (BEM)
 * 
 * StudentCard__avatar  (left side of the card)
 * StudentCard__info    (right side of the card)
 * StudentCard__avatar--center      (`center` is a modifier)
 * StudentCard__avatar--active      (`active` is a modifier)
 * 
 * block__element--modifier
 * block--modifier
 */


// How it would look in TYPESCRIPT:
// type ContainerProps {
//     center: Boolean
//     children: React.Children
// }

// const Container = 


const Container = ({ center, children }) => {
    // array of class names
    const classNamesArr = ['Container'];

    if (center){
        classNamesArr.push('Container--center');
    }

    return (
        <div className={classNamesArr.join(" ")}>
            {children}
        </div>
    )
}

export default Container;