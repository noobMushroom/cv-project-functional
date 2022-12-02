import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import Work from './Work';
import EducationDiv from './EducationInfo';
import SkillsDiv from './SkillsInfo';
import { formProps } from '../App';

export default function Form(props: formProps) {
  return (
    <form className=" w-3/4 p-[1rem] flex flex-col">
      <div>
        <h1 className="mt-[1rem] text-white text-4xl font-black text-center">
          Personal info
        </h1>
      </div>
      <PersonalInfo handleChange={props.handlePersonalInfo} />
      <div>
        <h1 className="mt-[2rem] text-white text-4xl font-black text-center mb-[1rem]">
          Contact Info
        </h1>
      </div>
      <ContactInfo />
      <div>
        <h1 className="mt-[2rem]  text-white text-4xl font-black text-center">
          Experience
        </h1>
      </div>
      <Work />
      <div>
        <h1 className="mt-[2rem] text-white text-4xl font-black text-center">
          Education
        </h1>
      </div>
      <EducationDiv />
      <div>
        <h1 className="mt-[2rem] text-white text-4xl font-black text-center">
          Skills
        </h1>
      </div>
      <SkillsDiv />
    </form>
  );
}
