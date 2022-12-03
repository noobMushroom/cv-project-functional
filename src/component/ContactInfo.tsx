import contactImage from '../assets/call_FILL0_wght400_GRAD0_opsz48.svg';
import urlImage from '../assets/language_FILL0_wght400_GRAD0_opsz48.svg';
import emailImage from '../assets/mail_FILL0_wght400_GRAD0_opsz48.svg';
import addressImage from '../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg';

interface contactInfoProps {
  handleContactInfo: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function ContactInfo(props: contactInfoProps) {
  const { handleContactInfo } = props;
  return (
    <div className="md:grid md:grid-cols-2 md:gap-x-10 md:m-auto sm:w-full flex flex-col items-center justify-center">
      <div className="relative">
        <img
          src={contactImage}
          alt=""
          className="contactImage absolute left-2 top-5"
        />
        <input
          id="number"
          onChange={handleContactInfo}
          type="tel"
          placeholder="contactNumber"
          className="text-white py-[0.5rem] my-[1rem] px-[1rem] pl-16 w-full placeholder-white bg-teal-900 box text-xl font-serif font-medium focus:outline-none"
        />
      </div>
      <div className="relative">
        <img src={emailImage} alt="" className="absolute left-2 top-5" />
        <input
          id="email"
          onChange={handleContactInfo}
          type="email"
          placeholder="email"
          className=" text-white py-[0.5rem] my-[1rem] px-[1rem] pl-16 w-full placeholder-white bg-teal-900 box text-xl font-serif font-medium focus:outline-none"
        />
      </div>
      <div className="relative">
        <img src={urlImage} alt="" className="absolute left-2 top-5" />
        <input
          id="web"
          onChange={handleContactInfo}
          type="url"
          placeholder="url"
          className="  box text-white py-[0.5rem] px-[1rem] pl-16 my-[1rem] w-full placeholder-white bg-teal-900 text-xl font-serif font-medium focus:outline-none"
        />
      </div>
      <div className="relative">
        <img src={addressImage} alt="" className="  absolute left-2 top-5" />
        <input
          id="address"
          onChange={handleContactInfo}
          type="text"
          placeholder="address"
          className="bg-teal-900 box text-white pl-16 w-full py-[0.5rem] my-[1rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none"
        />
      </div>
    </div>
  );
}
