import express, { Application } from 'express';
import { rootRoute, authRoute, accountRoute, transferRoute } from './routes';
import { corsHandler } from './middlewares';

const app: Application = express();
const port = process.env.PORT || 8080;

// express built-in middleware
app.use(express.json());
app.use(express.urlencoded());

// custom middleware
app.use(corsHandler);

// app routes
app.use('/', rootRoute);
app.use('/authenticate', authRoute);
app.use('/account', accountRoute);
app.use('/transfer', transferRoute);

app.listen(port, () => console.log(`Express now running on port ${port}!`));
