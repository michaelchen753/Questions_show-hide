import React from "react";
import "../App.css";
export default function QuestionItem1({ handleChangeQ1, Q1 }) {
  return (
    <div className="question_item">
      <p>Is the beneficiary a person or an entity?</p>
      <div className="question_item_content">
        <div className='question_item_content_radio'>
          <input
            type="radio"
            value="A person"
            name="beneficiary"
            checked={Q1 === "A person"}
            onChange={handleChangeQ1}
          />
          <label> A person</label>
        </div>
        <div className='question_item_content_radio'>
          <input
            type="radio"
            value="An entity"
            name="beneficiary"
            checked={Q1 === "An entity"}
            onChange={handleChangeQ1}
          />
          <label> An entity</label>
        </div>
      </div>
    </div>
  );
}
