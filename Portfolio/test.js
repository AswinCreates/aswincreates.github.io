document.querySelectorAll('.popoutButton').forEach((button, index) => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const span = document.getElementById(targetId);
    
    // Calculate the bottom position dynamically based on the index
    const bottomPosition = 20 + (index * 60); // Adjust 60px gap between spans as needed
    
    // Set the bottom position before adding the active class
    span.style.bottom = `${bottomPosition}px`;
    span.classList.add('active');

    // Set a timeout to remove the 'active' class after 4 seconds (4000 milliseconds)
    setTimeout(function() {
      span.classList.remove('active');
      span.style.bottom = `-100px`; // Reset position after hiding
    }, 4000);
  });
});
