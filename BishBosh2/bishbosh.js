'use strict';

const number = document.querySelector('#num3');
const bish = document.querySelector('#bish');
const bosh = document.querySelector('#bosh');
const submit = document.querySelector('#submit');
const text = document.querySelector('#text');

function myFunction() {

    for (let i = 1; i <= number.value; i++) {
        //console.log(number.value);
        if (i % bish.value === 0 && i % bosh.value === 0) {  
            //console.log('Bish-Bosh')
            let list = document.createTextNode('Bish-Bosh');
            text.appendChild(list);
        }
        else if ( i % bish.value === 0) {
            //let text = document.innerHTML(bish.value);
            //console.log('Bish')
            let list = document.createTextNode('Bish');
            text.appendChild(list);
        }
        else if (i % bosh.value === 0) {
            //console.log('Bosh')
            let list = document.createTextNode('Bosh');
            text.appendChild(list);
        }
        else {
            console.log(i)
            
        }
    }
}

//document.querySelector('#submit').addEventListener('click', myFunction);

submit.addEventListener('click', function () {
    let p = document.createElement('text');
    //p.innerHTML = 'A p tag';

    p.innerHTML = myFunction();
    //document.body.appendChild(p);
    text.appendChild(p);
    //console.log(p);
    //myFunction();
    
    
    /*
//OLIKA TESTER
    //text.innerHTML = '';
    //console.log(text); //diven finns
    let p = document.querySelector(text);
    p.appendChild(document.createElement('p'));

    
    let p = document.createElement('p');
    let list = document.createTextNode(myFunction++);
    p.appendChild(list);
    let element = document.getElementById(text);
    element.appendChild(p);*/
    //console.log(p);
    /*p.innerHTML += myFunction();
    text.appendChild(p);
*/
    //text.appendChild('p');

    //p.innerHTML += document.querySelector('#submit');
    //text.appendChild('p');
    //myFunction();

  
    
});


/*
submit.addEventListener('click', function (e) {
    console.log(this); //button id submit etc 
    console.log(e); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    let p = document.createElement('p');
    p.innerHTML += document.querySelector('#submit');
    text.appendChild('p');

  
    
});*/




/*
function addResult() {
    let text = document.createElement('text');
    text.innerHTML += text;
    document.body.appendChild(text); 
}

addResult(text);
submit.addEventListener('click', myFunction => {
   
});
  let p = document.createElement('p');
    p.innerHTML += document.querySelector('p');
    console.log(p);
    

*/