'use strict';
const store = {
  currentNumber: 0,
  urls: []
};

function oneImgHtml(url) {
  return `<img src="${url}" alt="random dog pic">`
}

function render(){
  let htmlString = '';
  for (let i = 0; i < store.urls.length; i++) {
    htmlString += oneImgHtml(store.urls[i]);
  }
  $('.dog-images').html(htmlString);
}

function apiToUrls(apiResult) {
  console.log(apiResult);
  store.urls = apiResult.message;
  render();
}

function handleInput() {
  $('button').on('click', function(event){
    event.preventDefault();
    const number = $('#images-number').val();
    if (number >= 1 && number <= 50) {
      store.currentNumber = number;
      fetch('https://dog.ceo/api/breeds/image/random/' + number).then(response => response.json()).then (val => apiToUrls(val));
    }
  });
}

function main(){
  handleInput();
  render();
}

$(main);