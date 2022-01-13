'use strict';

const number = document.querySelector('#num3');
const bish = document.querySelector('#bish');
const bosh = document.querySelector('#bosh');
const button = document.querySelector('#btn');

function myFunction() {
  
    for (let i = 1; i <= number.value; i++) {
        console.log(number.value);

        if (i % bish.value === 0 && i % bosh.value === 0) {
        
            console.log('Bish-Bosh')
        }
        else if ( i % bish.value === 0) {
            let text = document.innerHTML(bish.value);
            console.log('Bish')
        }
        else if (i % bosh.value === 0) {
            console.log('Bosh')
        }
        else {
            console.log(i)
        }
    }
}


