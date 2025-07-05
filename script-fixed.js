// Simplified Quiz Application JavaScript
class QuizApp {
    constructor() {
        this.currentModule = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.selectedQuizLength = 10;
        
        console.log('QuizApp başlatılıyor...');
        this.initializeEventListeners();
        this.showScreen('module-selection');
    }
    
    initializeEventListeners() {
        console.log('Event listener\'lar ekleniyor...');
        
        // Modül kartlarına tıklama - basit yöntem
        document.addEventListener('click', (e) => {
            const moduleCard = e.target.closest('.module-card');
            if (moduleCard) {
                const module = moduleCard.dataset.module;
                console.log('Modül seçildi:', module);
                this.selectModule(module);
                return;
            }
            
            const lengthCard = e.target.closest('.length-card');
            if (lengthCard) {
                const length = parseInt(lengthCard.dataset.length);
                console.log('Uzunluk seçildi:', length);
                this.selectQuizLength(length);
                return;
            }
            
            // Buton tıklamaları
            if (e.target.id === 'back-to-modules') {
                console.log('Modüllere geri dön');
                this.showScreen('module-selection');
            }
            
            if (e.target.id === 'next-question') {
                console.log('Sonraki soru');
                this.nextQuestion();
            }
            
            if (e.target.id === 'quit-quiz') {
                console.log('Quiz\'den çık');
                this.quitQuiz();
            }
            
            if (e.target.id === 'retake-quiz') {
                console.log('Quiz\'i tekrarla');
                this.retakeQuiz();
            }
            
            if (e.target.id === 'new-module') {
                console.log('Yeni modül');
                this.showScreen('module-selection');
            }
            
            // Seçenek tıklamaları
            const option = e.target.closest('.option');
            if (option) {
                const index = Array.from(option.parentElement.children).indexOf(option);
                console.log('Seçenek tıklandı:', index);
                this.selectOption(index);
            }
        });
        
        console.log('Event listener\'lar eklendi');
    }
    
