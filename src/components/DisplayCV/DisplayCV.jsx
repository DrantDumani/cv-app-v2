import { forwardRef } from "react";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
import "./DisplayCV.scss";

export const DisplayCV = forwardRef(function DisplayCV(
  { name, title, email, phone, address, about, experience, education },
  ref
) {
  return (
    <div className="vitae-container">
      <div ref={ref}>
        <section className="vitae-header">
          <div className="vitae-header__flex-wrapper">
            <h3 className="vitae-header__title">{name}</h3>
            <p className="vitae-header__text vitae-header__text--big">
              {title}
            </p>
          </div>

          <div className="vitae-header__flex-wrapper">
            <p className="vitae-header__text">{email}</p>
            <p className="vitae-header__text">{phone}</p>
            <p className="vitae-header__text">{address}</p>
          </div>
        </section>

        <section className="vitae-section vitae-section--top-pad">
          <h3 className="vitae-section__title">PROFILE</h3>
          <p className="vitae-section__text">{about}</p>
        </section>

        <section className="vitae-section">
          <h3 className="vitae-section__title">EXPERIENCE</h3>
          {experience.map((info) => (
            <div key={info.id} className="vitae-section__info">
              <InfoWrapper
                title={info.employer}
                text={info.position}
                location={info.location}
                startMonth={info.startMonth}
                startYear={info.startYear}
                endMonth={info.endMonth}
                endYear={info.endYear}
                isCurrent={info.current}
              />
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

        <section className="vitae-section vitae-section--bot-pad">
          <h3 className="vitae-section__title">EDUCATION</h3>
          {education.map((info) => (
            <div key={info.id} className="vitae-section__info">
              <InfoWrapper
                title={info.school}
                text={info.degree}
                location={info.location}
                startMonth={info.startMonth}
                startYear={info.startYear}
                endMonth={info.endMonth}
                endYear={info.endYear}
                isCurrent={info.current}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
});
