import React from "react";
import Question from "./Question";
import QuizTitle from "./QuizTitle";
import QuizInput from "./QuizInput";
import "./style.css";

const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <QuizTitle title="How Do You Like Front End?" />
        <div className="Q1">
          <Question Quiz="How Much You Love Front End" />
          <QuizInput type="range" />
        </div>
        <div className="Q2">
          <Question Quiz="What is your favorite front end feature?" />
          <QuizInput type="text" />
        </div>
      </div>
    </>
  );
};

export default Quiz;
