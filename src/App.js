import "./styles.css";
import React from "react";
import styled from "styled-components";
import InputSection from "./components/Input/index";
import OutputSection from "./components/Output/index";
import { useReactToPrint } from "react-to-print";
import PrintBtn from "./components/PrintBtn";
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  padding: 20px;
`;
export default function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    data: [
      [
        {
          value: "",
          field: "firstName",
          placeholder: "First name",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "lastName",
          placeholder: "Last name",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "photo",
          placeholder: "Photo",
          type: "file",
          index: 1,
        },
        {
          value: "",
          field: "address",
          placeholder: "Address",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "phoneNumber",
          placeholder: "Phone number",
          type: "number",
          index: 1,
        },
        {
          value: "",
          field: "email",
          placeholder: "Email",
          type: "email",
          index: 1,
        },
      ],
    ],
  });

  const [about, setAbout] = React.useState("");

  const [experience, setExperience] = React.useState({
    data: [
      [
        {
          value: "",
          field: "position",
          placeholder: "Position",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "company",
          placeholder: "Company",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "from",
          placeholder: "From",
          type: "text",
          index: 1,
        },
        { value: "", field: "to", placeholder: "To", type: "text", index: 1 },
      ],
    ],
  });

  const [education, setEducation] = React.useState({
    data: [
      [
        {
          value: "",
          field: "university",
          placeholder: "University name",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "city",
          placeholder: "City",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "degree",
          placeholder: "Degree",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "subject",
          placeholder: "Subject",
          type: "text",
          index: 1,
        },
        {
          value: "",
          field: "from",
          placeholder: "From",
          type: "text",
          index: 1,
        },
        { value: "", field: "to", placeholder: "To", type: "text", index: 1 },
      ],
    ],
  });
  function addEducation() {
    setEducation((prevEducation) => {
      const index = prevEducation.data.length + 1;
      prevEducation.data.push([
        {
          value: "",
          field: "university",
          placeholder: "University name",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "city",
          placeholder: "City",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "degree",
          placeholder: "Degree",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "subject",
          placeholder: "Subject",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "from",
          placeholder: "From",
          type: "text",
          index: index,
        },
        { value: "", field: "to", placeholder: "To", type: "text", index: 1 },
      ]);
      return prevEducation;
    });
  }

  function addExperience() {
    setExperience((prevExperience) => {
      const index = prevExperience.data.length + 1;
      prevExperience.data.push([
        {
          value: "",
          field: "position",
          placeholder: "Position",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "company",
          placeholder: "Company",
          type: "text",
          index: index,
        },
        {
          value: "",
          field: "from",
          placeholder: "From",
          type: "text",
          index: index,
        },
        { value: "", field: "to", placeholder: "To", type: "text", index: 1 },
      ]);
      return prevExperience;
    });
  }

  function deleteEducation(index) {
    setEducation((prevEducation) => {
      prevEducation.data.splice(index, 1);
      return prevEducation;
    });
  }
  function deleteExperience(index) {
    setExperience((prevExperience) => {
      prevExperience.data.splice(index, 1);
      return prevExperience;
    });
  }

  const [skills, setSkills] = React.useState([
    {
      index: 1,
      value: "",
    },
  ]);

  function updateAbout(e) {
    setAbout(e.currentTarget.value);
  }

  function updateSkills(e, index) {
    const value = e.currentTarget.value;

    setSkills((prevSkills) => {
      const skillIndex = prevSkills.findIndex((skill) => {
        return skill.index === index;
      });
      prevSkills[skillIndex].value = value;
      return prevSkills.map((skill, curIndex) => {
        skill.index = curIndex + 1;
        return skill;
      });
    });
  }
  // Copy to other functions
  function updatePersonalInfo(e, placeholder, index) {
    const value = e.currentTarget.value;

    const realIndex = index;
    setPersonalInfo((prevInfo) => {
      const index = prevInfo.data.findIndex((arr) => {
        return arr.some((obj) => {
          return obj.index === realIndex;
        });
      });
      const innerIndex = prevInfo.data[index].findIndex((obj) => {
        return obj.placeholder === placeholder;
      });
      prevInfo.data[index][innerIndex].value = value;
      return {
        ...prevInfo,
      };
    });
  }
  function updateExperience(e, placeholder, index) {
    const value = e.currentTarget.value,
      realIndex = index;

    setExperience((prevInfo) => {
      const index = prevInfo.data.findIndex((arr) => {
        return arr.some((obj) => {
          return obj.index === realIndex;
        });
      });
      const innerIndex = prevInfo.data[index].findIndex((obj) => {
        return obj.placeholder === placeholder;
      });
      prevInfo.data[index][innerIndex].value = value;
      return {
        ...prevInfo,
      };
    });
  }

  function updateEducation(e, placeholder, index) {
    const value = e.currentTarget.value,
      realIndex = index;
    setEducation((prevInfo) => {
      const index = prevInfo.data.findIndex((arr) => {
        return arr.some((obj) => {
          return obj.index === realIndex;
        });
      });
      const innerIndex = prevInfo.data[index].findIndex((obj) => {
        return obj.placeholder === placeholder;
      });
      prevInfo.data[index][innerIndex].value = value;
      return {
        ...prevInfo,
      };
    });
  }

  function setSkillIndexes() {
    setSkills((prevSkills) => {
      return prevSkills.map((skill, index) => {
        return {
          ...skill,
          index,
        };
      });
    });
  }

  function addSkill() {
    setSkills((prevSkills) => {
      return [...prevSkills, { index: prevSkills.length + 1, value: "" }];
    });
  }

  function deleteSkill(index) {
    setSkills((prevSkills) => {
      return prevSkills.filter((skill) => {
        return skill.index !== index;
      });
    });
    setSkillIndexes();
  }

  function setImage(img) {
    setPersonalInfo((prevInfo) => {
      const index = prevInfo.data[0].findIndex((field) => {
        return field.field === "photo";
      });
      prevInfo.data[0][index].value = img;
      return prevInfo;
    });
  }

  function updateImage(file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function fileUploadHandler(e) {
    const file = e.target.files[0];

    if (file && file.type.substr(0, 5) === "image") {
      updateImage(file);
    } else {
      updateImage(null);
    }
  }

  const outputRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => outputRef.current,
  });

  return (
    <>
      <PrintBtn func={handlePrint} />
      <Content>
        <InputSection
          personalInfo={personalInfo}
          experience={experience}
          education={education}
          skills={skills}
          about={about}
          updatePersonalInfo={updatePersonalInfo}
          updateExperience={updateExperience}
          updateEducation={updateEducation}
          updateSkills={updateSkills}
          updateAbout={updateAbout}
          addEducation={addEducation}
          addExperience={addExperience}
          deleteEducation={deleteEducation}
          deleteExperience={deleteExperience}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          fileUploadHandler={fileUploadHandler}
        />
        <OutputSection
          personalInfo={personalInfo}
          experience={experience}
          education={education}
          skills={skills}
          about={about}
          ref={outputRef}
        />
      </Content>
    </>
  );
}
