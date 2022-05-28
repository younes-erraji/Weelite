import { useState, useEffect } from 'react';

import Customer from "../Cards/Customer";

const Testimonials = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('./assets/DB/customers.json')
      .then((response) => response.json())
      .then((response) => {

        const users = response.map((customer) => <Customer key={customer.id} customer={customer} />)
        setCustomers([...users]);
      });
  }, []);

  return (<div className='customers my-6 py-6'>
    <h1 className="text-6xl text-center font-bold mb-4">Here’s what they have to say... </h1>
    <div className='customers flex'>
      { customers }
    </div>
  </div>);
};

export default Testimonials;
