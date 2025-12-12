// Utility Functions
// Helper functions for validation and formatting

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[+]?[0-9]{10,13}$/;
  return re.test(phone.replace(/\s/g, ''));
}

function formatDate(date) {
  if (!date) return '';
  if (date.toDate) date = date.toDate();
  return new Date(date).toLocaleDateString('en-IN');
}

function formatCurrency(amount) {
  return '₹' + parseFloat(amount).toFixed(2);
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '');
}
