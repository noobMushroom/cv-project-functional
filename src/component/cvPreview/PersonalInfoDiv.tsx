import { Person } from '../../App';
interface PersonalInfoDivProps {
  state: Person;
}
export default function PersonalInfoDiv(props: PersonalInfoDivProps) {
  const { state } = props;
  return (
    <div className="fontHeight uppercase text-5xl font-black tracking-wide customfont ">
      <h1>{state.personal.name}</h1>
      <h1>{state.personal.lastName}</h1>
    </div>
  );
}
