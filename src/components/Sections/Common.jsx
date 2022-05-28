import Question from "../Items/Question";
import Image from "../../assets/images/03.jpg";

const Common = () => {
  return (<div className="Common my-6 py-6">
  <div className="container mx-auto flex items-center">

    <div className="w-8/12">

    <h3 className='text-6xl font-bold my-4'>Lorem ipsum dolor sit amet consectetur</h3>
      <ul>
        {[1,2,3,4].map((item, index) => {
          return <Question key={index} />
        })}
      </ul>
    </div>
    <div className="w-1/3 p-4">
      <img src={Image} alt="" className="w-full" />
    </div>
  </div>
</div>);
};

export default Common;
