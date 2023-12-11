import React from 'react';

const Successpage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111A28] lg:px-0 px-7">
            <div className="bg-white rounded-lg shadow-lg p-12 max-w-md">
                <div className="rounded-full h-40 w-40 flex items-center justify-center bg-gray-200 mx-auto">
                    <svg
                        className="text-green-500 h-20 w-20 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-green-600 text-center mt-5 mb-4 tracking-wider">Congratulations 🌟</h1>
                <p className="text-gray-600 text-lg text-center">
                    Welcome to our platform. We're delighted to have you here 👋
                </p>
            </div>
        </div>
    );
};

export default Successpage;