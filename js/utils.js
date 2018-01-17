(function () {
	'use strict';

	var ExtUtils = function() {
		var self = this;

		this.toastMessage = function(message, type) {
			return self.toastMsg(message, type);
		};

		self.i18nTranslate();
	}

	ExtUtils.prototype.toastMsg = function(message, type) {
		var $messages = document.createElement('div');
		$messages.id = 'messages';

		$messages.innerText = message;
		$messages.className = 'visible';

		document.body.appendChild($messages);

		setTimeout(function() {
			$messages.className = '';

			setTimeout(function() {
				document.body.removeChild($messages);
			}, 2000);
		}, 2000);

	};

	ExtUtils.prototype.i18nTranslate = function() {
		var $objects = document.getElementsByTagName('*');

		for(var i = 0; i < $objects.length; i++) {
			if ($objects[i].dataset && $objects[i].dataset.translate) {
				$objects[i].innerHTML = chrome.i18n.getMessage($objects[i].dataset.translate);
			}
		}
	}

	if (window.ExtUtils === undefined) {
		window.ExtUtils = new ExtUtils();
	}
})();
