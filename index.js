$(document).ready(function() {
	//Объект, который передадим в шаблон
	var objTemp = {
		dataTitle: '', // Для шаблона заголовок
		dataMessage: '', // Для шаблона контент
		url: '' // сюда будем записывать глобальный - текущий урл, чтобы можно было использовать на всех событиях
	}

	$('.header ul li a').click(function(event) {
		$('.wrapPopup').remove();                      // при клике отчищаем предыдущее, если есть
	
		var app = APP.controls,                        // объявляем зависимость 
			rendered,                                  // будущий результат шаблона
			parentElem = document.body.children[1],    // запоминаем блок со ссылками
			wrap = document.createElement('div');      // создаем обертку

			objTemp.dataTitle = $(this).attr('data-title');     // пишем в свойства, текущие данные ссылки
			objTemp.dataMessage = $(this).attr('data-message'); //....
			objTemp.url = $(this).attr('href');					//....

			rendered = app.renderTemplate('template', objTemp); // шаблонизируем

			wrap.innerHTML = rendered;           // кидаем в обертку, готовый шаблон
			wrap.className = 'wrapPopup';        // добавляем еще класс обертке, для удаления из ДОМ
 			parentElem.appendChild(wrap);		// и добавляем после блока со ссылками
			
			event.preventDefault();				// отменяем переход по ссылке по умолчанию
	});

	$(document).on('click', '#buttonCancel', function() {
	  	$('.wrapPopup').remove();  //  если ОТМЕНА, удаляем из дом шаблон
	});

	$(document).on('click', '#buttonOk', function() {
	  	window.location = objTemp.url; // если ок, переходим по урлу, из свойства объекта
	});

});