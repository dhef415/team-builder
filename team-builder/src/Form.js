import React, {useState} from 'react'

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
    const change = evt => {};

    return (
        <div className='container'>
            <h1>Team</h1>
            {team.map((person, idx) => {
                return(
                    <div key={idx}>
                        {person.name}
                    </div>
                )
            })}
            <form>
                <input 
                name='personName' 
                type='text' 
                value={formValues.name} 
                onChange={change}
                >
                </input>
            </form>
        </div>
    );
}