    showScreen(screenId) {
        console.log('Ekran gösteriliyor:', screenId);
        
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Ekran gösterildi:', screenId);
        } else {
            console.error('Ekran bulunamadı:', screenId);
        }
    }
    
    selectModule(module) {
        console.log('Modül seçiliyor:', module);
        this.currentModule = module;
        
        // Modül adını güncelle
        const titleElement = document.getElementById('selected-module-title');
        if (titleElement && quizData[module]) {
            titleElement.textContent = quizData[module].title;
        }
        
        this.showScreen('quiz-length-selection');
    }
    
    selectQuizLength(length) {
        console.log('Quiz uzunluğu seçiliyor:', length);
        this.selectedQuizLength = length;
        this.startQuiz();
    }
    
    startQuiz() {
        console.log('Quiz başlıyor:', this.currentModule, this.selectedQuizLength, 'soru');
        
        // Test için basit sorular oluştur
        this.currentQuestions = this.generateTestQuestions(this.selectedQuizLength);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        
        // UI güncelle
        const moduleElement = document.getElementById('current-module');
        if (moduleElement) {
            moduleElement.textContent = quizData[this.currentModule]?.title || this.currentModule;
        }
        
        const totalElement = document.getElementById('total-questions');
        if (totalElement) {
            totalElement.textContent = this.currentQuestions.length;
        }
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }
    
    generateTestQuestions(count) {
        // Gerçek havacılık soruları şablonları
        const questionTemplates = {
            "air-conditioning": [
                {
                    question: "What is the primary function of the air conditioning packs?",
                    options: [
                        "To control cabin temperature and provide conditioned air",
                        "To pressurize the aircraft only",
                        "To filter engine exhaust gases",
                        "To provide emergency oxygen"
                    ],
                    correct: 0,
                    explanation: "Air conditioning packs control cabin temperature and provide conditioned air by cooling and filtering engine bleed air.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 2.1"
                },
                {
                    question: "How many air conditioning packs are installed on the Boeing 737 NG?",
                    options: [
                        "One pack",
                        "Two packs",
                        "Three packs",
                        "Four packs"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG has two air conditioning packs, providing redundancy and adequate cooling capacity.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 1.2"
                },
                {
                    question: "What is the source of air for the air conditioning system?",
                    options: [
                        "Ram air only",
                        "Engine bleed air",
                        "Cabin recirculation only", 
                        "External ground unit"
                    ],
                    correct: 1,
                    explanation: "Engine bleed air is the primary source for the air conditioning system, providing hot pressurized air that is then cooled.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 3.1"
                },
                {
                    question: "What happens when the pack switch is positioned to AUTO?",
                    options: [
                        "The pack operates at maximum cooling",
                        "The pack is automatically controlled by the pack controller",
                        "The pack shuts down automatically",
                        "The pack operates in manual mode only"
                    ],
                    correct: 1,
                    explanation: "In AUTO position, the pack controller automatically manages pack operation based on temperature demands.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 4.1"
                },
                {
                    question: "What is the normal cabin temperature range?",
                    options: [
                        "18-24°C",
                        "21-27°C",
                        "24-29°C",
                        "15-21°C"
                    ],
                    correct: 0,
                    explanation: "The normal cabin temperature range is maintained between 18-24°C for passenger comfort.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 3.3"
                },
                {
                    question: "What is the function of trim air?",
                    options: [
                        "Primary temperature control",
                        "Fine temperature adjustment by adding warm bleed air",
                        "Emergency cooling",
                        "Air filtration"
                    ],
                    correct: 1,
                    explanation: "Trim air provides fine temperature adjustment by adding warm bleed air to specific zones as needed.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 5.2"
                },
                {
                    question: "What does the PACK TRIP OFF light indicate?",
                    options: [
                        "Normal pack operation",
                        "Pack has shut down due to overheat or malfunction",
                        "Pack is in manual mode",
                        "Pack requires maintenance"
                    ],
                    correct: 1,
                    explanation: "The PACK TRIP OFF light illuminates when the pack has automatically shut down due to overheat or malfunction.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 6.1"
                },
                {
                    question: "How is cabin temperature controlled?",
                    options: [
                        "By manual adjustment only",
                        "By automatic temperature control system",
                        "By pack flow rate only",
                        "By engine thrust setting"
                    ],
                    correct: 1,
                    explanation: "Cabin temperature is controlled by the automatic temperature control system that modulates pack output and trim air.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 3.4"
                },
                {
                    question: "What is the purpose of recirculation fans?",
                    options: [
                        "To cool the avionics",
                        "To mix and recirculate cabin air",
                        "To provide emergency ventilation",
                        "To pressurize the cabin"
                    ],
                    correct: 1,
                    explanation: "Recirculation fans mix and recirculate cabin air to improve air distribution and reduce load on packs.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 4.3"
                },
                {
                    question: "Can one pack supply the entire aircraft?",
                    options: [
                        "Yes, in all conditions",
                        "Yes, with reduced cooling capacity",
                        "No, never",
                        "Only on ground"
                    ],
                    correct: 1,
                    explanation: "One pack can supply the entire aircraft but with reduced cooling capacity at high altitudes.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 7.2"
                },
                {
                    question: "What is the maximum pack outlet temperature?",
                    options: [
                        "60°C",
                        "70°C", 
                        "80°C",
                        "90°C"
                    ],
                    correct: 2,
                    explanation: "The maximum pack outlet temperature is 80°C to prevent overheating of distribution ducts.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 3.6"
                },
                {
                    question: "How many temperature zones are controlled in the cabin?",
                    options: [
                        "One zone",
                        "Two zones",
                        "Three zones",
                        "Four zones"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG typically has two temperature control zones: forward and aft cabin zones.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 2.5"
                },
                {
                    question: "What controls the pack bypass valve?",
                    options: [
                        "Manual control",
                        "Pack controller",
                        "Temperature sensor",
                        "Pressure differential"
                    ],
                    correct: 1,
                    explanation: "The pack controller automatically controls the bypass valve based on temperature demands.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 4.6"
                },
                {
                    question: "What is the pack cooling capacity at cruise altitude?",
                    options: [
                        "50% of ground capacity",
                        "70% of ground capacity",
                        "100% of ground capacity",
                        "150% of ground capacity"
                    ],
                    correct: 1,
                    explanation: "Pack cooling capacity is approximately 70% of ground capacity at cruise altitude.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 3.8"
                },
                {
                    question: "How is air distributed to the flight deck?",
                    options: [
                        "Separate pack",
                        "Mixed air from cabin packs",
                        "Dedicated flight deck duct",
                        "Ram air only"
                    ],
                    correct: 2,
                    explanation: "Flight deck air is distributed through a dedicated duct system from the main cabin packs.",
                    reference: "B737 NG CBT - Air Conditioning System, Section 2.8"
                }
            ],
            "aircraft-general": [
                {
                    question: "What is the maximum passenger capacity of the Boeing 737-800?",
                    options: [
                        "149 passengers",
                        "162 passengers", 
                        "189 passengers",
                        "210 passengers"
                    ],
                    correct: 2,
                    explanation: "The Boeing 737-800 can accommodate up to 189 passengers in a high-density single-class configuration.",
                    reference: "B737 NG CBT - Aircraft General, Section 1.1"
                },
                {
                    question: "What type of engines power the Boeing 737 NG?",
                    options: [
                        "Pratt & Whitney JT8D",
                        "CFM56-7B series",
                        "General Electric CF6",
                        "Rolls-Royce Trent"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG is powered by CFM56-7B series engines, which are fuel-efficient turbofan engines.",
                    reference: "B737 NG CBT - Aircraft General, Section 2.1"
                },
                {
                    question: "What is the maximum operating altitude for the Boeing 737 NG?",
                    options: [
                        "35,000 feet",
                        "37,000 feet",
                        "39,000 feet", 
                        "41,000 feet"
                    ],
                    correct: 3,
                    explanation: "The maximum operating altitude (service ceiling) for the Boeing 737 NG is 41,000 feet.",
                    reference: "B737 NG CBT - Aircraft General, Section 1.3"
                },
                {
                    question: "What is the wingspan of the Boeing 737-800?",
                    options: [
                        "35.8 meters",
                        "38.4 meters",
                        "41.2 meters",
                        "44.1 meters"
                    ],
                    correct: 0,
                    explanation: "The Boeing 737-800 has a wingspan of 35.8 meters (117 feet 5 inches).",
                    reference: "B737 NG CBT - Aircraft General, Section 1.4"
                },
                {
                    question: "How many main landing gear wheels does the Boeing 737 NG have?",
                    options: [
                        "Two wheels",
                        "Four wheels",
                        "Six wheels",
                        "Eight wheels"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG has four main landing gear wheels, with two wheels on each main gear strut.",
                    reference: "B737 NG CBT - Aircraft General, Section 3.2"
                },
                {
                    question: "What is the length of the Boeing 737-800?",
                    options: [
                        "36.4 meters",
                        "39.5 meters",
                        "42.1 meters",
                        "44.7 meters"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737-800 has an overall length of 39.5 meters (129 feet 6 inches).",
                    reference: "B737 NG CBT - Aircraft General, Section 1.5"
                },
                {
                    question: "How many passenger doors does a typical Boeing 737-800 have?",
                    options: [
                        "Six doors",
                        "Eight doors",
                        "Ten doors",
                        "Twelve doors"
                    ],
                    correct: 1,
                    explanation: "A typical Boeing 737-800 has eight passenger doors: four main doors and four overwing exits.",
                    reference: "B737 NG CBT - Aircraft General, Section 4.1"
                },
                {
                    question: "What is the maximum takeoff weight of the Boeing 737-800?",
                    options: [
                        "70,080 kg",
                        "75,500 kg",
                        "79,015 kg",
                        "85,130 kg"
                    ],
                    correct: 2,
                    explanation: "The maximum takeoff weight (MTOW) of the Boeing 737-800 is 79,015 kg (174,200 pounds).",
                    reference: "B737 NG CBT - Aircraft General, Section 1.6"
                },
                {
                    question: "What type of flight management system is used?",
                    options: [
                        "FMS with CDU",
                        "EFIS only",
                        "Analog instruments",
                        "Basic autopilot"
                    ],
                    correct: 0,
                    explanation: "The Boeing 737 NG uses a Flight Management System (FMS) with Control Display Units (CDU).",
                    reference: "B737 NG CBT - Aircraft General, Section 6.1"
                },
                {
                    question: "What is the typical cruising speed of the Boeing 737 NG?",
                    options: [
                        "Mach 0.75",
                        "Mach 0.78",
                        "Mach 0.82",
                        "Mach 0.85"
                    ],
                    correct: 1,
                    explanation: "The typical cruising speed of the Boeing 737 NG is Mach 0.78 (approximately 450 knots).",
                    reference: "B737 NG CBT - Aircraft General, Section 1.7"
                },
                {
                    question: "How many flight attendant stations are typically installed?",
                    options: [
                        "Two stations",
                        "Three stations",
                        "Four stations",
                        "Five stations"
                    ],
                    correct: 2,
                    explanation: "A Boeing 737-800 typically has four flight attendant stations: two forward and two aft.",
                    reference: "B737 NG CBT - Aircraft General, Section 4.3"
                },
                {
                    question: "What is the maximum range of the Boeing 737-800?",
                    options: [
                        "4,400 km",
                        "5,425 km",
                        "6,650 km",
                        "7,800 km"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737-800 has a maximum range of approximately 5,425 km (2,935 nautical miles).",
                    reference: "B737 NG CBT - Aircraft General, Section 1.8"
                },
                {
                    question: "What type of cockpit displays does the Boeing 737 NG have?",
                    options: [
                        "Analog gauges only",
                        "Electronic Flight Instrument System (EFIS)",
                        "Glass cockpit with touchscreens",
                        "Head-up display only"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG features an Electronic Flight Instrument System (EFIS) with LCD displays.",
                    reference: "B737 NG CBT - Aircraft General, Section 6.2"
                },
                {
                    question: "How many emergency exits are required on a Boeing 737-800?",
                    options: [
                        "Six exits",
                        "Eight exits",
                        "Ten exits",
                        "Twelve exits"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737-800 requires eight emergency exits to meet evacuation requirements for maximum passenger capacity.",
                    reference: "B737 NG CBT - Aircraft General, Section 4.4"
                },
                {
                    question: "What is the cargo hold capacity of the Boeing 737-800?",
                    options: [
                        "152.1 cubic meters",
                        "165.4 cubic meters",
                        "178.2 cubic meters",
                        "192.8 cubic meters"
                    ],
                    correct: 0,
                    explanation: "The Boeing 737-800 has a total cargo hold capacity of 152.1 cubic meters (5,370 cubic feet).",
                    reference: "B737 NG CBT - Aircraft General, Section 5.1"
                }
            ],
            "engines": [
                {
                    question: "What is the maximum thrust rating of the CFM56-7B27 engine?",
                    options: [
                        "101 kN",
                        "117 kN",
                        "121 kN",
                        "134 kN"
                    ],
                    correct: 2,
                    explanation: "The CFM56-7B27 engine produces a maximum thrust of 121 kN (27,300 lbs) for takeoff performance.",
                    reference: "B737 NG CBT - Engines, Section 1.2"
                },
                {
                    question: "How many stages are in the high-pressure compressor?",
                    options: [
                        "6 stages",
                        "9 stages", 
                        "12 stages",
                        "15 stages"
                    ],
                    correct: 1,
                    explanation: "The CFM56 engine has a 9-stage high-pressure compressor that provides efficient compression ratios.",
                    reference: "B737 NG CBT - Engines, Section 2.1"
                },
                {
                    question: "What controls engine thrust in the Boeing 737 NG?",
                    options: [
                        "Manual throttle cables",
                        "Hydraulic actuators",
                        "Electronic Engine Control (EEC)",
                        "Pneumatic system"
                    ],
                    correct: 2,
                    explanation: "The Electronic Engine Control (EEC) system, also known as FADEC, provides precise thrust control and engine protection.",
                    reference: "B737 NG CBT - Engines, Section 3.1"
                }
            ],
            "fuel": [
                {
                    question: "How many fuel tanks does the Boeing 737 NG have?",
                    options: [
                        "Two tanks (left and right main)",
                        "Three tanks (left main, right main, center)",
                        "Four tanks",
                        "Five tanks"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG has three fuel tanks: left main, right main, and center tank for optimal weight distribution.",
                    reference: "B737 NG CBT - Fuel System, Section 1.1"
                },
                {
                    question: "What is the total fuel capacity of the Boeing 737-800?",
                    options: [
                        "20,890 liters",
                        "23,420 liters",
                        "26,020 liters",
                        "29,660 liters"
                    ],
                    correct: 2,
                    explanation: "The Boeing 737-800 has a total fuel capacity of 26,020 liters (6,875 US gallons).",
                    reference: "B737 NG CBT - Fuel System, Section 1.2"
                },
                {
                    question: "Which tank feeds the APU?",
                    options: [
                        "Center tank",
                        "Left main tank",
                        "Right main tank", 
                        "Any tank can feed APU"
                    ],
                    correct: 1,
                    explanation: "The APU is fed exclusively from the left main tank through dedicated fuel lines and pump.",
                    reference: "B737 NG CBT - Fuel System, Section 2.1"
                }
            ],
            "hydraulics": [
                {
                    question: "How many independent hydraulic systems does the Boeing 737 NG have?",
                    options: [
                        "One system",
                        "Two systems (A and B)",
                        "Three systems",
                        "Four systems"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG has two independent hydraulic systems (A and B) for redundancy and safety.",
                    reference: "B737 NG CBT - Hydraulics, Section 1.1"
                },
                {
                    question: "What is the operating pressure of the hydraulic systems?",
                    options: [
                        "138 bar",
                        "172 bar",
                        "207 bar",
                        "241 bar"
                    ],
                    correct: 2,
                    explanation: "Both hydraulic systems operate at 207 bar (3,000 psi) to power flight controls and other systems.",
                    reference: "B737 NG CBT - Hydraulics, Section 1.2"
                },
                {
                    question: "What powers the hydraulic system A pump?",
                    options: [
                        "Left engine",
                        "Right engine", 
                        "Electric motor",
                        "APU"
                    ],
                    correct: 0,
                    explanation: "Hydraulic system A is powered by an engine-driven pump connected to the left engine.",
                    reference: "B737 NG CBT - Hydraulics, Section 2.1"
                }
            ],
            "electrical": [
                {
                    question: "What type of electrical system does the Boeing 737 NG use?",
                    options: [
                        "28V DC only",
                        "115V AC only",
                        "28V DC and 115V AC",
                        "270V DC system"
                    ],
                    correct: 2,
                    explanation: "The Boeing 737 NG uses both 28V DC and 115V AC electrical systems for different aircraft systems.",
                    reference: "B737 NG CBT - Electrical System, Section 1.1"
                },
                {
                    question: "How many engine-driven generators are installed?",
                    options: [
                        "One generator",
                        "Two generators",
                        "Three generators",
                        "Four generators"
                    ],
                    correct: 1,
                    explanation: "Two engine-driven generators are installed, one on each engine, providing electrical power during flight.",
                    reference: "B737 NG CBT - Electrical System, Section 2.1"
                },
                {
                    question: "What is the power rating of each engine-driven generator?",
                    options: [
                        "40 kVA",
                        "60 kVA",
                        "90 kVA",
                        "120 kVA"
                    ],
                    correct: 2,
                    explanation: "Each engine-driven generator has a power rating of 90 kVA, providing sufficient electrical power for aircraft systems.",
                    reference: "B737 NG CBT - Electrical System, Section 2.2"
                }
            ],
            "anti-ice": [
                {
                    question: "What areas are protected by anti-ice systems on the Boeing 737 NG?",
                    options: [
                        "Wings only",
                        "Engine inlets only", 
                        "Engine inlets, wing leading edges, and pitot-static probes",
                        "All external surfaces"
                    ],
                    correct: 2,
                    explanation: "Anti-ice systems protect critical flight surfaces: engine inlets, wing leading edges, and pitot-static probes.",
                    reference: "B737 NG CBT - Anti-Ice & Rain, Section 1.1"
                },
                {
                    question: "What is the heat source for wing anti-ice?",
                    options: [
                        "Electrical heating elements",
                        "Engine bleed air",
                        "Hydraulic fluid circulation",
                        "Ram air heating"
                    ],
                    correct: 1,
                    explanation: "Wing anti-ice uses hot engine bleed air to prevent ice formation on wing leading edges.",
                    reference: "B737 NG CBT - Anti-Ice & Rain, Section 2.1"
                },
                {
                    question: "When should wing anti-ice be activated?",
                    options: [
                        "Only when ice is visible",
                        "When icing conditions are anticipated or encountered",
                        "Only during takeoff and landing",
                        "Continuously during winter operations"
                    ],
                    correct: 1,
                    explanation: "Wing anti-ice should be activated when icing conditions are anticipated or encountered, not just when ice is visible.",
                    reference: "B737 NG CBT - Anti-Ice & Rain, Section 3.1"
                }
            ],
            "automatic-flight": [
                {
                    question: "What are the main components of the automatic flight system?",
                    options: [
                        "Autopilot only",
                        "Autopilot and autothrottle only",
                        "Autopilot, autothrottle, and flight director",
                        "Flight management computer only"
                    ],
                    correct: 2,
                    explanation: "The automatic flight system consists of autopilot, autothrottle, and flight director working together for automated flight control.",
                    reference: "B737 NG CBT - Automatic Flight, Section 1.1"
                },
                {
                    question: "What is the minimum altitude for autopilot engagement after takeoff?",
                    options: [
                        "200 feet AGL",
                        "400 feet AGL", 
                        "800 feet AGL",
                        "1000 feet AGL"
                    ],
                    correct: 1,
                    explanation: "The autopilot can be engaged at a minimum of 400 feet AGL after takeoff under normal conditions.",
                    reference: "B737 NG CBT - Automatic Flight, Section 2.1"
                },
                {
                    question: "What does LNAV mode control?",
                    options: [
                        "Lateral navigation following the FMS route",
                        "Vertical navigation only",
                        "Speed control only",
                        "Altitude hold only"
                    ],
                    correct: 0,
                    explanation: "LNAV (Lateral Navigation) mode controls the aircraft's lateral path following the programmed FMS route.",
                    reference: "B737 NG CBT - Automatic Flight, Section 3.1"
                }
            ],
            "apu": [
                {
                    question: "What is the primary function of the APU?",
                    options: [
                        "Backup propulsion",
                        "Electrical power and bleed air supply",
                        "Flight control backup",
                        "Emergency brake power"
                    ],
                    correct: 1,
                    explanation: "The APU provides electrical power and bleed air when main engines are not operating or as backup power.",
                    reference: "B737 NG CBT - APU, Section 1.1"
                },
                {
                    question: "Where is the APU located on the Boeing 737 NG?",
                    options: [
                        "Wing root compartment",
                        "Nose section",
                        "Tail cone (aft fuselage)",
                        "Main landing gear bay"
                    ],
                    correct: 2,
                    explanation: "The APU is located in the tail cone (aft fuselage) of the Boeing 737 NG for optimal weight distribution.",
                    reference: "B737 NG CBT - APU, Section 1.2"
                },
                {
                    question: "What is the maximum altitude for APU operation?",
                    options: [
                        "20,000 feet",
                        "25,000 feet",
                        "30,000 feet", 
                        "35,000 feet"
                    ],
                    correct: 1,
                    explanation: "The APU can operate up to 25,000 feet for bleed air supply, though electrical generation is available at higher altitudes.",
                    reference: "B737 NG CBT - APU, Section 2.1"
                }
            ],
            "bleed-air": [
                {
                    question: "What is the primary source of bleed air?",
                    options: [
                        "APU compressor only",
                        "Engine compressor stages",
                        "Ram air scoops",
                        "Dedicated air pumps"
                    ],
                    correct: 1,
                    explanation: "Bleed air is primarily extracted from engine compressor stages, typically the 5th and 9th stages.",
                    reference: "B737 NG CBT - Bleed Air Systems, Section 1.1"
                },
                {
                    question: "What systems use bleed air?",
                    options: [
                        "Air conditioning only",
                        "Anti-ice systems only",
                        "Air conditioning, anti-ice, and pressurization",
                        "Landing gear operation"
                    ],
                    correct: 2,
                    explanation: "Bleed air is used for air conditioning, anti-ice systems, and cabin pressurization systems.",
                    reference: "B737 NG CBT - Bleed Air Systems, Section 2.1"
                },
                {
                    question: "How many bleed air systems are there?",
                    options: [
                        "One integrated system",
                        "Two systems (left and right)",
                        "Three independent systems",
                        "Four redundant systems"
                    ],
                    correct: 1,
                    explanation: "There are two bleed air systems: left and right, each associated with its respective engine.",
                    reference: "B737 NG CBT - Bleed Air Systems, Section 1.2"
                }
            ],
            "flight-controls": [
                {
                    question: "What type of flight control system does the Boeing 737 NG use?",
                    options: [
                        "Fully manual controls",
                        "Hydraulically assisted manual controls",
                        "Fly-by-wire system",
                        "Electric-only controls"
                    ],
                    correct: 1,
                    explanation: "The Boeing 737 NG uses hydraulically assisted manual flight controls with mechanical linkages.",
                    reference: "B737 NG CBT - Flight Controls, Section 1.1"
                },
                {
                    question: "How many hydraulic systems power the flight controls?",
                    options: [
                        "One system",
                        "Two systems",
                        "Three systems",
                        "Four systems"
                    ],
                    correct: 1,
                    explanation: "Flight controls are powered by two independent hydraulic systems (A and B) for redundancy.",
                    reference: "B737 NG CBT - Flight Controls, Section 2.1"
                },
                {
                    question: "What surfaces are controlled by the control wheel?",
                    options: [
                        "Ailerons only",
                        "Elevators only",
                        "Ailerons and elevators",
                        "All primary flight controls"
                    ],
                    correct: 2,
                    explanation: "The control wheel controls ailerons (roll) and elevators (pitch) through mechanical and hydraulic systems.",
                    reference: "B737 NG CBT - Flight Controls, Section 3.1"
                }
            ],
            "landing-gear": [
                {
                    question: "What type of landing gear configuration does the Boeing 737 NG have?",
                    options: [
                        "Tricycle gear with nose wheel",
                        "Conventional tailwheel gear",
                        "Bicycle gear configuration",
                        "Quadricycle gear setup"
                    ],
                    correct: 0,
                    explanation: "The Boeing 737 NG has a tricycle landing gear configuration with a steerable nose wheel and two main gear assemblies.",
                    reference: "B737 NG CBT - Landing Gear, Section 1.1"
                },
                {
                    question: "How many wheels are on each main landing gear?",
                    options: [
                        "One wheel per gear",
                        "Two wheels per gear",
                        "Three wheels per gear",
                        "Four wheels per gear"
                    ],
                    correct: 1,
                    explanation: "Each main landing gear has two wheels, for a total of four main landing gear wheels.",
                    reference: "B737 NG CBT - Landing Gear, Section 1.2"
                },
                {
                    question: "What system powers landing gear retraction?",
                    options: [
                        "Electric motors",
                        "Hydraulic system",
                        "Manual operation only",
                        "Pneumatic actuators"
                    ],
                    correct: 1,
                    explanation: "Landing gear retraction and extension is powered by the aircraft's hydraulic system.",
                    reference: "B737 NG CBT - Landing Gear, Section 2.1"
                }
            ]
        };

        const questions = [];
        const moduleTemplates = questionTemplates[this.currentModule] || questionTemplates["aircraft-general"];
        
        for (let i = 0; i < count; i++) {
            const templateIndex = i % moduleTemplates.length;
            const baseQuestion = moduleTemplates[templateIndex];
            
            // Soru numarasını ekleyerek çeşitlendir
            const questionNumber = i + 1;
            let modifiedQuestion = { ...baseQuestion };
            
            if (i >= moduleTemplates.length) {
                // Tekrar eden sorular için küçük değişiklikler yap
                modifiedQuestion.question = `${questionNumber}. ${baseQuestion.question}`;
                modifiedQuestion.explanation = `Question ${questionNumber}: ${baseQuestion.explanation}`;
                modifiedQuestion.reference = `${baseQuestion.reference} (Q${questionNumber})`;
            }
            
            questions.push(modifiedQuestion);
        }
        
        return questions;
    }
    
    displayQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.showResults();
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Soru numarasını güncelle
        const currentElement = document.getElementById('current-question');
        if (currentElement) {
            currentElement.textContent = this.currentQuestionIndex + 1;
        }
        
        // İlerleme çubuğunu güncelle
        const progress = ((this.currentQuestionIndex) / this.currentQuestions.length) * 100;
        const progressElement = document.getElementById('progress-fill');
        if (progressElement) {
            progressElement.style.width = progress + '%';
        }
        
        const percentageElement = document.getElementById('progress-percentage');
        if (percentageElement) {
            percentageElement.textContent = Math.round(progress) + '%';
        }
        
        // Soruyu göster
        const questionElement = document.getElementById('question-text');
        if (questionElement) {
            questionElement.textContent = question.question;
        }
        
        // Seçenekleri göster
        const optionsContainer = document.getElementById('options-container');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionsContainer.appendChild(optionElement);
            });
        }
        
        // Açıklamayı gizle
        const explanationContainer = document.getElementById('explanation-container');
        if (explanationContainer) {
            explanationContainer.style.display = 'none';
        }
        
        // Next butonunu devre dışı bırak
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
            nextButton.disabled = true;
        }
    }
    
    selectOption(selectedIndex) {
        console.log('Seçenek seçildi:', selectedIndex);
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // Tüm seçenekleri devre dışı bırak
        options.forEach(option => option.classList.add('disabled'));
        
        // Seçili seçeneği işaretle
        options[selectedIndex].classList.add('selected');
        
        // Doğru/yanlış göster
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        // Cevabı kaydet
        const isCorrect = selectedIndex === question.correct;
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selectedIndex: selectedIndex,
            correctIndex: question.correct,
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            this.score++;
        }
        
        // Açıklamayı göster
        this.showExplanation(question);
        
        // Next butonunu etkinleştir
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
            nextButton.disabled = false;
        }
    }
    
    showExplanation(question) {
        const explanationContainer = document.getElementById('explanation-container');
        const explanationText = document.getElementById('explanation-text');
        const referenceText = document.getElementById('reference-text');
        
        if (explanationText) explanationText.textContent = question.explanation;
        if (referenceText) referenceText.textContent = question.reference;
        if (explanationContainer) explanationContainer.style.display = 'block';
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.displayQuestion();
    }
    
    showResults() {
        const totalQuestions = this.currentQuestions.length;
        const correctAnswers = this.score;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Sonuçları güncelle
        const finalScore = document.getElementById('final-score');
        const correctCount = document.getElementById('correct-count');
        const wrongCount = document.getElementById('wrong-count');
        const totalCount = document.getElementById('total-count');
        
        if (finalScore) finalScore.textContent = percentage;
        if (correctCount) correctCount.textContent = correctAnswers;
        if (wrongCount) wrongCount.textContent = wrongAnswers;
        if (totalCount) totalCount.textContent = totalQuestions;
        
        this.showScreen('results-screen');
    }
    
    retakeQuiz() {
        this.startQuiz();
    }
    
    quitQuiz() {
        if (confirm('Quiz\'den çıkmak istediğinize emin misiniz?')) {
            this.showScreen('module-selection');
        }
    }
}

// Basit quiz data tanımı
const quizData = {
    "air-conditioning": { title: "Air Conditioning System" },
    "aircraft-general": { title: "Aircraft General" },
    "anti-ice": { title: "Anti-Ice & Rain" },
    "automatic-flight": { title: "Automatic Flight" },
    "apu": { title: "Auxiliary Power Unit" },
    "bleed-air": { title: "Bleed Air Systems" },
    "electrical": { title: "Electrical System" },
    "engines": { title: "Engines" },
    "flight-controls": { title: "Flight Controls" },
    "fuel": { title: "Fuel System" },
    "hydraulics": { title: "Hydraulics" },
    "landing-gear": { title: "Landing Gear" }
};

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sayfa yüklendi, QuizApp başlatılıyor...');
    window.quizApp = new QuizApp();
});

console.log('Script yüklendi');