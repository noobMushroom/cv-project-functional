import { useState } from 'react';
import './styles/index.css';
import Form from './component/Form';
import { v4 as uuidv4 } from 'uuid';

export interface formProps {
  handlePersonalInfo: (e: Event) => void;
  handleWorkInfo: (e: Event, key: string) => void;
  handleContactInfo: (e: Event) => void;
  handleSkillInfo: (e: Event, key: string) => void;
  addSkill: (e: Event) => void;
  deleteSkill: (e: Event, key: string) => void;
  handleEducationInfo: (e: Event, key: string) => void;
  addWork: (e: Event) => void;
  deleteWork: (e: Event, key: string) => void;
  addEducation: (e: Event) => void;
  deleteEducation: (e: Event, id: string) => void;
}

interface Education {
  course: string;
  college: string;
  starting: string;
  ending: string;
  id: string;
}

interface Work {
  title: string;
  company: string;
  location: string;
  starting: string;
  ending: string;
  id: string;
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  about: string;
}

interface Contact {
  contact: string;
  email: string;
  address: string;
  web: string;
}

interface Skill {
  skill: string;
  id: string;
}

export interface Person {
  personal: PersonalInfo;
  contactInfo: Contact;
  skills: Skill[];
  work: Work[];
  education: Education[];
}

export default function App() {
  const [state, setState] = useState<Person>({
    personal: {
      name: '',
      lastName: '',
      about: '',
    },
    contactInfo: {
      contact: '899898909',
      email: 'something@some.com',
      address: 'tokyo',
      web: 'john.com',
    },
    skills: [],
    education: [],
    work: [],
  });

  // handling personal info (name, last name, about ) TODO:add image option
  const handlepersonalInfo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    switch (target.id) {
      case 'lastName':
        setState((prevState: Person) => ({
          ...prevState,
          personal: { ...prevState.personal, lastName: target.value },
        }));
        break;
      case 'firstName':
        setState((prevState: Person) => ({
          ...prevState,
          personal: { ...prevState.personal, name: target.value },
        }));
        break;
      case 'about':
        setState((prevState: Person) => ({
          ...prevState,
          personal: {
            ...prevState.personal,
            about: target.value,
          },
        }));
        break;
      default:
        return { ...state };
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// Handling contact info//////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  const handleContactInfo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    switch (target.id) {
      case 'number':
        setState((prevState: Person) => ({
          ...prevState,
          contactInfo: { ...state.contactInfo, number: target.value },
        }));
        break;
      case 'address':
        setState((prevState: Person) => ({
          ...prevState,
          contactInfo: { ...state.contactInfo, address: target.value },
        }));
        break;
      case 'web':
        setState((prevState: Person) => ({
          ...prevState,
          contactInfo: { ...state.contactInfo, web: target.value },
        }));
        break;
      case 'email':
        setState((prevState: Person) => ({
          ...prevState,
          contactInfo: { ...state.contactInfo, email: target.value },
        }));
        break;

      default:
        return { ...state };
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// handling work info//////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  const handleWorkInfo = (e: Event, id: string) => {
    const target = e.target as HTMLInputElement;
    const element: Work = state.work.find((work) => work.id === id)!;
    switch (target.id) {
      case 'title':
        element.title = target.value;
        break;
      case 'company':
        element.company = target.value;
      case 'location':
        element.location = target.value;
        break;
      case 'starting':
        element.starting = target.value;
        break;
      case 'ending':
        element.ending = target.value;
        break;
      default:
        return { ...state };
    }

    let temp = state.work.filter((works) => works.id !== id);
    setState((prevState: Person) => ({
      ...prevState,
      work: [...temp, { ...element }],
    }));
  };

  const addWork = (e: Event) => {
    e.preventDefault();
    setState((prevState: Person) => ({
      ...prevState,
      work: [
        ...prevState.work,
        {
          title: '',
          company: '',
          location: '',
          starting: '',
          ending: '',
          id: uuidv4(),
        },
      ],
    }));
  };
  const deleteWork = (e: Event, key: string) => {
    e.preventDefault();
    let temp = state.work.filter((element: Work) => element.id !== key);
    setState((prevState: Person) => ({
      ...prevState,
      work: [...temp],
    }));
  };

  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// handle education information////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  const handleEducationInfo = (e: Event, id: string) => {
    const target = e.target as HTMLInputElement;
    const element: Education = state.education.find(
      (element) => element.id === id
    )!;
    switch (target.id) {
      case 'course':
        element.course = target.value;
        break;
      case 'college':
        element.college = target.value;
        break;
      case 'startingDate':
        element.starting = target.value;
        break;
      case 'passing':
        element.ending = target.value;
        break;
      default:
        return { ...state };
    }
  };

  const addEducation = (e: Event) => {
    e.preventDefault();
    setState((prevState: Person) => ({
      ...prevState,
      education: [
        ...prevState.education,
        { college: '', course: '', starting: '', ending: '', id: uuidv4() },
      ],
    }));
  };

  const deleteEducation = (e: Event, key: string) => {
    e.preventDefault();
    let temp = state.education.filter((element) => element.id !== key);
    setState((prevState: Person) => ({
      ...prevState,
      education: [...temp],
    }));
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////// Skills //////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const handleSkillInfo = (e: Event, id: string) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    let temp: Skill = state.skills.find((element) => element.id === id)!;
    temp.skill = target.value;
    let tempArray = state.skills.filter((element) => element.id !== id);
    setState((prevState: Person) => ({
      ...prevState,
      skills: [...tempArray],
    }));
  };

  const addSkill = (e: Event) => {
    e.preventDefault();
    setState((prevState: Person) => ({
      ...prevState,
      skills: [...prevState.skills, { skill: '', id: uuidv4() }],
    }));
  };

  const deleteSkill = (e: Event, key: string) => {
    e.preventDefault();
    let temp = state.skills.filter((element) => element.id !== key);
    setState((prevState) => ({
      ...prevState,
      skills: [...temp],
    }));
  };

  return (
    <div className="w-full bg-[#0F2830] flex-col items-center flex justify-center">
      <Form
        handlePersonalInfo={handlepersonalInfo}
        handleContactInfo={handleContactInfo}
        handleSkillInfo={handleSkillInfo}
        handleEducationInfo={handleEducationInfo}
        handleWorkInfo={handleWorkInfo}
        addWork={addWork}
        addEducation={addEducation}
        deleteWork={deleteWork}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
        deleteEducation={deleteEducation}
      />
    </div>
  );
}
