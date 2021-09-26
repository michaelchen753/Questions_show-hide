import React from "react";
import '../App.css'
export default function QuestionItem5({ handleChangeQ5, handleSubmit }) {
  return (
    <div className="question_item">
      <form onSubmit={handleSubmit} className="question_items">
        <div>
          <label>Sole trader / Company Name: </label>
          <input type="text" name="bname" onChange={handleChangeQ5} required />
        </div>
        <div>
          <label>ABN or ACN: </label>
          <input
            type="number"
            name="ABN"
            min="0"
            maxLength="15"
            step="1"
            onChange={handleChangeQ5}
            required
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            name="business_address"
            onChange={handleChangeQ5}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
