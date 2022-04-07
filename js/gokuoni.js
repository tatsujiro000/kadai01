//獄鬼START押されたら3秒後に伊沢orたいがさん表示
$('#izawa').hide();
$('.start__of__gokuoni').click(function() { 
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    if(num === 0) {
        $('.random__num').children('img').attr('src','./img/mr-taiga.png' );
    }else {
        $('.random__num').children('img').attr('src','./img/izawa.png' );
    } 
    setTimeout(function() {
        $('#izawa').addClass('is-active fadeRight').show(100);
        $("#izawa").css({
          "transform": "rotateY(0deg) scale(1)"
        });
    },3000);
});

//とじる関数
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });


