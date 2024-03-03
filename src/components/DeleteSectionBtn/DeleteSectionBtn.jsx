import "./DeleteSectionBtn.scss";

export default function DeleteSectionBtn({ clickHandler }) {
  return (
    <button type="button" className="del-section-btn" onClick={clickHandler}>
      Delete
    </button>
  );
}
