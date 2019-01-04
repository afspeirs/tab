const Tab = (function Tab() {
	const tabButtons = [...document.querySelectorAll('[data-tab]')];
	const tabContent = [...document.querySelectorAll('.tab-content')];

	function init() {
		tabButtons.forEach((e) => {
			e.addEventListener('click', () => {
				// Toggle tab content if the clicked tab is not active
				if (!e.classList.contains('active')) {
					// Set clicked tab as active
					// Remove active from the other tabs
					tabButtons.map((tab) => (tab === e ? tab.classList.add('active') : tab.classList.remove('active')));
					tabContent.map((tab) => (tab.id === e.dataset.tab ? tab.classList.add('active') : tab.classList.remove('active')));
				}
			});
		});
	}

	return { init };
}());

export default Tab;
