/*
    1. DOM 에서 제어할 노드(속성)를 가져오기
    2. 6개의 버튼 클릭 이벤트 확인하기
    3. 버튼 클릭이 되면
        - 해당하는 버튼의 숫자를 추출 => 사용자 선택 수(user)  => user 이미지 변경
        - 랜덤 숫자를 생성 => 컴퓨터 선택 수 (com) => com 이미지 변경
        - user와 com의 수 비교
        - 결과 출력
*/

document.addEventListener('DOMContentLoaded', () => {
    /*
        querySelector 선택자
        태그    : '태그'
        클래스  : '.클래스'
        ID      : '#ID'
        복합    : '태그 태그'
    */

    const IMG_COM = document.querySelector('.img_com');
    const IMG_USER = document.querySelector('.img_user');
    const msg = document.querySelector('.is_correct h1')

    //selectorAll => 속성에 해당하는 모든 값을 노드리스트 형식으로 가져옴
    const bt = document.querySelectorAll('section button');

    // 1. for 반복문 
    // for (let i = 0 ; i < bt.length ; i++) {
    //     console.log(bt[i]);
    // }

    // 2. for in 반복문 - 뒤에 여러 속성이 붙어옴
    // for (let i in bt) {
    //     console.log(bt[i]);
    // }

    // 3. forEach 반복문
    // bt.forEach (bt => {
    //     console.log(bt);
    // })

    // 4. for of 반복문
    // for (let b of bt) {
    //     console.log(b);
    // }
    // 4-1. for of 반복문 (entry)
    // for (let [i,b] of bt.entries()) {
    //     console.log(i,bt);
    // }

    // forEach 반복문을 통해 가져온 모든 버튼에 클릭이벤트 생성, i는 반복 횟수
    bt.forEach(i => {
        i.addEventListener('click', () => {

            // 랜덤 난수 생성 (범위 1~6)
            const rand = Math.floor(Math.random() * 6) + 1;
            
            // 사용자 숫자 생성
            // substring()으로 문자열을 잘라내어 사용자 숫자 추출 후
            // praseInt()로 데이터 타입까지 변환
            const user = parseInt(i.innerHTML.substring(0, 1));
            
            // 백틱 문자열 `` 로 이미지 경로에 숫자 삽입하여 이미지 변경
            IMG_COM.setAttribute('src', `../img/01_dice/${rand}.png`);
            IMG_USER.setAttribute('src', `../img/01_dice/${user}.png`);

            // 랜덤값과 사용자 숫자값에 따른 조건문
            // === 는 값 뿐만 아니라 데이터 타입까지 비교
            if (rand === user)
                msg.innerHTML = '맞췄습니다';
            else
                msg.innerHTML = '틀렸습니다';
        });
    })
    
});