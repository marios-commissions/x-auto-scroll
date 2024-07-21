document.addEventListener('DOMContentLoaded', () => {
	function setListeners() {
		document.querySelectorAll('[data-viewportview]').forEach((element) => {
			if (element.className.includes('patched-scroll')) return;

			setInterval(() => {
				if (element.scrollTop < 5) {
					element.scroll({ top: 0, behavior: 'instant' });
				}
			}, 10);

			element.classList.add('patched-scroll');
		});
	}

	setListeners();
	setInterval(setListeners, 1000);
});