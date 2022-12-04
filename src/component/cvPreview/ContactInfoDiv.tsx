import { Person } from '../../App';
import locationImage from '../../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg';
import urlImage from '../../assets/language_FILL0_wght400_GRAD0_opsz48.svg';
import contactImage from '../../assets/call_FILL0_wght400_GRAD0_opsz48.svg';
import emailImage from '../../assets/mail_FILL0_wght400_GRAD0_opsz48.svg';

interface ContactInfoDivProps {
  state: Person;
}
export default function ContactInfoDiv(props: ContactInfoDivProps) {
  const { state } = props;
  return (
    <div className="text-zinc-700">
      <div className="relative flex items-center mb-[0.4rem]">
        <img
          src={contactImage}
          alt=""
          className="w-[1.5rem] absolute top-[1.2%] object-cover"
        />
        <div className="pl-[2.3rem]">{state.contactInfo.contact}</div>
      </div>
      <div className="relative flex items-center mb-[0.4rem]">
        <img
          src={emailImage}
          alt=""
          className="w-[1.5rem] absolute top-[1.2%] object-cover"
        />
        <div className="pl-[2.3rem]">{state.contactInfo.email}</div>
      </div>
      <div className="relative flex items-center mb-[0.4rem]">
        <img
          src={locationImage}
          alt=""
          className="w-[1.5rem] absolute top-[1.2%] object-cover"
        />
        <div className="pl-[2.3rem]">{state.contactInfo.address}</div>
      </div>
      <div className="relative flex items-center mb-[0.4rem]">
        <img
          src={urlImage}
          alt=""
          className="w-[1.5rem] absolute top-[1.2%] object-cover"
        />
        <div className="pl-[2.3rem]">{state.contactInfo.web}</div>
      </div>
    </div>
  );
}
