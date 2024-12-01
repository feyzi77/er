// ������ ��� ������ ����� �� URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const telegramId = urlParams.get('telegram_id');
document.getElementById('telegram-username').innerText = username || "Guest";
document.getElementById('username').innerText = username || "Guest";

// ����� �� ��� (TonKeeper)
function connectWallet() {
    tonkeeper.request({
        method: 'ton_connect'
    }).then((wallet) => {
        fetch('/buy_position', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                wallet_address: wallet.address,
                telegram_id: telegramId,
                username: username
            })
        }).then(response => response.json())
          .then(data => alert(data.message));
    }).catch(error => alert('Error connecting wallet'));
}

// ������ 400 ��� HMSTR
function makePayment() {
    alert("Initiating payment of 400 HMSTR to the wallet.");
}

// ��� ���� ���� ���
function openWalletPage() {
    window.open('https://tonkeeper.com', '_blank');
}

// ������ ���ʝ��
function viewInvites() {
    window.location.href = `/invite/${telegramId}`;
}

// ������ �����
function withdrawRewards() {
    alert("Requesting 1000 HMSTR tokens reward.");
}
