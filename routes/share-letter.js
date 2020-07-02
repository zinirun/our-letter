const ejs = require('ejs'),
    fs = require('fs');

async function shareLetter(req, res) {
    fs.readFile('./public/shareletter.html', 'utf8', function (error, data) {
        res.send(ejs.render(data, {
            url_id: req.params.url_id
        }));
    });
}

module.exports = shareLetter;