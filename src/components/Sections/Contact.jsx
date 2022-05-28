import Image from "../../assets/images/00.jpg";

const Contact = () => {
  return (<div className="Contact my-6 py-6">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold my-4">
          Be Updated!
        </h1>
        <form>
          <input type='text' className='w-full rounded border-2 py-2 px-4 my-2' placeholder='First Name *' />
          <input type='text' className='w-full rounded border-2 py-2 px-4 my-2' placeholder='Last Name *' />
          <input type='email' className='w-full rounded border-2 py-2 px-4 my-2' placeholder='E-mail Subject *' />
          <textarea placeholder='Write Something Here ...' className='w-full rounded border-2 py-2 px-4 my-2'></textarea>
          <button className="w-full px-4 py-2 rounded text-md bg-black text-white font-semibold hover:border-transparent focus:outline-none focus:ring-2 focus:ring-grey-600 focus:ring-offset-2 mt-4">
            Submit Email
          </button>
        </form>
      </div>
      <div className="w-1/2 p-4">
        <img src={Image} alt="" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  </div>);
};

export default Contact;
