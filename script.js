// Loop through all 5 members using their numbered IDs
for (let i = 1; i <= 6; i++) {
    const toggleButton = document.getElementById(`edward-${i}`);
    const menuContainer = document.getElementById(`balls-${i}`);

    // Ensure both elements exist before adding the click event
    if (toggleButton && menuContainer) {
        toggleButton.addEventListener('click', function() {
            menuContainer.classList.toggle('show');
        });
    }
}
