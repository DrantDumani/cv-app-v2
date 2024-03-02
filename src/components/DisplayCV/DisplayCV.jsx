import InfoWrapper from "../InfoWrapper/InfoWrapper";

export default function DisplayCV({
  name,
  title,
  email,
  phone,
  address,
  about,
  experience,
  education,
}) {
  return (
    <div className="vitae-container">
      <section className="vitae-section">
        <div className="vitae-section-flex-wrapper">
          <h3 className="vitae-section__title">{name}</h3>
          <p className="vitae-section__text vitae-section__text--big">
            {title}
          </p>
        </div>

        <div className="vitae-section-flex-wrapper">
          <p className="vitae-section__text">{email}</p>
          <p className="vitae-section__text">{phone}</p>
          <p className="vitae-section__text">{address}</p>
        </div>
      </section>

      <section className="vitae-section">
        <h3 className="vitae-section__title">PROFILE</h3>
        <p className="vitae-section__text">{about}</p>
      </section>

      <section className="vitae-section">
        <h3 className="vitae-section__title">EXPERIENCE</h3>
        {experience.map((info) => (
          <div key={info.id} className="vitae-section__info">
            <InfoWrapper
              text={info.position}
              startMonth={info.startMonth}
              startYear={info.startYear}
              endMonth={info.endMonth}
              endYear={info.endYear}
              isCurrent={info.current}
            />
            <p className="vitae-section__text">{info.location}</p>
            <ul className="vitae-section__list">
              {info.description.split("\n").map((line, ind) => (
                <li key={ind}>
                  <p className="vitae-section__bullet">{line}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="vitae-section">
        <h3 className="vitae-section__title">EDUCATION</h3>
        {education.map((info) => (
          <div key={info.id} className="vitae-section__info">
            <InfoWrapper
              text={info.position}
              startMonth={info.startMonth}
              startYear={info.startYear}
              endMonth={info.endMonth}
              endYear={info.endYear}
              isCurrent={info.current}
            />
            <p className="vitae-section__text">{info.location}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
