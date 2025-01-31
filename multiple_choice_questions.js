
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

    { question: "Which one of the following is a smart material?", options: ["Shape memory alloy (SMA)", "Polyester resin", "Medium density fibreboard (MDF)"], answer: "Shape memory alloy (SMA)" },
    { question: "Which one of the following materials will respond quickly to a change in ultraviolet (UV) light?", options: ["Shape memory alloys", "Photochromic materials", "Carbon nanotubes"], answer: "Photochromic materials" },
    { question: "What is the definition of a smart material?", options: ["A material that has been engineered to have additional properties", "A material whose physical properties change in response to external stimuli", "A material that is available in large sheets"], answer: "A material whose physical properties change in response to external stimuli" },
    { question: "Smart materials have?", options: ["Properties that can significantly change", "Good conducting properties", "Weak covalent bonds"], answer: "Properties that can significantly change" },
    { question: "What material is used to make dental braces?", options: ["Nitinol", "Zinc", "Aluminium"], answer: "Nitinol" },
    { question: "What properties does phosphorescent pigment have?", options: ["Never ending light source", "Absorbs heat, heat energy released in dark", "Absorbs light and releases it in the dark"], answer: "Absorbs light and releases it in the dark" },
    { question: "Why might quantum tunnelling composites be used in a winter coat?", options: ["They have excellent thermal capacity", "Allow user to use electronics without hands", "Protect user from UV radiation"], answer: "Allow user to use electronics without hands" },
    { question: "Reactive glass could reduce energy consumption by?", options: ["Storing heat energy and turning it into electricity", "Changing transparency with light to keep room temperatures constant", "Increasing incident light rays into houses creating more heat energy"], answer: "Changing transparency with light to keep room temperatures constant" },

    { question: "What is not a use for thermo-ceramics?", options: ["Turbine blades", "Metal cutting tools", "F1 car brake discs"], answer: "F1 car brake discs" },
    { question: "What is not a disadvantage of using an LCD screen over traditional screens?", options: ["LCD is more expensive", "LCDs are very fragile", "LCDs have a shorter lifespan"], answer: "LCDs have a shorter lifespan" },
    { question: "Having smartphone screens that repel greasy fingerprints is achieved using which of the following?", options: ["Polymorph", "Nanomaterials", "LCDs"], answer: "Nanomaterials" },
    { question: "Kevlar is a material that has which of these properties?", options: ["Strong and resistant to impact", "Soft and resistant to spills and stains", "Conductive and resistant to fire"], answer: "Strong and resistant to impact" },
    { question: "What material is used to make dental braces?", options: ["Nitinol", "Zinc", "Aluminium"], answer: "Nitinol" },
    { question: "Which of the statements about Graphene are false?", options: ["Graphene is a nonmetal", "Graphene has low resistance to flow of electricity", "Graphene has high resistance to flow of electricity"], answer: "Graphene has high resistance to flow of electricity" },
    { question: "Which of the following statements about nanomaterials is true?", options: ["They have excellent thermal capacity", "Used in construction industry because of their resistance to corrosion", "A single particle has an average size of 1-100nm"], answer: "A single particle has an average size of 1-100nm" },
    { question: "Which of these properties of glulam is false?", options: ["Cheap material", "Easy to form and shape", "Good strength-to-weight ratio"], answer: "Cheap material" },

    { question: "What word describes a material that can be drawn out into long thin wires?", options: ["Malleable", "Ductile", "Brittle"], answer: "Ductile" },
    { question: "What is a unique property of shape memory alloy (SMA)?", options: ["Resistant to spectacle damage", "Flexible", "Lightweight"], answer: "Flexible" },
    { question: "Which property describes the ability of a material to withstand sudden and shock loading without fracturing?", options: ["Toughness", "Hardness", "Malleability"], answer: "Toughness" },
    { question: "A material that resists abrasive wear and indentation has which one of the following properties?", options: ["Elasticity", "Plasticity", "Hardness"], answer: "Hardness" },
    { question: "Shear strength is defined as:", options: ["The ability of a material to return to its original shape once a deforming force is removed", "The ability of a material or joint to withstand being pulled apart", "The ability of a material to withstand being squashed"], answer: "The ability of a material or joint to withstand being pulled apart" },
    { question: "Which one of the following is not a property of mild steel?", options: ["Malleable", "Tough", "Plasticity"], answer: "Plasticity" },
    { question: "A tough material is commonly described as:", options: ["A material that can withstand repeated impacts", "A material that is hard to scratch", "A material that takes a long time to decompose"], answer: "A material that can withstand repeated impacts" },
    { question: "Which of the statements below is the definition of the physical property ‘elasticity’?", options: ["The ability of a material to stand up to forces being applied without it bending, breaking, shattering or deforming", "The ability of a material to absorb force and flex in different directions, returning to its original position", "The ability of a material to stretch without breaking or snapping"], answer: "The ability of a material to absorb force and flex in different directions, returning to its original position" },

    { question: "Which one of the following materials is an alloy?", options: ["Copper", "Zinc", "Brass"], answer: "Brass" },
    { question: "How are particles bonded together in metals?", options: ["Covalent bonds", "Attractive forces between positive and negative ions", "Attractive forces between atoms and delocalised electrons"], answer: "Attractive forces between atoms and delocalised electrons" },
    { question: "What is an alloy?", options: ["A mixture of 2 or more elements, where at least 1 is a metal", "A mixture of 3 or more elements, where at least 1 is a metal", "A compound of 2 or more elements where at least 1 element is a metal"], answer: "A mixture of 2 or more elements, where at least 1 is a metal" },
    { question: "Which of these statements about alloys is correct?", options: ["Most alloys are less useful than the individual elements that they are made from", "Most alloys are harder than the individual elements that they are made from", "Most alloys are softer than the individual elements that they are made from"], answer: "Most alloys are harder than the individual elements that they are made from" },
    { question: "Which of these materials is an alloy?", options: ["Steel", "Iron", "Aluminium"], answer: "Steel" },
    { question: "Carbon steel is made from carbon and which other material?", options: ["Copper", "Iron", "Brass"], answer: "Iron" },
    { question: "Which one of the following is iron alloyed with to make mild steel?", options: ["Zinc", "Carbon", "Aluminium"], answer: "Carbon" },
    { question: "Which one of the following is not an alloy?", options: ["Solder", "Bronze", "Nickel"], answer: "Nickel" },

    { question: "What process would have been used to make the metal frame of the g-clamp?", options: ["Casting", "Injection moulding", "Blow moulding"], answer: "Casting" },
    { question: "Which of the following methods can create large sized products?", options: ["Sand casting", "Die casting", "Resin casting"], answer: "Sand casting" },
    { question: "Which of the following is most suitable for large scale manufacture?", options: ["Investment casting", "Sand casting", "Die casting"], answer: "Die casting" },
    { question: "Which of the following is true about resin casting?", options: ["Expensive", "Toxic fumes can be released", "Slow setting time"], answer: "Toxic fumes can be released" },
    { question: "Which of the following is false about sand casting?", options: ["Inexpensive", "Good surface finish", "Labour intensive"], answer: "Good surface finish" },
    { question: "Which method will have the mould destroyed during casting process?", options: ["Die-casting", "Resin casting", "Investment casting"], answer: "Investment casting" },
    { question: "Which casting method is typically used to make model cars?", options: ["Investment casting", "Die casting", "Sand casting"], answer: "Die casting" },

    { question: "Which one of the following materials needs to have a surface finish applied if it is to be used outside?", options: ["Aluminium", "Copper", "Oak"], answer: "Oak" },
    { question: "When applying a surface finish, what is key?", options: ["A smooth surface to paint on", "A rough surface to paint on", "A clean surface to paint on"], answer: "A clean surface to paint on" },
    { question: "What is an alloy?", options: ["A mixture of 2 or more elements, where at least 1 is a metal", "A mixture of 3 or more elements, where at least 1 is a metal", "A compound of 2 or more elements, where at least 1 element is a metal"], answer: "A mixture of 2 or more elements, where at least 1 is a metal" },
    { question: "Which one of the following finishes is best applied to a mild steel hanging plant basket?", options: ["Stain", "Plastic dip coating", "Varnish"], answer: "Plastic dip coating" },
    { question: "Which of the following finishes is used for woods?", options: ["Shellac", "Chemical lacking", "Anodising"], answer: "Shellac" },
    { question: "Which of the following finishes is used on aluminium?", options: ["Anodising", "Galvanising", "Electroplating"], answer: "Anodising" },
    { question: "Which of the following is the process called etching?", options: ["A process whereby paint is sprayed onto the surface of a material", "A process that creates a long-lasting protective coating on a metal", "Acid is used to remove the unprotected surface of a metal for a decorative finish"], answer: "Acid is used to remove the unprotected surface of a metal for a decorative finish" },
    { question: "Which one of the following processes involves dipping a metal into molten zinc?", options: ["Galvanising", "Cathodic protection", "Electroplating"], answer: "Galvanising" },

    { question: "What is the name of the process used to control the brittleness caused as a result of hardening?", options: ["Annealing", "Case Hardening", "Tempering"], answer: "Tempering" },
    { question: "Which one of the following best describes the process of case hardening?", options: ["Makes the outside surface harder", "Increases the hardness of the metal", "Removes the brittleness of the metal once hardened"], answer: "Makes the outside surface harder" },
    { question: "Complete the statement: 'Hardening and tempering is a process that is carried out on...'", options: ["Thermosetting plastic", "Composite material", "Carbon steel"], answer: "Carbon steel" },
    { question: "Which of the following statements is true?", options: ["A dovetail joint is a knock down joint", "Steel is a common non-ferrous metal", "Annealing a metal makes it easier to shape"], answer: "Annealing a metal makes it easier to shape" },
    { question: "Which one of the following statements about normalising is false?", options: ["Relieves internal stress on metal", "Increase in hardness", "Can’t normalise non-ferrous metals"], answer: "Increase in hardness" },
    { question: "Which method requires rapid cooling of the metal via quenching?", options: ["Annealing", "Tempering", "Normalising"], answer: "Normalising" },
    { question: "Why might you normalise a metal?", options: ["To allow the metal to be easier to machine", "To make the metal less brittle", "To increase hardness of metal on outside"], answer: "To make the metal less brittle" },

    { question: "What type of joint provides a strong interlocking join?", options: ["Housing", "Comb", "Mitre"], answer: "Comb" },
    { question: "What type of adhesive joins wood to wood?", options: ["PVA", "Epoxy resin", "Contact adhesives"], answer: "PVA" },
    { question: "Which method of joining is non-permanent?", options: ["Brazing", "Arc welding", "Nuts and bolts"], answer: "Nuts and bolts" },
    { question: "Which one of the processes below involves the use of heat?", options: ["Soldering", "Pop riveting", "Knock down fittings"], answer: "Soldering" },
    { question: "Which method of join is permanent?", options: ["Nuts and bolts", "Welding", "Knock down fitting"], answer: "Welding" },
    { question: "Which of the following statements is true?", options: ["Brazing needs filler, welding does not", "Welding needs filler, brazing does not", "Soft soldering produces an equally strong joint as hard soldering"], answer: "Brazing needs filler, welding does not" },

    { question: "Which one of the following processes involves the use of heat?", options: ["Lamination", "Vacuum forming", "Turning"], answer: "Vacuum forming" },
    { question: "Which one of the following statements is true about lamination?", options: ["It is cheap to use", "It has a good quality finish", "It comes in small sheets"], answer: "It has a good quality finish" },
    { question: "Which one of the following statements is true about lamination?", options: ["It can be recycled", "It is lighter than solid wood", "It can’t be damaged by water/moisture"], answer: "It is lighter than solid wood" },
    { question: "Which one of the following statements is true about lamination?", options: ["It can be shaped into a curve", "It is a weak material", "Layers are not visible"], answer: "It can be shaped into a curve" },

    { question: "Which one of the following tools is an abrading tool?", options: ["Plane", "File", "Twist drill"], answer: "File" },
    { question: "Which piece of safety equipment should be worn when using a pillar-drilling machine?", options: ["Ear defenders", "Goggles", "Heat protective gloves"], answer: "Goggles" },
    { question: "A screw thread M8 x 1.2 is to be cut in a metal block. What size hole must be drilled before the thread can be cut?", options: ["9.2mm", "8mm", "6.8mm"], answer: "6.8mm" },
    { question: "Which one of the following processes involves the use of heat?", options: ["Vacuum forming", "Laminating", "Turning"], answer: "Vacuum forming" },
    { question: "In which order would you drill a hole with a countersink profile for a screw?", options: ["Drill, screw, countersink", "Countersink, screw, drill", "Drill, countersink, screw"], answer: "Drill, countersink, screw" },

    { question: "Which one of the following would you use to mark out a line on a piece of wood?", options: ["Pencil", "Scriber", "Spirit pen"], answer: "Pencil" },
    { question: "Which one of the following would you use to draw a circle on a sheet of acrylic?", options: ["Pair of compasses", "Dividers", "Odd-leg callipers"], answer: "Pair of compasses" },
    { question: "What would you use to mark an irregular shape on a timber plank?", options: ["Jig and pencil", "Template and pencil", "Former and pencil"], answer: "Template and pencil" },
    { question: "Which one of the following would you use to draw a right-angled line to a sheet of paper?", options: ["Try square", "Set square", "Ruler"], answer: "Set square" },

    { question: "Which one of the following processes would be used to manufacture yoghurt pots?", options: ["Injection moulding", "Vacuum forming", "Blow moulding"], answer: "Vacuum forming" },
    { question: "Which one of the following processes would be used to manufacture continuous lengths of plastic pipe?", options: ["Extrusion", "Injection moulding", "Blow moulding"], answer: "Extrusion" },
    { question: "Which process would have been used to make a plastic water bottle?", options: ["Injection moulding", "Casting", "Blow moulding"], answer: "Blow moulding" },
    { question: "Which one of the following processes is best suited to manufacture a hollow shampoo bottle?", options: ["Vacuum forming", "Blow moulding", "Extrusion"], answer: "Blow moulding" },
    { question: "Which one of the following processes involves the use of heat?", options: ["Wood laminating", "Pop riveting", "Vacuum forming"], answer: "Vacuum forming" },
    { question: "When injection moulding, how is the polymer moved along the heating chamber?", options: ["By a belt", "By the heater", "By an Archimedean screw"], answer: "By an Archimedean screw" },
    { question: "What is a former?", options: ["A rigid shape that is used so other materials take its form", "A hollow cavity where molten material can be formed", "A hollow shape produced on a vacuum former"], answer: "A rigid shape that is used so other materials take its form" },
    { question: "Which of the following is the process called injection moulding?", options: ["Plastic coating of a metal surface, to increase its resistance to temperature", "A process involving heating plastic granules to liquid form and forcing the solution into a mould", "A process that creates a reflective coating on a range of polymers"], answer: "A process involving heating plastic granules to liquid form and forcing the solution into a mould" },

    { question: "Offset lithography is a process used in which scale of production?", options: ["Mass scale", "Continuous", "Batch"], answer: "Batch" },
    { question: "What are the four colours used in offset lithography printing?", options: ["Cyan, red, yellow and black", "Cyan, magenta, yellow and black", "Blue, magenta, yellow and black"], answer: "Cyan, magenta, yellow and black" },
    { question: "When printing commercially, what is a registration mark used for?", options: ["To check alignment of paper during print process", "To show where to cut paper after print", "To indicate that a registered trademark logo has been used"], answer: "To check alignment of paper during print process" },
    { question: "Which of the following is most suitable for batch process?", options: ["Offset lithography", "Flexography", "Screen printing"], answer: "Screen printing" },
    { question: "Which of these is a characteristic of gravure printing?", options: ["Cheap set up cost", "Short print runs", "Quick print times"], answer: "Quick print times" },

    { question: "Which one of the following is used to test tolerance?", options: ["Try square", "Go no-go gauge", "Jig"], answer: "Go no-go gauge" },
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
