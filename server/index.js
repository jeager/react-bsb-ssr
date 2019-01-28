import express from 'express';

// ~where the magic happens~
import serverRenderer from './middleware/renderer';
import serverRendererWithState from './middleware/rendererWithState';

const PORT = 3000;
const path = require('path');
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use('^/state', serverRendererWithState);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

app.use(router);

app.listen(PORT, (error) => {
  console.log("Server is running!")
  if (error) {
      return console.log('something bad happened', error);
  }
})