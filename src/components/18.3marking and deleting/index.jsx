import React from "react";
import './style.css'

const Mark = () => {
  const [arr, setArr] = React.useState(["one", "two", "three", "four", "five"]);
  const [filterdArr, setFilterdArr] = React.useState([]);

  const handleDelete = (e) => {
    let result = arr.filter(element=>{
      return !filterdArr.includes(element)
  })
  setArr(result)
  setFilterdArr([])
}
  ;

  const handleReset = () => {
  
    setArr(["one", "two", "three", "four", "five"])
  };

  const handleChange = (e) => {
    const newArr = [...filterdArr];
    if (newArr.includes(e.target.value)) {
      setFilterdArr(
        newArr.filter((value) => {
          return e.target.value !== value;
        })
      );
    } else {
      newArr.push(e.target.value);
      setFilterdArr(newArr);
    }
  };

  const arrHandle = arr.map((val) => {
    return (
      <div className='main' key={val}>
        <li>
          {val}
          <input type="checkbox" value={val} onChange={handleChange}/>
        </li>
      </div>
    );
  });
  return (
    <div className='main'>
      {arrHandle}
      <input type="button" value="delete" onClick={handleDelete}/>
      <input type="button" value="reset" onClick={handleReset}/>
    </div>
  );
  
  }
export default Mark;
