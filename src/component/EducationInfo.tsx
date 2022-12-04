import { Person } from '../App';
import locationImage from '../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg';

interface EducationProps {
  state: Person;
  handleEducationInfo: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => void;
  addEducation: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteEducation: (
    event: React.MouseEvent<HTMLButtonElement>,
    key: string
  ) => void;
}

export default function EducationDiv(props: EducationProps) {
  const { state, handleEducationInfo, addEducation, deleteEducation } = props;
  return (
    <div>
      {state.education.map((element) => {
        return (
          <div
            key={element.id}
            className="border-b-4 border-cyan-700 mb-[1rem] pb-[0.8rem] flex flex-col items-center"
          >
            <input
              onChange={(e) => handleEducationInfo(e, element.id)}
              id="course"
              type="text"
              placeholder="Degree name"
              className="w-full text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
            />
            <input
              id="college"
              onChange={(e) => handleEducationInfo(e, element.id)}
              type="text"
              placeholder="College name"
              className="w-full text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none box bg-teal-900"
            />
            <div className="w-full relative ">
              <img
                src={locationImage}
                className="absolute top-5 left-1"
                alt=""
              />
              <input
                onChange={(e) => handleEducationInfo(e, element.id)}
                id="collegeLocation"
                type="text"
                placeholder="Location"
                className="w-full pl-12 text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
              />
            </div>
            <textarea
              onChange={(e) => handleEducationInfo(e, element.id)}
              id="educationInformation"
              placeholder="about your Education journey"
              className=" w-full h-[4rem] text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl box font-serif font-medium focus:outline-none aboutBox"
            />
            <div className="flex my-[1rem] items-center justify-start self-start">
              <div className="flex mr-[5rem] text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium box bg-teal-900">
                <label htmlFor="startingDate">Starting date:</label>
                <input
                  onChange={(e) => handleEducationInfo(e, element.id)}
                  id="startingDate"
                  type="date"
                  className="bg-transparent focus:outline-none ml-2 calender:bg-red-300"
                />
              </div>
              <div className="flex  mr-[1rem] text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium bg-teal-900 box">
                <label htmlFor="endingDate">Passing date:</label>
                <input
                  onChange={(e) => handleEducationInfo(e, element.id)}
                  id="passing"
                  type="date"
                  className=" bg-transparent focus:outline-none ml-2"
                />
              </div>
              <button
                onClick={(e) => deleteEducation(e, element.id)}
                className=" text-lg bg-cyan-900 ml-[10rem] font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={addEducation}
          className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
        >
          Add
        </button>
      </div>
    </div>
  );
}
