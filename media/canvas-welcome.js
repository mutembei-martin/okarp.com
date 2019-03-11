// import utils from './utils'
let canvasone = document.getElementById('canvascome')
let cc = canvasone.getContext('2d')

canvasone.width = innerWidth - 30;
canvasone.height = innerHeight-30;


addEventListener('resize', () => {
    canvasone.width = innerWidth;
    canvasone.height = innerHeight;

     draws();

});

////////////////////////////////////////////////////

function draws(){
    let radius = 200;
    let space = 30;
    let space2 = 70;
    let x1 = canvasone.width/ 2;
    let y1 = (canvasone.height/2) - (radius + 10);
    let r1 = 50;
    let r2 = 100;
    let a2 = 0;
    let y2 = y1 - r1 ;
    let x3 = x1  + 40;
    let y3 = space;

    let x4 = (canvasone.width/ 2) - (radius + 10);
    let y4 = (canvasone.height/2);

    let x5 = x4 - r2;
    let y5 = (canvasone.height/2);

   let x6 =  x5 - r2;
   let y6 =  y5 - space2;

   let x7 = (canvasone.width/ 2) + (radius + 10);
   let x8 = x7 + 100; 

   let x9 = x8 + r2;

/////////////////////////////TOP LINE///////////////////////////////////////////

    cc.beginPath();
    cc.arc(x1, y1, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x1, y1, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x1, y1);
    cc.lineTo(x1,y2);
    cc.stroke();

    cc.beginPath();
    cc.arc(x1, y2, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x1, y2, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x1, y2);
    cc.lineTo(x3,y3);
    cc.stroke();

    cc.beginPath();
    cc.arc(x3, y3, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x3, y3, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

///////////////////////////////////////////TOP LINE//////////////////////////////////////////////////////

///////////////////////////////////////////LEFT LINE//////////////////////////////////////////////////////


    cc.beginPath();
    cc.arc(x4, y4, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x4, y4, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x4, y4);
    cc.lineTo(x5,y5);
    cc.stroke();

    cc.beginPath();
    cc.arc(x5, y5, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x5, y5, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x5, y5);
    cc.lineTo(x6,y6);
    cc.stroke();

    cc.beginPath();
    cc.arc(x6, y6, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x6, y6, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();


    ///////////////////////////////////////////RIGHT LINE//////////////////////////////////////////////////////

    cc.beginPath();
    cc.arc(x7, y4, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x7, y4, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x7, y4);
    cc.lineTo(x8,y4);
    cc.stroke();


    cc.beginPath();
    cc.arc(x8, y4, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x8, y4, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();

    cc.beginPath();
    cc.moveTo(x8, y4);
    cc.lineTo(x9,y6);
    cc.stroke();


    cc.beginPath();
    cc.arc(x9, y6, 10, Math.PI * 2, false);
    cc.strokeStyle = 'white';
    cc.stroke();

    cc.beginPath();
    cc.arc(x9, y6, 5, Math.PI * 2, false);
    cc.fillStyle = 'white';
    cc.fill();



}

draws();
console.log("hfwkjsadc");