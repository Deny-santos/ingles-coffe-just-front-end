import { words } from "../english/words.js"

export function getUser(req, res){
        const user = {
            words: words,
            expressions: [
                {expression: "wtf", traslate:"que porra é essa?"}
            ]
        }
        res.status(200).json(user)
}