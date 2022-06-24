import express from 'express';
import cors from 'cors';
import routes from './routes';

const createServer = async () => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use('/public', express.static('public'));

    app.use(routes);
    
    app.listen(4000);
};

createServer();