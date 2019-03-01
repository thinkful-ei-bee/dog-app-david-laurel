'use strict';
const store = {
  currentNumber: 0,
  urls: []
};

function render(){

}

function handleInput() {
  $('button').on('click', function(event){
    event.preventDefault();
    const number = $('#images-number').val();
    if (number >= 1 && number <= 50) {
      store.currentNumber = number;
      fetch('https://dog.ceo/api/breeds/image/random/' + number).then(response => response.json()).then (val => console.log(val));
    }
  });
}

function main(){
  handleInput();
  render();
}

$(main);