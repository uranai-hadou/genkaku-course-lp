const config = window.GENKAKU_CONFIG || {};
const dialog = document.querySelector('#line-dialog');
document.querySelectorAll('[data-line-cta]').forEach(button => {
  button.addEventListener('click', () => {
    if (config.lineUrl) {
      try {
        const url = new URL(config.lineUrl);
        if (url.protocol === 'https:') {
          window.location.assign(url.href);
          return;
        }
      } catch { /* An unset or invalid URL stays in preview mode. */ }
    }
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelectorAll('.dialog-close, .dialog-dismiss').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.querySelector('#year').textContent = new Date().getFullYear();
