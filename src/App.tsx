import { useState, useReducer, useEffect, useCallback } from 'react';
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

export default function App() {
  const [state, setState] = useState({
    personalInfo: {
      name: '',
      lastName: '',
      description: '',
    },
    contact: {
      contactNumber: 899898909,
      email: 'something@some.com',
      address: 'tokyo',
      website: 'john.com',
    },
    skills: [],
    education: [],
    work: [],
  });

  const handlepersonalInfo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    switch (target.id) {
      case 'lastName':
        setState((prevState) => ({
          ...prevState,
          personalInfo: { ...prevState.personalInfo, lastName: target.value },
        }));
      case 'firstName':
        setState((prevState) => ({
          ...prevState,
          personalInfo: { ...prevState.personalInfo, name: target.value },
        }));
    }
  };

  return (
    <div className="w-full bg-[#0F2830] flex-col items-center flex justify-center">
      <Form handlePersonalInfo={handlepersonalInfo} />
      <div className="text-white">{state.personalInfo.name}</div>
      <div className="text-white">{state.personalInfo.lastName}</div>
    </div>
  );
}
