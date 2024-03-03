import "./InfoWrapper.scss";

export default function InfoWrapper({
  isCurrent,
  startMonth,
  endMonth,
  startYear,
  endYear,
  title,
  text,
  location,
}) {
  const startStr = `${startMonth} ${startYear}`;
  const endStr = isCurrent ? "Present" : `${endMonth} ${endYear}`;
  return (
    <div className="info-wrapper">
      <div className="info-wrapper__flex">
        <h4 className="info-wrapper__title">{title}</h4>
        <p className="info-wrapper__text">{text}</p>
        <p className="info-wrapper__text">{location}</p>
      </div>
      <p className="info-wrapper__text">{`${startStr} - ${endStr}`}</p>
    </div>
  );
}
