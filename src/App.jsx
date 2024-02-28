import { useState } from "react";
import {
  createInitDetails,
  createNewEdu,
  createNewExp,
} from "./utils/manageDetails";

function App() {
  const [details, setDetails] = useState(createInitDetails);

  const addNewSection = (sectionName, section) => {
    const { id } = section;
    const newDetails = {
      ...details,
      [`${sectionName}Ids`]: details[`${sectionName}Ids`].concat(id),
    };
    newDetails[id] = section;
    setDetails(newDetails);
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
  };

  const editSection = (sectId, name, value) => {
    const updatedSection = { ...details[sectId] };
    updatedSection[name] = value;
    const newDetails = { ...details, [sectId]: updatedSection };
    setDetails(newDetails);
  };

  return (
    <>
      <p>Complete this soon, buddy</p>
    </>
  );
}

export default App;
