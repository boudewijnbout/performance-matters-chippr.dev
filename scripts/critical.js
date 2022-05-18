const critical = require('critical');

critical.generate({
    base: 'public/',
    src: 'views/index.ejs',
    target: 'css/critical.css',
    width: 1300,
    height: 900,
});