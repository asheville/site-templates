var visibleStreamItemNum = 0;

$(document).ready(function() {
  resizeStream();
  showStreamContent();
});

$(document).scroll(function() {
  showStreamContent();
});

$(window).resize(function() {
  resizeStream();
});

var resizeStream = function() {
  var items = $('#stream li');
  var height = items.length * window.innerHeight;
  $('#stream').css('height', height);
};

var showStreamContent = function() {
  var itemsCount = Math.round($('body').height() / window.innerHeight);

  var scrollTop = $(this).scrollTop();

  if (scrollTop < 0) {
    return;
  }

  var newStreamItemNum = Math.round(scrollTop / window.innerHeight) + 1;

  // console.log('body height: ' + $('body').height());
  // console.log('window height: ' + window.innerHeight);
  // console.log(newStreamItemNum + ' / ' + itemsCount);
  // console.log(screenHeight + ' - ' + scrollTop);
  // console.log('New Num: ' + newStreamItemNum);

  if (visibleStreamItemNum != newStreamItemNum) {
    $('#stream li:nth-of-type(' + visibleStreamItemNum + ')').css('opacity', 0);
    $('#stream li:nth-of-type(' + newStreamItemNum + ')').css('opacity', 1);
    visibleStreamItemNum = newStreamItemNum;
  }
};