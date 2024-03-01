export default function AddSectionBtn({ btnText, clickHandler }) {
  return (
    <button className="add-section-btn" onClick={clickHandler}>
      {btnText}
    </button>
  );
}
