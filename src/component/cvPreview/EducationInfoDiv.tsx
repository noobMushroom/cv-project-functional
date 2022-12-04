import { Person } from '../../App';
import pointPic from '../../assets/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg';

interface EducationDivProps {
  state: Person;
}

export default function EducationDiv(props: EducationDivProps) {
  const { state } = props;

  return (
    <div className="mt-[2rem]">
      {state.education.map((element) => {
        return (
          <div key={element.id} className="flex">
            <div className="w-1/3">
              <div className="font-bold text-xl uppercase">
                {element.college}
              </div>
              <div className="capitalize">{element.location}</div>
              <div>
                {element.starting.slice(0, 7)} to {element.ending.slice(0, 7)}
              </div>
            </div>
            <div className="w-2/3  border-l-4 pl-[2.2rem] pb-[1rem] border-sky-900 pl-[0.9rem]">
              <div className="flex relative mb-[0.5rem]">
                <img
                  src={pointPic}
                  alt=""
                  className="w-[1.5rem] object-contain absolute left-[-1.8rem]  bg-white"
                />
                <div className="font-bold capitalize text-xl pl-[1rem]">
                  {element.course}
                </div>
              </div>
              <div className="italic pl-[1rem]">
                {element.educationInformation}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
