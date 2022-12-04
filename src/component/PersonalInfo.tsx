interface personalInfoProps {
  handleChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleImage: (e: React.FormEvent<HTMLInputElement>) => void;
}
export default function PersonalInfo(props: personalInfoProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        onChange={props.handleChange}
        id="firstName"
        className="w-full  text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl box font-serif font-medium focus:outline-none"
        type="text"
        placeholder="first name"
      />
      <input
        onChange={(e) => props.handleChange(e)}
        id="lastName"
        type="text"
        placeholder="last name"
        className="w-full text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl font-serif box font-medium focus:outline-none"
      />
      <textarea
        onChange={(e) => props.handleChange(e)}
        id="about"
        placeholder="About you"
        className="w-full h-[4rem] text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl box font-serif font-medium focus:outline-none aboutBox"
      />
      <div className="my-[1rem] w-full bg-teal-900 box text-xl py-[0.5rem] px-[1rem] text-white font-serif font-medium">
        <label htmlFor="profilePic">Select your profile pic </label>
        <input
          onChange={(e) => props.handleImage(e)}
          type="file"
          id="profilePic"
          className="ml-4 text-m text-zinc-400 file:bg-transparent file:outline-none file:border-none file:text-white file:hover:text-cyan-400"
        />
      </div>
    </div>
  );
}
