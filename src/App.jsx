import { useState } from "react";
import {
  createInitDetails,
  createNewEdu,
  createNewExp,
} from "./utils/manageDetails";
import CVForm from "./components/CVForm/CVForm";

function App() {
  const [details, setDetails] = useState(createInitDetails);
  const [showForm, setShowForm] = useState({
    currExpId: null,
    currEduId: null,
    showPersonal: true,
    showExperience: false,
    showEducation: false,
  });

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
    const newShowForm = { ...showForm, currExpId: null };
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

  return (
    <>
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
    </>
  );
}

export default App;
