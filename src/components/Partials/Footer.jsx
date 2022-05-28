const Footer = () => {
  return (<footer className='bg-gray-400 py-6'>
    <div className='container mx-auto flex'>
      <h1 className='w-1/4 text-6xl font-bold my-4'>My Log Travels </h1>
      <div className='links flex flex-wrap w-3/4'>
        <h4 className='w-full mb-6 text-2xl'>Quick Links</h4>
        <div className='column w-1/4'>
          <a className='block py-2'>Home</a>
          <a className='block py-2'>About Us</a>
          <a className='block py-2'>My Travel Logs</a>
        </div>
        <div className='column w-1/4'>
          <a className='block py-2'>Travels</a>
          <a className='block py-2'>Promo Flights</a>
          <a className='block py-2'>Travel Routes</a>
        </div>
        <div className='column w-1/4'>
          <a className='block py-2'>Recommendations</a>
          <a className='block py-2'>Guides</a>
          <a className='block py-2'>Blogs</a>
        </div>
        <div className='column w-1/4'>
          <a className='block py-2'>Mission Statement</a>
          <a className='block py-2'>The Team</a>
          <a className='block py-2'>Contact Us</a>
        </div>

    </div></div>
    <p className='text-xl text-center mt-8'>2021 - 2022 My Log Travels. All Rights Reserved. </p>
  </footer>);
};

export default Footer;
