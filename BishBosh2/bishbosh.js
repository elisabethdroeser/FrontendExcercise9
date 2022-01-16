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
            //console.log(i)
            let list = document.createTextNode(i);
            text.appendChild(list);
            
        }
    }
}

//document.querySelector('#submit').addEventListener('click', myFunction);

submit.addEventListener('click', function () {
    let p = document.createElement('text');
    //p.innerHTML = 'A p tag';

    p.innerHTML = myFunction();
});