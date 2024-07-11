import React from 'react';
import { useSelector } from 'react-redux';

const Another = () => {
    const {user , token} = useSelector(state => state.auth);
    return (
        <div>
           Another <br/>
           {user}<br/>{token}
        </div>
    );
};

export default Another;