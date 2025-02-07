function showActiveTab(tabName) {
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}