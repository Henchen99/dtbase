// Sample data for questions
const questions = [
    { question: "Woods", url: "../documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Timbers", url: "../documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Hardwoods", url: "../documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Softwoods", url: "../documents/Q&A/Materials/Woods_Q&A.pdf" },
    { question: "Manufactured boards", url: "../documents/Q&A/Materials/Woods_Q&A.pdf" },
    //Woods^^^
    { question: "Metals", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Ferrous Metals", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Non-ferrous Metals", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Alloys", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Mild Steel", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Medium Carbon Steel", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "High carbon steel", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Cast Iron", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Aluminium", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Copper", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Zinc", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Tin", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Stainless Steel", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Duralumin", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    { question: "Brass", url: "../documents/Q&A/Materials/Metals_Q&A.pdf" },
    // Metals^^^
    { question: 'Plastics', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polymers', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Thermoplastics', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Thermosetting Plastics', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Elastomers', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Acrylic', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyethylene', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyethylene terephthalate', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyvinyl Chloride', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polypropylene', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'ABS', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Epoxy resin', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Urea formaldehyde', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Polyester resin', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    { question: 'Rubber', url: '../documents/Q&A/Materials/Polymers_Q&A.pdf' },
    //Polymers^^
    { question: 'Composites', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Fibre-based composites', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Particle-based composites', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Sheet-based composites', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Composite: a mixture of two or more materials combined to improve the materials properties (e.g. corrosion resistance)', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Carbon fibre', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'GRP', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Reinforced concrete', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'MDF composite', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Hardboard', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Chipboard', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    { question: 'Plywood composite', url: '../documents/Q&A/Materials/Composites_Q&A.pdf' },
    //Composites^^
    { question: 'Papers and Boards', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Drawing papers', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Commerical printing papers', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Boards', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'How papers/boards are made', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Measuring papers and boards', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Layout paper', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Tracing paper', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Copier paper', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Bond paper', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Coated paper', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Mounting board', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Corrugated board', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Foam board', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Folding box board', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Foil-lined board', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Papers', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    { question: 'Boards', url: '../documents/Q&A/Materials/papers_and_boards_Q&A.pdf' },
    //Papers and boards^^
    { question: 'Textiles', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Natural fibres', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Manmade fibres', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Textile treatments', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Cotton', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Linen', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Wool', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Nylon', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polypropylene fibres', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polyester fibres', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Flame resistant', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'Polytetrafluoroethylene (PTFE)', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    { question: 'PTFE', url: '../documents/Q&A/Materials/Textiles_Q&A.pdf' },
    //Textiles
    { question: 'Smart Materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'SMA', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Shape memory alloy', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Reactive glass', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Phosphorescent pigment', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Electroluminescent wire', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Photo-chromic materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Thermo-chromic materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Photochromic materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Thermochromic materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Photochromic', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Thermochromic', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Quantum tunnelling composites', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'QTC', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    { question: 'Piezoelectric materials', url: '../documents/Q&A/Materials/smart_materials_Q&A.pdf' },
    //Smart materials
    { question: 'Modern Materials', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Thermo-ceramics', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Liquid crystal displays', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'LCD', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Glulam', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Kevlar', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Precious metal clay', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'PMC', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Nanomaterials', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'High density modelling foam', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    { question: 'Polymorph', url: '../documents/Q&A/Materials/Modern_materials_Q&A.pdf' },
    //Modern materials
    { question: 'Performance Characteristics Of Materials', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Physical characteristics', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Mechanical properties', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Physical properties', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Mechanical characteristics', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Electrical conductivity', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Thermal conductivity', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Biodegradability', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Chemical resistance', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Corrosion resistance', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Strength', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Elasticity', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Placticity', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Malleability', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Ductility', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Hardness', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Toughness', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    { question: 'Durability', url: '../documents/Q&A/pcom_exercises/Performance_characteristics_of_materials_Q&A.pdf' },
    //Section 2^^
    { question: 'Alloying', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Alloys', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Steel', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Brass', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Bronze', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    { question: 'Duralumin', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Alloying_Q&A.pdf' },
    //Alloying^^
    { question: 'Sand casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Investment casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Die casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Resin casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Plaster of Paris casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    { question: 'Casting', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Casting_Q&A.pdf' },
    //Casting^^^
    { question: 'Design decisions', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Pictorial drawings', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Working drawings', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Nets', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Translation', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    { question: 'Report writing', url: '../documents/Q&A/processes_techniques_special_tools_exercises/Design_decisions_Q&A.pdf' },
    //Design decisions^^^
    { question: "Finishes", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Finishing techniques", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Paper and Board Finishes", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Paints", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Varnishes", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Sealant", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Preservatives", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Anodising", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Electro-Plating", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Powder Coating", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Oil Coating", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Galvanisation", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Cathodic Protection", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Paper Laminating", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Varnishing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Hot Foil Blocking", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    { question: "Embossing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Finishing_techniques_Q&A.pdf" },
    //Finishing techniques
    { question: "Hardening and Tempering", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Hardening", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Heat treatments", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Tempering", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Case Hardening", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Annealing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    { question: "Normalising", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Heat_treatments_Q&A.pdf" },
    //Heat treatments
    { question: "Adhesives", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Mechanical joining", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Heat", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Jointing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Traditional Wood Joints", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Knock-down Fittings", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Wood Screws", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Coach Bolt", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Oxy Acetylene Welding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "MIG Welding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Brazing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Hard Soldering", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Soft Soldering", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    { question: "Joining techniques", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Joining_techniques_Q&A.pdf" },
    //Joining techniques^^
    { question: "Lamination", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Lamination_Q&A.pdf" },
    { question: "Wood Lamination", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Lamination_Q&A.pdf" },
    //Lamination^^
    { question: "Vertical Milling", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Milling", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Horizontal Milling", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Routing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Drilling", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Turning", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Stamping", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Pressing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    { question: "Machining", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Machining_Q&A.pdf" },
    //Machining^^
    { question: "Blow Moulding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Moulding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Polymer Moulding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Injection Moulding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Vacuum Forming", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Extrusion", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    { question: "Rotational Moulding", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Moulding_Q&A.pdf" },
    //Moulding^^
    { question: "Offset Lithography", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Printing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Flexography", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Printing methods", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Screen Printing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    { question: "Gravure Printing", url: "../documents/Q&A/processes_techniques_special_tools_exercises/Printing_Q&A.pdf" },
    //Printing^^
    { question: "CAD software", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "CAD", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "3D modelling", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Wire frame models", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Surface modelling", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Finite Element Analysis", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "FEA", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "CFD", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    { question: "Computational fluid dynamics", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_design_Q&A.pdf" },
    //CAD^^
    { question: "CAM software", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CAM", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CNC", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CAM machines", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "CNC machines", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    { question: "Rapid prototyping (3D printing)", url: "../documents/Q&A/digital_tech_exercises/Computer_aided_manufacture_Q&A.pdf" },
    //CAM^^
    { question: "User values", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User needs", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User wants", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Purpose", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Functionality", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Innovation", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "Authenticity", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    { question: "User centred design", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/User_centred_design_Q&A.pdf" },
    //User centred design^^^
    { question: "Sources and applications of anthropometric data", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Ergonomic factors for a designer to consider", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Ergonomics", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Anthropometrics", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Qualitative", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Quantitative", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Anthropometric data", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "5th percentile", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "95th percentile", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    { question: "Percentiles", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_on_design_of_anthropometrics_and_ergonomics_Q&A.pdf" },
    //Ergo and anthro
    { question: "Form over function", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Form follows function", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Form", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    { question: "Function", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Influence_of_aesthetics_Q&A.pdf" },
    //Form and Function^^^
    { question: "Arts & Crafts", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Art Nouveau", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Bauhaus Modernist", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Art Deco", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Post Modernism", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Streamlining", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Memphis", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "William Morris", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Charles Rennie Mackintosh", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Marianna Brandt", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Eileen Gray", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Philippe Starck", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Raymond Lowey", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    { question: "Ettore Scotsass", url: "../documents/Q&A/factors_influencing_development_of_products_exercises/Design_influence_methods_figures_Q&A.pdf" },
    //Design theory
    { question: "Consumer society", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Built in obsolescence", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Computers in the development and manufacture of products", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "CIM systems", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Computer-to-plate technology", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Miniturisation of products and components", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced integrated circuits", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced battery technology", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Advanced liquid crystal displays", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Smart materials and products for innovative applications", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Global marketplace", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Offshore manufacturing", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Multinational companies", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Outsourcing", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    { question: "Mass production (effects of technological developments)", url: "../documents/Q&A/effects_of_tech_dev_exercises/Effects_tech_developements_Q&A.pdf" },
    //Tech dev^^^
    { question: "Safe working practice", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Understanding the need for risk assessments", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Training", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Machine maintenance and guarding", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Extraction systems", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Provision of PPE", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "General safe working practices", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Health and Safety Executive", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "HSE", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Identification of potential hazards", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Identifying the people at risk", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Evaluation of risk", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Risk assessments", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Implement control methods", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    { question: "Recording and storing of risk assessment documentation", url: "../documents/Q&A/safe_working_practices_exercises/Adopting_safe_working_practices_Q&A.pdf" },
    //Safe working^^
    { question: "One-off production", url: "../documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Batch production", url: "../documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Mass production (Methods of production)", url: "../documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Continuous production", url: "../documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    { question: "Production methods", url: "../documents/Q&A/features_of_manufacturing_industries/Methods%20of%20production_Q&A.pdf" },
    //Methods of production
    { question: "Quality control", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Inspection", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Computer-aided inspection", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Testing/checks", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Reducing cost of testing", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Non-destructive testing", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Destructive testing", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Quality assurance", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "Total quality management (TQM)", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    { question: "ISO 9000", url: "../documents/Q&A/features_of_manufacturing_industries/Quality%20Monitoring%20Systems_Q&A.pdf" },
    //QA & QC
    { question: "Production scheduling and production logistics", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Robotics in production", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Material handling systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Modular/cell production systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "IT systems in production scheduling/logistics", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Computer systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Artificial intelligence", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Robots on fully-automated production and assembly lines/cells", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Material handling machines", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Automated guided vehicles (AGVs)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Automated storage and retrieval systems (ASRS)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Flexible manufacturing systems (FMS)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Functional cells", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Group technology cells", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Product focused cells", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Lean manufacturing using just-in-time (JIT) systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Just-in-time (JIT)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Standardised parts", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Quick response manufacturing (QRM)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Product data management (PDM)", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Enterprise resource planning (ERP) systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Concurrent manufacturing", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    { question: "Modern manufacturing methods and systems", url: "../documents/Q&A/features_of_manufacturing_industries/Modern%20manufacturing%20methods%20and%20systems_Q&A.pdf" },
    //Modern manufacturing methods and systems
    { question: "Material selection", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Manufacture", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Distribution", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Use", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Repair and maintenance", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "End of life", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    { question: "Product Life Cycle", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/products_life_cycle_Q&A.pdf" },
    //Product Life Cycle
    { question: "Cost implications to the consumer and manufacturer", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },
    { question: "Sustainability", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },
    { question: "Wider issues of using cleaner technologies", url: "../documents/Q&A/design_for_maintenance_and_cleaner_environment_exercises/Wider_issues_of_using_cleaner_technology_Q&A.pdf" },    
    //Wider issues of using cleaner tech
    { question: "Consumer Rights Act (2015)", url: "../documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    { question: "Sale of Goods Act (1979)", url: "../documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    { question: "Consumer Rights Legislation", url: "../documents/Q&A/current_legislation_exercises/Consumer_rights_legislation_Q&A.pdf" },
    //Consumer rights^^^
    { question: "Health and Safety at Work Act (1974)", url: "../documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    { question: "Health and Safety", url: "../documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    { question: "Control of Substances Hazardous to Health (COSHH) Regulation", url: "../documents/Q&A/current_legislation_exercises/Health_and_safety_Q&A.pdf" },
    //Health and Safety Laws



    //Market analysis
    { question: "Budgets", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Planning for Production", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Allocation of Employees, Materials, Scale of Production", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Material Costs", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Labour/Wages", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Premises", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Equipment Available for Scale of Production", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    { question: "Selection of Tools, Machines, and Manufacturing Processes", url: "../documents/Q&A/information_handling_planning_exercises/modelling_the_costing_of_projects_to_achieve_optimum_outcome_Q&A.pdf" },
    //Modelling the cost of projects^^
    { question: "Patents", url: "../documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Copyrights", url: "../documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Design Rights", url: "../documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    { question: "Trademarks", url: "../documents/Q&A/information_handling_planning_exercises/Intellectual_Property_rights_Q&A.pdf" },
    //Property rights^^
    { question: "British Standards (BSI and Kitemark)", url: "../documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    { question: "European Standards (CEN and CE)", url: "../documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    { question: "International Standards (ISO)", url: "../documents/Q&A/information_handling_planning_exercises/Standards_of_products_Q&A.pdf" },
    //Standards for products^^^
    { question: "Critical Path Analysis (CPA)", url: "../documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    { question: "Scrum", url: "../documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    { question: "Six Sigma", url: "../documents/Q&A/further_processes_techniques_exercises/Project_management_Q&A.pdf" },
    //Project management systems^^^
    { question: "Product life cycle", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Introduction (Product life cycle)", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Growth (Product life cycle)", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Maturity (Product life cycle)", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Decline (Product life cycle)", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    { question: "Extensions (Product life cycle)", url: "../documents/Q&A/further_processes_techniques_exercises/Stages_of_products_life_cycle_Q&A.pdf" },
    //Product life cycle
    { question: "User centred design", url: "../documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    { question: "Circular economy", url: "../documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    { question: "Systems thinking", url: "../documents/Q&A/further_processes_techniques_exercises/Strategies_techniques_and_approaches_to_explore_and_create_design_idea_Q&A.pdf" },
    //Strat, techniques

    { question: "Number, percentages, and percentiles (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Number_Q&A.pdf" },
    { question: "Number (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Number_Q&A.pdf" },
    { question: "Percentages (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Number_Q&A.pdf" },
    { question: "Percentiles (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Number_Q&A.pdf" },

    { question: "Ratio (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Ratio_Q&A.pdf" },

    { question: "Surface area (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_SA&Volume_Q&A.pdf" },
    { question: "Volume (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_SA&Volume_Q&A.pdf" },
    { question: "Surface area and Volume (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_SA&Volume_Q&A.pdf" },

    { question: "Trigonometry (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Trig_Q&A.pdf" },
    { question: "Pythagoras (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Trig_Q&A.pdf" },

    { question: "Graphs and Charts (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },
    { question: "Charts (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },
    { question: "Graphs (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },
    { question: "Cumulative frequency (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Graphs&Charts_Q&A.pdf" },

    { question: "Coordinates and Geometry (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Coords&Geometry_Q&A.pdf" },
    { question: "Geometry (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Coords&Geometry_Q&A.pdf" },
    { question: "Coordinates (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Coords&Geometry_Q&A.pdf" },

    { question: "Statistics (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Stats_Q&A.pdf" },
    { question: "Probability (Maths)", url: "../documents/Q&A/maths_exercises/DT_Maths_Stats_Q&A.pdf" },
    
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
    const matchedQuestions = questions
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

