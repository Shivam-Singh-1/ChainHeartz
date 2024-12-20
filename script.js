// Global state variables
let totalDonated = 0;
const transactions = [];
let isOwner = false;
const OWNER_PASSWORD = "secure123"; // Note: In production, this would be handled server-side

// Transaction handling functions
function generateEncryptedCode() {
    return Math.random().toString(36).substring(2, 15);
}

function updateTransactionLog() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.slice(-5).reverse().forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <span class="cause">${transaction.cause}</span>
            <div class="transaction-details">
                <span class="amount">$${transaction.amount.toFixed(2)}</span>
                <span class="transaction-id">TX: ${transaction.code}</span>
            </div>
        `;
        transactionList.appendChild(transactionItem);
    });
}

// UI state management functions
function toggleLoading(isLoading) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.toggle('active', isLoading);
}

function showThankYouModal(amount, cause, transactionCode) {
    const modal = document.getElementById('thankYouModal');
    document.getElementById('modalMessage').textContent = `Your donation of $${amount.toFixed(2)} to the ${cause} cause has been processed successfully.`;
    document.getElementById('transactionCode').textContent = `Transaction Code: ${transactionCode}`;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('thankYouModal').classList.remove('active');
}

// Donation handling
function donate() {
    const amount = parseFloat(document.getElementById('donationAmount').value);
    const cause = document.getElementById('causeSelect').value;

    if (amount >= 0.01 && cause) {
        toggleLoading(true);

        setTimeout(() => {
            const encryptedCode = generateEncryptedCode();
            totalDonated += amount;
            document.getElementById('totalDonated').innerText = `Total Donated: $${totalDonated.toFixed(2)}`;

            transactions.push({ cause, amount, code: encryptedCode });
            updateTransactionLog();
            toggleLoading(false);
            showThankYouModal(amount, cause, encryptedCode);

            document.getElementById('donationAmount').value = '';
            document.getElementById('causeSelect').selectedIndex = 0;
        }, 1500);
    } else {
        alert('Please enter a valid amount (minimum $0.01) and select a cause.');
    }
}

// Withdrawal and authentication functions
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    
    if (this.classList.contains('active')) {
        showPasswordModal();
    }
});

function showPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    passwordModal.classList.add('active');
    document.getElementById('ownerPassword').value = '';
}

function closePasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    passwordModal.classList.remove('active');
    document.querySelector('.hamburger-menu').classList.remove('active');
}

function verifyPassword() {
    const password = document.getElementById('ownerPassword').value;
    if (password === OWNER_PASSWORD) {
        isOwner = true;
        closePasswordModal();
        showWithdrawModal();
    } else {
        alert('Incorrect password');
    }
}

function showWithdrawModal() {
    if (!isOwner) {
        showPasswordModal();
    } else {
        const withdrawModal = document.getElementById('withdrawModal');
        document.getElementById('currentBalance').textContent = totalDonated.toFixed(2);
        withdrawModal.classList.add('active');
    }
}

function closeWithdrawModal() {
    const withdrawModal = document.getElementById('withdrawModal');
    withdrawModal.classList.remove('active');
}

function withdrawFunds() {
    if (!isOwner) {
        alert('Unauthorized access');
        return;
    }
    
    const amount = totalDonated;
    totalDonated = 0;
    document.getElementById('totalDonated').innerText = `Total Donated: $0.00`;
    
    const encryptedCode = generateEncryptedCode();
    transactions.push({ 
        cause: 'Withdrawal', 
        amount: -amount, 
        code: encryptedCode 
    });
    
    updateTransactionLog();
    closeWithdrawModal();
    
    alert(`Successfully withdrawn $${amount.toFixed(2)}`);
}

// Global event handlers
window.onclick = function(event) {
    const modals = [
        document.getElementById('thankYouModal'),
        document.getElementById('passwordModal'),
        document.getElementById('withdrawModal')
    ];
    
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.querySelector('.hamburger-menu').classList.remove('active');
        }
    });
};