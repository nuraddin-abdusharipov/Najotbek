import { showNotification } from './notification.js';
// Example: attach to window for pages to call without import
window.showNotification = showNotification;