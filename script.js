
// Define your topics and their corresponding URLs
const topics = [
    { name: "Woods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html" },
    { name: "Timbers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html" },
    { name: "Hardwoods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Hardwoods" },
    { name: "Softwoods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Softwoods" },
    { name: "Manufactured Boards (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#ManufacturedBoards" },
    { name: "Oak (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Oak" },
    { name: "Mahogany (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Mahogany" },
    { name: "Beech (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Beech" },
    { name: "Jelutong (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Jelutong" },
    { name: "Balsa (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Balsa" },
    { name: "Pine (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Pine" },
    { name: "Cedar (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Cedar" },
    { name: "Larch (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Larch" },
    { name: "Redwood (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Redwood" },
    { name: "Plywood (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Plywood" },
    { name: "Medium Density Fibreboard (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#MediumDensityFibreboard" },
    { name: "MDF (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#MediumDensityFibreboard" },
    { name: "Particle board (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#ParticleBoard" },
    { name: "Blockboard (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/woods_materials_notes.html#Blockboard" },
    // WOODS^^^
    { name: 'Metals', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Ferrous Metals', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#FerrousMetals' },
    { name: 'Non-ferrous Metals', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#NonferrousMetals' },
    { name: 'Alloys', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Alloys' },
    { name: 'Mild Steel', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#MildSteel' },
    { name: 'Medium Carbon Steel', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#MediumCarbonSteel' },
    { name: 'High Carbon Steel', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#HighCarbonSteel' },
    { name: 'Cast Iron', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#CastIron' },
    { name: 'Aluminium', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Aluminium' },
    { name: 'Copper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Copper' },
    { name: 'Zinc', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Zinc' },
    { name: 'Tin', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Tin' },
    { name: 'Stainless Steel', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#StainlessSteel' },
    { name: 'Duralumin', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Duralumin' },
    { name: 'Brass', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Brass' },
    // Metals^^^
    { name: 'Plastics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polymers', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Thermoplastics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Thermoplastics' },
    { name: 'Thermosetting Plastics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#ThermosettingPlastics' },
    { name: 'Elastomers', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    { name: 'Acrylic', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Acrylic' },
    { name: 'Polyethylene (PE)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyethylene' },
    { name: 'Polyethylene terephthalate (PET)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyethyleneterephthalate' },
    { name: 'Polyvinyl Chloride (PVC)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#PolyvinylChloride' },
    { name: 'Polypropylene (PP)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polypropylene' },
    { name: 'Acrylonitrile Butadiene Styrene (ABS)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#ABS' },
    { name: 'Epoxy resin', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Epoxyresin' },
    { name: 'Urea formaldehyde', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Ureaformaldehyde' },
    { name: 'Polyester resin', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyesterresin' },
    { name: 'Rubber', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    // Polymers^^^
    { name: 'Composites', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Fibre-based composites', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Fibrebasedcomposites' },
    { name: 'Particle-based composites', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Particlebasedcomposites' },
    { name: 'Sheet-based composites', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Sheetbasedcomposites' },
    { name: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Compositeamixtureoftwomorematerialscombinedtoimprovethepropertiesegcorrosionresistance' },
    { name: 'Carbon fibre', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Carbonfibre' },
    { name: 'GRP', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#GRP' },
    { name: 'Reinforced concrete', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Reinforcedconcrete' },
    { name: 'MDF composite', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#MDFcomposite' },
    { name: 'Hardboard', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Hardboard' },
    { name: 'Chipboard', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Chipboard' },
    { name: 'Plywood composite', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Plywoodcomposite' },
    // Composites^^^
    { name: 'Papers and Boards', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Grams per square metre (GSM)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Microns', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.htmlMeasuringpapersandboards' },
    { name: 'Drawing papers', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Drawingpapers' },
    { name: 'Commerical printing papers', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Commericalprintingpapers' },
    { name: 'Boards', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Boards' },
    { name: 'How papers/boards are made', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Howpapersboardsaremade' },
    { name: 'Measuring papers and boards', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Layout paper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Layoutpaper' },
    { name: 'Tracing paper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Tracingpaper' },
    { name: 'Copier paper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Copierpaper' },
    { name: 'Bond paper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Bondpaper' },
    { name: 'Coated paper', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Coatedpaper' },
    { name: 'Mounting board', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Mountingboard' },
    { name: 'Corrugated board', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Corrugatedboard' },
    { name: 'Foam board', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foamboard' },
    { name: 'Folding box board', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foldingboxboard' },
    { name: 'Foil-lined board', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foillinedboard' },
    { name: 'Papers', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Papers' },
    // Papers and boards^^^
    { name: 'Textiles', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Natural fibres', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Naturalfibres' },
    { name: 'Manmade fibres', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Manmadefibres' },
    { name: 'Textile treatments', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Textiletreatments' },
    { name: 'Cotton', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Cotton' },
    { name: 'Linen', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Linen' },
    { name: 'Wool', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Wool' },
    { name: 'Nylon', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Nylon' },
    { name: 'Polypropylene fibres', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Polypropylenefibres' },
    { name: 'Polyester fibres', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Polyesterfibres' },
    { name: 'Flame resistant', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Flameresistant' },
    { name: 'Polytetrafluoroethylene (PTFE)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#PolytetrafluoroethylenePTFE' },
    // Textiles^^^
    { name: 'Smart Materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Shape memory alloy (SMA)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ShapeMemoryAlloySMA' },
    { name: 'Reactive glass', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ReactiveGlass' },
    { name: 'Phosphorescent pigment', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PhosphorescentPigment' },
    { name: 'Electroluminescent wire', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ElectroluminescentWire' },
    { name: 'Photo-chromic materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PhotochromicMaterials' },
    { name: 'Thermo-chromic materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ThermochromicMaterials' },
    { name: 'Quantum tunnelling composites (QTCs)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#QuantumTunnellingCompositesQTCs' },
    { name: 'Piezoelectric materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PiezoelectricMaterials' },
    // Smart materials^^^
    { name: 'Modern Materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Thermo-ceramics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Thermoceramics' },
    { name: 'Liquid crystal displays (LCDs)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#LiquidCrystalDisplaysLCDs' },
    { name: 'Glulam', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Glulam' },
    { name: 'Kevlar', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Kevlar' },
    { name: 'Precious metal clay (PMC)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#PreciousMetalClayPMC' },
    { name: 'Nanomaterials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Nanomaterials' },
    { name: 'High density modelling foam', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#HighDensityModellingFoam' },
    { name: 'Polymorph', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Polymorph' },
    // Modern materials^^^
    { name: 'Performance Characteristics Of Materials', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Physical characteristics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical properties', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Physical properties', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical characteristics', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Electrical conductivity', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Electricalconductivity' },
    { name: 'Thermal conductivity', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Thermalconductivity' },
    { name: 'Biodegradability', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Biodegradability' },
    { name: 'Chemical resistance', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Chemicalresistance' },
    { name: 'Corrosion resistance', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Corrosionresistance' },
    { name: 'Strength', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Strength' },
    { name: 'Elasticity', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Elasticity' },
    { name: 'Placticity', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Placticity' },
    { name: 'Malleability', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Malleability' },
    { name: 'Ductility', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Ductility' },
    { name: 'Hardness', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Hardness' },
    { name: 'Toughness', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Toughness' },
    { name: 'Durability', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Durability' },
    // Section 2^^^
    { name: 'Alloying', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Alloys', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Steel (Alloying)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Brass (Alloying)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Bronze (Alloying)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Duralumin (Alloying)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    // Alloying^^^
    { name: 'Sand casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Sandcasting' },
    { name: 'Casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html' },
    { name: 'Investment casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Investmentcasting' },
    { name: 'Die casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Diecasting' },
    { name: 'Resin casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Resincasting' },
    { name: 'Plaster of Paris casting', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#PlasterofPariscasting' },
    // Casting^^^
    { name: 'Design decisions', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Pictorial drawings', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Pictorialdrawings' },
    { name: 'Working drawings', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Workingdrawings' },
    { name: 'Nets', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Nets' },
    { name: 'Translation', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Translation' },
    { name: 'Report writing', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Reportwriting' },
    // Design decisions^^^
    { name: "Finishes", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Finishes" },
    { name: "Finishing techniques", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paper and Board Finishes", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PaperandBoardFinishes" },
    { name: "Paints", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Paints" },
    { name: "Varnishes", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Varnishes" },
    { name: "Sealant", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Sealant" },
    { name: "Preservatives", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Preservatives" },
    { name: "Anodising", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Anodising" },
    { name: "Electro-Plating", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Electro-Plating" },
    { name: "Powder Coating", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PowderCoating" },
    { name: "Oil Coating", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#OilCoating" },
    { name: "Galvanisation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Galvanisation" },
    { name: "Cathodic Protection", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#CathodicProtection" },
    { name: "Paper Laminating", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PaperLaminating" },
    { name: "Varnishing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Varnishing" },
    { name: "Hot Foil Blocking", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#HotFoilBlocking" },
    { name: "Embossing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Embossing" },
    // Finishing techniques^^^
    { name: "Hardening and Tempering", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Hardening", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Heat treatments", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Tempering", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Case Hardening", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#CaseHardening" },
    { name: "Annealing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#Annealing" },
    { name: "Normalising", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#Normalising" },
    // Heat treatments^^^
    { name: "Adhesives", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Adhesives" },
    { name: "Mechanical joining", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Mechanicaljoining" },
    { name: "Heat joining", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Heat" },
    { name: "Jointing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Jointing" },
    { name: "Contact adhesive", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Contactadhesive" },
    { name: "Tensol cement", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Tensolcement" },
    { name: "Expoxy resin adhesive", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Expoxyresinadhesive" },
    { name: "Polyvinylacetata (PVA)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Polyvinylacetata(PVA)" },
    { name: "Hot melt glue (glue gun)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Hotmeltglue(gluegun)" },
    { name: "Cyanoacrylate (superglue)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Cyanoacrylate(superglue)" },
    { name: "Polystyrene cement", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Polystyrenecement" },
    { name: "Traditional Wood Joints", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#TraditionalWoodJoints" },
    { name: "Knock-down Fittings", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Knock-downFittings" },
    { name: "Wood Screws", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#WoodScrews" },
    { name: "Coach Bolt", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#CoachBolt" },
    { name: "Oxy Acetylene Welding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#OxyAcetyleneWelding" },
    { name: "MIG Welding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#MIGWelding" },
    { name: "Brazing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Brazing" },
    { name: "Hard Soldering", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#HardSoldering" },
    { name: "Soft Soldering", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#SoftSoldering" },
    { name: "Joining techniques", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html" },
    // Joining techniques^^^
    { name: "Lamination (Woods)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/lamination_notes.html#WoodLamination" },
    // Wood lamination^^^
    { name: "Vertical Milling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Milling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Horizontal Milling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#HorizontalMilling" },
    { name: "Routing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Routing" },
    { name: "Drilling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Drilling" },
    { name: "Machining", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html" },
    { name: "Turning", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Turning" },
    { name: "Stamping", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Stamping" },
    { name: "Pressing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Pressing" },
    // Machining^^^
    { name: "Marking out", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/marking_out_techniques_notes.html" },
    { name: "Marking out techniques", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/marking_out_techniques_notes.html" },
    // Marking out^^^
    { name: "Blow Moulding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#BlowMoulding" },
    { name: "Polymer Moulding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html" },
    { name: "Injection Moulding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#InjectionMoulding" },
    { name: "Vacuum Forming", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#VacuumForming" },
    { name: "Extrusion", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#Extrusion" },
    { name: "Rotational Moulding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#RotationalMoulding" },
    // Moulding^^^
    { name: "Offset Lithography", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#OffsetLithography" },
    { name: "Flexography", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#Flexography" },
    { name: "Printing methods", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html" },
    { name: "Screen Printing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#ScreenPrinting" },
    { name: "Gravure Printing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#GravurePrinting" },
    // Printing^^^
    { name: "Mortise Gauge", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#MortiseGauge" },
    { name: "Odd Leg Calipers", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#OddLegCalipers" },
    { name: "Internal Calipers", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#InternalCalipers" },
    { name: "External Calipers", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#ExternalCalipers" },
    { name: "Try-Square", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#TrySquare" },
    { name: "Engineering Square", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#EngineeringSquare" },
    { name: "Micrometer", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Micrometer" },
    { name: "Vernier Calipers", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#VernierCalipers" },
    { name: "Densitometer", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Densitometer" },
    { name: "Dividers", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Dividers" },
    { name: "Jigs", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Jigs" },
    { name: "Fixtures", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Fixtures" },
    { name: "Go-No-Go Gauge", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#GoNoGoGauge" },
    // Marking tools^^^
    { name: "CAD software", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "3D modelling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Wire frame models", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Surface modelling", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Finite Element Analysis", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "FEA", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "CFD", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Computational fluid dynamics", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    //CAD^^^
    { name: "CAM software", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html" },
    { name: "CNC Machines", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html#CNCMachines" },
    { name: "Rapid prototyping (3D printing)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html#Rapidprototyping " },
    //CAM^^^
    { name: "User values", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User needs", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User wants", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Purpose", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Purpose" },
    { name: "Functionality", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Functionality" },
    { name: "Innovation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Innovation" },
    { name: "Authenticity", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Authenticity" },
    { name: "User centred design", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    //User centred design^^^
    { name: "Sources and applications of anthropometric data", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Sourcesandapplicationsofanthropometricdata" },
    { name: "Ergonomic factors for a designer to consider", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Ergonomics", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Anthropometrics", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometrics" },
    { name: "Qualitative", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Qualitative" },
    { name: "Quantitative", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Quantitative" },
    { name: "Anthropometric data", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "5th percentile", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "95th percentile", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "Percentiles", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    //Ergo& Anthro^^^
    { name: "Form over function", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formoverfunction" },
    { name: "Form follows function", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formfollowsfunction" },
    { name: "Form", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Function", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    //Form and function^^^
    { name: "Arts & Crafts", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtsCrafts" },
    { name: "Art Nouveau", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtNouveau" },
    { name: "Bauhaus Modernist", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#BauhausModernist" },
    { name: "Art Deco", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtDeco" },
    { name: "Post Modernism", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PostModernism" },
    { name: "Streamlining", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Streamlining" },
    { name: "Memphis", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Memphis" },
    { name: "William Morris", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#WilliamMorris" },
    { name: "Charles Rennie Mackintosh", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#CharlesRennieMackintosh" },
    { name: "Marianna Brandt", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#MariannaBrandt" },
    { name: "Eileen Gray", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EileenGray" },
    { name: "Philippe Starck", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PhilippeStarck" },
    { name: "Raymond Lowey", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#RaymondLowey" },
    { name: "Ettore Scotsass", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EttoreScotsass" },
    // Design theory
    { name: "Consumer society", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ConsumerSociety" },
    { name: "Built in obsolescence", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#BuiltInObsolescence" },
    { name: "Computers in the development and manufacture of products", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ComputersDevelopmentManufactureProducts" },
    { name: "CIM systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#CIMSystems" },
    { name: "Computer-to-plate technology", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ComputerToPlateTechnology" },
    { name: "Miniturisation of products and components", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MiniturisationProductsComponents" },
    { name: "Advanced integrated circuits", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedIntegratedCircuits" },
    { name: "Advanced battery technology", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedBatteryTechnology" },
    { name: "Advanced liquid crystal displays", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedLiquidCrystalDisplays" },
    { name: "Smart materials and products for innovative applications", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#SmartMaterialsProductsInnovativeApplications" },
    { name: "Global marketplace", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#GlobalMarketplace" },
    { name: "Offshore manufacturing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#OffshoreManufacturing" },
    { name: "Multinational companies", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MultinationalCompanies" },
    { name: "Outsourcing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#Outsourcing" },
    { name: "Mass production (Effects of technological developments)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MassProductionEffectsTechnologicalDevelopments" },
    // Tech dev
    { name: "Safe working practice", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#SafeWorkingPractice" },
    { name: "Understanding the need for risk assessments", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#UnderstandingNeedRiskAssessments" },
    { name: "Training", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#Training" },
    { name: "Machine maintenance and guarding", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#MachineMaintenanceGuarding" },
    { name: "Extraction systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ExtractionSystems" },
    { name: "Provision of PPE", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ProvisionPPE" },
    { name: "General safe working practices", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#GeneralSafeWorkingPractices" },
    { name: "Health and Safety Executive (HSE)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#HealthSafetyExecutive" },
    { name: "Identification of potential hazards", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#IdentificationPotentialHazards" },
    { name: "Identifying the people at risk", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#IdentifyingPeopleAtRisk" },
    { name: "Evaluation of risk", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#EvaluationRisk" },
    { name: "Risk assessments", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#RiskAssessments" },
    { name: "Implement control methods", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ImplementControlMethods" },
    { name: "Recording and storing of risk assessment documentation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#RecordingStoringRiskAssessmentDocumentation" },
    // Safe working
    { name: "One-off production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Oneoff" },
    { name: "Batch production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Batch" },
    { name: "Mass production (Methods of production)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Massp" },
    { name: "Continuous production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Continuousp" },
    { name: "Production methods", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html" },
    // Production methods
    { name: "Quality control", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#QualityControl" },
    { name: "Inspection", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#Inspection" },
    { name: "Computer-aided inspection", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ComputerAidedInspection" },
    { name: "Testing/checks", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#TestingChecks" },
    { name: "Reducing cost of testing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ReducingCostTesting" },
    { name: "Non-destructive testing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#NonDestructiveTesting" },
    { name: "Destructive testing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#DestructiveTesting" },
    { name: "Quality assurance", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#QualityAssurance" },
    { name: "Total quality management (TQM)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#TotalQualityManagementTQM" },
    { name: "ISO 9000", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ISOnine" },
    // QA & QC
    { name: "Production scheduling and production logistics", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductionSchedulingProductionLogistics" },
    { name: "Robotics in production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RoboticsInProduction" },
    { name: "Material handling systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Modular/cell production systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ModularCellProductionSystems" },
    { name: "IT systems in production scheduling/logistics", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ITSystemsProductionSchedulingLogistics" },
    { name: "Computer systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ComputerSystems" },
    { name: "Artificial intelligence", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ArtificialIntelligence" },
    { name: "Robots on fully-automated production and assembly lines/cells", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RobotsFullyAutomatedProductionAssemblyLinesCells" },
    { name: "Material handling machines", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Automated guided vehicles (AGVs)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedGuidedVehiclesAGVs" },
    { name: "Automated storage and retrieval systems (ASRS)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedStorageRetrievalSystemsASRS" },
    { name: "Flexible manufacturing systems (FMS)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FlexibleManufacturingSystemsFMS" },
    { name: "Functional cells", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FunctionalCells" },
    { name: "Group technology cells", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#GroupTechnologyCells" },
    { name: "Product focused cells", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductFocusedCells" },
    { name: "Lean manufacturing using just-in-time (JIT) systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#LeanManufacturingJITSystems" },
    { name: "Just-in-time (JIT)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#JustInTimeJIT" },
    { name: "Standardised parts", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Bought-in parts", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Quick response manufacturing (QRM)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#QuickResponseManufacturingQRM" },
    { name: "Product data management (PDM)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductDataManagementPDM" },
    { name: "Enterprise resource planning (ERP) systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#EnterpriseResourcePlanningERPSystems" },
    { name: "Concurrent manufacturing", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ConcurrentManufacturing" },
    { name: "Modern manufacturing methods and systems", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    //Modern manufacturing methods and systems
    { name: "Material selection", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#MaterialSelection" },
    { name: "Manufacture", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Manufacture" },
    { name: "Distribution", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Distribution" },
    { name: "Use", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Use" },
    { name: "Repair and maintenance", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#RepairMaintenance" },
    { name: "End of life", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#EndOfLife" },
    { name: "Product Life Cycle (Environmental)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html" },
    //Product Life Cycle
    { name: "Cost implications to the consumer and manufacturer (Cleaner technology)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html" },
    { name: "Sustainability", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html#Sustainability" },
    { name: "Wider issues of using cleaner technologies", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html#CostImplicationsofSust" },
    //Wider issues of using cleaner tech
    { name: "Consumer Rights Act (2015)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html#consumerrightsact" },
    { name: "Sale of Goods Act (1979)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html#Saleofgoodsact" },
    { name: "Consumer Rights Legislation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html" },
    //Consumer rights^^^
    { name: "Health and Safety at Work Act (1974)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#Act1974" },
    { name: "Health and Safety", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    { name: "Health and Safety Regulation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#HSEregs" },
    { name: "Control of Substances Hazardous to Health (COSHH) Regulation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#COSHH" },
    //Health and safety
    { name: "Marketing Analysis", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#MarketingAnalysis" },
    { name: "SWOT Analysis", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SWOTAnalysis" },
    { name: "Research Techniques", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ResearchTechniques" },
    { name: "Primary Data", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PrimaryData" },
    { name: "Secondary Data", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SecondaryData" },
    { name: "Focus Group", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FocusGroup" },
    { name: "Investigative Methods", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InvestigativeMethods" },
    { name: "Innovation Management", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InnovationManagement" },
    { name: "Imitation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Imitation" },
    { name: "Invention", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Invention" },
    { name: "Push Innovation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PushInnovation" },
    { name: "Pull Innovation", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PullInnovation" },
    { name: "Cooperation Between Sectors", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#CooperationBetweenSectors" },
    { name: "Encouragement of Creativity", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#EncouragementOfCreativity" },
    { name: "Concurrent Manufacturing and QRM", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ConcurrentManufacturingAndQRM" },
    { name: "Feasibility and Practicality", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FeasibilityAndPracticality" },
    { name: "Computer Modelling in Production Planning", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ComputerModellingInProductionPlanning" },
    { name: "Collection, collation and analysis to make decisions", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    //Market analysis
    { name: "Budgets", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#Budgets" },
    { name: "Planning for Production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Allocation of Employees, Materials, Scale of Production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Material Costs", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Labour/Wages", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Premises", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Equipment Available for Scale of Production", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Selection of Tools, Machines, and Manufacturing Processes", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#SelectionOfToolsMachinesAndManufacturingProcesses" },
    //Modelling the cost of projects^^
    { name: "Patents", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Patents" },
    { name: "Copyrights", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Copyright" },
    { name: "Design Rights", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Designrights" },
    { name: "Trademarks", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Trademarks" },
    //Property rights
    { name: "British Standards (BSI and Kitemark)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#BSI" },
    { name: "European Standards (CEN and CE)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#CE" },
    { name: "International Standards (ISO)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#ISO" },
    //Standards for products^^^
    { name: "Critical Path Analysis (CPA)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#CPA" },
    { name: "Scrum", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#Scrum" },
    { name: "Six Sigma", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#SixSigma" },
    //Project management systems^^^
    { name: "Product Life Cycle (Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Introduction (Product life cycle - Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Introduction" },
    { name: "Growth (Product life cycle - Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Growth" },
    { name: "Maturity (Product life cycle - Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Maturity" },
    { name: "Decline (Product life cycle - Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Decline" },
    { name: "Extensions (Product life cycle - Sales)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Extensions" },
    //Product life cycle
    { name: "User centred design", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#UserCentredDesign" },
    { name: "Circular economy", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#CircularEconomy" },
    { name: "Systems thinking", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#SystemsThinking" },
    //Strat, techniques
    { name: "Number, percentages, and percentiles (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_arithmetic.html#Number" },

    { name: "Ratio (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_ratios.html#Ratio" },

    { name: "Surface area and Volume (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_surface_area_and_volume.html#SAandV" },

    { name: "Trigonometry (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },
    { name: "Pythagoras (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },

    { name: "Graphs and Charts (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },
    { name: "Cumulative frequency (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },

    { name: "Coordinates and Geometry (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#CoordsAndGeometry" },

    { name: "Statistics (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_statistics.html#Stats" },
    { name: "Probability (Maths)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_statistics.html#Stats" },

];

document.addEventListener('DOMContentLoaded', function () {

    // Show or hide the scroll-to-top button based on scroll position
    window.onscroll = function () {
        var button = document.getElementById("scrollToTopBtn");
        if (!button) return;
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Bind scroll to top function to the button click event
    var button = document.getElementById("scrollToTopBtn");
    if (button) {
        button.onclick = scrollToTop;
    }

    // Hamburger menu toggle
    const toggleButton = document.querySelector('.hamburger');
    const navbarLinks = document.querySelectorAll('.nav-link-wrapper');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('active');
            navbarLinks.forEach((it) => it.classList.toggle('active'));
        });
    }

    // Search function
    function search() {
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('searchResults');

        if (!searchInput || !resultsContainer) {
            console.error("Search input or results container not found.");
            return;
        }

        const searchTerm = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = ''; // Clear previous results

        if (searchTerm === '') {
            resultsContainer.style.display = 'none'; // Hide dropdown if input is empty
            return;
        }

        // Check if topics array is defined
        if (typeof topics === 'undefined' || !Array.isArray(topics)) {
            console.error("Topics array is not defined.");
            return;
        }

        // Filter topics that match the search input
        const matchedTopics = topics.filter(topic => {
            return topic.name && typeof topic.name === 'string' && topic.name.toLowerCase().includes(searchTerm);
        });

        if (matchedTopics.length > 0) {
            matchedTopics.slice(0, 10).forEach(topic => {
                const resultItem = document.createElement('li');
                resultItem.textContent = topic.name;
                resultItem.classList.add('search-result-item');
                resultItem.dataset.url = topic.url;
                resultsContainer.appendChild(resultItem);
            });
            resultsContainer.style.display = 'block'; // Show results
        } else {
            resultsContainer.innerHTML = '<li>No matching topics found.</li>';
            resultsContainer.style.display = 'block';
        }
    }

    // Add event listener for search input (real-time search)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', search);
    }

    // Add event listener for search button
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', search);
    }

    // Handle click on search result items
    const resultsContainer = document.getElementById('searchResults');
    if (resultsContainer) {
        resultsContainer.addEventListener('click', function (event) {
            const clickedItem = event.target;
            if (clickedItem.classList.contains('search-result-item')) {
                window.location.href = clickedItem.dataset.url;

                // Scroll down by half a screen after a brief delay
                setTimeout(() => {
                    window.scrollBy(0, window.innerHeight / 2);
                }, 50);
            }
        });
    }

    // Handle the Enter key to go to the first result
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const topResult = document.querySelector('.search-result-item');
            if (topResult) {
                window.location.href = topResult.dataset.url;
            }
        }
    });

});

