import locationImage from '../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg';
import { Person } from '../App';

interface WorkProps {
  state: Person;
  handleWorkInfo: (
    event: React.FormEvent<HTMLInputElement>,
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
            className="border-b-4 border-cyan-600 mb-[0.8rem] grid grid-cols-3 grid-rows-4 items-center"
            key={element.id}
          >
            <input
              type="text"
              placeholder="Company name"
              className="col-span-3  text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
            />
            <input
              type="text"
              placeholder="Job title"
              className="col-span-3 text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none box bg-teal-900"
            />
            <div className="col-span-3 relative ">
              <img
                src={locationImage}
                className="absolute top-5 left-1"
                alt=""
              />
              <input
                type="text"
                placeholder="Location"
                className="col-span-3  w-full pl-12 text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
              />
            </div>
            <div className="flex  mr-[1rem]  text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium box bg-teal-900">
              <label htmlFor="startingDate">Starting date:</label>
              <input
                id="startingDate"
                type="date"
                className="bg-transparent focus:outline-none ml-2"
              />
            </div>
            <div className="flex  mr-[1rem] text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium bg-teal-900 box">
              <label htmlFor="endingDate">Ending date:</label>
              <input
                id="endingDate"
                type="date"
                className=" bg-transparent focus:outline-none ml-2"
              />
            </div>
            <button
              onClick={(e) => deleteWork(e, element.id)}
              className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
            >
              DELETE
            </button>
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
