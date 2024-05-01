document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    const text2 = document.querySelector("#output_data");

    // 회문 확인
    bt1.addEventListener('click', (e) => {
        e.preventDefault();
        const text1 = document.querySelector("#input_data").value;

        // 배열 원소로 비교
        // let val1 = text1.replaceAll(' ', '').spli('');
        // let val2 = text1.replaceAll(' ', '').split('').reverse();

        // for (let i = 0; i < val1.length; i++) {
        //     if (val1[i] != val2[i]) {
        //         text2.value = "회문이 아닙니다."
        //         break;
        //     }
        //     else
        //         text2.value = "회문입니다.";
        // }

        //join을 통해 문자열로 비교
        let val3 = text1.replaceAll(' ', '');
        let val4 = text1.replaceAll(' ', '').split('').reverse().join('');

        if (val3 === val4)
            text2.value = "회문입니다.";
        else
            text2.value = "회문이 아닙니다.";
    });

    // 숫자 합계
    bt2.addEventListener('click', (e) => {
        e.preventDefault();
        const text1 = document.querySelector("#input_data").value;

        let val5 = text1.replaceAll(' ', '').split('');
        let sum = 0;
        // 배열로 비교
        for (let i = 0; i < val5.length; i++) {
            if (!isNaN(val5[i])) {
                sum += parseInt(val5[i]);
                text2.value = sum;
            }  
            else
                text2.value = "숫자가 없습니다.";
        }
        
        // let sum2=0;
        // for (let c of text1) {
        //     if (!isNaN(c)) {
        //         sum2 += parseInt(c);
        //     }
        //     text2.value = sum2;
        // }

    });
})