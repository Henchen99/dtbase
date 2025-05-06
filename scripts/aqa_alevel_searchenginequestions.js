const aqa_alevel_questions = [
    //3.1.1 Materials and their applications
    { question: "Materials and their applications (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A1/3.1.1_materials_and_their_applications.pdf" },
    { question: "Classification of materials (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A1/3.1.1_classification_of_materials.pdf" },
    { question: "Methods for investigating and testing materials (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A1/3.1.1_methods_for_investigating_and_testing_materials.pdf" },
    //3.1.2 Performance characteristics of materials
    { question: "Performance characteristics of papers and boards (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_papers_and_boards.pdf" },
    { question: "Performance characteristics of polymer based sheet and film (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_polymer_based_sheet_and_film.pdf" },
    { question: "Performance characteristics of woods (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_woods.pdf" },
    { question: "Performance characteristics of metals (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_metals.pdf" },
    { question: "Performance characteristics of polymers (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_polymers.pdf" },
    { question: "Elastomers (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_elastomers.pdf" },
    { question: "Biodegradable polymers (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_biodegradable_polymers.pdf" },
    { question: "Composites (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_composites.pdf" },
    { question: "Smart materials (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_smart_materials.pdf" },
    { question: "Modern materials (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A2/3.1.2_modern_materials.pdf" },
    //3.1.5 The use of finishes
    { question: "Paper and board finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_paper_and_board_finishing.pdf" },
    { question: "Paper and board printing processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_paper_and_board_printing_processes.pdf" },
    { question: "Polymer finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_polymer_finishing.pdf" },
    { question: "Metal finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_metal_finishing.pdf" },
    { question: "Wood finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_wood_finishing.pdf" },
    //3.1.11 Design for manufacturing, maintenance, repair and disposal
    { question: "Manufacture, repair, maintenance and disposal (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_manufacture_repair_maintenance_and_disposal.pdf" },
    { question: "Ease of manufacture (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_ease_of_manufacture.pdf" },
    { question: "Disassembly (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_disassembly.pdf" },

    
];


// Function to perform search and display multiple matches for selection
function search() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    // Check if the search input is empty
    if (searchInput === '') {
        // Clear search results container
        document.getElementById('searchResults').innerHTML = '';
        return; // Exit the function if the search input is empty
    }

    // Check if the search input matches any of the questions
    const matchedQuestions = aqa_alevel_questions
        .filter(question =>
            question.question.toLowerCase().includes(searchInput)
        )
        .slice(0, 10); // Limit to the first 10 matched questions

    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous search results

    if (matchedQuestions.length > 0) {
        // Display the matched questions for selection
        matchedQuestions.forEach(matchedQuestion => {
            const resultItem = document.createElement('li');
            resultItem.textContent = matchedQuestion.question;
            resultItem.classList.add('search-result-item');
            resultItem.dataset.url = matchedQuestion.url; // Store URL as data attribute
            resultsContainer.appendChild(resultItem);
        });
    } else {
        // Handle case where no match is found
        resultsContainer.innerHTML = '<li>No matching question found.</li>';
    }
}

// Add event listener to handle input changes in the search input field
document.getElementById('searchInput').addEventListener('input', search);

// Add event listener to handle click on search result items
document.getElementById('searchResults').addEventListener('click', function(event) {
    const clickedItem = event.target;
    if (clickedItem.classList.contains('search-result-item')) {
        window.location.href = clickedItem.dataset.url;
    }
});

// Handle the Enter key to go to the first result
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const topResult = document.querySelector('.search-result-item');
        if (topResult) {
            window.location.href = topResult.dataset.url;
        }
    }
});


const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.querySelectorAll('.nav-link-wrapper');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navbarLinks.forEach((it) => {
        it.classList.toggle('active');
    });

});


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
