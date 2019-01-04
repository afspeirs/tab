const Tab = (function Tab() {
	const tabButtons = [...document.querySelectorAll('[data-tab]')];
	const tabContent = [...document.querySelectorAll('.tab-content')];

	function buttonPress() {
		// Toggle tab content if the clicked tab is not active
		if (!this.classList.contains('active')) {
			// Set clicked tab as active
			// Remove active from the other tabs
			tabButtons.map((tab) => (tab === this ? tab.classList.add('active') : tab.classList.remove('active')));
			tabContent.map((tab) => (tab.id === this.dataset.tab ? tab.classList.add('active') : tab.classList.remove('active')));
		}
	}

	function init() {
		tabButtons.forEach(button => button.addEventListener('click', buttonPress));
	}

	return { init };
}());

export default Tab;
