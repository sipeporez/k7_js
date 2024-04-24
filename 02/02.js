document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM 완성됨');

    const btDiv = document.getElementById('btDiv');
    const bt1 = document.createElement('button');
    const bt1Txt = document.createTextNode('버튼11');
    const bt2 = document.createElement('button');
    const bt2Txt = document.createTextNode('버튼22');
    const bt3 = document.createElement('button');
    const bt3Txt = document.createTextNode('버튼33');

    const msg = document.querySelector('#msg');

    // bt1.setAttribute('id', 'bt11');
    // bt1.appendChild(bt1Txt);
    // btDiv.append(bt1);

    // bt2.setAttribute('id', 'bt22');
    // bt2.appendChild(bt2Txt);
    // btDiv.append(bt2);

    // 위의 버튼 생성 과정을 함수화
    const btCreate = (bt, idTxt, captionNode, parentNode) => {
        bt.setAttribute('id', idTxt);
        bt.appendChild(captionNode);
        parentNode.append(bt);
    }

    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt22', bt2Txt, btDiv);
    btCreate(bt3, 'bt33', bt3Txt, btDiv);

    // bt1.addEventListener('click', ()=> {
    //     if (document.querySelector('#msg').innerHTML == '<h1>안녕하세요!</h1>')
    //         document.querySelector('#msg').innerHTML = '';
    //     else 
    //         document.querySelector('#msg').innerHTML = '<h1>안녕하세요!</h1>';
    // });

    // 클릭시 메시지 생성
    bt1.addEventListener('click', () => {
            msg.innerHTML = '<h1>안녕하세요!</h1>';
    });

    // 클릭시 메시지 삭제
    bt2.addEventListener('click', () => {
            msg.innerHTML = '';
    });

    // 클릭시 생성 및 삭제
    bt3.addEventListener('click', () => {
        if (msg.innerHTML == '')
            msg.innerHTML = '<h1>안녕하세요!</h1>'
        else 
            msg.innerHTML = '';

    });



});

