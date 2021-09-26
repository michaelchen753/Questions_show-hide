import React from "react";
import "../App.css";
export default function QuestionItem3({ handleChangeQ3, Q3 }) {
  return (
    <div className="question_item">
      <p>Are you a sole trader or company?</p>
      <div className="question_item_content">
        <div className="question_item_content_radio">
          <input
            type="radio"
            value="Sole trader"
            name="entity"
            checked={Q3 === "Sole trader"}
            onChange={handleChangeQ3}
          />
          <label> Sole trader</label>
        </div>
        <div className="question_item_content_radio">
          <input
            type="radio"
            value="Company"
            name="entity"
            checked={Q3 === "Company"}
            onChange={handleChangeQ3}
          />
          <label> Company</label>
        </div>
      </div>
    </div>
  );
}
