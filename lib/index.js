import express from 'express';
import 'dotenv/config';
const app = express();
const port = Number(process.env.PORT) || 4000;
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map