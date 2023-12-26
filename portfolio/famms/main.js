const menuIcon = document.getElementById('menu-icon');
        const navList = document.querySelector('.navlist');
        const icon = menuIcon.querySelector('i');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('open');
            navList.classList.toggle('open');

            // Toggle the icon between 'fa-bars' and 'fa-xmark'
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
                icon.style.transform = 'rotate(90deg)'; // Rotate the 'fa-xmark' icon
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                icon.style.transform = 'rotate(0deg)'; // Reset the rotation for 'fa-bars'
            }
        });

        // Add an event listener to the document to close the navList when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
                // If the click is outside the navList and menuIcon, close the navList
                menuIcon.classList.remove('open');
                navList.classList.remove('open');

                // Reset the icon to 'fa-bars'
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                icon.style.transform = 'rotate(0deg)'; // Reset the rotation for 'fa-bars'
            }
        });