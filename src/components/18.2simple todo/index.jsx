import React from "react";
import './style.css'

const Checked=()=>{
const [subjects, setSubjects]=React.useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ]
    )
  
const clickHanlde=(subjectsName)=>{
const newSubjects=[...subjects]
const subject=newSubjects.find((e)=>e.name===subjectsName)
 subject.completed=!subject.completed
    setSubjects(newSubjects)
}
    return(
        <>
        {subjects.map((subject)=>{
            return(
                <div className='subjects'>
                    <h1 className={subject.completed ? 'checked':''}>{subject.name}</h1>
                    <span  onClick={()=>clickHanlde(subject.name)}>
                        {subject.completed ? '👎🏻' : '👍🏻'}
                    </span>
                </div>
            )
        })}
          </>
    )

    }

export default Checked;

