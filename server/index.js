import express from "express"
import cors from "cors"
import user from "./routers/user.js"

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", user)

app.listen(9090, () => {
    console.log("it is ok")
})