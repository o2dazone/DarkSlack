'use strict';

/* Changing the href to your Slack login name will highlight your name in messages */
var html = [],
    head = document.head,
    uid = document.querySelector('#file_comment_form [data-member-id]').getAttribute('data-member-id');

html.push('<style type="text/css">.message_sender[data-member-id="', uid, '"] {color: #bcd0d5 !important;}</style>');


/* injects the css, so it can be used with CSS reloader extensions/bookmarklets */
var path = chrome.extension.getURL('styles.css');
html.push('<link rel="stylesheet" type="text/css" href="', path, '" />')


head.innerHTML += html.join('');
