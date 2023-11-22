import './App.css';
import React from 'react'
import{Table}from 'react-bootstrap'
function App() {
const users=[
  {name:"raj",email:"raj@test.com", contact:123},
  {name:"sid",email:"sid@test.com", contact:234},
  {name:"marry",email:"marry@test.com", contact:456},
  {name:"alex",email:"alex@test.com", contact:567},
]
  return(
    <div className="App">
    <h1> List with Bootstrap Table</h1>
    <Table striped variant='dark'>
      <tbody>
      <tr>
      
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
      
       {
      users.map((item)=>
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.contact}</td>
      </tr>
      )
    }
      </tbody>
      </Table>       
     </div>
    );
  } 
export default App; 