import Image from "../../assets/images/00.jpg";

const Landing = () => {
  return (
    <div className="landing my-6 py-6">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold">
            Travel to your dream destination
          </h1>
          <p className="leading-7 my-6">
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum sus pendisse ultrices gravida.
          </p>
          <button className="px-6 py-4 text-lg bg-black text-white font-semibold rounded hover:border-transparent focus:outline-none focus:ring-2 focus:ring-grey-600 focus:ring-offset-2">
            Reserve Ticket
          </button>
        </div>
        <div className="w-1/2 p-2">
          <img src={Image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
