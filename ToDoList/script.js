'use strict';

//alert('hello');
const todo = document.querySelector('#todo-list');
const input = document.querySelector('#product');
const list = document.querySelector('#products');

todo.addEventListener('submit', (e) => {
    
    const product = input.value;

    if (!product) {
        alert('Fyll i önskad produkt')
    } else {
        console.log('Success')
    }
})
