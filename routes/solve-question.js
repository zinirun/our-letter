//문제 solve 라우터
const ejs = require('ejs'),
    fs = require('fs'),
    mysql = require('mysql'),
    cors = require('cors');

const mySqlClient = mysql.createConnection(require('../config/db_config'));
const q_num_kor = ["첫번째", "두번째", "세번째", "네번째", "다섯번째"];

//post로 접근, url_id, q 번호, q_cnt 필요
//q_num+1과 q_cnt 일치하면 viewletter 이동
async function solveQuestion(req, res) {
    const url_id = req.body.url_id,
        user_answer = req.body.answer,
        q_num = parseInt(req.body.q_num) + 1, //next question's index
        q_cnt = req.body.q_cnt,
        origin_question = req.body.origin_question;

    if (q_num.length > 1) {
        res.redirect('/');
        return false;
    }

    const selectSolveSql = "select q" + (q_num - 1) + "_a as answer from letter where url_id = ?";
    const selectQSql = "select `q_cnt`, `q" + q_num + "` from `letter` where `url_id` = ?;";
    const selectLetterContentSql = "select `from`, `to`, `content`, `id` from `letter` where `url_id` = ?;";

    //정답여부 판단 (틀리면 msg로 메시지 전송)
    mySqlClient.query(selectSolveSql, url_id, function (err, rows, fields) {
        if (err) {
            console.log("ERROR>>" + err);
            res.redirect('/');
        } else {
            answer = rows[0].answer;
            //단어가 서로를 포함하면 통과
            if (user_answer.replace(' ','').includes(answer.replace(' ',''))) {

                //문제 모두 푼 경우 - 편지 보이기
                if (q_num > parseInt(q_cnt)) {
                    mySqlClient.query(selectLetterContentSql, url_id, function (err, rows, fields) {
                        if (err) {
                            console.log("ERROR>>" + err);
                            res.redirect('/');
                        } else {
                            fs.readFile('./public/viewletter.html', 'utf8', function (error, data) {
                                res.send(ejs.render(data, {
                                    content: rows[0].content,
                                    from: rows[0].from,
                                    to: rows[0].to,
                                    q_id: rows[0].id
                                }));

                            });
                        }
                    });
                } else {
                    //문제 정답인 경우 다음 문제로 이동
                    mySqlClient.query(selectQSql, url_id, function (err, rows, fields) {
                        if (err) {
                            console.log("ERROR>>" + err);
                            res.redirect('/');
                        } else {
                            if (q_num == 2) {
                                fs.readFile('./public/question.html', 'utf8', function (error, data) {
                                    res.send(ejs.render(data, {
                                        url_id: url_id,
                                        q_cnt: rows[0].q_cnt,
                                        q_num: q_num,
                                        q_num_kor: q_num_kor[q_num - 1],
                                        question: rows[0].q2
                                    }));

                                });
                            } else if (q_num == 3) {
                                fs.readFile('./public/question.html', 'utf8', function (error, data) {
                                    res.send(ejs.render(data, {
                                        url_id: url_id,
                                        q_cnt: rows[0].q_cnt,
                                        q_num: q_num,
                                        q_num_kor: q_num_kor[q_num - 1],
                                        question: rows[0].q3
                                    }));

                                });
                            } else if (q_num == 4) {
                                fs.readFile('./public/question.html', 'utf8', function (error, data) {
                                    res.send(ejs.render(data, {
                                        url_id: url_id,
                                        q_cnt: rows[0].q_cnt,
                                        q_num: q_num,
                                        q_num_kor: q_num_kor[q_num - 1],
                                        question: rows[0].q4
                                    }));

                                });
                            } else if (q_num == 5) {
                                fs.readFile('./public/question.html', 'utf8', function (error, data) {
                                    res.send(ejs.render(data, {
                                        url_id: url_id,
                                        q_cnt: rows[0].q_cnt,
                                        q_num: q_num,
                                        q_num_kor: q_num_kor[q_num - 1],
                                        question: rows[0].q5
                                    }));

                                });
                            }

                        }
                    });
                }
            } else {
                //오답인 경우
                fs.readFile('./public/question.html', 'utf8', function (error, data) {
                    res.send(ejs.render(data, {
                        url_id: url_id,
                        q_cnt: q_cnt,
                        q_num: q_num - 1,
                        q_num_kor: q_num_kor[q_num - 2],
                        question: origin_question,
                        msg: '오답입니다 :('
                    }));

                });
            }
        }
    });
}

module.exports = solveQuestion;
