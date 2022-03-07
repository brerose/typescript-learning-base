import * as express from 'express';
import {Block} from "./Block";
import * as path from 'path';


const app = express();
const port = 3000;

app.listen(port);

const dir = path.join(__dirname, 'public/vue-typescript-crud/demo-react/dist');

app.set('views',  dir);
app.use(express.static(dir));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: dir});
});

const block = new Block()
app.get('/api/hello-world/', (req, res) =>  {  res.status(200).send("Hello world " + block.name) });
