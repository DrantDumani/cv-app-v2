import DeleteSectionBtn from "../DeleteSectionBtn/DeleteSectionBtn";

export default function FormTab({ titleText, editHandler, deleteHandler }) {
  return (
    <div className="form-tab">
      <h3 className="form-tab__title">{titleText}</h3>
      <button className="form-tab__btn" onClick={editHandler}>
        Edit
      </button>
      <DeleteSectionBtn clickHandler={deleteHandler} />
    </div>
  );
}
