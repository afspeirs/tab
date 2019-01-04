const Tab = (function Tab() {
	const tabButtons = [...document.querySelectorAll('[data-tab]')];

	function buttonPress() {
		const children = [...this.closest('.tab-container').children];
		// Get the children of the child with a class of tab-buttons
		const buttons = [...children.filter(child => child.classList.contains('tab-buttons'))[0].children];
		// Get all the children with a class of tab-content
		const content = children.filter(child => child.classList.contains('tab-content'));

		// Toggle tab content if the clicked tab is not active
		if (!this.classList.contains('active')) {
			// Set clicked tab as active
			// Remove active from the other tabs
			buttons.map((tab) => (tab === this ? tab.classList.add('active') : tab.classList.remove('active')));
			content.map((tab) => (tab.id === this.dataset.tab ? tab.classList.add('active') : tab.classList.remove('active')));
		}
	}

	function init() {
		tabButtons.forEach(button => button.addEventListener('click', buttonPress));
	}

	return { init };
}());

export default Tab;
