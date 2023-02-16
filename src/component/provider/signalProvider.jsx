import React from 'react';
import Provide from './provide';
import img from '../../assets/img/trading.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/trading.jpg';

const providers = [
    {
        id : 1,
        name : 'Same',
        acuracy : 50,
        image : img
    },
    {
        id : 2,
        name : 'Mike',
        acuracy : 50,
        image : img2
    },
    {
        id : 3,
        name : 'Smith',
        acuracy : 50,
        image : img3
    },
]
const signalProvider = () => {
  return (
    <div className='container md:mx-10 my-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 px-4 py-4'>
            {providers.map((provider) => (
                <div key={provider.id} >
                    <Provide  provider={provider} />
                </div>
            ))}
        </div>
    </div>
  )
}
export default signalProvider