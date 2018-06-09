$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();  
  $.getJSON("/poll/latest", function(polls) {
    let latestPollDiv = ``;
    polls.map((item, index) => {
      latestPollDiv += `<div class="latest-poll d-flex">
        <div class="latest-poll-icon">
          <i class="fa fa-pie-chart fa-fw"></i>
          <h6>${item.totalVote}</h6>          
        </div>
        <div class="latest-poll-info">
        <a href="/poll/${item.id}">
          <h3>${item.pollTitle}</h3>
          <p class="muted">${item.date.split('T')[0]}</p>
          </a>
        </div>
      </div>`;
    });
    $('.latest-polls').html(latestPollDiv);
  });
});
function copylink() {
  let pollLink = document.getElementById('pollLink')
  pollLink.select();
  document.execCommand('copy');
  $('.tooltip').tooltip('show');
}
let pollCount = 3;
let createNode = function() {
  // if (document.querySelector('.poll-option-input:last-of-type').value != "") {
    pollCount++;
    let node = document.createElement('input');
    node.setAttribute('type', 'text');
    node.setAttribute('name',  'poll_option');
    node.setAttribute('placeholder', `${pollCount}. Poll option`);
    node.classList.add('mt-2');
    node.classList.add('form-control');
    node.classList.add('poll-option-input');
    document.querySelector('#poll-options').appendChild(node);
    // document.querySelector('.poll-option-input:last-of-type').addEventListener('blur', createNode);
  // }
}
document.querySelector('.add-more').addEventListener('click', createNode);
// document.querySelector('.poll-option-input:last-of-type').addEventListener('blur',createNode);