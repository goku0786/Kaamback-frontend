import React, { useState, ChangeEvent } from "react";

const RadioButtons: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="my-5">
      <p className="text-lg font-semibold mb-2">English Proficiency</p>

      <div className="flex gap-5">
        <span className="flex items-center">
          <input
            type="radio"
            id="native"
            name="proficiency"
            value="Native/Fluent"
            checked={selectedOption === "Native/Fluent"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <label htmlFor="native" className="ml-2">
            Native/Fluent
          </label>
        </span>
        <span className="flex items-center">
          <input
            type="radio"
            id="advanced"
            name="proficiency"
            value="Advanced"
            checked={selectedOption === "Advanced"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <label htmlFor="advanced" className="ml-2">
            Advanced
          </label>
        </span>

        <span className="flex items-center">
          <input
            type="radio"
            id="intermediate"
            name="proficiency"
            value="Intermediate"
            checked={selectedOption === "Intermediate"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <label htmlFor="intermediate" className="ml-2">
            Intermediate
          </label>
        </span>

        <span className="flex items-center">
          <input
            type="radio"
            id="basic"
            name="proficiency"
            value="Basic"
            checked={selectedOption === "Basic"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <label htmlFor="basic" className="ml-2">
            Basic
          </label>
        </span>
      </div>
    </div>
  );
};

export default RadioButtons;
