import FormWrapper from "../FormWrapper/FormWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";
import AddSectionBtn from "../AddSectionBtn/AddSectionBtn";
import TimeRange from "../TimeRange/TimeRange";
import DeleteSectionBtn from "../DeleteSectionBtn/DeleteSectionBtn";
import FormTab from "../FormTab/FormTab";
import SaveBtn from "../SaveBtn/SaveBtn";

export default function CVForm({
  editSection,
  editPersonal,
  details,
  expIds,
  eduIds,
  addNewExp,
  addNewEdu,
  toggleShowForm,
  showPersonal,
  showExperience,
  showEducation,
  currExpId,
  currEduId,
  deleteSection,
  setExpId,
  setEduId,
}) {
  return (
    <div className="form-input-container">
      <FormWrapper
        formTitle={"Personal"}
        clickHandler={() => toggleShowForm("Personal")}
        formView={showPersonal}
      >
        <form className="form-input-container__form">
          <InputWrapper
            labelText={"Full Name"}
            placeholder={"Porky Minch"}
            changeHandler={editPersonal}
            inputName={"fullName"}
            value={details.personal.fullName}
          />
          <InputWrapper
            labelText={"Title"}
            placeholder={"King"}
            changeHandler={editPersonal}
            inputName={"title"}
            value={details.personal.title}
          />
          <InputWrapper
            labelText={"Phone Number"}
            inputType={"tel"}
            placeholder={"0200651995"}
            changeHandler={editPersonal}
            inputName={"phoneNum"}
            value={details.personal.phoneNum}
          />
          <InputWrapper
            labelText={"Address"}
            placeholder={"Onett, Eageland"}
            changeHandler={editPersonal}
            inputName={"address"}
            value={details.personal.address}
          />
          <InputWrapper
            labelText={"Email"}
            inputType={"email"}
            placeholder={"KingP@Pork.com"}
            changeHandler={editPersonal}
            inputName={"email"}
            value={details.personal.email}
          />
          <InputWrapper
            labelText={"Short Description"}
            placeholder={"Tell us about yourself."}
            changeHandler={editPersonal}
            inputName={"description"}
            value={details.personal.description}
            elementType="textarea"
          />
        </form>
      </FormWrapper>

      <div className="add-btn-form-wrapper">
        {!currExpId && (
          <AddSectionBtn btnText={"Add Experience"} clickHandler={addNewExp} />
        )}{" "}
        <FormWrapper
          formTitle={"Experience"}
          clickHandler={() => toggleShowForm("Experience")}
          formView={showExperience}
        >
          {currExpId ? (
            <form className="form-input-container__form">
              <DeleteSectionBtn
                clickHandler={() => deleteSection(currExpId, "experience")}
              />
              <InputWrapper
                labelText={"Employer"}
                placeholder={"Geralde Monotoli"}
                changeHandler={(e) => editSection(e, currExpId)}
                inputName={"employer"}
                value={details[currExpId].employer}
              />
              <InputWrapper
                labelText={"Position"}
                placeholder={"Business Aide"}
                changeHandler={(e) => editSection(e, currExpId)}
                inputName={"position"}
                value={details[currExpId].position}
              />
              <InputWrapper
                labelText={"Location"}
                placeholder={"Fourside, Eagleland"}
                changeHandler={(e) => editSection(e, currExpId)}
                inputName={"location"}
                value={details[currExpId].location}
              />
              <TimeRange
                title={"From"}
                mInputName={"startMonth"}
                month={details[currExpId].startMonth}
                yInputName={"startYear"}
                year={details[currExpId].startYear}
                changeHandler={(e) => editSection(e, currExpId)}
              />
              <TimeRange
                title={"To"}
                mInputName={"endMonth"}
                month={details[currExpId].endMonth}
                yInputName={"endYear"}
                year={details[currExpId].endYear}
                checkboxName={"current"}
                changeHandler={(e) => editSection(e, currExpId)}
                current={details[currExpId].current}
                isEndRange={true}
              />
              <SaveBtn clickHandler={() => setExpId(null)} />
            </form>
          ) : (
            <div className="form-tab-container">
              {expIds.map((id) => (
                <FormTab
                  key={id}
                  deleteHandler={() => deleteSection(id, "experience")}
                  editHandler={() => setExpId(id)}
                  titleText={details[id].employer}
                />
              ))}
            </div>
          )}
        </FormWrapper>
      </div>

      <div className="add-btn-form-wrapper">
        {!currEduId && (
          <AddSectionBtn btnText={"Add Education"} clickHandler={addNewEdu} />
        )}{" "}
        <FormWrapper
          formTitle={"Education"}
          clickHandler={() => toggleShowForm("Education")}
          formView={showEducation}
        >
          {currEduId ? (
            <form className="form-input-container__form">
              <DeleteSectionBtn
                clickHandler={() => deleteSection(currEduId, "education")}
              />
              <InputWrapper
                labelText={"School"}
                placeholder={"School Name"}
                changeHandler={(e) => editSection(e, currEduId)}
                inputName={"school"}
                value={details[currEduId].school}
              />
              <InputWrapper
                labelText={"Location"}
                placeholder={"City, Country"}
                changeHandler={(e) => editSection(e, currEduId)}
                inputName={"location"}
                value={details[currEduId].location}
              />
              <InputWrapper
                labelText={"Degree"}
                placeholder={"List your degree"}
                changeHandler={(e) => editSection(e, currEduId)}
                inputName={"degree"}
                value={details[currEduId].degree}
              />
              <TimeRange
                title={"From"}
                mInputName={"startMonth"}
                month={details[currEduId].startMonth}
                yInputName={"startYear"}
                year={details[currEduId].startYear}
                changeHandler={(e) => editSection(e, currEduId)}
              />
              <TimeRange
                title={"To"}
                mInputName={"endMonth"}
                month={details[currEduId].endMonth}
                yInputName={"endYear"}
                year={details[currEduId].endYear}
                checkboxName={"current"}
                changeHandler={(e) => editSection(e, currEduId)}
                current={details[currEduId].current}
                isEndRange={true}
              />
              <SaveBtn clickHandler={() => setEduId(null)} />
            </form>
          ) : (
            <div className="form-tab-container">
              {eduIds.map((id) => (
                <FormTab
                  key={id}
                  deleteHandler={() => deleteSection(id, "education")}
                  editHandler={() => setEduId(id)}
                  titleText={details[id].school}
                />
              ))}
            </div>
          )}
        </FormWrapper>
      </div>
    </div>
  );
}
