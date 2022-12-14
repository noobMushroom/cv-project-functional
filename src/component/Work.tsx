import locationImage from '../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg';
import { Person } from '../App';

interface WorkProps {
  state: Person;
  handleWorkInfo: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => void;
  addWork: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteWork: (e: React.MouseEvent<HTMLButtonElement>, key: string) => void;
}

export default function Work(props: WorkProps) {
  const { deleteWork, addWork, state, handleWorkInfo } = props;
  return (
    <div>
      {state.work.map((element) => {
        return (
          <div
            className="border-b-4 border-cyan-600 mb-[1rem] pb-[0.8rem] flex flex-col items-center"
            key={element.id}
          >
            <input
              onChange={(e) => handleWorkInfo(e, element.id)}
              id="company"
              type="text"
              placeholder="Company name"
              className=" w-full text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
            />
            <input
              onChange={(e) => handleWorkInfo(e, element.id)}
              id="title"
              type="text"
              placeholder="Job title"
              className="w-full text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none box bg-teal-900"
            />
            <div className="w-full relative ">
              <img
                src={locationImage}
                className="absolute top-5 left-1"
                alt=""
              />
              <input
                onChange={(e) => handleWorkInfo(e, element.id)}
                id="location"
                type="text"
                placeholder="Location"
                className="w-full pl-12 text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
              />
            </div>
            <textarea
              onChange={(e) => handleWorkInfo(e, element.id)}
              id="workInformation"
              placeholder="about your work"
              className=" w-full h-[4rem] text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl box font-serif font-medium focus:outline-none aboutBox"
            />
            <div className="flex my-[1rem] items-center justify-start self-start">
              <div className="flex mr-[5rem]  text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium box bg-teal-900">
                <label htmlFor="startingDate">Starting date:</label>
                <input
                  onChange={(e) => handleWorkInfo(e, element.id)}
                  id="starting"
                  type="date"
                  className="bg-transparent focus:outline-none ml-2"
                />
              </div>
              <div className="flex  mr-[1rem] text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium bg-teal-900 box">
                <label htmlFor="endingDate">Ending date:</label>
                <input
                  onChange={(e) => handleWorkInfo(e, element.id)}
                  id="ending"
                  type="date"
                  className=" bg-transparent focus:outline-none ml-2"
                />
              </div>
              <button
                onClick={(e) => deleteWork(e, element.id)}
                className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] ml-[10rem] rounded-xl box"
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={addWork}
          className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
        >
          Add
        </button>
      </div>
    </div>
  );
}
