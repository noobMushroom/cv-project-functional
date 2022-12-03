import { Person } from '../../App';

interface EducationDivProps {
  state: Person;
}

export default function EducationDiv(props: EducationDivProps) {
  const { state } = props;

  return (
    <div>
      {state.education.map((element) => {
        return (
          <div key={element.id}>
            <div>
              <div>{element.course}</div>
              <div>{element.college}</div>
            </div>
            <div>
              <div>{element.starting}</div>
              <div>{element.ending}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
