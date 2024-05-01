document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.querySelectorAll('.button_1');
    const button2 = document.querySelectorAll('.button_2');
    const text1 = document.querySelector("#input_data");
    
    let arr = [];
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉',
    };

    // 버튼을 반복문으로 생성
    for (let bt of button1) {

        // 배열 추가
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            arr.push(obj[bt.textContent]);

            text1.value = arr.join(' ');
        });
    }
    for (let bt of button2) {

        // 배열 삭제
        bt.addEventListener('click', (e) => {
            e.preventDefault();

            // 해당 키값만 가져오기
            const k = obj[bt.textContent.replace(' 삭제','')];

            // filter(콜백함수)
            // 매개변수가 1개이고 조건식도 1문장
            // => 콜백함수 특성상 소괄호,중괄호,return 생략 가능
            // arr = arr.filter((item) => {return item != k});
            arr = arr.filter(item => item != k);
            
            text1.value = arr.join(' ');
        });
    }
})