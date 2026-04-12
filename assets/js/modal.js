const overlay = document.getElementById('room-overlay');
let activeRoomBubble = null;

document.querySelectorAll('.room-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        activeRoomBubble = bubble;
        document.getElementById('modal-room-name').textContent = bubble.dataset.room;
        document.getElementById('modal-img').src = bubble.querySelector('img').src;
        // Clear previous inputs
        ['modal-firstname','modal-lastname','modal-age','modal-date','modal-contact']
            .forEach(id => document.getElementById(id).value = '');
        overlay.classList.add('open');
    });
});

function closeModal() {
    overlay.classList.remove('open');
    activeRoomBubble = null;
}

function handleRoomAction(type) {
    const firstname = document.getElementById('modal-firstname').value.trim();
    const lastname  = document.getElementById('modal-lastname').value.trim();
    const age       = document.getElementById('modal-age').value.trim();
    const date      = document.getElementById('modal-date').value;
    const contact   = document.getElementById('modal-contact').value.trim();

    if (!firstname || !lastname || !age || !date || !contact) {
        alert('Please fill in all fields.');
        return;
    }

    if (activeRoomBubble) {
        const statusEl = activeRoomBubble.querySelector('.status');
        if (type === 'reserve') {
            statusEl.textContent = 'Reserved';
            statusEl.style.color = '#e65100';
        } else {
            statusEl.textContent = 'Occupied';
            statusEl.style.color = '#c62828';
        }
    }

    // You can also add the new row to the room table here
    closeModal();
}

document.getElementById('reserve-btn').addEventListener('click', () => handleRoomAction('reserve'));
document.getElementById('checkin-btn').addEventListener('click', () => handleRoomAction('checkin'));
document.getElementById('cancel-btn').addEventListener('click', closeModal);

// Close when clicking outside the modal
overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
});


// inventory



// Inventory Add Modal
const invOverlay = document.getElementById('inv-overlay');

document.getElementById('add-inventory-btn').addEventListener('click', () => {
    // Clear fields
    ['inv-name', 'inv-brand', 'inv-qty'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('type-consumable').checked = true;
    invOverlay.classList.add('open');
});

function closeInvModal() {
    invOverlay.classList.remove('open');
}

document.getElementById('close-inv-modal').addEventListener('click', closeInvModal);
document.getElementById('btn-inv-cancel').addEventListener('click', closeInvModal);

invOverlay.addEventListener('click', e => {
    if (e.target === invOverlay) closeInvModal();
});

document.getElementById('btn-add-item').addEventListener('click', () => {
    const name  = document.getElementById('inv-name').value.trim();
    const brand = document.getElementById('inv-brand').value.trim();
    const qty   = document.getElementById('inv-qty').value.trim();
    const type  = document.querySelector('input[name="inv-type"]:checked').value;

    if (!name || !brand || !qty) {
        alert('Please fill in all fields.');
        return;
    }

    // Determine which table to append to
    const tableSelector = type === 'Consumable'
        ? '#inventory-content .table1 table'
        : '#inventory-content .table2 table';

    const table = document.querySelector(tableSelector);
    const rowCount = table.querySelectorAll('tr').length; // includes header
    const newId = rowCount; // auto-increment id

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${newId}</td>
        <td>${name}</td>
        <td>${brand}</td>
        <td>${qty}</td>
        <td>
            <button class="editBtn btn-modal btn-accept">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;
    table.appendChild(row);

    closeInvModal();
});