export default function PersonalInfo(props: any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        onChange={(e) => props.handleChange(e)}
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
        onChange={props.handleChange}
        id="about"
        placeholder="i don't know what am i doing"
        className="w-full h-[4rem] text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white bg-teal-900 text-xl box font-serif font-medium focus:outline-none aboutBox"
      />
      <div className="my-[1rem] w-full bg-teal-900 box text-xl py-[0.5rem] px-[1rem] text-white font-serif font-medium">
        <label htmlFor="profilePic">Select your profile pic </label>
        <input
          onChange={props.handleChange}
          type="file"
          id="profilePic"
          className="ml-4 text-m text-zinc-400 file:bg-transparent file:outline-none file:border-none file:text-white file:hover:text-cyan-400"
        />
      </div>
    </div>
  );
}
