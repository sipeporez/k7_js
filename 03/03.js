document.addEventListener ('DOMContentLoaded', () => {

    const btDiv = document.getElementById('btDiv');
    const bt1 = document.createElement('button');
    const bt1Txt = document.createTextNode('주사위를 던져주세요');
    
    const IMG = document.querySelector('img');

    const btCreate = (bt, idTxt, captionNode, parentNode) => {
        bt.setAttribute('id', idTxt);
        bt.appendChild(captionNode);
        parentNode.append(bt);
    }

    btCreate(bt1, 'bt1', bt1Txt, btDiv);

    bt1.addEventListener('click',()=>{
        rand = Math.floor(Math.random()*6)+1;
        console.log(`${rand}`)
        IMG.setAttribute('src', `../img/01_dice/${rand}.png`);
    });
    

});