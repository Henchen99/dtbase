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
window.onscroll = function() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}



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
    { name: 'Hardwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html#Hardwoods' },
    { name: 'Softwoods', url: 'notes_topics/notes_pages/woods_materials_notes.html#Softwoods' },
    { name: 'Manufactured Boards', url: 'notes_topics/notes_pages/woods_materials_notes.html#ManufacturedBoards' },
    { name: 'Oak', url: 'notes_topics/notes_pages/woods_materials_notes.html#Oak' },
    { name: 'Mahogany', url: 'notes_topics/notes_pages/woods_materials_notes.html#Mahogany' },
    { name: 'Beech', url: 'notes_topics/notes_pages/woods_materials_notes.html#Beech' },
    { name: 'Jelutong', url: 'notes_topics/notes_pages/woods_materials_notes.html#Jelutong' },
    { name: 'Balsa', url: 'notes_topics/notes_pages/woods_materials_notes.html#Balsa' },
    { name: 'Pine', url: 'notes_topics/notes_pages/woods_materials_notes.html#Pine' },
    { name: 'Cedar', url: 'notes_topics/notes_pages/woods_materials_notes.html#Cedar' },
    { name: 'Larch', url: 'notes_topics/notes_pages/woods_materials_notes.html#Larch' },
    { name: 'Redwood', url: 'notes_topics/notes_pages/woods_materials_notes.html#Redwood' },
    { name: 'Plywood', url: 'notes_topics/notes_pages/woods_materials_notes.html#Plywood' },
    { name: 'Medium Density Fibreboard', url: 'notes_topics/notes_pages/woods_materials_notes.html#MediumDensityFibreboard' },
    { name: 'MDF', url: 'notes_topics/notes_pages/woods_materials_notes.html#MediumDensityFibreboard' },
    { name: 'Particle board', url: 'notes_topics/notes_pages/woods_materials_notes.html#ParticleBoard' },
    { name: 'Blockboard', url: 'notes_topics/notes_pages/woods_materials_notes.html#Blockboard' },
    // WOODS^^^
    { name: 'Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Ferrous Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html#FerrousMetals' },
    { name: 'Non-ferrous Metals', url: 'notes_topics/notes_pages/metals_materials_notes.html#NonferrousMetals' },
    { name: 'Alloys', url: 'notes_topics/notes_pages/metals_materials_notes.html#Alloys' },
    { name: 'Mild Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html#MildSteel' },
    { name: 'Medium Carbon Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html#MediumCarbonSteel' },
    { name: 'High Carbon Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html#HighCarbonSteel' },
    { name: 'Cast Iron', url: 'notes_topics/notes_pages/metals_materials_notes.html#CastIron' },
    { name: 'Aluminium', url: 'notes_topics/notes_pages/metals_materials_notes.html#Aluminium' },
    { name: 'Copper', url: 'notes_topics/notes_pages/metals_materials_notes.html#Copper' },
    { name: 'Zinc', url: 'notes_topics/notes_pages/metals_materials_notes.html#Zinc' },
    { name: 'Tin', url: 'notes_topics/notes_pages/metals_materials_notes.html#Tin' },
    { name: 'Stainless Steel', url: 'notes_topics/notes_pages/metals_materials_notes.html#StainlessSteel' },
    { name: 'Duralumin', url: 'notes_topics/notes_pages/metals_materials_notes.html#Duralumin' },
    { name: 'Brass', url: 'notes_topics/notes_pages/metals_materials_notes.html#Brass' },
    // Metals^^^
    { name: 'Plastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polymers', url: 'notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Thermoplastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Thermoplastics' },
    { name: 'Thermosetting Plastics', url: 'notes_topics/notes_pages/polymers_materials_notes.html#ThermosettingPlastics' },
    { name: 'Elastomers', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    { name: 'Acrylic', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Acrylic' },
    { name: 'Polyethylene (PE)', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Polyethylene' },
    { name: 'Polyethylene terephthalate (PET)', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Polyethyleneterephthalate' },
    { name: 'Polyvinyl Chlorid (PVC)', url: 'notes_topics/notes_pages/polymers_materials_notes.html#PolyvinylChloride' },
    { name: 'Polypropylene (PP)', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Polypropylene' },
    { name: 'Acrylonitrile Butadiene Styrene (ABS)', url: 'notes_topics/notes_pages/polymers_materials_notes.html#ABS' },
    { name: 'Epoxy resin', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Epoxyresin' },
    { name: 'Urea formaldehyde', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Ureaformaldehyde' },
    { name: 'Polyester resin', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Polyesterresin' },
    { name: 'Rubber', url: 'notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    // Polymers^^^
    { name: 'Composites', url: 'notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Fibre-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html#Fibrebasedcomposites' },
    { name: 'Particle-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html#Particlebasedcomposites' },
    { name: 'Sheet-based composites', url: 'notes_topics/notes_pages/composites_materials_notes.html#Sheetbasedcomposites' },
    { name: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance)', url: 'notes_topics/notes_pages/composites_materials_notes.html#Compositeamixtureoftwomorematerialscombinedtoimprovethepropertiesegcorrosionresistance' },
    { name: 'Carbon fibre', url: 'notes_topics/notes_pages/composites_materials_notes.html#Carbonfibre' },
    { name: 'GRP', url: 'notes_topics/notes_pages/composites_materials_notes.html#GRP' },
    { name: 'Reinforced concrete', url: 'notes_topics/notes_pages/composites_materials_notes.html#Reinforcedconcrete' },
    { name: 'MDF composite', url: 'notes_topics/notes_pages/composites_materials_notes.html#MDFcomposite' },
    { name: 'Hardboard', url: 'notes_topics/notes_pages/composites_materials_notes.html#Hardboard' },
    { name: 'Chipboard', url: 'notes_topics/notes_pages/composites_materials_notes.html#Chipboard' },
    { name: 'Plywood composite', url: 'notes_topics/notes_pages/composites_materials_notes.html#Plywoodcomposite' },
    // Composites^^^
    { name: 'Papers and Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Grams per square metre (GSM)', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Microns', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.htmlMeasuringpapersandboards' },
    { name: 'Drawing papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Drawingpapers' },
    { name: 'Commerical printing papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Commericalprintingpapers' },
    { name: 'Boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Boards' },
    { name: 'How papers/boards are made', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Howpapersboardsaremade' },
    { name: 'Measuring papers and boards', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Layout paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Layoutpaper' },
    { name: 'Tracing paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Tracingpaper' },
    { name: 'Copier paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Copierpaper' },
    { name: 'Bond paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Bondpaper' },
    { name: 'Coated paper', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Coatedpaper' },
    { name: 'Mounting board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Mountingboard' },
    { name: 'Corrugated board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Corrugatedboard' },
    { name: 'Foam board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foamboard' },
    { name: 'Folding box board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foldingboxboard' },
    { name: 'Foil-lined board', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foillinedboard' },
    { name: 'Papers', url: 'notes_topics/notes_pages/papers_and_boards_materials_notes.html#Papers' },
    // Papers and boards^^^
    { name: 'Textiles', url: 'notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Natural fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Naturalfibres' },
    { name: 'Manmade fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Manmadefibres' },
    { name: 'Textile treatments', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Textiletreatments' },
    { name: 'Cotton', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Cotton' },
    { name: 'Linen', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Linen' },
    { name: 'Wool', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Wool' },
    { name: 'Nylon', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Nylon' },
    { name: 'Polypropylene fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Polypropylenefibres' },
    { name: 'Polyester fibres', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Polyesterfibres' },
    { name: 'Flame resistant', url: 'notes_topics/notes_pages/textiles_materials_notes.html#Flameresistant' },
    { name: 'Polytetrafluoroethylene (PTFE)', url: 'notes_topics/notes_pages/textiles_materials_notes.html#PolytetrafluoroethylenePTFE' },
    // Textiles^^^
    { name: 'Smart Materials', url: 'notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Shape memory alloy (SMA)', url: 'notes_topics/notes_pages/smart_materials_notes.html#ShapeMemoryAlloySMA' },
    { name: 'Reactive glass', url: 'notes_topics/notes_pages/smart_materials_notes.html#ReactiveGlass' },
    { name: 'Phosphorescent pigment', url: 'notes_topics/notes_pages/smart_materials_notes.html#PhosphorescentPigment' },
    { name: 'Electroluminescent wire', url: 'notes_topics/notes_pages/smart_materials_notes.html#ElectroluminescentWire' },
    { name: 'Photo-chromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html#PhotochromicMaterials' },
    { name: 'Thermo-chromic materials', url: 'notes_topics/notes_pages/smart_materials_notes.html#ThermochromicMaterials' },
    { name: 'Quantum tunnelling composites (QTCs)', url: 'notes_topics/notes_pages/smart_materials_notes.html#QuantumTunnellingCompositesQTCs' },
    { name: 'Piezoelectric materials', url: 'notes_topics/notes_pages/smart_materials_notes.html#PiezoelectricMaterials' },
    // Smart materials^^^
    { name: 'Modern Materials', url: 'notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Thermo-ceramics', url: 'notes_topics/notes_pages/modern_materials_notes.html#Thermoceramics' },
    { name: 'Liquid crystal displays (LCDs)', url: 'notes_topics/notes_pages/modern_materials_notes.html#LiquidCrystalDisplaysLCDs' },
    { name: 'Glulam', url: 'notes_topics/notes_pages/modern_materials_notes.html#Glulam' },
    { name: 'Kevlar', url: 'notes_topics/notes_pages/modern_materials_notes.html#Kevlar' },
    { name: 'Precious metal clay (PMC)', url: 'notes_topics/notes_pages/modern_materials_notes.html#PreciousMetalClayPMC' },
    { name: 'Nanomaterials', url: 'notes_topics/notes_pages/modern_materials_notes.html#Nanomaterials' },
    { name: 'High density modelling foam', url: 'notes_topics/notes_pages/modern_materials_notes.html#HighDensityModellingFoam' },
    { name: 'Polymorph', url: 'notes_topics/notes_pages/modern_materials_notes.html#Polymorph' },
    // Modern materials^^^
    { name: 'Performance Characteristics Of Materials', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Physical characteristics', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical properties', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Physical properties', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical characteristics', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Electrical conductivity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Electricalconductivity' },
    { name: 'Thermal conductivity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Thermalconductivity' },
    { name: 'Biodegradability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Biodegradability' },
    { name: 'Chemical resistance', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Chemicalresistance' },
    { name: 'Corrosion resistance', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Corrosionresistance' },
    { name: 'Strength', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Strength' },
    { name: 'Elasticity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Elasticity' },
    { name: 'Placticity', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Placticity' },
    { name: 'Malleability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Malleability' },
    { name: 'Ductility', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Ductility' },
    { name: 'Hardness', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Hardness' },
    { name: 'Toughness', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Toughness' },
    { name: 'Durability', url: 'notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Durability' },
    // Section 2^^^
    { name: 'Alloying', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Alloys', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Steel (Alloying)', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Brass (Alloying)', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Bronze (Alloying)', url: 'notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Duralumin (Alloying)', url: 'notes_topics/notes_pages/alloying_notes.html' },
    // Alloying^^^
    { name: 'Sand casting', url: 'notes_topics/notes_pages/casting_notes.html#Sandcasting' },
    { name: 'Casting', url: 'notes_topics/notes_pages/casting_notes.html' },
    { name: 'Investment casting', url: 'notes_topics/notes_pages/casting_notes.html#Investmentcasting' },
    { name: 'Die casting', url: 'notes_topics/notes_pages/casting_notes.html#Diecasting' },
    { name: 'Resin casting', url: 'notes_topics/notes_pages/casting_notes.html#Resincasting' },
    { name: 'Plaster of Paris casting', url: 'notes_topics/notes_pages/casting_notes.html#PlasterofPariscasting' },
    // Casting^^^
    { name: 'Design decisions', url: 'notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Pictorial drawings', url: 'notes_topics/notes_pages/design_decisions_notes.html#Pictorialdrawings' },
    { name: 'Working drawings', url: 'notes_topics/notes_pages/design_decisions_notes.html#Workingdrawings' },
    { name: 'Nets', url: 'notes_topics/notes_pages/design_decisions_notes.html#Nets' },
    { name: 'Translation', url: 'notes_topics/notes_pages/design_decisions_notes.html#Translation' },
    { name: 'Report writing', url: 'notes_topics/notes_pages/design_decisions_notes.html#Reportwriting' },
    // Design decisions^^^
    { name: "Finishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Finishes" },
    { name: "Finishing techniques", url: "notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paper and Board Finishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html#PaperandBoardFinishes" },
    { name: "Paints", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Paints" },
    { name: "Varnishes", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Varnishes" },
    { name: "Sealant", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Sealant" },
    { name: "Preservatives", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Preservatives" },
    { name: "Anodising", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Anodising" },
    { name: "Electro-Plating", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Electro-Plating" },
    { name: "Powder Coating", url: "notes_topics/notes_pages/finishing_techniques_notes.html#PowderCoating" },
    { name: "Oil Coating", url: "notes_topics/notes_pages/finishing_techniques_notes.html#OilCoating" },
    { name: "Galvanisation", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Galvanisation" },
    { name: "Cathodic Protection", url: "notes_topics/notes_pages/finishing_techniques_notes.html#CathodicProtection" },
    { name: "Paper Laminating", url: "notes_topics/notes_pages/finishing_techniques_notes.html#PaperLaminating" },
    { name: "Varnishing", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Varnishing" },
    { name: "Hot Foil Blocking", url: "notes_topics/notes_pages/finishing_techniques_notes.html#HotFoilBlocking" },
    { name: "Embossing", url: "notes_topics/notes_pages/finishing_techniques_notes.html#Embossing" },
    // Finishing techniques^^^
    { name: "Hardening and Tempering", url: "notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Hardening", url: "notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Heat treatments", url: "notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Tempering", url: "notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Case Hardening", url: "notes_topics/notes_pages/heat_treatments_notes.html#CaseHardening" },
    { name: "Annealing", url: "notes_topics/notes_pages/heat_treatments_notes.html#Annealing" },
    { name: "Normalising", url: "notes_topics/notes_pages/heat_treatments_notes.html#Normalising" },
    // Heat treatments^^^
    { name: "Adhesives", url: "notes_topics/notes_pages/joining_techniques_notes.html#Adhesives" },
    { name: "Mechanical joining", url: "notes_topics/notes_pages/joining_techniques_notes.html#Mechanicaljoining" },
    { name: "Heat joining", url: "notes_topics/notes_pages/joining_techniques_notes.html#Heat" },
    { name: "Jointing", url: "notes_topics/notes_pages/joining_techniques_notes.html#Jointing" },
    { name: "Contact adhesive", url: "notes_topics/notes_pages/joining_techniques_notes.html#Contactadhesive" },
    { name: "Tensol cement", url: "notes_topics/notes_pages/joining_techniques_notes.html#Tensolcement" },
    { name: "Expoxy resin adhesive", url: "notes_topics/notes_pages/joining_techniques_notes.html#Expoxyresinadhesive" },
    { name: "Polyvinylacetata (PVA)", url: "notes_topics/notes_pages/joining_techniques_notes.html#Polyvinylacetata(PVA)" },
    { name: "Hot melt glue (glue gun)", url: "notes_topics/notes_pages/joining_techniques_notes.html#Hotmeltglue(gluegun)" },
    { name: "Cyanoacrylate (superglue)", url: "notes_topics/notes_pages/joining_techniques_notes.html#Cyanoacrylate(superglue)" },
    { name: "Polystyrene cement", url: "notes_topics/notes_pages/joining_techniques_notes.html#Polystyrenecement" },
    { name: "Traditional Wood Joints", url: "notes_topics/notes_pages/joining_techniques_notes.html#TraditionalWoodJoints" },
    { name: "Knock-down Fittings", url: "notes_topics/notes_pages/joining_techniques_notes.html#Knock-downFittings" },
    { name: "Wood Screws", url: "notes_topics/notes_pages/joining_techniques_notes.html#WoodScrews" },
    { name: "Coach Bolt", url: "notes_topics/notes_pages/joining_techniques_notes.html#CoachBolt" },
    { name: "Oxy Acetylene Welding", url: "notes_topics/notes_pages/joining_techniques_notes.html#OxyAcetyleneWelding" },
    { name: "MIG Welding", url: "notes_topics/notes_pages/joining_techniques_notes.html#MIGWelding" },
    { name: "Brazing", url: "notes_topics/notes_pages/joining_techniques_notes.html#Brazing" },
    { name: "Hard Soldering", url: "notes_topics/notes_pages/joining_techniques_notes.html#HardSoldering" },
    { name: "Soft Soldering", url: "notes_topics/notes_pages/joining_techniques_notes.html#SoftSoldering" },
    { name: "Joining techniques", url: "notes_topics/notes_pages/joining_techniques_notes.html" },
    // Joining techniques^^^
    { name: "Lamination (Woods)", url: "notes_topics/notes_pages/lamination_notes.html#WoodLamination" },
    // Wood lamination^^^
    { name: "Vertical Milling", url: "notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Milling", url: "notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Horizontal Milling", url: "notes_topics/notes_pages/machining_notes.html#HorizontalMilling" },
    { name: "Routing", url: "notes_topics/notes_pages/machining_notes.html#Routing" },
    { name: "Drilling", url: "notes_topics/notes_pages/machining_notes.html#Drilling" },
    { name: "Machining", url: "notes_topics/notes_pages/machining_notes.html" },
    { name: "Turning", url: "notes_topics/notes_pages/machining_notes.html#Turning" },
    { name: "Stamping", url: "notes_topics/notes_pages/machining_notes.html#Stamping" },
    { name: "Pressing", url: "notes_topics/notes_pages/machining_notes.html#Pressing" },
    // Machining^^^
    { name: "Marking out", url: "notes_topics/notes_pages/marking_out_techniques_notes.html" },
    { name: "Marking out techniques", url: "notes_topics/notes_pages/marking_out_techniques_notes.html" },
    // Marking out^^^
    { name: "Blow Moulding", url: "notes_topics/notes_pages/moulding_notes.html#BlowMoulding" },
    { name: "Polymer Moulding", url: "notes_topics/notes_pages/moulding_notes.html" },
    { name: "Injection Moulding", url: "notes_topics/notes_pages/moulding_notes.html#InjectionMoulding" },
    { name: "Vacuum Forming", url: "notes_topics/notes_pages/moulding_notes.html#VacuumForming" },
    { name: "Extrusion", url: "notes_topics/notes_pages/moulding_notes.html#Extrusion" },
    { name: "Rotational Moulding", url: "notes_topics/notes_pages/moulding_notes.html#RotationalMoulding" },
    // Moulding^^^
    { name: "Offset Lithography", url: "notes_topics/notes_pages/printing_notes.html#OffsetLithography" },
    { name: "Flexography", url: "notes_topics/notes_pages/printing_notes.html#Flexography" },
    { name: "Printing methods", url: "notes_topics/notes_pages/printing_notes.html" },
    { name: "Screen Printing", url: "notes_topics/notes_pages/printing_notes.html#ScreenPrinting" },
    { name: "Gravure Printing", url: "notes_topics/notes_pages/printing_notes.html#GravurePrinting" },
    // Printing^^^
    { name: "Mortise Gauge", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#MortiseGauge" },
    { name: "Odd Leg Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#OddLegCalipers" },
    { name: "Internal Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#InternalCalipers" },
    { name: "External Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#ExternalCalipers" },
    { name: "Try-Square", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#TrySquare" },
    { name: "Engineering Square", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#EngineeringSquare" },
    { name: "Micrometer", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#Micrometer" },
    { name: "Vernier Calipers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#VernierCalipers" },
    { name: "Densitometer", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#Densitometer" },
    { name: "Dividers", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#Dividers" },
    { name: "Jigs", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#Jigs" },
    { name: "Fixtures", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#Fixtures" },
    { name: "Go-No-Go Gauge", url: "notes_topics/notes_pages/specialist_marking_tools_notes.html#GoNoGoGauge" },
    // Marking tools^^^
    { name: "CAD software", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "3D modelling", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Wire frame models", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Surface modelling", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Finite Element Analysis", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "FEA", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "CFD", url: "notes_topics/notes_pages/CAD_notes.html" },
    { name: "Computational fluid dynamics", url: "notes_topics/notes_pages/CAD_notes.html" },
    //CAD^^^
    { name: "CAM software", url: "notes_topics/notes_pages/CAM_notes.html" },
    { name: "CNC Machines", url: "notes_topics/notes_pages/CAM_notes.html#CNCMachines" },
    { name: "Rapid prototyping (3D printing)", url: "notes_topics/notes_pages/CAM_notes.html#Rapidprototyping " },
    //CAM^^^
    { name: "User values", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User needs", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User wants", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Purpose", url: "notes_topics/notes_pages/user_centred_design_notes.html#Purpose" },
    { name: "Functionality", url: "notes_topics/notes_pages/user_centred_design_notes.html#Functionality" },
    { name: "Innovation", url: "notes_topics/notes_pages/user_centred_design_notes.html#Innovation" },
    { name: "Authenticity", url: "notes_topics/notes_pages/user_centred_design_notes.html#Authenticity" },
    { name: "User centred design", url: "notes_topics/notes_pages/user_centred_design_notes.html" },
    //User centred design^^^
    { name: "Sources and applications of anthropometric data", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Sourcesandapplicationsofanthropometricdata" },
    { name: "Ergonomic factors for a designer to consider", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Ergonomics", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Anthropometrics", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometrics" },
    { name: "Qualitative", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Qualitative" },
    { name: "Quantitative", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Quantitative" },
    { name: "Anthropometric data", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "5th percentile", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "95th percentile", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "Percentiles", url: "notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    //Ergo& Anthro^^^
    { name: "Form over function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formoverfunction" },
    { name: "Form follows function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formfollowsfunction" },
    { name: "Form", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Function", url: "notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    //Form and function^^^
    { name: "Arts & Crafts", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtsCrafts" },
    { name: "Art Nouveau", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtNouveau" },
    { name: "Bauhaus Modernist", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#BauhausModernist" },
    { name: "Art Deco", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtDeco" },
    { name: "Post Modernism", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PostModernism" },
    { name: "Streamlining", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Streamlining" },
    { name: "Memphis", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Memphis" },
    { name: "William Morris", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#WilliamMorris" },
    { name: "Charles Rennie Mackintosh", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#CharlesRennieMackintosh" },
    { name: "Marianna Brandt", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#MariannaBrandt" },
    { name: "Eileen Gray", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EileenGray" },
    { name: "Philippe Starck", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PhilippeStarck" },
    { name: "Raymond Lowey", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#RaymondLowey" },
    { name: "Ettore Scotsass", url: "notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EttoreScotsass" },
    // Design theory
    { name: "Consumer society", url: "notes_topics/notes_pages/technological_developments_notes.html#ConsumerSociety" },
    { name: "Built in obsolescence", url: "notes_topics/notes_pages/technological_developments_notes.html#BuiltInObsolescence" },
    { name: "Computers in the development and manufacture of products", url: "notes_topics/notes_pages/technological_developments_notes.html#ComputersDevelopmentManufactureProducts" },
    { name: "CIM systems", url: "notes_topics/notes_pages/technological_developments_notes.html#CIMSystems" },
    { name: "Computer-to-plate technology", url: "notes_topics/notes_pages/technological_developments_notes.html#ComputerToPlateTechnology" },
    { name: "Miniturisation of products and components", url: "notes_topics/notes_pages/technological_developments_notes.html#MiniturisationProductsComponents" },
    { name: "Advanced integrated circuits", url: "notes_topics/notes_pages/technological_developments_notes.html#AdvancedIntegratedCircuits" },
    { name: "Advanced battery technology", url: "notes_topics/notes_pages/technological_developments_notes.html#AdvancedBatteryTechnology" },
    { name: "Advanced liquid crystal displays", url: "notes_topics/notes_pages/technological_developments_notes.html#AdvancedLiquidCrystalDisplays" },
    { name: "Smart materials and products for innovative applications", url: "notes_topics/notes_pages/technological_developments_notes.html#SmartMaterialsProductsInnovativeApplications" },
    { name: "Global marketplace", url: "notes_topics/notes_pages/technological_developments_notes.html#GlobalMarketplace" },
    { name: "Offshore manufacturing", url: "notes_topics/notes_pages/technological_developments_notes.html#OffshoreManufacturing" },
    { name: "Multinational companies", url: "notes_topics/notes_pages/technological_developments_notes.html#MultinationalCompanies" },
    { name: "Outsourcing", url: "notes_topics/notes_pages/technological_developments_notes.html#Outsourcing" },
    { name: "Mass production (Effects of technological developments)", url: "notes_topics/notes_pages/technological_developments_notes.html#MassProductionEffectsTechnologicalDevelopments" },
    // Tech dev
    { name: "Safe working practice", url: "notes_topics/notes_pages/safe_working_notes.html#SafeWorkingPractice" },
    { name: "Understanding the need for risk assessments", url: "notes_topics/notes_pages/safe_working_notes.html#UnderstandingNeedRiskAssessments" },
    { name: "Training", url: "notes_topics/notes_pages/safe_working_notes.html#Training" },
    { name: "Machine maintenance and guarding", url: "notes_topics/notes_pages/safe_working_notes.html#MachineMaintenanceGuarding" },
    { name: "Extraction systems", url: "notes_topics/notes_pages/safe_working_notes.html#ExtractionSystems" },
    { name: "Provision of PPE", url: "notes_topics/notes_pages/safe_working_notes.html#ProvisionPPE" },
    { name: "General safe working practices", url: "notes_topics/notes_pages/safe_working_notes.html#GeneralSafeWorkingPractices" },
    { name: "Health and Safety Executive (HSE)", url: "notes_topics/notes_pages/safe_working_notes.html#HealthSafetyExecutive" },
    { name: "Identification of potential hazards", url: "notes_topics/notes_pages/safe_working_notes.html#IdentificationPotentialHazards" },
    { name: "Identifying the people at risk", url: "notes_topics/notes_pages/safe_working_notes.html#IdentifyingPeopleAtRisk" },
    { name: "Evaluation of risk", url: "notes_topics/notes_pages/safe_working_notes.html#EvaluationRisk" },
    { name: "Risk assessments", url: "notes_topics/notes_pages/safe_working_notes.html#RiskAssessments" },
    { name: "Implement control methods", url: "notes_topics/notes_pages/safe_working_notes.html#ImplementControlMethods" },
    { name: "Recording and storing of risk assessment documentation", url: "notes_topics/notes_pages/safe_working_notes.html#RecordingStoringRiskAssessmentDocumentation" },
    // Safe working
    { name: "One-off production", url: "notes_topics/notes_pages/methods_of_production_notes.html#Oneoff" },
    { name: "Batch production", url: "notes_topics/notes_pages/methods_of_production_notes.html#Batch" },
    { name: "Mass production (Methods of production)", url: "notes_topics/notes_pages/methods_of_production_notes.html#Massp" },
    { name: "Continuous production", url: "notes_topics/notes_pages/methods_of_production_notes.html#Continuousp" },
    { name: "Production methods", url: "notes_topics/notes_pages/methods_of_production_notes.html" },
    // Production methods
    { name: "Quality control", url: "notes_topics/notes_pages/quality_control_systems_notes.html#QualityControl" },
    { name: "Inspection", url: "notes_topics/notes_pages/quality_control_systems_notes.html#Inspection" },
    { name: "Computer-aided inspection", url: "notes_topics/notes_pages/quality_control_systems_notes.html#ComputerAidedInspection" },
    { name: "Testing/checks", url: "notes_topics/notes_pages/quality_control_systems_notes.html#TestingChecks" },
    { name: "Reducing cost of testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html#ReducingCostTesting" },
    { name: "Non-destructive testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html#NonDestructiveTesting" },
    { name: "Destructive testing", url: "notes_topics/notes_pages/quality_control_systems_notes.html#DestructiveTesting" },
    { name: "Quality assurance", url: "notes_topics/notes_pages/quality_control_systems_notes.html#QualityAssurance" },
    { name: "Total quality management (TQM)", url: "notes_topics/notes_pages/quality_control_systems_notes.html#TotalQualityManagementTQM" },
    { name: "ISO 9000", url: "notes_topics/notes_pages/quality_control_systems_notes.html#ISOnine" },
    // QA & QC
    { name: "Production scheduling and production logistics", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductionSchedulingProductionLogistics" },
    { name: "Robotics in production", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RoboticsInProduction" },
    { name: "Material handling systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Modular/cell production systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ModularCellProductionSystems" },
    { name: "IT systems in production scheduling/logistics", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ITSystemsProductionSchedulingLogistics" },
    { name: "Computer systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ComputerSystems" },
    { name: "Artificial intelligence", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ArtificialIntelligence" },
    { name: "Robots on fully-automated production and assembly lines/cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RobotsFullyAutomatedProductionAssemblyLinesCells" },
    { name: "Material handling machines", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Automated guided vehicles (AGVs)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedGuidedVehiclesAGVs" },
    { name: "Automated storage and retrieval systems (ASRS)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedStorageRetrievalSystemsASRS" },
    { name: "Flexible manufacturing systems (FMS)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FlexibleManufacturingSystemsFMS" },
    { name: "Functional cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FunctionalCells" },
    { name: "Group technology cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#GroupTechnologyCells" },
    { name: "Product focused cells", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductFocusedCells" },
    { name: "Lean manufacturing using just-in-time (JIT) systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#LeanManufacturingJITSystems" },
    { name: "Just-in-time (JIT)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#JustInTimeJIT" },
    { name: "Standardised parts", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Bought-in parts", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Quick response manufacturing (QRM)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#QuickResponseManufacturingQRM" },
    { name: "Product data management (PDM)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductDataManagementPDM" },
    { name: "Enterprise resource planning (ERP) systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#EnterpriseResourcePlanningERPSystems" },
    { name: "Concurrent manufacturing", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ConcurrentManufacturing" },
    { name: "Modern manufacturing methods and systems", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    //Modern manufacturing methods and systems
    { name: "Material selection", url: "notes_topics/notes_pages/product_life_cycle_notes.html#MaterialSelection" },
    { name: "Manufacture", url: "notes_topics/notes_pages/product_life_cycle_notes.html#Manufacture" },
    { name: "Distribution", url: "notes_topics/notes_pages/product_life_cycle_notes.html#Distribution" },
    { name: "Use", url: "notes_topics/notes_pages/product_life_cycle_notes.html#Use" },
    { name: "Repair and maintenance", url: "notes_topics/notes_pages/product_life_cycle_notes.html#RepairMaintenance" },
    { name: "End of life", url: "notes_topics/notes_pages/product_life_cycle_notes.html#EndOfLife" },
    { name: "Product Life Cycle (Environmental)", url: "notes_topics/notes_pages/product_life_cycle_notes.html" },
    //Product Life Cycle
    { name: "Cost implications to the consumer and manufacturer (Cleaner technology)", url: "notes_topics/notes_pages/wider_issues_tech_notes.html" },
    { name: "Sustainability", url: "notes_topics/notes_pages/wider_issues_tech_notes.html#Sustainability" },
    { name: "Wider issues of using cleaner technologies", url: "notes_topics/notes_pages/wider_issues_tech_notes.html#CostImplicationsofSust" },
    //Wider issues of using cleaner tech
    { name: "Consumer Rights Act (2015)", url: "notes_topics/notes_pages/consumer_rights_notes.html#consumerrightsact" },
    { name: "Sale of Goods Act (1979)", url: "notes_topics/notes_pages/consumer_rights_notes.html#Saleofgoodsact" },
    { name: "Consumer Rights Legislation", url: "notes_topics/notes_pages/consumer_rights_notes.html" },
    //Consumer rights^^^
    { name: "Health and Safety at Work Act (1974)", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html#Act1974" },
    { name: "Health and Safety", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    { name: "Health and Safety Regulation", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html#HSEregs" },
    { name: "Control of Substances Hazardous to Health (COSHH) Regulation", url: "notes_topics/notes_pages/health_and_safety_laws_notes.html#COSHH" },
    //Health and safety
    { name: "Marketing Analysis", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#MarketingAnalysis" },
    { name: "SWOT Analysis", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SWOTAnalysis" },
    { name: "Research Techniques", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ResearchTechniques" },
    { name: "Primary Data", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PrimaryData" },
    { name: "Secondary Data", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SecondaryData" },
    { name: "Focus Group", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FocusGroup" },
    { name: "Investigative Methods", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InvestigativeMethods" },
    { name: "Innovation Management", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InnovationManagement" },
    { name: "Imitation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Imitation" },
    { name: "Invention", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Invention" },
    { name: "Push Innovation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PushInnovation" },
    { name: "Pull Innovation", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PullInnovation" },
    { name: "Cooperation Between Sectors", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#CooperationBetweenSectors" },
    { name: "Encouragement of Creativity", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#EncouragementOfCreativity" },
    { name: "Concurrent Manufacturing and QRM", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ConcurrentManufacturingAndQRM" },
    { name: "Feasibility and Practicality", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FeasibilityAndPracticality" },
    { name: "Computer Modelling in Production Planning", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ComputerModellingInProductionPlanning" },
    { name: "Collection, collation and analysis to make decisions", url: "notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    //Market analysis
    { name: "Budgets", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#Budgets" },
    { name: "Planning for Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Allocation of Employees, Materials, Scale of Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Material Costs", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Labour/Wages", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Premises", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Equipment Available for Scale of Production", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Selection of Tools, Machines, and Manufacturing Processes", url: "notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#SelectionOfToolsMachinesAndManufacturingProcesses" },
    //Modelling the cost of projects^^
    { name: "Patents", url: "notes_topics/notes_pages/property_rights_notes.html#Patents" },
    { name: "Copyrights", url: "notes_topics/notes_pages/property_rights_notes.html#Copyright" },
    { name: "Design Rights", url: "notes_topics/notes_pages/property_rights_notes.html#Designrights" },
    { name: "Trademarks", url: "notes_topics/notes_pages/property_rights_notes.html#Trademarks" },
    //Property rights
    { name: "British Standards (BSI and Kitemark)", url: "notes_topics/notes_pages/standard_for_products_notes.html#BSI" },
    { name: "European Standards (CEN and CE)", url: "notes_topics/notes_pages/standard_for_products_notes.html#CE" },
    { name: "International Standards (ISO)", url: "notes_topics/notes_pages/standard_for_products_notes.html#ISO" },
    //Standards for products^^^
    { name: "Critical Path Analysis (CPA)", url: "notes_topics/notes_pages/project_management_notes.html#CPA" },
    { name: "Scrum", url: "notes_topics/notes_pages/project_management_notes.html#Scrum" },
    { name: "Six Sigma", url: "notes_topics/notes_pages/project_management_notes.html#SixSigma" },
    //Project management systems^^^
    { name: "Product Life Cycle (Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Introduction (Product life cycle - Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Introduction" },
    { name: "Growth (Product life cycle - Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Growth" },
    { name: "Maturity (Product life cycle - Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Maturity" },
    { name: "Decline (Product life cycle - Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Decline" },
    { name: "Extensions (Product life cycle - Sales)", url: "notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Extensions" },
    //Product life cycle
    { name: "User centred design", url: "notes_topics/notes_pages/sta_to_explore_notes.html#UserCentredDesign" },
    { name: "Circular economy", url: "notes_topics/notes_pages/sta_to_explore_notes.html#CircularEconomy" },
    { name: "Systems thinking", url: "notes_topics/notes_pages/sta_to_explore_notes.html#SystemsThinking" },
    //Strat, techniques
    { name: "Number, percentages, and percentiles (Maths)", url: "notes_topics/notes_pages/maths_arithmetic.html#Number" },

    { name: "Ratio (Maths)", url: "notes_topics/notes_pages/maths_ratios.html#Ratio" },

    { name: "Surface area and Volume (Maths)", url: "notes_topics/notes_pages/maths_surface_area_and_volume.html#SAandV" },

    { name: "Trigonometry (Maths)", url: "notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },
    { name: "Pythagoras (Maths)", url: "notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },

    { name: "Graphs and Charts (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },
    { name: "Cumulative frequency (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },

    { name: "Coordinates and Geometry (Maths)", url: "notes_topics/notes_pages/maths_graphs_and_charts.html#CoordsAndGeometry" },

    { name: "Statistics (Maths)", url: "notes_topics/notes_pages/maths_statistics.html#Stats" },
    { name: "Probability (Maths)", url: "notes_topics/notes_pages/maths_statistics.html#Stats" },

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

        // Scroll down by half a screen length after a brief delay (50 milliseconds)
        setTimeout(() => {
            window.scrollBy(0, window.innerHeight / 2);
        }, 50);
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
