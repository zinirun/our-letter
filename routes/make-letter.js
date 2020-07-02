const ejs = require('ejs'),
    fs = require('fs');

function makeletter(req, res) {
    fs.readFile('./public/makeletter.html', 'utf8', function (error, data) {
        res.send(ejs.render(data, {}));
    });
}

module.exports = makeletter;