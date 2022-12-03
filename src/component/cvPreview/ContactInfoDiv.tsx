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
    <div>
      <div className="relative flex items-center">
        <img src={contactImage} alt="" className="w-[2rem] mr-[0.8rem]" />
        {state.contactInfo.contact}
      </div>
      <div className="relative flex items-center">
        <img src={emailImage} alt="" className="w-[2rem] mr-[0.8rem]" />
        {state.contactInfo.email}
      </div>
      <div className="relative flex items-center">
        <img src={locationImage} alt="" className="w-[2rem] mr-[0.8rem]" />
        {state.contactInfo.address}
      </div>
      <div className="relative flex items-center">
        <img src={urlImage} alt="" className="w-[2rem] mr-[0.8rem]" />
        {state.contactInfo.web}
      </div>
    </div>
  );
}
