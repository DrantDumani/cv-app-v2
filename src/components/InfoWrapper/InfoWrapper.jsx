// import "./InfoWrapper.scss";

export default function InfoWrapper({
  isCurrent,
  startMonth,
  endMonth,
  startYear,
  endYear,
  text,
}) {
  const startStr = `${startMonth} ${startYear}`;
  const endStr = isCurrent ? "Present" : `${endMonth} ${endYear}`;
  return (
    <div className="info-wrapper">
      <p className="info-wrapper__text">{text}</p>
      <p className="info-wrapper__text">{`${startStr} - ${endStr}`}</p>
    </div>
  );
}
