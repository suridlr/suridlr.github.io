<script>
document.addEventListener("DOMContentLoaded", function () {
  const contactBox = document.querySelector(".contact-box");
  const statusEl = document.getElementById("availability-status");

  // Animate contact box on scroll
  if (contactBox) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactBox.classList.add("visible");
          } else {
            contactBox.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(contactBox);
  }

  // Dynamic availability status
  if (statusEl) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();

    const isOpen = (day >= 1 && day <= 6) && (hour >= 9 && hour < 18);

    if (isOpen) {
      statusEl.textContent = "✅ Open now";
    } else {
      statusEl.textContent = "⏰ Closed — back at 9am";
      statusEl.classList.add("closed");
    }
  }
});
</script>