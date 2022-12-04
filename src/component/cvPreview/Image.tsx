import { Person } from '../../App';

interface ImageProps {
  state: Person;
}

export default function ImageDiv(props: ImageProps) {
  const { state } = props;
  return (
    <div className="mt-[2rem]">
      <img
        className="h-[14rem] w-[14rem] rounded-full object-cover"
        src={state.personal.image}
        alt="profile pic"
      />
    </div>
  );
}
