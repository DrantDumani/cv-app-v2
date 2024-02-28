import { v4 as uuidv4 } from "uuid";

export const createInitDetails = () => {
  const id = uuidv4();
  const details = {
    [id]: {
      fullName: "",
      title: "",
      phoneNum: "",
      address: "",
      email: "",
      description: "",
    },
    experienceIds: [],
    educationIds: [],
  };
  return details;
};

export const createNewEdu = () => {
  const id = uuidv4();
  return {
    school: "",
    location: "",
    degree: "",
    from: "",
    to: "",
    current: false,
    id: id,
  };
};

export const createNewExp = () => {
  const id = uuidv4();
  return {
    position: "",
    employer: "",
    location: "",
    from: "",
    to: "",
    current: false,
    id: id,
  };
};
