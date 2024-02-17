// const hamburgers = document.getElementsByClassName('hamburger')[0];
// const nav_link_wrapper = document.getElementsByName('nav-link-wrapper')[0];

// hamburgers.addEventListener('click', () => {
//     nav_link_wrapper.classList.toggle('active');
// })


// const toggleButton = document.getElementsByClassName('hamburger')[0]
// const navbarLinks = document.getElementsByClassName('nav-link-wrapper')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })


const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.querySelectorAll('.nav-link-wrapper');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navbarLinks.forEach((it) => {
        it.classList.toggle('active');
    });

});

// const toggleArrow = document.getElementsByClassName('drop_down')[0];
// const courseworkDrop = document.querySelectorAll('.portfolio-item-wrapper-notes-coursework');

// toggleArrow.addEventListener('click', () => {
//     console.log("Clicked");
//     toggleArrow.classList.toggle('active');
//     courseworkDrop.forEach((it) => {
//         it.classList.toggle('active');
//     });
// });

// const toggleArrow_pastpaper = document.getElementsByClassName('drop_down_pp')[0];
// const pastpaperDrop = document.querySelectorAll('.portfolio-item-wrapper-notes-pastpaper');

// toggleArrow_pastpaper.addEventListener('click', () => {
//     console.log("Clicked");
//     toggleArrow_pastpaper.classList.toggle('active');
//     pastpaperDrop.forEach((it) => {
//         it.classList.toggle('active');
//     });
// });


// const toggleArrowsPastpaper = document.querySelectorAll('.drop_down_pp');
// const pastpaperDrops = document.querySelectorAll('.portfolio-item-wrapper-notes-pastpaper');

// toggleArrowsPastpaper.forEach((toggleArrow_pastpaper) => {
//     toggleArrow_pastpaper.addEventListener('click', () => {
//         console.log("Clicked");
//         toggleArrow_pastpaper.classList.toggle('active');
//         pastpaperDrops.forEach((it) => {
//             it.classList.toggle('active');
//         });
//     });
// });

// const toggleArrows = document.querySelectorAll('.drop_down');
// const courseworkDrops = document.querySelectorAll('.portfolio-item-wrapper-notes-coursework');

// toggleArrows.forEach((toggleArrow) => {
//     toggleArrow.addEventListener('click', () => {
//         console.log("Clicked");
//         toggleArrow.classList.toggle('active');
//         courseworkDrops.forEach((it) => {
//             it.classList.toggle('active');
//         });
//     });
// });

const toggleArrowsPastpaper = document.querySelectorAll('.drop_down_pp');

toggleArrowsPastpaper.forEach((toggleArrow_pastpaper) => {
    toggleArrow_pastpaper.addEventListener('click', () => {
        console.log("Clicked");
        toggleArrow_pastpaper.classList.toggle('active');
        const pastpaperDrops = toggleArrow_pastpaper.closest('.pastpaper_dropdown').querySelectorAll('.portfolio-item-wrapper-notes-pastpaper');
        pastpaperDrops.forEach((it) => {
            it.classList.toggle('active');
        });
    });
});

const toggleArrows = document.querySelectorAll('.drop_down');

toggleArrows.forEach((toggleArrow) => {
    toggleArrow.addEventListener('click', () => {
        console.log("Clicked");
        toggleArrow.classList.toggle('active');
        const courseworkDrops = toggleArrow.closest('.coursework_dropdown').querySelectorAll('.portfolio-item-wrapper-notes-coursework');
        courseworkDrops.forEach((it) => {
            it.classList.toggle('active');
        });
    });
});








// Define your topics and their corresponding URLs
const topics = [
    { name: 'Woods', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    // Add more topics as needed
];

// Function to perform search and redirect to the notes page if there's a match
function search() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    // Check if the search input matches any of the topics
    const matchedTopic = topics.find(topic =>
        topic.name.toLowerCase() === searchInput
    );

    if (matchedTopic) {
        // Redirect to the matched topic's URL
        window.location.href = matchedTopic.url;
    } else {
        // Handle case where no match is found (optional)
        alert('No matching topic found.');
    }
}

// Get the search input element
const searchInput = document.getElementById('searchInput');

// Add event listener for keydown event
searchInput.addEventListener('keydown', function(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Call the search function when Enter is pressed
        search();
    }
});
