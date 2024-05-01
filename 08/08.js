document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.querySelectorAll('.button_1');
    const button2 = document.querySelectorAll('.button_2');
    const button3 = document.querySelectorAll('.button_3');
    const text1 = document.querySelector("#input_data");

    let arr = [];
    let obj = {
        '사과': '🍎',
        '바나나': '🍌',
        '오렌지': '🍊',
        '수박': '🍉',
        '당근': '🥕',
        '오이': '🥒',
        '아보카도': '🥑',
        '브로콜리': '🥦',
    };

    // 버튼을 반복문으로 생성
    for (let bt of button1) {

        // 배열 추가 (push)
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            arr.push(obj[bt.textContent]);

            text1.value = arr.join(' ');
        });
    }
    for (let bt of button2) {

        // 배열 삭제 (filter)
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            // 해당 키값만 가져오기
            const k = obj[bt.textContent.replace(' 삭제', '')];

            // filter(콜백함수)
            // 매개변수가 1개이고 조건식도 1문장
            // => 콜백함수 특성상 소괄호,중괄호,return 생략 가능
            // arr = arr.filter((item) => {return item != k});
            arr = arr.filter(item => item != k);

            text1.value = arr.join(' ');
        });
    }
    for (let bt of button3) {

        // 배열 교체 (map)
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            // 화살표와 앞뒤 공백 기준으로 버튼 안의 문자를 잘라서 배열화
            let tm = bt.textContent.split(' → ');

            // 해당 키값만 가져오기
            // 3항연산자로 비교
            arr = arr.map(item => item == obj[tm[0]]
                ? obj[tm[1]] : item
            );

            text1.value = arr.join(' ');
        });
    }
})