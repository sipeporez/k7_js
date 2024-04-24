document.addEventListener ('DOMContentLoaded', () => {

    const btDiv = document.getElementById('btDiv2');
    const bt1 = document.createElement('button');
    const bt2 = document.createElement('button');
    const bt3 = document.createElement('button');
    const bt4 = document.createElement('button');
    const bt5 = document.createElement('button');
    const bt6 = document.createElement('button');
    const bt1Txt = document.createTextNode('1번');
    const bt2Txt = document.createTextNode('2번');
    const bt3Txt = document.createTextNode('3번');
    const bt4Txt = document.createTextNode('4번');
    const bt5Txt = document.createTextNode('5번');
    const bt6Txt = document.createTextNode('6번');
    
    const IMG = document.querySelector('.img_com');
    const IMG2 = document.querySelector('.img_user');
    const check = document.querySelector('.is_correct');


    const btCreate = (bt, idTxt, captionNode, parentNode) => {
        bt.setAttribute('id', idTxt);
        bt.appendChild(captionNode);
        parentNode.append(bt);
    }

    btCreate(bt1, 'bt1', bt1Txt, btDiv);
    btCreate(bt2, 'bt2', bt2Txt, btDiv);
    btCreate(bt3, 'bt3', bt3Txt, btDiv);
    btCreate(bt4, 'bt4', bt4Txt, btDiv);
    btCreate(bt5, 'bt5', bt5Txt, btDiv);
    btCreate(bt6, 'bt6', bt6Txt, btDiv);

    bt1.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/1.png`);
                
        if (rand == 1)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    bt2.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/2.png`);
                
        if (rand == 2)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    bt3.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/3.png`);
                
        if (rand == 3)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    bt4.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/4.png`);
                
        if (rand == 4)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    bt5.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/5.png`);
                
        if (rand == 5)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    bt6.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
        IMG2.setAttribute('src', `../img/01_dice/6.png`);
        
        if (rand == 6)
            check.innerHTML = ('<h1>맞췄습니다.</h1>');
        else 
            check.innerHTML = ('<h1>틀렸습니다.</h1>');
    });
    

});