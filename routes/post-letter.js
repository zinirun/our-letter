//우편 등록(POST) 라우터
const ejs = require('ejs'),
    fs = require('fs'),
    mysql = require('mysql'),
    cors = require('cors');

const mySqlClient = mysql.createConnection(require('../config/db_config'));

async function postLetter(req, res) {
    console.log(req.body.url_id);
    
    let from = req.body.from,
        to = req.body.to,
        url_id = req.body.url_id,
        q_cnt = req.body.q_cnt,
        content = req.body.content;
    
    let q1 = req.body.q1,
        q1_a = req.body.q1_a,
        q2 = req.body.q2 || '',
        q2_a = req.body.q2_a || '',
        q3 = req.body.q3 || '',
        q3_a = req.body.q3_a || '',
        q4 = req.body.q4 || '',
        q4_a = req.body.q4_a || '',
        q5 = req.body.q5 || '',
        q5_a = req.body.q3_5 || '';
    
    let params = {
        url_id: url_id,
        from: from,
        to: to,
        q_cnt: parseInt(q_cnt),
        q1: q1,
        q1_a: q1_a,
        q2: q2,
        q2_a: q2_a,
        q3: q3,
        q3_a: q3_a,
        q4: q4,
        q4_a: q4_a,
        q5: q5,
        q5_a: q5_a,
        content: content
    }

    const insertLetterSql = 'INSERT INTO letter SET ?;';
    
    mySqlClient.query(insertLetterSql, params, function (err) {
        if (err) {
            console.log("Insert Error>>" + err);
            alertMsg = "SQL 등록 중 오류가 발생했습니다.";
            res.send('<script type="text/javascript">alert("' + alertMsg + '"); window.history.back();</script>');
        } else {
            backUrl = '/share/'+url_id;
            res.send('<script type="text/javascript">location.href = "' + backUrl + '";</script>');
        }
    });
}

module.exports = postLetter;