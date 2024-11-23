import PropTypes from "prop-types";
import { Date } from "../../../Shared/Date/Date";
import { Input } from "../../../Shared/Input/Input";
import { TextArea } from "../../../Shared/TextArea/TextArea";
import { Button } from "../../../Shared/Button/Button";
import ExperienceStyles from "./experience.form.module.scss";

ExperienceForm.propTypes = {
  resumeData: PropTypes.object.isRequired,
  setResumeData: PropTypes.func.isRequired,
};

export function ExperienceForm(props) {
  const { resumeData, setResumeData } = props;

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = resumeData.experience.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const handleAddExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { role: "", company: "", fromDate: "", toDate: "", description: "" },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = resumeData.experience.filter(
      (_, i) => i !== index
    );
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  return (
    <div className={ExperienceStyles.Experience}>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className={ExperienceStyles.ExperienceEntry}>
          <Input
            type="text"
            label="role"
            text="Role"
            value={exp.role}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Input
            type="text"
            label="company"
            text="Company"
            value={exp.company}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Date
            label="from-date"
            text="From Date"
            value={exp.fromDate}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Date
            label="to-date"
            text="To Date"
            value={exp.toDate}
            onChange={(e) => handleInputChange(index, e)}
          />
          <TextArea
            label="description"
            text="Description"
            value={exp.description}
            onChange={(e) => handleInputChange(index, e)}
          />
          <Button onClick={() => handleRemoveExperience(index)} text="Remove" />
        </div>
      ))}
      <Button text="Add Experience" onClick={handleAddExperience}/>
    </div>
  );
}
