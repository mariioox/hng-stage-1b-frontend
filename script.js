window.addEventListener("DOMContentLoaded", () => {
  console.log("Profile Card Initialized");

  // Start our core features
  initEpochTimer();
  initAvatarUpload();
});

function initEpochTimer() {
  const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

  if (!timeDisplay) {
    console.warn("Required element 'test-user-time' not found.");
    return;
  }

  // Update immediately on load
  timeDisplay.textContent = Date.now().toString();

  // Update every 50ms
  setInterval(() => {
    timeDisplay.textContent = Date.now().toString();
  }, 50);
}

function initAvatarUpload() {
  const fileInput = document.getElementById("avatar-upload");
  const uploadBtn = document.getElementById("upload-trigger");
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

  if (!fileInput || !uploadBtn || !avatarImg) return;

  // Make the professional button click the hidden file input
  uploadBtn.addEventListener("click", () => fileInput.click());

  // Handle the file selection
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    // Check if it's actually an image
    if (file && file.type.startsWith("image/")) {
      // Generate a temporary URL for the local file
      const blobUrl = URL.createObjectURL(file);

      avatarImg.src = blobUrl;

      // Clean up memory when the image finishes loading
      avatarImg.onload = () => {
        URL.revokeObjectURL(blobUrl);
      };
    }
  });
}
