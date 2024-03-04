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

const job1Id = uuidv4(),
  job2Id = uuidv4(),
  eduId = uuidv4();

export const example = {
  personal: {
    fullName: "Porky Minch",
    title: "King",
    phoneNum: "060-050-1995",
    address: "Onett, Eagleland",
    email: "kingP@pork.com",
    description: "Former mayor's business aide. Current king of the world.",
  },
  experienceIds: [job1Id, job2Id],
  educationIds: [eduId],
  [job1Id]: {
    position: "Business Aide",
    employer: "Geralde Monotoli",
    location: "Fourside, Eagleland",
    description:
      "Campaigned for Monotoli during the election.\nAdvised the mayor on business decisions, increasing our profits.\nPersonally escorted the mayor around the city via helicopter",
    startMonth: "Mar",
    startYear: "1995",
    endMonth: "Dec",
    endYear: "1995",
    current: false,
    id: job1Id,
  },
  [job2Id]: {
    position: "King",
    employer: "Myself",
    location: "New Pork City, Tazmily skies",
    description:
      "Introduced a trade economy to Tazmily.\nCreated a stable employment system for all people of the world.\nCreated a prison system, as one did not exist in this time",
    startMonth: "Apr",
    startYear: "2006",
    endMonth: "Dec",
    endYear: "1995",
    current: true,
    id: job2Id,
  },
  [eduId]: {
    school: "Onett Library",
    location: "Onett, Eagleland",
    degree: "Graduate",
    startMonth: "Sep",
    startYear: "1990",
    endMonth: "Jun",
    endYear: "1995",
    current: false,
    id: eduId,
  },
};

export const initShowForm = {
  currExpId: null,
  currEduId: null,
  showPersonal: true,
  showExperience: false,
  showEducation: false,
};
