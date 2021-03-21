import {React, useEffect, useState} from 'react';
// let desc 
// let name 
// let count


function myRoutines() {
  // const [routine,setRoutine] = useState([]);

// console.log(routine)
// let all
// const [routines, setRoutines] = useState([]);

  fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
//  desc = el.description
//  name = el.name
//  count = el.count
//   all = result


      console.log(result);
      result.map(el => {
        // console.log(el)
      // setRoutine(el)
      return el;
      })
    })
    .catch(console.error);

// console.log(name)
    return (
      <div className="routines">
  <p>This Path is currently Working</p>
  {/* <p>{routine.name}</p> */}
    <p>Hello!</p>

  
      </div>
    );
  }










  export default myRoutines;