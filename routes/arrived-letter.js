//우편 등록(POST) 라우터
const ejs = require('ejs'),
    fs = require('fs'),
    mysql = require('mysql'),
    cors = require('cors');

const mySqlClient = mysql.createConnection(require('../config/db_config'));

async function arrivedLetter(req, res) {
    const url_id = req.params.url_id;
    const selectLetterSql = "select `from`, `q_cnt` from `letter` where `url_id` = ?;";

    mySqlClient.query(selectLetterSql, url_id, function (err, rows, fields) {
        if (err) {
            console.log("ERROR>>" + err);
            res.redirect('/');
        } else {
            if (rows[0]) {
                fs.readFile('./public/arrivedletter.html', 'utf8', function (error, data) {
                    res.send(ejs.render(data, {
                        url_id: url_id,
                        from: rows[0].from,
                        q_cnt: rows[0].q_cnt
                    }));

                });
            }
            else{
                res.redirect('/');
            }

        }
    });
}

module.exports = arrivedLetter;
