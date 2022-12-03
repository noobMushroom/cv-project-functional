import { Person } from '../../App';

interface WorkDivProps {
  state: Person;
}

export default function WorkInfoDiv(props: WorkDivProps) {
  const { state } = props;

  return (
    <div>
      {state.work.map((element) => {
        return (
          <div key={element.id}>
            <div>
              <div>{element.title}</div>
              <div>{element.location}</div>
              <div>{element.company}</div>
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
