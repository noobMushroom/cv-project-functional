import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import ContactInfoDiv from './ContactInfoDiv';
import { Person } from '../../App';
import PersonalinfoDiv from './PersonalInfoDiv';
import AboutDiv from './AboutDiv';
import SkillsDiv from './SkillsDiv';
import EducationDiv from './EducationInfoDiv';
import WorkInfoDiv from './WorkInfoDiv';
import ImageDiv from './Image';
import closeImage from '../../assets/close.png';
import printImage from '../../assets/icons8-printer-64.png';
interface CvPreviewProps {
  state: Person;
  isOpen: boolean;
  openClose: () => void;
}

const CvPreview = (props: CvPreviewProps) => {
  if (!props.isOpen) return null;
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="w-full flex items-center justify-center absolute animation bg-black/70 h-full">
      <div
        ref={componentRef}
        className="print flex-row-reverse p-[1rem] mb-[1rem] w-3/4 min-h-[50rem] box flex "
      >
        <div className="w-2/3 bg-white text-stone-700 p-[1rem] right pl-[2rem]">
          <div className="flex items-center justify-between personalInfoName mt-[5.7rem] pb-[3rem] border-b-2 border-stone-700">
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
          <div className="mt-[1.5rem] mb-[1rem]">
            <h1 className="mb-[1rem] uppercase font-bold text-2xl">
              Education
            </h1>
            <div>
              <EducationDiv state={props.state} />
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-stone-700 text-white p-[1rem] left  flex flex-col items-center">
          <div>
            <ImageDiv state={props.state} />
          </div>
          <div className="mt-[2rem] pl-[2rem] ">
            <h1 className="mb-[1rem] uppercase font-bold text-2xl ">
              About Me
            </h1>
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
      <div className="fixed top-[30%] right-[7%] flex flex-col items-center h-[18rem] justify-around ">
        <button onClick={props.openClose}>
          <img src={closeImage} alt="" className=" w-[4rem] mb-[1rem]" />
        </button>
        <button onClick={handlePrint}>
          <img src={printImage} alt="" className="w-[4rem]" />
        </button>
      </div>
    </div>
  );
};

export default CvPreview;
