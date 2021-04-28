document.addEventListener("DOMContentLoaded", function(){
  start_timer(true);
  let plusBtn = document.getElementById('plus');
  let minusBtn = document.getElementById('minus');
  let heartBtn = document.getElementById('heart');
  let form = document.getElementById('comment-form');
  let prev = 0;
  let count = 1;
  let commentList = document.getElementById('list')

  form.addEventListener('submit', function(event) {
    let input = document.getElementById('comment-input').value
    commentList.innerHTML += `${input}<br>`;
    form.reset();
    event.preventDefault();
  })


  heartBtn.addEventListener('click', function() {
    let likes = document.getElementsByClassName('likes');
    let list_item = document.createElement('li');
    list_item.classList.add('like')
    let time = parseInt(document.getElementById('counter').innerText);

    if (time != prev) {
      prev = time
      count = 1
      list_item.innerText = `${time} has been liked ${count} time`
      likes[0].appendChild(list_item)
    } else if (time === prev) {
      count += 1
      let likes = document.getElementsByClassName('like')
      let last = likes[likes.length - 1]
      last.innerText = `${time} has been liked ${count} times`
    }
  })

  plusBtn.addEventListener('click', function() {
    document.getElementById('counter').innerText = `${parseInt(document.getElementById('counter').innerText) + 1}`
  })
  minusBtn.addEventListener('click', function() {
    document.getElementById('counter').innerText = `${parseInt(document.getElementById('counter').innerText) - 1}`
  })

  let pauseBtn = document.getElementById('pause');
  pauseBtn.addEventListener('click', function() {
    if (pauseBtn.innerText == 'pause') {
      start_timer(false);
      disable_btns()
      pauseBtn.innerText = 'resume';
    } else if (pauseBtn.innerText == 'resume') {
      start_timer(true);
      disable_btns()
      pauseBtn.innerText = 'pause';
    }
  });
});

function disable_btns() {
  let buttons = document.querySelectorAll('button')
  for (let i = 0; i < buttons.length - 2; i++) {
    if (buttons[i].disabled == true) {
      buttons[i].disabled = false;
    } else {
      buttons[i].disabled = true;
    }
  }
}

function start_timer(boolean) {
  if (boolean == true) {
    nIntervId = setInterval(function() {
      let time = parseInt(document.getElementById('counter').innerText);
        time += 1;
       document.getElementById('counter').innerText =  `${time}`;
    }, 1000);
  } else {
    clearInterval(nIntervId);
  }
}
