// Core Module
const Path = require('path');
//gives Directory of Entry point file such as app.js
module.exports = Path.dirname(require.main.filename); 
