function toggleLanguageMenu() {
    var menu = document.getElementById('language-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function setLanguage(language) {
    if (language === 'pt') {
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('indexptbr.html')) {
            window.location.href = 'indexptbr.html';
        } else if (window.location.pathname.endsWith('cv.html') || window.location.pathname.endsWith('cvptbr.html')) {
            window.location.href = 'cvptbr.html';
        }
    } else if (language === 'en') {
        if (window.location.pathname.endsWith('indexptbr.html') || window.location.pathname.endsWith('index.html')) {
            window.location.href = 'index.html';
        } else if (window.location.pathname.endsWith('cvptbr.html') || window.location.pathname.endsWith('cv.html')) {
            window.location.href = 'cv.html';
        }
    }
    toggleLanguageMenu();
}
