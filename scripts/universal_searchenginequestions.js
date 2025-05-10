// Sample data for questions
const edexcel_alevel_questions = [
    { question: "Woods (Edexcel A-Level)", url: "/documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Timbers (Edexcel A-Level)", url: "/documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Hardwoods (Edexcel A-Level)", url: "/documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Softwoods (Edexcel A-Level)", url: "/documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Manufactured boards (Edexcel A-Level)", url: "/documents/Q&A/Materials/Woods_Q&A.pdf" },
    //Woods^^^
    { question: "Metals (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Ferrous Metals (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Non-ferrous Metals (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Alloys (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Mild Steel (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Medium Carbon Steel (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "High carbon steel (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Cast Iron (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Aluminium (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Copper (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Zinc (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Tin (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Stainless Steel (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Duralumin (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Brass (Edexcel A-Level)", url: "/documents/Q&A/Materials/Metals_Q&A.pdf" },
    // Metals^^^
    { question: 'Plastics (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polymers (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Thermoplastics (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Thermosetting Plastics (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Elastomers (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Acrylic (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyethylene (PE) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyethylene terephthalate (PET) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyvinyl Chloride (PVC) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polypropylene (PP) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Acrylonitrile Butadiene Styrene (ABS) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Epoxy resin (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Urea formaldehyde (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyester resin (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Rubber (Edexcel A-Level)', url: '/documents/Q&A/Materials/Polymers_Q&A.pdf' },
    //Polymers^^
    { question: 'Composites (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Fibre-based composites (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Particle-based composites (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Sheet-based composites (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Carbon fibre (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'GRP (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Reinforced concrete (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'MDF composite (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Hardboard (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Chipboard (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Plywood composite (Edexcel A-Level)', url: '/documents/Q&A/Materials/Composites_Q&A.pdf' },
    //Composites^^
    { question: 'Papers and Boards (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Drawing papers (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Commerical printing papers (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Boards (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'How papers/boards are made (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Measuring papers and boards (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Layout paper (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Tracing paper (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Copier paper (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Bond paper (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Coated paper (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Mounting board (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Corrugated board (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Foam board (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Folding box board (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Foil-lined board (Edexcel A-Level)', url: '/documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    //Papers and boards^^
    { question: 'Textiles (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Natural fibres (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Manmade fibres (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Textile treatments (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Cotton (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Linen (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Wool (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Nylon (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polypropylene fibres (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polyester fibres (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Flame resistant (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polytetrafluoroethylene (PTFE) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'PTFE (Edexcel A-Level)', url: '/documents/Q&A/Materials/Textiles_Q&A.pdf' },
    //Textiles
    { question: 'Smart Materials (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Shape memory alloy (SMA) (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Reactive glass (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Phosphorescent pigment (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Electroluminescent wire (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Photo-chromic materials (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Thermo-chromic materials (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Photochromic (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Thermochromic (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Quantum tunnelling composites (QTCs) (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Piezoelectric materials (Edexcel A-Level)', url: '/documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    //Smart materials
    { question: 'Modern Materials (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Thermo-ceramics (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Liquid crystal displays (LCD) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Glulam (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Kevlar (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Precious metal clay (PMC) (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Nanomaterials (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'High density modelling foam (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Polymorph (Edexcel A-Level)', url: '/documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    //Modern materials
    { question: 'Performance Characteristics Of Materials (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Physical characteristics (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Mechanical characteristics (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Electrical conductivity (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Thermal conductivity (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Biodegradability (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Chemical resistance (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Corrosion resistance (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Strength (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Elasticity (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Placticity (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Malleability (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Ductility (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Hardness (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Toughness (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Durability (Edexcel A-Level)', url: '/documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    //Section 2^^
    { question: 'Alloying (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Alloys (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Steel (Alloying) (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Brass (Alloying) (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Bronze (Alloying) (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Duralumin (Alloying) (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    //Alloying^^
    { question: 'Sand casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Investment casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Die casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Resin casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Plaster of Paris casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Casting (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    //Casting^^^
    { question: 'Design decisions (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Pictorial drawings (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Pictorial_drawings_Q&A.pdf' },
    { question: 'Working drawings (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Working_drawings_Q&A.pdf' },
    { question: 'Nets (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Nets_Q&A.pdf' },
    { question: 'Translation (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Translation_Q&A.pdf' },
    { question: 'Report writing (Edexcel A-Level)', url: '/documents/Q&A/processes_techniques_special_tools_exercises/Report_writing_Q&A.pdf' },
    //Design decisions^^^
    { question: "Finishes (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Finishing techniques (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Paper and Board Finishes (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Paper_and_Board_Finishes_Q&A.pdf" },
    { question: "Paints (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Paints_Q&A.pdf" },
    { question: "Varnishes (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Varnishes_Q&A.pdf" },
    { question: "Sealant (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Sealant_Q&A.pdf" },
    { question: "Preservatives (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Preservatives_Q&A.pdf" },
    { question: "Anodising (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Anodising_Q&A.pdf" },
    { question: "Electro-Plating (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Electro_Plating_Q&A.pdf" },
    { question: "Powder Coating (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Powder_Coating_Q&A.pdf" },
    { question: "Oil Coating (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Oil_Coating_Q&A.pdf" },
    { question: "Galvanisation (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Galvanisation_Q&A.pdf" },
    { question: "Cathodic Protection (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Cathodic_Protection_Q&A.pdf" },
    { question: "Paper Laminating (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Paper_Laminating_Q&A.pdf" },
    { question: "Varnishing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Varnishing_Q&A.pdf" },
    { question: "Hot Foil Blocking (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Hot_Foil_Blocking_Q&A.pdf" },
    { question: "Embossing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Embossing_Q&A.pdf" },
    //Finishing techniques^^^
    { question: "Hardening and Tempering (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Heat treatments (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Case Hardening (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Annealing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Normalising (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    //Heat treatments
    { question: "Adhesives (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Mechanical joining (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Heat (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Jointing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Traditional Wood Joints (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Knock-down Fittings (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Wood Screws (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Coach Bolt (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Oxy Acetylene Welding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "MIG Welding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Brazing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Hard Soldering (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Soft Soldering (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Joining techniques (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    //Joining techniques^^
    { question: "Lamination (Wood) (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Lamination_Q&A.pdf" },
    //Lamination^^
    { question: "Vertical Milling (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Milling (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Horizontal Milling (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Routing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Drilling (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Turning (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Stamping (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Pressing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Machining (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    //Machining^^
    { question: "Blow Moulding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Moulding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Polymer Moulding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Injection Moulding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Vacuum Forming (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Extrusion (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Rotational Moulding (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    //Moulding^^
    { question: "Offset Lithography (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Printing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Flexography (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Printing methods (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Screen Printing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Gravure Printing (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    //Printing^^
    { question: "CAD software (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "3D modelling (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Wire frame models (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Surface modelling (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Finite Element Analysis (FEA) (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Computational fluid dynamics (CFD) (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    //CAD^^


    { question: "Marking Out Techniques (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Marking_out_Q&A.pdf" },
    //Marking Out Techniques^^

    { question: "Specialist Marking Tools (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Specialist_marking_tools_Q&A.pdf" },
    { question: "Jigs (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Specialist_marking_tools_Q&A.pdf" },
    { question: "Fixtures (Edexcel A-Level)", url: "/documents/Q&A/processes_techniques_special_tools_exercises/Specialist_marking_tools_Q&A.pdf" },
    //Specialist Marking Tools^^



    { question: "CAM software (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CNC (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CAM machines (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CNC machines (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "Rapid prototyping (3D printing) (Edexcel A-Level)", url: "/documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    //CAM^^
    { question: "User values (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User needs (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User wants (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Purpose (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Functionality (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Innovation (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Authenticity (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User centred design (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    //User centred design^^^
    { question: "Sources and applications of anthropometric data (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Ergonomic factors for a designer to consider (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Ergonomics (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Anthropometrics (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Qualitative (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Quantitative (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Anthropometric data (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "5th percentile (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "95th percentile (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Percentiles (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    //Ergo and anthro
    { question: "Form over function (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Form follows function (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Form (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Function (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    //Form and Function^^^
    { question: "Arts & Crafts (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Art Nouveau (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Bauhaus Modernist (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Art Deco (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Post Modernism (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Streamlining (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Memphis (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "William Morris (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Charles Rennie Mackintosh (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Marianna Brandt (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Eileen Gray (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Philippe Starck (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Raymond Lowey (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Ettore Scotsass (Edexcel A-Level)", url: "/documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    //Design theory
    { question: "Consumer society (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Built in obsolescence (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Computers in the development and manufacture of products (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "CIM systems (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Computer-to-plate technology (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Miniturisation of products and components (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced integrated circuits (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced battery technology (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced liquid crystal displays (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Smart materials and products for innovative applications (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Global marketplace (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Offshore manufacturing (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Multinational companies (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Outsourcing (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Mass production (effects of technological developments) (Edexcel A-Level)", url: "/documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    //Tech dev^^^
    { question: "Safe working practice (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Understanding the need for risk assessments (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Training (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Machine maintenance and guarding (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Extraction systems (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Provision of PPE (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "General safe working practices (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Health and Safety Executive (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "HSE (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Identification of potential hazards (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Identifying the people at risk (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Evaluation of risk (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Risk assessments (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Implement control methods (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Recording and storing of risk assessment documentation (Edexcel A-Level)", url: "/documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    //Safe working^^
    { question: "One-off production (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Batch production (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Mass production (Methods of production) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Continuous production (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Production methods (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    //Methods of production
    { question: "Quality control (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Inspection (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Computer-aided inspection (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Testing/checks (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Reducing cost of testing (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Non-destructive testing (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Destructive testing (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Quality assurance (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Total quality management (TQM) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "ISO 9000 (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    //QA & QC
    { question: "Production scheduling and production logistics (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Robotics in production (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Material handling systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Modular/cell production systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "IT systems in production scheduling/logistics (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Computer systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Artificial intelligence (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Robots on fully-automated production and assembly lines/cells (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Material handling machines (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Automated guided vehicles (AGVs) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Automated storage and retrieval systems (ASRS) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Flexible manufacturing systems (FMS) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Functional cells (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Group technology cells (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Product focused cells (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Lean manufacturing using just-in-time (JIT) systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Just-in-time (JIT) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Bought-in parts (Edexcel A-Level)", url: "notes_topics/notes_pages/modern_manufacturing_methods_notes.html#StandardisedParts" },
    { question: "Standardised parts (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Quick response manufacturing (QRM) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Product data management (PDM) (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Enterprise resource planning (ERP) systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Concurrent manufacturing (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Modern manufacturing methods and systems (Edexcel A-Level)", url: "/documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    //Modern manufacturing methods and systems
    { question: "Material selection (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Manufacture (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Distribution (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Use (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Repair and maintenance (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "End of life (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Product Life Cycle (Environmental) (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    //Product Life Cycle
    { question: "Cost implications to the consumer and manufacturer (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },
    { question: "Sustainability (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },
    { question: "Wider issues of using cleaner technologies (Edexcel A-Level)", url: "/documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },    
    //Wider issues of using cleaner tech
    { question: "Consumer Rights Act (2015) (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    { question: "Sale of Goods Act (1979) (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    { question: "Consumer Rights Legislation (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    //Consumer rights^^^
    { question: "Health and Safety at Work Act (1974) (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    { question: "Health and Safety (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    { question: "Control of Substances Hazardous to Health (COSHH) Regulation (Edexcel A-Level)", url: "/documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    //Health and Safety Laws



    //Market analysis
    { question: "Budgets (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Planning for Production (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Allocation of Employees, Materials, Scale of Production (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Material Costs (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Labour/Wages (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Premises (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Equipment Available for Scale of Production (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Selection of Tools, Machines, and Manufacturing Processes (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    //Modelling the cost of projects^^
    { question: "Patents (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Copyrights (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Design Rights (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Trademarks (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    //Property rights^^
    { question: "British Standards (BSI and Kitemark) (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    { question: "European Standards (CEN and CE) (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    { question: "International Standards (ISO) (Edexcel A-Level)", url: "/documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    //Standards for products^^^
    { question: "Critical Path Analysis (CPA) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    { question: "Scrum (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    { question: "Six Sigma (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    //Project management systems^^^
    { question: "Product Life Cycle (Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Introduction (Product life cycle - Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Growth (Product life cycle - Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Maturity (Product life cycle - Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Decline (Product life cycle - Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Extensions (Product life cycle - Sales) (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    //Product life cycle
    { question: "User centred design (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    { question: "Circular economy (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    { question: "Systems thinking (Edexcel A-Level)", url: "/documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    //Strat, techniques

    { question: "Number, percentages, and percentiles (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Number_Q&A.pdf" },

    { question: "Ratio (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Ratio_Q&A.pdf" },

    { question: "Surface area and Volume (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_SA&Volume_Q&A.pdf" },

    { question: "Trigonometry (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Trig_Q&A.pdf" },
    { question: "Pythagoras (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Trig_Q&A.pdf" },

    { question: "Graphs and Charts (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },
    { question: "Cumulative frequency (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },

    { question: "Coordinates and Geometry (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Coords&Geometry_Q&A.pdf" },

    { question: "Statistics (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Stats_Q&A.pdf" },
    { question: "Probability (Maths) (Edexcel A-Level)", url: "/documents/Q&A/maths_exercises/DT_Maths_Stats_Q&A.pdf" },
    
];

const aqa_gcse_questions = [
    //3.1.1 New and emerging technologies
    { question: "Industry (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_Industry.pdf" },
    { question: "Enterprise (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_enterprise.pdf" },
    { question: "Sustainability (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_sustainability.pdf" },
    { question: "People (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_people.pdf" },
    { question: "Culture (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_culture.pdf" },
    { question: "Society (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_society.pdf" },
    { question: "Environment (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_environment.pdf" },
    { question: "Production techniques and systems (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_production_techniques_and_systems.pdf" },
    { question: "How the critical evaluation of new and emerging technologies informs design decisions (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A1/3.1.1_how_the_critical_evaluation_of_new_and_emerging.pdf" },
    // 3.1.2 Energy generation and storage
    { question: "Energy storage systems including batteries (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A2/3.1.2_energy_storage_systems.pdf" },
    { question: "Fossil fuels (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A2/3.1.2_fossil_fuels.pdf" },
    { question: "Nuclear power (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A2/3.1.2_nuclear_power.pdf" },
    { question: "Renewable energy (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A2/3.1.2_renewable_energy.pdf" },
    //3.1.3 Developments in new materials
    { question: "Composite materials (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A3/3.1.3_composite_materials.pdf" },
    { question: "Modern materials (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A3/3.1.3_modern_materials.pdf" },
    { question: "Smart materials (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A3/3.1.3_smart_materials.pdf" },
    { question: "Technical textiles (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A3/3.1.3_technical_textiles.pdf" },
    //3.1.4 Systems approach to designing
    { question: "Systems approach to designing (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A4/3.1.4_systems_approach_to_designing.pdf" },
    { question: "Inputs (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A4/3.1.4_systems_approach_to_designing.pdf" },
    { question: "Processes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A4/3.1.4_systems_approach_to_designing.pdf" },
    { question: "Outputs (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A4/3.1.4_systems_approach_to_designing.pdf" },
    //3.1.5 Mechanical devices
    { question: "Changing magnitude and direction of force (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A5/3.1.5_changing_magnitude_and_direction_of_force.pdf" },
    { question: "Different types of movement (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A5/3.1.5_different_types_of_movement.pdf" },
    //3.1.6 Materials and their working properties
    { question: "Material properties (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_material_properties.pdf" },
    { question: "Metals and alloys (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_metals_and_alloys.pdf" },
    { question: "Natural and manufactured timbers (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_natural_and_manufactured_timbers.pdf" },
    { question: "Papers and boards (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_papers_and_boards.pdf" },
    { question: "Polymers (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_polymers.pdf" },
    { question: "Textiles (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic A6/3.1.6_textiles.pdf" },
    //3.2.1 Selection of materials or components
    { question: "Selection of materials or components (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section A - Core technical principles/Topic B1/3.2.1_selection_of_materials_or_components.pdf" },
    //3.2.2 Forces and stresses
    { question: "Materials and objects can be manipulated to resist and work with forces and stresses (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B2/3.2.2_materials_and_objects_can_be_manipulated_to_resist_and_work_with_forces_and_stresses.pdf" },
    { question: "Materials can be enhanced to resist and work with forces and stresses to improve functionality (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B2/3.2.2_materials_can_be_enhanced_to_resist_and_work_with_forces_and_stresses_to_improve_functionality.pdf" },
    //3.2.3 Ecological and social footprint
    { question: "Ecological issues in the design and manufacture of products (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B3/3.2.3_ecological_issues_in_the_design_and_manufacture_of_products.pdf" },
    { question: "Social issues in design and manufacture of products (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B3/3.2.3_social_issues_in_design_and_manufacture_of_products.pdf" },
    { question: "The six Rs (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B3/3.2.3_the_six_Rs.pdf" },
    //3.2.4 Sources and origins
    { question: "Sources and origins (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B4/3.2.4_sources_and_origins.pdf" },
    //3.2.5 Using and working with materials
    { question: "How to shape and form using cutting, abrasion and addition (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B5/3.2.5_how_to_shape_and_from_using_cutting_abrasion_and_addition.pdf" },
    { question: "Properties of materials (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B5/3.2.5_properties_of_materials.pdf" },
    { question: "The modification of properties for specific purposes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B5/3.2.5_the_modification_of_properties_for_specific_purposes.pdf" },
    //3.2.6 Stock forms, types and sizes
    { question: "Stock forms, types and sizes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B6/3.2.6_stock_forms_types_and_sizes.pdf" },
    //3.2.7 Scales of production
    { question: "Scales of production (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B7/3.2.7_scales_of_production.pdf" },
    //3.2.8 Specialist techniques and processes
    { question: "Commercial processes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B8/3.2.8_commercial_processes.pdf" },
    { question: "How materials are cut, shaped and formed to a tolerance (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B8/3.2.8_how_materials_are_cut_shaped_and_formed_to_a_tolerance.pdf" },
    { question: "Quality control (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B8/3.2.8_quality_control.pdf" },
    { question: "The use of production aids (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B8/3.2.8_the_use_of_production_ai4s.pdf" },
    { question: "Tools, equipment and processes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B8/3.2.8_tools_equipment_and_processes.pdf" },
    //3.2.9 Surface treatments and fnishes
    { question: "Surface treatments and fnishes (AQA GCSE)", url: "/Questions (Word docs)/AQA GCSE Questions/Section B - Specialist technical principles/Topic B9/3.2.9_surface_treatments_and_finishes.pdf" },
];


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
    //3.1.3 Enhancement of materials
    { question: "Polymer enhancement (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A3/3.1.3_polymer_enhancement.pdf" },
    { question: "Wood enhancement (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A3/3.1.3_wood_enhancement.pdf" },
    { question: "Metal enhancement  (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A3/3.1.3_metal_enhancement.pdf" },
    //3.1.4 Forming, redistribution and addition processes
    { question: "Paper and board forming processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_paper_and_board_forming_processes.pdf" },
    { question: "Polymer processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_polymer_processes.pdf" },
    { question: "Metal processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_metal_processes.pdf" },
    { question: "Wood processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_wood_processes.pdf" },
    { question: "The use of adhesives and fixings (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_the_use_of_adhesives_and_fixings.pdf" },
    { question: "Jigs and fixtures (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A4/3.1.4_jigs_and_fixtures.pdf" },
    //3.1.5 The use of finishes
    { question: "Paper and board finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_paper_and_board_finishing.pdf" },
    { question: "Paper and board printing processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_paper_and_board_printing_processes.pdf" },
    { question: "Polymer finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_polymer_finishing.pdf" },
    { question: "Metal finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_metal_finishing.pdf" },
    { question: "Wood finishing (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A5/3.1.5_wood_finishing.pdf" },
    //3.1.6 Modern industrial and commercial practice
    { question: "Scales of production (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A6/3.1.6_scales_of_production.pdf" },
    { question: "Efficient use of materials (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A6/3.1.6_efficient_use_of_materials.pdf" },
    { question: "The use of computer systems (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A6/3.1.6_the_use_of_computer_systems.pdf" },
    { question: "Sub-assembly (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A6/3.1.6_sub_assembly.pdf" },
    //3.1.7 Digital design and manufacture
    { question: "Computer aided design (CAD) (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    { question: "Computer aided manufacture (CAM) (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    { question: "Virtual modelling (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    { question: "Rapid prototyping processes (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    { question: "Electronic data interchange (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    { question: "Production, planning and control (PPC) networking (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A7/.pdf" },
    //3.1.8 The requirements for product design and development
    { question: "Product development and improvement (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A8/3.1.8_product_development_and_improvement.pdf" },
    { question: "Inclusive design (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A8/3.1.8_inclusive_design.pdf" },
    //3.1.9 Health and safety
    { question: "Safe working practices (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A9/3.1.9_safe_working_practices.pdf" },
    { question: "Safety in products and services to the custome (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A9/3.1.9_safety_in_products_and_services_to_the_customer.pdf" },
    //3.1.10 Protecting designs and intellectual property
    { question: "Protecting designs and intellectual property (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A10/3.1.10_protecting_designs_and_intellectual_property.pdf" }, 
    //3.1.11 Design for manufacturing, maintenance, repair and disposal
    { question: "Manufacture, repair, maintenance and disposal (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_manufacture_repair_maintenance_and_disposal.pdf" },
    { question: "Ease of manufacture (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_ease_of_manufacture.pdf" },
    { question: "Disassembly (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A11/3.1.11_disassembly.pdf" },
    //3.1.12 Feasibility studies
    { question: "Feasibility studies (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A12/3.1.12_feasibility_studies.pdf" },
    //3.1.13 Enterprise and marketing in the development of products
    { question: "Enterprise and marketing in the development of products (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A13/3.1.13_enterprise_and_marketing_in_the_development_of_products.pdf" },
    //3.1.14 Design communication
    { question: "Design communication (AQA A-Level)", url: "/Questions (Word docs)/AQA A-Level Questions/Technical Principles/Topic A14/3.1.14_design_communication.pdf" },
    
];

const allQuestions = [
    ...aqa_gcse_questions,
    ...edexcel_alevel_questions,
    ...aqa_alevel_questions
];
    


// Function to search all topics
function searchAll() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (searchInput === '') return;

    const matchedQuestions = allQuestions
        .filter(q => q.question.toLowerCase().includes(searchInput))
        .slice(0, 10); // limit results

    if (matchedQuestions.length > 0) {
        matchedQuestions.forEach(q => {
            const item = document.createElement('li');
            item.textContent = q.question;
            item.classList.add('search-result-item');
            item.dataset.url = q.url;
            resultsContainer.appendChild(item);
        });
    } else {
        resultsContainer.innerHTML = '<li>No matching question found.</li>';
    }
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', searchAll);

document.getElementById('searchResults').addEventListener('click', function (event) {
    const clickedItem = event.target;
    if (clickedItem.classList.contains('search-result-item')) {
        window.location.href = clickedItem.dataset.url;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const topResult = document.querySelector('.search-result-item');
        if (topResult) {
            window.location.href = topResult.dataset.url;
        }
    }
});
