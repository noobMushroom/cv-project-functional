import ContactInfoDiv from './ContactInfoDiv';
import { Person } from '../../App';
import PersonalinfoDiv from './PersonalInfoDiv';
import AboutDiv from './AboutDiv';
import SkillsDiv from './SkillsDiv';
import EducationDiv from './EducationInfoDiv';
import WorkInfoDiv from './WorkInfoDiv';
import ImageDiv from './Image';
interface CvPreviewProps {
  state: Person;
}
export default function CvPreview(props: CvPreviewProps) {
  return (
    <div className="flex-row-reverse p-[1rem] mb-[1rem] w-3/4 min-h-[50rem] flex">
      <div className="w-2/3 bg-white text-stone-700 p-[1rem] pl-[2rem]">
        <div className="flex items-center justify-between mt-[5.7rem] pb-[3rem] border-b-2 border-stone-700">
          <PersonalinfoDiv state={props.state} />
          <ContactInfoDiv state={props.state} />
        </div>
        <div className="mt-[1.5rem] border-b-2 border-stone-700 pb-[2rem]">
          <h1 className="mb-[1rem] uppercase font-bold text-2xl">
            Work Experience
          </h1>
          <div>
            <WorkInfoDiv state={props.state} />
          </div>
        </div>
        <div>
          <EducationDiv state={props.state} />
        </div>
      </div>
      <div className="w-1/3 bg-stone-700 text-white p-[1rem] flex flex-col items-center">
        <div>
          <ImageDiv state={props.state} />
        </div>
        <div className="mt-[2rem] pl-[2rem] ">
          <h1 className="mb-[1rem] uppercase font-bold text-2xl ">About Me</h1>
          <div className="border-b-2 pb-[2.5rem] border-stone-300">
            <AboutDiv state={props.state} />
          </div>
        </div>
        <div className="self-start mt-[2rem] pl-[2rem] ">
          <h1 className="mb-[1rem] uppercase font-bold text-2xl">Skills</h1>
          <div>
            <SkillsDiv state={props.state} />
          </div>
        </div>
      </div>
    </div>
  );
}
