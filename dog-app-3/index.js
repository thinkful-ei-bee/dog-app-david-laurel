'use strict';
const store = {
  currentNumber: 0,
  urls: [],
  invalid: false
};

function oneImgHtml(url) {
  return `<img src="${url}" alt="random dog pic">`;
}

function render(){
  if (!store.invalid) { 
    let htmlString = '';
    for (let i = 0; i < store.urls.length; i++) {
      htmlString += oneImgHtml(store.urls[i]);
    }
    $('.dog-images').html(htmlString);
  } else {
    $('.dog-images').html('<p>Breed not found</p>');
  }
}

function getURL(apiResult) {
  if (apiResult.message === 'Breed not found') {
    store.invalid = true;
    store.urls = [];
    store.currentNumber = 0;
  } else {
    store.urls = [apiResult.message];
    store.invalid = false;
  }
  render();
}

function handleInput() {
  $('button').on('click', function(event){
    event.preventDefault();
    const breed = $('#dog-breed').val();
    store.currentNumber = 1;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(response => response.json()).then (val => getURL(val)).catch(e => e);
  });
}

function main(){
  handleInput();
  render();
}

$(main);