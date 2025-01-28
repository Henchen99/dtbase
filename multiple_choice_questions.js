
const allQuestions = [
    { question: "Which hardwood has very few knots?", options: ["Mahogany", "Ash", "Beech"], answer: "Mahogany" },
    { question: "What is one factor that makes hardwoods more expensive than softwoods?", options: ["Hardwoods need more care", "Hardwoods have higher density", "Hardwoods grow slower"], answer: "Hardwoods grow slower" },
    { question: "Which hardwood is good for steam bending?", options: ["Ash", "Pine", "Beech"], answer: "Ash" },
    { question: "What manmade board has perpendicular layers?", options: ["Chipboard", "Plywood", "MDF"], answer: "Plywood" },
    { question: "Which softwood stains well?", options: ["Spruce", "Pine", "Larch"], answer: "Pine" },
    { question: "Chipboard can be toxic/hard to recycle for what reason?", options: ["The adhesives in it", "It's recycled wood", "It has a very high density"], answer: "The adhesives in it" },
    { question: "Plywood is used in many school workshops for what reason?", options: ["More durable than natural timber", "Cheap in comparison to natural timber", "Finishes well"], answer: "More durable than natural timber" },
    { question: "What is the main advantage of manufactured boards over natural timbers?", options: ["Much more aesthetic than natural timber", "Made in any shape/size/thickness", "Much stronger than natural timber"], answer: "Made in any shape/size/thickness" },
    { question: "What makes a metal a ferrous metal?", options: ["It must contain carbon", "It must contain iron", "It must contain rust"], answer: "It must contain iron" },
    { question: "The carbon content in ferrous metals usually ranges between what?", options: ["0.15 and 1.4%", "98.3 and 100%", "23.3 and 42%"], answer: "0.15 and 1.4%" },
    { question: "What is a disadvantage of Cast iron?", options: ["It is ductile", "It is soft", "It is brittle"], answer: "It is brittle" },
    { question: "Aluminium is ideal for aircraft due to what property?", options: ["Its malleable", "Its lightweight", "Its corrosion resistant"], answer: "Its lightweight" },
    { question: "What is an alloy?", options: ["A mixture of two or more materials", "A mixture of two or more metals", "A mixture of two or more polymers"], answer: "A mixture of two or more metals" },
    { question: "Copper is used for wiring because of what property?", options: ["It is ductile", "It is soft", "It is brittle"], answer: "It is ductile" },
    { question: "Why is brass used in gears?", options: ["It casts well", "It is easy to machine", "It has a low coefficient of friction"], answer: "It has a low coefficient of friction" },
    { question: "What might stainless steel be used to make?", options: ["Kitchen utensils", "Ship propellers", "Magnets"], answer: "Kitchen utensils" },
    { question: "What is an advantage of all thermoplastics?", options: ["Resist UV degradation", "Can be reheated and reshaped", "Easy to finish"], answer: "Can be reheated and reshaped" },
    { question: "What might acrylic be used for?", options: ["CD cases", "Piping", "Fizzy drinks bottles"], answer: "CD cases" },
    { question: "What is an advantage of using Polyvinyl Chloride?", options: ["Scratch resistant", "Easy to recycle", "Available in a range of colours"], answer: "Available in a range of colours" },
    { question: "ABS is used in motorcycle helmets for what reason?", options: ["Its chemical resistant", "Its heat resistant", "It's tough"], answer: "It's tough" },
    { question: "What is epoxy resin used for?", options: ["Adhesives", "Domestic appliances", "Garden furniture"], answer: "Adhesives" },
    { question: "What is a disadvantage of using Urea formaldehyde?", options: ["Emits toxic gases when manufactured", "Poor heat resistance", "Causes allergic reactions"], answer: "Emits toxic gases when manufactured" },
    { question: "What non-renewable resource are polymers made from?", options: ["Natural gas", "Crude oil", "Petrol"], answer: "Crude oil" },
    { question: "What is a common disadvantage of most thermosets?", options: ["Soft", "Brittle", "Poor corrosion resistance"], answer: "Brittle" },
    { question: "GRP is a combination of which materials?", options: ["Glass fibre and resin", "Wood fibre and resin", "Carbon fibre and resin"], answer: "Glass fibre and resin" },
    { question: "Kevlar is a material that has which of these properties?", options: ["Strong and resistant to impact", "Soft and resistant to spills and stains", "Conductive and resistant to fire"], answer: "Strong and resistant to impact" },
    { question: "Which of these is a large sheet-based composite?", options: ["ABS", "CRP", "MDF"], answer: "CRP" },
    { question: "What material is added to concrete to give it better tensile strength?", options: ["Steel rods", "Glass fibres", "Aggregate/stone"], answer: "Steel rods" },
    { question: "What are two mechanical properties of plywood?", options: ["Uniform strength and toughness", "Lightweight and dimensionally stable", "Strength and hardness"], answer: "Lightweight and dimensionally stable" },
    { question: "What is a suitable composite material for the body of a Formula 1 car?", options: ["GRP", "GRC", "Lightweight ceramic"], answer: "GRP" },
    { question: "What is CFRP?", options: ["Carbon fibre resin polymer", "Cement fibre reinforced plastic", "Carbon fibre reinforced polymer"], answer: "Carbon fibre reinforced polymer" },
    { question: "What gives plywood such good strength?", options: ["The repeating perpendicular grain", "The softwoods used in the layers", "The hardwoods used in the layers"], answer: "The repeating perpendicular grain" },
    { question: "How many times can paper be recycled?", options: ["10 times", "7 times", "5 times"], answer: "7 times" },
    { question: "Why is paper bleached?", options: ["To give the paper a nice finish", "To keep the paper from browning", "To remove pulp fibres"], answer: "To keep the paper from browning" },
    { question: "What is not an advantage of foil-lined board?", options: ["Good barrier against moisture", "Inexpensive", "Easy to work"], answer: "Inexpensive" },
    { question: "Why might a piece of card be scored?", options: ["To see how thick it is", "So the card is easy to cut", "So the card can be folded neatly"], answer: "So the card can be folded neatly" },
    { question: "Which fibres in wood are used to make paper?", options: ["Cellulose fibres from softwood trees", "Bark fibres from any tree", "Cellulose fibres from hardwood trees"], answer: "Cellulose fibres from softwood trees" },
    { question: "How is the density of paper measured?", options: ["Grams per square millimetre", "Grams per square metre", "By measuring the paper"], answer: "Grams per square metre" },
    { question: "What is not a use of bond paper?", options: ["Letterheads", "Photographs", "Graphic work"], answer: "Photographs" },
    { question: "Which institution promotes responsible management of the world’s forests?", options: ["Forest Stewardship Council", "Forest Protection Group", "Woodland protection council"], answer: "Forest Stewardship Council" },
    { question: "Which of the following is not a natural fibre?", options: ["Cotton", "Silk", "Nylon"], answer: "Nylon" },
    { question: "Why do we blend fabrics?", options: ["To improve properties", "To make aesthetic patterns", "To improve texture"], answer: "To improve properties" },
    { question: "What is the main disadvantage of silk?", options: ["It has poor insulation properties", "It's expensive", "It weakens when wet"], answer: "It weakens when wet" },
    { question: "What are polyester fibres used to make?", options: ["Seatbelts", "Ball gowns", "Lycra"], answer: "Seatbelts" },
    { question: "Why is elastane (lycra) used in sportwear?", options: ["Drapes well", "Good solvent resistance", "It's elastic"], answer: "It's elastic" },
    { question: "What is polycotton used to make?", options: ["Shirts", "Car tyres", "Sportswear"], answer: "Shirts" },
    { question: "What is not a synthetic fibre?", options: ["Polyester", "Silk", "Elastane"], answer: "Silk" },
    { question: "What sort of degradation usually affects synthetic fibres?", options: ["Heat radiation", "Infrared radiation", "UV radiation"], answer: "UV radiation" },
    { question: "Which one of the following is a smart material?", options: ["Shape memory alloy (SMA)", "Polyester resin", "Medium density fibreboard (MDF)"], answer: "Shape memory alloy (SMA)" },
    { question: "Which one of the following materials will respond quickly to a change in ultraviolet (UV) light?", options: ["Shape memory alloys", "Photochromic materials", "Carbon nanotubes"], answer: "Photochromic materials" },
    { question: "What is the definition of a smart material?", options: ["A material that has been engineered to have additional properties", "A material whose physical properties change in response to external stimuli", "A material that is available in large sheets"], answer: "A material whose physical properties change in response to external stimuli" },
    { question: "What material is used to make dental braces?", options: ["Nitinol", "Zinc", "Aluminium"], answer: "Nitinol" },
    { question: "What is not a use for thermo-ceramics?", options: ["Turbine blades", "Metal cutting tools", "F1 car brake discs"], answer: "Metal cutting tools" },
    { question: "Which of the statements about Graphene are false?", options: ["Graphene is a nonmetal", "Graphene has low resistance to flow of electricity", "Graphene has high resistance to flow of electricity"], answer: "Graphene has low resistance to flow of electricity" },
    { question: "Which of these properties of glulam is false?", options: ["Cheap material", "Easy to form and shape", "Good strength-to-weight ratio"], answer: "Cheap material" },
];



