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
    { name: 'Wood', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Timbers', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Timber', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Hardwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Hardwood', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Softwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Softwood', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Manufactured Boards', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Oak', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Mahogany', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Beech', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Jelutong', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Balsa', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Pine', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Cedar', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Larch', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Redwood', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Plywood', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Medium Density Fibreboard', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'MDF', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Particle board', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Blockboard', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    // WOODS^^^
    { name: 'Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Metal', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Ferrous Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Non-ferrous Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Alloys', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Mild Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Medium Carbon Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'High carbon steel', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Cast Iron', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Aluminium', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Copper', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Zinc', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Tin', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Stainless Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Duralumin', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Brass', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    // Metals^^^
    { name: 'Plastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Plastic', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polymers', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polymer', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Thermoplastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Thermosetting Plastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Elastomers', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Acrylic', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polyethylene', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polyethylene terephthalate', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polyvinyl Chloride', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polypropylene', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'ABS', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Epoxy resin', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Urea formaldehyde', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polyester resin', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Rubber', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    // Polymers^^^
    { name: 'Composites', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Composite', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Fibre-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Particle-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Sheet-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance)', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Carbon fibre', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'GRP', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Reinforced concrete', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'MDF composite', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Hardboard', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Chipboard', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Plywood composite', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    // Composites^^^
    { name: 'Papers and Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Drawing papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Commerical printing papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'How papers/boards are made', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'How is paper made', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Measuring papers and boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Layout paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Tracing paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Copier paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Bond paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Coated paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Mounting board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Corrugated board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Foam board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Folding box board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Foil-lined board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    // Papers and boards^^^
    { name: 'Textiles', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Natural fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Manmade fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Textile treatments', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Cotton', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Linen', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Wool', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Nylon', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Polypropylene fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Polyester fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Flame resistant', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Polytetrafluoroethylene (PTFE)', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'PTFE', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    // Textiles^^^
    { name: 'Smart Materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Smart Materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'SMA', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Shape memory alloy', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Reactive glass', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Phosphorescent pigment', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Electroluminescent wire', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Photo-chromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Thermo-chromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Photochromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Thermochromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Photochromic', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Thermochromic', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Quantum tunnelling composites', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'QTC', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Piezoelectric material', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Piezoelectric', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    // Smart materials^^^
    { name: 'Modern Materials', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Thermo-ceramics', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Liquid crystal displays', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'LCD', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Glulam', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Kevlar', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Precious metal clay', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'PMC', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Nanomaterials', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'High density modelling foam', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Polymorph', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    // Modern materials^^^

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
