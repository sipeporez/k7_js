/*
    1. DOM 에서 제어할 노드(속성)를 가져오기
    2. 버튼 클릭이 되면
    [확인 버튼 일 때]
        - 랜덤 수 생성 (1~100), 한번 생성 후 변경되면 안됨
        - input 박스 값이 없으면 '숫자를 입력하세요 메시지 출력'
        - input 보이지 않아야 함
        - 버튼 캡션을 '숫자를 생성 해주세요' 로 변경
    [숫자를 생성 해주세요 버튼일 때]
        초기화 : 랜덤 수 새로 생성, input 박스 보이기
*/

document.addEventListener('DOMContentLoaded', () => {

    const IMG = document.querySelector(".updown_img");
    const bt = document.querySelector('.button');
    const input = document.querySelector('input');
    
    // flag 값을 사용한 랜덤 수 고정
    let rand;
    let flag = true;
    
    bt.addEventListener('click', () => {
        let val = input.value;

        // flag가 true일때만 랜덤 수 생성
        if (flag) {
            flag = false;
            rand = Math.floor(Math.random()*100)+1;
        }

        // input값 확인
        // 같은경우
        if (rand == val) {
            IMG.setAttribute('src','../img/01_updown/good.png');
            input.remove();
            bt.innerHTML='숫자를 생성 해주세요';
            bt.addEventListener('click',() => {
                location.reload();
            });
        }
        // 입력되지 않은 경우
        else if (val == '')  {
            alert('숫자를 입력해주세요');
            input.focus();
            return ;
        }
        // 범위를 벗어난 경우
        else if (val < 1 || val > 100 ) {
            alert('1~100까지의 숫자를 입력해주세요');
            input.focus();
            return ;
        }
        // 작은 경우 - up 이미지
        else if (rand > val)
            IMG.setAttribute('src','../img/01_updown/up.png');

        // 큰 경우 - down 이미지
        else if (rand < val)
            IMG.setAttribute('src','../img/01_updown/down.png');
    })
    
});