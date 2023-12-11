import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingElement = () => {
    return (
        <div className='bg-[#111A28] flex items-center justify-center min-h-screen'>
            <Oval
                height={100}
                width={100}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={4}
                strokeWidthSecondary={4}

            />

        </div>
    );
};

export default LoadingElement;