import "./FormWrapper.scss";

export default function FormWrapper({
  formTitle,
  children,
  clickHandler,
  formView,
}) {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper__flex">
        <h2 className="form-wrapper__title">{formTitle}</h2>
        <button onClick={clickHandler} className="form-wrapper__btn">
          {formView ? "Hide" : "Show"}
        </button>
      </div>
      {formView && children}
    </div>
  );
}