// Function to shuffle and select 5 random questions
function getRandomQuestions() {
    let shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, 5); // Get first 5 questions
}

let selectedQuestions = getRandomQuestions(); // Store selected questions

// Function to render questions dynamically
function renderQuestions() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear any existing content

    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // Question text
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        // Options
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.classList.add("option-label");
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            `;
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    });

    // Show the submit & refresh buttons
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("refresh-btn").style.display = "block";
}

// Function to calculate and display results + Highlight answers
function calculateResults() {
    let score = 0;

    selectedQuestions.forEach((q, index) => {
        const options = document.querySelectorAll(`input[name="q${index}"]`);
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);

        options.forEach(option => {
            const parentLabel = option.parentElement; // Get label tag

            // Reset colors before applying new ones
            parentLabel.style.backgroundColor = "";

            if (option.value === q.answer) {
                parentLabel.style.backgroundColor = "#b6ffb6"; // Green for correct answers
            }

            if (selectedOption && selectedOption.value === option.value && selectedOption.value !== q.answer) {
                parentLabel.style.backgroundColor = "#ffb6b6"; // Red for wrong answer
            }
        });

        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    // Display results
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    resultText.textContent = `You got ${score} out of ${selectedQuestions.length} correct!`;
    resultContainer.style.display = "block";
}

// Function to refresh questions without reloading the page
function refreshQuestions() {
    selectedQuestions = getRandomQuestions(); // Get new random questions
    renderQuestions(); // Re-render questions
    document.getElementById("result-container").style.display = "none"; // Hide previous results
}

// Event listeners
document.getElementById("submit-btn").addEventListener("click", calculateResults);
document.getElementById("refresh-btn").addEventListener("click", refreshQuestions);

// Render initial questions on page load
renderQuestions();
