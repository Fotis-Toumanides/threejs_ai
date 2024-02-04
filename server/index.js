import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalje.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limimg: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "DAL E says 'Hello world'" })
})

app.listen(8080, () => console.log("Server started 8080"))