import InputWrapper from "../InputWrapper/InputWrapper";
import { months, getYearlyRange } from "../../utils/dateRange";
import { useId } from "react";
import "./TimeRange.scss";

export default function TimeRange({
  title,
  mInputName,
  month,
  yInputName,
  year,
  changeHandler,
  isEndRange = false,
  current = false,
  checkboxName = null,
}) {
  const id = useId();
  const yearRange = getYearlyRange();
  return (
    <div className="time-range-wrapper">
      <h3 className="time-range-wrapper__title">{title}</h3>
      <div className="select-flex">
        <InputWrapper
          elementType="select"
          labelText={"Month"}
          inputName={mInputName}
          changeHandler={changeHandler}
          value={month}
          isDisabled={current}
          choices={months}
        />
        <InputWrapper
          elementType="select"
          labelText={"Year"}
          inputName={yInputName}
          changeHandler={changeHandler}
          value={year}
          isDisabled={current}
          choices={yearRange}
        />
        {isEndRange && (
          <div className="checkbox-wrapper">
            <input
              className="checkbox-wrapper__checkbox"
              type="checkbox"
              checked={current}
              id={id}
              name={checkboxName}
              onChange={changeHandler}
            />
            <label htmlFor={id} className="checkbox-wrapper__label">
              Currently there?
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
