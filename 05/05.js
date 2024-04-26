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
    const ct = document.querySelector('.count');

    // flag 값을 사용한 랜덤 수 고정
    let rand;
    let flag = true;
    let count = 10;

    bt.addEventListener('click', (e) => {

        // form 태그 사용시 콜백되지 않도록
        e.preventDefault();

        // 인풋박스 입력값 받기
        let inval = input.value;

        // flag가 true일때 초기화
        if (flag) {
            flag = false;
            rand = Math.floor(Math.random() * 100) + 1;

            count = 10;
            ct.innerHTML = `<h3>남은 횟수 : ${count}회</h3>`;

            IMG_NAME = "what";
            IMG.setAttribute('src', `../img/01_updown/${IMG_NAME}.png`);
            
            input.style.display = 'flex';
            bt.textContent = ('확인');
        }

        // 확인버튼 누를때마다 인풋박스 초기화+하이라이트
        input.focus();
        input.value = '';

        if (rand < inval || rand > inval)
            count--;

        if (count == 0) {
            alert("실패하셨습니다. 숫자를 다시 생성 해주세요.");
            input.style.display = 'none';
            bt.textContent = ('숫자를 다시 생성 해주세요');
            flag = true;
        }
        console.log(count)
        // input값 확인
        // 같은경우
        if (rand == inval) {
            IMG_NAME = "good";
            IMG.setAttribute('src', `../img/01_updown/${IMG_NAME}.png`);
            input.style.display = 'none';
            alert(`${10-count+1}회 만에 성공하셨습니다.\n숫자를 다시 생성 해주세요.`)
            bt.textContent = ('숫자를 다시 생성 해주세요');
            count = 10;
            flag = true;
        }
        // 입력되지 않은 경우
        else if (inval == '') {
            alert('숫자를 입력해주세요' + rand);
            count++;
            return;
        }
        // 범위를 벗어난 경우
        else if (inval < 1 || inval > 100) {
            alert('1~100까지의 숫자를 입력해주세요');
            count++;
            return;
        }
        // 작은 경우 - up 이미지
        else if (rand > inval)
            IMG.setAttribute('src', '../img/01_updown/up.png');
        // 큰 경우 - down 이미지
        else if (rand < inval)
            IMG.setAttribute('src', '../img/01_updown/down.png');

        // 클릭 이후 바뀌는 부분은 맨 밑으로
        ct.innerHTML = `<h3>남은 횟수 : ${count}회</h3>`;
    }
    )
});