
let pollCount = 3;

let createNode = function() {
    if (document.querySelector('.poll-option-input:last-of-type').value != "") {
      pollCount++;
      let node = document.createElement('input');
      node.setAttribute('type', 'text');
      node.setAttribute('name',  'poll_option');
      node.setAttribute('placeholder', `${pollCount}. Poll option`);
      node.classList.add('mt-2');
      node.classList.add('form-control');
      node.classList.add('poll-option-input');
      
      document.querySelector('#poll-options').appendChild(node);
      document.querySelector('.poll-option-input:last-of-type').addEventListener('blur', createNode);
      
    }
}
document.querySelector('.poll-option-input:last-of-type').addEventListener('blur', createNode);

///////////////////////////////////////////////////////////////////////
///////////////////////////// JQUERY //////////////////////////////////
///////////////////////////////////////////////////////////////////////
// .map(pollitem => pollitem.pollCount).reduce((prev, next) => prev + next)

$(document).ready(function() {
  $.getJSON("/poll/latest", function(polls) {
    let latestPollDiv = ``;
    polls.map((item, index) => {
      latestPollDiv += `<div class="latest-poll d-flex">
        <div class="latest-poll-icon">
          <i class="fa fa-pie-chart fa-fw"></i>
          <h6>${item.polls.reduce((a, b) => +a + +b.pollCount, 0) }</h6>
        </div>
        <div class="latest-poll-info">
        <a href="/poll/${item.id}">
          <h3>${item.pollTitle}</h3>
          <p class="muted">${item.date.split('T')[0] +' - '+ item.date.split('T')[1].split(':')[0] + ':' + item.date.split('T')[1].split(':')[1]}</p>
          </a>
        </div>
      </div>`;
    });
    $('.latest-polls').html(latestPollDiv);
  });
})
