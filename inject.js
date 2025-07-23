const observer = new MutationObserver(() => {
  const logo = document.querySelector('img[src*="logo-desktop.svg"]');
  if (logo && !logo.classList.contains('replaced')) {
    const newImg = document.createElement('img');
    newImg.src = browser.runtime.getURL('assets/dark-logo.svg');
    newImg.className = logo.className;
    newImg.width = logo.width;
    newImg.height = logo.height;
    newImg.classList.add('replaced');
    logo.replaceWith(newImg);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
