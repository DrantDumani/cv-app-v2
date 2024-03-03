import { useId } from "react";
import "./InputWrapper.scss";

export default function InputWrapper({
  labelText,
  inputType = "text",
  inputName,
  placeholder = "",
  changeHandler,
  value,
  elementType = "input",
  choices = [],
  isDisabled = false,
}) {
  const id = useId();

  let element = null;
  switch (elementType) {
    case "textarea":
      element = (
        <textarea
          id={id}
          name={inputName}
          value={value}
          className="input-container__input input-container__input--textarea"
          required
          placeholder={placeholder}
          onChange={changeHandler}
        ></textarea>
      );
      break;
    case "select":
      element = (
        <select
          name={inputName}
          id={id}
          className="input-container__input input-container__input--select"
          value={value}
          onChange={changeHandler}
          required
          disabled={isDisabled}
        >
          {choices.map((choice, i) => (
            <option key={i} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      );
      break;
    default:
      element = (
        <input
          type={inputType}
          id={id}
          name={inputName}
          className="input-container__input"
          placeholder={placeholder}
          required
          value={value}
          onChange={changeHandler}
          disabled={isDisabled}
        />
      );
  }
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-container__label">
        {labelText}
      </label>
      {element}
    </div>
  );
}
