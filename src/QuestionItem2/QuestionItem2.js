import React from "react";
import "../App.css";
export default function QuestionItem2({ handleChangeQ2, Q2 }) {
  return (
    <div className="question_item">
      <p>What is your gender?</p>
      <div className="question_item_content">
        <div className="question_item_content_radio">
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={Q2 === "Male"}
            onChange={handleChangeQ2}
          />
          <label> Male</label>
        </div>
        <div className="question_item_content_radio">
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={Q2 === "Female"}
            onChange={handleChangeQ2}
          />
          <label> Female</label>
        </div>
      </div>
    </div>
  );
}
