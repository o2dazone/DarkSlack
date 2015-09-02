(function(){
  /* Changing the href to your Slack login name will highlight your name in messages */
  var head = document.head,
      uid = document.querySelector('#file_comment_form [data-member-id]').getAttribute('data-member-id');

  head.innerHTML += '<style type="text/css">.message_sender[data-member-id="' + uid + '"] {color: #bcd0d5 !important;}</style>';
}());