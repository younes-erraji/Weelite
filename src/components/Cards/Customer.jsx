import Image from '../../assets/images/02.jpg'

const Customer = ({customer: {name}}) => {
  return (
    <div className='card w-1\/3 p-2 border-2 rounded'>
      <img src={ Image } alt='' className='w-full h-20 object-cover object-center' />
      <h3 className="text-xlg font-semibold text-center my-2">{ name }</h3>
      <p className='text-base'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod
        necessitatibus laborum mollitia pariatur aut doloremque quia fugiat,
        aliquid enim modi laudantium?
      </p>
    </div>
  );
};

export default Customer;
