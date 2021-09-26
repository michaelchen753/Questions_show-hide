import React from "react";
import "../App.css";

export default function QuestionItem4({ handleSubmit, handleChangeQ4 }) {
  return (
    <div className="question_item">
      <form onSubmit={handleSubmit} className="question_items">
        <div>
          <label>First Name: </label>
          <input type="text" name="fname" onChange={handleChangeQ4} required />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" name="lname" onChange={handleChangeQ4} required />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            min="0"
            max="150"
            step="1"
            onChange={handleChangeQ4}
            required
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            name="address"
            onChange={handleChangeQ4}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
