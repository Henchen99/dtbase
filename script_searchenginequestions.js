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
    const matchedQuestions = questions.filter(question =>
        question.question.toLowerCase().includes(searchInput)
    );

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
