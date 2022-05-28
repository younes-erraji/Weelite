import Image from "../../assets/images/03.jpg";

const Discover = () => {
  return (<div className="discover my-6 py-6">
    <h1 className="text-6xl text-center font-bold mb-4">See places you’ve <span className='border-b-2 border-black'>never</span> been before</h1>

    <p className="text-center leading-7 mt-2 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="container mx-auto flex items-center mt-8">
      <div className="w-2/5">
        <img src={Image} alt="" className="w-full pl-2" />
      </div>

      <div className="w-3/5 pl-4">
        <img src={Image} alt="" className="w-full h-20 object-cover object-center" />
        <h2 className="text-2xl font-bold my-4">Lorem ipsum dolor sit amet</h2>
        <p className="text-justify leading-7">
          Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum sus pendisse ultrices gravida, consectetur adipi scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum sus pendisse ultrices gravida.
          <br />
          consectetur adipi scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum sus pendisse ultrices gravida, consectetur adipi scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum sus pendisse ultrices gravida.
        </p>
      </div>
    </div>
  </div>);
};

export default Discover;
