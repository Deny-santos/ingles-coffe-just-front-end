import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/user';

const useName = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('Error: Missing context value');
    }

    const { name: initialName, setName, email, setEmail } = userContext;
    const userName = typeof localStorage !== 'undefined' ? localStorage.getItem('name') : '';
    //  antes de acessar o localStorage, é feita uma verificação usando typeof localStorage !== 'undefined' para garantir que o código seja executado apenas no navegador, onde o localStorage está disponível

    useEffect(() => {
        if (userName) {
            setName(userName);
        }
    }, [userName, setName]);

    const handleSubmit = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('name', initialName);
        }
        setName(initialName);
    };

    return { name: initialName, setName, handleSubmit, userName, email, setEmail };
};

export default useName;
