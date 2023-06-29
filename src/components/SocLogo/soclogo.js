import logo from "./logo-51c754388b198e5bbb0d08a971ebbfa2.png";

/**
 * This stores and displays the brand image.
 * @returns
 */

const SocLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="soclogo"
        src={logo}
        alt="missing"
        height="300"
        width="300"
      ></img>
      <h1 className="font-Open font-semibold text-6xl md:text-8xl text-sky-900 pt-10">
        Student Hub
      </h1>
      </div>
      
  );
};

export default SocLogo;
