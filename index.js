let view = 'start';
const testArr = [
  {
    imageUrl: 'src/images/carlson.png',
    test: 'carlson'
  },
  {
    imageUrl: 'src/images/crocodil.jpeg',
    test: 'crocodil'
  },
  {
    imageUrl: 'src/images/vini.jpeg',
    test: 'vini'
  },
  {
    imageUrl: 'src/images/wolf.jpeg',
    test: 'wolf'
  },
  {
    imageUrl: 'src/images/leapold.png',
    test: 'leapold'
  },
  {
    imageUrl: 'src/images/kesha.png',
    test: 'kesha'
  },
  {
    imageUrl: 'src/images/parovozik.jpeg',
    test: 'parovozik'
  },
  {
    imageUrl: 'src/images/matroskin.jpeg',
    test: 'matroskin'
  },
  {
    imageUrl: 'src/images/gav.svg',
    test: 'king'
  }
];
let index = 0;
let timer = null;

const start = () => {
  setImage();
  const startEl = document.querySelector(`.${view}`);
  startEl.classList.add('hide');

  view = 'test';
  const testEl = document.querySelector(`.${view}`);
  testEl.classList.remove('hide');
};

const setImage = () => {
  hidePopup();
  const testImg = document.querySelector('.test-image');
  testImg.src = testArr[index].imageUrl;
};

const check = () => {
  if (index < testArr.length-1) {
    index++;
    setImage();
  } 
};

const back = () => {
  if (index > 0) {
    index--;
    setImage()
  }
};

const showPopup = () => {
  const popup = document.querySelector('.popup');
  popup.classList.remove('hide-popup');

  timer = setTimeout(() => {
    hidePopup();
  }, 3000);
}

const hidePopup = () => {
  const popup = document.querySelector('.popup');
  popup.classList.add('hide-popup');

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

const test = () => {
      
   if (testArr[index].test === 'king') {
    view = 'test';
    const testEl = document.querySelector(`.${view}`);
    testEl.classList.add('hide');
    view = 'finish-text-wrapper';
    const finishTextEl = document.querySelector(`.${view}`);
    finishTextEl.classList.remove('hide');
   } else {
      showPopup();
   }
   
};

