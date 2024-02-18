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
    { name: 'Timbers', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Hardwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
    { name: 'Softwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html' },
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
    { name: 'Polymers', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
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
    { name: 'Papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
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
    { name: 'Piezoelectric materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
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
    { name: 'Performance Characteristics Of Materials', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Physical characteristics', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Mechanical properties', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Physical properties', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Mechanical characteristics', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Electrical conductivity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Thermal conductivity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Biodegradability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Chemical resistance', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Corrosion resistance', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Strength', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Elasticity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Placticity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Malleability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Ductility', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Hardness', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Toughness', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Durability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    // Section 2^^^
    { name: 'Alloying', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Alloys', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Steel', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Brass', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Bronze', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Duralumin', url: 'notes_topics/notes_pages/alloying_notes.html' },
    // Alloying^^^
    { name: 'Sand casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Investment casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Die casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Resin casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Plaster of Paris casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    // Casting^^^
    { name: 'Design decisions', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Pictorial drawings', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Working drawings', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Nets', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Translation', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Report writing', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    // Casting^^^
    { name: "Finishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Finishing techniques", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paper and Board Finishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paints", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Varnishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Sealant", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Preservatives", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Anodising", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Electro-Plating", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Powder Coating", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Oil Coating", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Galvanisation", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Cathodic Protection", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paper Laminating", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Varnishing", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Hot Foil Blocking", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Embossing", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    // Finishing techniques^^^
    { name: "Hardening and Tempering", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Hardening", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Heat treatments", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Tempering", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Case Hardening", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Annealing", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Normalising", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    // Heat treatments^^^
    { name: "Adhesives", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Mechanical joining", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Heat", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Jointing", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Traditional Wood Joints", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Knock-down Fittings", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Wood Screws", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Coach Bolt", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Oxy Acetylene Welding", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "MIG Welding", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Brazing", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Hard Soldering", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Soft Soldering", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    { name: "Joining techniques", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    // Joining techniques^^^
    { name: "Lamination", url: "notes_topics/notes_pages/lamination_notes.html" },
    { name: "Wood Lamination", url: "notes_topics/notes_pages/lamination_notes.html" },
    // Wood lamination^^^
    { name: "Vertical Milling", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Milling", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Horizontal Milling", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Routing", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Drilling", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Turning", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Stamping", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Pressing", url: "notes_topics/notes_pages/machining_notes.html" },
    // Machining^^^
    { name: "Marking out", url: "notes_topics/notes_pages/marking_out_techniques_notes.html" },
    { name: "Marking out techniques", url: "notes_topics/notes_pages/marking_out_techniques_notes.html" },
    // Marking out^^^
    { name: "Blow Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Polymer Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Injection Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Vacuum Forming", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Extrusion", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Rotational Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    // Moulding^^^
    { name: "Offset Lithography", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Printing", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Flexography", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Printing methods", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Screen Printing", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Gravure Printing", url: "notes_topics/notes_pages/printing_notes.html" },
    // Printing^^^
    { name: "Mortise Gauge", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Odd Leg Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Internal Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "External Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Try-Square", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Engineering Square", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Micrometer", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Vernier Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Densitometer", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Dividers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Jigs", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Fixtures", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    { name: "Go-No-Go Gauge", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html" },
    // Marking tools^^^
    { name: "CAD software", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "CAD", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "3D modelling", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Wire frame models", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Surface modelling", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Finite Element Analysis", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "FEA", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "CFD", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Computational fluid dynamics", url: "notes_topics/notes_pages/CAD_notes.html" },
    //CAD^^^
    { name: "CAM software", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "CAM", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "CNC", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "CAM machines", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "CNC machines", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "Rapid prototyping (3D printing)", url: "notes_topics/notes_pages/CAM_notes.html" },
    //CAM^^^
    { name: "User values", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User needs", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User wants", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Purpose", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Functionality", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Innovation", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Authenticity", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User centred design", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    //User centred design^^^
    { name: "Sources and applications of anthropometric data", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Ergonomic factors for a designer to consider", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Ergonomics", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Anthropometrics", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Qualitative", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Quantitative", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Anthropometric data", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "5th percentile", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "95th percentile", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    { name: "Percentiles", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html" },
    //Ergo& Anthro^^^
    { name: "Form over function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Form follows function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Form", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    //Form and function^^^
    { name: "Arts & Crafts", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Art Nouveau", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Bauhaus Modernist", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Art Deco", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Post Modernism", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Streamlining", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Memphis", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "William Morris", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Charles Rennie Mackintosh", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Marianna Brandt", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Eileen Gray", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Philippe Starck", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Raymond Lowey", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    { name: "Ettore Scotsass", url: "notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html" },
    //Design theory^^^
    { name: "Consumer society", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Built in obsolescence", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Computers in the development and manufacture of products", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "CIM systems", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Computer-to-plate technology", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Miniturisation of products and components", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Advanced integrated circuits", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Advanced battery technology", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Advanced liquid crystal displays", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Smart materials and products for innovative applications", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Global marketplace", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Offshore manufacturing", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Multinational companies", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Outsourcing", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    { name: "Mass production (effects of technological developments)", url: "notes_topics/notes_pages/technological_developments_notes.html" },
    //Tech dev^^^
    { name: "Safe working practice", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Understanding the need for risk assessments", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Training", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Machine maintenance and guarding", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Extraction systems", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Provision of PPE", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "General safe working practices", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Health and Safety Executive", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "HSE", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Identification of potential hazards", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Identifying the people at risk", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Evaluation of risk", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Risk assessments", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Implement control methods", url: "notes_topics/notes_pages/safe_working_notes.html" },
    { name: "Recording and storing of risk assessment documentation", url: "notes_topics/notes_pages/safe_working_notes.html" },
    //Safe working^^^
    { name: "One-off production", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    { name: "Batch production", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    { name: "Mass production (Methods of production)", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    { name: "Continuous production", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    { name: "Production methods", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    //Production methods
    { name: "Quality control", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Inspection", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Computer-aided inspection", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Testing/checks", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Reducing cost of testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Non-destructive testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Destructive testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Quality assurance", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "Total quality management (TQM)", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    { name: "ISO 9000", url: "notes_topics/notes_pages/quality_control_systems_notes.html" },
    //QA & QC^^^
    { name: "Production scheduling and production logistics", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Robotics in production", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Material handling systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Modular/cell production systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "IT systems in production scheduling/logistics", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Computer systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Artificial intelligence", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Robots on fully-automated production and assembly lines/cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Material handling machines", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Automated guided vehicles (AGVs)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Automated storage and retrieval systems (ASRS)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Flexible manufacturing systems (FMS)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Functional cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Group technology cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Product focused cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Lean manufacturing using just-in-time (JIT) systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Just-in-time (JIT)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Standardised parts", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Quick response manufacturing (QRM)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Product data management (PDM)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Enterprise resource planning (ERP) systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Concurrent manufacturing", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    { name: "Modern manufacturing methods and systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    //Modern manufacturing methods and systems
    { name: "Material selection", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "Manufacture", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "Distribution", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "Use", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "Repair and maintenance", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "End of life", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    { name: "Product Life Cycle", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    //Product Life Cycle
    { name: "Cost implications to the consumer and manufacturer", url: "notes_topics/notes_pages/wider_issues_tech_notes.html" },
    { name: "Sustainability", url: "notes_topics/notes_pages/wider_issues_tech_notes.html" },
    { name: "Wider issues of using cleaner technologies", url: "notes_topics/notes_pages/wider_issues_tech_notes.html" },
    //Wider issues of using cleaner tech
    { name: "Consumer Rights Act (2015)", url: "notes_topics/notes_pages/consumer_rights_notes.html" },
    { name: "Sale of Goods Act (1979)", url: "notes_topics/notes_pages/consumer_rights_notes.html" },
    { name: "Consumer Rights Legislation", url: "notes_topics/notes_pages/consumer_rights_notes.html" },
    //Consumer rights^^^
    { name: "Health and Safety at Work Act (1974)", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    { name: "Health and Safety", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    { name: "Control of Substances Hazardous to Health (COSHH) Regulation", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    //Health and safety
    { name: "Marketing Analysis", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "SWOT Analysis", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Research Techniques", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Primary Data", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Secondary Data", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Focus Group", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Investigative Methods", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Innovation Management", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Imitation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Invention", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Push Innovation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Pull Innovation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Cooperation Between Sectors", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Encouragement of Creativity", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Concurrent Manufacturing and QRM", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Feasibility and Practicality", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    { name: "Computer Modelling in Production Planning", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    //Market analysis
    { name: "Budgets", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Planning for Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Allocation of Employees, Materials, Scale of Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Material Costs", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Labour/Wages", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Premises", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Equipment Available for Scale of Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    { name: "Selection of Tools, Machines, and Manufacturing Processes", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html" },
    //Modelling the cost of projects^^
    { name: "Patents", url: "notes_topics/notes_pages/property_rights_notes.html" },
    { name: "Copyrights", url: "notes_topics/notes_pages/property_rights_notes.html" },
    { name: "Design Rights", url: "notes_topics/notes_pages/property_rights_notes.html" },
    { name: "Trademarks", url: "notes_topics/notes_pages/property_rights_notes.html" },
    //Property rights
    { name: "British Standards (BSI and Kitemark)", url: "notes_topics/notes_pages/standard_for_products_notes.html" },
    { name: "European Standards (CEN and CE)", url: "notes_topics/notes_pages/standard_for_products_notes.html" },
    { name: "International Standards (ISO)", url: "notes_topics/notes_pages/standard_for_products_notes.html" },
    //Standards for products^^^
    { name: "Critical Path Analysis (CPA)", url: "notes_topics/notes_pages/project_management_notes.html" },
    { name: "Scrum", url: "notes_topics/notes_pages/project_management_notes.html" },
    { name: "Six Sigma", url: "notes_topics/notes_pages/project_management_notes.html" },
    //Project management systems^^^
    { name: "Product life cycle", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Introduction (Product life cycle)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Growth (Product life cycle)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Maturity (Product life cycle)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Decline (Product life cycle)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Extensions (Product life cycle)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    //Product life cycle
    { name: "User centred design", url: "notes_topics/notes_pages/sta_to_explore_notes.html" },
    { name: "Circular economy", url: "notes_topics/notes_pages/sta_to_explore_notes.html" },
    { name: "Systems thinking", url: "notes_topics/notes_pages/sta_to_explore_notes.html" },
    //Strat, techniques
    { name: "Number, percentages, and percentiles (Maths)", url: "notes_topics/MathematicsForD&T.html" },
    { name: "Number (Maths)", url: "notes_topics/MathematicsForD&T.html" },
    { name: "Percentages (Maths)", url: "notes_topics/MathematicsForD&T.html" },
    { name: "Percentiles (Maths)", url: "notes_topics/MathematicsForD&T.html" },

    { name: "Ratio (Maths)", url: "notes_topics/notes_pages/maths_ratios.html" },

    { name: "Surface area (Maths)", url: "notes_topics/notes_pages/maths_surface_area_and_volume.html" },
    { name: "Volume (Maths)", url: "notes_topics/notes_pages/maths_surface_area_and_volume.html" },
    { name: "Surface area and Volume (Maths)", url: "notes_topics/notes_pages/maths_surface_area_and_volume.html" },

    { name: "Trigonometry (Maths)", url: "notes_topics/notes_pages/maths_trigonometry.html" },
    { name: "Pythagoras (Maths)", url: "notes_topics/notes_pages/maths_trigonometry.html" },

    { name: "Graphs and Charts (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },
    { name: "Charts (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },
    { name: "Graphs (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },
    { name: "Cumulative frequency (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },

    { name: "Coordinates and Geometry (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },
    { name: "Geometry (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },
    { name: "Coordinates (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html" },

    { name: "Statistics (Maths)", url: "notes_topics/notes_pages/maths_statistics.html" },
    { name: "Probability (Maths)", url: "notes_topics/notes_pages/maths_statistics.html" },



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

    // Check if the search input matches any of the topics
    const matchedTopics = topics.filter(topic =>
        topic.name.toLowerCase().includes(searchInput)
    );

    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous search results

    if (matchedTopics.length > 0) {
        // Display the first 10 matched topics for selection
        for (let i = 0; i < Math.min(matchedTopics.length, 10); i++) {
            const resultItem = document.createElement('li');
            resultItem.textContent = matchedTopics[i].name;
            resultItem.classList.add('search-result-item');
            resultItem.dataset.url = matchedTopics[i].url; // Store URL as data attribute
            resultsContainer.appendChild(resultItem);
        }
    } else {
        // Handle case where no match is found
        resultsContainer.innerHTML = '<li>No matching topic found.</li>';
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
