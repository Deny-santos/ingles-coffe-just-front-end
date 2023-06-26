import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/user';

const useName = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('Error: Missing context value');
    }

    const { name: initialName, setName, email, setEmail } = userContext;
    const userName = localStorage.getItem('name') || '';

    useEffect(() => {
        if (userName) {
            setName(userName);
        }
    }, [userName, setName]);

    const handleSubmit = () => {
        localStorage.setItem('name', initialName);
        setName(initialName);
    };

    return { name: initialName, setName, handleSubmit, userName, setEmail, email  };
};

export default useName;
