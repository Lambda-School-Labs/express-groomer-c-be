const app = require('./api/app.js');
require('dotenv').config()

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
app.timeout = 60 * 10 * 1000;
