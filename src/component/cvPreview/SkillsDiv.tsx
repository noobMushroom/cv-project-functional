import { Person } from '../../App';

interface SkillProps {
  state: Person;
}

export default function SkillsDiv(props: SkillProps) {
  const { state } = props;

  return (
    <div>
      <ul>
        {state.skills.map((element) => {
          return <li key={element.id}>{element.skill}</li>;
        })}
      </ul>
    </div>
  );
}
