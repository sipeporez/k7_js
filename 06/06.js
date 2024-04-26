/* 
    1. 값이 입력되면
        - 1. select box 선택값 읽기 (option value)
        - 2. select box 2개 연동하여 단위를 바꿀때 같이 바뀌게 하기
        - 3. input box 값 읽기
        - 4. 실시간으로 값을 변환하여 오른쪽 input box에 넣기
    2. 오른쪽 input box는 입력 못하게 막기

    섭씨 화씨 변환 공식 : (0°C × 9/5) + 32 = 32°F

*/

// 선택값과 라벨 변경 함수
const changeLabel = (s1,s2,l1,l2) => {
    if (s1.value == '°C')
        s2.value = '°F';
    else
        s2.value = '°C';

    l1.textContent = s1.value;
    l2.textContent = s2.value;
}


document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#units1');
    const sel2 = document.querySelector('#units2');

    let txt1 = document.querySelector('#input_data');
    let txt2 = document.querySelector('#input_result');

    const labl1 = document.querySelector("#input_label");
    const labl2 = document.querySelector("#result_label");

    
    sel1.addEventListener('change',()=>{
        changeLabel(sel1,sel2,labl1,labl2);
    })

    sel2.addEventListener('change',()=>{
        changeLabel(sel2,sel1,labl2,labl1);
    })
    
    txt1.addEventListener('input',()=>{
        if (sel1.value == '°C')
            txt2.value = (txt1.value * 9/5) + 32;
        else if (sel1.value == '°F')
            txt2.value = ((txt1.value - 32) * 5/9).toFixed(1);
    })
})