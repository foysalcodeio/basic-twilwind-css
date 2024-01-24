import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-12 font-semibold text-gray-500 ml-2 hover:text-black'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;

