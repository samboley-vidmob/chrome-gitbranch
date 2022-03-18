(function () {
	'use strict';

	// Saves options to chrome.storage.sync.
	function saveOptions() {
		var prefix = document.getElementById('prefix').value,
			command = document.getElementById('command').value,
			replacement = document.getElementById('replacement').value;

		chrome.storage.sync.set(
			{
				prefix: prefix,
				command: command,
				replacement: replacement
			},
			function() {
				// Update status to let user know options were saved.
				var utils = window.ExtUtils;

				utils.toastMessage('Options saved.');
			}
		);
	}

	// Restores select box and checkbox state using the preferences
	// stored in chrome.storage.
	function restoreOptions() {
		// Use default value color = 'red' and likesColor = true.
		chrome.storage.sync.get(
			{
				prefix: '',
				command: 'git checkout -b ',
				replacement: '-'
			},
			function(items) {
				document.getElementById('prefix').value = items.prefix;
				document.getElementById('command').value = items.command;
				document.getElementById('replacement').value = items.replacement;
			}
		);
	}

	document.addEventListener('DOMContentLoaded', restoreOptions);
	document.getElementById('save').addEventListener('click', saveOptions);
})();
