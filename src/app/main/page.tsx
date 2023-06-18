import React, { useEffect, useState } from 'react'
import axios from "axios"

type Props = {}

type Words = {
    word: string[],
}

type Expressions = {
    expression: string[];
}



const MainContent = (props: Props) => {



    const [words, setWords] = useState<Words[]>([])
    const [expressions, setExpressions] = useState<Expressions[]>([])


    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/words');
                setWords(response.data.words);
                setExpressions(response.data.expressions);
                console.log(response.data.expressions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getUser()
    }, [])
    return (
        <div>
            <div >
                {words.map((all: Words, i: number) => (
                    <div key={i}>{all.word}</div>
                ))}
            </div>
            <div>
                {expressions.map((all: Expressions, i: number) => (
                    <div key={i}>{all.expression}</div>
                ))}
            </div>
        </div>
    )
}

export default MainContent