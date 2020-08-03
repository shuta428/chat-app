$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="main-chat__message-list__message__info">
        <div class="main-chat__message-list__message__info__upper-info">
          <div class="main-chat__message-list__message__info__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message__info__upper-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message__info__message-text">
          <p class="main-chat__message-list__message__info__message-text__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
     return html;
    }else {
      `<div class="main-chat__message-list__message__info">
        <div class="main-chat__message-list__message__info__upper-info">
          <div class="main-chat__message-list__message__info__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message__info__upper-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message__info__message-text">
          <p class="main-chat__message-list__message__info__message-text__content">
            ${message.content}
          </p>
        </div>
      </div>`
     return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
    })
  });
});