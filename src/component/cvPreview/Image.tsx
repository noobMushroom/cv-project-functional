import { Person } from '../../App';

interface ImageProps {
  state: Person;
}

export default function ImageDiv(props: ImageProps) {
  const { state } = props;
  return (
    <div>
      <img src={state.personal.image} alt="profile pic" />
    </div>
  );
}
