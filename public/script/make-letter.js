let current_q_cnt = 1;
const q_cnt_kor = ['첫번째', '두번째', '세번째', '네번째', '다섯번째']

function addEvent_addQuestion() {
    makeRandom();

    document.getElementById('input_q_add').addEventListener('click',
        function () {
            if (current_q_cnt > 4) {
                document.getElementById('input_q_add').value = "5개를 넘을 수 없습니다.";
                return false;
            } else {
                target = document.getElementById('div_add_target');

                innerCode = '<div class="div-question-form"><div class="div-q-upper"><input name="q'+ (current_q_cnt+1) +' class="input-q-question" placeholder="' + q_cnt_kor[current_q_cnt] + ' 질문' + '" maxlength="25" required></div><hr class="hr-q-line><div class="div-q-lower"><input name="q'+ (current_q_cnt+1) +'_a" class="input-q-answer" placeholder="질문의 답" maxlength="25" required></div></div>';
                
                document.getElementById('input_q_cnt').value = (current_q_cnt+1);
                
                current_q_cnt++;

                target.innerHTML += innerCode;
            }
        });
}

function makeRandom() {
    randomUrlId = Math.random().toString(36).substr(2, 11);
    document.getElementById('input_url_id').value = randomUrlId;
}
