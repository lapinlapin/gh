var APP = {}; // глоб объект
APP.controls = {}; // неймспейс

// оборачиваем 
APP.controls = (function() {
    // так получилось, что одна функция) думал будет много всего)
	
	/**
	 * Возвращает шаблон.
	 *
	 * @param  {String} tmp  id шаблона.
	 * @param  {Object} obj (view).
	 * @return {DOM}    получаем шаблон.
	*/
	function renderTemplate(tmp, obj) {
		var template = document.getElementById(tmp).innerHTML,
			after = Mustache.render(template, obj);
		return after;
	}

	// открываем все что есть :)
	return {
		renderTemplate: renderTemplate
	}
})();