import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';
export default function Footer() {
  return (
    <footer className="flex items-center mb-[1rem] mt-[2rem] text-white font-slim text-xl">
      <div className="gitHub">
        <a href="https://github.com/noobMushroom/cv-project-functional.git">
          <img
            className="w-[2rem] mr-[1rem] "
            src={githubLogo}
            alt="github logo"
          />
        </a>
      </div>
      created by Mushroom
    </footer>
  );
}
