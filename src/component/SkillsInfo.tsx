import { Person } from '../App';

interface SkillsDivProps {
  state: Person;
  addSkill: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteSkill: (e: React.MouseEvent<HTMLButtonElement>, key: string) => void;
  handleSkillInfo: (e: React.FormEvent<HTMLInputElement>, key: string) => void;
}

export default function SkillsDiv(props: SkillsDivProps) {
  const { state, addSkill, deleteSkill, handleSkillInfo } = props;
  return (
    <div>
      {state.skills.map((element) => {
        return (
          <div
            key={element.id}
            className="flex items-center w-full justify-between"
          >
            <input
              type="text"
              placeholder="My cool skill"
              className="w-5/6 col-span-3  text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
            />
            <button
              onClick={(e) => deleteSkill(e, element.id)}
              className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
            >
              DELETE
            </button>
          </div>
        );
      })}
      <div>
        <button
          onClick={addSkill}
          className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
