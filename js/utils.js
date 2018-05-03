(function () {
	'use strict';

	class ExtUtils {
		constructor() {
			var self = this;
	
			this.toastMessage = function(message, type) {
				return self.toastMsg(message, type);
			};
	
			self.i18nTranslate();
		}

		toastMsg(message, type) {
			var $messages = document.createElement('div');
			$messages.id = 'messages';
	
			$messages.innerText = message;
			$messages.className = 'visible';
	
			if (type == 'error') {
				$messages.className += ' error';
			}
	
			document.body.appendChild($messages);
	
			setTimeout(function() {
				$messages.className = '';
	
				setTimeout(function() {
					document.body.removeChild($messages);
				}, 2000);
			}, 2000);
	
		};
	
		i18nTranslate() {
			var $objects = document.getElementsByTagName('*');
	
			for(var i = 0; i < $objects.length; i++) {
				if ($objects[i].dataset && $objects[i].dataset.translate) {
					$objects[i].innerHTML = chrome.i18n.getMessage($objects[i].dataset.translate);
				}
			}
		}
	
	}
	
	if (window.ExtUtils === undefined) {
		window.ExtUtils = new ExtUtils();
	}
})();
