import { useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";
import AddSectionBtn from "../AddSectionBtn/AddSectionBtn";
import TimeRange from "../TimeRange/TimeRange";

export default function CVForm({
  editSection,
  editPersonal,
  details,
  expIds,
  addNewExp,
  showForm,
  toggleShowForm,
  showPersonal,
  showExperience,
  currExpId,
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
            labelText={"email"}
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
            </form>
          ) : (
            <p>Fuck ball</p>
          )}
        </FormWrapper>
      </div>

      {/* <Form legendText={"Experience"} canDelete={true}>
        {expIds.map((id) => (
          <>
            <InputWrapper
              key={id}
              labelText={"Position"}
              placeholder={"Your role at said job"}
              changeHandler={(e) => editSection(e, id)}
              inputName={"position"}
              value={details[id].position}
            />
            <InputWrapper
              key={id}
              labelText={"Employer"}
              placeholder={"Company you worked for"}
              changeHandler={(e) => editSection(e, id)}
              inputName={"employer"}
              value={details[id].employer}
            />
            <InputWrapper
              key={id}
              labelText={"Location"}
              placeholder={"Where you worked"}
              changeHandler={(e) => editSection(e, id)}
              inputName={"location"}
              value={details[id].location}
            />
          </>
        ))}
      </Form> */}
    </div>
  );
}
