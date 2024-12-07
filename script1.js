// Handle Form Submissions
document.getElementById('netBankingForm').onsubmit = function (e) {
    e.preventDefault();
    alert(`You selected Net Banking with ${document.getElementById('bankName').value}. Proceeding with the payment.`);
};

document.getElementById('orderToDeliveryForm').onsubmit = function (e) {
    e.preventDefault();
    alert(`Your order will be delivered to: ${document.getElementById('deliveryAddress').value}.`);
};

document.getElementById('upiForm').onsubmit = function (e) {
    e.preventDefault();
    alert(`You are paying via UPI ID: ${document.getElementById('upiId').value}.`);
};
