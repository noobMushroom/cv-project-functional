import { Person } from '../../App';
import pointPic from '../../assets/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg';

interface WorkDivProps {
  state: Person;
}

export default function WorkInfoDiv(props: WorkDivProps) {
  const { state } = props;

  return (
    <div className="mt-[2rem]">
      {state.work.map((element) => {
        return (
          <div key={element.id} className="flex">
            <div className="w-1/3 printWorkInfo">
              <div className="font-bold text-xl uppercase">
                {element.company}
              </div>
              <div className="capitalize">{element.location}</div>
              <div className="flex items-center datesPrint">
                <div>{element.starting.slice(0, 7)}&nbsp;</div>
                to &nbsp;
                <div>{element.ending.slice(0, 7)}</div>
              </div>
            </div>
            <div className="w-2/3 border-l-4 pl-[2.2rem] pb-[1rem] border-sky-900 pl-[0.9rem]">
              <div className="flex relative mb-[0.5rem]">
                <img
                  src={pointPic}
                  alt=""
                  className="w-[1.5rem] object-contain absolute left-[-1.8rem] bg-white"
                />
                <div className="font-bold capitalize text-xl pl-[1rem]">
                  {element.title}
                </div>
              </div>
              <div className="italic pl-[1rem]">{element.workInformation}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
