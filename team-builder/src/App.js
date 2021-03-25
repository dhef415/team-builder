import './App.css';
// import Form from './Form'
import React,{useState} from 'react'


const teamList = [
  {name:'Daniel', email:'d@d.com', role:'Student'},
  {name:'Example', email:'d@d.com', role:'Student'},
  {name:'Example2', email:'d@d.com', role:'Student'}
 ];
const initialFormValues = {name:'', email:'', role:''};

export default function TeamBuilder(){
 //state
 const [team,setTeam] = useState(teamList);
 const [formValues, setFormValues] = useState(initialFormValues);
 const change = evt => {
   const { name, value } = evt.target;
    setFormValues({...formValues, [name]: value})
 };
 const submit = evt => {
   evt.preventDefault();
   const newMember ={
     name: formValues.name.trim(),
     email: formValues.email.trim(),
     role: formValues.role.trim()
   }
   setTeam(team.concat(newMember));
   setFormValues(initialFormValues);
 };

 return (
     <div className='container'>
         <h1>Team Builder</h1>
         {team.map((person, idx) => {
             return(
                 <div key={idx}>
                     Name: {person.name}<br></br>
                     Email: {person.email}<br></br>
                     Role: {person.role}
                 </div>
             )
         })}
         <form onSubmit={submit}>
             <input 
             name='name' 
             type='text' 
             value={formValues.name} 
             onChange={change}
             >
             </input><br></br>
             <input
             name='email'
             type='text'
             value={formValues.email}
             onChange={change}
             >
             </input><br></br>
             <input
             name='role'
             type='text'
             value={formValues.role}
             onChange={change}
             >
             </input><br></br>
             <button>Submit</button>
         </form>
     </div>
 );
}


// function App() {
  
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

// export default App;
