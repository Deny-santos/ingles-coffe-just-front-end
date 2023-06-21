import { expression } from "../english/expresions.js"
import { words } from "../english/words.js"

export function getUser(req, res){
        const user = {
            words: words,
            expressions: expression
        }
        res.status(200).json(user)
}