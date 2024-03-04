import "./SaveBtn.scss";

export default function SaveBtn({ clickHandler }) {
  return (
    <button className="save-btn" onClick={clickHandler}>
      Save
    </button>
  );
}
