import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


function Routines() {
  const [posts,setPosts] = useState([]);
  fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      result.map(el => {
        setPosts(el)
        return {}
      })
    })
    .catch(console.error);



    return (
      <div className="routines">
  <p>This Path is Working</p>
    <p>routines!</p>
    <p>{posts.data}</p>
  
      </div>
    );
  }
  


  export default Routines;