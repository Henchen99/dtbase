
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

    { question: "CAD stands for?", options: ["Computing and design", "Computer-aided diagram", "Computer-aided design"], answer: "Computer-aided design" },
    { question: "CAM stands for?", options: ["Computer-aided manufacture", "Computer-aided making", "Computer-aided modelling"], answer: "Computer-aided manufacture" },
    { question: "What is a prototype?", options: ["A scaled-down model of a product", "A non-working model of the product", "A working model of a product made to test before production"], answer: "A working model of a product made to test before production" },
    { question: "What is 3D printing a type of?", options: ["Computer-aided manufacture", "Computer-aided design", "Isometric drawing"], answer: "Computer-aided manufacture" },
    { question: "A schematic diagram is made up of what?", options: ["Vanishing points", "Symbols", "Perspectives"], answer: "Symbols" },
    { question: "What is a vanishing point?", options: ["A coordinate in CAM", "A point on the horizon where all lines meet", "A symbol on a circuit diagram"], answer: "A point on the horizon where all lines meet" },

    { question: "CAD stands for?", options: ["Computing and design", "Computer-aided design", "Computer-aided diagram"], answer: "Computer-aided design" },
    { question: "CAM stands for?", options: ["Computer aided modelling", "Computer aided making", "Computer-aided manufacture"], answer: "Computer-aided manufacture" },
    { question: "What are the advantages of automation?", options: ["Less waste produced and faster running time", "Low set up cost", "Lots of jobs are created"], answer: "Less waste produced and faster running time" },
    { question: "What one of these is an example of CAM?", options: ["Designing on a computer", "Band saw", "3D printing"], answer: "3D printing" },
    { question: "Which of the following statements about 3D printing is True?", options: ["Good for mass production", "Fast printing speed", "Prints are high quality"], answer: "Prints are high quality" },
    { question: "Which of the following is not a CAD software?", options: ["Excel", "Google Sketchup", "Techsoft 2D Design"], answer: "Excel" },

    { question: "What is iterative design?", options: ["A product is never changed throughout the design process", "A product is continually analysed, tested and revisited throughout the design process", "A product is developed once throughout the design process"], answer: "A product is continually analysed, tested and revisited throughout the design process" },
    { question: "What is an advantage of user-centred design?", options: ["The user is put at the centre of design", "The user is consulted at the end of the design", "The user is not consulted during the design process"], answer: "The user is put at the centre of design" },
    { question: "Which of these is not an advantage of collaboration when designing?", options: ["It can help overcome design fixation", "It is a way to take ideas from others", "It is an excellent way of gaining feedback"], answer: "It is a way to take ideas from others" },
    { question: "Why is an analysis of a design context so important?", options: ["So the designer can gain a clear understanding of the design problem", "So the designer can test the models that have been produced", "So the best ideas can be sketched"], answer: "So the designer can gain a clear understanding of the design problem" },
    { question: "Which of the following statements is representative of iterative design?", options: ["A system approach", "A process of continual improvement, of a concept, prototype, design or product, with model making, sketching, client feedback applied when required", "A linear design process, whereby one stage follows another"], answer: "A process of continual improvement, of a concept, prototype, design or product, with model making, sketching, client feedback applied when required" },

    { question: "Ergonomics is the name given to the relationship between a product and its?", options: ["Manufacture", "User", "Packaging"], answer: "User" },
    { question: "Which word is used to describe designing products well so they are easy to use?", options: ["Aesthetics", "Usability", "Function"], answer: "Usability" },
    { question: "What is ergonomics?", options: ["Measurements of the human body", "Data of human height", "The use of anthropometric data"], answer: "The use of anthropometric data" },
    { question: "What percentiles should designers design products for?", options: ["5th to 95th percentile", "5th to 50th percentile", "50th to 95th percentile"], answer: "5th to 95th percentile" },
    { question: "What might happen if ergonomics is not used in design?", options: ["Users will have a poor user experience", "Users might take offence", "Users won’t be able to adapt the user experience"], answer: "Users will have a poor user experience" },
    { question: "Which of these is NOT an inclusive design factor?", options: ["Function", "Cost", "Material choice"], answer: "Cost" },

    { question: "Which word is used to describe designing products well, so they are easy to use?", options: ["Aesthetics", "Function", "Usability"], answer: "Usability" },
    { question: "Which of these does not influence aesthetics?", options: ["Texture", "Convenience", "Colour"], answer: "Convenience" },
    { question: "Why should a designer be mindful of the colours selected for a product?", options: ["Some colour choices may have cultural barriers", "Some colour choices may make the product less flexible", "Some colour choices may stop the product from working correctly"], answer: "Some colour choices may have cultural barriers" },
    { question: "What does aesthetics mean?", options: ["User-centred design", "Measurements of the human body", "The way a product looks and feels"], answer: "The way a product looks and feels" },
    { question: "What does the colour blue universally represent?", options: ["Cold", "Warmth", "Nature"], answer: "Cold" },
    { question: "Aesthetics relates to a product’s?", options: ["Looks", "Cost", "Carbon footprint"], answer: "Looks" },

    { question: "Which one of the following manufacturers initially concentrated on designing and manufacturing ‘metal’ kitchenware?", options: ["Alessi", "Raleigh", "Apple"], answer: "Alessi" },
    { question: "Which one of the following designers designed the London underground map?", options: ["Philippe Starck", "Marcel Breuer", "Harry Beck"], answer: "Harry Beck" },
    { question: "What design movement was Charles Rennie Mackintosh responsible for?", options: ["Art Deco", "Memphis", "Art Nouveau"], answer: "Art Nouveau" },
    { question: "What design movement was Ettore Sottsass responsible for?", options: ["Memphis", "Arts and Crafts", "Bauhaus"], answer: "Memphis" },

    { question: "What is the definition of a smart material?", options: ["A material that has been engineered to have additional properties", "A material whose physical properties change in response to external stimuli", "A material that is available in large sheets"], answer: "A material whose physical properties change in response to external stimuli" },
    { question: "Smart materials have?", options: ["Properties that can significantly change", "Good conducting properties", "Weak covalent bonds"], answer: "Properties that can significantly change" },
    { question: "Which of the following statements is false about mass production?", options: ["Increased sales/profits", "Consumers have less choice", "Cheaper materials can be used"], answer: "Consumers have less choice" },
    { question: "Which of the following statements about technology is false?", options: ["Lithium-ion rechargeable batteries providing a lightweight means of storing a lot of energy resulting in thinner and fuel cells", "Computers have resulted in slow-turn around jobs", "CIM systems incorporating CAD and CAM used in modern manufacturing"], answer: "Computers have resulted in slow-turn around jobs" },

    { question: "Which piece of safety equipment should be worn when using a pillar-drilling machine?", options: ["Goggles", "Heat protective glove", "Ear defenders"], answer: "Goggles" },
    { question: "Which statement about hazards and risks is correct?", options: ["A hazard is a potential problem. A risk is the likelihood that the problem will occur.", "A risk is a potential problem. A hazard is the likelihood that the problem will occur.", "A hazard and a risk are exactly the same thing."], answer: "A hazard is a potential problem. A risk is the likelihood that the problem will occur." },
    { question: "What kind of substance should always be heated in a water bath, rather than by a Bunsen burner?", options: ["A process whereby paint is sprayed onto the surface of a material", "A process that creates a long-lasting protective coating on a metal", "A flammable substance"], answer: "A flammable substance" },
    { question: "When would wearing protective gloves and eye protection be most appropriate?", options: ["When using corrosive substances", "When using oxidising substances", "When using flammable substances"], answer: "When using corrosive substances" },

    { question: "Why might someone choose to use one-off manufacturing to make a product?", options: ["Product made to fit user", "Quicker to produce", "Less labour intensive"], answer: "Product made to fit user" },
    { question: "What is one-off manufacturing used to make?", options: ["Books", "Sports cars", "Bespoke furniture"], answer: "Bespoke furniture" },
    { question: "Which scale of production method can adjust to market trends?", options: ["Batch", "Mass", "Continuous"], answer: "Batch" },
    { question: "Which scale of production usually has the lowest unit cost?", options: ["Batch", "Continuous", "Mass"], answer: "Mass" },
    { question: "What is continuous production used to manufacture?", options: ["Plastic bottles", "Cars", "Newspapers"], answer: "Plastic bottles" },
    { question: "What 2 scales of production have a high initial set-up cost?", options: ["Batch, Continuous", "One-off, Mass", "Mass, Continuous"], answer: "Mass, Continuous" },
    { question: "What is an advantage of using mass production?", options: ["Can respond to market change", "Less labour costs", "Can be made to personal specifications"], answer: "Less labour costs" },
    { question: "Which scale of production is used to print newspapers?", options: ["Batch", "Mass", "Continuous"], answer: "Continuous" },

    { question: "What is not part of quality control?", options: ["Checking for accuracy", "Checking design against British standards", "Checking for safety"], answer: "Checking design against British standards" },
    { question: "Who doesn’t conduct quality assurance checks?", options: ["FSC", "BSI", "ISO"], answer: "FSC" },
    { question: "What quality monitoring system can be described as reactive?", options: ["Quality control", "Quality assurance"], answer: "Quality control" },
    { question: "What quality monitoring system is used to find defects?", options: ["Quality control", "Quality assurance"], answer: "Quality control" },
    { question: "What can excessively tight tolerances lead to?", options: ["Increased costs", "Having to test each item", "Reduced item rejection"], answer: "Increased costs" },
    { question: "What is not a disadvantage of quality control?", options: ["Can be expensive", "Can slow down production", "Increases cost in development of product"], answer: "Increases cost in development of product" },
    { question: "What is not an advantage of TQM?", options: ["Shorter production times", "Reduces development costs", "Improves business reputation"], answer: "Shorter production times" },
    { question: "What is not a part of TQM?", options: ["Integrated system", "Total employee involvement", "Good design integration"], answer: "Good design integration" },

    { question: "What is a NOT a benefit of a robust IT system in production logistics?", options: ["Monitor progress easily", "Easily access information", "Easy to use"], answer: "Easy to use" },
    { question: "What is NOT a way AGV’s are guided?", options: ["Through remote control", "Through laser guidance", "Through radio wire guidance"], answer: "Through remote control" },
    { question: "Why might a company buy in standardised parts?", options: ["Readily available", "More reliable", "More quality control"], answer: "Readily available" },
    { question: "What is a disadvantage of using robots in production?", options: ["Not as safe as human workers", "Not as flexible as humans", "Inexpensive set up costs"], answer: "Not as flexible as humans" },
    { question: "Why might a manufacturer choose a robot over a human worker?", options: ["Able to repeat repetitive tasks", "Can perform multiple roles", "Cheap to maintain"], answer: "Able to repeat repetitive tasks" },
    { question: "What does CNC stand for?", options: ["Computer Numerical Coordinates", "Computer Numerical Control", "Computer Numerical Coaxial"], answer: "Computer Numerical Control" },
    { question: "What is not an area where AGVs can be used?", options: ["Pallet trucks", "Assembly line", "Trailer unloading"], answer: "Trailer unloading" },
    { question: "Why might a manufacturer choose a human over ASRS?", options: ["Humans can spot faulty parts", "Humans are cheaper", "Humans are safer"], answer: "Humans can spot faulty parts" },

    { question: "Which of the following has a positive impact on the environment?", options: ["Inefficient work practices", "Pollution", "Reducing waste during manufacture"], answer: "Reducing waste during manufacture" },
    { question: "What type of energy is sourced from plants?", options: ["Biomass", "Tidal", "Wind"], answer: "Biomass" },
    { question: "Which one of the following vehicles would be most environmentally friendly when transporting raw material?", options: ["Electric truck", "Plane", "Cargo boat"], answer: "Electric truck" },
    { question: "The definition of ‘product miles’ is which of the following?", options: ["How far the product can go before it breaks / is thrown away", "The total distance produce is transported from the place of production to the place of use", "The total distance the user has to travel to buy the product"], answer: "The total distance produce is transported from the place of production to the place of use" },
    { question: "Which one of the following will not help during the ‘End of life’ process?", options: ["Design for disassembly", "Labelling of materials", "Using permanent joining techniques in design"], answer: "Using permanent joining techniques in design" },
    { question: "Which one of the following will not help reduce energy consumption during the manufacturing process?", options: ["Simplification of processes", "Achieving optimal use of materials", "Using biodegradable materials"], answer: "Using biodegradable materials" },
    { question: "Energy efficiency labels follow which rating system?", options: ["A – G", "1 – 10", "1* – 5*"], answer: "A – G" },
    { question: "Disposal to landfill can cause which of the following?", options: ["Groundwater pollution", "Improved soil fertility", "Improved air quality in the surrounding area"], answer: "Groundwater pollution" },

    { question: "Which one of the following is a biodegradable material?", options: ["Silk", "Polythene", "Nylon"], answer: "Silk" },
    { question: "Which one of the following is a form of renewable energy?", options: ["Coal", "Biomass", "Oil"], answer: "Biomass" },
    { question: "Which of the following statements is true?", options: ["Glass is biodegradable", "All hardwoods come from sustainable sources", "Plywood can be made from sustainable raw materials"], answer: "Plywood can be made from sustainable raw materials" },
    { question: "How could you design a product to improve its carbon footprint?", options: ["Source materials locally", "Order parts from abroad", "Use non-biodegradable materials"], answer: "Source materials locally" },
    { question: "What does fair trade mean?", options: ["It helps ensure farmers and workers are fairly paid", "It helps ensure that products are made from renewable sources", "The item contains no animal products"], answer: "It helps ensure farmers and workers are fairly paid" },

    { question: "Which of the following is not one of the principles of the Consumer Rights Act (2015)?", options: ["The product must be as described", "The product must be of satisfactory quality", "The product should be fit for purpose"], answer: "The product should be fit for purpose" },
    { question: "Which of the following is an example of an increase in staff wage costs due to consumer legislation?", options: ["Additional health and safety equipment required for new staff", "Additional payments made to staff pension schemes", "Additional staff required to carry out quality control tests on a new product"], answer: "Additional staff required to carry out quality control tests on a new product" },
    { question: "Which of the following describes a situation where a business is not complying with the Consumer Rights Act (2015)?", options: ["A showerproof coat is sold for a lower price than a waterproof coat", "A waterproof mascara smudges when worn in the rain", "A tent described as being waterproof does not let any water in"], answer: "A waterproof mascara smudges when worn in the rain" },
    { question: "Which of the following is a reason for a business to comply with consumer legislation?", options: ["It will be less likely to receive returned goods and complaints from customers", "It will be less likely to gain a good reputation", "It will be more likely to face legal proceedings"], answer: "It will be less likely to receive returned goods and complaints from customers" },

    { question: "Which of these is NOT an example of personal protective equipment (PPE)?", options: ["Goggles", "Clamps", "Chainmail gloves"], answer: "Clamps" },
    { question: "Which of these is required by law to ensure safe use of tools, equipment and materials?", options: ["Risk assessment", "COSHH report", "PAT testing"], answer: "Risk assessment" },
    { question: "Which one of the following statements is true?", options: ["Safety guards on workshop machinery are not needed when an adult is present", "Quality Control only occurs when the production process is complete", "COSHH regulations control the level of exposure of workers to softwood dust"], answer: "COSHH regulations control the level of exposure of workers to softwood dust" },
    { question: "Which one of the following statements is false?", options: ["Manufacturers must follow COSHH regulations", "COSHH stands for Control of Substances Harmful to Health", "Safety sign regulations require employees to display an appropriate safety sign wherever a significant risk cannot be avoided or reduced"], answer: "Safety sign regulations require employees to display an appropriate safety sign wherever a significant risk cannot be avoided or reduced" },

    { question: "What are two sources of anthropometric data?", options: ["BSI, DTI", "WHO, ASE", "DTI, BSL"], answer: "BSI, DTI" },
    { question: "Which of the following is a source of secondary data?", options: ["Focus group", "Survey", "Research paper"], answer: "Research paper" },
    { question: "A method of raising brand awareness by using social media and website adverts is called what?", options: ["Innovation", "Virtual retailing", "Virtual marketing"], answer: "Virtual marketing" },
    { question: "When designers, engineers, sales and legal teams all work together this is called", options: ["User centred design", "Cooperation", "Systems thinking"], answer: "Systems thinking" },

    { question: "What is a cost that is not accounted for when budgeting a project?", options: ["Staff hours", "Machinery costs", "Unplanned expenses"], answer: "Unplanned expenses" },
    { question: "When planning for a project budget why is it important to know the scale of production being used?", options: ["So the cost of manufacturing can be estimated", "So the machinery needed can be ordered in time", "So the timescale of the project is known"], answer: "So the cost of manufacturing can be estimated" },
    { question: "Which scale of production will have the highest set up costs?", options: ["One-off production", "Batch production", "Mass production"], answer: "One-off production" },
    { question: "Modelling the cost of projects such as car manufacturing can be done completely by CAD software", options: ["True", "False"], answer: "True" },

    { question: "What government office grants Patents?", options: ["Intellectual property office", "International property office", "Intellectual property organisation"], answer: "Intellectual property office" },
    { question: "How long does a patent last?", options: ["30 years", "20 years", "70 years"], answer: "20 years" },
    { question: "For your work to be covered by copyright it needs to be what by definition?", options: ["Original and Tangible", "New and Original", "Physical and Original"], answer: "Original and Tangible" },
    { question: "Why might someone apply for a patent?", options: ["Add value to the business", "They think their idea already exists", "To secure rights to an existing solution"], answer: "Add value to the business" },
    { question: "How long do copyrights last after the death of the creator?", options: ["100 years", "70 years", "Forever"], answer: "70 years" },
    { question: "Design rights cover what?", options: ["How the product looks", "How the product functions", "How the product is made"], answer: "How the product looks" },
    { question: "How often do trademarks need to be renewed?", options: ["Every 5 years", "Every 20 years", "Every 10 years"], answer: "Every 10 years" },
    { question: "Can a trademark incorporate words?", options: ["Yes", "No"], answer: "Yes" },

    { question: "What does the CE mark show?", options: ["The product has met EU safety, health or environmental standards and it complies with EU legislation", "The product has been checked by British Standards Institution and it meets their minimum standards of safety and quality", "The product has met the Fairtrade standards of a fairer deal for workers in developing countries"], answer: "The product has met EU safety, health or environmental standards and it complies with EU legislation" },
    { question: "What product does the lion mark standardise?", options: ["Kitchen appliances", "Electrical equipment", "Toys"], answer: "Toys" },

    { question: "What happens to a product when it reaches the maturity stage of the product life cycle?", options: ["Sales revenue grows over time", "Sales revenue declines over time", "Sales revenue is constant over time"], answer: "Sales revenue is constant over time" },
    { question: "Which of these statements about product life cycles is true?", options: ["The length of every product’s life cycle is the same", "The length of each phase in a product’s life cycle can be different", "A product will be withdrawn once it enters maturity"], answer: "The length of each phase in a product’s life cycle can be different" },
    { question: "In which phase of the product life cycle is a product launched?", options: ["Growth", "Maturity", "Introduction"], answer: "Introduction" },
    { question: "What is the purpose of a product extension strategy?", options: ["To lengthen the life cycle of a product", "To prevent a product being successful", "To lengthen the introduction phase of a product’s life cycle"], answer: "To lengthen the life cycle of a product" },
    { question: "Which of these extension strategies would be most likely to succeed in extending the life cycle of a breakfast cereal?", options: ["Making the breakfast cereal available in a new flavour", "Increasing advertising of the breakfast cereal", "Increasing the price of the breakfast cereal"], answer: "Making the breakfast cereal available in a new flavour" },
    { question: "Which of the following statements is true?", options: ["Disposal is the final step in a product life cycle", "Using cheapest material will always extend a product life", "Maturity is when the sales start to decline"], answer: "Maturity is when the sales start to decline" },

    { question: "What is iterative design?", options: ["A product is never changed throughout the design process", "A product is continually analysed, tested and revisited throughout the design process", "A product is developed once throughout the design process"], answer: "A product is continually analysed, tested and revisited throughout the design process" },
    { question: "What is an advantage of user-centred design?", options: ["The user is put at the centre of design", "The user is consulted at the end of the design", "The user is not consulted during the design process"], answer: "The user is put at the centre of design" },
    { question: "Which of these is not an advantage of collaboration when designing?", options: ["It is an excellent way of gaining feedback", "It is a way to take ideas from others", "It can help overcome design fixation"], answer: "It is a way to take ideas from others" },
    { question: "What is ‘Right to repair’?", options: ["Law for manufacturers to make their products more reliable", "Law to make spare parts expensive", "Law to protect you from policies that make it difficult/expensive to repair products on your own"], answer: "Law to protect you from policies that make it difficult/expensive to repair products on your own" },
    { question: "Which box one of the following is a feature of a product designed for maintenance?", options: ["Biodegradable materials", "Planned obsolescence", "Repairable components"], answer: "Repairable components" },
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
