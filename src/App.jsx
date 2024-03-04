import { useState } from "react";
import {
  createInitDetails,
  createNewEdu,
  createNewExp,
  example,
} from "./utils/manageDetails";
import CVForm from "./components/CVForm/CVForm";
import DisplayCV from "./components/DisplayCV/DisplayCV";
import "./App.scss";

function App() {
  const [details, setDetails] = useState(createInitDetails);
  const [showForm, setShowForm] = useState({
    currExpId: null,
    currEduId: null,
    showPersonal: true,
    showExperience: false,
    showEducation: false,
  });
  const [mobileCV, setMobileCV] = useState(false);

  const toggleMobileCV = () => setMobileCV(!mobileCV);

  const setExpId = (id) => {
    const newShowForm = { ...showForm, currExpId: id };
    setShowForm(newShowForm);
  };

  const setEduId = (id) => {
    const newShowForm = { ...showForm, currEduId: id };
    setShowForm(newShowForm);
  };

  const toggleShowForm = (str) => {
    const newShowForm = {
      ...showForm,
      ["show" + str]: !showForm["show" + str],
    };
    setShowForm(newShowForm);
  };

  const addNewSection = (sectionName, section) => {
    const { id } = section;
    const newDetails = {
      ...details,
      [`${sectionName}Ids`]: details[`${sectionName}Ids`].concat(id),
    };
    newDetails[id] = section;
    setDetails(newDetails);
  };

  const addNewExp = () => {
    const section = createNewExp();
    addNewSection("experience", section);
    const newShowForm = {
      ...showForm,
      currExpId: section.id,
      showExperience: true,
    };
    setShowForm(newShowForm);
  };

  const addNewEdu = () => {
    const section = createNewEdu();
    addNewSection("education", section);
    const newShowForm = {
      ...showForm,
      currEduId: section.id,
      showEducation: true,
    };
    setShowForm(newShowForm);
  };

  const deleteSection = (sectId, sectionName) => {
    const newDetails = {
      ...details,
      [`${sectionName}Ids`]: details[`${sectionName}Ids`].filter(
        (id) => id !== sectId
      ),
    };
    delete newDetails[sectId];
    setDetails(newDetails);
    const prop = sectionName === "experience" ? "currExpId" : "currEduId";
    const newShowForm = { ...showForm, [prop]: null };
    setShowForm(newShowForm);
  };

  const editSection = (e, sectId) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") value = e.target.checked;
    const updatedSection = { ...details[sectId] };
    updatedSection[name] = value;
    const newDetails = { ...details, [sectId]: updatedSection };
    setDetails(newDetails);
  };

  const editPersonal = (e) => {
    editSection(e, "personal");
  };

  const experience = details.experienceIds.map((id) => {
    return { ...details[id] };
  });

  const education = details.educationIds.map((id) => {
    return { ...details[id] };
  });

  return (
    <>
      <header className="header">
        <h1 className="header__title">CV Creator</h1>
      </header>

      <menu className="toolbar">
        <li className="toolbar__left-li">
          <button
            className="toolbar__btn toolbar__btn--mobile-only"
            onClick={toggleMobileCV}
          >
            Preview CV
          </button>
        </li>
        <li>
          <button
            className="toolbar__btn"
            onClick={() => {
              setDetails(example);
            }}
          >
            Load Example
          </button>
        </li>
      </menu>

      <main className="main">
        <div className="mobile-only">
          {!mobileCV ? (
            <CVForm
              editSection={editSection}
              editPersonal={editPersonal}
              details={details}
              expIds={details.experienceIds}
              addNewExp={addNewExp}
              addNewEdu={addNewEdu}
              showPersonal={showForm.showPersonal}
              showExperience={showForm.showExperience}
              showEducation={showForm.showEducation}
              currExpId={showForm.currExpId}
              currEduId={showForm.currEduId}
              toggleShowForm={toggleShowForm}
              deleteSection={deleteSection}
              setExpId={setExpId}
              setEduId={setEduId}
              eduIds={details.educationIds}
            />
          ) : (
            <DisplayCV
              name={details.personal.fullName}
              title={details.personal.title}
              email={details.personal.email}
              phone={details.personal.phoneNum}
              address={details.personal.address}
              about={details.personal.description}
              experience={experience}
              education={education}
            />
          )}
        </div>
        <div className="desktop-only">
          <CVForm
            editSection={editSection}
            editPersonal={editPersonal}
            details={details}
            expIds={details.experienceIds}
            addNewExp={addNewExp}
            addNewEdu={addNewEdu}
            showPersonal={showForm.showPersonal}
            showExperience={showForm.showExperience}
            showEducation={showForm.showEducation}
            currExpId={showForm.currExpId}
            currEduId={showForm.currEduId}
            toggleShowForm={toggleShowForm}
            deleteSection={deleteSection}
            setExpId={setExpId}
            setEduId={setEduId}
            eduIds={details.educationIds}
          />

          <DisplayCV
            name={details.personal.fullName}
            title={details.personal.title}
            email={details.personal.email}
            phone={details.personal.phoneNum}
            address={details.personal.address}
            about={details.personal.description}
            experience={experience}
            education={education}
          />
        </div>
      </main>
      <footer className="footer">
        <p className="footer__text">
          Made by Darnell. Built in React, SCSS.{" "}
          <a
            href="https://github.com/DrantDumani/cv-app-v2"
            className="footer__link"
          >
            Github
          </a>
        </p>
      </footer>
      {/* <CVForm
        editSection={editSection}
        editPersonal={editPersonal}
        details={details}
        expIds={details.experienceIds}
        addNewExp={addNewExp}
        addNewEdu={addNewEdu}
        showPersonal={showForm.showPersonal}
        showExperience={showForm.showExperience}
        showEducation={showForm.showEducation}
        currExpId={showForm.currExpId}
        currEduId={showForm.currEduId}
        toggleShowForm={toggleShowForm}
        deleteSection={deleteSection}
        setExpId={setExpId}
        setEduId={setEduId}
        eduIds={details.educationIds}
      />
      <DisplayCV
        name={details.personal.fullName}
        title={details.personal.title}
        email={details.personal.email}
        phone={details.personal.phone}
        address={details.personal.address}
        about={details.personal.description}
        experience={experience}
        education={education}
      /> */}
    </>
  );
}

export default App;
