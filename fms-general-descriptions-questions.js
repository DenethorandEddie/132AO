// FMS General Descriptions Quiz Module
const fmsGeneralDescriptions = {
    title: "FMS - General Descriptions",
    questions: [
        {
            question: "What is the primary purpose of the Flight Management System (FMS) in the Boeing 737 NG?",
            options: [
                "To control engine parameters and fuel consumption only",
                "To perform automatic navigation function, compute performance parameters, guide the aircraft along a pre-planned route, and reduce cockpit workload",
                "To manage electrical systems and hydraulic distribution",
                "To monitor weather conditions and provide turbulence alerts"
            ],
            correct: 1,
            explanation: "The FMS performs automatic navigation functions, computes performance parameters, guides the aircraft along a pre-planned route, and reduces cockpit workload by automating complex calculations and flight management tasks.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 3"
        },
        {
            question: "How many Flight Management Computers (FMCs) are installed in the Boeing 737 NG, and where are they located?",
            options: [
                "One FMC located in the cockpit overhead panel",
                "Two FMCs located in the electronic equipment compartment",
                "Three FMCs with two in the E&E bay and one backup in the cockpit",
                "Two FMCs located behind the pilot seats"
            ],
            correct: 1,
            explanation: "The flight management system consists of two Flight Management Computers (FMCs), designated as FMC left and FMC right, which are located in the electronic equipment compartment.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 4"
        },
        {
            question: "What are the four main functions performed by the Flight Management Computer?",
            options: [
                "Navigation, performance, guidance, and display functions",
                "Weather, communication, navigation, and autopilot functions",
                "Engine management, fuel calculation, weather radar, and radio tuning",
                "Hydraulic monitoring, electrical distribution, cabin pressurization, and emergency systems"
            ],
            correct: 0,
            explanation: "The FMC performs four main functions: navigation function (computes and updates airplane position), performance function (provides optimum values for airspeed and engine thrust), guidance function (computes lateral and vertical flight paths), and display function (sends route and position data to navigation displays).",
            reference: "B737 NG CBT - FMS General Descriptions, Section 11-15"
        },
        {
            question: "In a dual FMC installation, which FMC is designated as primary when the Source Select switch is in the NORMAL position?",
            options: [
                "The right FMC is always primary in NORMAL position",
                "The left FMC is designated as primary and dual mode operation is enabled",
                "Both FMCs operate independently without a primary designation",
                "The primary FMC alternates every flight between left and right"
            ],
            correct: 1,
            explanation: "When the FMC Source Select switch is in the NORMAL position, dual mode operation is enabled and the left FMC is designated as the primary FMC.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 21"
        },
        {
            question: "What happens to the dual mode operation when the FMC Source Select switch is set to BOTH ON LEFT?",
            options: [
                "Dual mode is enhanced with both FMCs operating as primary",
                "The left FMC becomes primary and dual mode is lost, with the left FMC controlling all FMC operations",
                "Both FMCs shut down and revert to manual navigation",
                "The system automatically switches to single FMC mode with backup engaged"
            ],
            correct: 1,
            explanation: "When the switch is set to BOTH ON LEFT position, the left FMC is the primary but the dual mode is lost. The left FMC controls all FMC operations.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 22"
        },
        {
            question: "How often is the Navigation database updated, and what does it contain?",
            options: [
                "Monthly updates containing only waypoints and airports",
                "Every 28 days containing navaids, waypoints, airports, runways, holding patterns, SIDs, STARs, approach procedures, and company routes",
                "Weekly updates with weather information and NOTAMs",
                "Every 56 days containing only approach procedures and company routes"
            ],
            correct: 1,
            explanation: "The Navigation database contains standard navigation data including navaids, waypoints, airports, runways, holding patterns, SIDs, STARs, approach procedures, and company routes. It is updated every 28 days to cover changes in navigational data and procedures.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 25"
        },
        {
            question: "What is the difference between current and next navigation data in the FMC?",
            options: [
                "Current data is for the present flight, next data is for the following flight",
                "Current navigation data is effective until a specified expiration date, and next navigation data is for the next period of effectivity",
                "Current data contains domestic routes, next data contains international routes",
                "There is no difference - both datasets are identical"
            ],
            correct: 1,
            explanation: "The FMC contains two sets of navigation data: the current navigation data which is effective until a specified expiration date, and a set of navigation data for the next period of effectivity.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 26"
        },
        {
            question: "How many navaids, airports, and waypoints can be manually entered in the supplemental navigation database?",
            options: [
                "20 navaids, 3 airports, and 10 waypoints",
                "40 navaids, 6 airports, and 20 waypoints",
                "50 navaids, 10 airports, and 30 waypoints",
                "30 navaids, 8 airports, and 25 waypoints"
            ],
            correct: 1,
            explanation: "The supplemental navigation database allows manual entry of 40 navaids, 6 airports, and 20 waypoints. The temporary database also has exclusive storage space for an additional 20 waypoints.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 27"
        },
        {
            question: "What happens to the temporary navigation database at flight completion?",
            options: [
                "It is transferred to the supplemental database",
                "It is automatically erased at flight completion",
                "It is saved for the next flight",
                "It merges with the permanent navigation database"
            ],
            correct: 1,
            explanation: "The temporary navigation database is automatically erased at flight completion, while the information in the supplemental navigation database remains stored until erased by specific crew action.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 28-29"
        },
        {
            question: "What data is stored in the performance database?",
            options: [
                "Weather information and wind patterns",
                "Engine model and aerodynamic model data used by the FMC to calculate pitch and thrust commands",
                "Airport runway data and approach procedures",
                "Communication frequencies and navigation aids"
            ],
            correct: 1,
            explanation: "The performance database stores data related to engine model and aerodynamic model. The FMC uses this database to calculate pitch and thrust commands for optimal flight performance.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 30"
        },
        {
            question: "How many lines does the liquid crystal CDU display contain, and how many characters per line?",
            options: [
                "12 lines with 20 characters each",
                "14 lines with 24 characters each",
                "16 lines with 22 characters each",
                "10 lines with 26 characters each"
            ],
            correct: 1,
            explanation: "The liquid crystal CDU display contains 14 lines, each having 24 characters. The display is divided into three functional areas: page title line, data field, and scratchpad.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 35"
        },
        {
            question: "What does the 'ACT' indication in the page title line signify?",
            options: [
                "The page is currently being activated",
                "The page contains an active route or performance data",
                "The page is ready for data entry",
                "The page has been recently accessed"
            ],
            correct: 1,
            explanation: "The page title shows 'ACT' (active) indication when the page contains an active route or performance data that is currently being used by the FMC.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 37"
        },
        {
            question: "What does the 'MOD' indication in reverse video on the page title line indicate?",
            options: [
                "The page is in modification mode for data entry",
                "A modification has been made to the active route or performance data",
                "The page is displaying modified flight plan data",
                "The system is in maintenance mode"
            ],
            correct: 1,
            explanation: "The page title displays 'MOD' (modified) indication in reverse video when a modification is made to the active route or performance data, indicating changes are pending execution.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 38"
        },
        {
            question: "What do dashes in a CDU data line indicate?",
            options: [
                "The data line is not functional",
                "Data entry is mandatory for FMC operation",
                "Data entry is optional but recommended to improve FMC capability",
                "The data line contains invalid information"
            ],
            correct: 2,
            explanation: "Dashes in a data line indicate that data entry is optional in that line. However, you should enter the data if it is available to improve the capability of the FMC.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 43"
        },
        {
            question: "What do boxes in a CDU data line indicate?",
            options: [
                "Optional data entry that can be skipped",
                "Data entry is mandatory in the corresponding data line to make the FMC operate correctly",
                "The data line is corrupted and needs reset",
                "The data line is currently being processed"
            ],
            correct: 1,
            explanation: "If there are boxes in a data line, then data entry is mandatory in the corresponding data line to make the FMC operate correctly.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 44"
        },
        {
            question: "What does a caret symbol (^) in a CDU data line indicate?",
            options: [
                "The data line contains an error",
                "Data entry is required immediately",
                "Pushing the adjacent line select key will activate a specific function or show another page",
                "The data line is locked and cannot be modified"
            ],
            correct: 2,
            explanation: "A caret symbol in a data line indicates that if you push the adjacent line select key, the FMC will activate a specific function or show another page.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 45"
        },
        {
            question: "How are the line select keys identified on the CDU?",
            options: [
                "Left keys: A1-A6, Right keys: B1-B6",
                "Left keys: 1L-6L, Right keys: 1R-6R",
                "Left keys: L1-L6, Right keys: R1-R6",
                "Left keys: 1-6, Right keys: 7-12"
            ],
            correct: 1,
            explanation: "There are six line select keys on each side of the display. The left keys are identified as 1L through 6L and the right keys are identified as 1R through 6R.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 46"
        },
        {
            question: "What happens when you push the plus/minus key once versus twice?",
            options: [
                "Once selects positive, twice selects negative",
                "Once selects minus, twice selects plus",
                "Once selects decimal, twice selects whole numbers",
                "Once selects manual entry, twice selects automatic entry"
            ],
            correct: 1,
            explanation: "The plus/minus key is used to enter negative figures. Minus is selected when pressing once; plus is selected when pressing twice. Number entries are assumed positive unless a minus sign is used.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 52"
        },
        {
            question: "What is the purpose of the slash key on the CDU?",
            options: [
                "To delete the previous character",
                "To separate data when multiple entries are written on the scratchpad for the same data line",
                "To move the cursor to the next line",
                "To execute the current command"
            ],
            correct: 1,
            explanation: "The slash key is used to separate data when multiple entries are written on the scratchpad for the same data line, such as when entering wind direction and speed.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 53"
        },
        {
            question: "How do you remove the last character from the scratchpad versus removing the entire scratchpad entry?",
            options: [
                "Short press removes last character, long press removes entire entry",
                "Long press removes last character, short press removes entire entry",
                "Both require the same action - press the clear key",
                "Use the delete key for last character, clear key for entire entry"
            ],
            correct: 0,
            explanation: "Push the clear key shortly to remove the last character entered onto the scratchpad. A longer press of the key removes the entire scratchpad entry.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 58"
        },
        {
            question: "What is the primary function of the INITIALIZATION REFERENCE key?",
            options: [
                "To initialize the autopilot system",
                "To provide access to data pages used for FMC initialization and aircraft position initialization through ADIRU during preflight",
                "To reset all FMC systems to default",
                "To access weather and communication data"
            ],
            correct: 1,
            explanation: "The INITIALIZATION REFERENCE key provides access to a selection of data pages used for FMC initialization and aircraft position initialization through ADIRU during preflight. You can also access navigation data and maintenance pages.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 61"
        },
        {
            question: "What is the difference between the MENU key and DIRECT INTERCEPT key in different B737 variants?",
            options: [
                "MENU key is for newer aircraft, DIRECT INTERCEPT for older ones",
                "In some B737s, the MENU key is replaced by DIRECT INTERCEPT key",
                "Both keys perform identical functions",
                "MENU key is for domestic flights, DIRECT INTERCEPT for international"
            ],
            correct: 1,
            explanation: "The MENU key lets you display the CDU MENU page listing different subsystems. However, in some B737s, the MENU key is replaced by DIRECT INTERCEPT key, which is used to modify the route to fly directly to any waypoint or intercept any course.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 66-67"
        },
        {
            question: "What is the purpose of the LEGS key?",
            options: [
                "To access landing gear information",
                "To call up the route legs page for evaluating or changing route data and controlling PLAN mode display",
                "To view fuel consumption data",
                "To access emergency procedures"
            ],
            correct: 1,
            explanation: "The LEGS key calls up the route legs page which can be used to evaluate or change the route data. The page also lets you control PLAN mode display.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 68"
        },
        {
            question: "What information does the PROGRESS key display?",
            options: [
                "Aircraft maintenance status",
                "Current flight information corresponding to the phase of the active flight plan that is in progress",
                "Weather conditions ahead",
                "System operational status"
            ],
            correct: 1,
            explanation: "Pushing the PROGRESS key displays the current flight information corresponding to the phase of the active flight plan that is in progress, showing real-time flight data.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 71"
        },
        {
            question: "What is the function of the N1 key?",
            options: [
                "To select engine number one",
                "To select the N1 LIMIT page for viewing or modifying FMC calculated N1 thrust limits",
                "To display navigation information",
                "To access noise abatement procedures"
            ],
            correct: 1,
            explanation: "The N1 key selects the N1 LIMIT page that is used to view or modify the FMC calculated N1 thrust limits for different phases of flight.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 72"
        },
        {
            question: "What is the purpose of the FIX key?",
            options: [
                "To repair system malfunctions",
                "To provide access to FIX INFO page for creating reference positions on the navigation display",
                "To lock the current flight plan",
                "To access maintenance procedures"
            ],
            correct: 1,
            explanation: "The FIX key provides access to FIX INFO page which can be used to create reference positions on the navigation display for navigation reference purposes.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 73"
        },
        {
            question: "When does the EXECUTE light illuminate on the CDU?",
            options: [
                "When the FMC is processing data",
                "When you modify active data on a page",
                "When there is a system error",
                "When fuel is below minimum reserves"
            ],
            correct: 1,
            explanation: "When you modify active data on a page, the EXECUTE light illuminates. In this case, you must push the EXECUTE key to make data modifications active.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 76"
        },
        {
            question: "What does the CALL light indicate on the CDU?",
            options: [
                "An emergency call is being made",
                "The FMC is calling for attention",
                "A user other than the FMC requests the display",
                "The aircraft is being called by ATC"
            ],
            correct: 2,
            explanation: "The CALL light illuminates when a user other than the FMC requests the display, indicating that someone or something is requesting access to the CDU.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 79"
        },
        {
            question: "When does the MESSAGE light illuminate on the CDU?",
            options: [
                "When receiving an ACARS message",
                "When a scratchpad message is displayed",
                "When the FMC has calculated a new route",
                "When approaching a waypoint"
            ],
            correct: 1,
            explanation: "Whenever a scratchpad message is displayed, the MESSAGE light comes on. The light stays on until you clear the message.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 80"
        },
        {
            question: "What does the OFFSET light indicate?",
            options: [
                "The aircraft is off course",
                "A parallel offset is active",
                "The FMC has an offset error",
                "The aircraft is offset from the glide slope"
            ],
            correct: 1,
            explanation: "When a parallel offset is active, the OFFSET light illuminates, indicating that the aircraft is flying a parallel track to the programmed route.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 81"
        },
        {
            question: "What is the purpose of the FAIL light on the CDU?",
            options: [
                "To indicate FMC system failure",
                "For test purposes only - it does not show an FMC failure",
                "To indicate navigation system failure",
                "To indicate display system failure"
            ],
            correct: 1,
            explanation: "The FAIL light is for test purposes only. It does not show an FMC failure or any actual system malfunction.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 82"
        },
        {
            question: "How are scratchpad messages prioritized?",
            options: [
                "By time of occurrence only",
                "By pilot selection",
                "By importance to the flight crew as alerting messages, entry error messages, and advisory messages",
                "All messages have equal priority"
            ],
            correct: 2,
            explanation: "Scratchpad messages are prioritized by importance to the flight crew as alerting messages (highest priority), entry error messages, and advisory messages (lowest priority).",
            reference: "B737 NG CBT - FMS General Descriptions, Section 84"
        },
        {
            question: "What happens when an FMC alerting message is displayed?",
            options: [
                "Only the affected CDU message light illuminates",
                "The message lights on both CDUs illuminate and the amber FMC alert light on each pilot's instrument panel comes on",
                "The master caution light activates",
                "The autopilot disconnects automatically"
            ],
            correct: 1,
            explanation: "When an FMC alerting message is displayed in the scratchpad, the message lights on both CDUs illuminate and the amber FMC alert light on each pilot's instrument panel comes on.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 86"
        },
        {
            question: "What is the difference between entry error messages and alerting messages regarding CDU message lights?",
            options: [
                "Entry error messages illuminate both CDUs, alerting messages illuminate only one",
                "Entry error messages illuminate only the affected CDU, alerting messages illuminate both CDUs",
                "Both types illuminate all CDUs equally",
                "Entry error messages don't illuminate any lights"
            ],
            correct: 1,
            explanation: "Entry error messages illuminate the message light only on the affected CDU, while alerting messages illuminate the message lights on both CDUs.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 91"
        },
        {
            question: "What happens when you write new data over an alerting message?",
            options: [
                "The message is permanently deleted",
                "The message is temporarily removed but reappears when the data is removed from the scratchpad",
                "The system generates an error",
                "The new data is rejected"
            ],
            correct: 1,
            explanation: "If you write new data over an alerting message, the message is temporarily removed from the scratchpad. However, the message reappears when the data is removed from the scratchpad.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 89"
        },
        {
            question: "What happens when multiple messages have been generated?",
            options: [
                "They are displayed simultaneously on different lines",
                "Only the most recent message is shown",
                "They are stacked for display in priority sequence or in order of occurrence if of same priority",
                "They are automatically deleted except for the highest priority"
            ],
            correct: 2,
            explanation: "When multiple messages have been generated, they will be stacked for display in priority sequence or in the order of their occurrence if of the same priority. As each message is cleared, the next message in the queue is displayed.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 97"
        },
        {
            question: "What should you do when you see an INVALID ENTRY message after making a data entry?",
            options: [
                "Ignore the message and continue",
                "Clear the message and check your data entry for format or range errors",
                "Restart the FMC system",
                "Contact maintenance immediately"
            ],
            correct: 1,
            explanation: "If your entry is in an incorrect format or not within the specified range, the INVALID ENTRY message shows on the scratchpad. Clear the message and check your data entry for proper format and range.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 104"
        },
        {
            question: "What does the NOT IN DATA BASE message indicate?",
            options: [
                "The database is corrupted",
                "The FMC database does not contain the entered identifier",
                "The navigation database has expired",
                "The system is offline"
            ],
            correct: 1,
            explanation: "If the FMC database does not contain the entered identifier, the NOT IN DATA BASE message is displayed on the scratchpad. You should clear the message and check data entry, or enter the required information into the supplemental or temporary navigation database.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 105"
        },
        {
            question: "What altitude entry formats are acceptable for the FMC?",
            options: [
                "Only flight level format (FL350)",
                "Three digit, four digit, five digit, or flight level formats",
                "Only five digit format with leading zeros",
                "Only three digit format for consistency"
            ],
            correct: 1,
            explanation: "You may enter altitude as three digit, four digit, five digit, or flight level formats. Note that four digit format can be used only when altitude is less than 9,994 feet.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 106"
        },
        {
            question: "How does the CDU display altitude above versus below the transition altitude?",
            options: [
                "Always displays as flight level regardless of entry format",
                "Always displays as altitude in feet",
                "Displays as flight level above transition altitude, as altitude below transition altitude",
                "Displays according to pilot preference setting"
            ],
            correct: 2,
            explanation: "The CDU shows altitude as flight level regardless of your entry format when above the transition altitude. Below the transition altitude, it is displayed as altitude in feet.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 107-108"
        },
        {
            question: "What is the correct format for entering bearing values in the FMC?",
            options: [
                "Two digit format (65 degrees)",
                "Three digit format with leading zeros (065 degrees)",
                "Either two or three digit format is acceptable",
                "Four digit format for precision"
            ],
            correct: 1,
            explanation: "A bearing value must be entered as three digits. If you omit the leading zero (e.g., entering 65 instead of 065), an INVALID ENTRY message will appear.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 110"
        },
        {
            question: "How do you enter a temperature in Fahrenheit instead of Celsius?",
            options: [
                "Press the F key before entering the numbers",
                "Insert the letter F after the numbers",
                "Use a special temperature key",
                "Fahrenheit entry is not supported"
            ],
            correct: 1,
            explanation: "Temperature entry is normally assumed to be Celsius unless an F letter is used. To enter a temperature in Fahrenheit, insert the letter F after the numbers.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 113"
        },
        {
            question: "What distinguishes FMC predicted values from pilot-entered data on the route legs page?",
            options: [
                "FMC predicted values are in italics, pilot-entered data is in bold",
                "FMC predicted values are displayed with small characters, pilot-entered data is displayed with large characters",
                "FMC predicted values are in blue, pilot-entered data is in white",
                "There is no visual distinction between the two"
            ],
            correct: 1,
            explanation: "On the route legs page, FMC predicted values are displayed with small characters, while large characters are used to show data that is entered by the pilot or is part of departure or arrival procedures selected.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 119"
        },
        {
            question: "What are the seven flight phases of a typical FMS flight profile?",
            options: [
                "Preflight, takeoff, climb, cruise, descent, approach, and flight complete",
                "Preflight, taxi, takeoff, climb, cruise, descent, and landing",
                "Startup, taxi, takeoff, enroute, descent, approach, and shutdown",
                "Preflight, departure, climb, cruise, descent, arrival, and parking"
            ],
            correct: 0,
            explanation: "The flight phases of a typical FMS flight profile consist of preflight, takeoff, climb, cruise, descent, approach, and flight complete. The FMS automatically transitions to the next phase when a phase is completed.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 123"
        },
        {
            question: "When does the takeoff phase begin and end?",
            options: [
                "Begins at engine start and ends at gear retraction",
                "Begins with selection of TO/GA and continues until reaching the thrust reduction altitude",
                "Begins at brake release and ends at 1000 feet AGL",
                "Begins at V1 and ends at positive rate of climb"
            ],
            correct: 1,
            explanation: "The takeoff phase begins with selection of TO/GA and continues until the airplane reaches the thrust reduction altitude where climb thrust is normally selected.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 125"
        },
        {
            question: "What defines the boundaries of the climb phase?",
            options: [
                "From liftoff to cruise altitude",
                "From thrust reduction altitude to top of climb point",
                "From gear retraction to level off",
                "From 1000 feet AGL to cruise altitude"
            ],
            correct: 1,
            explanation: "The climb phase starts at the thrust reduction altitude and extends to the top of climb point, which is calculated by the FMC based on the flight plan.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 126"
        },
        {
            question: "What can occur during the cruise phase in addition to level flight?",
            options: [
                "Only level flight is permitted during cruise",
                "Cruise can include step climbs and en route descents",
                "Only descents are allowed during cruise",
                "Only climbs are allowed during cruise"
            ],
            correct: 1,
            explanation: "The cruise phase begins at the top of climb point and extends to the top of descent point. Cruise can include step climbs and en route descents as needed for optimization.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 127"
        },
        {
            question: "When does the descent phase begin?",
            options: [
                "Only when reaching the top of descent point",
                "At the top of descent point or when either a level change or vertical speed descent is initiated",
                "When the pilot selects descent mode",
                "At the beginning of the arrival procedure"
            ],
            correct: 1,
            explanation: "The descent phase begins at the top of descent point or when either a level change or vertical speed descent is initiated, allowing for early or ATC-directed descents.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 128"
        },
        {
            question: "When does the approach phase begin?",
            options: [
                "When the pilot selects approach mode",
                "At the final approach fix",
                "On passing two miles from the first waypoint of a published approach or approach transition selected from the ARRIVALS page",
                "When intercepting the glide slope"
            ],
            correct: 2,
            explanation: "The approach phase begins on passing two miles from the first waypoint of a published approach or approach transition selected from the ARRIVALS page, providing automatic transition to approach mode.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 129"
        },
        {
            question: "What happens to the flight plan data when the FMC switches to the flight complete phase?",
            options: [
                "All data is permanently saved",
                "The active flight plan and load data are cleared, and some preflight data fields initialize to default values",
                "Data is transferred to the next flight automatically",
                "Nothing happens to the data"
            ],
            correct: 1,
            explanation: "After landing, the FMC switches to the flight complete phase. The active flight plan and load data are cleared, and some preflight data fields initialize to default values in preparation for the next flight.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 130"
        },
        {
            question: "What is the significance of the dual FMC installation for navigation certification?",
            options: [
                "It provides backup for communication systems",
                "The airplane is certified to operate outside radio navaid coverage",
                "It allows for faster route calculations",
                "It enables automatic weather updates"
            ],
            correct: 1,
            explanation: "With the dual FMC installation, the airplane is certified to operate outside radio navaid coverage, providing autonomous navigation capability in remote areas.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 17"
        },
        {
            question: "What happens if the primary FMC fails in a dual FMC installation?",
            options: [
                "Both FMCs shut down and manual navigation is required",
                "The second FMC serves as a backup providing complete navigational functions",
                "The aircraft must land at the nearest airport",
                "Navigation capability is reduced by 50%"
            ],
            correct: 1,
            explanation: "In dual FMC installation, if the primary FMC fails, the second FMC serves as a backup providing complete navigational functions, ensuring continued safe navigation.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 18"
        },
        {
            question: "What is the recommended practice for data entry using the CDUs?",
            options: [
                "Always use both CDUs simultaneously for redundancy",
                "Crew may put data into the FMC using either CDU, but simultaneous data entry is not recommended",
                "Only the captain should enter data",
                "Only the first officer should enter data"
            ],
            correct: 1,
            explanation: "The crew may put data into the FMC using either CDU. However, simultaneous data entry is not recommended to avoid conflicts and ensure data integrity.",
            reference: "B737 NG CBT - FMS General Descriptions, Section 32"
        }
    ]
};

// Export for use in main quiz data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fmsGeneralDescriptions;
}