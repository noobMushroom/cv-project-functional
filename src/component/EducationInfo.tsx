export default function EducationDiv() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 items-center">
        <input
          type="text"
          placeholder="Degree name"
          className="col-span-3  text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none bg-teal-900 box"
        />
        <input
          type="text"
          placeholder="College name"
          className="col-span-3 text-white my-[1rem] py-[0.5rem] px-[1rem] placeholder-white  text-xl font-serif font-medium focus:outline-none box bg-teal-900"
        />
        <div className="flex  mr-[1rem]  text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium box bg-teal-900">
          <label htmlFor="startingDate">Starting date:</label>
          <input
            id="startingDate"
            type="date"
            className="bg-transparent focus:outline-none ml-2"
          />
        </div>
        <div className="flex  mr-[1rem] text-white h-[2.5rem] px-[1rem] py-[0.8rem] items-center text-l font-serif font-medium bg-teal-900 box">
          <label htmlFor="endingDate">Passing date:</label>
          <input
            id="endingDate"
            type="date"
            className=" bg-transparent focus:outline-none ml-2"
          />
        </div>
        <button className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box">
          DELETE
        </button>
      </div>
      <div>
        <button className=" text-lg bg-cyan-900 font-mono hover:bg-cyan-700 text-white font-black h-[2.5rem] text-center  w-[8rem] justify-self-center  rounded-xl box">
          Add
        </button>
      </div>
    </div>
  );
}
