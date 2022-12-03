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
    <div className="w-3/4 bg-rose-200 min-h-[30rem] flex">
      <div></div>
      <div>
        <ContactInfoDiv state={props.state} />
        <PersonalinfoDiv state={props.state} />
        <AboutDiv state={props.state} />
        <SkillsDiv state={props.state} />
        <EducationDiv state={props.state} />
        <WorkInfoDiv state={props.state} />
        <ImageDiv state={props.state} />
      </div>
    </div>
  );
}
