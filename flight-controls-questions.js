// B737 NG Flight Controls - 80 Comprehensive Questions
const flightControlsQuestions = [
    // INTRODUCTION & GENERAL FLIGHT CONTROLS
    {
        question: "What are the two types of flight control systems on the B737 NG?",
        options: [
            "Manual and automatic",
            "Primary and secondary flight control systems",
            "Hydraulic and electric",
            "Normal and emergency"
        ],
        correct: 1,
        explanation: "There are two types of flight control systems: Primary flight control system and secondary flight control system.",
        reference: "B737 NG CBT - Flight Controls, Section 4"
    },
    {
        question: "What are the primary flight controls?",
        options: [
            "Flaps, slats, spoilers",
            "Ailerons, elevators, and rudder",
            "Trim tabs and control surfaces",
            "Leading edge devices"
        ],
        correct: 1,
        explanation: "The primary flight controls are the ailerons, the elevators and the rudder.",
        reference: "B737 NG CBT - Flight Controls, Section 5"
    },
    {
        question: "What are the secondary flight controls?",
        options: [
            "Ailerons, elevators, rudder",
            "Leading edge flaps, slats, trailing edge flaps, spoilers and horizontal stabilizer",
            "Trim tabs only",
            "Control wheels and pedals"
        ],
        correct: 1,
        explanation: "The secondary flight controls are the leading edge flaps, the leading edge slats, the trailing edge flaps, spoilers and speed brakes and horizontal stabilizer.",
        reference: "B737 NG CBT - Flight Controls, Section 6"
    },
    {
        question: "Which hydraulic systems normally power the primary controls?",
        options: [
            "System A only",
            "System B only",
            "System A or System B",
            "Standby system only"
        ],
        correct: 2,
        explanation: "The primary controls are normally powered by either hydraulic system A or system B.",
        reference: "B737 NG CBT - Flight Controls, Section 8"
    },
    {
        question: "Which controls can be operated manually if necessary?",
        options: [
            "All controls",
            "Ailerons and elevators",
            "Rudder only",
            "Spoilers only"
        ],
        correct: 1,
        explanation: "The ailerons and elevators may also be operated manually if necessary.",
        reference: "B737 NG CBT - Flight Controls, Section 9"
    },
    {
        question: "If systems A and B fail, how can the rudder be operated?",
        options: [
            "Manual reversion only",
            "Electric backup",
            "By the standby hydraulic system",
            "Cannot be operated"
        ],
        correct: 2,
        explanation: "If system A and system B fail, the rudder may be operated by the standby hydraulic system.",
        reference: "B737 NG CBT - Flight Controls, Section 10"
    },
    {
        question: "Which system normally powers the secondary flight controls?",
        options: [
            "Hydraulic system A",
            "Hydraulic system B",
            "Standby hydraulic system",
            "Electric system"
        ],
        correct: 1,
        explanation: "The secondary flight controls, including trailing edge (TE) flaps and leading edge flaps and slats, are normally powered by hydraulic system B.",
        reference: "B737 NG CBT - Flight Controls, Section 11"
    },
    {
        question: "If hydraulic system B fails, how can trailing edge flaps be operated?",
        options: [
            "Manual operation only",
            "Electrically",
            "By system A",
            "Cannot be operated"
        ],
        correct: 1,
        explanation: "If hydraulic system B fails, the trailing edge flaps can be operated electrically.",
        reference: "B737 NG CBT - Flight Controls, Section 11"
    },
    {
        question: "What automatically powers leading edge flaps and slats under certain conditions?",
        options: [
            "Standby hydraulic pump",
            "Power transfer unit (PTU)",
            "Electric motor",
            "Emergency system"
        ],
        correct: 1,
        explanation: "The power transfer unit (PTU) automatically powers the leading edge flaps and slats under certain conditions.",
        reference: "B737 NG CBT - Flight Controls, Section 12"
    },
    {
        question: "Which systems power the spoilers?",
        options: [
            "System A only",
            "System B only",
            "System A and system B",
            "Standby system only"
        ],
        correct: 2,
        explanation: "The spoilers are powered by system A and system B.",
        reference: "B737 NG CBT - Flight Controls, Section 13"
    },
    
    // ROLL CONTROL
    {
        question: "What controls airplane movement around the longitudinal axis?",
        options: [
            "Pitch control system",
            "Roll control system",
            "Yaw control system",
            "Trim system"
        ],
        correct: 1,
        explanation: "The roll control system controls the movement of the airplane around the longitudinal axis.",
        reference: "B737 NG CBT - Flight Controls, Section 29"
    },
    {
        question: "What provides primary roll control?",
        options: [
            "Spoilers only",
            "Ailerons only",
            "Ailerons and supported by spoilers",
            "Rudder and ailerons"
        ],
        correct: 2,
        explanation: "The roll control is primarily provided by ailerons and supported by spoilers.",
        reference: "B737 NG CBT - Flight Controls, Section 30"
    },
    {
        question: "During roll control, which spoilers extend?",
        options: [
            "All spoilers",
            "Ground spoilers only",
            "Flight spoilers on the wing with upward aileron deflection only",
            "No spoilers extend"
        ],
        correct: 2,
        explanation: "During roll control, the flight spoilers extend on the wing with upward aileron deflection only and all other spoilers stay down.",
        reference: "B737 NG CBT - Flight Controls, Section 32"
    },
    {
        question: "What controls aileron hydraulic power control units?",
        options: [
            "Control wheels directly",
            "Feel and centering unit",
            "Spoiler mixer",
            "Autopilot only"
        ],
        correct: 1,
        explanation: "The feel and centering unit controls the aileron hydraulic power control units which move the ailerons, and gives an artificial feel force to the pilot.",
        reference: "B737 NG CBT - Flight Controls, Section 35"
    },
    {
        question: "What controls spoiler power control units?",
        options: [
            "Feel and centering unit",
            "Spoiler mixer",
            "Control wheels directly",
            "Aileron trim"
        ],
        correct: 1,
        explanation: "The spoiler mixer controls the power control units on each spoiler panel to provide spoiler movement proportional to aileron movement.",
        reference: "B737 NG CBT - Flight Controls, Section 36"
    },
    {
        question: "Which control wheel provides input to aileron power control units?",
        options: [
            "First officer's control wheel",
            "Captain's control wheel",
            "Both control wheels equally",
            "Autopilot control wheel"
        ],
        correct: 1,
        explanation: "The captain's control wheel supplies mechanical input by cables through the feel and centering unit to the aileron power control units.",
        reference: "B737 NG CBT - Flight Controls, Section 37"
    },
    {
        question: "Which control wheel provides input to spoiler power control units?",
        options: [
            "Captain's control wheel",
            "First officer's control wheel",
            "Both control wheels equally",
            "Neither control wheel"
        ],
        correct: 1,
        explanation: "The first officer's control wheel provides mechanical input by cables through the spoiler mixer to the spoiler power control units.",
        reference: "B737 NG CBT - Flight Controls, Section 38"
    },
    {
        question: "If the aileron control system is jammed, how can roll control be maintained?",
        options: [
            "Captain operates left control wheel through ailerons",
            "First officer operates right control wheel through spoilers",
            "Use rudder for roll control",
            "Roll control is lost"
        ],
        correct: 1,
        explanation: "If the aileron control system is jammed, the ailerons are inoperative and the captain's control wheel cannot move. In this case, the first officer operates the right control wheel which provides roll control through the spoilers.",
        reference: "B737 NG CBT - Flight Controls, Section 44"
    },
    {
        question: "How many aileron trim switches must be operated for the system to work?",
        options: [
            "One switch",
            "Both switches at the same time",
            "Either switch",
            "No switches required"
        ],
        correct: 1,
        explanation: "You must operate both switches at the same time for the system to work.",
        reference: "B737 NG CBT - Flight Controls, Section 47"
    },
    {
        question: "What happens if aileron trim is applied when autopilot is engaged?",
        options: [
            "Trim changes control wheel position",
            "Autopilot disconnects",
            "May result in out of trim condition when autopilot disconnects",
            "Nothing happens"
        ],
        correct: 2,
        explanation: "Note that if you apply an aileron trim when the autopilot is engaged, it may result in an out of trim condition and an abrupt rolling motion when the autopilot is disconnected.",
        reference: "B737 NG CBT - Flight Controls, Section 51"
    },
    
    // PITCH CONTROL
    {
        question: "What controls airplane movement around the lateral axis?",
        options: [
            "Roll control system",
            "Pitch control system",
            "Yaw control system",
            "Rudder system"
        ],
        correct: 1,
        explanation: "The pitch control system controls the movement of the airplane around the lateral axis.",
        reference: "B737 NG CBT - Flight Controls, Section 52"
    },
    {
        question: "What provides primary pitch control?",
        options: [
            "Elevators only",
            "Horizontal stabilizer only",
            "Elevators and supported by horizontal stabilizer",
            "Control columns only"
        ],
        correct: 2,
        explanation: "The pitch control is primarily provided by elevators and supported by an horizontal stabilizer.",
        reference: "B737 NG CBT - Flight Controls, Section 53"
    },
    {
        question: "What moves the elevators?",
        options: [
            "Control columns only",
            "Autopilot only",
            "Control columns, autopilot and mach trim system",
            "Mach trim only"
        ],
        correct: 2,
        explanation: "The elevators are moved by control columns, autopilot and mach trim system.",
        reference: "B737 NG CBT - Flight Controls, Section 56"
    },
    {
        question: "What happens during a control column breakout?",
        options: [
            "Control is lost",
            "Captain's and first officer's control columns separate",
            "Autopilot takes over",
            "Elevator locks"
        ],
        correct: 1,
        explanation: "When the force overcomes the breakout force, the captain's and first officer's control columns separate. The control column that moves freely after the breakout can provide sufficient elevator control.",
        reference: "B737 NG CBT - Flight Controls, Section 62"
    },
    {
        question: "What is the function of the elevator feel computer?",
        options: [
            "To move elevators",
            "To change control column feel forces as airspeed changes and stabilizer moves",
            "To monitor elevator position",
            "To control hydraulic pressure"
        ],
        correct: 1,
        explanation: "The function of the elevator feel computer is to change the control column feel forces as the airspeed changes and the horizontal stabilizer moves.",
        reference: "B737 NG CBT - Flight Controls, Section 65"
    },
    {
        question: "When does the FEEL DIFFERENTIAL PRESSURE light illuminate?",
        options: [
            "Normal operation",
            "When there is excessive difference between system A and B pressures in elevator feel computer",
            "During autopilot operation",
            "When elevators move"
        ],
        correct: 1,
        explanation: "Failure of either hydraulic system causes a significant hydraulic pressure difference to build up in elevator feel computer and the FEEL DIFFERENTIAL PRESSURE light illuminates.",
        reference: "B737 NG CBT - Flight Controls, Section 67"
    },
    {
        question: "At what Mach number does Mach trim automatically activate?",
        options: [
            "Mach 0.5",
            "Mach 0.615",
            "Mach 0.7",
            "Mach 0.8"
        ],
        correct: 1,
        explanation: "When the airspeed is more than mach 0.615, Mach trim automatically activates to adjust the elevators with respect to the stabilizer as speed increases.",
        reference: "B737 NG CBT - Flight Controls, Section 71"
    },
    {
        question: "What should you limit airspeed to when MACH TRIM FAIL light illuminates?",
        options: [
            "250 knots/.75 Mach",
            "280 knots/.82 Mach",
            "300 knots/.85 Mach",
            "320 knots/.90 Mach"
        ],
        correct: 1,
        explanation: "When mach trim function fails in both flight control computers, MACH TRIM FAIL light illuminates on the flight control panel. You should limit airspeed to 280 knots/.82 Mach.",
        reference: "B737 NG CBT - Flight Controls, Section 72"
    },
    {
        question: "How many degrees can the horizontal stabilizer travel leading edge up?",
        options: [
            "2.5 degrees",
            "4.2 degrees",
            "6.8 degrees",
            "12.9 degrees"
        ],
        correct: 1,
        explanation: "The horizontal stabilizer can travel 4.2 degrees leading edge up from the neutral position for airplane nose down trim.",
        reference: "B737 NG CBT - Flight Controls, Section 76"
    },
    {
        question: "How many degrees can the horizontal stabilizer travel leading edge down?",
        options: [
            "4.2 degrees",
            "8.5 degrees",
            "12.9 degrees",
            "16.2 degrees"
        ],
        correct: 2,
        explanation: "It can move 12.9 degrees leading edge down position for airplane nose up trim.",
        reference: "B737 NG CBT - Flight Controls, Section 76"
    },
    {
        question: "What are the three methods of pitch trim?",
        options: [
            "Electric, hydraulic, manual",
            "Manual pitch trim, electric pitch trim and autopilot pitch trim",
            "Primary, secondary, emergency",
            "Normal, alternate, standby"
        ],
        correct: 1,
        explanation: "There are three methods of pitch trim depending on how the horizontal stabilizer is moved. Manual pitch trim, electric pitch trim and autopilot pitch trim.",
        reference: "B737 NG CBT - Flight Controls, Section 77"
    },
    {
        question: "Which trim method has the highest priority?",
        options: [
            "Electric pitch trim",
            "Autopilot pitch trim",
            "Manual input from trim wheels",
            "All have equal priority"
        ],
        correct: 2,
        explanation: "Manual input from the trim wheels has the highest priority and can be used to override autopilot or main electric trim.",
        reference: "B737 NG CBT - Flight Controls, Section 78"
    },
    {
        question: "Why are there double switches for pitch trim?",
        options: [
            "For redundancy only",
            "To reduce probability of trim runaway",
            "For different trim rates",
            "For captain and first officer"
        ],
        correct: 1,
        explanation: "The reason for a double switch on the pitch trim is to reduce the probability of a trim runaway.",
        reference: "B737 NG CBT - Flight Controls, Section 79"
    },
    {
        question: "When does the Stabilizer Out Of Trim light illuminate?",
        options: [
            "During normal operation",
            "When autopilot is not trimming the horizontal stabilizer properly",
            "When trim wheels are moved",
            "During manual trim"
        ],
        correct: 1,
        explanation: "Stabilizer Out Of Trim light on the left forward panel illuminates when the autopilot is not trimming the horizontal stabilizer properly.",
        reference: "B737 NG CBT - Flight Controls, Section 84"
    },
    {
        question: "What happens when either pair of stabilizer trim switches is activated with autopilot engaged?",
        options: [
            "Nothing happens",
            "Trim rate changes",
            "Autopilot automatically disengages",
            "Stabilizer locks"
        ],
        correct: 2,
        explanation: "With the autopilot is engaged, activating either pair of stabilizer trim switches automatically disengages the autopilot.",
        reference: "B737 NG CBT - Flight Controls, Section 87"
    },
    {
        question: "When does the stabilizer trim actuator engage high speed trim?",
        options: [
            "When flaps are retracted",
            "When flaps are extended",
            "During takeoff only",
            "During landing only"
        ],
        correct: 1,
        explanation: "When the flaps are extended, stabilizer trim actuator engages in high speed trim.",
        reference: "B737 NG CBT - Flight Controls, Section 89"
    },
    {
        question: "What corresponds to the stabilizer neutral position of 0 degrees?",
        options: [
            "2 units of trim",
            "4 units of trim",
            "6 units of trim",
            "8 units of trim"
        ],
        correct: 1,
        explanation: "The stabilizer neutral position of 0 degrees corresponds 4 units of trim.",
        reference: "B737 NG CBT - Flight Controls, Section 94"
    },
    {
        question: "What does the green band on stabilizer trim indicators show?",
        options: [
            "Normal operating range",
            "Approved takeoff trim range",
            "Landing trim range",
            "Emergency trim range"
        ],
        correct: 1,
        explanation: "The green bands show the approved takeoff trim range.",
        reference: "B737 NG CBT - Flight Controls, Section 95"
    },
    {
        question: "What is the purpose of the speed trim system?",
        options: [
            "To control airspeed",
            "To increase airplane stability during operations with low gross weight, aft CG, low speed and high thrust",
            "To trim for cruise flight",
            "To assist autopilot"
        ],
        correct: 1,
        explanation: "The purpose of the speed trim system is to increase the airplane stability during operations with a low gross weight, aft center of gravity, low speed and high thrust.",
        reference: "B737 NG CBT - Flight Controls, Section 101"
    },
    {
        question: "When does speed trim function primarily occur?",
        options: [
            "During cruise",
            "During approach",
            "During takeoff or go-around",
            "During descent"
        ],
        correct: 2,
        explanation: "The speed trim function primarily occurs during takeoff or go-around and only operates when the autopilots are not engaged.",
        reference: "B737 NG CBT - Flight Controls, Section 102"
    },
    
    // YAW CONTROL
    {
        question: "What provides yaw control around the vertical axis?",
        options: [
            "Ailerons and spoilers",
            "Hydraulically powered rudder and digital yaw damper system",
            "Elevators and stabilizer",
            "Control wheels"
        ],
        correct: 1,
        explanation: "The yaw control is provided by a hydraulically powered rudder and a digital yaw damper system.",
        reference: "B737 NG CBT - Flight Controls, Section 108"
    },
    {
        question: "How many power control units attach to the rudder?",
        options: [
            "One PCU",
            "Two PCUs - main and standby",
            "Three PCUs",
            "Four PCUs"
        ],
        correct: 1,
        explanation: "Two power control units or PCUs attach to the rudder and move the main rudder PCU and standby rudder PCU.",
        reference: "B737 NG CBT - Flight Controls, Section 109"
    },
    {
        question: "Which systems power the main rudder PCU?",
        options: [
            "System A only",
            "System B only",
            "Hydraulic system A and B",
            "Standby system only"
        ],
        correct: 2,
        explanation: "The main rudder PCU is powered by hydraulic system A and B to move the rudder.",
        reference: "B737 NG CBT - Flight Controls, Section 118"
    },
    {
        question: "What is the function of the load limiter system?",
        options: [
            "To increase rudder authority",
            "To reduce rudder deflection during flight when not taking off or landing",
            "To lock the rudder",
            "To provide backup control"
        ],
        correct: 1,
        explanation: "The function of load limiter is to reduce the rudder deflection during flight when not taking off or landing as large rudder deflections are not necessary to control the airplane.",
        reference: "B737 NG CBT - Flight Controls, Section 119"
    },
    {
        question: "At what airspeed does the load limiter activate?",
        options: [
            "100 knots",
            "137 knots",
            "150 knots",
            "200 knots"
        ],
        correct: 1,
        explanation: "When the airspeed is more than 137 knots, the load limiter limits both hydraulic system A and B pressure within the main rudder PCU to reduce rudder output force by 25%.",
        reference: "B737 NG CBT - Flight Controls, Section 120"
    },
    {
        question: "What does the Force Fight Monitor (FFM) detect?",
        options: [
            "Rudder movement",
            "If system A and B actuators are operating in opposition to each other",
            "Hydraulic pressure loss",
            "Control input"
        ],
        correct: 1,
        explanation: "The main rudder PCU also incorporates a Force Fight Monitor (FFM) which detects if system A and B actuators are operating in opposition to each other.",
        reference: "B737 NG CBT - Flight Controls, Section 122"
    },
    {
        question: "Which system powers the standby rudder PCU?",
        options: [
            "System A",
            "System B",
            "The standby hydraulic system",
            "Electric system"
        ],
        correct: 2,
        explanation: "The standby rudder PCU is powered by the standby hydraulic system.",
        reference: "B737 NG CBT - Flight Controls, Section 123"
    },
    {
        question: "How can the standby rudder system be pressurized manually?",
        options: [
            "By pressing a button",
            "By moving either flight control switch to standby rudder position",
            "By pulling a handle",
            "Automatically only"
        ],
        correct: 1,
        explanation: "You can pressurize the standby rudder system manually by moving either flight control switch to standby rudder position.",
        reference: "B737 NG CBT - Flight Controls, Section 124"
    },
    {
        question: "What happens when the standby rudder system is activated?",
        options: [
            "No indication",
            "Amber standby rudder ON light illuminates and MASTER CAUTION lights come on",
            "Red warning light",
            "System automatically resets"
        ],
        correct: 1,
        explanation: "Whenever the standby rudder system is activated either manually or automatically, an amber standby rudder on light, if available, illuminates on the flight control panel. Master Caution lights and Flight Control annunciator come on.",
        reference: "B737 NG CBT - Flight Controls, Section 126"
    },
    {
        question: "What controls rudder trim?",
        options: [
            "Rudder pedals",
            "Rudder trim control knob on aft electronic panel",
            "Control wheel",
            "Autopilot only"
        ],
        correct: 1,
        explanation: "You control the rudder trim with the rudder trim control knob on the aft electronic panel.",
        reference: "B737 NG CBT - Flight Controls, Section 128"
    },
    {
        question: "What is Dutch roll?",
        options: [
            "Normal turning motion",
            "Unwanted airplane motion with continuous oscillations in yaw and roll",
            "Emergency maneuver",
            "Takeoff procedure"
        ],
        correct: 1,
        explanation: "Dutch roll is an unwanted airplane motion which is identified by a combination of a continuous oscillations in yaw and roll.",
        reference: "B737 NG CBT - Flight Controls, Section 131"
    },
    {
        question: "When do rudder pedals move during yaw damper operation?",
        options: [
            "Always move",
            "Move proportionally",
            "Rudder pedals do not move",
            "Move in opposite direction"
        ],
        correct: 2,
        explanation: "When yaw damper moves the rudder to reduce unwanted yaw motion, rudder pedals do not move.",
        reference: "B737 NG CBT - Flight Controls, Section 134"
    },
    {
        question: "Which system powers the main yaw damper?",
        options: [
            "System A",
            "System B",
            "Standby hydraulics",
            "Electric system"
        ],
        correct: 1,
        explanation: "The main yaw damper is powered by system B.",
        reference: "B737 NG CBT - Flight Controls, Section 136"
    },
    {
        question: "Which system powers the standby yaw damper?",
        options: [
            "System A",
            "System B",
            "Standby hydraulics",
            "Electric system"
        ],
        correct: 2,
        explanation: "The standby yaw damper is powered by standby hydraulics.",
        reference: "B737 NG CBT - Flight Controls, Section 137"
    },
    {
        question: "How many SMYD computers control the yaw dampers?",
        options: [
            "One computer",
            "Two computers",
            "Three computers",
            "Four computers"
        ],
        correct: 1,
        explanation: "Both yaw dampers are controlled through two Stall Management/Yaw Damper (SMYD) computers.",
        reference: "B737 NG CBT - Flight Controls, Section 138"
    },
    {
        question: "What is the rudder movement limit for main yaw damping with flaps up?",
        options: [
            "1 degree",
            "2 degrees",
            "3 degrees",
            "4 degrees"
        ],
        correct: 1,
        explanation: "For main yaw damping, rudder movement is limited to 2 degrees with flaps up and 3 degrees with flaps down.",
        reference: "B737 NG CBT - Flight Controls, Section 150"
    },
    
    // STALL IDENTIFICATION
    {
        question: "What enhances stall identification and control?",
        options: [
            "Autopilot only",
            "Yaw damper, Elevator Feel Shift (EFS) module and speed trim system",
            "Control wheels only",
            "Hydraulic systems"
        ],
        correct: 1,
        explanation: "Stall identification and control is enhanced by the yaw damper, the Elevator Feel Shift (EFS) module and the speed trim system which work together.",
        reference: "B737 NG CBT - Flight Controls, Section 156"
    },
    {
        question: "What does the elevator feel shift module do during a stall?",
        options: [
            "Reduces control forces",
            "Supplies increased system A pressure to increase forward control column feel force up to four times normal",
            "Locks the controls",
            "Disconnects autopilot"
        ],
        correct: 1,
        explanation: "The elevator feel shift module supplies increased system A pressure to the elevator feel and centering unit during a stall. This increases forward control column feel force up to four times normal feel.",
        reference: "B737 NG CBT - Flight Controls, Section 158"
    },
    {
        question: "When is the elevator feel shift module inhibited?",
        options: [
            "Never inhibited",
            "When airplane is on ground, or below 100 ft radio altitude with autopilot engaged",
            "During takeoff only",
            "During landing only"
        ],
        correct: 1,
        explanation: "The elevator feel shift module is inhibited when the airplane is on the ground, or when the airplane is below 100 ft radio altitude with autopilot engaged.",
        reference: "B737 NG CBT - Flight Controls, Section 159"
    },
    
    // SECONDARY FLIGHT CONTROLS - SPOILERS/SPEED BRAKES
    {
        question: "How many spoilers are on each wing?",
        options: [
            "Four spoilers",
            "Five spoilers",
            "Six spoilers",
            "Eight spoilers"
        ],
        correct: 2,
        explanation: "There are six spoilers on each wing. Each spoiler has a number, 1 through 12 from left to right.",
        reference: "B737 NG CBT - Flight Controls, Section 166"
    },
    {
        question: "Which spoilers are the ground spoilers?",
        options: [
            "All spoilers",
            "Middle spoilers",
            "The most outboard and most inboard spoiler",
            "No specific spoilers"
        ],
        correct: 2,
        explanation: "The most outboard and the most inboard spoiler are the ground spoilers. All the other spoilers are flight spoilers.",
        reference: "B737 NG CBT - Flight Controls, Section 166"
    },
    {
        question: "Which spoilers operate in flight?",
        options: [
            "All spoilers",
            "Ground spoilers only",
            "Flight spoilers only",
            "No spoilers operate in flight"
        ],
        correct: 2,
        explanation: "Ground spoilers do not operate in flight.",
        reference: "B737 NG CBT - Flight Controls, Section 170"
    },
    {
        question: "Which systems power the flight spoilers?",
        options: [
            "System A only",
            "System B only",
            "Hydraulic system A and B",
            "Standby system only"
        ],
        correct: 2,
        explanation: "The flight spoilers are powered by hydraulic system A and B.",
        reference: "B737 NG CBT - Flight Controls, Section 171"
    },
    {
        question: "Which system powers the ground spoilers?",
        options: [
            "Hydraulic system A",
            "System B only",
            "Both systems",
            "Standby system"
        ],
        correct: 0,
        explanation: "The Ground spoilers are powered by hydraulic system A.",
        reference: "B737 NG CBT - Flight Controls, Section 172"
    },
    {
        question: "What are the speed brake lever positions?",
        options: [
            "Down, up",
            "Down, armed, flight detent, and UP",
            "Off, on",
            "Retract, extend"
        ],
        correct: 1,
        explanation: "The speed brake lever has detents at these three positions: Down, armed and flight detent. There is also UP position with no detent.",
        reference: "B737 NG CBT - Flight Controls, Section 176"
    },
    {
        question: "When does the SPEED BRAKE DO NOT ARM light illuminate?",
        options: [
            "Normal operation",
            "When a fault has occurred in the automatic speed brake system",
            "When speed brakes are extended",
            "During manual operation"
        ],
        correct: 1,
        explanation: "The SPEED BRAKE DO NOT ARM light comes on to indicate a fault has occurred in the automatic speed brake system.",
        reference: "B737 NG CBT - Flight Controls, Section 180"
    },
    {
        question: "What is prohibited when moving speed brake lever beyond flight detent in flight?",
        options: [
            "Normal operation",
            "May cause buffeting",
            "Reduces efficiency",
            "No restrictions"
        ],
        correct: 1,
        explanation: "Moving the SPEED BRAKE lever beyond the FLIGHT DETENT is prohibited in flight, as it may cause buffeting.",
        reference: "B737 NG CBT - Flight Controls, Section 182"
    },
    {
        question: "What conditions cause automatic speed brake deployment on landing?",
        options: [
            "Thrust levers at idle only",
            "Wheel spin-up and gear compression",
            "Radio altitude less than 10 feet and wheel spin-up at more than 60 knots",
            "Landing gear down"
        ],
        correct: 2,
        explanation: "When the radio altitude is less than 10 feet and the main landing gear wheels spin up at a speed of more than 60 knots, the SPEED BRAKE lever automatically moves to the UP position.",
        reference: "B737 NG CBT - Flight Controls, Section 198"
    },
    {
        question: "When do ground spoilers deploy during landing?",
        options: [
            "At touchdown",
            "When right main landing gear strut compresses",
            "When speed brakes extend",
            "When thrust reversers deploy"
        ],
        correct: 1,
        explanation: "When the right main landing gear strut compresses, the ground spoilers deploy.",
        reference: "B737 NG CBT - Flight Controls, Section 200"
    },
    
    // LEADING EDGE DEVICES AND TRAILING EDGE FLAPS
    {
        question: "How many leading edge devices are on each wing?",
        options: [
            "Four devices total",
            "Six devices - two flaps and four slats",
            "Eight devices total",
            "Ten devices total"
        ],
        correct: 1,
        explanation: "The leading edge devices consist of two flaps and four slats on the leading edge of each wing.",
        reference: "B737 NG CBT - Flight Controls, Section 209"
    },
    {
        question: "Where are leading edge (Kruger) flaps located?",
        options: [
            "Outboard of each engine",
            "Inboard of each engine",
            "At wing tips",
            "At wing root"
        ],
        correct: 1,
        explanation: "The leading edge or Kruger flaps are located inboard of each engine.",
        reference: "B737 NG CBT - Flight Controls, Section 210"
    },
    {
        question: "How many positions do leading edge flaps have?",
        options: [
            "One position",
            "Two positions: Up and fully extended",
            "Three positions",
            "Four positions"
        ],
        correct: 1,
        explanation: "Leading edge flaps have two positions: Up and fully extended.",
        reference: "B737 NG CBT - Flight Controls, Section 210"
    },
    {
        question: "How many positions do leading edge slats have?",
        options: [
            "Two positions",
            "Three positions: Up, extended and fully extended",
            "Four positions",
            "Five positions"
        ],
        correct: 1,
        explanation: "Leading edge slats have three positions: Up, extended and fully extended.",
        reference: "B737 NG CBT - Flight Controls, Section 211"
    },
    {
        question: "Which system normally powers leading edge devices and trailing edge flaps?",
        options: [
            "System A",
            "Hydraulic system B",
            "Standby system",
            "Electric system"
        ],
        correct: 1,
        explanation: "During normal operation leading edge devices and trailing edge flaps are powered by hydraulic system B.",
        reference: "B737 NG CBT - Flight Controls, Section 216"
    },
    {
        question: "How many flap lever positions are there?",
        options: [
            "Seven positions",
            "Eight positions",
            "Nine different positions",
            "Ten positions"
        ],
        correct: 2,
        explanation: "The flap lever lets you move the trailing edge flaps to nine different positions.",
        reference: "B737 NG CBT - Flight Controls, Section 233"
    },
    {
        question: "What do flap positions between 1-15 provide?",
        options: [
            "Increased drag only",
            "Increased lift",
            "Increased lift and drag",
            "No change"
        ],
        correct: 1,
        explanation: "In general, trailing edge flap positions between 1–15 provide increased lift.",
        reference: "B737 NG CBT - Flight Controls, Section 234"
    },
    {
        question: "What do flap positions between 15-40 provide?",
        options: [
            "Increased lift only",
            "Increased drag only",
            "Increased lift and drag",
            "Reduced lift"
        ],
        correct: 2,
        explanation: "Positions between 15–40 provide increased lift and drag.",
        reference: "B737 NG CBT - Flight Controls, Section 234"
    },
    {
        question: "Where are the flap gates located?",
        options: [
            "At flaps 1 and flaps 15",
            "At flaps 5 and flaps 25",
            "At flaps 10 and flaps 30",
            "At flaps 15 and flaps 40"
        ],
        correct: 0,
        explanation: "Flap lever mechanism incorporates two flap gates. The gate at flaps 1 prevents inadvertent FLAP lever movement beyond flaps 1 during a single engine go–around. The other gate prevents inadvertent FLAP lever movement beyond flaps 15 during normal go–around.",
        reference: "B737 NG CBT - Flight Controls, Section 235"
    },
    
    // FLAP LOAD RELIEF
    {
        question: "What provides the flap load relief function?",
        options: [
            "Autopilot",
            "Flaps/slat electronics unit (FSEU)",
            "Hydraulic system",
            "Flight control computer"
        ],
        correct: 1,
        explanation: "The flap load relief function is provided by the flaps/slat electronics unit (FSEU).",
        reference: "B737 NG CBT - Flight Controls, Section 244"
    },
    {
        question: "At which flap positions is load relief operative?",
        options: [
            "All positions",
            "Flaps 10, 15, 25, 30 and flaps 40 positions",
            "Flaps 30 and 40 only",
            "Flaps 1 through 15"
        ],
        correct: 1,
        explanation: "It is only operative at the flaps 10, 15, 25, 30 and flaps 40 positions during normal operation of the trailing edge flaps.",
        reference: "B737 NG CBT - Flight Controls, Section 244"
    }
];

// Export for integration
module.exports = flightControlsQuestions;