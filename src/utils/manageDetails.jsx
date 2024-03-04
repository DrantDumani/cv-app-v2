import { v4 as uuidv4 } from "uuid";

export const createInitDetails = () => {
  const details = {
    personal: {
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
    startMonth: "Jan",
    startYear: "2000",
    endMonth: "Dec",
    endYear: "2010",
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
    description: "",
    startMonth: "Jan",
    startYear: "2000",
    endMonth: "Dec",
    endYear: "2010",
    current: false,
    id: id,
  };
};
