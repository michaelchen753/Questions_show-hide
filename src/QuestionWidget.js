import React, { useState } from "react";
import QuestionItem1 from "./QuestionItem1/QuestionItem1";
import QuestionItem2 from "./QuestionItem2/QuestionItem2";
import QuestionItem3 from "./QuestionItem3/QuestionItem3";
import QuestionItem4 from "./QuestionItem4/QuestionItem4";
import QuestionItem5 from "./QuestionItem5/QuestionItem5";

import AssetForm from "./AssetForm/AssetForm";
// import { useForm, Controller } from "react-hook-form";
import "./App.css";

const INITIAL_ASSETVALUE = localStorage.getItem('asset');
function QuestionWidget() {
  const [Q1, setQ1] = useState(null);
  const [Q2, setQ2] = useState(null);
  const [Q3, setQ3] = useState(null);
  const [Q4, setQ4] = useState(null);
  const [Q5, setQ5] = useState(null);
  const [assetValue, setAssetValue] = useState(INITIAL_ASSETVALUE);

  // const { control, handleSubmit } = useForm();

  const handleChangeQ1 = (e) => {
    setQ1(e.target.value);
  };
  const handleChangeQ2 = (e) => {
    setQ2(e.target.value);
  };
  const handleChangeQ3 = (e) => {
    setQ3(e.target.value);
  };
  const handleChangeQ4 = (e) => {
    const { name, value } = e.target;
    setQ4({
      ...Q4,
      [name]: value,
    });
  };
  const handleChangeQ5 = (e) => {
    const { name, value } = e.target;
    setQ5({
      ...Q5,
      [name]: value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setQ4(null);
    setQ5(null);
  };

  // const onSubmit = (data) => setAssetValue(data);
  // console.log("assetValue", assetValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('asset', assetValue);
  };

  const handleValueChange = (value) => setAssetValue(value);


  console.log("assetValue", assetValue);

  return (
    <div className="App">
      <QuestionItem1 Q1={Q1} handleChangeQ1={handleChangeQ1} />
      {Q1 === "A person" && (
        <div>
          <QuestionItem2 Q2={Q2} handleChangeQ2={handleChangeQ2} />
          <QuestionItem4
            Q4={Q4}
            handleChangeQ4={handleChangeQ4}
            handleSubmit={onHandleSubmit}
          />
        </div>
      )}
      {Q1 === "An entity" && (
        <div>
          <QuestionItem3 Q3={Q3} handleChangeQ3={handleChangeQ3} />
          <QuestionItem5
            Q5={Q5}
            handleChangeQ5={handleChangeQ5}
            handleSubmit={onHandleSubmit}
          />
        </div>
      )}
      <AssetForm
        handleSubmit={handleSubmit}
        handleValueChange={handleValueChange}
        // assetValue={assetValue}
      />
    </div>
  );
}

export default QuestionWidget;
