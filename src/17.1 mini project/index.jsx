import React, { useEffect } from "react";
import axios from "axios"
import './style.css'

const todoApi ='https://6177fd129c328300175f5cd0.mockapi.io/users/'

const Todo=()=>{
    const [subject,setSubject]=React.useState([]) 
    const [search,setSearch]=React.useState('')
    const [data,setData]=React.useState([])

useEffect(() => {
    getData();
}, [])

const getData = async()=>{
    const response= await axios.get(todoApi)
    let data=response.data
    setData(data)
}

 const textHandle=(e)=>{
setSearch(e.target.value)
}

const searchHandle=async(e) =>{
  const response = await axios.post(todoApi,{name:search})
  console.log(response);

    if(response.status===201){
    let newData=[...data,response.data];
    setData(newData)
}
}

const deleteHandle= async(id,e)=>{
   const deleteResponse= await axios.delete(todoApi+id)
   if (deleteResponse.status === 200) {
   const datatList = [...data];
   let resultOfNonDeleted = datatList.filter((dat) => {
     return dat.id !== id
    })
setData(resultOfNonDeleted)
}}
return(
    <div className='header'>
       <input className='search' type='text' name='search' placeholder='New Avatar' onChange={textHandle}/>
       <input className='addBotton' type={'button'} value={'Add'} onClick={(e)=>{searchHandle(e)}}/>
       <div className='main'>
           {data ? data.map((val)=>{
            return <div className='main2' key={val.id} >Name: {val.name}
            <div>country: {val.country}</div>
            <div>age: {(val.age/1000).toFixed(0)}</div>
           <div> <img className='img' src={val.avatar} alt=''/></div>
            <input className='deleteButton' type='button' value='delete' onClick={(e)=>{deleteHandle(val.id,e)}}></input>
            </div>
           }) : ''}
       </div>
    </div>
)
}

export default Todo;