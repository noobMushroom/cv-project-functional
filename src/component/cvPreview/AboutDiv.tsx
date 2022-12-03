import { Person } from '../../App';

interface AboutDivProps {
  state: Person;
}

export default function AboutDiv(props: AboutDivProps) {
  const { state } = props;
  return <div>{state.personal.about}</div>;
}
