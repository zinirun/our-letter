//문제 load 라우터
const ejs = require('ejs'),
    fs = require('fs'),
    mysql = require('mysql'),
    cors = require('cors');

const mySqlClient = mysql.createConnection(require('../config/db_config'));
const q_num_kor = ["첫번째", "두번째", "세번째", "네번째", "다섯번째"];

//post로 접근, url_id, q 번호, q_cnt 필요
async function getQuestion(req, res) {
    const url_id = req.body.url_id,
        q_num = req.body.q_num;

    if (q_num.length > 1) {
        res.redirect('/');
        return false;
    }

    const selectQSql = "select `q_cnt`, `q" + q_num + "` from `letter` where `url_id` = ?;";

    mySqlClient.query(selectQSql, url_id, function (err, rows, fields) {
        if (err) {
            console.log("ERROR>>" + err);
            res.redirect('/');
        } else {
            fs.readFile('./public/question.html', 'utf8', function (error, data) {
                res.send(ejs.render(data, {
                    url_id: url_id,
                    q_num: q_num,
                    q_cnt: rows[0].q_cnt,
                    q_num_kor: q_num_kor[q_num - 1],
                    question: rows[0].q1
                }));

            });
        }
    });
}

module.exports = getQuestion;
