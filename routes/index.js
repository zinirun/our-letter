const ejs = require('ejs'),
    fs = require('fs'),
    mysql = require('mysql'),
    cors = require('cors');

const mySqlClient = mysql.createConnection(require('../config/db_config'));

function index(req, res) {

    const countLetterSql = 'select count(*) as cnt from letter;';

    mySqlClient.query(countLetterSql, function (err) {
        if (err) {
            console.log("Insert Error>>" + err);
            fs.readFile('./public/index.html', 'utf8', function (error, data) {
                res.send(ejs.render(data, {
                    letter_count : '0'
                }));
            });
        } else {
            fs.readFile('./public/index.html', 'utf8', function (error, data) {
                res.send(ejs.render(data, {
                    letter_count : rows[0].cnt
                }));
            });
        }
    });
}

module.exports = index;
