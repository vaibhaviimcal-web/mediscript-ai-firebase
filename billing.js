// Billing Module
// Invoice generation and GST calculation

const GST_RATE = 0.18; // 18% GST

function calculateGST(amount) {
  const gst = amount * GST_RATE;
  const total = amount + gst;
  
  return {
    subtotal: parseFloat(amount.toFixed(2)),
    gst: parseFloat(gst.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

function generateInvoiceNumber() {
  const date = new Date();
  const year = date.getFullYear().toString().substr(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return 'INV-' + year + month + '-' + random;
}
