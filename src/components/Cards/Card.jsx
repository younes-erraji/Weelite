import Image from "../../assets/images/00.jpg";

const Card = () => {
  return (
    <div className="card w-1/3 p-2 my-2">
      <img
        src={Image}
        alt=""
        className="w-full h-30 object-cover object-center"
      />
      <span className="block w-8 border-b-2 mt-4 border-black"></span>
      <h2 className="text-2xl font-bold mt-2 mb-4">Lorem ipsum dolor sit.</h2>
      <p className="text-base text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        perspiciatis dolores provident, delectus sed saepe architecto quisquam
        quos sint dolor beatae laboriosam.
      </p>
    </div>
  );
};

export default Card;
