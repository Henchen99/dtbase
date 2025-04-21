
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
    { name: 'Metals (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html' },
    { name: 'Ferrous Metals (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#FerrousMetals' },
    { name: 'Non-ferrous Metals (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#NonferrousMetals' },
    { name: 'Alloys (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Alloys' },
    { name: 'Mild Steel (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#MildSteel' },
    { name: 'Medium Carbon Steel (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#MediumCarbonSteel' },
    { name: 'High Carbon Steel (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#HighCarbonSteel' },
    { name: 'Cast Iron (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#CastIron' },
    { name: 'Aluminium (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Aluminium' },
    { name: 'Copper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Copper' },
    { name: 'Zinc (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Zinc' },
    { name: 'Tin (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Tin' },
    { name: 'Stainless Steel (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#StainlessSteel' },
    { name: 'Duralumin (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Duralumin' },
    { name: 'Brass (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/metals_materials_notes.html#Brass' },
    // Metals^^^
    { name: 'Plastics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Polymers (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html' },
    { name: 'Thermoplastics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Thermoplastics' },
    { name: 'Thermosetting Plastics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#ThermosettingPlastics' },
    { name: 'Elastomers (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    { name: 'Acrylic (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Acrylic' },
    { name: 'Polyethylene (PE) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyethylene' },
    { name: 'Polyethylene terephthalate (PET) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyethyleneterephthalate' },
    { name: 'Polyvinyl Chloride (PVC) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#PolyvinylChloride' },
    { name: 'Polypropylene (PP) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polypropylene' },
    { name: 'Acrylonitrile Butadiene Styrene (ABS) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#ABS' },
    { name: 'Epoxy resin (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Epoxyresin' },
    { name: 'Urea formaldehyde (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Ureaformaldehyde' },
    { name: 'Polyester resin (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Polyesterresin' },
    { name: 'Rubber (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/polymers_materials_notes.html#Elastomers' },
    // Polymers^^^
    { name: 'Composites (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html' },
    { name: 'Fibre-based composites (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Fibrebasedcomposites' },
    { name: 'Particle-based composites (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Particlebasedcomposites' },
    { name: 'Sheet-based composites (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Sheetbasedcomposites' },
    { name: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Compositeamixtureoftwomorematerialscombinedtoimprovethepropertiesegcorrosionresistance' },
    { name: 'Carbon fibre (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Carbonfibre' },
    { name: 'GRP (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#GRP' },
    { name: 'Reinforced concrete (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Reinforcedconcrete' },
    { name: 'MDF composite (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#MDFcomposite' },
    { name: 'Hardboard (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Hardboard' },
    { name: 'Chipboard (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Chipboard' },
    { name: 'Plywood composite (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/composites_materials_notes.html#Plywoodcomposite' },
    // Composites^^^
    { name: 'Papers and Boards (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html' },
    { name: 'Grams per square metre (GSM) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Microns (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.htmlMeasuringpapersandboards' },
    { name: 'Drawing papers (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Drawingpapers' },
    { name: 'Commerical printing papers (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Commericalprintingpapers' },
    { name: 'Boards (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Boards' },
    { name: 'How papers/boards are made (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Howpapersboardsaremade' },
    { name: 'Measuring papers and boards (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Measuringpapersandboards' },
    { name: 'Layout paper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Layoutpaper' },
    { name: 'Tracing paper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Tracingpaper' },
    { name: 'Copier paper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Copierpaper' },
    { name: 'Bond paper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Bondpaper' },
    { name: 'Coated paper (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Coatedpaper' },
    { name: 'Mounting board (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Mountingboard' },
    { name: 'Corrugated board (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Corrugatedboard' },
    { name: 'Foam board (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foamboard' },
    { name: 'Folding box board (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foldingboxboard' },
    { name: 'Foil-lined board (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Foillinedboard' },
    { name: 'Papers (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/papers_and_boards_materials_notes.html#Papers' },
    // Papers and boards^^^
    { name: 'Textiles (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html' },
    { name: 'Natural fibres (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Naturalfibres' },
    { name: 'Manmade fibres (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Manmadefibres' },
    { name: 'Textile treatments (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Textiletreatments' },
    { name: 'Cotton (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Cotton' },
    { name: 'Linen (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Linen' },
    { name: 'Wool (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Wool' },
    { name: 'Nylon (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Nylon' },
    { name: 'Polypropylene fibres (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Polypropylenefibres' },
    { name: 'Polyester fibres (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Polyesterfibres' },
    { name: 'Flame resistant (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#Flameresistant' },
    { name: 'Polytetrafluoroethylene (PTFE) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/textiles_materials_notes.html#PolytetrafluoroethylenePTFE' },
    // Textiles^^^
    { name: 'Smart Materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html' },
    { name: 'Shape memory alloy (SMA) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ShapeMemoryAlloySMA' },
    { name: 'Reactive glass (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ReactiveGlass' },
    { name: 'Phosphorescent pigment (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PhosphorescentPigment' },
    { name: 'Electroluminescent wire (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ElectroluminescentWire' },
    { name: 'Photo-chromic materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PhotochromicMaterials' },
    { name: 'Thermo-chromic materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#ThermochromicMaterials' },
    { name: 'Quantum tunnelling composites (QTCs) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#QuantumTunnellingCompositesQTCs' },
    { name: 'Piezoelectric materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/smart_materials_notes.html#PiezoelectricMaterials' },
    // Smart materials^^^
    { name: 'Modern Materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html' },
    { name: 'Thermo-ceramics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Thermoceramics' },
    { name: 'Liquid crystal displays (LCDs) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#LiquidCrystalDisplaysLCDs' },
    { name: 'Glulam (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Glulam' },
    { name: 'Kevlar (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Kevlar' },
    { name: 'Precious metal clay (PMC) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#PreciousMetalClayPMC' },
    { name: 'Nanomaterials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Nanomaterials' },
    { name: 'High density modelling foam (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#HighDensityModellingFoam' },
    { name: 'Polymorph (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_materials_notes.html#Polymorph' },
    // Modern materials^^^
    { name: 'Performance Characteristics Of Materials (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html' },
    { name: 'Physical characteristics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical properties (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Physical properties (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Physicalcharacteristics' },
    { name: 'Mechanical characteristics (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Mechanicalproperties' },
    { name: 'Electrical conductivity (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Electricalconductivity' },
    { name: 'Thermal conductivity (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Thermalconductivity' },
    { name: 'Biodegradability (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Biodegradability' },
    { name: 'Chemical resistance (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Chemicalresistance' },
    { name: 'Corrosion resistance (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Corrosionresistance' },
    { name: 'Strength (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Strength' },
    { name: 'Elasticity (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Elasticity' },
    { name: 'Placticity (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Placticity' },
    { name: 'Malleability (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Malleability' },
    { name: 'Ductility (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Ductility' },
    { name: 'Hardness (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Hardness' },
    { name: 'Toughness (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Toughness' },
    { name: 'Durability (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/performance_characteristics_of_materials_notes.html#Durability' },
    // Section 2^^^
    { name: 'Alloying (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Alloys (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Steel (Alloying) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Brass (Alloying) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Bronze (Alloying) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    { name: 'Duralumin (Alloying) (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/alloying_notes.html' },
    // Alloying^^^
    { name: 'Sand casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Sandcasting' },
    { name: 'Casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html' },
    { name: 'Investment casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Investmentcasting' },
    { name: 'Die casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Diecasting' },
    { name: 'Resin casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#Resincasting' },
    { name: 'Plaster of Paris casting (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/casting_notes.html#PlasterofPariscasting' },
    // Casting^^^
    { name: 'Design decisions (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html' },
    { name: 'Pictorial drawings (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Pictorialdrawings' },
    { name: 'Working drawings (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Workingdrawings' },
    { name: 'Nets (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Nets' },
    { name: 'Translation (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Translation' },
    { name: 'Report writing (Edexcel A-Level)', url: 'https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_decisions_notes.html#Reportwriting' },
    // Design decisions^^^
    { name: "Finishes (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Finishes" },
    { name: "Finishing techniques (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html" },
    { name: "Paper and Board Finishes (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PaperandBoardFinishes" },
    { name: "Paints (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Paints" },
    { name: "Varnishes (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Varnishes" },
    { name: "Sealant (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Sealant" },
    { name: "Preservatives (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Preservatives" },
    { name: "Anodising (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Anodising" },
    { name: "Electro-Plating (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Electro-Plating" },
    { name: "Powder Coating (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PowderCoating" },
    { name: "Oil Coating (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#OilCoating" },
    { name: "Galvanisation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Galvanisation" },
    { name: "Cathodic Protection (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#CathodicProtection" },
    { name: "Paper Laminating (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#PaperLaminating" },
    { name: "Varnishing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Varnishing" },
    { name: "Hot Foil Blocking (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#HotFoilBlocking" },
    { name: "Embossing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/finishing_techniques_notes.html#Embossing" },
    // Finishing techniques^^^
    { name: "Hardening and Tempering (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Hardening (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Heat treatments (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html" },
    { name: "Tempering (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#HardeningandTempering" },
    { name: "Case Hardening (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#CaseHardening" },
    { name: "Annealing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#Annealing" },
    { name: "Normalising (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/heat_treatments_notes.html#Normalising" },
    // Heat treatments^^^
    { name: "Adhesives (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Adhesives" },
    { name: "Mechanical joining (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Mechanicaljoining" },
    { name: "Heat joining (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Heat" },
    { name: "Jointing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Jointing" },
    { name: "Contact adhesive (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Contactadhesive" },
    { name: "Tensol cement (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Tensolcement" },
    { name: "Expoxy resin adhesive (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Expoxyresinadhesive" },
    { name: "Polyvinylacetata (PVA) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Polyvinylacetata(PVA)" },
    { name: "Hot melt glue (glue gun) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Hotmeltglue(gluegun)" },
    { name: "Cyanoacrylate (superglue) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Cyanoacrylate(superglue)" },
    { name: "Polystyrene cement (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Polystyrenecement" },
    { name: "Traditional Wood Joints (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#TraditionalWoodJoints" },
    { name: "Knock-down Fittings (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Knock-downFittings" },
    { name: "Wood Screws (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#WoodScrews" },
    { name: "Coach Bolt (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#CoachBolt" },
    { name: "Oxy Acetylene Welding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#OxyAcetyleneWelding" },
    { name: "MIG Welding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#MIGWelding" },
    { name: "Brazing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#Brazing" },
    { name: "Hard Soldering (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#HardSoldering" },
    { name: "Soft Soldering (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html#SoftSoldering" },
    { name: "Joining techniques (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/joining_techniques_notes.html" },
    // Joining techniques^^^
    { name: "Lamination (Woods) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/lamination_notes.html#WoodLamination" },
    // Wood lamination^^^
    { name: "Vertical Milling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Milling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#VerticalMilling" },
    { name: "Horizontal Milling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#HorizontalMilling" },
    { name: "Routing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Routing" },
    { name: "Drilling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Drilling" },
    { name: "Machining (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html" },
    { name: "Turning (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Turning" },
    { name: "Stamping (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Stamping" },
    { name: "Pressing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/machining_notes.html#Pressing" },
    // Machining^^^
    { name: "Marking out (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/marking_out_techniques_notes.html" },
    { name: "Marking out techniques (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/marking_out_techniques_notes.html" },
    // Marking out^^^
    { name: "Blow Moulding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#BlowMoulding" },
    { name: "Polymer Moulding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html" },
    { name: "Injection Moulding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#InjectionMoulding" },
    { name: "Vacuum Forming (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#VacuumForming" },
    { name: "Extrusion (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#Extrusion" },
    { name: "Rotational Moulding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/moulding_notes.html#RotationalMoulding" },
    // Moulding^^^
    { name: "Offset Lithography (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#OffsetLithography" },
    { name: "Flexography (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#Flexography" },
    { name: "Printing methods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html" },
    { name: "Screen Printing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#ScreenPrinting" },
    { name: "Gravure Printing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/printing_notes.html#GravurePrinting" },
    // Printing^^^
    { name: "Mortise Gauge (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#MortiseGauge" },
    { name: "Odd Leg Calipers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#OddLegCalipers" },
    { name: "Internal Calipers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#InternalCalipers" },
    { name: "External Calipers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#ExternalCalipers" },
    { name: "Try-Square (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#TrySquare" },
    { name: "Engineering Square (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#EngineeringSquare" },
    { name: "Micrometer (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Micrometer" },
    { name: "Vernier Calipers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#VernierCalipers" },
    { name: "Densitometer (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Densitometer" },
    { name: "Dividers (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Dividers" },
    { name: "Jigs (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Jigs" },
    { name: "Fixtures (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#Fixtures" },
    { name: "Go-No-Go Gauge (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/specialist_marking_tools_notes.html#GoNoGoGauge" },
    // Marking tools^^^
    { name: "CAD software (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "3D modelling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Wire frame models (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Surface modelling (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Finite Element Analysis (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "FEA (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "CFD (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    { name: "Computational fluid dynamics (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAD_notes.html" },
    //CAD^^^
    { name: "CAM software (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html" },
    { name: "CNC Machines (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html#CNCMachines" },
    { name: "Rapid prototyping (3D printing) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/CAM_notes.html#Rapidprototyping " },
    //CAM^^^
    { name: "User values (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User needs (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "User wants (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    { name: "Purpose (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Purpose" },
    { name: "Functionality (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Functionality" },
    { name: "Innovation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Innovation" },
    { name: "Authenticity (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html#Authenticity" },
    { name: "User centred design (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/user_centred_design_notes.html" },
    //User centred design^^^
    { name: "Sources and applications of anthropometric data (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Sourcesandapplicationsofanthropometricdata" },
    { name: "Ergonomic factors for a designer to consider (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Ergonomics (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Ergonomics" },
    { name: "Anthropometrics (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometrics" },
    { name: "Qualitative (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Qualitative" },
    { name: "Quantitative (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Quantitative" },
    { name: "Anthropometric data (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "5th percentile (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "95th percentile (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    { name: "Percentiles (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/Influence_of_design_anthropometrics_notes.html#Anthropometricdata" },
    //Ergo& Anthro^^^
    { name: "Form over function (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formoverfunction" },
    { name: "Form follows function (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html#Formfollowsfunction" },
    { name: "Form (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    { name: "Function (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/influence_of_aesthetics_notes.html" },
    //Form and function^^^
    { name: "Arts & Crafts (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtsCrafts" },
    { name: "Art Nouveau (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtNouveau" },
    { name: "Bauhaus Modernist (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#BauhausModernist" },
    { name: "Art Deco (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#ArtDeco" },
    { name: "Post Modernism (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PostModernism" },
    { name: "Streamlining (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Streamlining" },
    { name: "Memphis (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#Memphis" },
    { name: "William Morris (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#WilliamMorris" },
    { name: "Charles Rennie Mackintosh (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#CharlesRennieMackintosh" },
    { name: "Marianna Brandt (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#MariannaBrandt" },
    { name: "Eileen Gray (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EileenGray" },
    { name: "Philippe Starck (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#PhilippeStarck" },
    { name: "Raymond Lowey (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#RaymondLowey" },
    { name: "Ettore Scotsass (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/design_influences_methods_and_figures_factors_influencing_the_development_of_products_notes.html#EttoreScotsass" },
    // Design theory
    { name: "Consumer society (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ConsumerSociety" },
    { name: "Built in obsolescence (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#BuiltInObsolescence" },
    { name: "Computers in the development and manufacture of products (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ComputersDevelopmentManufactureProducts" },
    { name: "CIM systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#CIMSystems" },
    { name: "Computer-to-plate technology (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#ComputerToPlateTechnology" },
    { name: "Miniturisation of products and components (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MiniturisationProductsComponents" },
    { name: "Advanced integrated circuits (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedIntegratedCircuits" },
    { name: "Advanced battery technology (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedBatteryTechnology" },
    { name: "Advanced liquid crystal displays (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#AdvancedLiquidCrystalDisplays" },
    { name: "Smart materials and products for innovative applications (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#SmartMaterialsProductsInnovativeApplications" },
    { name: "Global marketplace (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#GlobalMarketplace" },
    { name: "Offshore manufacturing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#OffshoreManufacturing" },
    { name: "Multinational companies (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MultinationalCompanies" },
    { name: "Outsourcing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#Outsourcing" },
    { name: "Mass production (Effects of technological developments) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/technological_developments_notes.html#MassProductionEffectsTechnologicalDevelopments" },
    // Tech dev
    { name: "Safe working practice (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#SafeWorkingPractice" },
    { name: "Understanding the need for risk assessments (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#UnderstandingNeedRiskAssessments" },
    { name: "Training (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#Training" },
    { name: "Machine maintenance and guarding (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#MachineMaintenanceGuarding" },
    { name: "Extraction systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ExtractionSystems" },
    { name: "Provision of PPE (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ProvisionPPE" },
    { name: "General safe working practices (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#GeneralSafeWorkingPractices" },
    { name: "Health and Safety Executive (HSE) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#HealthSafetyExecutive" },
    { name: "Identification of potential hazards (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#IdentificationPotentialHazards" },
    { name: "Identifying the people at risk (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#IdentifyingPeopleAtRisk" },
    { name: "Evaluation of risk (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#EvaluationRisk" },
    { name: "Risk assessments (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#RiskAssessments" },
    { name: "Implement control methods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#ImplementControlMethods" },
    { name: "Recording and storing of risk assessment documentation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/safe_working_notes.html#RecordingStoringRiskAssessmentDocumentation" },
    // Safe working
    { name: "One-off production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Oneoff" },
    { name: "Batch production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Batch" },
    { name: "Mass production (Methods of production) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Massp" },
    { name: "Continuous production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html#Continuousp" },
    { name: "Production methods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/methods_of_production_notes.html" },
    // Production methods
    { name: "Quality control (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#QualityControl" },
    { name: "Inspection (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#Inspection" },
    { name: "Computer-aided inspection (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ComputerAidedInspection" },
    { name: "Testing/checks (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#TestingChecks" },
    { name: "Reducing cost of testing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ReducingCostTesting" },
    { name: "Non-destructive testing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#NonDestructiveTesting" },
    { name: "Destructive testing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#DestructiveTesting" },
    { name: "Quality assurance (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#QualityAssurance" },
    { name: "Total quality management (TQM) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#TotalQualityManagementTQM" },
    { name: "ISO 9000 (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/quality_control_systems_notes.html#ISOnine" },
    // QA & QC
    { name: "Production scheduling and production logistics (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductionSchedulingProductionLogistics" },
    { name: "Robotics in production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RoboticsInProduction" },
    { name: "Material handling systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Modular/cell production systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ModularCellProductionSystems" },
    { name: "IT systems in production scheduling/logistics (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ITSystemsProductionSchedulingLogistics" },
    { name: "Computer systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ComputerSystems" },
    { name: "Artificial intelligence (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ArtificialIntelligence" },
    { name: "Robots on fully-automated production and assembly lines/cells (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#RobotsFullyAutomatedProductionAssemblyLinesCells" },
    { name: "Material handling machines (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#MaterialHandlingSystems" },
    { name: "Automated guided vehicles (AGVs) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedGuidedVehiclesAGVs" },
    { name: "Automated storage and retrieval systems (ASRS) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#AutomatedStorageRetrievalSystemsASRS" },
    { name: "Flexible manufacturing systems (FMS) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FlexibleManufacturingSystemsFMS" },
    { name: "Functional cells (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#FunctionalCells" },
    { name: "Group technology cells (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#GroupTechnologyCells" },
    { name: "Product focused cells (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductFocusedCells" },
    { name: "Lean manufacturing using just-in-time (JIT) systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#LeanManufacturingJITSystems" },
    { name: "Just-in-time (JIT) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#JustInTimeJIT" },
    { name: "Standardised parts (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Bought-in parts (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { name: "Quick response manufacturing (QRM) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#QuickResponseManufacturingQRM" },
    { name: "Product data management (PDM) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ProductDataManagementPDM" },
    { name: "Enterprise resource planning (ERP) systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#EnterpriseResourcePlanningERPSystems" },
    { name: "Concurrent manufacturing (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html#ConcurrentManufacturing" },
    { name: "Modern manufacturing methods and systems (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modern_manufacturing_methods_notes.html" },
    //Modern manufacturing methods and systems
    { name: "Material selection (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#MaterialSelection" },
    { name: "Manufacture (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Manufacture" },
    { name: "Distribution (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Distribution" },
    { name: "Use (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#Use" },
    { name: "Repair and maintenance (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#RepairMaintenance" },
    { name: "End of life (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html#EndOfLife" },
    { name: "Product Life Cycle (Environmental) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/product_life_cycle_notes.html" },
    //Product Life Cycle
    { name: "Cost implications to the consumer and manufacturer (Cleaner technology) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html" },
    { name: "Sustainability (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html#Sustainability" },
    { name: "Wider issues of using cleaner technologies (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/wider_issues_tech_notes.html#CostImplicationsofSust" },
    //Wider issues of using cleaner tech
    { name: "Consumer Rights Act (2015) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html#consumerrightsact" },
    { name: "Sale of Goods Act (1979) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html#Saleofgoodsact" },
    { name: "Consumer Rights Legislation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/consumer_rights_notes.html" },
    //Consumer rights^^^
    { name: "Health and Safety at Work Act (1974) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#Act1974" },
    { name: "Health and Safety (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html" },
    { name: "Health and Safety Regulation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#HSEregs" },
    { name: "Control of Substances Hazardous to Health (COSHH) Regulation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/health_and_safety_laws_notes.html#COSHH" },
    //Health and safety
    { name: "Marketing Analysis (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#MarketingAnalysis" },
    { name: "SWOT Analysis (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SWOTAnalysis" },
    { name: "Research Techniques (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ResearchTechniques" },
    { name: "Primary Data (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PrimaryData" },
    { name: "Secondary Data (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#SecondaryData" },
    { name: "Focus Group (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FocusGroup" },
    { name: "Investigative Methods (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InvestigativeMethods" },
    { name: "Innovation Management (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#InnovationManagement" },
    { name: "Imitation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Imitation" },
    { name: "Invention (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#Invention" },
    { name: "Push Innovation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PushInnovation" },
    { name: "Pull Innovation (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#PullInnovation" },
    { name: "Cooperation Between Sectors (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#CooperationBetweenSectors" },
    { name: "Encouragement of Creativity (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#EncouragementOfCreativity" },
    { name: "Concurrent Manufacturing and QRM (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ConcurrentManufacturingAndQRM" },
    { name: "Feasibility and Practicality (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#FeasibilityAndPracticality" },
    { name: "Computer Modelling in Production Planning (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html#ComputerModellingInProductionPlanning" },
    { name: "Collection, collation and analysis to make decisions (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/collection_collation_and_analysis_to_make_decisions_notes.html" },
    //Market analysis
    { name: "Budgets (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#Budgets" },
    { name: "Planning for Production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Allocation of Employees, Materials, Scale of Production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Material Costs (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Labour/Wages (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Premises (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Equipment Available for Scale of Production (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#PlanningForProduction" },
    { name: "Selection of Tools, Machines, and Manufacturing Processes (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/modelling_the_costing_of_projects_notes.html#SelectionOfToolsMachinesAndManufacturingProcesses" },
    //Modelling the cost of projects^^
    { name: "Patents (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Patents" },
    { name: "Copyrights (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Copyright" },
    { name: "Design Rights (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Designrights" },
    { name: "Trademarks (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/property_rights_notes.html#Trademarks" },
    //Property rights
    { name: "British Standards (BSI and Kitemark) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#BSI" },
    { name: "European Standards (CEN and CE) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#CE" },
    { name: "International Standards (ISO) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/standard_for_products_notes.html#ISO" },
    //Standards for products^^^
    { name: "Critical Path Analysis (CPA) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#CPA" },
    { name: "Scrum (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#Scrum" },
    { name: "Six Sigma (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/project_management_notes.html#SixSigma" },
    //Project management systems^^^
    { name: "Product Life Cycle (Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html" },
    { name: "Introduction (Product life cycle - Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Introduction" },
    { name: "Growth (Product life cycle - Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Growth" },
    { name: "Maturity (Product life cycle - Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Maturity" },
    { name: "Decline (Product life cycle - Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Decline" },
    { name: "Extensions (Product life cycle - Sales) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/stages_of_a_products_life_cycle_notes.html#Extensions" },
    //Product life cycle
    { name: "User centred design (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#UserCentredDesign" },
    { name: "Circular economy (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#CircularEconomy" },
    { name: "Systems thinking (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/sta_to_explore_notes.html#SystemsThinking" },
    //Strat, techniques
    { name: "Number, percentages, and percentiles (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_arithmetic.html#Number" },

    { name: "Ratio (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_ratios.html#Ratio" },

    { name: "Surface area and Volume (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_surface_area_and_volume.html#SAandV" },

    { name: "Trigonometry (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },
    { name: "Pythagoras (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_trigonometry.html#Trigonometry" },

    { name: "Graphs and Charts (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },
    { name: "Cumulative frequency (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#GraphsAndCharts" },

    { name: "Coordinates and Geometry (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_graphs_and_charts.html#CoordsAndGeometry" },

    { name: "Statistics (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_statistics.html#Stats" },
    { name: "Probability (Maths) (Edexcel A-Level)", url: "https://designandtechbase.com/notes/notes_level/notes_examboard/edexcel_alevel_notes/notes_topics/notes_pages/maths_statistics.html#Stats" },

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

})


document.addEventListener('DOMContentLoaded', function() {
    // Create the floating note container
    const floatingNote = document.createElement('div');
    floatingNote.style.position = 'fixed';
    floatingNote.style.top = '20px';
    floatingNote.style.right = '20px';
    floatingNote.style.backgroundColor = '#f8f9fa';
    floatingNote.style.border = '1px solid #dee2e6';
    floatingNote.style.borderRadius = '8px';
    floatingNote.style.padding = '15px';
    floatingNote.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    floatingNote.style.maxWidth = '250px';
    floatingNote.style.zIndex = '1000';
    floatingNote.style.fontFamily = 'Arial, sans-serif';
    floatingNote.style.fontSize = '14px';
    floatingNote.style.color = '#333';

    // Add the message
    floatingNote.innerHTML = `
        <p><strong>Hey User!</strong> We’re planning affordable online group revision sessions for upcoming A-Level/GCSE exams - only £1 per session! Interested? Email us @  
    <a href="mailto:designtechbase@gmail.com">designtechbase@gmail.com</a> to book your place.</p>
    `;

    // Add a close button (optional)
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#999';

    closeButton.addEventListener('click', function() {
        floatingNote.remove();
    });

    floatingNote.appendChild(closeButton);
    document.body.appendChild(floatingNote);
});;

