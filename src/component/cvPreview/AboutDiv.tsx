import { Person } from '../../App';

interface AboutDivProps {
  state: Person;
}

export default function AboutDiv(props: AboutDivProps) {
  const { state } = props;
  return <div className="text-sm text-left">{state.personal.about}</div>;
}
