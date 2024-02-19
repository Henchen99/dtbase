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
