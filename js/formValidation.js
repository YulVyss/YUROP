$(function () {
  $('#header-input').inputmask({
    mask: '+7(999)999-9999',
    showMaskOnHover: true,
    inputmode: 'tel',
    onincomplete: function () {
      checkValue1($(this));
    },
    oncomplete: function () {
      checkValue1($(this));
    }
  });

  //Первая форма: Функция валидации номера телефона
  var checkValue1 = function (input) {
    var $th = $(input);
    var phone = $th.val();	//Введенное значение
    var isValid = Inputmask.isValid(phone, { mask: '+7(999)999-9999' });	//Проверяем на валидность
    var $btn = $('#header__form').find('.btn1');	//Ищем кнопку отправки формы

    var $error = $th.parent().parent().find('#form1__warning');	//Ищем ошибку

    if (!isValid) {
      //Если не валидно, то:
      $btn.prop('disabled', true); //Меняем атрибут disabled в значение true (делаем кнопку неактивной)
      $error.fadeIn(); //Показываем ошибку

    } else {
      $btn.prop('disabled', false); //Меняем атрибут disabled в значение false (делаем кнопку активной)
      $error.fadeOut(); //Скрываем ошибку
    }
  }


  $('#second-input').inputmask({
    mask: '+7(999)999-9999',
    showMaskOnHover: true,
    inputmode: 'tel',
    onincomplete: function () {
      checkValue2($(this));
    },
    oncomplete: function () {
      checkValue2($(this));
    }
  });

  //Вторая форма: Функция валидации номера телефона
  var checkValue2 = function (input) {
    var $th = $(input);
    var phone = $th.val();	//Введенное значение
    var isValid = Inputmask.isValid(phone, { mask: '+7(999)999-9999' });	//Проверяем на валидность
    var $btn = $th.closest('#fird__form').find('.btn2');	//Ищем кнопку отправки формы
    var $error = $th.parent().parent().find('#form2__warning');	//Ищем ошибку

    if (!isValid) {
      //Если не валидно, то:
      $btn.prop('disabled', true); //Меняем атрибут disabled в значение true (делаем кнопку неактивной)
      $error.fadeIn(); //Показываем ошибку

    } else {
      $btn.prop('disabled', false); //Меняем атрибут disabled в значение false (делаем кнопку активной)
      $error.fadeOut(); //Скрываем ошибку
    }
  }

});