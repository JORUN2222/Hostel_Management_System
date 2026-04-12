// ====== Room Modal Logic ======
document.addEventListener('DOMContentLoaded', function() {
  const roomBubbles = document.querySelectorAll('.room-bubble');
  const roomModal = document.getElementById('room-modal');
  const closeRoomModal = document.getElementById('close-room-modal');
  const roomModalTitle = document.getElementById('room-modal-title');
  const roomModalImg = document.getElementById('room-modal-img');
  const roomModalPrice = document.getElementById('room-modal-price');

  roomBubbles.forEach(function(bubble) {
    bubble.addEventListener('click', function() {
      // Set modal title and image
      const roomName = bubble.getAttribute('data-room') || bubble.querySelector('h2')?.innerText || 'Room';
      roomModalTitle.textContent = roomName + ' Action';
      roomModalImg.src = '../img/BSAU.jpg';
      roomModalPrice.textContent = '₱200'; // Static for now
      // Show modal
      roomModal.classList.remove('hidden');
    });
  });
  if (closeRoomModal) {
    closeRoomModal.onclick = function() {
      roomModal.classList.add('hidden');
    };
  }
  // Optional: close modal when clicking outside modal-content
  window.onclick = function(event) {
    if (roomModal && event.target === roomModal) {
      roomModal.classList.add('hidden');
    }
  };
});

// ====== Navigation Logic ======
function showSection(sectionId) {
  // Hide all page sections
  document.querySelectorAll('.page-section').forEach(div => div.classList.add('hidden'));
  // Show the selected section
  document.getElementById(sectionId).classList.remove('hidden');
  // Remove active from all nav buttons
  document.querySelectorAll('.action-btn').forEach(btn => btn.classList.remove('active'));
  // Add active to the correct button
  switch(sectionId) {
    case 'dashboard-content':
      document.getElementById('dashboard-btn').classList.add('active');
      break;
    case 'profile-content':
      document.getElementById('profile-btn').classList.add('active');
      break;
    case 'training-content':
      document.getElementById('training-btn').classList.add('active');
      break;
    case 'inventory-content':
      document.getElementById('inventory-btn').classList.add('active');
      break;
    case 'lessons-content':
      document.getElementById('lessons-btn').classList.add('active');
      break;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dashboard-btn').onclick = () => showSection('dashboard-content');
  document.getElementById('profile-btn').onclick = () => showSection('profile-content');
  document.getElementById('training-btn').onclick = () => showSection('training-content');
  document.getElementById('inventory-btn').onclick = () => showSection('inventory-content');
  document.getElementById('lessons-btn').onclick = () => showSection('lessons-content');
  // Show dashboard by default
  showSection('dashboard-content');
});


