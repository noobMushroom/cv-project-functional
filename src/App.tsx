import { useState, useReducer } from 'react';
import './styles/index.css';
import Form from './component/Form';

interface Education {
  course: string;
  college: string;
  starting: string;
  ending: string;
}

interface Work {
  title: string;
  company: string;
  location: string;
  about: string;
  starting: string;
  ending: string;
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

export interface Person {
  personal: PersonalInfo;
  contactInfo: Contact;
  skills: string[];
  work: Work[];
  education: Education[];
}

enum ChangeState {
  personalInfo = 'PERSONAL_INFO',
  contact = 'CONTACT',
  work = 'WORK',
  education = 'EDUCATION',
  skills = 'SKILL',
}

enum Name {
  firstName = 'NAME',
  lastName = 'LAST_NAME',
  about = 'ABOUT',
  image = 'IMG',
}

enum ContactEnum {
  number = 'NUMBER',
  email = 'EMAIL',
  website = 'WEBSITE',
  address = 'ADDRESS',
}

enum EducationEnum {
  college = 'COLLEGE',
  course = 'COURSE',
  passingYear = 'PASSING_YEAR',
  startingYear = 'STARTING_YEAR',
  addEducation = 'ADD_EDUCATION',
}

enum WorkEnum {
  jobTitle = 'JOB_TITLE',
  company = 'COMPANY',
  companyLocation = 'LOCATION',
  startingDate = 'STARTING_DATE',
  endingDate = 'ENDING_DATE',
  addwork = 'ADD_WORK',
}

enum SkillEnum {
  skills = 'SKILL',
  addSkill = 'ADD_SKILL',
}

type NameAction = {
  type: Name;
  payload: string;
};

// type to set the state in the main function
type setStateAction = {
  type: ChangeState;
  subType: SkillEnum | WorkEnum | EducationEnum | ContactEnum | Name;
  payload: any | number;
};

// function to set personal info state
function personalInfoReducer(state: Person, action: NameAction) {
  const { type, payload } = action;
}

function reducer(state: Person, action: setStateAction): Person {
  const { type, payload } = action;
  switch (type) {
    case ChangeState.contact:
      return { ...state };
    case ChangeState.personalInfo:
      return { ...state };
    case ChangeState.work:
      return { ...state };
    case ChangeState.skills:
      return { ...state };
    case ChangeState.education:
      return { ...state };
    default:
      return state;
  }
}
export default function App() {
  const initialState = {
    personal: { name: 'Deepak', lastName: 'Chandra', about: 'I am super cool' },
    contactInfo: {
      contact: '899898909',
      email: 'something@some.com',
      address: 'tokyo',
      web: 'john.com',
    },
    skills: [],
    education: [],
    work: [],
  };
  return (
    <div className="w-full bg-[#0F2830] flex justify-center">
      <Form {...initialState} />
    </div>
  );
}
