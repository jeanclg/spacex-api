import express from 'express'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({msg: 'foi'});
})

app.listen(4000, () => {
    console.log('listening on 4000')
})