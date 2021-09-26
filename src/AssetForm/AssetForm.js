import React from "react";
import CurrencyInput from "react-currency-input-field";

export default function AssetForm({
  handleSubmit,
  handleValueChange,
  // assetValue,
}) {
  return (
    <div className="question_item">
      <form onSubmit={handleSubmit} className="question_items">
        <div>
          <label>Asset Amount: </label>
          <CurrencyInput
            id="assetForm"
            // value={assetValue}
            prefix=" $"
            decimalsLimit={2}
            name="assetForm"
            onValueChange={handleValueChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
