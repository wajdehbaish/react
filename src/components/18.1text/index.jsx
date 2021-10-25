import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'


function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  };


  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()}` : text}
      {hidden ? (
        <a  onClick={() => setHidden(false)}>...read more</a>
      ) : (
        <a onClick={() => setHidden(true)}>show less</a>
      )}
    </span>
  );
}

ReactDOM.render(
  <LessText
    text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it `}
    maxLength={31}
  />,
  document.querySelector('#root')
);
export default  LessText;