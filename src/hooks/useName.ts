import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/user';

const useName = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('Error: Missing context value');
    }

    const { name: initialName, setName, email: initialEmail, setEmail } = userContext;
    const userName = typeof localStorage !== 'undefined' ? localStorage.getItem('name') : '';
    const userEmail = typeof localStorage !== 'undefined' ? localStorage.getItem('email') : '';
    //  antes de acessar o localStorage, é feita uma verificação usando typeof localStorage !== 'undefined' para garantir que o código seja executado apenas no navegador, onde o localStorage está disponível

    useEffect(() => {
        if (userName) {
            setName(userName);
        }
        if (userEmail) {
            setEmail(userEmail);
        }
        

    }, [userName, setName]);

    const handleSubmit = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('name', initialName);
        }
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('email', initialEmail);
        }
        setName(initialName);
        setEmail(initialEmail);
    };

    return { name: initialName, setName, handleSubmit, userName, email: initialEmail, setEmail };
};

export default useName;
