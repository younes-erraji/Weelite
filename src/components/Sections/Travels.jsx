import Image from "../../assets/images/03.jpg";

const Travels = () => {
  return (<div className="Travels my-6 py-6 bg-gray-700">
  <div className="container mx-auto flex items-center">
    <div className="w-1/2">
      <h3 className="text-4xl text-white font-bold mb-4">Choose anywhere you’d like to be </h3>
      <p className="text-justify text-white leading-6 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum sus pendisse ultrices gravida.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum sus pendisse ultrices gravida.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum sus pendisse ultrices gravida.
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum sus pendisse ultrices gravida.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum sus pendisse ultrices gravida.
        <br />
      </p>
    </div>
    <div className="w-1/2 p-4">
      <img src={Image} alt="" className="w-full" />
    </div>
  </div>
</div>);
};

export default Travels;
