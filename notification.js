export function showNotification(message, type = 'info', duration = 5000) {
  let notification = document.getElementById('global-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'global-notification';
    notification.className = 'notification';
    document.body.appendChild(notification);
  }
  
  notification.textContent = message;
  notification.className = `notification ${type}`;
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, duration);
  
  notification.onclick = () => {
    notification.classList.remove('show');
  };
}