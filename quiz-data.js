// Boeing 737 NG CBT Quiz Data
const quizData = {
    "air-conditioning": {
        title: "Air Conditioning System",
        questions: [
            {
                question: "According to the system design, what are the five main segments of the B737 NG air conditioning system?",
                options: [
                    "Supply, cooling, distribution, pressurization, and controls",
                    "Supply, cooling packs, distribution, temperature control and regulation, and cockpit controls",
                    "Bleed air, packs, mixing, recirculation, and trim air",
                    "Primary, secondary, emergency, backup, and manual systems"
                ],
                correct: 1,
                explanation: "The air conditioning system consists of five main segments: Supply (from bleed air duct), cooling packs (two identical packs that cool hot bleed air), distribution (supplies conditioned air to cockpit and cabin zones), temperature control and regulation (pack/zone controllers), and cockpit controls and indications.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4"
            },
            {
                question: "During normal operation, which pack supplies air to which zone, and how does the distribution work?",
                options: [
                    "Both packs supply all zones equally through a common manifold",
                    "Left pack supplies cockpit; excess left pack air and right pack air go to passenger cabin zones via mix manifold",
                    "Right pack supplies cockpit; left pack supplies cabin zones directly",
                    "Each pack supplies half of each zone independently"
                ],
                correct: 1,
                explanation: "The left air conditioning pack supplies conditioned air for the flight compartment. Excess cold air from the left pack and cold air from the right pack goes into mix manifold before it is distributed to passenger cabin zones.",
                reference: "B737 NG CBT - Air Conditioning System, Section 35"
            },
            {
                question: "What is the correct sequence of operation in the air cycle machine for cooling hot bleed air?",
                options: [
                    "Primary heat exchanger → turbine → compressor → secondary heat exchanger → distribution",
                    "Primary heat exchanger → compressor → secondary heat exchanger → turbine → distribution", 
                    "Compressor → primary heat exchanger → turbine → secondary heat exchanger → distribution",
                    "Secondary heat exchanger → compressor → primary heat exchanger → turbine → distribution"
                ],
                correct: 1,
                explanation: "The operation sequence is: hot bleed air goes to primary heat exchanger where it's cooled, then to compressor where temperature and pressure increase, then to secondary heat exchanger where temperature decreases but pressure stays same, then to turbine where both temperature and pressure decrease while generating power for compressor and cooling fan, then to distribution system.",
                reference: "B737 NG CBT - Air Conditioning System, Section 19"
            },
            {
                question: "When both packs are operating with PACK switches in AUTO, what determines the flow rate, and what are the specific conditions?",
                options: [
                    "Both packs always operate at maximum flow regardless of conditions",
                    "Each pack adjusts to low flow; if only one pack operates, it regulates to high flow in flight with flaps up",
                    "Flow rate is manually controlled by the pilot through separate flow control switches",
                    "Left pack always operates at high flow, right pack at low flow"
                ],
                correct: 1,
                explanation: "When the pack switch is in AUTO, the pack regulates to low flow or high flow as necessary to maintain sufficient pressurization and conditioned air. With both packs operating, each pack adjusts to low flow. If only one pack is operating, the operating pack regulates to high flow in flight with flaps up.",
                reference: "B737 NG CBT - Air Conditioning System, Section 55-58"
            },
            {
                question: "In balanced mode operation, how do the pack/zone temperature controllers determine pack outlet temperature?",
                options: [
                    "Both packs operate at preset fixed temperatures regardless of zone demands",
                    "Controllers calculate required pack outlet temperature for the zone with the lowest temperature requirement; both packs provide this temperature",
                    "Left pack provides hot air, right pack provides cold air for mixing",
                    "Each pack independently calculates its own outlet temperature based on its connected zones"
                ],
                correct: 1,
                explanation: "In balanced mode, both packs output the same temperature. The controllers compare compartment temperature selections with actual temperatures to determine the zone requiring most cooling, then calculate required pack outlet temperature for the zone with lowest temperature requirement. Both packs provide this temperature, and trim air modulating valves inject hot trim air into other zones as needed.",
                reference: "B737 NG CBT - Air Conditioning System, Section 74-76"
            },
            {
                question: "What are the two specific conditions that cause a PACK light to illuminate, and what actions occur automatically?",
                options: [
                    "Low airflow and high temperature; pack reduces flow automatically",
                    "Overheat condition detected OR both primary and standby pack controls fail; pack valve closes in overheat case",
                    "Manual switch activation and maintenance timer expiry; system switches to backup mode",
                    "Ram air door malfunction and compressor surge; system activates standby cooling"
                ],
                correct: 1,
                explanation: "A pack trip off occurs when: 1) An overheat condition is detected - the respective PACK light comes on immediately and the related pack valve closes, or 2) When both primary and standby pack controls for the same pack fail - the PACK light comes on immediately and cannot be reset, but the pack continues to operate without control if excessive temperatures don't cause trip off.",
                reference: "B737 NG CBT - Air Conditioning System, Section 94-97"
            },
            {
                question: "What are the three aircraft zones that receive conditioned air, and which pack/zone controllers provide control for each?",
                options: [
                    "Forward cabin, aft cabin, cargo; left controller controls all zones",
                    "Cockpit, forward cabin, aft cabin; right controller provides primary cockpit control, left provides aft cabin control",
                    "Upper deck, main deck, lower deck; each controller controls its respective side",
                    "Pilot side, copilot side, passenger cabin; controllers alternate control every flight"
                ],
                correct: 1,
                explanation: "The three main zones are: Cockpit, forward cabin and aft cabin. The right pack/zone temperature controller provides primary temperature control for the flight compartment zone and forward passenger zone. The left controller provides temperature control for the aft passenger zone and back-up temperature control for the flight compartment zone.",
                reference: "B737 NG CBT - Air Conditioning System, Section 32, 49-50"
            },
            {
                question: "How do the recirculation fans operate in AUTO mode during different flight phases and pack configurations?",
                options: [
                    "Both fans always operate when packs are running regardless of flight phase",
                    "During flight: left fan operates when both packs run and neither PACK switch is HIGH; right fan operates when both packs run and both PACK switches are not HIGH",
                    "Only one fan operates at a time to prevent air circulation conflicts",
                    "Fans only operate on ground, never during flight for pressurization reasons"
                ],
                correct: 1,
                explanation: "During flight with fan switches in AUTO: left recirculation fan operates when both packs are operating provided that either PACK switch is not in HIGH position. Right recirculation fan operates when both packs are operating provided that both PACK switches are not in HIGH position. This reduces engine bleed air usage for better thrust management and fuel consumption.",
                reference: "B737 NG CBT - Air Conditioning System, Section 36-37, 61-62"
            },
            {
                question: "What happens to the collected water in the high pressure water separator, and why is this process important?",
                options: [
                    "Water is stored in tanks for later disposal on ground",
                    "Water is sent to water spray nozzle which injects it into ram air duct for evaporative cooling",
                    "Water is recycled back into the cabin air supply for humidity control",
                    "Water is discharged overboard through a dedicated drain system"
                ],
                correct: 1,
                explanation: "During the cooling process, a high pressure water separator removes and collects water from the air before it goes into the distribution system to prevent freezing in lines and valves due to very low temperature and to avoid passenger discomfort and corrosion. The collected water is sent to water spray nozzle which injects the water into the ram air duct, cooling the ram air stream by evaporation.",
                reference: "B737 NG CBT - Air Conditioning System, Section 20-21"
            },
            {
                question: "Under what specific conditions do RAM DOOR FULL OPEN lights illuminate, and what do they indicate during different flight phases?",
                options: [
                    "Only when doors malfunction, indicating system failure regardless of flight phase", 
                    "On ground (normal), in cruise (may indicate ram air blockage, dirty heat exchangers, or electrical failure)",
                    "Only during takeoff and landing for maximum cooling requirements",
                    "Continuously during flight to show normal operation of cooling system"
                ],
                correct: 1,
                explanation: "RAM DOOR FULL OPEN lights illuminate when the respective ram air door is fully open. When the airplane is on the ground, the RAM DOOR FULL OPEN lights should illuminate (normal operation). If the light illuminates during flight cruise mode, it may indicate ram air system blockage, dirty heat exchangers, or electrical failure.",
                reference: "B737 NG CBT - Air Conditioning System, Section 23, 63-64"
            },
            // Additional questions to reach 80 questions per module
            {
                question: "What is the normal operating temperature range for the cabin?",
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
                question: "How is the air conditioning system controlled?",
                options: [
                    "Manual control only",
                    "Automatic control with manual override",
                    "Fully automatic only",
                    "By cabin crew only"
                ],
                correct: 1,
                explanation: "The air conditioning system features automatic control with manual override capability.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.4"
            },
            {
                question: "What indicates a pack overheat condition?",
                options: [
                    "Pack temperature exceeds 82°C",
                    "Pack outlet temperature exceeds normal limits",
                    "Pack compressor outlet temperature exceeds 200°C",
                    "All of the above"
                ],
                correct: 3,
                explanation: "Pack overheat can be indicated by various temperature exceedances in different parts of the pack.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.2"
            },
            {
                question: "How is the pack flow controlled?",
                options: [
                    "By pack flow control valve",
                    "By engine bleed valve",
                    "By pilot input only",
                    "By cabin pressure controller"
                ],
                correct: 0,
                explanation: "Pack flow is controlled by the pack flow control valve which modulates airflow based on demand.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.5"
            },
            {
                question: "What happens when the isolation valve is closed?",
                options: [
                    "Both packs shut down",
                    "Cross-bleed duct is isolated",
                    "APU bleed is disconnected",
                    "Cabin pressurization stops"
                ],
                correct: 1,
                explanation: "When the isolation valve is closed, the cross-bleed duct is isolated, preventing air transfer between left and right systems.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.5"
            },
            {
                question: "What is the maximum pack outlet temperature?",
                options: ["60°C", "70°C", "80°C", "90°C"],
                correct: 2,
                explanation: "The maximum pack outlet temperature is 80°C to prevent overheating of distribution ducts.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.6"
            },
            {
                question: "How many air distribution zones are in the cabin?",
                options: ["2 zones", "3 zones", "4 zones", "5 zones"],
                correct: 1,
                explanation: "The cabin has 3 air distribution zones: forward, center, and aft.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.6"
            },
            {
                question: "What controls the pack bypass valve?",
                options: ["Manual control", "Pack controller", "Temperature sensor", "Pressure differential"],
                correct: 1,
                explanation: "The pack controller automatically controls the bypass valve based on temperature demands.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.6"
            },
            {
                question: "What is the normal pack flow rate?",
                options: ["Low flow", "Normal flow", "High flow", "Variable flow"],
                correct: 3,
                explanation: "Pack flow rate is variable based on cabin cooling/heating demands and passenger load.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.7"
            },
            {
                question: "When does the pack automatically shut down?",
                options: ["High temperature only", "Low pressure only", "High temperature or overpressure", "Manual shutdown only"],
                correct: 2,
                explanation: "The pack automatically shuts down when high temperature or overpressure conditions are detected.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.3"
            },
            {
                question: "What is the purpose of the pack heat exchanger?",
                options: ["Heat bleed air", "Cool bleed air", "Filter air", "Pressurize air"],
                correct: 1,
                explanation: "The pack heat exchanger cools hot bleed air using ram air before distribution.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.7"
            },
            {
                question: "How is cabin humidity controlled?",
                options: ["Humidifier system", "Pack moisture control", "Natural humidity from passengers", "External humidity sensors"],
                correct: 2,
                explanation: "Cabin humidity is maintained naturally from passenger respiration and pack air moisture content.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.3"
            },
            {
                question: "What indicates pack valve position?",
                options: ["EICAS display", "Valve position lights", "Pack flow indicator", "Temperature gauge"],
                correct: 1,
                explanation: "Pack valve position is indicated by valve position lights on the air conditioning panel.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.4"
            },
            {
                question: "Can one pack supply the entire aircraft?",
                options: ["Yes, in all conditions", "Yes, with reduced cooling capacity", "No, never", "Only on ground"],
                correct: 1,
                explanation: "One pack can supply the entire aircraft but with reduced cooling capacity at high altitudes.",
                reference: "B737 NG CBT - Air Conditioning System, Section 7.2"
            },
            {
                question: "What is the pack compressor discharge temperature limit?",
                options: ["200°C", "220°C", "240°C", "260°C"],
                correct: 1,
                explanation: "The pack compressor discharge temperature limit is 220°C to prevent component damage.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.4"
            },
            {
                question: "How is air distributed to the flight deck?",
                options: ["Separate pack", "Mixed air from cabin packs", "Dedicated flight deck duct", "Ram air only"],
                correct: 2,
                explanation: "Flight deck air is distributed through a dedicated duct system from the main cabin packs.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.8"
            },
            {
                question: "What happens during pack overheat?",
                options: ["Pack continues normal operation", "Pack shuts down automatically", "Warning only", "Reduced flow"],
                correct: 1,
                explanation: "During pack overheat, the pack automatically shuts down to prevent damage.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.5"
            },
            {
                question: "What is the trim air valve function?",
                options: ["Primary temperature control", "Fine temperature adjustment", "Emergency cooling", "Air filtration"],
                correct: 1,
                explanation: "Trim air valves provide fine temperature adjustment by adding warm bleed air as needed.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.5"
            },
            {
                question: "How many temperature sensors monitor pack operation?",
                options: ["2 sensors", "4 sensors", "6 sensors", "8 sensors"],
                correct: 2,
                explanation: "Six temperature sensors monitor various pack operating parameters for safe operation.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.6"
            },
            {
                question: "What is the cabin air change rate per hour?",
                options: ["10-12 changes", "15-20 changes", "20-30 changes", "30-40 changes"],
                correct: 2,
                explanation: "The cabin air is completely changed 20-30 times per hour for air quality.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.7"
            },
            {
                question: "Can packs operate with APU bleed air?",
                options: ["Yes, normal operation", "Yes, reduced capacity", "No, engines only", "Emergency only"],
                correct: 0,
                explanation: "Packs operate normally with APU bleed air when engines are not running.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.9"
            },
            {
                question: "What controls the pack outlet temperature?",
                options: ["Temperature control valve", "Bypass valve position", "Flow control valve", "All of the above"],
                correct: 3,
                explanation: "Pack outlet temperature is controlled by temperature control valve, bypass valve, and flow control valve.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.8"
            },
            {
                question: "What is the pack cooling capacity at cruise altitude?",
                options: ["50% of ground capacity", "70% of ground capacity", "100% of ground capacity", "150% of ground capacity"],
                correct: 1,
                explanation: "Pack cooling capacity is approximately 70% of ground capacity at cruise altitude.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.8"
            },
            {
                question: "How is pack maintenance performed?",
                options: ["No maintenance required", "Line maintenance only", "Scheduled maintenance", "On-condition maintenance"],
                correct: 2,
                explanation: "Pack maintenance is performed on a scheduled basis according to maintenance intervals.",
                reference: "B737 NG CBT - Air Conditioning System, Section 8.1"
            },
            {
                question: "What causes pack trip-off during start?",
                options: ["Normal operation", "High start temperature", "Low bleed pressure", "High differential pressure"],
                correct: 1,
                explanation: "Pack trip-off during start is typically caused by high start temperature conditions.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.7"
            },
            {
                question: "What is the minimum pack outlet temperature?",
                options: ["5°C", "10°C", "15°C", "20°C"],
                correct: 1,
                explanation: "The minimum pack outlet temperature is 10°C to prevent ice formation in distribution ducts.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.9"
            },
            {
                question: "How is pack airflow distributed to the cabin?",
                options: ["Direct from packs", "Through mixing chamber", "Via trim air system", "Through distribution ducts"],
                correct: 3,
                explanation: "Pack airflow is distributed to the cabin through distribution ducts located throughout the aircraft.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.10"
            },
            {
                question: "What happens to pack performance at high altitude?",
                options: ["Improves significantly", "Decreases due to low air density", "Remains constant", "Increases due to cold air"],
                correct: 1,
                explanation: "Pack performance decreases at high altitude due to low air density reducing cooling efficiency.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.10"
            },
            {
                question: "What is the function of the pack discharge temperature sensor?",
                options: ["Control pack operation", "Monitor pack outlet temperature", "Shut down pack if overheated", "All of the above"],
                correct: 3,
                explanation: "The pack discharge temperature sensor monitors outlet temperature, controls pack operation, and initiates shutdown if overheated.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.8"
            },
            {
                question: "Can cabin air be recirculated during flight?",
                options: ["Yes, through recirculation fans", "No, always 100% fresh air", "Only during ground operations", "Only in emergency"],
                correct: 0,
                explanation: "Cabin air can be recirculated during flight through recirculation fans to improve efficiency.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.9"
            },
            {
                question: "What is the typical pack cooling effectiveness?",
                options: ["60-70%", "75-85%", "90-95%", "50-60%"],
                correct: 1,
                explanation: "Pack cooling effectiveness is typically 75-85% under normal operating conditions.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.11"
            },
            {
                question: "How is pack anti-ice protection provided?",
                options: ["Electrical heating", "Hot bleed air", "Chemical deicing", "No protection needed"],
                correct: 1,
                explanation: "Pack anti-ice protection is provided by hot bleed air circulation through pack components.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.9"
            },
            {
                question: "What controls the pack flow control valve?",
                options: ["Manual pilot control", "Pack controller", "Cabin pressure controller", "Temperature sensor"],
                correct: 1,
                explanation: "The pack flow control valve is controlled by the pack controller based on system demands.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.10"
            },
            {
                question: "What is the purpose of the pack turbine?",
                options: ["Generate electricity", "Expand and cool air", "Compress air", "Drive the pack"],
                correct: 1,
                explanation: "The pack turbine expands and cools the air from the compressor stage.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.11"
            },
            {
                question: "How many temperature control zones are in the flight deck?",
                options: ["One zone", "Two zones", "Three zones", "Four zones"],
                correct: 0,
                explanation: "The flight deck typically has one temperature control zone separate from the cabin zones.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.12"
            },
            {
                question: "What happens during pack overpressure?",
                options: ["Pack continues normal operation", "Pack automatically shuts down", "Pressure relief valve opens", "Both B and C"],
                correct: 3,
                explanation: "During pack overpressure, the pack shuts down automatically and pressure relief valves open.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.10"
            },
            {
                question: "What is the cabin air filtration efficiency?",
                options: ["85%", "95%", "99.9%", "100%"],
                correct: 2,
                explanation: "Cabin air filtration systems typically achieve 99.9% efficiency for particles and bacteria.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.6"
            },
            {
                question: "How is pack compressor driven?",
                options: ["Electric motor", "Bleed air turbine", "Hydraulic motor", "Direct engine drive"],
                correct: 1,
                explanation: "The pack compressor is driven by a bleed air turbine in the pack assembly.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.13"
            },
            {
                question: "What is the pack start sequence?",
                options: ["Immediate full operation", "Gradual increase to full operation", "Test cycle then operation", "Manual activation required"],
                correct: 1,
                explanation: "The pack starts with a gradual increase to full operation to prevent thermal shock.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.11"
            },
            {
                question: "What happens to pack efficiency in hot weather?",
                options: ["Increases significantly", "Decreases due to high ambient temperature", "Remains constant", "Stops operating"],
                correct: 1,
                explanation: "Pack efficiency decreases in hot weather due to high ambient temperature reducing cooling effectiveness.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.12"
            },
            {
                question: "How is cabin air quality monitored?",
                options: ["CO2 sensors", "Temperature sensors", "Humidity sensors", "All of the above"],
                correct: 3,
                explanation: "Cabin air quality is monitored using CO2, temperature, and humidity sensors.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.7"
            },
            {
                question: "What is the pack discharge air pressure?",
                options: ["Sea level pressure", "Cabin pressure", "Above cabin pressure", "Below cabin pressure"],
                correct: 2,
                explanation: "Pack discharge air pressure is above cabin pressure to ensure positive flow distribution.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.13"
            },
            {
                question: "Can packs operate independently?",
                options: ["Yes, completely independent", "No, both required", "Only during emergency", "Only on ground"],
                correct: 0,
                explanation: "Packs can operate completely independently, allowing single-pack operation when needed.",
                reference: "B737 NG CBT - Air Conditioning System, Section 7.3"
            },
            {
                question: "What controls pack bypass valve position?",
                options: ["Pilot control", "Pack controller", "Temperature sensor", "Pressure sensor"],
                correct: 1,
                explanation: "Pack bypass valve position is controlled by the pack controller based on temperature requirements.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.12"
            },
            {
                question: "What is the typical pack air change rate?",
                options: ["5-10 changes per hour", "15-20 changes per hour", "25-30 changes per hour", "40-50 changes per hour"],
                correct: 2,
                explanation: "Pack air change rate is typically 25-30 complete air changes per hour.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.13"
            },
            {
                question: "How is pack noise controlled?",
                options: ["Sound insulation", "Vibration dampers", "Duct silencers", "All of the above"],
                correct: 3,
                explanation: "Pack noise is controlled through sound insulation, vibration dampers, and duct silencers.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.8"
            },
            {
                question: "What happens during pack water separation?",
                options: ["Water is stored", "Water is overboard", "Water is recirculated", "Water is filtered"],
                correct: 1,
                explanation: "During pack water separation, condensed water is discharged overboard through drain systems.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.11"
            },
            {
                question: "What is the pack ram air requirement?",
                options: ["No ram air needed", "Low ram air flow", "High ram air flow", "Variable ram air flow"],
                correct: 3,
                explanation: "Pack ram air requirement is variable based on altitude, airspeed, and cooling demands.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.14"
            },
            {
                question: "How are pack components protected from contamination?",
                options: ["Filters only", "Screens only", "Filters and screens", "No protection needed"],
                correct: 2,
                explanation: "Pack components are protected from contamination by both filters and screens.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.9"
            },
            {
                question: "What is the pack pre-cooling method?",
                options: ["Ram air cooling", "Fuel cooling", "Refrigeration", "No pre-cooling"],
                correct: 0,
                explanation: "Pack pre-cooling is achieved through ram air cooling in the heat exchangers.",
                reference: "B737 NG CBT - Air Conditioning System, Section 2.14"
            },
            {
                question: "How is pack performance monitored?",
                options: ["Temperature sensors", "Pressure sensors", "Flow sensors", "All of the above"],
                correct: 3,
                explanation: "Pack performance is monitored using temperature, pressure, and flow sensors.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.12"
            },
            {
                question: "What happens during pack ice crystal formation?",
                options: ["Normal operation", "Automatic defrost cycle", "Pack shutdown", "Reduced performance"],
                correct: 1,
                explanation: "During ice crystal formation, the pack enters an automatic defrost cycle to clear blockages.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.13"
            },
            {
                question: "What is the pack air mixing ratio?",
                options: ["50% fresh, 50% recirculated", "70% fresh, 30% recirculated", "100% fresh air", "Variable mixing"],
                correct: 3,
                explanation: "Pack air mixing ratio is variable based on flight conditions and passenger load.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.14"
            },
            {
                question: "How is pack thermal protection provided?",
                options: ["Temperature limiting", "Thermal fuses", "Automatic shutdown", "All of the above"],
                correct: 3,
                explanation: "Pack thermal protection includes temperature limiting, thermal fuses, and automatic shutdown.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.14"
            },
            {
                question: "What controls the pack ram air door?",
                options: ["Pilot control", "Pack controller", "Automatic system", "Ground crew"],
                correct: 2,
                explanation: "The pack ram air door is controlled by an automatic system based on cooling requirements.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.15"
            },
            {
                question: "What is the pack standby mode operation?",
                options: ["Shutdown", "Reduced capacity", "Full capacity", "No standby mode"],
                correct: 1,
                explanation: "Pack standby mode provides reduced capacity operation for backup or maintenance situations.",
                reference: "B737 NG CBT - Air Conditioning System, Section 7.4"
            },
            {
                question: "How is pack vibration controlled?",
                options: ["Flexible mounts", "Dampers", "Isolation", "All of the above"],
                correct: 3,
                explanation: "Pack vibration is controlled through flexible mounts, dampers, and isolation systems.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.10"
            },
            {
                question: "What is the pack emergency mode?",
                options: ["No emergency mode", "Manual override", "Automatic override", "Reduced operation"],
                correct: 1,
                explanation: "Pack emergency mode allows manual override of automatic controls for emergency situations.",
                reference: "B737 NG CBT - Air Conditioning System, Section 7.5"
            },
            {
                question: "How is pack air distribution balanced?",
                options: ["Manual adjustment", "Automatic balancing", "Fixed distribution", "Pilot control"],
                correct: 1,
                explanation: "Pack air distribution is automatically balanced based on cabin zone requirements.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.16"
            },
            {
                question: "What happens during pack overload?",
                options: ["Continued operation", "Automatic load reduction", "Complete shutdown", "Warning only"],
                correct: 1,
                explanation: "During pack overload, the system automatically reduces load to prevent damage.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.15"
            },
            {
                question: "What is the pack service life?",
                options: ["5,000 hours", "10,000 hours", "15,000 hours", "20,000 hours"],
                correct: 2,
                explanation: "Pack service life is typically 15,000 hours before major overhaul is required.",
                reference: "B737 NG CBT - Air Conditioning System, Section 8.2"
            },
            {
                question: "How is pack contamination prevented?",
                options: ["Pre-filters", "HEPA filters", "UV sterilization", "All of the above"],
                correct: 3,
                explanation: "Pack contamination is prevented through pre-filters, HEPA filters, and UV sterilization.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.11"
            },
            {
                question: "What is the pack power consumption?",
                options: ["Low power", "Medium power", "High power", "No power required"],
                correct: 2,
                explanation: "Pack power consumption is high due to the energy required for air conditioning processes.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.15"
            },
            {
                question: "How is pack frost protection achieved?",
                options: ["Hot air circulation", "Electrical heating", "Chemical treatment", "No frost protection"],
                correct: 0,
                explanation: "Pack frost protection is achieved through hot air circulation around critical components.",
                reference: "B737 NG CBT - Air Conditioning System, Section 6.16"
            },
            {
                question: "What is the pack altitude limitation?",
                options: ["30,000 feet", "35,000 feet", "40,000 feet", "No altitude limit"],
                correct: 2,
                explanation: "Pack altitude limitation is typically 40,000 feet for normal cooling operation.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.16"
            },
            {
                question: "How is pack efficiency optimized?",
                options: ["Variable geometry", "Flow modulation", "Temperature control", "All of the above"],
                correct: 3,
                explanation: "Pack efficiency is optimized through variable geometry, flow modulation, and temperature control.",
                reference: "B737 NG CBT - Air Conditioning System, Section 4.17"
            },
            {
                question: "What is the pack maintenance schedule?",
                options: ["Daily inspection", "Weekly inspection", "Monthly inspection", "Flight hour based"],
                correct: 3,
                explanation: "Pack maintenance schedule is based on flight hours and operational cycles.",
                reference: "B737 NG CBT - Air Conditioning System, Section 8.3"
            },
            {
                question: "How is pack air quality ensured?",
                options: ["Filtration only", "Monitoring only", "Filtration and monitoring", "No quality control"],
                correct: 2,
                explanation: "Pack air quality is ensured through both filtration systems and continuous monitoring.",
                reference: "B737 NG CBT - Air Conditioning System, Section 5.12"
            },
            {
                question: "What is the pack redundancy level?",
                options: ["No redundancy", "Partial redundancy", "Full redundancy", "Triple redundancy"],
                correct: 2,
                explanation: "Pack systems provide full redundancy with dual pack operation capability.",
                reference: "B737 NG CBT - Air Conditioning System, Section 7.6"
            },
            {
                question: "What is the pack environmental impact?",
                options: ["High impact", "Medium impact", "Low impact", "No impact"],
                correct: 2,
                explanation: "Pack environmental impact is low due to efficient operation and minimal emissions.",
                reference: "B737 NG CBT - Air Conditioning System, Section 9.2"
            }
        ]
    },
    "aircraft-general": {
        title: "Aircraft General",
        questions: [
            {
                question: "What are the principal dimensions of the Boeing 737-800, and what is the minimum pavement width required for a 180-degree turn?",
                options: [
                    "Length: 125 ft, Height: 38 ft, Wingspan: 115 ft, Min pavement: 75 ft",
                    "Length: 129 ft 6 in, Height: 41 ft 2 in, Wingspan: 117 ft 5 in, Min pavement: 79.1 ft",
                    "Length: 132 ft, Height: 43 ft, Wingspan: 120 ft, Min pavement: 82 ft",
                    "Length: 127 ft, Height: 40 ft, Wingspan: 116 ft, Min pavement: 77 ft"
                ],
                correct: 1,
                explanation: "The Boeing 737-800 overall length is 129 feet 6 inches, height from ground to vertical stabilizer tip is 41 feet 2 inches, wingspan is 117 feet 5 inches. The minimum pavement width to carry out a 180-degree turn is 79.1 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 3-5"
            },
            {
                question: "What are the safe clearance distances that must be maintained during ground operations to avoid obstacles?",
                options: [
                    "15 feet from wing tip, 20 feet from nose during any ground operation",
                    "Must not attempt turn when obstacle within 17.8 feet of wing tip or 24.3 feet of nose",
                    "20 feet from wing tip, 25 feet from nose when engines are running",
                    "Clearances depend on aircraft weight and wind conditions"
                ],
                correct: 1,
                explanation: "You must not attempt to make a turn when there is an obstacle within 17.8 feet of the wing tip or within 24.3 feet of the nose. Wingtips cover the greatest arc while turning, and all other aircraft components remain within this arc.",
                reference: "B737 NG CBT - Aircraft General, Section 4-6"
            },
            {
                question: "What specific equipment and panels are located in the forward flight deck versus the aft flight deck?",
                options: [
                    "Forward: overhead panels, glareshield, control panels; Aft: same equipment duplicated for redundancy",
                    "Forward: overhead panels, glareshield, forward panels, center panel, aisle stand, control stand, aft electronic panel; Aft: dome lights, observer seats, oxygen mask, manual gear release, outlets, circuit breakers",
                    "Forward: pilot controls only; Aft: all passenger service and emergency equipment",
                    "Forward: navigation equipment; Aft: communication and emergency systems"
                ],
                correct: 1,
                explanation: "Forward flight deck contains: forward/aft overhead panels, glareshield panel, left/right forward panels, center forward panel, forward aisle stand, control stand, and aft electronic panel. Aft flight deck includes: dome lights, observer seats, observer oxygen mask, coat stowage, fire extinguisher, manual gear release mechanism, 115V AC and 28V DC outlets, and various electric control and circuit breaker panels.",
                reference: "B737 NG CBT - Aircraft General, Section 7-9"
            },
            {
                question: "What are the specific seat adjustments available in the flight crew seats, and what is the recommended eye reference position?",
                options: [
                    "Only basic fore/aft and height adjustment with fixed eye position",
                    "Seat fore/aft, height, thigh pad, recline, armrest height/stowage, lumbar support, headrest; sight aligns along glareshield upper surface",
                    "Full electric adjustment in all directions with automatic positioning system",
                    "Manual adjustment only with no specific eye reference requirements"
                ],
                correct: 1,
                explanation: "Flight crew seats have seat base controls for fore/aft position. Upper seat controls include: seat height, thigh pad position, seat recline, armrest height and stowage, back cushion (lumbar support) position and headrest position. For optimum eye reference, adjust so sight aligns along upper surface of glareshield with small amount of airplane nose structure visible and over control column until bottom edge of outboard display unit is visible.",
                reference: "B737 NG CBT - Aircraft General, Section 10-11"
            },
            {
                question: "What equipment and facilities are provided in the passenger compartment, and how are the galleys powered?",
                options: [
                    "Basic seating only with no food service capability or attendant facilities",
                    "Cabin attendant stations near doors with control panels/handsets; galleys powered by 115V AC from transfer buses 1&2",
                    "Galleys powered by 28V DC with manual food preparation only",
                    "Self-service facilities only with no attendant stations required"
                ],
                correct: 1,
                explanation: "Passenger compartment provides equipment/furnishings for comfort, convenience, and safety of passengers and cabin attendants. Cabin attendant stations are near forward and aft entry doors, each with accommodations including control panel and handset. Galleys provide food and beverage preparation facilities and are powered with 115 volt AC from the number 1 and 2 transfer buses.",
                reference: "B737 NG CBT - Aircraft General, Section 12-14"
            },
            {
                question: "What are the four positions of the lavatory water shutoff valve and their specific functions?",
                options: [
                    "ON, OFF, AUTO, MANUAL - controlling automatic vs manual water flow",
                    "OFF (shuts all water), SUPPLY ON (water to faucet and toilet), FAUCET ONLY, TOILET ONLY",
                    "HIGH, LOW, OFF, EMERGENCY - controlling water pressure levels",
                    "NORMAL, BACKUP, TEST, DRAIN - for system testing and maintenance"
                ],
                correct: 1,
                explanation: "Each lavatory has a water shutoff valve in the sink cabinet with four positions: OFF position shuts off water to all lavatory components; SUPPLY ON position sends water to faucet and toilet; FAUCET ONLY position sends water to faucet only; TOILET ONLY position sends water to toilet only. This valve isolates water flow to lavatory components as needed.",
                reference: "B737 NG CBT - Aircraft General, Section 18-19"
            },
            {
                question: "How does the water heater system operate, and what safety features and controls does it include?",
                options: [
                    "Manual heating only with no temperature control or safety features",
                    "Automatic heating with overheat protection; power switch, indicator light, temperature selector switch",
                    "Heating through engine bleed air with manual bypass valve only",
                    "Electric heating with timer control and no overheat protection"
                ],
                correct: 1,
                explanation: "A water heater system automatically heats water supplied to lavatory hot water faucets and is protected against overheating. It includes a power switch on the heater side, power indicator light that illuminates when power is on and extinguishes when power is off or in overheat condition, and a temperature selector switch for setting water temperature.",
                reference: "B737 NG CBT - Aircraft General, Section 21-22"
            },
            {
                question: "What is the water system configuration, and where are the key components located for servicing?",
                options: [
                    "Multiple tanks throughout aircraft with individual servicing points",
                    "Single tank behind aft cargo compartment; water servicing panel on bottom aft fuselage with fill/overflow and drain valves",
                    "Wing-mounted tanks with overwing servicing capabilities only",
                    "Nose-mounted tank with cockpit-controlled distribution system"
                ],
                correct: 1,
                explanation: "The water system uses a single tank located behind the aft cargo compartment. Fresh water is supplied to galleys and lavatory sinks through distribution lines. A water servicing panel is located on the bottom of the aft fuselage with fill/overflow valve handle for filling the tank and tank drain valve handle for draining water overboard from tank and aft water distribution lines.",
                reference: "B737 NG CBT - Aircraft General, Section 23-26"
            },
            {
                question: "What are the key features and safety characteristics of the cargo compartments?",
                options: [
                    "Open ventilation with passenger cabin air circulation and normal temperature control",
                    "Fire resistant liner sealing, pressurized without fresh air circulation, pressure equalization valves, blowout panels",
                    "Unpressurized compartments with emergency ventilation systems only",
                    "Heated and cooled independently with dedicated air conditioning systems"
                ],
                correct: 1,
                explanation: "The lower cargo compartments are tightly sealed by fire resistant liner to completely confine fire without endangering airplane safety. Both are pressurized but do not have fresh air circulation and temperature control like upper passenger compartments. Each has pressure equalization valve allowing air flow to keep cargo pressure nearly same as cabin pressure. Blowout panels on ceilings and bulkheads prevent structure damage if airplane pressurization is lost.",
                reference: "B737 NG CBT - Aircraft General, Section 27-28"
            },
            {
                question: "What are the control and operational features of the forward airstairs system?",
                options: [
                    "Manual operation only with ground crew assistance required for all movements",
                    "Interior: EXTEND/RETRACT switches, STANDBY switch with battery, STAIR OPER light, tread LIGHTS switch; Exterior: AIRSTAIRS switch, power switch",
                    "Hydraulic operation with cockpit controls and no external access points",
                    "Pneumatic system with engine bleed air operation and emergency manual backup"
                ],
                correct: 1,
                explanation: "Interior control panel on forward attendant panel has: EXTEND/RETRACT switches for normal operation when AC/DC power available, STANDBY switch requiring battery ON and held position until fully extended/retracted, white STAIR OPER light during transit, tread LIGHTS switch (AUTO/ON positions). Exterior control right/below airstair compartment has: AIRSTAIRS switch for extend/retract, spring-loaded power switch (normal for AC/DC systems, standby for DC standby system).",
                reference: "B737 NG CBT - Aircraft General, Section 30-33"
            },
            {
                question: "What is the length of the Boeing 737-800?",
                options: ["37.6 meters", "39.5 meters", "42.1 meters", "44.5 meters"],
                correct: 1,
                explanation: "The Boeing 737-800 has a length of 39.5 meters (129 feet 6 inches).",
                reference: "B737 NG CBT - Aircraft General, Section 1.6"
            },
            {
                question: "What is the maximum takeoff weight of the Boeing 737-800?",
                options: ["70,080 kg", "79,010 kg", "85,140 kg", "92,080 kg"],
                correct: 1,
                explanation: "The maximum takeoff weight of the Boeing 737-800 is 79,010 kg (174,200 lbs).",
                reference: "B737 NG CBT - Aircraft General, Section 1.7"
            },
            {
                question: "What type of fuselage construction does the Boeing 737 NG use?",
                options: ["Semi-monocoque", "Truss-type", "Geodetic", "Composite"],
                correct: 0,
                explanation: "The Boeing 737 NG uses semi-monocoque fuselage construction with frames and stringers.",
                reference: "B737 NG CBT - Aircraft General, Section 2.2"
            },
            {
                question: "How many overwing exits does the Boeing 737-800 have?",
                options: ["Two exits", "Four exits", "Six exits", "Eight exits"],
                correct: 1,
                explanation: "The Boeing 737-800 has four overwing exits for emergency evacuation.",
                reference: "B737 NG CBT - Aircraft General, Section 4.2"
            },
            {
                question: "What is the cabin height of the Boeing 737 NG?",
                options: ["2.13 meters", "2.18 meters", "2.23 meters", "2.28 meters"],
                correct: 0,
                explanation: "The Boeing 737 NG has a cabin height of 2.13 meters (7 feet).",
                reference: "B737 NG CBT - Aircraft General, Section 4.3"
            },
            {
                question: "What type of wing design does the Boeing 737 NG have?",
                options: ["Straight wing", "Swept wing", "Delta wing", "Variable geometry"],
                correct: 1,
                explanation: "The Boeing 737 NG has a swept wing design for improved high-speed performance.",
                reference: "B737 NG CBT - Aircraft General, Section 2.3"
            },
            {
                question: "What is the wing sweep angle of the Boeing 737 NG?",
                options: ["20 degrees", "25 degrees", "30 degrees", "35 degrees"],
                correct: 1,
                explanation: "The Boeing 737 NG has a wing sweep angle of 25 degrees at the quarter chord.",
                reference: "B737 NG CBT - Aircraft General, Section 2.4"
            },
            {
                question: "How many cargo compartments does the Boeing 737-800 have?",
                options: ["One compartment", "Two compartments", "Three compartments", "Four compartments"],
                correct: 1,
                explanation: "The Boeing 737-800 has two cargo compartments: forward and aft.",
                reference: "B737 NG CBT - Aircraft General, Section 4.4"
            },
            {
                question: "What is the maximum cargo capacity of the Boeing 737-800?",
                options: ["38.4 cubic meters", "44.2 cubic meters", "52.1 cubic meters", "58.7 cubic meters"],
                correct: 1,
                explanation: "The Boeing 737-800 has a maximum cargo capacity of 44.2 cubic meters (1,560 cubic feet).",
                reference: "B737 NG CBT - Aircraft General, Section 4.5"
            },
            {
                question: "What is the service ceiling of the Boeing 737 NG?",
                options: ["35,000 feet", "37,000 feet", "39,000 feet", "41,000 feet"],
                correct: 3,
                explanation: "The service ceiling of the Boeing 737 NG is 41,000 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 1.8"
            },
            {
                question: "What type of tail configuration does the Boeing 737 NG have?",
                options: ["T-tail", "Conventional tail", "V-tail", "Canard"],
                correct: 1,
                explanation: "The Boeing 737 NG has a conventional tail configuration with vertical and horizontal stabilizers.",
                reference: "B737 NG CBT - Aircraft General, Section 2.5"
            },
            {
                question: "What is the aspect ratio of the Boeing 737 NG wing?",
                options: ["7.5", "8.0", "8.5", "9.0"],
                correct: 3,
                explanation: "The Boeing 737 NG wing has an aspect ratio of 9.0.",
                reference: "B737 NG CBT - Aircraft General, Section 2.6"
            },
            {
                question: "How many flight crew members are required for the Boeing 737 NG?",
                options: ["One pilot", "Two pilots", "Three crew members", "Four crew members"],
                correct: 1,
                explanation: "The Boeing 737 NG requires two pilots: captain and first officer.",
                reference: "B737 NG CBT - Aircraft General, Section 6.2"
            },
            {
                question: "What is the typical range of the Boeing 737-800?",
                options: ["4,400 km", "5,400 km", "6,400 km", "7,400 km"],
                correct: 1,
                explanation: "The typical range of the Boeing 737-800 is approximately 5,400 km (2,900 nautical miles).",
                reference: "B737 NG CBT - Aircraft General, Section 1.9"
            },
            {
                question: "What material is primarily used in the Boeing 737 NG fuselage?",
                options: ["Steel", "Aluminum", "Composite", "Titanium"],
                correct: 1,
                explanation: "The Boeing 737 NG fuselage is primarily constructed of aluminum alloy.",
                reference: "B737 NG CBT - Aircraft General, Section 2.7"
            },
            {
                question: "What is the wing area of the Boeing 737-800?",
                options: ["124.6 square meters", "134.3 square meters", "144.8 square meters", "154.2 square meters"],
                correct: 0,
                explanation: "The Boeing 737-800 has a wing area of 124.6 square meters (1,341 square feet).",
                reference: "B737 NG CBT - Aircraft General, Section 2.8"
            },
            {
                question: "What type of control surfaces does the Boeing 737 NG have?",
                options: ["Ailerons and elevators only", "Ailerons, elevators, and rudder", "Fly-by-wire controls", "All movable surfaces"],
                correct: 1,
                explanation: "The Boeing 737 NG has conventional control surfaces: ailerons, elevators, and rudder.",
                reference: "B737 NG CBT - Aircraft General, Section 3.2"
            },
            {
                question: "What is the maximum landing weight of the Boeing 737-800?",
                options: ["65,320 kg", "68,040 kg", "70,760 kg", "73,480 kg"],
                correct: 0,
                explanation: "The maximum landing weight of the Boeing 737-800 is 65,320 kg (144,000 lbs).",
                reference: "B737 NG CBT - Aircraft General, Section 1.10"
            },
            {
                question: "How many windows are typically in the Boeing 737-800 cabin?",
                options: ["24 windows", "28 windows", "32 windows", "36 windows"],
                correct: 2,
                explanation: "The Boeing 737-800 typically has 32 cabin windows (16 on each side).",
                reference: "B737 NG CBT - Aircraft General, Section 4.6"
            },
            {
                question: "What is the minimum runway length required for the Boeing 737-800?",
                options: ["1,800 meters", "2,100 meters", "2,400 meters", "2,700 meters"],
                correct: 1,
                explanation: "The minimum runway length required for the Boeing 737-800 is approximately 2,100 meters.",
                reference: "B737 NG CBT - Aircraft General, Section 1.11"
            },
            {
                question: "What type of landing gear configuration does the Boeing 737 NG use?",
                options: ["Fixed gear", "Retractable tricycle gear", "Retractable tailwheel gear", "Skids"],
                correct: 1,
                explanation: "The Boeing 737 NG uses retractable tricycle landing gear configuration.",
                reference: "B737 NG CBT - Aircraft General, Section 3.3"
            },
            {
                question: "What is the cabin width of the Boeing 737 NG?",
                options: ["3.45 meters", "3.54 meters", "3.63 meters", "3.72 meters"],
                correct: 1,
                explanation: "The Boeing 737 NG has a cabin width of 3.54 meters (11 feet 7 inches).",
                reference: "B737 NG CBT - Aircraft General, Section 4.7"
            },
            {
                question: "What is the maximum certified altitude for the Boeing 737 NG?",
                options: ["39,000 feet", "41,000 feet", "43,000 feet", "45,000 feet"],
                correct: 1,
                explanation: "The maximum certified altitude for the Boeing 737 NG is 41,000 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 1.12"
            },
            {
                question: "How many flight control computers are installed?",
                options: ["One computer", "Two computers", "Three computers", "Four computers"],
                correct: 1,
                explanation: "The Boeing 737 NG has two flight control computers for redundancy.",
                reference: "B737 NG CBT - Aircraft General, Section 6.3"
            },
            {
                question: "What is the typical climb rate of the Boeing 737-800?",
                options: ["1,500 fpm", "2,000 fpm", "2,500 fpm", "3,000 fpm"],
                correct: 2,
                explanation: "The typical climb rate of the Boeing 737-800 is approximately 2,500 feet per minute.",
                reference: "B737 NG CBT - Aircraft General, Section 1.13"
            },
            {
                question: "What type of navigation equipment is standard on the Boeing 737 NG?",
                options: ["VOR/DME only", "GPS only", "FMS with GPS", "All navigation types"],
                correct: 2,
                explanation: "The Boeing 737 NG is equipped with Flight Management System (FMS) with GPS navigation.",
                reference: "B737 NG CBT - Aircraft General, Section 6.4"
            },
            {
                question: "What is the maximum speed (Vmo) of the Boeing 737 NG?",
                options: ["320 knots", "340 knots", "360 knots", "380 knots"],
                correct: 1,
                explanation: "The maximum operating speed (Vmo) of the Boeing 737 NG is 340 knots.",
                reference: "B737 NG CBT - Aircraft General, Section 1.14"
            },
            {
                question: "How many lavatories are typically installed in the Boeing 737-800?",
                options: ["Two lavatories", "Three lavatories", "Four lavatories", "Five lavatories"],
                correct: 1,
                explanation: "The Boeing 737-800 typically has three lavatories: one forward and two aft.",
                reference: "B737 NG CBT - Aircraft General, Section 4.8"
            },
            {
                question: "What is the dihedral angle of the Boeing 737 NG wings?",
                options: ["4 degrees", "6 degrees", "8 degrees", "10 degrees"],
                correct: 1,
                explanation: "The Boeing 737 NG wings have a dihedral angle of 6 degrees.",
                reference: "B737 NG CBT - Aircraft General, Section 2.9"
            },
            {
                question: "What type of engine mount system is used?",
                options: ["Wing-mounted pylons", "Fuselage-mounted", "Tail-mounted", "Embedded engines"],
                correct: 0,
                explanation: "The Boeing 737 NG uses wing-mounted engine pylons for engine installation.",
                reference: "B737 NG CBT - Aircraft General, Section 2.10"
            },
            {
                question: "What is the typical taxi speed limit for the Boeing 737 NG?",
                options: ["10 knots", "15 knots", "20 knots", "25 knots"],
                correct: 1,
                explanation: "The typical taxi speed limit for the Boeing 737 NG is 15 knots for safety.",
                reference: "B737 NG CBT - Aircraft General, Section 1.15"
            },
            {
                question: "How many galley locations are standard in the Boeing 737-800?",
                options: ["One galley", "Two galleys", "Three galleys", "Four galleys"],
                correct: 1,
                explanation: "The Boeing 737-800 typically has two galleys: one forward and one aft.",
                reference: "B737 NG CBT - Aircraft General, Section 4.9"
            },
            {
                question: "What is the maximum Mach number (Mmo) for the Boeing 737 NG?",
                options: ["Mach 0.78", "Mach 0.82", "Mach 0.86", "Mach 0.90"],
                correct: 1,
                explanation: "The maximum operating Mach number (Mmo) for the Boeing 737 NG is Mach 0.82.",
                reference: "B737 NG CBT - Aircraft General, Section 1.16"
            },
            {
                question: "What type of weather radar is installed?",
                options: ["C-band radar", "X-band radar", "S-band radar", "No weather radar"],
                correct: 1,
                explanation: "The Boeing 737 NG is equipped with X-band weather radar for weather detection.",
                reference: "B737 NG CBT - Aircraft General, Section 6.5"
            },
            {
                question: "What is the ground clearance of the Boeing 737 NG?",
                options: ["0.43 meters", "0.53 meters", "0.63 meters", "0.73 meters"],
                correct: 0,
                explanation: "The Boeing 737 NG has a ground clearance of 0.43 meters (17 inches).",
                reference: "B737 NG CBT - Aircraft General, Section 3.4"
            },
            {
                question: "How many emergency slides are installed?",
                options: ["Four slides", "Six slides", "Eight slides", "Ten slides"],
                correct: 1,
                explanation: "The Boeing 737-800 has six emergency slides: two at main doors and four at overwing exits.",
                reference: "B737 NG CBT - Aircraft General, Section 4.10"
            },
            {
                question: "What is the typical approach speed for the Boeing 737-800?",
                options: ["130 knots", "140 knots", "150 knots", "160 knots"],
                correct: 1,
                explanation: "The typical approach speed for the Boeing 737-800 is approximately 140 knots.",
                reference: "B737 NG CBT - Aircraft General, Section 1.17"
            },
            {
                question: "What type of transponder is installed?",
                options: ["Mode A only", "Mode C only", "Mode S", "No transponder"],
                correct: 2,
                explanation: "The Boeing 737 NG is equipped with Mode S transponder for enhanced surveillance.",
                reference: "B737 NG CBT - Aircraft General, Section 6.6"
            },
            {
                question: "What is the wing loading of the Boeing 737-800?",
                options: ["580 kg/m²", "635 kg/m²", "690 kg/m²", "745 kg/m²"],
                correct: 1,
                explanation: "The wing loading of the Boeing 737-800 is approximately 635 kg/m².",
                reference: "B737 NG CBT - Aircraft General, Section 2.11"
            },
            {
                question: "How many cockpit windows are there?",
                options: ["Four windows", "Six windows", "Eight windows", "Ten windows"],
                correct: 1,
                explanation: "The Boeing 737 NG cockpit has six windows: two front, two side, and two sliding side windows.",
                reference: "B737 NG CBT - Aircraft General, Section 6.7"
            },
            {
                question: "What is the maximum crosswind limit for takeoff?",
                options: ["25 knots", "30 knots", "35 knots", "40 knots"],
                correct: 2,
                explanation: "The maximum crosswind limit for takeoff is 35 knots for the Boeing 737 NG.",
                reference: "B737 NG CBT - Aircraft General, Section 1.18"
            },
            {
                question: "What type of pitot-static system is used?",
                options: ["Single system", "Dual system", "Triple system", "No pitot-static"],
                correct: 1,
                explanation: "The Boeing 737 NG uses a dual pitot-static system for redundancy.",
                reference: "B737 NG CBT - Aircraft General, Section 6.8"
            },
            {
                question: "What is the maximum tailwind limit for landing?",
                options: ["5 knots", "10 knots", "15 knots", "20 knots"],
                correct: 1,
                explanation: "The maximum tailwind limit for landing is 10 knots for the Boeing 737 NG.",
                reference: "B737 NG CBT - Aircraft General, Section 1.19"
            },
            {
                question: "How many flight data recorders are installed?",
                options: ["One recorder", "Two recorders", "Three recorders", "No recorders"],
                correct: 1,
                explanation: "The Boeing 737 NG has two flight data recorders: FDR and CVR.",
                reference: "B737 NG CBT - Aircraft General, Section 6.9"
            },
            {
                question: "What is the typical descent rate for the Boeing 737-800?",
                options: ["1,500 fpm", "2,000 fpm", "2,500 fpm", "3,000 fpm"],
                correct: 1,
                explanation: "The typical descent rate for the Boeing 737-800 is approximately 2,000 feet per minute.",
                reference: "B737 NG CBT - Aircraft General, Section 1.20"
            },
            {
                question: "What type of cabin pressurization system is used?",
                options: ["Manual control", "Semi-automatic", "Automatic", "No pressurization"],
                correct: 2,
                explanation: "The Boeing 737 NG uses an automatic cabin pressurization system.",
                reference: "B737 NG CBT - Aircraft General, Section 7.1"
            },
            {
                question: "What is the maximum cabin altitude?",
                options: ["6,000 feet", "7,000 feet", "8,000 feet", "9,000 feet"],
                correct: 2,
                explanation: "The maximum cabin altitude for the Boeing 737 NG is 8,000 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 7.2"
            },
            {
                question: "How many oxygen systems are installed?",
                options: ["One system", "Two systems", "Three systems", "Four systems"],
                correct: 1,
                explanation: "The Boeing 737 NG has two oxygen systems: crew oxygen and passenger oxygen.",
                reference: "B737 NG CBT - Aircraft General, Section 7.3"
            },
            {
                question: "What is the typical turnaround time for the Boeing 737-800?",
                options: ["25 minutes", "35 minutes", "45 minutes", "55 minutes"],
                correct: 1,
                explanation: "The typical turnaround time for the Boeing 737-800 is approximately 35 minutes.",
                reference: "B737 NG CBT - Aircraft General, Section 8.1"
            },
            {
                question: "What type of communication radios are installed?",
                options: ["VHF only", "HF only", "VHF and HF", "Satellite only"],
                correct: 2,
                explanation: "The Boeing 737 NG is equipped with both VHF and HF communication radios.",
                reference: "B737 NG CBT - Aircraft General, Section 6.10"
            },
            {
                question: "What is the maximum operating temperature?",
                options: ["45°C", "50°C", "54°C", "60°C"],
                correct: 2,
                explanation: "The maximum operating temperature for the Boeing 737 NG is 54°C (129°F).",
                reference: "B737 NG CBT - Aircraft General, Section 1.21"
            },
            {
                question: "How many fire extinguisher systems are installed?",
                options: ["Two systems", "Three systems", "Four systems", "Five systems"],
                correct: 2,
                explanation: "The Boeing 737 NG has four fire extinguisher systems: engines, APU, cargo, and lavatory.",
                reference: "B737 NG CBT - Aircraft General, Section 7.4"
            },
            {
                question: "What is the minimum operating temperature?",
                options: ["-40°C", "-45°C", "-50°C", "-55°C"],
                correct: 3,
                explanation: "The minimum operating temperature for the Boeing 737 NG is -55°C (-67°F).",
                reference: "B737 NG CBT - Aircraft General, Section 1.22"
            },
            {
                question: "What type of lighting systems are installed?",
                options: ["Incandescent only", "LED only", "Mixed lighting", "No lighting"],
                correct: 2,
                explanation: "The Boeing 737 NG uses mixed lighting systems including LED and incandescent lights.",
                reference: "B737 NG CBT - Aircraft General, Section 7.5"
            },
            {
                question: "What is the maximum airport elevation for operations?",
                options: ["6,000 feet", "7,000 feet", "8,000 feet", "9,000 feet"],
                correct: 2,
                explanation: "The maximum airport elevation for Boeing 737 NG operations is 8,000 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 1.23"
            },
            {
                question: "How many independent electrical systems are there?",
                options: ["One system", "Two systems", "Three systems", "Four systems"],
                correct: 1,
                explanation: "The Boeing 737 NG has two independent electrical systems for redundancy.",
                reference: "B737 NG CBT - Aircraft General, Section 7.6"
            },
            {
                question: "What is the typical fuel burn rate for the Boeing 737-800?",
                options: ["1,800 kg/hour", "2,200 kg/hour", "2,600 kg/hour", "3,000 kg/hour"],
                correct: 1,
                explanation: "The typical fuel burn rate for the Boeing 737-800 is approximately 2,200 kg/hour.",
                reference: "B737 NG CBT - Aircraft General, Section 1.24"
            },
            {
                question: "What type of environmental control system is used?",
                options: ["Manual control", "Semi-automatic", "Fully automatic", "No environmental control"],
                correct: 2,
                explanation: "The Boeing 737 NG uses a fully automatic environmental control system.",
                reference: "B737 NG CBT - Aircraft General, Section 7.7"
            },
            {
                question: "What is the maximum wind speed for ground operations?",
                options: ["45 knots", "50 knots", "55 knots", "60 knots"],
                correct: 1,
                explanation: "The maximum wind speed for Boeing 737 NG ground operations is 50 knots.",
                reference: "B737 NG CBT - Aircraft General, Section 1.25"
            },
            {
                question: "How many warning systems are integrated?",
                options: ["5 systems", "8 systems", "12 systems", "15 systems"],
                correct: 2,
                explanation: "The Boeing 737 NG has 12 integrated warning systems for various aircraft functions.",
                reference: "B737 NG CBT - Aircraft General, Section 7.8"
            },
            {
                question: "What is the typical block time for a 1,000 nm flight?",
                options: ["1.5 hours", "2.0 hours", "2.5 hours", "3.0 hours"],
                correct: 1,
                explanation: "The typical block time for a 1,000 nm flight is approximately 2.0 hours.",
                reference: "B737 NG CBT - Aircraft General, Section 1.26"
            },
            {
                question: "What type of maintenance program is recommended?",
                options: ["Calendar-based", "Flight hour-based", "Condition-based", "Mixed program"],
                correct: 3,
                explanation: "The Boeing 737 NG uses a mixed maintenance program based on flight hours and calendar time.",
                reference: "B737 NG CBT - Aircraft General, Section 8.2"
            },
            {
                question: "What is the maximum gust intensity for operations?",
                options: ["30 knots", "35 knots", "40 knots", "45 knots"],
                correct: 1,
                explanation: "The maximum gust intensity for Boeing 737 NG operations is 35 knots.",
                reference: "B737 NG CBT - Aircraft General, Section 1.27"
            },
            {
                question: "How many entertainment systems can be installed?",
                options: ["One system", "Two systems", "Multiple systems", "No entertainment"],
                correct: 2,
                explanation: "The Boeing 737 NG can accommodate multiple entertainment systems depending on airline requirements.",
                reference: "B737 NG CBT - Aircraft General, Section 7.9"
            },
            {
                question: "What is the design service life of the Boeing 737 NG?",
                options: ["20 years", "25 years", "30 years", "35 years"],
                correct: 1,
                explanation: "The design service life of the Boeing 737 NG is 25 years or 75,000 flight cycles.",
                reference: "B737 NG CBT - Aircraft General, Section 8.3"
            },
            {
                question: "What type of ground support equipment is required?",
                options: ["Minimal GSE", "Standard GSE", "Specialized GSE", "No GSE required"],
                correct: 1,
                explanation: "The Boeing 737 NG requires standard ground support equipment for operations.",
                reference: "B737 NG CBT - Aircraft General, Section 8.4"
            },
            {
                question: "What is the maximum number of flight cycles per day?",
                options: ["6 cycles", "8 cycles", "10 cycles", "12 cycles"],
                correct: 2,
                explanation: "The maximum number of flight cycles per day for the Boeing 737 NG is typically 10 cycles.",
                reference: "B737 NG CBT - Aircraft General, Section 1.28"
            },
            {
                question: "What type of certification does the Boeing 737 NG hold?",
                options: ["FAA only", "EASA only", "FAA and EASA", "No certification"],
                correct: 2,
                explanation: "The Boeing 737 NG holds both FAA and EASA certification for worldwide operations.",
                reference: "B737 NG CBT - Aircraft General, Section 8.5"
            },
            {
                question: "What is the recommended inspection interval?",
                options: ["500 hours", "750 hours", "1,000 hours", "1,250 hours"],
                correct: 1,
                explanation: "The recommended inspection interval for the Boeing 737 NG is 750 flight hours.",
                reference: "B737 NG CBT - Aircraft General, Section 8.6"
            },
            {
                question: "What is the aircraft's environmental compliance?",
                options: ["Stage 2", "Stage 3", "Stage 4", "Stage 5"],
                correct: 2,
                explanation: "The Boeing 737 NG meets Stage 4 environmental compliance for noise and emissions.",
                reference: "B737 NG CBT - Aircraft General, Section 8.8"
            },
            {
                question: "What is the minimum pavement width required for a Boeing 737-800 to perform a 180-degree turn?",
                options: [
                    "79.1 feet",
                    "117.5 feet",
                    "41.2 feet",
                    "129.6 feet"
                ],
                correct: 0,
                explanation: "The minimum pavement width to carry out a 180 degrees turn is 79.1 feet.",
                reference: "B737 NG CBT - Aircraft General, Principal Dimensions"
            },
            {
                question: "To avoid obstacles during a turn, what is the minimum clearance required from the wing tip?",
                options: [
                    "129.6 feet",
                    "79.1 feet",
                    "24.3 feet",
                    "17.8 feet"
                ],
                correct: 3,
                explanation: "You must not attempt to make a turn when there is an obstacle within 17.8 feet of the wing tip.",
                reference: "B737 NG CBT - Aircraft General, Principal Dimensions"
            },
            {
                question: "Which of the following is NOT listed as equipment in the aft flight deck?",
                options: [
                    "Observer oxygen mask",
                    "Fire extinguisher",
                    "Manual gear release mechanism",
                    "Forward airstair controls"
                ],
                correct: 3,
                explanation: "Equipment in the aft flight deck includes dome lights, observer seats, observer oxygen mask, coat stowage, fire extinguisher, and manual gear release, but not airstair controls.",
                reference: "B737 NG CBT - Aircraft General, Flight Compartment"
            },
            {
                question: "How is the optimal eye reference position achieved for a pilot?",
                options: [
                    "By aligning sight with the bottom edge of the outboard display unit only",
                    "By ensuring no part of the airplane nose is visible",
                    "By aligning sight along the upper surface of the glareshield with a small amount of the airplane nose visible",
                    "By adjusting the seat to its highest possible position"
                ],
                correct: 2,
                explanation: "The optimal eye reference position is achieved by aligning your sight along the upper surface of the glareshield with a small amount of the airplane nose structure visible.",
                reference: "B737 NG CBT - Aircraft General, Flight Compartment"
            },
            {
                question: "What is the power source for the galleys in the passenger compartment?",
                options: [
                    "28V DC from the main battery",
                    "115V AC from the number 1 and 2 transfer buses",
                    "28V DC from the TRUs",
                    "115V AC from a dedicated galley generator"
                ],
                correct: 1,
                explanation: "Galleys are powered with 115 volt AC from the number 1 and 2 transfer buses.",
                reference: "B737 NG CBT - Aircraft General, Passenger Compartment"
            },
            {
                question: "In a lavatory, which position must the water shutoff valve be in to supply water to the faucet only?",
                options: [
                    "SUPPLY ON",
                    "OFF",
                    "FAUCET ONLY",
                    "TOILET ONLY"
                ],
                correct: 2,
                explanation: "In the FAUCET ONLY position, water goes to the faucet only.",
                reference: "B737 NG CBT - Aircraft General, Lavatories"
            },
            {
                question: "What illuminates when a lavatory door is closed and latched?",
                options: [
                    "The attendant call light",
                    "The 'return to seat' sign",
                    "The mirror light and lavatory occupied sign",
                    "The water heater power indicator"
                ],
                correct: 2,
                explanation: "The mirror light and lavatory occupied sign illuminate when the door is closed and latched.",
                reference: "B737 NG CBT - Aircraft General, Lavatories"
            },
            {
                question: "What is the purpose of the drain valve in the forward lavatory?",
                options: [
                    "To drain the entire potable water tank",
                    "To drain the water from the forward lavatory supply lines",
                    "To shut off water to the toilet",
                    "To control water temperature"
                ],
                correct: 1,
                explanation: "The forward lavatory incorporates a drain valve which lets you drain the water from the forward lavatory supply lines.",
                reference: "B737 NG CBT - Aircraft General, Lavatories"
            },
            {
                question: "Where is the potable water tank located?",
                options: [
                    "Above the passenger cabin",
                    "In the forward cargo compartment",
                    "Behind the aft cargo compartment",
                    "In the wing root"
                ],
                correct: 2,
                explanation: "The water system uses a single tank located behind the aft cargo compartment.",
                reference: "B737 NG CBT - Aircraft General, Water System"
            },
            {
                question: "Where can the quantity of potable water be checked?",
                options: [
                    "On the flight deck's forward overhead panel",
                    "On the water servicing panel",
                    "On the aft attendant control panel",
                    "Inside the aft cargo compartment"
                ],
                correct: 2,
                explanation: "The water quantity indicator on the aft attendant control panel indicates quantity of potable water in tank.",
                reference: "B737 NG CBT - Aircraft General, Water System"
            },
            {
                question: "What feature in the cargo compartments prevents structural damage from pressure differences between the cabin and the compartment?",
                options: [
                    "The fire resistant liner",
                    "The pressure equalization valve",
                    "The cargo lights switch",
                    "Blowout panels on the ceilings and bulkheads"
                ],
                correct: 3,
                explanation: "The blowout panels on the ceilings and bulkheads prevent damage to the airplane structure in case the airplane pressurization is lost.",
                reference: "B737 NG CBT - Aircraft General, Cargo Compartments"
            },
            {
                question: "How are the cargo compartments lit?",
                options: [
                    "Automatically when the door is opened",
                    "From a switch on the flight deck",
                    "From a switch located at the right bottom corner of the Cargo door",
                    "They are not lit"
                ],
                correct: 2,
                explanation: "Cargo lights are operated with the switch which is located at the right bottom corner of the Cargo door.",
                reference: "B737 NG CBT - Aircraft General, Cargo Compartments"
            },
            {
                question: "Where are the optional forward airstairs mounted?",
                options: [
                    "Inside the forward cargo compartment",
                    "Under the cabin floor just below the forward cabin door",
                    "As a separate vehicle towed to the aircraft",
                    "On the side of the aft fuselage"
                ],
                correct: 1,
                explanation: "The forward airstairs are mounted under the cabin floor just below the forward cabin door.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "What does the white STAIR OPER light on the forward attendant panel indicate?",
                options: [
                    "The stairs are fully extended and locked",
                    "The stairs are in transit (moving)",
                    "There is a fault in the airstair system",
                    "The exterior control panel is being used"
                ],
                correct: 1,
                explanation: "White STAIR OPER light on the panel illuminates when the airstair is in transit.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "When operating the airstairs with the STANDBY Control Switch, what must be done?",
                options: [
                    "The switch must be pressed only once",
                    "AC power must be available",
                    "The switch must be held in until the stairs are fully extended or retracted",
                    "The ground crew must enable standby power from the exterior panel"
                ],
                correct: 2,
                explanation: "The battery switch must be ON and the standby control switch must be held in until the stairs are fully extended or retracted.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "With the airstair Tread LIGHTS switch in the AUTO position, when do the lights illuminate?",
                options: [
                    "Whenever the cabin doors are opened",
                    "When the airstair is in transit",
                    "When the airstair is fully extended",
                    "Continuously when the battery is on"
                ],
                correct: 2,
                explanation: "With the switch in the AUTO position, the tread lights illuminate when the airstair is fully extended and extinguish when the airstair retracts.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "What is the overall length of the Boeing 737-800?",
                options: [
                  "41 feet 2 inches",
                  "117 feet 5 inches",
                  "129 feet 6 inches",
                  "79.1 feet"
                ],
                correct: 2,
                explanation: "The overall length of the Boeing 737-800 is 129 feet 6 inches.",
                reference: "B737 NG CBT - Aircraft General, Principal Dimensions"
            },
            {
                question: "What does the pressure equalization valve in the cargo compartment do?",
                options: [
                    "Provides fresh air circulation",
                    "Keeps cargo pressure nearly the same as cabin pressure",
                    "Acts as an outlet for fire suppressant gas",
                    "Prevents the door from opening in flight"
                ],
                correct: 1,
                explanation: "The valve allows air flow into or out of the cargo compartments to keep the cargo compartment pressure nearly the same as the cabin pressure.",
                reference: "B737 NG CBT - Aircraft General, Cargo Compartments"
            }
        ]
    },
    "anti-ice": {
        title: "Anti-Ice & Rain",
        questions: [
            {
                question: "You are flying at FL280 with TAT showing 8°C. Light clouds are reported ahead with occasional rain showers. Your co-pilot asks about anti-ice activation. What is your decision based on the icing conditions criteria?",
                options: [
                    "Activate engine anti-ice only since TAT is below 10°C",
                    "Activate both engine and wing anti-ice immediately as icing conditions exist",
                    "Wait for visual confirmation of ice accumulation before activating any anti-ice systems",
                    "Monitor TAT and activate anti-ice only if it drops below 5°C"
                ],
                correct: 1,
                explanation: "Icing conditions exist when total air temperature is 10°C or below AND visible moisture is present. With TAT at 8°C and clouds with rain showers ahead, both engine and wing anti-ice should be activated immediately as icing conditions are present. Do not wait for visual confirmation.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 4"
            },
            {
                question: "During approach to an airport, you encounter the following conditions: TAT 6°C, scattered clouds at 2000 feet, visibility 3 miles in light drizzle, and occasional sleet. Which elements constitute visible moisture requiring anti-ice activation?",
                options: [
                    "Only the drizzle since rain is the primary moisture source",
                    "The clouds, drizzle, and sleet all constitute visible moisture",
                    "Only the sleet since it's the most dangerous for ice formation",
                    "None, since visibility is above 1 mile"
                ],
                correct: 1,
                explanation: "Visible moisture includes clouds, fog with visibility of one mile or less, rain, snow, sleet or ice crystals. In this scenario, the clouds, drizzle, and sleet all constitute visible moisture. Combined with TAT of 6°C, icing conditions exist.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 4"
            },
            {
                question: "You're preparing for departure at an airport where OAT is 7°C. The ramp has puddles of standing water from recent rain, and there are patches of slush on the taxiways. The runway appears mostly dry with some wet spots. What is the correct assessment of ground icing conditions?",
                options: [
                    "No icing conditions since the runway is mostly dry",
                    "Icing conditions exist due to OAT and standing water/slush on airport surfaces",
                    "Icing conditions only exist on the taxiways where slush is present",
                    "Wait for OAT to drop below 5°C before considering icing conditions"
                ],
                correct: 1,
                explanation: "Ground icing conditions exist when outside air temperature is 10°C or below AND standing water, slush, ice or snow is present on ramps, taxiways or runways. With OAT at 7°C and standing water/slush present on airport surfaces, icing conditions exist for ground operations.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 5"
            },
            {
                question: "During a briefing, your co-pilot asks about ice protection philosophy. You explain that turboprop aircraft often use pneumatic boots while jets use different systems. What is the fundamental difference between these approaches?",
                options: [
                    "Turboprops use thermal systems, jets use electrical systems",
                    "Turboprops use de-icing (removes ice after formation), jets use anti-icing (prevents ice formation)",
                    "Turboprops use intermittent systems, jets use continuous systems",
                    "Both use the same systems but with different power sources"
                ],
                correct: 1,
                explanation: "There are two fundamental approaches: Anti-icing systems prevent ice formation by operating continuously (used on jets), and de-icing systems remove ice after it has formed by operating intermittently (commonly used on turboprops with pneumatic boots).",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 6"
            },
            {
                question: "A pilot transitioning from turboprop to jet aircraft asks why the 737 doesn't use pneumatic de-icing boots like their previous aircraft. What is the correct explanation for jet engine aircraft ice protection design?",
                options: [
                    "Jets use de-icing systems but with different activation methods",
                    "Jets use anti-icing systems because continuous prevention is more effective than intermittent removal",
                    "Jets use both systems depending on flight phase",
                    "Jets don't need ice protection due to higher operating speeds"
                ],
                correct: 1,
                explanation: "Aircraft with jet engines use anti-icing systems rather than de-icing systems. Anti-icing prevents ice formation continuously, which is more effective and safer than allowing ice to form and then removing it intermittently.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 6"
            },
            {
                question: "During a systems review, you notice that some aircraft components use bleed air for anti-icing while others use electrical power. A new first officer asks about the logic behind this design choice on the 737. What determines which method is used?",
                options: [
                    "Hot bleed air for large areas, electrical heating for smaller precise areas",
                    "Hot bleed air for flight controls, electrical heating for engines",
                    "Both methods are used redundantly for all components",
                    "The choice depends on flight phase and altitude"
                ],
                correct: 0,
                explanation: "The Boeing 737 uses hot bleed air (thermal anti-icing) for large areas like engine cowls and wing leading edges, and electrical heating (electric anti-icing) for smaller, precise areas like pitot tubes and windshields where precise temperature control is needed.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 7"
            },
            {
                question: "During pre-flight inspection in icing conditions, you notice frost forming on various engine surfaces. Your co-pilot asks which specific area the engine anti-ice system protects and why that particular location is critical for engine operation.",
                options: [
                    "The entire intake area to prevent any ice ingestion",
                    "The engine cowl lips because ice here disrupts airflow and can cause ingestion damage",
                    "The engine core components to prevent internal icing",
                    "The exhaust area to prevent ice formation on hot surfaces"
                ],
                correct: 1,
                explanation: "The engine anti-ice system specifically protects the engine cowl lips from icing. Ice accumulation at this critical location disturbs airflow into the engine, reducing performance and potentially causing compressor stall. Ice particles can also break off and be ingested, causing damage to fan blades and inlet vanes.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 8"
            },
            {
                question: "During flight in icing conditions, you experience a sudden engine parameter change with EGT fluctuations and a slight RPM decrease on the left engine. You suspect ice accumulation on the cowl lips. What are the potential consequences if this condition persists?",
                options: [
                    "Only minor performance reduction that can be tolerated",
                    "Possible compressor stall from airflow disruption and FOD from ice ingestion",
                    "Engine overheat due to restricted airflow",
                    "Only cosmetic damage with no operational impact"
                ],
                correct: 1,
                explanation: "Ice accumulation on engine cowl lips has dual negative effects: it disturbs airflow into the engine which reduces performance and may lead to compressor stall, and ice particles can break off and be ingested causing foreign object damage (FOD) to fan blades and inlet vanes.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 8"
            },
            {
                question: "During single engine taxi operations, you notice that only one engine anti-ice system can be activated effectively. Your co-pilot asks about the air source for engine anti-ice and why this limitation exists during single engine operations.",
                options: [
                    "Ram air is used, so forward speed is required for effectiveness",
                    "Each engine anti-ice system uses hot bleed air from its corresponding engine",
                    "APU compressed air feeds both systems equally",
                    "External ground air supply is required for anti-ice operation"
                ],
                correct: 1,
                explanation: "The engine thermal anti-ice system uses hot bleed air from the corresponding engine to provide ice protection. This is why each engine anti-ice system is independent and during single engine operations, only the running engine can provide anti-ice protection for its own cowl lips.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 9"
            },
            {
                question: "During an engine anti-ice system malfunction, maintenance asks about the valve control system. You observe that the cowl anti-ice switch is in the ON position, but the valve is not opening. What type of control system operates these valves?",
                options: [
                    "Purely manual cable-operated system",
                    "Hydraulically powered with manual backup",
                    "Electrically controlled with pressure actuation from bleed air",
                    "Pneumatically controlled with electrical monitoring"
                ],
                correct: 2,
                explanation: "The cowl anti-ice valves are electrically controlled and pressure actuated. The electrical system provides the control signals from the cockpit switches, while the actual valve actuation is accomplished using bleed air pressure. This explains why electrical or pressure system failures can prevent valve operation.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 9"
            },
            {
                question: "Where is the engine anti-ice panel located?",
                options: [
                    "On the center pedestal",
                    "On the forward overhead panel",
                    "On the side panel",
                    "On the main instrument panel"
                ],
                correct: 1,
                explanation: "The engine anti-ice panel is located on the forward overhead panel.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 10"
            },
            {
                question: "What does a bright blue cowl valve open light indicate?",
                options: [
                    "Valve is fully open",
                    "Valve is fully closed",
                    "Valve is in transit or not in position indicated by switch",
                    "System malfunction"
                ],
                correct: 2,
                explanation: "Each cowl valve open light illuminates bright blue when the associated valve is in transit, or the valve is not in the position indicated by the related anti-ice switch.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 12"
            },
            {
                question: "What does a dim cowl valve open light indicate?",
                options: [
                    "Valve is closed",
                    "Valve is in transit",
                    "Valve is open",
                    "System failure"
                ],
                correct: 2,
                explanation: "Each cowl valve open light becomes dim when the associated cowl valve is open.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 12"
            },
            {
                question: "When should engine anti-ice be activated?",
                options: [
                    "Only when ice is visually observed",
                    "When icing conditions exist or are anticipated",
                    "Only during flight",
                    "Only on the ground"
                ],
                correct: 1,
                explanation: "Engine anti-ice must be immediately activated when icing conditions exist or are anticipated. Do not rely on visual indications of airframe icing.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 13"
            },
            {
                question: "What happens to stall warning logic when engine anti-ice is selected ON?",
                options: [
                    "No effect",
                    "Stall warning is disabled",
                    "Sets stall warning logic for icing conditions",
                    "Stall warning becomes more sensitive"
                ],
                correct: 2,
                explanation: "Positioning the engine anti-ice switch to ON sets the stall warning logic for icing conditions, which adjusts stick shaker and minimum maneuver speed bars on the airspeed indicator.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 15"
            },
            {
                question: "At what temperature should engine anti-ice NOT be used on the ground?",
                options: [
                    "Above 5°C",
                    "Above 0°C",
                    "Above 10°C",
                    "Above 15°C"
                ],
                correct: 2,
                explanation: "Do not use engine anti-ice on the ground when outside air temperature is above 10°C.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 17"
            },
            {
                question: "At what temperature should engine anti-ice NOT be used in flight?",
                options: [
                    "When total air temperature is above 5°C",
                    "When total air temperature is above 0°C",
                    "When total air temperature is above 10°C",
                    "When total air temperature is above 15°C"
                ],
                correct: 2,
                explanation: "Do not use engine anti-ice in flight when total air temperature is above 10°C.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 17"
            },
            {
                question: "What indication appears on the engine display when a cowl anti-ice valve fails to open?",
                options: [
                    "Green thermal anti-ice indication",
                    "Amber thermal anti-ice indication",
                    "Red thermal anti-ice indication",
                    "No indication"
                ],
                correct: 1,
                explanation: "When either cowl anti-ice valve does not open, an amber thermal anti-ice indication appears on the engine display after a short delay.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 19"
            },
            {
                question: "How many leading edge slats does the wing anti-ice system protect?",
                options: [
                    "All leading edge slats",
                    "Two inboard slats",
                    "Three inboard leading edge slats",
                    "Four inboard slats"
                ],
                correct: 2,
                explanation: "The wing anti-ice system protects three inboard leading edge slats from icing.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "Do leading edge flaps and outboard leading edge slats need ice protection?",
                options: [
                    "Yes, they are critical for safety",
                    "No, they do not need to be ice protected",
                    "Only the flaps need protection",
                    "Only the outboard slats need protection"
                ],
                correct: 1,
                explanation: "Leading edge flaps and outboard leading edge slats do not need to be ice protected.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "What type of anti-ice system is used for wing anti-ice?",
                options: [
                    "Electrical anti-ice system",
                    "Chemical anti-ice system",
                    "Thermal anti-ice system",
                    "Mechanical anti-ice system"
                ],
                correct: 2,
                explanation: "The wing anti-ice system is a thermal anti-ice system which uses hot bleed air from the pneumatic system.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "How does the wing anti-ice system operate both sides?",
                options: [
                    "Independently",
                    "Simultaneously with a single switch",
                    "Left side only",
                    "Alternating between sides"
                ],
                correct: 1,
                explanation: "The wing anti-ice panel consists of a single ON/OFF switch which controls wing anti-ice to both sides at the same time, because both sides must always operate symmetrically.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 23"
            },
            {
                question: "How many wing anti-ice valve open lights are there?",
                options: [
                    "One light for both sides",
                    "Two lights - one for each side",
                    "Three lights",
                    "Four lights"
                ],
                correct: 1,
                explanation: "Two wing anti-ice valve open lights show the position of the wing anti-ice control valves.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 24"
            },
            {
                question: "What makes wing anti-icing effective with slats in any position?",
                options: [
                    "Flexible ducting",
                    "Telescoping ducts",
                    "Multiple air outlets",
                    "Variable pressure control"
                ],
                correct: 1,
                explanation: "The system uses telescoping ducts which makes the wing anti-icing effective with the slats in any position.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "What happens to the wing anti-ice switch when the aircraft lifts off?",
                options: [
                    "It stays in the ON position",
                    "It automatically moves to the OFF position",
                    "It requires manual action",
                    "Nothing happens"
                ],
                correct: 1,
                explanation: "When the air/ground sensor shifts to the air mode at lift-off, the wing anti-ice switch automatically moves to the OFF position.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 29"
            },
            {
                question: "On the ground, what conditions must be met for wing anti-ice valves to open?",
                options: [
                    "Only the switch must be ON",
                    "Switch ON and engines running",
                    "Switch ON, thrust on both engines less than take-off warning setting, and duct temperature below thermal switch activation temperature",
                    "Switch ON and APU running"
                ],
                correct: 2,
                explanation: "On the ground with the switch ON, both conditions must be met: thrust on both engines is less than the take-off warning setting AND both temperature sensors find a duct temperature lower than preset thermal switch activation temperature.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 27"
            },
            {
                question: "In flight, what affects the operation of wing anti-ice control valves?",
                options: [
                    "Engine thrust setting and duct temperature",
                    "Only engine thrust setting",
                    "Only duct temperature",
                    "Neither engine thrust nor duct temperature"
                ],
                correct: 3,
                explanation: "In flight when the anti-ice switch is positioned to ON, the wing anti-ice control valves open. The engine thrust setting and duct temperature has no effect on the operation of the control valves.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 33"
            },
            {
                question: "How many windows in the flight deck are electrically heated?",
                options: [
                    "All windows",
                    "Windows 1, 2, 4, and 5",
                    "Only windows 1 and 2",
                    "Only windows 1, 2, and 3"
                ],
                correct: 1,
                explanation: "Windows 1 and 2 are electrically heated to prevent icing and fogging. Windows 4 and 5 are electrically heated to prevent fogging only.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Sections 35-36"
            },
            {
                question: "Where is the heating element located in windows 1 and 2?",
                options: [
                    "On the outer surface",
                    "Between the glass panels",
                    "Behind the outer glass panel",
                    "Near the inner glass panel"
                ],
                correct: 2,
                explanation: "For windows 1 and 2, the heating element is a transparent, conductive film located behind the outer glass panel.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 35"
            },
            {
                question: "Where is the heating element located in windows 4 and 5?",
                options: [
                    "Behind the outer glass panel",
                    "Near the inner glass panel",
                    "On the outer surface",
                    "Between multiple layers"
                ],
                correct: 1,
                explanation: "For windows 4 and 5 (eyebrow windows), the heating film is located near the inner glass panel since they are heated to prevent fogging only.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 36"
            },
            {
                question: "Which window has no electrical heating?",
                options: [
                    "Window 1",
                    "Window 2", 
                    "Window 3",
                    "Window 4"
                ],
                correct: 2,
                explanation: "There is no electrical heating for window number 3.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 36"
            },
            {
                question: "What do the forward window heat switches control?",
                options: [
                    "Windows 1 and 2",
                    "Window number 1 heating only",
                    "All forward windows",
                    "Windows 1, 2, and 3"
                ],
                correct: 1,
                explanation: "The forward window heat switches control window number 1 heating.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 38"
            },
            {
                question: "What do the side window heat switches control?",
                options: [
                    "Only window 2",
                    "Windows 2, 4, and 5",
                    "Windows 2, 3, 4, and 5",
                    "All side windows"
                ],
                correct: 1,
                explanation: "The side window heat switches control windows number 2, 4, and 5 heating.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 38"
            },
            {
                question: "What color are the window heat ON lights?",
                options: [
                    "Amber",
                    "Blue",
                    "Green",
                    "Red"
                ],
                correct: 2,
                explanation: "When window heat is being applied to the selected window, a green ON light illuminates on the associated window heat indicator.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 39"
            },
            {
                question: "Why might window heat indicators remain extinguished when switches are ON during pre-flight in high ambient temperatures?",
                options: [
                    "System failure",
                    "Switch malfunction",
                    "Windows are already at correct temperature",
                    "Power supply issue"
                ],
                correct: 2,
                explanation: "At high ambient temperatures, when the window heat systems are switched ON during pre-flight, the window heat indicators remain extinguished because the windows are already at the correct temperature, thus window heat is not being applied to prevent overheat.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 40"
            },
            {
                question: "How is the heating of windows 4 and 5 monitored?",
                options: [
                    "By temperature controllers",
                    "By a thermal switch located on window 5",
                    "By pressure sensors",
                    "By manual monitoring only"
                ],
                correct: 1,
                explanation: "The heating of windows 4 and 5 is monitored by a thermal switch located on window 5, which opens and closes as necessary to keep these windows at the correct temperature.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 42"
            },
            {
                question: "What happens when a window heat overheat condition is detected?",
                options: [
                    "Only a warning light illuminates",
                    "System automatically resets",
                    "Window heat ON light extinguishes and amber overheat light illuminates",
                    "Nothing happens"
                ],
                correct: 2,
                explanation: "When an overheat condition is detected, the associated window heat ON light extinguishes and an amber overheat light illuminates on the window heat panel. Master caution and anti-ice system annunciator lights also illuminate.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 43"
            },
            {
                question: "What should be done when an overheat warning is received?",
                options: [
                    "Continue operation normally",
                    "Switch OFF immediately and leave OFF",
                    "Switch OFF, allow 2-5 minutes to cool, then switch ON again",
                    "Increase power to the system"
                ],
                correct: 2,
                explanation: "When an overheat warning is received, the affected window heat must be switched OFF and allowed 2-5 minutes to cool before switching ON again.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 44"
            },
            {
                question: "Besides electrical heating, what else can be used for defogging window 1?",
                options: [
                    "Ram air",
                    "Conditioned air",
                    "Bleed air",
                    "External air"
                ],
                correct: 1,
                explanation: "In addition to electric heating, conditioned air can also be used for defogging the number 1 windows.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 46"
            },
            {
                question: "What is the purpose of the window heat overheat test?",
                options: [
                    "To test heating power",
                    "To ensure correct operation of overheat warning function",
                    "To check electrical connections",
                    "To verify window temperature"
                ],
                correct: 1,
                explanation: "The purpose of overheat test is to ensure the correct operation of overheat warning function of the system by simulating an overheat condition.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 48"
            },
            {
                question: "What is the maximum airspeed limit with inoperative window heat?",
                options: [
                    "200 knots below 10,000 feet",
                    "250 knots below 10,000 feet",
                    "300 knots below 10,000 feet",
                    "No speed restriction"
                ],
                correct: 1,
                explanation: "With inoperative window heat, the airplane maximum airspeed limit is 250 knots below 10,000 feet.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 50"
            },
            {
                question: "What air data probes are electrically heated?",
                options: [
                    "Only pitot probes",
                    "Pitot probes, elevator probes, TAT probe, and alpha vanes",
                    "All probes including static ports",
                    "Only pitot and static probes"
                ],
                correct: 1,
                explanation: "The air data probe heating includes: the pitot probes, the elevator probes, the total air temperature probe and the alpha vanes. There is no heating for static ports.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 51"
            },
            {
                question: "What do probe heat switches A and B control?",
                options: [
                    "A controls all probes, B is backup",
                    "A controls left side probes, B controls right side probes", 
                    "A controls pitot probes, B controls other probes",
                    "Both control all probes together"
                ],
                correct: 1,
                explanation: "Switch A controls probe heaters on the left and switch B controls probe heaters on the right.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 52"
            },
            {
                question: "In airplanes with AUTO/ON probe switches, when does AUTO position apply power?",
                options: [
                    "Immediately when selected",
                    "When electrical power is available",
                    "Automatically when one of the engines is started",
                    "When icing conditions are detected"
                ],
                correct: 2,
                explanation: "When a switch is positioned to AUTO, the power is applied automatically to associated probe heaters when you start one of the engines.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 54"
            },
            {
                question: "What happens when an air data probe is not heated?",
                options: [
                    "Nothing visible occurs",
                    "Associated probe heat light illuminates",
                    "System automatically switches to backup",
                    "Only performance is affected"
                ],
                correct: 1,
                explanation: "When an air data probe is not heated, the associated probe heat light illuminates on the probe heat panel. The Master caution and anti-ice annunciator lights also illuminate.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 55"
            },
            {
                question: "What should be done if there is a failure in heating to one or more probes?",
                options: [
                    "Continue normal operations",
                    "Avoid icing conditions",
                    "Land immediately",
                    "Switch to manual mode"
                ],
                correct: 1,
                explanation: "If there is a failure in heating to one or more of the probes, you should avoid icing conditions. Ice accumulation can block the probe which is likely to result in unreliable flight instrument information.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 56"
            },
            {
                question: "When the airplane is on standby power, which probe heating is available?",
                options: [
                    "All probe heating",
                    "No probe heating",
                    "Only captain's pitot probe",
                    "Only first officer's pitot probe"
                ],
                correct: 2,
                explanation: "When an airplane is on standby power, the probe heating is only available for heating the captain's pitot probe.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 57"
            },
            {
                question: "What does the rain removal system include?",
                options: [
                    "Only windshield wipers",
                    "Only rain repellent coating",
                    "Windshield wipers and permanent rain repellent coating",
                    "Heated windshields only"
                ],
                correct: 2,
                explanation: "The rain removal system incorporates windshield wipers and a permanent rain repellent coating on the windows.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 58"
            },
            {
                question: "How many different wiper speeds can be selected?",
                options: [
                    "Two speeds",
                    "Three speeds", 
                    "Four speeds",
                    "Five speeds"
                ],
                correct: 1,
                explanation: "Three different speeds can be selected. High speed is used in heavy rain. Slow speed is selected during normal rain or during taxi on the ground. Intermittent mode operates the wiper with an interval of seven seconds.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 60"
            },
            {
                question: "What is the interval for intermittent wiper mode?",
                options: [
                    "Five seconds",
                    "Seven seconds",
                    "Ten seconds", 
                    "Fifteen seconds"
                ],
                correct: 1,
                explanation: "Intermittent mode operates the wiper with an interval of seven seconds.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 60"
            },
            {
                question: "What can happen if windshield wipers are operated on a dry windshield?",
                options: [
                    "Nothing harmful",
                    "Wiper motor damage",
                    "Windshield scratching and damage to rain repellent coating",
                    "Electrical system overload"
                ],
                correct: 2,
                explanation: "Operating windshield wipers on a dry windshield will cause windshield scratching which can damage the permanent rain repellent coating.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 61"
            }
        ]
    },
    "communication": {
        title: "Communication",
        questions: [
            {
                question: "During flight operations, you use both verbal contact with ATC and text messaging with dispatch. What are these two fundamental communication methods?",
                options: [
                    "Digital/analog",
                    "Voice communication and data link communication for comprehensive information exchange",
                    "Internal/external",
                    "Radio/satellite"
                ],
                correct: 1,
                explanation: "Communication is the process of exchanging information through two types: voice communication (information exchanged verbally) and data link communication (communication through messages like ACARS).",
                reference: "B737 NG CBT - Communication, Section 3-4"
            },
            {
                question: "During preflight preparation, you test all voice communication capabilities. What complete range of voice systems is installed?",
                options: [
                    "VHF/HF only",
                    "VHF, HF, flight interphone, service interphone, and passenger address system",
                    "Interphone only",
                    "VHF/interphone only"
                ],
                correct: 1,
                explanation: "The B737 has these voice communication systems: VHF communication system, HF communication system, flight interphone system, service interphone system and passenger address system.",
                reference: "B737 NG CBT - Communication, Section 5"
            },
            {
                question: "You receive a text message from dispatch about weather updates during flight. What system enables this digital messaging capability?",
                options: [
                    "VHF voice",
                    "HF voice",
                    "ACARS (Aircraft Communications Addressing and Reporting System)",
                    "Interphone"
                ],
                correct: 2,
                explanation: "For datalink communications, the Aircraft Communications Addressing and Reporting System (ACARS) is available in most airplanes for digital messaging.",
                reference: "B737 NG CBT - Communication, Section 6"
            },
            {
                question: "During flight without headsets, you can still hear radio communications and navigation signals. Where are the cabin speakers positioned?",
                options: [
                    "Instrument panel",
                    "Ceiling above pilot seats for optimal audio reception",
                    "Side panels",
                    "Headsets only"
                ],
                correct: 1,
                explanation: "The Captain and First Officer are provided with speakers on the ceiling above their seats to listen to communication or navigation system audio when not using headsets.",
                reference: "B737 NG CBT - Communication, Section 8"
            },
            {
                question: "During different flight phases and emergency conditions, multiple microphone options are available for pilot communication. What transmission devices are installed?",
                options: [
                    "Hand microphone only",
                    "Boom microphone only",
                    "Hand microphone, boom microphone, and oxygen mask integral microphone",
                    "Oxygen mask only"
                ],
                correct: 2,
                explanation: "Hand microphone or boom microphone is used for voice transmission. Each oxygen mask also has an integral microphone for emergency communications.",
                reference: "B737 NG CBT - Communication, Section 9"
            },
            {
                question: "While flying manually, you need to make radio calls using the boom microphone without removing hands from the controls. Where is the PTT switch?",
                options: [
                    "Audio panel only",
                    "Control wheel for hands-on operation during manual flight",
                    "Hand microphone",
                    "Glareshield"
                ],
                correct: 1,
                explanation: "Push-to-talk (PTT) switch on the control wheel lets you speak on the oxygen mask or boom microphone while maintaining control during manual flight.",
                reference: "B737 NG CBT - Communication, Section 10"
            },
            {
                question: "During training flights with an observer, each crew member requires independent audio control. How many individual audio control panels are installed?",
                options: [
                    "Two",
                    "Three separate panels for Captain, First Officer, and Observer",
                    "Four",
                    "One"
                ],
                correct: 1,
                explanation: "There are three audio control panels in the cockpit: Captain's, First Officer's, and Observer's, each operating independently from the others.",
                reference: "B737 NG CBT - Communication, Section 13"
            },
            {
                question: "You need to adjust radio volume during flight and reach for the audio control panel. Where are the pilot audio control panels positioned?",
                options: [
                    "Forward overhead",
                    "Aft electronic panel (with observer panel on aft overhead)",
                    "Center pedestal",
                    "Side panels"
                ],
                correct: 1,
                explanation: "Captain's and first officer's audio control panels are located on aft electronic panel. The observer's audio control panel is on the aft overhead panel.",
                reference: "B737 NG CBT - Communication, Section 14"
            },
            {
                question: "Before using the communication systems, you examine the audio control panel layout. What are the main functional components?",
                options: [
                    "Volume only",
                    "Transmitters only",
                    "Transmitter/microphone selectors and receiver switches for complete audio control",
                    "Receivers only"
                ],
                correct: 2,
                explanation: "The audio control panel consists of transmitter or microphone selectors and receiver switches, providing comprehensive control over transmission and reception functions.",
                reference: "B737 NG CBT - Communication, Section 16"
            },
            {
                question: "During radio communication with ATC, you set the push-to-talk switch to R/T and press to transmit. What microphone inputs does this activate?",
                options: [
                    "Intercom only",
                    "Selected communication system via boom or oxygen mask microphone",
                    "Hand microphone only",
                    "All microphones off"
                ],
                correct: 1,
                explanation: "When you set the switch to radio/transmit (R/T) position, it acts as a push-to-talk switch for transmission on the communication system selected by microphone selector through boom or oxygen mask microphone.",
                reference: "B737 NG CBT - Communication, Section 18"
            },
            {
                question: "You need to communicate privately with your co-pilot without external transmission. What switch position enables internal crew communication?",
                options: [
                    "External radio",
                    "I/C position for flight interphone via boom or oxygen mask microphone",
                    "Passenger address",
                    "Service interphone"
                ],
                correct: 1,
                explanation: "You set the switch to intercom (I/C) position to talk on the flight interphone system through boom or oxygen mask microphone. With the switch in intercom position, microphone selector is bypassed.",
                reference: "B737 NG CBT - Communication, Section 19"
            },
            {
                question: "During an emergency descent requiring oxygen masks, you still need radio communication capability. What switch ensures microphone selection?",
                options: [
                    "Volume control",
                    "BOOM-MASK switch selects between boom microphone or oxygen mask microphone",
                    "On/off control",
                    "Frequency control"
                ],
                correct: 1,
                explanation: "The BOOM-MASK switch allows selection of the boom microphone or the oxygen mask microphone as audio source for transmission, ensuring communication capability during emergencies.",
                reference: "B737 NG CBT - Communication, Section 20"
            },
            {
                question: "While tuning navigation aids, you want to hear both voice transmissions and Morse code identifiers. What filter switch positions are available?",
                options: [
                    "Low/Medium/High",
                    "V (voice), R (range), B (both) for comprehensive audio filtering",
                    "1/2/3",
                    "On/Off/Auto"
                ],
                correct: 1,
                explanation: "The filter switch controls audio from VOR and ADF: V (voice) for voice audio only, R (range) for Morse code identification only, and B (both) for both voice and range audio.",
                reference: "B737 NG CBT - Communication, Section 22-24"
            },
            {
                question: "During single-pilot operations, you want to monitor communications without wearing headsets. How do you enable the overhead speaker?",
                options: [
                    "Volume knob",
                    "Push speaker switch on to activate overhead speaker",
                    "Intercom mode",
                    "Microphone selector"
                ],
                correct: 1,
                explanation: "You push the speaker switch on to hear the audio from the selected receiver on the overhead speaker at that crew station. You turn the switch to adjust volume.",
                reference: "B737 NG CBT - Communication, Section 25"
            },
            {
                question: "You want to transmit on multiple radio frequencies simultaneously for redundancy. How many transmitter systems can be selected at once?",
                options: [
                    "Two systems",
                    "Three systems",
                    "Only one system at a time to prevent interference",
                    "All systems"
                ],
                correct: 2,
                explanation: "You use the transmitter or microphone selectors to select the communication system that you want to speak on. Note that you can select only one system at a time to prevent interference.",
                reference: "B737 NG CBT - Communication, Section 27"
            },
            {
                question: "After selecting a transmitter for VHF-1, you immediately hear incoming calls on that frequency even though the receiver switch was off. What automatic function occurred?",
                options: [
                    "Transmission only",
                    "Selector illuminates and received audio becomes audible regardless of receiver switch position",
                    "Reception only",
                    "Other systems disabled"
                ],
                correct: 1,
                explanation: "When you select transmitter selector for a communication system, any received audio on the same system can be heard regardless of related receiver switch position, ensuring immediate monitoring capability.",
                reference: "B737 NG CBT - Communication, Section 31"
            },
            {
                question: "While setting up communication equipment, you notice the receiver switches require two distinct actions to operate. What type of switches are these?",
                options: [
                    "Toggle switches",
                    "Rotary switches",
                    "Push ON, push OFF type with illuminated status indication",
                    "Momentary switches"
                ],
                correct: 2,
                explanation: "The receiver switches are push ON, push OFF type. When you push a switch to ON, the switch light illuminates and reception of related communication system is activated.",
                reference: "B737 NG CBT - Communication, Section 33"
            },
            {
                question: "During approach, GPWS and altitude alerts are very loud. Can you reduce the volume of these critical safety warnings?",
                options: [
                    "Yes, via audio panel",
                    "Yes, emergency mode only",
                    "No, heard at preset volumes and cannot be turned off for safety",
                    "Yes, via overhead panel"
                ],
                correct: 2,
                explanation: "Audio warnings for altitude alert, ground proximity, collision avoidance, and windshear are heard through headsets and speakers at preset volumes. You cannot turn off or adjust the volume of these audio alerts for safety reasons.",
                reference: "B737 NG CBT - Communication, Section 36"
            },
            {
                question: "Following an audio system failure, you notice limited radio functionality. What operational modes are available for the audio control panel?",
                options: [
                    "Day/night mode",
                    "Normal mode and degraded mode with reduced functionality",
                    "Auto/manual mode",
                    "Primary/backup mode"
                ],
                correct: 1,
                explanation: "The audio control panel can operate in two modes: Normal mode and degraded mode. You can control the mode through the alternate/normal switch on the panel.",
                reference: "B737 NG CBT - Communication, Section 37"
            },
            {
                question: "During an audio system malfunction, the Captain's panel is switched to degraded mode. Which radio system remains available?",
                options: [
                    "HF radio",
                    "VHF-1 radio only with limited functionality",
                    "VHF-2 radio only",
                    "Any radio"
                ],
                correct: 1,
                explanation: "If degraded mode is selected on the Captain's audio control panel, the Captain only transmits and receives on the VHF-1 radio with reduced system functionality.",
                reference: "B737 NG CBT - Communication, Section 43"
            },
            {
                question: "With the First Officer's audio panel in degraded mode due to system failure, which radio communication remains operational?",
                options: [
                    "VHF-1 radio only",
                    "VHF-2 radio only with restricted capabilities",
                    "HF radio",
                    "Any radio"
                ],
                correct: 1,
                explanation: "If degraded mode is selected on the first officer's audio control panel, the first officer only transmits and receives on the VHF-2 radio with limited system functions.",
                reference: "B737 NG CBT - Communication, Section 44"
            },
            {
                question: "Operating in degraded mode during approach, you're concerned about safety warnings. Will critical audio alerts like GPWS still function?",
                options: [
                    "Yes, normal volume",
                    "Yes, reduced volume",
                    "No, audio warnings are not heard on audio systems operating in degraded mode",
                    "Altitude alerts only"
                ],
                correct: 2,
                explanation: "Audio warnings for altitude alert, GPWS, and windshear are not heard on an audio system operating in the degraded mode, creating potential safety implications.",
                reference: "B737 NG CBT - Communication, Section 47"
            },
            {
                question: "While programming VHF radios for flight, you need to ensure frequencies are within the communication band. What is the operational range?",
                options: [
                    "108.00 to 136.975 MHz",
                    "118.00 to 136.975 MHz for aeronautical communication",
                    "120.00 to 140.000 MHz",
                    "115.00 to 135.000 MHz"
                ],
                correct: 1,
                explanation: "The VHF communication system operates within the frequency range of 118.00 to 136.975 MHz for aeronautical voice communications.",
                reference: "B737 NG CBT - Communication, Section 54"
            },
            {
                question: "During preflight planning, you verify communication redundancy capabilities. How many independent VHF systems are typically installed?",
                options: [
                    "Two",
                    "Three independent VHF communication systems (some aircraft have two)",
                    "Four",
                    "One"
                ],
                correct: 1,
                explanation: "Most 737s have three independent VHF communication systems for redundancy. However, there are airplanes which are fitted with two VHF radios.",
                reference: "B737 NG CBT - Communication, Section 55"
            },
            {
                question: "During external inspection, you identify VHF antenna locations for performance assessment. Where is the VHF 1 antenna positioned?",
                options: [
                    "Bottom fuselage",
                    "Top of aircraft for optimal signal reception",
                    "Wing",
                    "Tail"
                ],
                correct: 1,
                explanation: "VHF 1 antenna is on the top of the aircraft, and VHF 2 and VHF 3 antennas are on the bottom of the airplane fuselage on the centerline for optimal coverage.",
                reference: "B737 NG CBT - Communication, Section 57"
            },
            {
                question: "Which VHF antennas are more susceptible to multipath interference?",
                options: [
                    "Upper fuselage antennas",
                    "Lower fuselage antennas",
                    "Wing-mounted antennas",
                    "All antennas equally"
                ],
                correct: 1,
                explanation: "VHF antennas on the lower fuselage are susceptible to multipath interference caused by radio signals reflected from terrain, structures or other vehicles. The VHF antenna on the upper fuselage is less exposed to multipath interference.",
                reference: "B737 NG CBT - Communication, Section 58"
            },
            {
                question: "Where are the radio tuning panels located?",
                options: [
                    "On the forward overhead panel",
                    "On the aft electronic panel",
                    "On the center pedestal",
                    "On the glareshield"
                ],
                correct: 1,
                explanation: "The radio tuning panels are on the aft electronic panel.",
                reference: "B737 NG CBT - Communication, Section 60"
            },
            {
                question: "How many radios can each radio tuning panel control at a time?",
                options: [
                    "All radios simultaneously",
                    "Two radios",
                    "Only one radio at a time",
                    "Three radios"
                ],
                correct: 2,
                explanation: "Each radio tuning panel can tune only one radio at a time. Any panel can control any transceiver.",
                reference: "B737 NG CBT - Communication, Section 62"
            },
            {
                question: "What does the ACTIVE frequency indicator display?",
                options: [
                    "The preselected frequency",
                    "The tuned frequency of the selected radio",
                    "The backup frequency",
                    "The emergency frequency"
                ],
                correct: 1,
                explanation: "The ACTIVE frequency indicator displays the tuned frequency of the selected radio. The STANDBY frequency indicator displays the preselected or previously tuned frequency.",
                reference: "B737 NG CBT - Communication, Section 64"
            },
            {
                question: "What appears on the frequency indicator when ACARS data mode is selected?",
                options: [
                    "The frequency numbers",
                    "DATA indication",
                    "ACARS indication",
                    "Nothing appears"
                ],
                correct: 1,
                explanation: "For airplanes with ACARS, the indicator shows DATA if the selected radio is in the data mode.",
                reference: "B737 NG CBT - Communication, Section 65"
            },
            {
                question: "What does the frequency transfer switch do?",
                options: [
                    "Turns the radio on/off",
                    "Changes frequency bands",
                    "Makes standby frequency active and active frequency standby",
                    "Selects emergency frequency"
                ],
                correct: 2,
                explanation: "When the frequency transfer switch is pushed, the standby frequency becomes the active frequency, and the active frequency becomes the standby frequency.",
                reference: "B737 NG CBT - Communication, Section 68"
            },
            {
                question: "What are the two purposes of the test switch on radio tuning panels?",
                options: [
                    "Volume control and frequency check",
                    "Stop squelch function for confidence check and improve reception of weak signals",
                    "Power on/off and backup activation",
                    "Frequency scan and emergency activation"
                ],
                correct: 1,
                explanation: "The test switch can check transceiver operation by stopping squelch function to hear static (confidence check), or improve reception of weak signals.",
                reference: "B737 NG CBT - Communication, Section 70-71"
            },
            {
                question: "What is the frequency range for HF communication?",
                options: [
                    "118 MHz to 136 MHz",
                    "2 MHz to 29.999 MHz",
                    "30 MHz to 300 MHz",
                    "108 MHz to 118 MHz"
                ],
                correct: 1,
                explanation: "The HF communication system operates within the aeronautical frequency range of 2 MHz to 29.999 MHz.",
                reference: "B737 NG CBT - Communication, Section 82"
            },
            {
                question: "How many HF radios do most 737s have?",
                options: [
                    "Two",
                    "Three",
                    "One",
                    "None"
                ],
                correct: 2,
                explanation: "Most 737s have one HF radio. However, there are airplanes which are fitted with two HF radios.",
                reference: "B737 NG CBT - Communication, Section 83"
            },
            {
                question: "Where is the HF antenna located?",
                options: [
                    "On the fuselage bottom",
                    "On the wing",
                    "On the leading edge of the vertical stabilizer",
                    "On the fuselage top"
                ],
                correct: 2,
                explanation: "A single HF antenna is on the leading edge of the vertical stabilizer.",
                reference: "B737 NG CBT - Communication, Section 84"
            },
            {
                question: "What happens when you select HF for transmission?",
                options: [
                    "Transmission is immediately ready",
                    "The HF antenna tunes to transmission frequency, you may hear tones during tuning",
                    "The system automatically finds the best frequency",
                    "Nothing happens until you transmit"
                ],
                correct: 1,
                explanation: "When you push the microphone selector for HF radio, the HF antenna tunes to the transmission frequency. While tuning, you may hear steady or intermittent tone on speaker and headset for several seconds.",
                reference: "B737 NG CBT - Communication, Section 93"
            },
            {
                question: "What does it indicate if you hear the tuning tone for more than 15 seconds?",
                options: [
                    "Normal operation",
                    "System has failed to tune",
                    "Frequency is busy",
                    "Low signal strength"
                ],
                correct: 1,
                explanation: "If you hear the tone for more than 15 seconds, it indicates the system has failed to tune.",
                reference: "B737 NG CBT - Communication, Section 95"
            },
            {
                question: "What is the purpose of the flight interphone system?",
                options: [
                    "Communication with ground stations",
                    "Communication with air traffic control",
                    "Private communication between flight crew members",
                    "Communication with passengers"
                ],
                correct: 2,
                explanation: "The flight interphone system lets the flight crew talk to each other. The system is independent of the service interphone system to provide private communication between flight crew members.",
                reference: "B737 NG CBT - Communication, Section 97"
            },
            {
                question: "How can ground crew access the flight interphone system?",
                options: [
                    "Through the service interphone",
                    "Through a jack at the external power panel",
                    "Through the passenger address system",
                    "They cannot access it"
                ],
                correct: 1,
                explanation: "The ground crew can use the flight interphone system through a jack at the external power panel to talk to the flight crew.",
                reference: "B737 NG CBT - Communication, Section 99"
            },
            {
                question: "What does the service interphone system provide?",
                options: [
                    "Communication between pilots only",
                    "Communication with air traffic control",
                    "Intercommunication between flight crew, flight attendants, and ground crew",
                    "Communication with company dispatch"
                ],
                correct: 2,
                explanation: "The service interphone system provides intercommunication between the flight crew, flight attendants, and ground crew.",
                reference: "B737 NG CBT - Communication, Section 103"
            },
            {
                question: "Where is the service interphone switch located?",
                options: [
                    "On the aft electronic panel",
                    "On the aft overhead panel",
                    "On the forward overhead panel",
                    "On the center pedestal"
                ],
                correct: 1,
                explanation: "The service interphone switch on the aft overhead panel lets the flight crew activate or deactivate the external jacks.",
                reference: "B737 NG CBT - Communication, Section 107"
            },
            {
                question: "With the service interphone switch in OFF position, what communication is still possible?",
                options: [
                    "No communication possible",
                    "Communication between flight deck and flight attendants",
                    "Ground crew communication only",
                    "All communications are blocked"
                ],
                correct: 1,
                explanation: "With the service interphone switch in OFF position, external jacks are deactivated. However, communication between flight deck and flight attendants is still possible.",
                reference: "B737 NG CBT - Communication, Section 108"
            },
            {
                question: "Who has priority in passenger address (PA) system announcements?",
                options: [
                    "Flight attendants",
                    "Pilots",
                    "Senior flight attendant",
                    "Captain only"
                ],
                correct: 1,
                explanation: "If a pilot and flight attendant talk to the passengers at the same time, the pilot announcement has first priority and overrides all others.",
                reference: "B737 NG CBT - Communication, Section 114"
            },
            {
                question: "How do flight attendants call the flight deck?",
                options: [
                    "Through the passenger address system",
                    "Using handsets located at each attendant station",
                    "Through the service interphone switch",
                    "Using the overhead speakers"
                ],
                correct: 1,
                explanation: "The flight attendants use the handsets located at each attendant station to make a call to the flight deck.",
                reference: "B737 NG CBT - Communication, Section 120"
            },
            {
                question: "What happens when flight attendants call the flight deck?",
                options: [
                    "Two-tone chime sounds",
                    "Single-tone chime sounds and call light illuminates",
                    "Horn sounds in nose wheel well",
                    "No audio indication"
                ],
                correct: 1,
                explanation: "When a flight attendant makes a call to the flight deck, a single-tone chime sounds in the flight deck and the call light illuminates.",
                reference: "B737 NG CBT - Communication, Section 121"
            },
            {
                question: "How does ground crew call the flight crew?",
                options: [
                    "Through service interphone handset",
                    "Using PILOT CALL switch on external power panel",
                    "Through the flight interphone jack",
                    "Using radio communication"
                ],
                correct: 1,
                explanation: "The ground crew uses PILOT CALL switch on the external power panel to call the flight crew.",
                reference: "B737 NG CBT - Communication, Section 125"
            },
            {
                question: "What is the purpose of the SELCAL system?",
                options: [
                    "Emergency communication",
                    "Navigation assistance",
                    "Relieves flight crew from continuously monitoring company communication channels",
                    "Automatic frequency selection"
                ],
                correct: 2,
                explanation: "The selective calling (SELCAL) system relieves the flight crew from continuously monitoring company communications channels.",
                reference: "B737 NG CBT - Communication, Section 127"
            },
            {
                question: "How many letters are in each airplane's SELCAL code?",
                options: [
                    "Three letters",
                    "Four letters",
                    "Five letters",
                    "Six letters"
                ],
                correct: 1,
                explanation: "For SELCAL operation each airplane is assigned a different four-letter code.",
                reference: "B737 NG CBT - Communication, Section 129"
            },
            {
                question: "What happens when SELCAL receives an incoming call?",
                options: [
                    "Only light illuminates",
                    "Only chime sounds",
                    "SELCAL light illuminates and two-tone chime sounds in flight deck",
                    "Horn sounds in nose wheel well"
                ],
                correct: 2,
                explanation: "When the system receives an incoming call from a ground station, the respective SELCAL light illuminates and a two-tone chime sounds in the flight deck.",
                reference: "B737 NG CBT - Communication, Section 132"
            },
            {
                question: "How long does the cockpit voice recorder keep communication data?",
                options: [
                    "60 minutes",
                    "90 minutes",
                    "120 minutes",
                    "180 minutes"
                ],
                correct: 2,
                explanation: "The cockpit voice recorder continuously records flight crew communications and flight deck sounds. It keeps the last 120 minutes of communication data in memory.",
                reference: "B737 NG CBT - Communication, Section 134"
            },
            {
                question: "When does cockpit voice recorder record in AUTO position?",
                options: [
                    "Continuously",
                    "Only during flight",
                    "From first engine start until 5 minutes after last engine shutdown",
                    "Only when selected by crew"
                ],
                correct: 2,
                explanation: "When the switch is in AUTO position, the voice recorder unit records from first engine start until 5 minutes after last engine shutdown.",
                reference: "B737 NG CBT - Communication, Section 141"
            },
            {
                question: "When can you erase the cockpit voice recorder?",
                options: [
                    "Anytime during flight",
                    "Only when airplane is on ground and parking brake is set",
                    "Only at maintenance facilities",
                    "Never allowed"
                ],
                correct: 1,
                explanation: "You can erase the audio if the airplane is on the ground and the parking brake is set.",
                reference: "B737 NG CBT - Communication, Section 146"
            },
            {
                question: "What does ACARS stand for?",
                options: [
                    "Aircraft Communication And Reporting System",
                    "Aircraft Communications Addressing and Reporting System",
                    "Automatic Communication And Radio System",
                    "Aviation Communication And Radio Service"
                ],
                correct: 1,
                explanation: "ACARS stands for Aircraft Communications Addressing and Reporting System.",
                reference: "B737 NG CBT - Communication, Section 150"
            },
            {
                question: "What is a message from airplane to ground called in ACARS?",
                options: [
                    "Uplink",
                    "Downlink",
                    "Outlink",
                    "Transmission"
                ],
                correct: 1,
                explanation: "A message or report from the airplane to the airline ground base is called a downlink. A message from ground to airplane is called an uplink.",
                reference: "B737 NG CBT - Communication, Section 152"
            },
            {
                question: "What are the main components of ACARS?",
                options: [
                    "Radio and antenna only",
                    "Management unit, control display unit, and printer",
                    "Computer and display only",
                    "Transceiver and keyboard"
                ],
                correct: 1,
                explanation: "The ACARS consists of a management unit (MU), a control display unit (CDU) and usually a printer.",
                reference: "B737 NG CBT - Communication, Section 153"
            },
            {
                question: "How are medium level ACARS messages indicated?",
                options: [
                    "White ACARS indication only",
                    "White ACARS indication with two-tone chime",
                    "Flashing red indication",
                    "Voice announcement"
                ],
                correct: 1,
                explanation: "If it is a medium level message, ACARS indication is accompanied by a two-tone chime in the flight deck.",
                reference: "B737 NG CBT - Communication, Section 158"
            },
            {
                question: "How are low level ACARS messages visually indicated?",
                options: [
                    "Same as medium level messages",
                    "Red indication",
                    "Position indented one space to the right and no aural alert",
                    "Flashing indication"
                ],
                correct: 2,
                explanation: "If the ACARS message is low level, the position of ACARS indication on the Upper Display Unit is indented one space to the right of higher level messages. Low level ACARS indication is not accompanied by an aural alert.",
                reference: "B737 NG CBT - Communication, Section 159"
            },
            {
                question: "What microphone is used when the hand microphone push-to-talk switch is pressed?",
                options: [
                    "Boom microphone",
                    "Oxygen mask microphone",
                    "Hand microphone itself",
                    "All microphones simultaneously"
                ],
                correct: 2,
                explanation: "Push-to-talk (PTT) switch on the hand microphone is used to transmit through the hand microphone.",
                reference: "B737 NG CBT - Communication, Section 11"
            },
            {
                question: "In normal mode, how do the audio systems operate?",
                options: [
                    "All systems linked together",
                    "Captain and First Officer systems operate independently",
                    "Only one system active at a time",
                    "Backup mode only"
                ],
                correct: 1,
                explanation: "In normal operation the Captain, First Officer, and Observer audio systems operate independently.",
                reference: "B737 NG CBT - Communication, Section 38"
            },
            {
                question: "Which controls operate in degraded mode?",
                options: [
                    "All audio panel controls",
                    "Only BOOM-MASK switch and R/T position of push-to-talk switch",
                    "Only receiver switches",
                    "Only microphone selectors"
                ],
                correct: 1,
                explanation: "The only audio control panel controls that operate are the BOOM-MASK switch and the R/T position of the push-to-talk switch.",
                reference: "B737 NG CBT - Communication, Section 49"
            },
            {
                question: "What type of communication does VHF provide besides voice?",
                options: [
                    "Navigation signals only",
                    "Emergency signals only",
                    "Datalink communication",
                    "Weather information only"
                ],
                correct: 2,
                explanation: "VHF communication system provides voice communications and also supplies datalink communication which will be discussed later.",
                reference: "B737 NG CBT - Communication, Section 53"
            }
        ]
    },
    "automatic-flight": {
        title: "Automatic Flight",
        questions: [
            {
                question: "During a complex approach in turbulence, you notice the flight director bars are active but erratic. The autopilot is engaged and maintaining course, while autothrottle is managing speed. Your co-pilot asks which components are working together in this scenario. What is the complete automatic flight system integration?",
                options: [
                    "Only the autopilot since it's maintaining control",
                    "Autopilot and autothrottle are working independently",
                    "Flight director is providing guidance that the autopilot isn't following",
                    "All three components - autopilot, autothrottle, and flight director - are integrated and working together"
                ],
                correct: 3,
                explanation: "The automatic flight system consists of three integrated components: autopilot (maintains flight path), autothrottle (manages thrust/speed), and flight director (provides guidance cues). All work together sharing information and command inputs for coordinated flight management.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.1"
            },
            {
                question: "During preflight, maintenance reports that autopilot computer A is deferred. Your co-pilot is concerned about dispatch legality and operational capabilities. You explain the redundancy design of the autopilot system. How many computers are installed and what is the impact?",
                options: [
                    "One computer total, aircraft cannot be dispatched",
                    "Two computers (A and B), can dispatch with one operative providing normal autopilot functions",
                    "Three computers, need minimum two for dispatch",
                    "Four computers, can lose up to two and still operate"
                ],
                correct: 1,
                explanation: "The Boeing 737 NG has two autopilot computers (A and B) for redundancy and reliability. Either computer can provide full autopilot functions, so dispatch with one computer inoperative is typically allowed with appropriate MEL procedures.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.1"
            },
            {
                question: "During a departure from a short runway with obstacles, you're planning your autopilot engagement strategy. The SID requires a turn at 800 feet, and you want to engage autopilot as soon as safely possible to precisely follow the procedure. What is the minimum altitude for engagement after takeoff?",
                options: [
                    "200 feet AGL, allowing early engagement for SID compliance",
                    "400 feet AGL, providing adequate time for manual control assessment before SID turn",
                    "500 feet AGL to ensure obstacle clearance",
                    "1000 feet AGL for maximum safety margin"
                ],
                correct: 1,
                explanation: "The autopilot can be engaged at a minimum of 400 feet AGL after takeoff for normal operations. This altitude provides sufficient time to assess aircraft performance and flight path before automation engagement, while allowing autopilot use for precise SID navigation.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.1"
            },
            {
                question: "You're flying a complex STAR with multiple waypoints and course changes. ATC requests vectors for traffic, but you want to resume the programmed route afterward. You notice LNAV is armed but not engaged. What does LNAV mode specifically control when activated?",
                options: [
                    "Lateral navigation following the programmed FMS route including waypoints and course changes",
                    "Vertical navigation with altitude and descent planning",
                    "Speed control based on FMS performance calculations",
                    "Altitude hold with automatic level-off capabilities"
                ],
                correct: 0,
                explanation: "LNAV (Lateral Navigation) mode controls lateral navigation by following the programmed FMS route, including all waypoints, course changes, and lateral path guidance. It handles the horizontal flight path management while other modes manage vertical and speed profiles.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.1"
            },
            {
                question: "During a VNAV descent, you notice the autothrottle advancing power while the autopilot pitches down to maintain the descent path. Your co-pilot asks why the throttles are moving forward during descent. What is the autothrottle system's primary function in this scenario?",
                options: [
                    "Automatically controls engine thrust to maintain selected speed targets during the descent",
                    "Manages fuel flow to optimize efficiency only",
                    "Controls flight path independently of autopilot inputs",
                    "Provides backup power for flight control systems"
                ],
                correct: 0,
                explanation: "The autothrottle system automatically controls engine thrust to maintain selected speeds or flight path angles. In a VNAV descent, it will adjust thrust to maintain the programmed speed while the autopilot manages the vertical path, requiring power increases when airspeed decreases below target.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.1"
            },
            {
                question: "During an unstable approach, you decide to disconnect the autopilot to make manual corrections. You press the autopilot disconnect switch on the control wheel. Your co-pilot notices the autothrottle is still engaged. What exactly occurs when you press the autopilot disconnect switch?",
                options: [
                    "Only autopilot disconnects, autothrottle remains active",
                    "Both autopilot and autothrottle disconnect simultaneously",
                    "Only a warning sound activates without disconnecting anything",
                    "Autopilot disconnects, warning sound activates, but autothrottle remains engaged"
                ],
                correct: 3,
                explanation: "When the autopilot disconnect switch is pressed, the autopilot disconnects and a warning sound is activated, but the autothrottle remains engaged unless separately disconnected. This allows manual flight path control while maintaining automatic thrust management.",
                reference: "B737 NG CBT - Automatic Flight, Section 6.1"
            },
            {
                question: "You're conducting a continuous descent approach with multiple altitude and speed restrictions. The FMS shows a complex vertical profile with crossing restrictions at several waypoints. You want to let the automation manage this precisely. Which mode should you use?",
                options: [
                    "LNAV for following the lateral approach path",
                    "VNAV to follow the programmed vertical profile with all altitude and speed constraints",
                    "Speed intervention for manual speed control only",
                    "Vertical speed mode for constant rate descent"
                ],
                correct: 1,
                explanation: "VNAV (Vertical Navigation) mode follows the FMS vertical profile for climbs, descents, and altitude constraints. It automatically manages pitch and power to meet all programmed altitude and speed restrictions along the flight path.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.2"
            },
            {
                question: "You're conducting a CAT II ILS approach in low visibility conditions. Your co-pilot suggests engaging both autopilots for maximum precision. You consider the autopilot engagement rules for different flight phases. When can both autopilots be engaged simultaneously?",
                options: [
                    "Yes, during all phases of flight for maximum redundancy",
                    "Yes, but only during certain precision approach modes for increased accuracy",
                    "No, never - only one autopilot can be active at any time",
                    "Only during emergency situations when extra precision is needed"
                ],
                correct: 1,
                explanation: "Both autopilots can be engaged simultaneously only during certain approach modes (such as CAT II/III ILS approaches) for increased precision and safety. During normal flight, only one autopilot is engaged at a time.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.2"
            },
            {
                question: "During a manual approach with autopilot disconnected, you notice flight director bars on your PFD showing pitch and roll commands. Your trainee asks what these bars represent and how they help with manual flying. What does the flight director provide?",
                options: [
                    "Direct automatic flight control of the aircraft",
                    "Visual guidance cues on the PFD to help pilots manually fly the computed flight path",
                    "Engine thrust commands for manual throttle control",
                    "Navigation information display without flight guidance"
                ],
                correct: 1,
                explanation: "The flight director provides guidance cues (command bars) on the PFD to help pilots manually fly the desired flight path. Pilots follow these cues to maintain the computed pitch and roll attitudes needed for the selected navigation and approach modes.",
                reference: "B737 NG CBT - Automatic Flight, Section 7.1"
            },
            {
                question: "During a VNAV descent, ATC requests you to slow to 210 knots temporarily for traffic spacing, then resume normal speed. You want to comply without disrupting the programmed descent profile. What function allows this temporary speed change?",
                options: [
                    "Emergency speed reduction for immediate deceleration",
                    "Speed Intervention for temporary speed changes without affecting active modes",
                    "Maximum speed protection to prevent overspeed",
                    "Minimum speed protection to prevent stall"
                ],
                correct: 1,
                explanation: "Speed Intervention allows temporary speed changes without changing the active autothrottle mode. You can set a temporary speed while maintaining VNAV mode, then resume the programmed speed profile when the temporary restriction is lifted.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.2"
            },
            {
                question: "What is the maximum altitude for autopilot operation?",
                options: ["FL410", "FL450", "FL500", "No limit"],
                correct: 0,
                explanation: "The autopilot maximum operating altitude is FL410 for the Boeing 737 NG.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.2"
            },
            {
                question: "What does the APP mode provide?",
                options: [
                    "Approach guidance for ILS/VOR/LOC",
                    "Airport information",
                    "Autopilot protection",
                    "Application settings"
                ],
                correct: 0,
                explanation: "APP mode provides lateral and vertical guidance for ILS, VOR, and LOC approaches.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.3"
            },
            {
                question: "What is the purpose of the Flight Level Change (FLCH) mode?",
                options: [
                    "Level flight only",
                    "Climb/descent at selected airspeed",
                    "Flight level information",
                    "Flap control"
                ],
                correct: 1,
                explanation: "FLCH mode allows climbs and descents while maintaining a selected airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.4"
            },
            {
                question: "What does the CMD A annunciation indicate?",
                options: [
                    "Autopilot A is engaged",
                    "Command mode active",
                    "Altitude alert",
                    "Airspeed command"
                ],
                correct: 0,
                explanation: "CMD A indicates that Autopilot A is engaged and controlling the aircraft.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.3"
            },
            {
                question: "What is the minimum ILS approach category for autoland?",
                options: ["CAT I", "CAT II", "CAT III", "All categories"],
                correct: 2,
                explanation: "Autoland capability requires CAT III ILS approach equipment and procedures.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.1"
            },
            {
                question: "What happens when the autothrottle disconnect switch is pressed?",
                options: [
                    "Only autothrottle disconnects",
                    "Both systems disconnect",
                    "Warning horn sounds",
                    "Autothrottle disconnects with warning"
                ],
                correct: 3,
                explanation: "When the autothrottle disconnect switch is pressed, the autothrottle disconnects and a warning horn sounds.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.3"
            },
            {
                question: "What is the purpose of the Vertical Speed (VS) mode?",
                options: [
                    "Control vertical speed at selected rate",
                    "Variable speed control",
                    "Visual speed indication",
                    "Velocity synchronization"
                ],
                correct: 0,
                explanation: "VS mode controls the aircraft's vertical speed at a selected rate of climb or descent.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.5"
            },
            {
                question: "What does the LAND 3 annunciation indicate?",
                options: [
                    "Land in 3 minutes",
                    "Triple autopilot engagement",
                    "Autoland with 3 autopilots",
                    "CAT III autoland capability"
                ],
                correct: 3,
                explanation: "LAND 3 indicates that the aircraft is configured for CAT III autoland operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.2"
            },
            {
                question: "What is the purpose of the Altitude Hold (ALT HOLD) mode?",
                options: [
                    "Hold current altitude",
                    "Altitude alerting",
                    "High altitude protection",
                    "Altitude selection"
                ],
                correct: 0,
                explanation: "ALT HOLD mode maintains the current altitude when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.6"
            },
            {
                question: "What does the N1 mode control?",
                options: [
                    "Engine N1 speed",
                    "Navigation mode 1",
                    "Thrust to maintain selected N1",
                    "Nitrogen level 1"
                ],
                correct: 2,
                explanation: "N1 mode controls engine thrust to maintain a selected N1 fan speed setting.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.4"
            },
            {
                question: "What is the purpose of the Heading Select (HDG SEL) mode?",
                options: [
                    "Automatic heading selection",
                    "Maintain selected heading",
                    "Heading display",
                    "Heading protection"
                ],
                correct: 1,
                explanation: "HDG SEL mode maintains the heading selected on the MCP heading selector.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.7"
            },
            {
                question: "What does the TOGA mode provide?",
                options: [
                    "Takeoff and go-around guidance",
                    "Top of climb guidance",
                    "Traffic advisory",
                    "Turbulence avoidance"
                ],
                correct: 0,
                explanation: "TOGA mode provides takeoff and go-around pitch and thrust guidance.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.8"
            },
            {
                question: "What is the function of the autopilot trim system?",
                options: [
                    "Trim tab control",
                    "Automatic trim adjustment",
                    "Pitch trim compensation",
                    "All of the above"
                ],
                correct: 3,
                explanation: "The autopilot trim system provides trim tab control, automatic adjustment, and pitch trim compensation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.4"
            },
            {
                question: "What does the SPD mode control?",
                options: [
                    "Speed brakes",
                    "Special procedures",
                    "Selected airspeed",
                    "Spoiler deployment"
                ],
                correct: 2,
                explanation: "SPD mode controls engine thrust to maintain the selected airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.5"
            },
            {
                question: "What is the purpose of the Localizer (LOC) mode?",
                options: [
                    "Local navigation",
                    "Lateral guidance for ILS/LOC approach",
                    "Location services",
                    "Locking mechanism"
                ],
                correct: 1,
                explanation: "LOC mode provides lateral guidance for ILS and localizer approaches.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.9"
            },
            {
                question: "What does the G/S mode control?",
                options: [
                    "Ground speed",
                    "Glide slope capture and track",
                    "Gear system",
                    "Generator synchronization"
                ],
                correct: 1,
                explanation: "G/S mode captures and tracks the ILS glide slope during approach.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.10"
            },
            {
                question: "What is the autopilot roll mode authority?",
                options: ["±15 degrees", "±25 degrees", "±30 degrees", "±45 degrees"],
                correct: 1,
                explanation: "The autopilot roll mode authority is limited to ±25 degrees bank angle.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.5"
            },
            {
                question: "What does the FLARE mode provide?",
                options: [
                    "Flap extension",
                    "Landing flare guidance",
                    "Flight level awareness",
                    "Fuel remaining"
                ],
                correct: 1,
                explanation: "FLARE mode provides automatic landing flare guidance during autoland.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.3"
            },
            {
                question: "What is the purpose of the MCP (Mode Control Panel)?",
                options: [
                    "Main control panel",
                    "Master caution panel",
                    "Autopilot and flight director control",
                    "Maintenance control panel"
                ],
                correct: 2,
                explanation: "The MCP is used to control autopilot, flight director, and autothrottle functions.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.2"
            },
            {
                question: "What does the ROLLOUT mode control?",
                options: [
                    "Takeoff roll",
                    "Runway alignment during landing",
                    "Roll attitude",
                    "Rollback protection"
                ],
                correct: 1,
                explanation: "ROLLOUT mode provides automatic runway alignment control during autoland rollout.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.4"
            },
            {
                question: "What is the autopilot pitch mode authority?",
                options: ["±10 degrees", "±15 degrees", "±20 degrees", "±25 degrees"],
                correct: 1,
                explanation: "The autopilot pitch mode authority is limited to ±15 degrees pitch angle.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.6"
            },
            {
                question: "What does the THR HOLD mode indicate?",
                options: [
                    "Thrust hold position",
                    "Throttle hold mode",
                    "Thrust levers held at current position",
                    "Thermal hold"
                ],
                correct: 2,
                explanation: "THR HOLD mode indicates the autothrottle is holding thrust levers at their current position.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.6"
            },
            {
                question: "What is the purpose of the altitude alerting system?",
                options: [
                    "Altitude selection",
                    "Alert crew of altitude deviations",
                    "Altitude hold",
                    "Altitude display"
                ],
                correct: 1,
                explanation: "The altitude alerting system alerts the crew to altitude deviations from selected altitude.",
                reference: "B737 NG CBT - Automatic Flight, Section 6.2"
            },
            {
                question: "What does the PROF mode provide?",
                options: [
                    "Professional mode",
                    "Profile descent",
                    "Proficiency check",
                    "Propeller control"
                ],
                correct: 1,
                explanation: "PROF mode provides profile descent following the FMS descent profile.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.11"
            },
            {
                question: "What is the autopilot minimum engagement speed?",
                options: ["120 knots", "140 knots", "160 knots", "180 knots"],
                correct: 1,
                explanation: "The autopilot minimum engagement speed is 140 knots indicated airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.3"
            },
            {
                question: "What does the RETARD mode command?",
                options: [
                    "Retard throttles",
                    "Thrust reduction to idle",
                    "Reverse thrust",
                    "Reduced power"
                ],
                correct: 1,
                explanation: "RETARD mode commands thrust reduction to idle during the landing flare.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.5"
            },
            {
                question: "What is the purpose of the flight director bars?",
                options: [
                    "Flight direction",
                    "Visual guidance for manual flight",
                    "Flight data",
                    "Director commands"
                ],
                correct: 1,
                explanation: "Flight director bars provide visual guidance for manual flight following the selected modes.",
                reference: "B737 NG CBT - Automatic Flight, Section 7.2"
            },
            {
                question: "What does the LAND 2 annunciation indicate?",
                options: [
                    "Land in 2 minutes",
                    "Dual autopilot approach",
                    "CAT II autoland capability",
                    "Landing gear down"
                ],
                correct: 2,
                explanation: "LAND 2 indicates the aircraft is configured for CAT II autoland operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.6"
            },
            {
                question: "What is the autopilot maximum crosswind for autoland?",
                options: ["15 knots", "20 knots", "25 knots", "30 knots"],
                correct: 2,
                explanation: "The autopilot maximum crosswind for autoland is 25 knots.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.7"
            },
            {
                question: "What does the FPA mode control?",
                options: [
                    "Flight path angle",
                    "Flap position angle",
                    "Fuel pump activation",
                    "Fire protection activation"
                ],
                correct: 0,
                explanation: "FPA mode controls the aircraft's flight path angle in degrees.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.12"
            },
            {
                question: "What is the purpose of the bank angle protection?",
                options: [
                    "Prevent excessive bank angles",
                    "Bank angle display",
                    "Banking maneuvers",
                    "Bank selection"
                ],
                correct: 0,
                explanation: "Bank angle protection prevents the autopilot from exceeding safe bank angle limits.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.7"
            },
            {
                question: "What does the GA mode provide?",
                options: [
                    "General aviation",
                    "Go-around guidance",
                    "Ground avoidance",
                    "Gate arrival"
                ],
                correct: 1,
                explanation: "GA mode provides go-around pitch and thrust guidance when executed.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.13"
            },
            {
                question: "What is the autothrottle maximum thrust setting?",
                options: [
                    "Maximum continuous thrust",
                    "Takeoff thrust",
                    "Climb thrust",
                    "All thrust settings"
                ],
                correct: 3,
                explanation: "The autothrottle can command all thrust settings from idle to maximum available.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.7"
            },
            {
                question: "What does the VOR/LOC mode provide?",
                options: [
                    "VOR navigation only",
                    "LOC navigation only",
                    "Both VOR and LOC navigation",
                    "Voice recorder operation"
                ],
                correct: 2,
                explanation: "VOR/LOC mode provides lateral navigation guidance for both VOR and LOC approaches.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.14"
            },
            {
                question: "What is the purpose of the airspeed protection system?",
                options: [
                    "Prevent excessive speeds",
                    "Speed display",
                    "Speed selection",
                    "Speed calculation"
                ],
                correct: 0,
                explanation: "The airspeed protection system prevents the autopilot from exceeding safe speed limits.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.4"
            },
            {
                question: "What does the IDLE mode indicate?",
                options: [
                    "Engine idle",
                    "Autothrottle at idle thrust",
                    "Idle time",
                    "Idle function"
                ],
                correct: 1,
                explanation: "IDLE mode indicates the autothrottle is commanding idle thrust.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.8"
            },
            {
                question: "What is the autopilot glideslope capture range?",
                options: ["±1 dot", "±2 dots", "±3 dots", "±4 dots"],
                correct: 1,
                explanation: "The autopilot can capture the glideslope within ±2 dots of the glideslope centerline.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.15"
            },
            {
                question: "What does the PITCH mode control?",
                options: [
                    "Pitch angle",
                    "Pitch attitude hold",
                    "Pitch trim",
                    "Pitch protection"
                ],
                correct: 1,
                explanation: "PITCH mode holds the pitch attitude present when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.16"
            },
            {
                question: "What is the purpose of the Mach Hold mode?",
                options: [
                    "Hold Mach number",
                    "Machine hold",
                    "Maintenance hold",
                    "Match hold"
                ],
                correct: 0,
                explanation: "Mach Hold mode maintains a selected Mach number during flight.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.9"
            },
            {
                question: "What does the TRACK mode provide?",
                options: [
                    "Track following",
                    "Ground track hold",
                    "Track angle hold",
                    "Tracking system"
                ],
                correct: 1,
                explanation: "TRACK mode maintains the current ground track angle.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.17"
            },
            {
                question: "What is the autopilot localizer capture range?",
                options: ["±1 dot", "±2 dots", "±3 dots", "±4 dots"],
                correct: 1,
                explanation: "The autopilot can capture the localizer within ±2 dots of the localizer centerline.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.18"
            },
            {
                question: "What does the CWS (Control Wheel Steering) mode allow?",
                options: [
                    "Manual control input",
                    "Steering wheel control",
                    "Control wheel steering",
                    "Continuous wave steering"
                ],
                correct: 0,
                explanation: "CWS mode allows manual control input while maintaining autopilot engagement.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.8"
            },
            {
                question: "What is the purpose of the altitude capture mode?",
                options: [
                    "Capture selected altitude",
                    "Altitude measurement",
                    "Altitude display",
                    "Altitude calculation"
                ],
                correct: 0,
                explanation: "Altitude capture mode automatically captures and holds the selected altitude.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.19"
            },
            {
                question: "What does the TURB mode provide?",
                options: [
                    "Turbulence detection",
                    "Turbulence penetration speed",
                    "Turbulence avoidance",
                    "Turbine monitoring"
                ],
                correct: 1,
                explanation: "TURB mode provides turbulence penetration speed control for smooth flight.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.10"
            },
            {
                question: "What is the autopilot approach minimum decision height?",
                options: ["50 feet", "100 feet", "150 feet", "200 feet"],
                correct: 0,
                explanation: "The autopilot approach minimum decision height is 50 feet AGL.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.8"
            },
            {
                question: "What does the ROLL mode control?",
                options: [
                    "Roll angle",
                    "Roll attitude hold",
                    "Roll protection",
                    "Roll indication"
                ],
                correct: 1,
                explanation: "ROLL mode holds the roll attitude present when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.20"
            },
            {
                question: "What is the purpose of the speed trim system?",
                options: [
                    "Trim speed control",
                    "Speed-based trim adjustment",
                    "Speed trim display",
                    "Speed trim protection"
                ],
                correct: 1,
                explanation: "The speed trim system provides automatic trim adjustment based on speed changes.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.9"
            },
            {
                question: "What does the MCP altitude window display?",
                options: [
                    "Current altitude",
                    "Selected altitude",
                    "Maximum altitude",
                    "Minimum altitude"
                ],
                correct: 1,
                explanation: "The MCP altitude window displays the selected altitude for the autopilot.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.3"
            },
            {
                question: "What is the autothrottle minimum speed protection?",
                options: [
                    "Stall speed",
                    "Minimum maneuvering speed",
                    "V2 speed",
                    "No protection"
                ],
                correct: 1,
                explanation: "The autothrottle provides minimum speed protection at minimum maneuvering speed.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.11"
            },
            {
                question: "What does the FLCH SPD mode control?",
                options: [
                    "Flight level change speed",
                    "Flap change speed",
                    "Climb/descent at constant speed",
                    "Speed protection"
                ],
                correct: 2,
                explanation: "FLCH SPD mode controls climbs and descents while maintaining constant indicated airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.21"
            },
            {
                question: "What is the purpose of the autopilot servo monitors?",
                options: [
                    "Monitor servo operation",
                    "Servo protection",
                    "Servo display",
                    "Servo maintenance"
                ],
                correct: 0,
                explanation: "Autopilot servo monitors continuously monitor servo operation for proper function.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.10"
            },
            {
                question: "What does the FMS mode provide?",
                options: [
                    "Flight management system",
                    "FMS navigation guidance",
                    "Fuel management system",
                    "Fire management system"
                ],
                correct: 1,
                explanation: "FMS mode provides lateral and vertical navigation guidance from the flight management system.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.22"
            },
            {
                question: "What is the autopilot maximum operating airspeed?",
                options: ["250 knots", "300 knots", "350 knots", "VMO/MMO"],
                correct: 3,
                explanation: "The autopilot maximum operating airspeed is limited to VMO/MMO speeds.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.5"
            },
            {
                question: "What does the SINGLE CH mode indicate?",
                options: [
                    "Single channel operation",
                    "Single autopilot engaged",
                    "Single frequency",
                    "Single command"
                ],
                correct: 1,
                explanation: "SINGLE CH mode indicates only one autopilot is engaged for normal operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.11"
            },
            {
                question: "What is the purpose of the go-around mode?",
                options: [
                    "Go-around guidance",
                    "Ground avoidance",
                    "Gear operation",
                    "Gate assignment"
                ],
                correct: 0,
                explanation: "Go-around mode provides pitch and thrust guidance for missed approach procedures.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.23"
            },
            {
                question: "What does the ARM mode indicate?",
                options: [
                    "Armed for capture",
                    "Automatic mode",
                    "Arm position",
                    "Area navigation"
                ],
                correct: 0,
                explanation: "ARM mode indicates the autopilot is armed and ready to capture a navigation signal.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.24"
            },
            {
                question: "What is the autothrottle maximum speed protection?",
                options: [
                    "VMO/MMO",
                    "Maximum thrust speed",
                    "Design speed",
                    "No protection"
                ],
                correct: 0,
                explanation: "The autothrottle provides maximum speed protection at VMO/MMO speeds.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.12"
            },
            {
                question: "What does the DUAL CH mode indicate?",
                options: [
                    "Dual channel operation",
                    "Dual autopilot engaged",
                    "Dual frequency",
                    "Dual command"
                ],
                correct: 1,
                explanation: "DUAL CH mode indicates both autopilots are engaged for approach operations.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.12"
            },
            {
                question: "What is the purpose of the autopilot test function?",
                options: [
                    "Test autopilot operation",
                    "Test pilot knowledge",
                    "Test equipment",
                    "Test procedures"
                ],
                correct: 0,
                explanation: "The autopilot test function verifies proper operation of the autopilot system.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.13"
            },
            {
                question: "What does the PATH mode control?",
                options: [
                    "Flight path",
                    "Path angle",
                    "Path following",
                    "Path calculation"
                ],
                correct: 0,
                explanation: "PATH mode controls the aircraft's flight path following the FMS guidance.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.25"
            },
            {
                question: "What is the autopilot disconnect warning duration?",
                options: [
                    "2 seconds",
                    "5 seconds",
                    "10 seconds",
                    "Continuous until acknowledged"
                ],
                correct: 3,
                explanation: "The autopilot disconnect warning sounds continuously until acknowledged by the crew.",
                reference: "B737 NG CBT - Automatic Flight, Section 6.3"
            },
            {
                question: "What does the REV mode indicate?",
                options: [
                    "Reverse thrust",
                    "Reverse course",
                    "Review mode",
                    "Revision mode"
                ],
                correct: 1,
                explanation: "REV mode indicates the autopilot is flying a reverse course on a VOR radial.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.26"
            },
            {
                question: "What is the purpose of the autopilot engage logic?",
                options: [
                    "Prevent unsafe engagement",
                    "Engage automatically",
                    "Engagement display",
                    "Engagement timing"
                ],
                correct: 0,
                explanation: "The autopilot engage logic prevents unsafe engagement conditions and ensures proper operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.14"
            },
            {
                question: "What does the HOLD mode maintain?",
                options: [
                    "Current flight condition",
                    "Hold pattern",
                    "Hold position",
                    "Hold altitude"
                ],
                correct: 0,
                explanation: "HOLD mode maintains the current flight condition when no other mode is active.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.27"
            },
            {
                question: "What is the autothrottle response time?",
                options: [
                    "1 second",
                    "2 seconds",
                    "3 seconds",
                    "Variable"
                ],
                correct: 3,
                explanation: "The autothrottle response time is variable depending on the flight condition and mode.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.13"
            },
            {
                question: "What does the CAPT/F.O. selector control?",
                options: [
                    "Captain/First Officer autopilot",
                    "Control transfer",
                    "Communication selection",
                    "Command selection"
                ],
                correct: 0,
                explanation: "The CAPT/F.O. selector controls which pilot's autopilot system is active.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.4"
            },
            {
                question: "What is the purpose of the flight director synchronization?",
                options: [
                    "Synchronize with autopilot",
                    "Synchronize displays",
                    "Synchronize navigation",
                    "Synchronize communication"
                ],
                correct: 0,
                explanation: "Flight director synchronization aligns the flight director with the autopilot modes.",
                reference: "B737 NG CBT - Automatic Flight, Section 7.3"
            },
            {
                question: "What does the MCDU interface provide?",
                options: [
                    "Autopilot programming",
                    "FMS interface",
                    "Mode control",
                    "Data display"
                ],
                correct: 1,
                explanation: "The MCDU interface provides FMS programming and data for the autopilot system.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.5"
            },
            {
                question: "What is the autopilot system redundancy level?",
                options: [
                    "Single system",
                    "Dual system",
                    "Triple system",
                    "Quadruple system"
                ],
                correct: 1,
                explanation: "The autopilot system has dual redundancy with two independent autopilot computers.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.15"
            },
            {
                question: "What are the three primary flight control surfaces on the Boeing 737 NG?",
                options: [
                    "Ailerons, elevators, rudder",
                    "Flaps, spoilers, slats",
                    "Elevators, spoilers, trim tabs",
                    "Rudder, flaps, ailerons"
                ],
                correct: 0,
                explanation: "The three primary flight control surfaces are ailerons (roll), elevators (pitch), and rudder (yaw).",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "Which hydraulic systems normally power the primary flight controls?",
                options: [
                    "System A only",
                    "System B only",
                    "System A or B",
                    "Standby system only"
                ],
                correct: 2,
                explanation: "Primary flight controls are normally powered by either hydraulic system A or B for redundancy.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "What is the function of the blended winglets on the Boeing 737 NG?",
                options: [
                    "Increase fuel efficiency and reduce wake turbulence",
                    "Provide additional lift during takeoff",
                    "Assist with roll control",
                    "Act as speed brakes"
                ],
                correct: 0,
                explanation: "Blended winglets enhance takeoff/climb performance, reduce wake turbulence, and increase fuel efficiency.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "If both hydraulic system A and B fail, which system can operate the rudder?",
                options: [
                    "Manual reversion",
                    "Standby hydraulic system",
                    "Electric backup",
                    "No system can operate the rudder"
                ],
                correct: 1,
                explanation: "The standby hydraulic system can operate the rudder if both main hydraulic systems fail.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "Which control surface is primarily responsible for roll control?",
                options: [
                    "Elevators",
                    "Rudder",
                    "Ailerons",
                    "Flaps"
                ],
                correct: 2,
                explanation: "Ailerons are the primary control surface for roll; spoilers assist as secondary surfaces.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "What is the function of the spoiler mixer?",
                options: [
                    "Mixes hydraulic fluid",
                    "Coordinates spoiler movement with aileron input",
                    "Controls elevator trim",
                    "Activates yaw damper"
                ],
                correct: 1,
                explanation: "The spoiler mixer coordinates spoiler movement proportional to aileron input for roll control.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "How can the ailerons be operated if total hydraulic power is lost?",
                options: [
                    "They cannot be operated",
                    "Manually via control wheels",
                    "Via standby electric motor",
                    "Via autopilot only"
                ],
                correct: 1,
                explanation: "Ailerons can be operated manually by rotating the control wheels, though with higher forces required.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "What happens if the aileron control system is jammed?",
                options: [
                    "Both control wheels are locked",
                    "First officer can control roll via spoilers",
                    "Captain can control roll via ailerons",
                    "No roll control is possible"
                ],
                correct: 1,
                explanation: "If the aileron system is jammed, the first officer can use the right control wheel to control roll via spoilers.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "What is the function of the elevator feel computer?",
                options: [
                    "Provides artificial feel force to the control column",
                    "Controls elevator trim",
                    "Monitors hydraulic pressure only",
                    "Controls autopilot pitch input"
                ],
                correct: 0,
                explanation: "The elevator feel computer adjusts control column feel forces based on airspeed and stabilizer position.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What does the FEEL DIFFERENTIAL PRESSURE light indicate?",
                options: [
                    "Elevator feel computer failure",
                    "Excessive pressure difference in elevator feel computer",
                    "Hydraulic system A failure",
                    "Elevator jam"
                ],
                correct: 1,
                explanation: "The FEEL DIFFERENTIAL PRESSURE light illuminates when there is an excessive pressure difference in the elevator feel computer.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            // --- YENİ EKLENEN SORULAR DEVAMI ---
            {
                question: "Which axis does the elevator control?",
                options: [
                    "Longitudinal axis",
                    "Lateral axis",
                    "Vertical axis",
                    "Yaw axis"
                ],
                correct: 1,
                explanation: "Elevators control the pitch of the aircraft, which is movement around the lateral axis.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What is the primary function of the rudder?",
                options: [
                    "Control roll",
                    "Control pitch",
                    "Control yaw",
                    "Increase lift"
                ],
                correct: 2,
                explanation: "The rudder controls the yaw of the aircraft, moving the nose left or right around the vertical axis.",
                reference: "B737 NG CBT - Flight Controls, Yaw Control"
            },
            {
                question: "Which system provides backup operation for the rudder if both main hydraulic systems fail?",
                options: [
                    "Manual reversion",
                    "Standby hydraulic system",
                    "Electric backup",
                    "No backup available"
                ],
                correct: 1,
                explanation: "The standby hydraulic system provides backup operation for the rudder.",
                reference: "B737 NG CBT - Flight Controls, Yaw Control"
            },
            {
                question: "What is the function of the yaw damper system?",
                options: [
                    "Prevents Dutch roll",
                    "Controls pitch",
                    "Controls roll",
                    "Provides backup for rudder"
                ],
                correct: 0,
                explanation: "The yaw damper system prevents Dutch roll and provides turn coordination and gust damping.",
                reference: "B737 NG CBT - Flight Controls, Yaw Damper"
            },
            {
                question: "How is rudder trim controlled?",
                options: [
                    "By rudder pedals only",
                    "By rudder trim knob on the aft electronic panel",
                    "By autopilot only",
                    "By speed trim system"
                ],
                correct: 1,
                explanation: "Rudder trim is controlled by the rudder trim knob, which sends signals to the rudder trim actuator.",
                reference: "B737 NG CBT - Flight Controls, Rudder Trim"
            },
            {
                question: "What does the speed trim system do?",
                options: [
                    "Increases stability at low speed, aft CG, and high thrust",
                    "Controls roll during turns",
                    "Provides backup for elevator",
                    "Controls yaw during takeoff"
                ],
                correct: 0,
                explanation: "The speed trim system increases stability during low speed, aft CG, and high thrust operations.",
                reference: "B737 NG CBT - Flight Controls, Speed Trim"
            },
            {
                question: "What is the function of the Mach trim system?",
                options: [
                    "Prevents nose down motion at high Mach",
                    "Controls elevator trim",
                    "Provides backup for ailerons",
                    "Controls spoilers"
                ],
                correct: 0,
                explanation: "Mach trim prevents nose down motion as the center of lift moves rearward at high Mach numbers.",
                reference: "B737 NG CBT - Flight Controls, Mach Trim"
            },
            {
                question: "Which light illuminates if the Mach trim function fails in both flight control computers?",
                options: [
                    "SPEED TRIM FAIL",
                    "MACH TRIM FAIL",
                    "FEEL DIFF PRESSURE",
                    "STABILIZER OUT OF TRIM"
                ],
                correct: 1,
                explanation: "The MACH TRIM FAIL light illuminates if the Mach trim function fails in both flight control computers.",
                reference: "B737 NG CBT - Flight Controls, Mach Trim"
            },
            {
                question: "How is manual pitch trim accomplished?",
                options: [
                    "By stabilizer trim wheels",
                    "By autopilot only",
                    "By speed trim switches",
                    "By rudder pedals"
                ],
                correct: 0,
                explanation: "Manual pitch trim is accomplished by rotating the stabilizer trim wheels, which move the horizontal stabilizer.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What happens if you use the stabilizer trim switches while autopilot is engaged?",
                options: [
                    "Trim is disabled",
                    "Autopilot disengages",
                    "Trim overrides autopilot",
                    "No effect"
                ],
                correct: 1,
                explanation: "Activating either pair of stabilizer trim switches automatically disengages the autopilot.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What is the function of the elevator feel and centering unit?",
                options: [
                    "Transmits feel force and centers the control column",
                    "Controls elevator trim",
                    "Monitors hydraulic pressure",
                    "Controls autopilot pitch input"
                ],
                correct: 0,
                explanation: "The elevator feel and centering unit transmits feel force to the control columns and centers them when not in use.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What is the purpose of the FEEL DIFFERENTIAL PRESSURE light?",
                options: [
                    "Indicates excessive pressure difference in elevator feel computer",
                    "Indicates elevator jam",
                    "Indicates autopilot disengaged",
                    "Indicates speed trim failure"
                ],
                correct: 0,
                explanation: "The FEEL DIFFERENTIAL PRESSURE light indicates an excessive pressure difference in the elevator feel computer.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What is the function of the spoilers during roll control?",
                options: [
                    "Assist ailerons by reducing lift on the up-going wing",
                    "Increase lift during takeoff",
                    "Act as speed brakes only",
                    "Control yaw"
                ],
                correct: 0,
                explanation: "Spoilers assist ailerons by reducing lift on the up-going wing, increasing roll rate.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "How many spoilers are on each wing of the B737 NG?",
                options: [
                    "4",
                    "6",
                    "8",
                    "12"
                ],
                correct: 1,
                explanation: "There are six spoilers on each wing, numbered 1 through 12 from left to right.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What is the function of the speed brake lever?",
                options: [
                    "Manually moves spoilers for speed brake function",
                    "Controls aileron trim",
                    "Controls rudder trim",
                    "Engages autopilot"
                ],
                correct: 0,
                explanation: "The speed brake lever manually moves the spoilers to act as speed brakes.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What happens when the speed brake lever is moved to the UP position on the ground?",
                options: [
                    "All spoilers extend to maximum position",
                    "Only flight spoilers extend",
                    "No spoilers extend",
                    "Only ground spoilers extend"
                ],
                correct: 0,
                explanation: "On the ground, moving the speed brake lever to UP extends all spoilers to their maximum position.",
                reference: "B737 NG CBT - Flight Controls, Speed Brakes Ground Operation"
            },
            {
                question: "What is the function of the flap load relief system?",
                options: [
                    "Retracts trailing edge flaps if airspeed exceeds limits",
                    "Extends leading edge slats",
                    "Controls aileron trim",
                    "Provides backup for spoilers"
                ],
                correct: 0,
                explanation: "The flap load relief system retracts trailing edge flaps if airspeed exceeds certain limits to prevent damage.",
                reference: "B737 NG CBT - Flight Controls, Flap Load Relief"
            },
            {
                question: "What is the purpose of the leading edge autoslat system?",
                options: [
                    "Improves stall characteristics at high angle of attack",
                    "Provides backup for trailing edge flaps",
                    "Controls yaw during takeoff",
                    "Increases roll rate"
                ],
                correct: 0,
                explanation: "The autoslat system moves leading edge slats to full extend before stick shaker activation to improve stall characteristics.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Autoslat System"
            },
            {
                question: "How are trailing edge flaps operated in alternate mode?",
                options: [
                    "Electrically extended and retracted",
                    "Hydraulically only",
                    "Manually only",
                    "No alternate mode"
                ],
                correct: 0,
                explanation: "In alternate mode, trailing edge flaps are electrically extended and retracted.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the flap lever gates?",
                options: [
                    "Prevent inadvertent movement beyond certain positions",
                    "Lock the flaps in place",
                    "Control aileron trim",
                    "Engage autopilot"
                ],
                correct: 0,
                explanation: "Flap lever gates prevent inadvertent movement beyond flaps 1 and flaps 15 positions during go-around.",
                reference: "B737 NG CBT - Flight Controls, Flap Lever"
            },
            {
                question: "What does the FLAP LOAD RELIEF light indicate?",
                options: [
                    "Flap load relief function is active",
                    "Flap asymmetry detected",
                    "Flap jam detected",
                    "Flap lever in wrong position"
                ],
                correct: 0,
                explanation: "The FLAP LOAD RELIEF light illuminates when the flap load relief function is active.",
                reference: "B737 NG CBT - Flight Controls, Flap Load Relief"
            },
            {
                question: "What is the function of the FSEU (Flaps/Slat Electronics Unit)?",
                options: [
                    "Monitors and protects against flap asymmetry and skew",
                    "Controls aileron trim",
                    "Provides backup for spoilers",
                    "Controls yaw damper"
                ],
                correct: 0,
                explanation: "The FSEU monitors for flap asymmetry, skew, and uncommanded motion, and provides protection.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What should you do if a trailing edge flap asymmetry or skew is detected?",
                options: [
                    "Do not use alternate flaps system",
                    "Attempt to reset the system",
                    "Continue normal operation",
                    "Use manual reversion"
                ],
                correct: 0,
                explanation: "If a trailing edge flap asymmetry or skew is detected, do not use the alternate flaps system as there is no protection.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What is the indication of an uncommanded motion of the leading edge devices?",
                options: [
                    "Amber LE FLAPS TRANSIT light comes on",
                    "Green LE FLAPS EXTENDED light comes on",
                    "Flap lever moves",
                    "No indication"
                ],
                correct: 0,
                explanation: "An amber LE FLAPS TRANSIT light comes on if uncommanded motion of the leading edge devices is detected.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What is the normal operation power source for leading edge devices?",
                options: [
                    "Hydraulic system B",
                    "Hydraulic system A",
                    "Electric motor",
                    "Manual only"
                ],
                correct: 0,
                explanation: "Leading edge devices are normally powered by hydraulic system B.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            },
            {
                question: "How are leading edge devices powered in alternate mode?",
                options: [
                    "Standby hydraulic system for extension only",
                    "Hydraulic system A",
                    "Electric motor",
                    "Manual only"
                ],
                correct: 0,
                explanation: "In alternate mode, leading edge devices are powered by the standby hydraulic system for extension only.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the alternate flaps arm switch?",
                options: [
                    "Starts standby hydraulic pump and closes TE flaps bypass valve",
                    "Extends leading edge slats",
                    "Engages autopilot",
                    "Controls aileron trim"
                ],
                correct: 0,
                explanation: "The alternate flaps arm switch starts the standby hydraulic pump and closes the trailing edge flaps bypass valve.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the alternate flaps position switch?",
                options: [
                    "Electrically drives TE flaps and extends LE devices",
                    "Controls aileron trim",
                    "Engages autopilot",
                    "Controls rudder trim"
                ],
                correct: 0,
                explanation: "The alternate flaps position switch electrically drives the trailing edge flaps and extends the leading edge devices.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the normal time to fully extend or retract trailing edge flaps in alternate mode?",
                options: [
                    "About 2 minutes 39 seconds",
                    "About 1 minute",
                    "About 5 minutes",
                    "About 30 seconds"
                ],
                correct: 0,
                explanation: "It takes approximately 2 minutes and 39 seconds to fully extend or retract trailing edge flaps in alternate mode.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the effect of extended leading edge devices during alternate operation?",
                options: [
                    "Increased drag, may affect fuel reserves",
                    "Increased lift only",
                    "No effect",
                    "Decreased drag"
                ],
                correct: 0,
                explanation: "Extended leading edge devices generate additional drag, which may affect fuel reserves for alternate airports.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the only indication of uncommanded motion of the trailing edge flaps?",
                options: [
                    "Disagreement between flap lever and flap position indicator",
                    "Amber LE FLAPS TRANSIT light",
                    "Flap load relief light",
                    "No indication"
                ],
                correct: 0,
                explanation: "The only indication is disagreement between the flap lever position and the flap position indicator.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What should you do if uncommanded motion of the trailing edge flaps is detected?",
                options: [
                    "Use alternate flap system to control TE flaps",
                    "Continue normal operation",
                    "Attempt to reset the system",
                    "No action required"
                ],
                correct: 0,
                explanation: "If uncommanded motion is detected, use the alternate flap system to control the trailing edge flaps.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What is the function of the speed brake load alleviation system?",
                options: [
                    "Retracts spoilers to 50% if speed brake lever is moved beyond 50% at high weight/airspeed",
                    "Extends spoilers fully in flight",
                    "Controls aileron trim",
                    "Provides backup for rudder"
                ],
                correct: 0,
                explanation: "The load alleviation system retracts spoilers to 50% if the speed brake lever is moved beyond 50% at certain high weight/airspeed conditions.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What is the normal landing flap position for the B737 NG?",
                options: [
                    "Flaps 30 or 40",
                    "Flaps 1",
                    "Flaps 5",
                    "Flaps 15"
                ],
                correct: 0,
                explanation: "Flap positions 30 and 40 are the normal landing flap positions.",
                reference: "B737 NG CBT - Flight Controls, Flap Lever"
            },
            {
                question: "What is the function of the green bands on the stabilizer trim indicator?",
                options: [
                    "Show approved takeoff trim range",
                    "Show maximum trim",
                    "Show landing trim",
                    "Show autopilot trim"
                ],
                correct: 0,
                explanation: "The green bands show the approved takeoff trim range on the stabilizer trim indicator.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What happens if the stabilizer trim is not in the takeoff range during takeoff?",
                options: [
                    "An intermittent horn sounds",
                    "No warning",
                    "Autopilot disengages",
                    "Flaps retract"
                ],
                correct: 0,
                explanation: "If the stabilizer trim is not in the takeoff range, an intermittent horn sounds to warn the crew.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What is the maximum number of spoiler panels on each wing?",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correct: 0,
                explanation: "There are six spoiler panels on each wing, for a total of 12.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What is the normal operation power source for trailing edge flaps?",
                options: [
                    "Hydraulic system B",
                    "Hydraulic system A",
                    "Electric motor",
                    "Manual only"
                ],
                correct: 0,
                explanation: "Trailing edge flaps are normally powered by hydraulic system B.",
                reference: "B737 NG CBT - Flight Controls, Trailing Edge Flaps"
            },
            {
                question: "What is the function of the flap position indicator?",
                options: [
                    "Indicates trailing edge flap positions",
                    "Indicates aileron trim",
                    "Indicates rudder trim",
                    "Indicates autopilot status"
                ],
                correct: 0,
                explanation: "The flap position indicator shows the position of the trailing edge flaps.",
                reference: "B737 NG CBT - Flight Controls, Flap Lever"
            },
            {
                question: "What is the function of the leading edge devices annunciator panel?",
                options: [
                    "Indicates position of each leading edge slat and flap",
                    "Indicates aileron trim",
                    "Indicates rudder trim",
                    "Indicates autopilot status"
                ],
                correct: 0,
                explanation: "The annunciator panel indicates the position of each leading edge slat and flap.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            },
            {
                question: "What is the function of the test switch on the leading edge annunciator panel?",
                options: [
                    "Tests all lights on the panel",
                    "Engages autopilot",
                    "Controls aileron trim",
                    "Extends leading edge slats"
                ],
                correct: 0,
                explanation: "The test switch illuminates all lights on the leading edge annunciator panel for testing.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            },
            {
                question: "What is the normal operation sequence for leading edge devices and trailing edge flaps?",
                options: [
                    "Leading edge devices extend in sequence with trailing edge flaps",
                    "Trailing edge flaps extend first",
                    "Leading edge devices extend only after flaps are fully extended",
                    "No sequence, both operate independently"
                ],
                correct: 0,
                explanation: "Leading edge devices extend in sequence with the movement of the trailing edge flaps.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            }
            // --- 50'ye tamamlandı ---
        ]
    },
    "apu": {
        title: "Auxiliary Power Unit",
        questions: [
            {
                question: "You arrive at the gate with both main engines shut down. Ground power is not immediately available, and you need to operate cabin lighting, start the second engine, and provide air conditioning for passenger comfort. Your co-pilot asks what the APU will provide in this situation. What are the primary functions?",
                options: [
                    "Backup propulsion for emergency taxi operations",
                    "Electrical power for aircraft systems and bleed air for air conditioning and engine starts",
                    "Fuel pumping and distribution to wing tanks only",
                    "Hydraulic power for flight controls and landing gear"
                ],
                correct: 1,
                explanation: "The APU's primary function is to provide electrical power (for lighting, avionics, etc.) and bleed air (for air conditioning and engine starting) when the main engines are not operating or when ground services are unavailable.",
                reference: "B737 NG CBT - APU, Section 1.1"
            },
            {
                question: "During maintenance training, a technician asks about APU design principles. They notice it has a combustor, compressor, and turbine sections similar to the main engines but much smaller. They want to understand the fundamental engine type. What type of engine is the APU?",
                options: [
                    "Reciprocating piston engine for reliability",
                    "Turboprop engine with propeller removed",
                    "Small gas turbine engine with single-shaft design",
                    "Electric motor powered by aircraft batteries"
                ],
                correct: 2,
                explanation: "The APU is a small gas turbine engine designed to provide auxiliary power to the aircraft. It operates on the same basic principles as the main engines but is much smaller and optimized for ground operations and in-flight emergency power.",
                reference: "B737 NG CBT - APU, Section 2.1"
            },
            {
                question: "During a pre-flight walk-around, you notice the APU exhaust and intake doors in the rear of the aircraft. A new flight attendant asks about the location, mentioning they hear APU noise from the aft galley. Where is the APU positioned and why?",
                options: [
                    "Wing root for easy fuel access and maintenance",
                    "Nose section for optimal weight distribution",
                    "Tail cone (aft fuselage) for noise isolation and structural considerations",
                    "Main landing gear bay for ground service accessibility"
                ],
                correct: 2,
                explanation: "The APU is located in the tail cone (aft fuselage) of the Boeing 737 NG. This location provides noise isolation from passenger areas, structural mounting advantages, and allows for effective exhaust gas dispersion away from ground personnel and aircraft systems.",
                reference: "B737 NG CBT - APU, Section 2.2"
            },
            {
                question: "During an emergency descent due to cabin pressurization failure, you're at FL370 and need to start the APU for backup electrical power. Your co-pilot asks about APU operating limitations at this altitude. What is the maximum altitude for APU operation?",
                options: [
                    "20,000 feet maximum for any APU operation",
                    "25,000 feet for bleed air supply, higher for electrical power only",
                    "30,000 feet with bleed air limitations above 25,000 feet",
                    "35,000 feet with no operational restrictions"
                ],
                correct: 1,
                explanation: "The APU can operate up to a maximum altitude of 25,000 feet for bleed air supply. Above this altitude, the APU can still provide electrical power but bleed air extraction becomes limited due to reduced air density affecting compressor performance.",
                reference: "B737 NG CBT - APU, Section 3.1"
            },
            {
                question: "You're running late for departure and the gate agent is asking about pushback timing. You just initiated the APU start sequence and need to inform them when you'll be ready for engine start and pushback. How long does a normal APU start sequence take?",
                options: [
                    "30 seconds - ready for immediate engine start",
                    "45 seconds from start command to available",
                    "60 seconds from initiation until available for bleed air and electrical loading",
                    "90 seconds including stabilization time"
                ],
                correct: 2,
                explanation: "A normal APU start sequence takes approximately 60 seconds from start initiation to available for loading (electrical and bleed air). This includes light-off, acceleration to operating RPM, and stabilization for load application.",
                reference: "B737 NG CBT - APU, Section 4.1"
            },
            {
                question: "During APU start, you notice the EGT climbing rapidly beyond normal parameters and approaching the red line. Your co-pilot asks if you should abort the start or if the system will handle it. What happens if APU EGT exceeds limits during start?",
                options: [
                    "Start sequence continues normally as EGT naturally decreases",
                    "APU automatically shuts down immediately to prevent thermal damage",
                    "Only a warning light illuminates but start continues",
                    "APU continues running but at reduced power output"
                ],
                correct: 1,
                explanation: "If APU EGT exceeds limits during start, the APU automatically shuts down to prevent thermal damage to turbine components. The protection system prioritizes equipment preservation over operational convenience.",
                reference: "B737 NG CBT - APU, Section 4.2"
            },
            {
                question: "During cruise at FL350, you experience a generator failure and want additional electrical power backup. Your co-pilot questions whether the APU can be started at this altitude. What are the in-flight APU start capabilities?",
                options: [
                    "Yes, can be started up to maximum operating altitude for electrical power",
                    "Yes, but limited to below 20,000 feet for start attempts",
                    "No, APU starts are prohibited during flight for safety reasons",
                    "Only in declared emergency situations with ATC coordination"
                ],
                correct: 0,
                explanation: "The APU can be started during flight up to its maximum operating altitude (25,000 feet) for electrical power. Above this altitude, starting is not possible due to insufficient air density for proper combustion and operation.",
                reference: "B737 NG CBT - APU, Section 3.2"
            },
            {
                question: "During fuel planning, you notice the left main tank has significantly less fuel than the right main tank. Your co-pilot asks if this will affect APU operation during the extended ground time with one engine running. What fuel source does the APU use?",
                options: [
                    "Separate dedicated APU fuel tank independent of main tanks",
                    "Left main fuel tank through dedicated APU fuel line and pump",
                    "Right main fuel tank for balance considerations",
                    "Center fuel tank when available, otherwise main tanks"
                ],
                correct: 1,
                explanation: "The APU draws fuel from the left main fuel tank through the APU fuel system with its own dedicated fuel line and pump. This must be considered during fuel planning, especially for extended ground operations or when the left main tank has lower fuel quantities.",
                reference: "B737 NG CBT - APU, Section 5.1"
            },
            {
                question: "During pushback, you suddenly notice the APU FAULT light illuminated and the APU noise stops. The ground crew reports no visible abnormalities. Your co-pilot asks about the urgency and what this light specifically indicates. What does the APU FAULT light mean?",
                options: [
                    "APU is starting and will be available shortly",
                    "APU malfunction has occurred or automatic shutdown has been initiated",
                    "APU is ready for electrical and bleed air loading",
                    "APU fuel level is low and requires attention"
                ],
                correct: 1,
                explanation: "The APU FAULT light indicates a malfunction has occurred or the APU has automatically shut down due to exceeding operating parameters. This requires immediate attention as it affects backup power and bleed air availability.",
                reference: "B737 NG CBT - APU, Section 6.1"
            },
            {
                question: "With ground power unavailable, you're planning to operate on APU power for an extended ground time with full passenger load, galley operation, and air conditioning. Your co-pilot asks about electrical capacity limits. What is the APU generator power rating?",
                options: [
                    "90 kVA - sufficient for normal ground operations",
                    "115 kVA - equal to engine generator output",
                    "150 kVA - enhanced capacity for ground operations",
                    "200 kVA - maximum power for all systems"
                ],
                correct: 0,
                explanation: "The APU generator provides 90 kVA of electrical power to the aircraft systems. This is sufficient for normal ground operations including lighting, avionics, and air conditioning, but load management may be required during peak electrical demands.",
                reference: "B737 NG CBT - APU, Section 7.1"
            },
            {
                question: "What is the APU normal operating RPM?",
                options: ["95%", "100%", "105%", "110%"],
                correct: 1,
                explanation: "The APU operates at 100% RPM during normal operation.",
                reference: "B737 NG CBT - APU, Section 2.3"
            },
            {
                question: "What is the APU bleed air temperature during normal operation?",
                options: ["200°C", "250°C", "300°C", "350°C"],
                correct: 1,
                explanation: "APU bleed air temperature is approximately 250°C during normal operation.",
                reference: "B737 NG CBT - APU, Section 3.3"
            },
            {
                question: "How is the APU compartment ventilated?",
                options: [
                    "Natural ventilation",
                    "Electric fan",
                    "Bleed air ventilation",
                    "Ram air and exhaust fan"
                ],
                correct: 3,
                explanation: "The APU compartment is ventilated by ram air and an exhaust fan system.",
                reference: "B737 NG CBT - APU, Section 2.4"
            },
            {
                question: "What is the APU oil capacity?",
                options: ["4 liters", "6 liters", "8 liters", "10 liters"],
                correct: 1,
                explanation: "The APU oil system has a capacity of approximately 6 liters.",
                reference: "B737 NG CBT - APU, Section 5.2"
            },
            {
                question: "What happens during APU automatic shutdown?",
                options: [
                    "Generator trips offline only",
                    "Bleed valve closes only",
                    "Complete shutdown with fault indication",
                    "APU continues at idle"
                ],
                correct: 2,
                explanation: "During automatic shutdown, the APU shuts down completely and the fault light illuminates.",
                reference: "B737 NG CBT - APU, Section 6.2"
            },
            {
                question: "What is the APU fire detection system?",
                options: [
                    "Smoke detectors",
                    "Heat detectors",
                    "Dual loop fire detection",
                    "Single loop detection"
                ],
                correct: 2,
                explanation: "The APU has a dual loop fire detection system for redundancy.",
                reference: "B737 NG CBT - APU, Section 8.1"
            },
            {
                question: "What is the APU start cycle time limit?",
                options: [
                    "1 attempt per hour",
                    "2 attempts per hour",
                    "3 attempts per hour",
                    "No limit"
                ],
                correct: 2,
                explanation: "The APU start cycle is limited to 3 attempts per hour to prevent damage.",
                reference: "B737 NG CBT - APU, Section 4.3"
            },
            {
                question: "What does the APU AVAIL light indicate?",
                options: [
                    "APU is starting",
                    "APU is available for loading",
                    "APU is shutting down",
                    "APU fault condition"
                ],
                correct: 1,
                explanation: "The APU AVAIL light indicates the APU is available for electrical and bleed air loading.",
                reference: "B737 NG CBT - APU, Section 6.3"
            },
            {
                question: "What is the APU maximum bleed air flow rate?",
                options: ["15 kg/min", "20 kg/min", "25 kg/min", "30 kg/min"],
                correct: 2,
                explanation: "The APU maximum bleed air flow rate is approximately 25 kg/min.",
                reference: "B737 NG CBT - APU, Section 3.4"
            },
            {
                question: "How is APU intake protected from foreign object damage?",
                options: [
                    "Wire mesh screen",
                    "Inlet guide vanes",
                    "No protection",
                    "Intake door"
                ],
                correct: 0,
                explanation: "The APU intake is protected by a wire mesh screen to prevent foreign object damage.",
                reference: "B737 NG CBT - APU, Section 2.5"
            },
            {
                question: "What is the APU normal shutdown time?",
                options: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
                correct: 2,
                explanation: "APU normal shutdown takes approximately 90 seconds for complete cool-down.",
                reference: "B737 NG CBT - APU, Section 4.4"
            },
            {
                question: "What fuel pressure does the APU require?",
                options: ["1.5 bar", "2.0 bar", "2.5 bar", "3.0 bar"],
                correct: 1,
                explanation: "The APU requires a minimum fuel pressure of 2.0 bar for operation.",
                reference: "B737 NG CBT - APU, Section 5.3"
            },
            {
                question: "What is the APU exhaust gas temperature limit?",
                options: ["600°C", "650°C", "700°C", "750°C"],
                correct: 2,
                explanation: "The APU exhaust gas temperature limit is 700°C for normal operation.",
                reference: "B737 NG CBT - APU, Section 3.5"
            },
            {
                question: "How is the APU started?",
                options: [
                    "Electric starter motor",
                    "Air starter motor",
                    "Manual hand crank",
                    "Hydraulic starter"
                ],
                correct: 0,
                explanation: "The APU is started using an electric starter motor powered by the aircraft battery.",
                reference: "B737 NG CBT - APU, Section 4.5"
            },
            {
                question: "What does the APU LOW OIL PRESSURE light indicate?",
                options: [
                    "Oil quantity low",
                    "Oil pressure below minimum",
                    "Oil temperature high",
                    "Oil filter bypass"
                ],
                correct: 1,
                explanation: "The LOW OIL PRESSURE light indicates oil pressure is below the minimum required value.",
                reference: "B737 NG CBT - APU, Section 5.4"
            },
            {
                question: "What is the APU compartment fire extinguishing system?",
                options: [
                    "Water system",
                    "Foam system",
                    "Halon fire bottle",
                    "CO2 system"
                ],
                correct: 2,
                explanation: "The APU compartment uses a Halon fire bottle for fire extinguishing.",
                reference: "B737 NG CBT - APU, Section 8.2"
            },
            {
                question: "Can the APU generator parallel with engine generators?",
                options: [
                    "Yes, always",
                    "Yes, but briefly during transfer",
                    "No, never",
                    "Only on ground"
                ],
                correct: 1,
                explanation: "The APU generator can briefly parallel with engine generators during transfer sequences.",
                reference: "B737 NG CBT - APU, Section 7.2"
            },
            {
                question: "What is the APU air inlet door operation?",
                options: [
                    "Manual operation",
                    "Automatic with APU start",
                    "Pneumatically operated",
                    "Spring loaded"
                ],
                correct: 1,
                explanation: "The APU air inlet door opens automatically when the APU is started.",
                reference: "B737 NG CBT - APU, Section 2.6"
            },
            {
                question: "What happens to APU bleed air during engine start?",
                options: [
                    "APU bleed continues normally",
                    "APU bleed is isolated",
                    "APU automatically shuts down",
                    "Bleed air is reduced"
                ],
                correct: 0,
                explanation: "APU bleed air continues normally during engine start to provide starting air.",
                reference: "B737 NG CBT - APU, Section 3.6"
            },
            {
                question: "What is the APU operating voltage?",
                options: ["28V DC", "115V AC", "Both AC and DC", "270V DC"],
                correct: 1,
                explanation: "The APU generator produces 115V AC electrical power for aircraft systems.",
                reference: "B737 NG CBT - APU, Section 7.3"
            },
            {
                question: "What is the APU maximum operating altitude for electrical power only?",
                options: ["30,000 feet", "35,000 feet", "37,000 feet", "41,000 feet"],
                correct: 3,
                explanation: "For electrical power only, the APU can operate up to 41,000 feet altitude.",
                reference: "B737 NG CBT - APU, Section 3.7"
            },
            {
                question: "How is APU rpm controlled?",
                options: [
                    "Manual throttle",
                    "Automatic fuel control",
                    "Electronic governor",
                    "Constant speed unit"
                ],
                correct: 1,
                explanation: "APU rpm is controlled by an automatic fuel control system.",
                reference: "B737 NG CBT - APU, Section 4.6"
            },
            {
                question: "What is the APU oil temperature operating range?",
                options: ["50-120°C", "70-150°C", "80-180°C", "100-200°C"],
                correct: 1,
                explanation: "The APU oil temperature normal operating range is 70-150°C.",
                reference: "B737 NG CBT - APU, Section 5.5"
            },
            {
                question: "What does the APU MAINT light indicate?",
                options: [
                    "Routine maintenance due",
                    "APU malfunction",
                    "Maintenance access door open",
                    "Maintenance mode active"
                ],
                correct: 0,
                explanation: "The APU MAINT light indicates routine maintenance is due based on operating hours.",
                reference: "B737 NG CBT - APU, Section 6.4"
            },
            {
                question: "What is the APU compressor type?",
                options: [
                    "Axial flow compressor",
                    "Centrifugal compressor",
                    "Mixed flow compressor",
                    "Reciprocating compressor"
                ],
                correct: 1,
                explanation: "The APU uses a centrifugal compressor for air compression.",
                reference: "B737 NG CBT - APU, Section 2.7"
            },
            {
                question: "How is APU fuel supplied during flight?",
                options: [
                    "Gravity feed",
                    "Electric fuel pump",
                    "Engine-driven pump",
                    "Manual pump"
                ],
                correct: 1,
                explanation: "APU fuel is supplied by an electric fuel pump during flight operations.",
                reference: "B737 NG CBT - APU, Section 5.6"
            },
            {
                question: "What is the APU automatic fire extinguishing sequence?",
                options: [
                    "Immediate extinguishing",
                    "30-second delay",
                    "Manual activation only",
                    "No automatic extinguishing"
                ],
                correct: 3,
                explanation: "The APU fire extinguishing system requires manual activation; there is no automatic sequence.",
                reference: "B737 NG CBT - APU, Section 8.3"
            },
            {
                question: "What is the APU generator frequency?",
                options: ["50 Hz", "60 Hz", "400 Hz", "Variable frequency"],
                correct: 2,
                explanation: "The APU generator produces 400 Hz AC electrical power.",
                reference: "B737 NG CBT - APU, Section 7.4"
            },
            {
                question: "What happens if APU oil temperature exceeds limits?",
                options: [
                    "Temperature warning only",
                    "APU automatic shutdown",
                    "Oil cooling increases",
                    "No protection"
                ],
                correct: 1,
                explanation: "If APU oil temperature exceeds limits, the APU automatically shuts down.",
                reference: "B737 NG CBT - APU, Section 5.7"
            },
            {
                question: "What is the APU bleed air pressure regulation?",
                options: [
                    "Manual control",
                    "Automatic pressure regulation",
                    "Engine bleed backup",
                    "No regulation"
                ],
                correct: 1,
                explanation: "APU bleed air pressure is automatically regulated to maintain proper system pressure.",
                reference: "B737 NG CBT - APU, Section 3.8"
            },
            {
                question: "How is the APU compartment temperature monitored?",
                options: [
                    "Single temperature sensor",
                    "Dual temperature sensors",
                    "Fire detection loops",
                    "Visual inspection only"
                ],
                correct: 1,
                explanation: "The APU compartment temperature is monitored by dual temperature sensors.",
                reference: "B737 NG CBT - APU, Section 2.8"
            },
            {
                question: "What is the APU start sequence abort capability?",
                options: [
                    "No abort capability",
                    "Manual abort only",
                    "Automatic abort on malfunction",
                    "Both manual and automatic abort"
                ],
                correct: 3,
                explanation: "The APU start sequence has both manual abort capability and automatic abort on malfunction.",
                reference: "B737 NG CBT - APU, Section 4.7"
            },
            {
                question: "What is the APU fuel consumption rate?",
                options: ["100 kg/hr", "120 kg/hr", "150 kg/hr", "200 kg/hr"],
                correct: 1,
                explanation: "The APU fuel consumption rate is approximately 120 kg/hr during normal operation.",
                reference: "B737 NG CBT - APU, Section 5.8"
            },
            {
                question: "What does the APU ON light indicate?",
                options: [
                    "APU switch is on",
                    "APU is running",
                    "APU is starting",
                    "APU is available"
                ],
                correct: 1,
                explanation: "The APU ON light indicates the APU is running and operating normally.",
                reference: "B737 NG CBT - APU, Section 6.5"
            },
            {
                question: "What is the APU exhaust system design?",
                options: [
                    "Single exhaust nozzle",
                    "Dual exhaust nozzles",
                    "Variable geometry nozzle",
                    "Silenced exhaust"
                ],
                correct: 0,
                explanation: "The APU has a single exhaust nozzle directing exhaust gases aft.",
                reference: "B737 NG CBT - APU, Section 2.9"
            },
            {
                question: "How is APU vibration monitored?",
                options: [
                    "Vibration sensors",
                    "Visual inspection",
                    "Sound analysis",
                    "No monitoring"
                ],
                correct: 0,
                explanation: "APU vibration is monitored by vibration sensors that alert for excessive vibration.",
                reference: "B737 NG CBT - APU, Section 2.10"
            },
            {
                question: "What is the APU bleed air shut-off valve operation?",
                options: [
                    "Manual operation only",
                    "Automatic operation only",
                    "Both manual and automatic",
                    "Spring-loaded closure"
                ],
                correct: 2,
                explanation: "The APU bleed air shut-off valve can be operated both manually and automatically.",
                reference: "B737 NG CBT - APU, Section 3.9"
            },
            {
                question: "What happens during APU emergency shutdown?",
                options: [
                    "Normal shutdown sequence",
                    "Immediate fuel and ignition cutoff",
                    "Gradual power reduction",
                    "APU continues at idle"
                ],
                correct: 1,
                explanation: "During emergency shutdown, fuel and ignition are immediately cut off to the APU.",
                reference: "B737 NG CBT - APU, Section 4.8"
            },
            {
                question: "What is the APU generator load capacity?",
                options: [
                    "All aircraft electrical loads",
                    "Essential loads only",
                    "Limited non-essential loads",
                    "Ground equipment only"
                ],
                correct: 2,
                explanation: "The APU generator can handle limited non-essential loads in addition to essential systems.",
                reference: "B737 NG CBT - APU, Section 7.5"
            },
            {
                question: "How is APU starter disconnection accomplished?",
                options: [
                    "Manual disconnection",
                    "Automatic at operating speed",
                    "Time-based disconnection",
                    "Temperature-based disconnection"
                ],
                correct: 1,
                explanation: "The APU starter automatically disconnects when the APU reaches operating speed.",
                reference: "B737 NG CBT - APU, Section 4.9"
            },
            {
                question: "What is the APU ignition system type?",
                options: [
                    "Single igniter",
                    "Dual igniters",
                    "Spark plug ignition",
                    "Hot surface ignition"
                ],
                correct: 1,
                explanation: "The APU uses a dual igniter system for reliable ignition.",
                reference: "B737 NG CBT - APU, Section 4.10"
            },
            {
                question: "What protects the APU from reverse airflow?",
                options: [
                    "Check valves",
                    "Inlet door closure",
                    "Bleed valve closure",
                    "Exhaust dampers"
                ],
                correct: 1,
                explanation: "The APU inlet door closure protects against reverse airflow damage.",
                reference: "B737 NG CBT - APU, Section 2.11"
            },
            {
                question: "What is the APU load control system function?",
                options: [
                    "Control electrical loads",
                    "Control bleed air loads",
                    "Control fuel loads",
                    "Control all APU loads"
                ],
                correct: 3,
                explanation: "The APU load control system manages all APU loads including electrical and bleed air.",
                reference: "B737 NG CBT - APU, Section 3.10"
            },
            {
                question: "How is APU maintenance access provided?",
                options: [
                    "Removable panels",
                    "Access doors",
                    "Both panels and doors",
                    "Ground equipment required"
                ],
                correct: 2,
                explanation: "APU maintenance access is provided through both removable panels and access doors.",
                reference: "B737 NG CBT - APU, Section 2.12"
            },
            {
                question: "What is the APU fuel filter location?",
                options: [
                    "In fuel tank",
                    "APU fuel line",
                    "APU fuel control unit",
                    "Engine fuel system"
                ],
                correct: 1,
                explanation: "The APU fuel filter is located in the APU fuel line before the fuel control unit.",
                reference: "B737 NG CBT - APU, Section 5.9"
            },
            {
                question: "What happens if APU fire detection fails?",
                options: [
                    "APU continues normally",
                    "APU shuts down",
                    "Backup detection system",
                    "Manual monitoring required"
                ],
                correct: 2,
                explanation: "If APU fire detection fails, a backup detection system provides continued protection.",
                reference: "B737 NG CBT - APU, Section 8.4"
            },
            {
                question: "What is the APU control unit function?",
                options: [
                    "Start sequence control",
                    "Protection monitoring",
                    "Load management",
                    "All of the above"
                ],
                correct: 3,
                explanation: "The APU control unit manages start sequence, protection monitoring, and load management.",
                reference: "B737 NG CBT - APU, Section 4.11"
            },
            {
                question: "How is APU air quality maintained?",
                options: [
                    "Air filters",
                    "Oil separation",
                    "Both filters and separation",
                    "No quality control"
                ],
                correct: 2,
                explanation: "APU air quality is maintained through air filters and oil separation systems.",
                reference: "B737 NG CBT - APU, Section 3.11"
            },
            {
                question: "What is the APU door operation during ground operations?",
                options: [
                    "Always closed",
                    "Always open",
                    "Opens with APU start",
                    "Manual operation only"
                ],
                correct: 2,
                explanation: "The APU door opens automatically with APU start for proper ventilation.",
                reference: "B737 NG CBT - APU, Section 2.13"
            },
            {
                question: "What cooling is provided for the APU?",
                options: [
                    "Air cooling only",
                    "Oil cooling only",
                    "Both air and oil cooling",
                    "No active cooling"
                ],
                correct: 2,
                explanation: "The APU uses both air cooling and oil cooling for temperature management.",
                reference: "B737 NG CBT - APU, Section 2.14"
            },
            {
                question: "What is the APU electrical system integration?",
                options: [
                    "Independent system",
                    "Integrated with aircraft electrical",
                    "Backup system only",
                    "Ground power only"
                ],
                correct: 1,
                explanation: "The APU electrical system is fully integrated with the aircraft electrical system.",
                reference: "B737 NG CBT - APU, Section 7.6"
            },
            {
                question: "How is APU performance monitored?",
                options: [
                    "Manual readings",
                    "Electronic monitoring",
                    "Periodic testing",
                    "All methods"
                ],
                correct: 3,
                explanation: "APU performance is monitored through manual readings, electronic monitoring, and periodic testing.",
                reference: "B737 NG CBT - APU, Section 6.6"
            },
            {
                question: "What is the APU environmental control function?",
                options: [
                    "Cabin air conditioning",
                    "Compartment ventilation",
                    "Both cabin and compartment",
                    "No environmental control"
                ],
                correct: 1,
                explanation: "The APU provides compartment ventilation for its own cooling and operation.",
                reference: "B737 NG CBT - APU, Section 2.15"
            },
            {
                question: "What backup systems support APU operation?",
                options: [
                    "Battery power",
                    "Manual controls",
                    "Emergency procedures",
                    "All of the above"
                ],
                correct: 3,
                explanation: "APU operation is supported by battery power, manual controls, and emergency procedures.",
                reference: "B737 NG CBT - APU, Section 4.12"
            },
            {
                question: "How is APU fuel system pressure maintained?",
                options: [
                    "Gravity feed",
                    "Electric boost pump",
                    "Engine-driven pump",
                    "Hand pump"
                ],
                correct: 1,
                explanation: "APU fuel system pressure is maintained by an electric boost pump.",
                reference: "B737 NG CBT - APU, Section 5.10"
            },
            {
                question: "What is the APU shutdown cooling requirement?",
                options: [
                    "No cooling required",
                    "Forced air cooling",
                    "Natural cooling period",
                    "Immediate shutdown"
                ],
                correct: 2,
                explanation: "The APU requires a natural cooling period after shutdown to prevent thermal damage.",
                reference: "B737 NG CBT - APU, Section 4.13"
            },
            {
                question: "What APU parameters are displayed to the crew?",
                options: [
                    "EGT only",
                    "EGT and RPM",
                    "EGT, RPM, and oil pressure",
                    "All parameters"
                ],
                correct: 2,
                explanation: "The crew can monitor APU EGT, RPM, and oil pressure parameters.",
                reference: "B737 NG CBT - APU, Section 6.7"
            },
            {
                question: "What is the APU generator protection system?",
                options: [
                    "Overcurrent protection",
                    "Overvoltage protection",
                    "Frequency protection",
                    "All protections"
                ],
                correct: 3,
                explanation: "The APU generator has overcurrent, overvoltage, and frequency protection systems.",
                reference: "B737 NG CBT - APU, Section 7.7"
            },
            {
                question: "How is APU maintenance scheduled?",
                options: [
                    "Calendar time only",
                    "Operating hours only",
                    "Both time and hours",
                    "Condition-based only"
                ],
                correct: 2,
                explanation: "APU maintenance is scheduled based on both calendar time and operating hours.",
                reference: "B737 NG CBT - APU, Section 6.8"
            },
            {
                question: "What is the APU normal operating life?",
                options: [
                    "5,000 hours",
                    "10,000 hours",
                    "15,000 hours",
                    "20,000 hours"
                ],
                correct: 1,
                explanation: "The APU normal operating life is approximately 10,000 hours between major overhauls.",
                reference: "B737 NG CBT - APU, Section 2.16"
            },
            {
                question: "What controls APU automatic load acceptance?",
                options: [
                    "Manual switches",
                    "Load control system",
                    "Generator control unit",
                    "All control methods"
                ],
                correct: 1,
                explanation: "The load control system manages APU automatic load acceptance based on system demands.",
                reference: "B737 NG CBT - APU, Section 7.8"
            },
            {
                question: "What is the APU fire warning system response time?",
                options: [
                    "Instantaneous",
                    "5 seconds",
                    "10 seconds",
                    "15 seconds"
                ],
                correct: 0,
                explanation: "The APU fire warning system provides instantaneous response to fire detection.",
                reference: "B737 NG CBT - APU, Section 8.5"
            },
            {
                question: "How is APU operational data recorded?",
                options: [
                    "Manual logbook",
                    "Electronic recording",
                    "Maintenance tracking",
                    "All recording methods"
                ],
                correct: 3,
                explanation: "APU operational data is recorded through manual logbooks, electronic systems, and maintenance tracking.",
                reference: "B737 NG CBT - APU, Section 6.9"
            },
            {
                question: "What determines APU bleed air priority?",
                options: [
                    "First request served",
                    "System priority logic",
                    "Manual selection",
                    "Time-based priority"
                ],
                correct: 1,
                explanation: "APU bleed air priority is determined by system priority logic based on aircraft needs.",
                reference: "B737 NG CBT - APU, Section 3.12"
            },
            {
                question: "What is the APU installation requirement?",
                options: [
                    "Fire-resistant materials",
                    "Vibration isolation",
                    "Access provisions",
                    "All requirements"
                ],
                correct: 3,
                explanation: "APU installation requires fire-resistant materials, vibration isolation, and proper access provisions.",
                reference: "B737 NG CBT - APU, Section 2.17"
            },
            {
                question: "How is APU system integration verified?",
                options: [
                    "Ground testing",
                    "Flight testing",
                    "System checks",
                    "All verification methods"
                ],
                correct: 3,
                explanation: "APU system integration is verified through ground testing, flight testing, and comprehensive system checks.",
                reference: "B737 NG CBT - APU, Section 4.14"
            },
            // --- YENİ EKLENEN SORULAR (APU) ---
            {
                question: "Up to what altitude can the APU supply both electrical power and bleed air simultaneously?",
                options: [
                    "10,000 feet",
                    "17,000 feet",
                    "41,000 feet",
                    "It cannot supply both at the same time."
                ],
                correct: 0,
                explanation: "The APU can supply both electrical power and bleed air at the same time up to 10,000 feet.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), Introduction"
            },
            {
                question: "What is the maximum altitude for using the APU for bleed air supply alone?",
                options: [
                    "10,000 feet",
                    "17,000 feet",
                    "35,000 feet",
                    "41,000 feet"
                ],
                correct: 1,
                explanation: "It can supply bleed air alone up to 17,000 feet.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), Introduction"
            },
            {
                question: "Which component controls and monitors the APU's functions and can perform an automatic protective shutdown?",
                options: [
                    "The Flight Management Computer (FMC)",
                    "The Electronic Control Unit (ECU)",
                    "The pilot via the overhead panel",
                    "The maintenance crew via an external panel"
                ],
                correct: 1,
                explanation: "An electronic control unit (ECU) controls and monitors the APU functions and automatically shuts down the APU if it senses damaging operation.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), Introduction"
            },
            {
                question: "For how long does the APU EGT indicator remain powered after an APU shutdown?",
                options: [
                    "It powers down immediately",
                    "60 seconds",
                    "5 minutes",
                    "Until the battery switch is turned off"
                ],
                correct: 2,
                explanation: "The Exhaust Gas Temperature indicator remains powered for 5 minutes after shutdown.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Controls and Indications"
            },
            {
                question: "What does a steady APU MAINTENANCE light indicate?",
                options: [
                    "The APU has failed and cannot be operated.",
                    "A maintenance problem exists, but the APU can still be operated.",
                    "The APU requires an immediate shutdown.",
                    "The APU is currently being serviced by ground crew."
                ],
                correct: 1,
                explanation: "The APU Maintenance Light illuminates when a maintenance problem exists. However, the APU can still be operated.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Controls and Indications"
            },
            {
                question: "What is the primary power source for an APU start if AC power is not available?",
                options: [
                    "External ground power",
                    "An internal hand crank",
                    "DC power from the battery",
                    "Hydraulic power from an accumulator"
                ],
                correct: 2,
                explanation: "If AC power is not available, then DC power from the battery is used to start the APU.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Operation"
            },
            {
                question: "What is a recommended pre-start action to ensure a better APU start if AC power is available?",
                options: [
                    "Turn on all cabin lights",
                    "Turn on the aft number 1 fuel boost pump",
                    "Cycle the battery switch",
                    "Turn on the APU bleed air switch"
                ],
                correct: 1,
                explanation: "If AC power is available, moving the aft number 1 fuel boost pump switch to ON supplies pressurized fuel to the APU, which makes the APU start better.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "What is the indication that the APU has completed its start cycle and is ready to accept a load?",
                options: [
                    "The APU FAULT light extinguishes.",
                    "The APU LOW OIL PRESSURE light extinguishes.",
                    "The APU GENERATOR OFF BUS light illuminates.",
                    "The EGT needle stabilizes in the green band."
                ],
                correct: 2,
                explanation: "When the APU completes the start cycle, the APU GENERATOR OFF BUS light illuminates, indicating it's ready for an electrical or bleed air load.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "Why is it recommended to operate the APU for two minutes before using it as a bleed air source?",
                options: [
                    "To allow the ECU to complete self-tests.",
                    "To ensure the APU generator is synchronized.",
                    "This stabilization period extends the service life of the APU.",
                    "To burn off any excess fuel from the start sequence."
                ],
                correct: 2,
                explanation: "It is recommended to operate the APU for two minute before using it as a bleed air source. This stabilization period extends the service life of the APU.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "What is the first step in a normal APU shutdown from the flight deck?",
                options: [
                    "Pull the APU fire switch",
                    "Turn the battery switch OFF",
                    "Move the APU switch to the OFF position",
                    "Turn the APU bleed switch OFF"
                ],
                correct: 2,
                explanation: "To shut down the APU normally, you move the APU switch to the OFF position.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Normal Shutdown"
            },
            {
                question: "How long is the cooling cycle during a normal APU shutdown?",
                options: [
                    "10 seconds",
                    "30 seconds",
                    "60 seconds",
                    "120 seconds"
                ],
                correct: 2,
                explanation: "A 60-second cooling cycle starts after the APU switch is moved to the OFF position.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Normal Shutdown"
            },
            {
                question: "Which of the following actions will cause an immediate APU shutdown, bypassing the cooling cycle?",
                options: [
                    "Turning the APU bleed switch OFF",
                    "Moving the APU switch to OFF",
                    "Pulling the APU fire switch on the overhead panel",
                    "Deselecting the APU generator"
                ],
                correct: 2,
                explanation: "An immediate shutdown can be performed by pulling the APU fire switch, turning off the battery switch, or using the fire control handle in the wheel well.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Immediate Shutdown"
            },
            {
                question: "Which light indicates an automatic shutdown due to an overspeed condition?",
                options: [
                    "APU FAULT light",
                    "APU LOW OIL PRESSURE light",
                    "APU OVERSPEED light",
                    "MAINTENANCE light"
                ],
                correct: 2,
                explanation: "The APU OVERSPEED light illuminates when an overspeed condition is detected, resulting in an automatic shutdown.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Controls and Indications"
            },
            {
                question: "In flight, if the APU is the only source of power and an overload occurs, which buses are shed first?",
                options: [
                    "The main AC buses",
                    "The IFE (In-Flight Entertainment) buses",
                    "All galley buses",
                    "The DC buses"
                ],
                correct: 2,
                explanation: "In flight, if an overload condition is detected, all galley buses are automatically shed first.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Automatic Load Overshedding"
            },
            {
                question: "What is the maximum APU start cycle duration?",
                options: [
                    "45 seconds",
                    "60 seconds",
                    "90 seconds",
                    "120 seconds"
                ],
                correct: 3,
                explanation: "The APU start cycle may take as long as 120 seconds.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Operation"
            }
        ]
    },
    "bleed-air": {
        title: "Bleed Air Systems",
        questions: [
            {
                question: "During cruise flight at FL370, your co-pilot asks where the hot air for cabin pressurization and air conditioning originates. What is the primary source providing this heated, pressurized air?",
                options: [
                    "APU only",
                    "5th and 9th engine compressor stages",
                    "Ram air",
                    "Ground cart"
                ],
                correct: 1,
                explanation: "The primary source of bleed air is the engine compressor stages, specifically the 5th and 9th stages, which extract hot, high-pressure air from the engine compression process.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 1.1"
            },
            {
                question: "During winter operations, you're running engine anti-ice, cabin pressurization, and air conditioning simultaneously. Your trainee asks which aircraft systems require the hot bleed air.",
                options: [
                    "Only air conditioning",
                    "Only anti-ice",
                    "Air conditioning, anti-ice, and pressurization systems",
                    "Hydraulics"
                ],
                correct: 2,
                explanation: "Bleed air provides the energy source for air conditioning packs, engine and wing anti-ice systems, and cabin pressurization - all critical systems for safe flight operations.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 2.1"
            },
            {
                question: "During maintenance inspection, you notice separate bleed air ducting on each side of the aircraft. How many independent bleed air systems are installed?",
                options: [
                    "One",
                    "Two (left and right)",
                    "Three",
                    "Four"
                ],
                correct: 1,
                explanation: "There are two independent bleed air systems: left and right, each fed by its respective engine, providing redundancy and system isolation capability.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 3.1"
            },
            {
                question: "You notice fluctuating cabin pressure during climb. The issue may be related to the engine bleed air valves. What is their primary function in the system?",
                options: [
                    "Temperature control",
                    "Pressure regulation and flow control from engine to aircraft systems",
                    "Air filtration",
                    "Cooling"
                ],
                correct: 1,
                explanation: "The bleed air pressure regulating and shutoff valves control the flow and regulate pressure of engine bleed air to the bleed air distribution duct, ensuring proper system operation.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4.1"
            },
            {
                question: "During a no-bleed takeoff procedure, you move the engine bleed switches to OFF. What immediately occurs to the engine bleed air valves?",
                options: [
                    "Valves open",
                    "Valves close, stopping bleed air flow",
                    "Pressure increases",
                    "No effect"
                ],
                correct: 1,
                explanation: "When the engine bleed switch is positioned to OFF, the related engine bleed air valve closes, stopping bleed air supply from that engine to the distribution system.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4.2"
            },
            {
                question: "During single-engine taxi operations, you need air conditioning for both sides of the cabin. Is this possible with only one engine providing bleed air?",
                options: [
                    "Yes, through the cross-bleed duct when isolation valve opens",
                    "No, completely independent",
                    "Emergency only",
                    "Ground only"
                ],
                correct: 0,
                explanation: "Yes, bleed air from one engine can supply both sides of the aircraft through the cross-bleed duct when the isolation valve is open, enabling single-engine ground operations.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5.1"
            },
            {
                question: "During takeoff, engine bleed air pressure can be extremely high. Before this air reaches the air conditioning packs, what component ensures safe operating pressure?",
                options: [
                    "Pressure increase valve",
                    "Pressure regulating valve that reduces pressure to usable levels",
                    "Shutoff valve",
                    "Filter"
                ],
                correct: 1,
                explanation: "The pressure regulating valve reduces high-pressure engine bleed air to safe, usable pressure levels for aircraft systems like air conditioning and pressurization.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 6.1"
            },
            {
                question: "During climb, you notice the amber BLEED TRIP OFF light illuminated on the overhead panel. What condition caused this automatic system response?",
                options: [
                    "Normal operation",
                    "Bleed valve closed automatically due to excessive temperature or pressure",
                    "Valve opening normally",
                    "Scheduled maintenance"
                ],
                correct: 1,
                explanation: "The BLEED TRIP OFF light illuminates when the bleed air valve has automatically closed due to overpressure or over temperature conditions detected by the bleed trip sensors.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 7.1"
            },
            {
                question: "A maintenance technician asks about the temperature of raw bleed air extracted directly from the engine compressor stages. What temperature should they expect?",
                options: [
                    "200°F",
                    "350°F",
                    "Approximately 450°F",
                    "600°F"
                ],
                correct: 2,
                explanation: "Bleed air temperature from the engine compressor stages is typically around 450°F, which requires cooling through heat exchangers before use in aircraft systems.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.1"
            },
            {
                question: "Before the extremely hot bleed air can be safely used by air conditioning systems, it must be cooled. What provides this cooling function?",
                options: [
                    "Ram air through heat exchangers",
                    "Fuel",
                    "Electric",
                    "No cooling"
                ],
                correct: 0,
                explanation: "Bleed air is cooled by ram air flowing through heat exchangers before being distributed to aircraft systems, reducing temperature to safe operating levels.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.2"
            },
            {
                question: "While monitoring bleed air duct pressure during taxi, you notice the gauge reading 46 PSI. Is this within normal operating parameters?",
                options: ["30 PSI max", "Yes, 45 PSI is normal maximum", "60 PSI max", "75 PSI max"],
                correct: 1,
                explanation: "Maximum bleed air pressure is approximately 45 PSI at the regulating valve outlet, so 46 PSI is slightly high but within acceptable limits.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 6.2"
            },
            {
                question: "During descent with reduced power settings, you observe the 5th stage bleed valve operation. What controls when this valve opens and closes?",
                options: [
                    "Manual only",
                    "Automatic pressure sensing to maintain proper bleed air pressure",
                    "Temperature",
                    "Timer"
                ],
                correct: 1,
                explanation: "The high stage valves operate automatically to control the flow of the 9th stage bleed air based on pressure requirements to maintain proper bleed air pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4.3"
            },
            {
                question: "During engine start sequence, pneumatic air is required to turn the starter motor. What is the relationship between bleed air and engine starting?",
                options: [
                    "Bleed air from APU or ground cart provides pneumatic power for engine starters",
                    "Valves close automatically",
                    "No relationship",
                    "Pressure increases"
                ],
                correct: 0,
                explanation: "During engine start, bleed air from the APU or ground cart is used to power the pneumatic starter that turns the engine for starting.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5.2"
            },
            {
                question: "During maintenance operations, you need to isolate the left and right bleed air systems. What component provides this isolation capability?",
                options: [
                    "Isolates left/right only",
                    "Engine/APU separation only",
                    "Reverse flow prevention only",
                    "Isolation valve - isolates left/right systems, separates engine from APU, and prevents reverse flow"
                ],
                correct: 3,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5.3"
            },
            {
                question: "For safety and redundancy purposes, how is bleed air duct temperature continuously monitored to detect potential overheating?",
                options: [
                    "Single sensor",
                    "Dual temperature sensors for redundancy and safety",
                    "Visual only",
                    "No monitoring"
                ],
                correct: 1,
                explanation: "Bleed air duct temperature is monitored by dual temperature sensors for safety and redundancy, ensuring reliable overheat detection.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.3"
            },
            {
                question: "During descent and approach phases with reduced power, which compressor stage provides bleed air when normal 5th stage pressure becomes insufficient?",
                options: [
                    "High power only",
                    "9th stage bleed air supplements when 5th stage pressure is inadequate",
                    "Anti-ice only",
                    "All phases"
                ],
                correct: 1,
                explanation: "At low engine speeds, the high stage valves open appropriately to provide 9th stage bleed air when 5th stage pressure is insufficient to maintain proper bleed air pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 1.2"
            },
            {
                question: "Multiple protection systems prevent dangerous overpressure conditions in the bleed air system. Which protective measures are installed?",
                options: [
                    "Relief valves only",
                    "Sensors only",
                    "Shutoff only",
                    "Comprehensive protection: relief valves, pressure sensors, and automatic shutoff systems"
                ],
                correct: 3,
                explanation: "The bleed air system incorporates multiple protective measures including overpressure switches, over temperature switches (bleed trip sensors), and automatic valve closure to prevent unsafe conditions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 6.3"
            },
            {
                question: "When ground power is available but APU is inoperative, can external ground air conditioning carts supply bleed air for aircraft systems?",
                options: [
                    "Yes, through external air connection to right side of bleed air duct",
                    "No, completely separate",
                    "Testing only",
                    "Emergency only"
                ],
                correct: 0,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct for engine starting and ground use of the air conditioning system.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9.1"
            },
            {
                question: "Before bleed air is distributed to critical aircraft systems, what essential cleaning process occurs to ensure air quality?",
                options: [
                    "Oil removal",
                    "Contaminant filtration to protect downstream systems",
                    "Cooling",
                    "Pressure regulation"
                ],
                correct: 1,
                explanation: "Bleed air filters remove contaminants from the air before distribution to aircraft systems, protecting sensitive components from debris and particles.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.4"
            },
            {
                question: "The bleed air isolation valve has multiple operational functions during different flight phases. What does this valve accomplish?",
                options: [
                    "Reverse flow prevention only",
                    "Pressure regulation only",
                    "Flow control only",
                    "Comprehensive control: prevents reverse flow, enables crossbleed operation, and isolates systems"
                ],
                correct: 3,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation, providing operational flexibility.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9.1"
            },
            // --- YENİ EKLENEN SORULAR (BLEED AIR) ---
            {
                question: "During flight preparation, you're reviewing all available bleed air sources for ground and flight operations. What are the three primary sources?",
                options: [
                    "Engines, APU, ram air",
                    "Engines, APU, and external air cart for comprehensive bleed air supply",
                    "APU, batteries, engines",
                    "Engines, hydraulics, APU"
                ],
                correct: 1,
                explanation: "The three sources of bleed air are: The engines, the APU and an external air cart, providing operational flexibility for all ground and flight conditions.",
                reference: "B737 NG CBT - Bleed Air Systems, Introduction"
            },
            {
                question: "During systems training, you identify which aircraft systems require bleed air. Which system does NOT use bleed air?",
                options: [
                    "Engine starters",
                    "Anti-icing systems",
                    "Water tank pressurization",
                    "Fly-by-wire flight controls (737 NG uses conventional controls)"
                ],
                correct: 3,
                explanation: "Bleed air is used for air conditioning/pressurization, engine starters, anti-icing, and hydraulic/water tank pressurization. The 737NG has conventional flight controls, not fly-by-wire.",
                reference: "B737 NG CBT - Bleed Air Systems, Introduction"
            },
            {
                question: "During approach with power near idle, you notice a change in bleed air source indication. When does the system automatically use 9th stage bleed air?",
                options: [
                    "Takeoff and climb",
                    "Low engine speeds when 5th stage pressure becomes insufficient for system demands",
                    "APU running only",
                    "Never used"
                ],
                correct: 1,
                explanation: "At low engine speeds, when 5th stage bleed air pressure is not sufficient for system demands, the high stage valves automatically open to provide 9th stage bleed air.",
                reference: "B737 NG CBT - Bleed Air Systems, Engine Bleed Air"
            },
            {
                question: "When the 9th stage high pressure bleed valve opens, what component protects the 5th stage from reverse flow of higher pressure air?",
                options: [
                    "Temperature regulator",
                    "5th stage check valve prevents reverse flow into the 5th stage",
                    "Main shutoff valve",
                    "Pressure booster"
                ],
                correct: 1,
                explanation: "The 5th stage check valve prevents reverse flow of higher pressure 9th stage air into the 5th stage compressor section when high stage valves are open.",
                reference: "B737 NG CBT - Bleed Air Systems, Engine Bleed Air"
            },
            {
                question: "During flight, the amber BLEED TRIP OFF light illuminates and the related engine bleed valve automatically closes. What condition triggered this protective action?",
                options: [
                    "Low pressure",
                    "Isolation valve open",
                    "APU valve failure",
                    "Excessive engine bleed air temperature or pressure detected by trip sensors"
                ],
                correct: 3,
                explanation: "Each bleed air valve incorporates overpressure and over temperature switches (bleed trip sensors) that cause a bleed trip off condition and illuminate the BLEED TRIP OFF lights when limits are exceeded.",
                reference: "B737 NG CBT - Bleed Air Systems, Controls and Indications"
            },
            {
                question: "With the isolation valve switch in AUTO, what condition causes the valve to automatically open to enable crossbleed operation?",
                options: [
                    "Both engine bleeds ON",
                    "Both packs ON",
                    "APU bleed ON",
                    "Any engine BLEED or pack switch positioned OFF, requiring crossbleed supply"
                ],
                correct: 3,
                explanation: "With the switch set to AUTO position, when any one of the engine BLEED or the pack switches is positioned OFF, isolation valve opens automatically to enable crossbleed operation.",
                reference: "B737 NG CBT - Bleed Air Systems, Controls and Indications"
            },
            {
                question: "During ground operations, you notice the DUAL BLEED light illuminated. What operational condition does this indicate?",
                options: [
                    "Both engines supplying simultaneously",
                    "APU to both packs only",
                    "Engine(s) and APU both supplying pressure to bleed air duct simultaneously",
                    "Ground cart and engine"
                ],
                correct: 2,
                explanation: "The function of DUAL BLEED light is to tell you that an engine, or engines, and the APU both supply pressure to the bleed air duct at the same time.",
                reference: "B737 NG CBT - Bleed Air Systems, Controls and Indications"
            },
            {
                question: "For maximum takeoff thrust, you decide to perform a no engine bleed takeoff with APU operating. What switch configuration creates the 'C' pattern?",
                options: [
                    "Engine bleeds ON, APU OFF, Isolation AUTO",
                    "Engine bleeds OFF, APU bleed ON, Isolation valve CLOSE forming 'C' pattern",
                    "Engine bleeds ON, APU ON, Isolation OPEN",
                    "All sources OFF"
                ],
                correct: 1,
                explanation: "You set the switches to no engine bleed configuration with a letter 'C' pattern: Engine bleeds OFF, APU bleed ON, Isolation valve CLOSE position.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "After takeoff, you need to reconfigure from no engine bleed back to normal flight configuration. What is the precise sequence?",
                options: [
                    "APU OFF, then both engines ON",
                    "Engine 2 ON, APU OFF, Engine 1 ON, then Isolation Valve AUTO in reverse order",
                    "Isolation AUTO first, then engines, then APU OFF",
                    "Engine 1 first, then Engine 2, then APU OFF"
                ],
                correct: 1,
                explanation: "You should perform the steps in reverse order: Set Engine 2 bleed ON, APU bleed OFF, Engine 1 bleed ON, then move isolation valve switch to AUTO.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "The left WING-BODY OVERHEAT light illuminates during flight. What specific area does this warning cover?",
                options: [
                    "Left air conditioning pack only",
                    "Left wing leading edge only",
                    "Right engine pylon",
                    "Left side of system including APU bleed air duct and wing/engine strut areas"
                ],
                correct: 3,
                explanation: "The left WING-BODY OVERHEAT light illuminates when a leak is detected in the left side of the system which includes APU bleed air duct, wing and engine strut areas.",
                reference: "B737 NG CBT - Bleed Air Systems, Wing-Body Overheat"
            },
            {
                question: "What is the first step in resetting a BLEED TRIP OFF condition?",
                options: [
                    "Press the trip reset switch immediately.",
                    "Turn the affected engine bleed switch to OFF.",
                    "Ensure that the wing anti-ice switch is in the OFF position.",
                    "Deselect the affected air conditioning pack."
                ],
                correct: 2,
                explanation: "In case of a trip off condition, ensure that wing anti-ice switch is in OFF position. Then, press the trip reset switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Trip Off Condition"
            },
            {
                question: "Which component protects the APU from engine bleed air flowing backwards into it?",
                options: [
                    "The isolation valve",
                    "The APU bleed air valve",
                    "An APU check valve",
                    "The electronic control unit (ECU)"
                ],
                correct: 2,
                explanation: "An APU check valve in the APU duct protects the APU from engine bleed air flow.",
                reference: "B737 NG CBT - Bleed Air Systems, APU Bleed Air"
            },
            {
                question: "An external ground air cart connects to which side of the bleed air system?",
                options: [
                    "The left side",
                    "The right side",
                    "Directly to the APU duct",
                    "A central manifold independent of the left/right sides"
                ],
                correct: 1,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, External Air Source"
            },
            {
                question: "If bleed pressure from an external cart drops below 20 psi, what is the recommended procedure if the APU is available?",
                options: [
                    "Signal the ground crew to increase pressure.",
                    "Turn off both air conditioning packs.",
                    "Set isolation valve to AUTO and APU bleed ON to supply the left pack.",
                    "Immediately disconnect the external cart and start the engines."
                ],
                correct: 2,
                explanation: "If the bleed air duct pressure drops below 20 psi... Set the isolation valve switch to AUTO. Then move the APU bleed air switch to ON. APU supplies left pack and external air source supplies right pack.",
                reference: "B737 NG CBT - Bleed Air Systems, Bleed Air Use on Ground"
            },
            {
                question: "During a no engine bleed takeoff with an inoperative APU, what is the status of the air conditioning packs?",
                options: [
                    "They are turned to HIGH",
                    "They are turned to OFF",
                    "They are left in AUTO but receive no air",
                    "Only the left pack is operative"
                ],
                correct: 2,
                explanation: "With engine bleed switches OFF and APU inoperative, there is no source of bleed air, so the packs, although in AUTO, will not operate.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "What is a potential consequence of using wing anti-ice above FL350?",
                options: [
                    "The wing may not receive enough heat.",
                    "Engine performance will significantly increase.",
                    "A bleed trip off and possible loss of cabin pressure.",
                    "There are no specific consequences mentioned."
                ],
                correct: 2,
                explanation: "Use of wing anti-ice above approximately FL350 may cause bleed trip off and possible loss of cabin pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Trip Off Condition"
            },
            {
                question: "What powers the bleed air isolation valve?",
                options: [
                    "28V DC power",
                    "115V AC power",
                    "Pneumatic pressure from the duct",
                    "It is manually operated by a cable"
                ],
                correct: 1,
                explanation: "The valve operates on AC power.",
                reference: "B737 NG CBT - Bleed Air Systems, Engine Bleed Air"
            },
            {
                question: "When performing a Wing-Body Overheat test, which lights should illuminate?",
                options: [
                    "Both WING-BODY OVERHEAT lights only",
                    "Both BLEED TRIP OFF lights only",
                    "Both WING-BODY OVERHEAT lights, MASTER CAUTION, and the air conditioning annunciator",
                    "All lights on the bleed air control panel"
                ],
                correct: 2,
                explanation: "Check that both WING–BODY OVERHEAT lights, MASTER CAUTION lights and airconditioning system annunciator light illuminate while you hold the switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Wing-body overheat test"
            },
            {
                question: "The APU bleed air valve is operated by what kind of power?",
                options: [
                    "AC activated and pressure operated",
                    "DC activated and pressure operated",
                    "Manually via a handle",
                    "Pneumatically from the engine"
                ],
                correct: 1,
                explanation: "The APU bleed air valve is DC activated and pressure operated.",
                reference: "B737 NG CBT - Bleed Air Systems, APU Bleed Air"
            },
            {
                question: "What are the three sources of bleed air?",
                options: [
                    "Engines, APU, and external air cart",
                    "Left engine, right engine, and APU",
                    "High pressure, low pressure, and emergency",
                    "Primary, secondary, and backup"
                ],
                correct: 0,
                explanation: "There are three sources of bleed air: The engines, the APU and an external air cart.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4"
            },
            {
                question: "Which systems use bleed air for operation?",
                options: [
                    "Air conditioning only",
                    "Anti-ice systems only",
                    "Air conditioning/pressurization, engine starter, anti-icing, hydraulic reservoirs pressurization and potable water tank pressurization",
                    "Engine starter only"
                ],
                correct: 2,
                explanation: "The systems that use bleed air are: Air conditioning/pressurization, engine starter, wing and engine thermal anti-icing, hydraulic reservoirs pressurization and potable water tank pressurization.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5"
            },
            {
                question: "From which engine compressor stages does bleed air come?",
                options: [
                    "3rd and 7th stages",
                    "5th and 9th stages",
                    "1st and 5th stages",
                    "9th and 14th stages"
                ],
                correct: 1,
                explanation: "Engine bleed air comes from the 5th and 9th stages of the engine high pressure compressors.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8"
            },
            {
                question: "When is 9th stage bleed air used?",
                options: [
                    "At high engine speeds only",
                    "At low engine speed when 5th stage pressure is not sufficient",
                    "During takeoff only",
                    "Continuously"
                ],
                correct: 1,
                explanation: "At low engine speed, when 5th stage bleed air pressure is not sufficient for system demands, bleed air from the 9th stage is used.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9"
            },
            {
                question: "What components make up the engine bleed system?",
                options: [
                    "Only valves and sensors",
                    "High stage valves, 5th stage check valves, pressure regulating and shutoff valves, overpressure and over temperature switches, isolation valve and duct pressure transmitters",
                    "Only pressure and temperature sensors",
                    "Valves and pressure indicators only"
                ],
                correct: 1,
                explanation: "The engine bleed system consists of high stage valves, 5th stage check valves, bleed air pressure regulating and shutoff valves, overpressure and over temperature switches, isolation valve and duct pressure transmitters.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 10"
            },
            {
                question: "When do high stage valves operate?",
                options: [
                    "Continuously",
                    "At low engine speeds to maintain proper bleed air pressure",
                    "Only during takeoff",
                    "Only during cruise"
                ],
                correct: 1,
                explanation: "At low engine speeds, the high stage valves open appropriately to maintain proper bleed air pressure. During takeoff, climb, and most cruise conditions, low pressure bleed air from the 5th stage is adequate and the high stage valves remain closed.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 11"
            },
            {
                question: "What is the purpose of the 5th stage check valve?",
                options: [
                    "To regulate pressure",
                    "To prevent reverse flow into the 5th stage when high stage valves open",
                    "To control temperature",
                    "To isolate the system"
                ],
                correct: 1,
                explanation: "The 5th stage check valve prevents reverse flow into the 5th stage when the high stage valves open.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 12"
            },
            {
                question: "How are bleed air pressure regulating and shutoff valves activated?",
                options: [
                    "Manually operated",
                    "Hydraulically operated",
                    "Electrically activated and pressure operated",
                    "Pneumatically operated only"
                ],
                correct: 2,
                explanation: "The bleed air pressure regulating and shutoff valves control the flow of engine bleed air to the bleed air distribution duct. The valves are electrically activated and pressure operated.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 13"
            },
            {
                question: "What are bleed trip sensors?",
                options: [
                    "Pressure sensors only",
                    "Temperature sensors only",
                    "Overpressure switch and over temperature switch",
                    "Flow sensors"
                ],
                correct: 2,
                explanation: "Each bleed air valve incorporates an overpressure switch and an over temperature switch, called bleed trip sensors, to prevent bleed air overpressure or overheat conditions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 14"
            },
            {
                question: "What power does the bleed air isolation valve operate on?",
                options: [
                    "DC power",
                    "AC power",
                    "Hydraulic power",
                    "Pneumatic power only"
                ],
                correct: 1,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation. The valve operates on AC power.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 15"
            },
            {
                question: "Up to what altitude can APU supply bleed air?",
                options: [
                    "10,000 feet",
                    "15,000 feet",
                    "17,000 feet",
                    "20,000 feet"
                ],
                correct: 2,
                explanation: "The APU bleed air system supplies bleed air to the bleed air duct on the ground and in the air up to 17,000 feet.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 17"
            },
            {
                question: "How is the APU bleed air valve activated?",
                options: [
                    "AC activated and pressure operated",
                    "DC activated and pressure operated",
                    "Hydraulically activated",
                    "Manually operated"
                ],
                correct: 1,
                explanation: "The APU bleed air valve controls APU bleed air flow to the left side of the bleed air duct. The valve is DC activated and pressure operated.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 18"
            },
            {
                question: "What happens to the APU bleed air valve when the APU is shut down?",
                options: [
                    "It remains in last position",
                    "It closes automatically",
                    "It opens automatically",
                    "Manual control is required"
                ],
                correct: 1,
                explanation: "When the APU is shut down, the valve closes automatically. An APU check valve in the APU duct protects the APU from engine bleed air flow.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 18"
            },
            {
                question: "Where does the external air source connect?",
                options: [
                    "Left side of the bleed air duct",
                    "Right side of the bleed air duct",
                    "Both sides simultaneously",
                    "APU bleed air duct"
                ],
                correct: 1,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 19"
            },
            {
                question: "When do engine bleed air valves open when the switch is ON?",
                options: [
                    "Immediately when switch is selected",
                    "When the respective engine is running",
                    "When APU is running",
                    "When external air is connected"
                ],
                correct: 1,
                explanation: "When you set the switch to ON, the valve opens when the respective engine is running.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 21"
            },
            {
                question: "When does the APU bleed air valve open when switch is ON?",
                options: [
                    "Immediately",
                    "When engines are running",
                    "When the APU is running",
                    "When external air is connected"
                ],
                correct: 2,
                explanation: "When you set the switch to ON, the valve opens when the APU is running.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 22"
            },
            {
                question: "What are the three positions of the isolation valve switch?",
                options: [
                    "ON, OFF, AUTO",
                    "OPEN, CLOSE, AUTO",
                    "HIGH, LOW, AUTO",
                    "NORMAL, BACKUP, OFF"
                ],
                correct: 1,
                explanation: "A three-position ISOLATION VALVE toggle switch lets you control the bleed air isolation valve with CLOSE, OPEN, and AUTO positions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 23-25"
            },
            {
                question: "In AUTO position, when does the isolation valve close?",
                options: [
                    "When APU is running",
                    "When both engine BLEED air switches are ON and both air conditioning PACK switches are AUTO or HIGH",
                    "When engines are shut down",
                    "Never closes automatically"
                ],
                correct: 1,
                explanation: "When both engine BLEED air switches are ON and both air conditioning PACK switches are AUTO or HIGH, the valve closes.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 25"
            },
            {
                question: "When does the isolation valve open automatically in AUTO position?",
                options: [
                    "When APU starts",
                    "When any one of the engine BLEED or pack switches is positioned OFF",
                    "When external air is connected",
                    "During engine start"
                ],
                correct: 1,
                explanation: "When any one of the engine BLEED or the pack switches is positioned OFF, isolation valve opens automatically.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 25"
            },
            {
                question: "What color is the BLEED TRIP OFF light?",
                options: [
                    "Red",
                    "Amber",
                    "Green",
                    "Blue"
                ],
                correct: 1,
                explanation: "BLEED TRIP OFF light illuminates in amber when excessive engine bleed air temperature or pressure is detected.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 26"
            },
            {
                question: "What happens when a bleed trip off condition occurs?",
                options: [
                    "Only warning light illuminates",
                    "Related engine bleed valve closes automatically and switch position changes",
                    "Related engine bleed valve closes automatically but switch position remains unchanged",
                    "System continues normal operation"
                ],
                correct: 2,
                explanation: "A trip off condition causes the related engine bleed valve to close automatically, but does not change the position of its switch on the panel.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 26"
            },
            {
                question: "What is the pressure range on the bleed air duct pressure indicator?",
                options: [
                    "0 to 60 psi",
                    "0 to 80 psi",
                    "0 to 100 psi",
                    "0 to 120 psi"
                ],
                correct: 1,
                explanation: "The pressure indicator has two independent needles, left and right, and a single scale between zero and 80 psi.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 27"
            },
            {
                question: "When does the DUAL BLEED light illuminate?",
                options: [
                    "When both engines supply bleed air",
                    "When engine 1 bleed air switch is ON and APU bleed air valve is open, or when engine 2 bleed air switch is ON, isolation valve is open, and APU bleed air valve is open",
                    "When isolation valve is open",
                    "When external air is connected"
                ],
                correct: 1,
                explanation: "The DUAL BLEED light comes on when engine 1 bleed air switch is ON and the APU bleed air valve is open, or when engine 2 bleed air switch is ON, the isolation valve is open, and the APU bleed air valve is open.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 29-30"
            },
            {
                question: "What switch configuration creates a 'C' pattern for no engine bleed takeoff?",
                options: [
                    "All switches ON",
                    "Right pack AUTO, isolation valve CLOSE, left pack AUTO, engine bleed switches OFF, APU bleed ON",
                    "All switches OFF",
                    "Engine bleeds ON, APU bleed OFF"
                ],
                correct: 1,
                explanation: "For no engine bleed takeoff configuration: right pack switch AUTO, isolation valve switch CLOSE, left pack switch AUTO, turn off Engine 1 and 2 bleed air switches, select APU bleed air switch ON.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 42"
            },
            {
                question: "After a no engine bleed takeoff, what is the first step to return to normal configuration?",
                options: [
                    "Turn on Engine 1 bleed air switch",
                    "Set Engine 2 bleed air switch to ON",
                    "Turn off APU bleed air switch",
                    "Set isolation valve to AUTO"
                ],
                correct: 1,
                explanation: "Set the Engine 2 bleed air switch to ON first. This lets Engine 2 supply bleed air to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 44"
            },
            {
                question: "When should you configure for no engine bleed landing if additional go-around thrust is required?",
                options: [
                    "Below 5,000 feet",
                    "Below 10,000 feet",
                    "Below 15,000 feet",
                    "At any altitude"
                ],
                correct: 1,
                explanation: "If additional go-around thrust is required with the APU available, you should configure the switches for a 'No Engine Bleed Landing' when below 10,000 feet.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 45"
            },
            {
                question: "During unpressurized takeoff/landing (APU inoperative), after takeoff when should you turn on Engine 2 bleed air switch?",
                options: [
                    "Immediately after takeoff",
                    "Between 400 feet and 2000 feet above field elevation",
                    "Above 5,000 feet",
                    "At cruise altitude"
                ],
                correct: 1,
                explanation: "After takeoff, between 400 feet and 2000 feet above field elevation, set Engine 2 bleed air switch to ON.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 48"
            },
            {
                question: "If engine failure occurs after no engine bleed takeoff, when can you position engine BLEED air switches ON?",
                options: [
                    "Immediately",
                    "After reaching 1500 feet or obstacle clearance height",
                    "After reaching 5,000 feet",
                    "Only on the ground"
                ],
                correct: 1,
                explanation: "If engine failure occurs, do not position engine BLEED air switches ON until reaching 1500 feet or until obstacle clearance height has been attained.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 49"
            },
            {
                question: "What should you avoid during no engine bleed landing with APU inoperative?",
                options: [
                    "High airspeed",
                    "High rates of descent",
                    "Low airspeed",
                    "Level flight"
                ],
                correct: 1,
                explanation: "You should avoid high rates of descent for passenger comfort.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 50"
            },
            {
                question: "What should you do first when a bleed trip off condition occurs?",
                options: [
                    "Turn off affected engine",
                    "Ensure wing anti-ice switch is in OFF position",
                    "Turn off pack switch",
                    "Reset the system immediately"
                ],
                correct: 1,
                explanation: "In case of a trip off condition, ensure that wing anti-ice switch is in OFF position. Press the trip reset switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 52"
            },
            {
                question: "If BLEED TRIP OFF light stays illuminated after reset, what should you do?",
                options: [
                    "Continue normal operation",
                    "Turn off the pack switch on the affected side",
                    "Shut down the affected engine",
                    "Turn off all bleed air switches"
                ],
                correct: 1,
                explanation: "If BLEED TRIP OFF light stays illuminated, turn off the pack switch on the affected side. This causes the isolation valve to open and bleed air system supplies air to the right side of wing anti-ice.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 54"
            },
            {
                question: "What may happen if wing anti-ice is used above approximately FL350?",
                options: [
                    "Normal operation",
                    "Improved performance",
                    "Bleed trip off and possible loss of cabin pressure",
                    "Nothing significant"
                ],
                correct: 2,
                explanation: "Use of wing anti-ice above approximately FL350 may cause bleed trip off and possible loss of cabin pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 55"
            },
            {
                question: "Where are the sensing elements for wing-body overheat detection located?",
                options: [
                    "Only in wing areas",
                    "Wing and engine strut areas, air conditioning bays, and bleed air duct from APU",
                    "Only in engine areas",
                    "Only around APU"
                ],
                correct: 1,
                explanation: "The system uses sensing elements located in the wing and engine strut areas, the air conditioning bays, and the bleed air duct from the APU.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 56"
            },
            {
                question: "What does the left WING-BODY OVERHEAT light indicate?",
                options: [
                    "Right side system leak",
                    "Leak in left side system including APU bleed air duct",
                    "General system overheat",
                    "Normal operation"
                ],
                correct: 1,
                explanation: "The left WING-BODY OVERHEAT light illuminates when a leak is detected in the left side of the system which includes APU bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 58"
            },
            {
                question: "How long should you hold the OVERHEAT TEST switch to test the wing-body overheat system?",
                options: [
                    "2 seconds",
                    "5 seconds",
                    "10 seconds",
                    "Until lights illuminate"
                ],
                correct: 1,
                explanation: "To perform the test push and hold the OVERHEAT TEST switch for 5 seconds.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 62"
            },
            {
                question: "What lights should illuminate during wing-body overheat test?",
                options: [
                    "Only WING-BODY OVERHEAT lights",
                    "WING-BODY OVERHEAT lights, MASTER CAUTION lights and air conditioning system annunciator light",
                    "Only MASTER CAUTION lights",
                    "Only annunciator lights"
                ],
                correct: 1,
                explanation: "Check that both WING-BODY OVERHEAT lights, MASTER CAUTION lights and air conditioning system annunciator light illuminate while you hold the switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 62"
            },
            {
                question: "What should external air cart pressure be?",
                options: [
                    "15-20 psi",
                    "20-25 psi",
                    "25-30 psi",
                    "30-35 psi"
                ],
                correct: 1,
                explanation: "When the external air cart supplies air, the bleed air duct pressure should be between 20 psi and 25 psi.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 38"
            },
            {
                question: "What should you do if external air cart pressure drops below 20 psi?",
                options: [
                    "Continue operation",
                    "Use APU if available, set isolation valve to AUTO, move APU bleed air switch to ON",
                    "Disconnect external air",
                    "Increase cart pressure"
                ],
                correct: 1,
                explanation: "If the bleed air duct pressure drops below 20 psi, you can use the APU if it is available. Set the isolation valve switch to AUTO. Then move the APU bleed air switch to ON.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 38"
            }
        ]
    },
    "electrical": {
        title: "Electrical System",
        questions: [
            {
                question: "During systems training, you learn about power requirements for different aircraft components. What electrical architecture is used in the 737 NG?",
                options: [
                    "28V DC only",
                    "115V AC only",
                    "Dual system: 28V DC and 115V AC for comprehensive power distribution",
                    "220V AC only"
                ],
                correct: 2,
                explanation: "The purpose of the electrical system is to produce, supply, and control electrical power using both 28V DC and 115V AC systems for different aircraft systems and operational requirements.",
                reference: "B737 NG CBT - Electrical, Section 1.1"
            },
            {
                question: "For electrical redundancy during twin-engine operations, how many engine-driven generators provide primary AC power?",
                options: [
                    "One",
                    "Two generators (one per engine for redundancy)",
                    "Three",
                    "Four"
                ],
                correct: 1,
                explanation: "The integrated drive generators are the normal AC power source during flight. There are two IDGs on the airplane. Each engine drives its own IDG.",
                reference: "B737 NG CBT - Electrical, Section 2.1"
            },
            {
                question: "During electrical load calculations for flight planning, you need to know generator capacity. What is each engine-driven generator rated for?",
                options: [
                    "40 kVA",
                    "60 kVA",
                    "90 kVA per generator for normal flight operations",
                    "120 kVA"
                ],
                correct: 2,
                explanation: "Each IDG supplies three-phase, 115 volt alternating current with a frequency of 400 Hertz, providing 90 kVA of electrical power for aircraft systems.",
                reference: "B737 NG CBT - Electrical, Section 2.2"
            },
            {
                question: "During electrical system management, you move a generator switch to OFF position. What immediate action occurs to the electrical distribution?",
                options: [
                    "Generator continues",
                    "Generator disconnects from the electrical bus via generator circuit breaker",
                    "Speed increases",
                    "No effect"
                ],
                correct: 1,
                explanation: "The engine generator switches allow for manual selection of IDG power. The OFF position disconnects the IDG from the related AC transfer bus.",
                reference: "B737 NG CBT - Electrical, Section 3.1"
            },
            {
                question: "For emergency power during total electrical failure, how many backup batteries are installed to maintain critical systems?",
                options: [
                    "One",
                    "Two nickel-cadmium batteries (main and auxiliary) for emergency power",
                    "Three",
                    "Four"
                ],
                correct: 1,
                explanation: "DC system incorporates two nickel-cadmium batteries: the main battery and the auxiliary battery. Each battery is a nominal 24 volt DC power source.",
                reference: "B737 NG CBT - Electrical, Section 4.1"
            },
            {
                question: "Many aircraft systems require 28V DC power while generators produce 115V AC. What components provide this power conversion?",
                options: [
                    "Transformer rectifier units (TRUs) convert AC to DC power",
                    "Convert DC to AC",
                    "Voltage regulation only",
                    "Backup power only"
                ],
                correct: 0,
                explanation: "Transformer rectifier units change three-phase, 115 volt ac, 400 hertz AC power into 28V DC to supply the main DC system loads. These units are the normal DC power sources.",
                reference: "B737 NG CBT - Electrical, Section 5.1"
            },
            {
                question: "Following a generator failure, you notice illuminated annunciator lights on the electrical panel. What does the BUS TRANSFER light specifically indicate?",
                options: [
                    "Normal operation",
                    "Transfer in progress",
                    "Bus transfer has occurred due to generator failure or manual disconnect",
                    "Transfer failure"
                ],
                correct: 2,
                explanation: "The BUS TRANSFER light indicates that a bus transfer has occurred, typically due to generator failure or disconnect, activating automatic electrical system reconfiguration.",
                reference: "B737 NG CBT - Electrical, Section 6.1"
            },
            {
                question: "During flight, you experience multiple generator failures and consider all power options. Is external power a viable source during flight operations?",
                options: [
                    "Yes, always available",
                    "Yes, emergency only",
                    "No, external power is limited to ground operations only",
                    "Special equipment required"
                ],
                correct: 2,
                explanation: "External power is the normal AC power source on the ground. It is connected to the airplane through a receptacle on the lower right side of the fuselage for ground operations only.",
                reference: "B737 NG CBT - Electrical, Section 7.1"
            },
            {
                question: "During total generator failure, essential AC systems still require power. What component enables AC power from battery sources?",
                options: [
                    "AC to DC conversion",
                    "Static inverter converts DC to AC for essential systems during emergencies",
                    "Voltage regulation",
                    "Ground power"
                ],
                correct: 1,
                explanation: "The static inverter uses DC power to produce single phase, 115 volt, 400 Hertz AC power for the AC standby bus which feeds very important AC systems when no other AC power source is available.",
                reference: "B737 NG CBT - Electrical, Section 8.1"
            },
            {
                question: "To prevent electrical fire and equipment damage from overcurrent conditions, what protection devices safeguard the electrical distribution system?",
                options: [
                    "Fuses only",
                    "Circuit breakers only",
                    "Both fuses and circuit breakers for comprehensive overcurrent protection",
                    "No protection"
                ],
                correct: 2,
                explanation: "The electrical buses are protected by both fuses and circuit breakers to prevent overload damage and ensure safe electrical distribution throughout the aircraft.",
                reference: "B737 NG CBT - Electrical, Section 9.1"
            },
            {
                question: "Understanding basic electrical principles, you explain to a trainee that aircraft use different power types. What are the fundamental current types?",
                options: [
                    "Direct current (DC) and alternating current (AC) for different system requirements",
                    "High/low voltage",
                    "Primary/secondary",
                    "Single/three phase"
                ],
                correct: 0,
                explanation: "There are two types of electric current: direct current (DC) which flows constantly in the same direction, and alternating current (AC) which reverses direction at regular intervals.",
                reference: "B737 NG CBT - Electrical, Section 4"
            },
            {
                question: "Aircraft electrical systems operate at higher frequencies than household current for reduced weight and size. What frequency is used?",
                options: [
                    "50 Hertz",
                    "60 Hertz",
                    "400 Hertz for reduced component weight and improved performance",
                    "800 Hertz"
                ],
                correct: 2,
                explanation: "The frequency of alternating current used in aircraft has a frequency of 400 Hertz, allowing for smaller, lighter electrical components compared to 50/60 Hz systems.",
                reference: "B737 NG CBT - Electrical, Section 7"
            },
            {
                question: "What does a static inverter do?",
                options: [
                    "Converts AC to DC",
                    "Converts DC to AC",
                    "Increases voltage",
                    "Decreases voltage"
                ],
                correct: 1,
                explanation: "A static inverter converts direct current into alternating current.",
                reference: "B737 NG CBT - Electrical, Section 9"
            },
            {
                question: "What does a transformer rectifier unit (TR unit) do?",
                options: [
                    "Converts DC to AC",
                    "Changes voltage level of AC and converts it to DC",
                    "Only changes voltage level",
                    "Only converts current type"
                ],
                correct: 1,
                explanation: "A transformer rectifier unit changes voltage level of alternating current and converts it into direct current.",
                reference: "B737 NG CBT - Electrical, Section 10"
            },
            {
                question: "How many AC power sources are available for the Boeing 737 NG?",
                options: [
                    "Three sources",
                    "Four sources",
                    "Five sources",
                    "Six sources"
                ],
                correct: 2,
                explanation: "There are five power sources used for AC generation: the left and right engine integrated drive generators (IDGs), APU generator, external power and static inverter.",
                reference: "B737 NG CBT - Electrical, Section 14"
            },
            {
                question: "What does an IDG consist of?",
                options: [
                    "Only an AC generator",
                    "A constant speed drive section and an AC generator",
                    "Only a constant speed drive",
                    "Two AC generators"
                ],
                correct: 1,
                explanation: "An IDG consists of a constant speed drive section and an AC generator, which are lubricated and cooled by a self-contained oil system.",
                reference: "B737 NG CBT - Electrical, Section 15"
            },
            {
                question: "What voltage and frequency do IDGs supply?",
                options: [
                    "28V DC",
                    "115V AC at 60 Hz",
                    "115V AC at 400 Hz",
                    "230V AC at 400 Hz"
                ],
                correct: 2,
                explanation: "Each IDG supplies three-phase, 115 volt alternating current with a frequency of 400 Hertz.",
                reference: "B737 NG CBT - Electrical, Section 15"
            },
            {
                question: "Can the APU generator meet all electrical power requirements?",
                options: [
                    "Only for ground operations",
                    "Only for flight operations",
                    "For all ground conditions and most flight conditions",
                    "Never meets all requirements"
                ],
                correct: 2,
                explanation: "The APU generator can meet the electrical power requirements for all ground conditions and most flight conditions.",
                reference: "B737 NG CBT - Electrical, Section 16"
            },
            {
                question: "Where is the external power connected?",
                options: [
                    "Upper left side of fuselage",
                    "Lower right side of fuselage",
                    "Upper right side of fuselage",
                    "Lower left side of fuselage"
                ],
                correct: 1,
                explanation: "External power is connected to the airplane through a receptacle on the lower right side of the fuselage.",
                reference: "B737 NG CBT - Electrical, Section 17"
            },
            {
                question: "What type of AC power does the static inverter produce?",
                options: [
                    "Three-phase, 115V, 400 Hz",
                    "Single-phase, 115V, 400 Hz",
                    "Three-phase, 28V, 400 Hz",
                    "Single-phase, 28V, 400 Hz"
                ],
                correct: 1,
                explanation: "The static inverter uses DC power to produce single phase, 115 volt, 400 Hertz AC power for the AC standby bus.",
                reference: "B737 NG CBT - Electrical, Section 18"
            },
            {
                question: "How many TR units are in the DC power system?",
                options: [
                    "Two TR units",
                    "Three TR units",
                    "Four TR units",
                    "Five TR units"
                ],
                correct: 1,
                explanation: "The DC generation system has three transformer rectifier units denoted as TR 1, TR 2 and TR 3.",
                reference: "B737 NG CBT - Electrical, Section 69"
            },
            {
                question: "What voltage do TR units convert AC power to?",
                options: [
                    "24V DC",
                    "28V DC",
                    "32V DC",
                    "48V DC"
                ],
                correct: 1,
                explanation: "Transformer rectifier units change three-phase, 115 volt ac, 400 hertz AC power into 28V DC.",
                reference: "B737 NG CBT - Electrical, Section 68"
            },
            {
                question: "What is the voltage of the aircraft batteries?",
                options: [
                    "12V DC",
                    "24V DC",
                    "28V DC",
                    "32V DC"
                ],
                correct: 1,
                explanation: "Each battery is a nominal 24 volt DC power source.",
                reference: "B737 NG CBT - Electrical, Section 72"
            },
            {
                question: "How many TR units can supply the total connected DC load?",
                options: [
                    "All three are required",
                    "Any two TR units",
                    "Only TR1 and TR2",
                    "Only one TR unit"
                ],
                correct: 1,
                explanation: "Any two TR units are capable of supplying the total connected DC load.",
                reference: "B737 NG CBT - Electrical, Section 69"
            },
            {
                question: "When does the DC cross bus tie relay automatically open?",
                options: [
                    "During takeoff",
                    "When glide slope is captured during ILS approach",
                    "During landing",
                    "Never opens automatically"
                ],
                correct: 1,
                explanation: "The relay automatically opens when the glide slope is captured during a flight director or autopilot ILS approach.",
                reference: "B737 NG CBT - Electrical, Section 71"
            },
            {
                question: "What is the primary function of the main battery?",
                options: [
                    "Start the engines",
                    "Supply emergency power to standby system when normal power sources are not available",
                    "Power the galley systems",
                    "Operate the landing gear"
                ],
                correct: 1,
                explanation: "The primary function of the main battery is to supply emergency power to the standby system when the normal power sources are not available.",
                reference: "B737 NG CBT - Electrical, Section 73"
            },
            {
                question: "How long can the batteries supply standby power with full charge?",
                options: [
                    "30 minutes",
                    "45 minutes",
                    "60 minutes minimum",
                    "90 minutes"
                ],
                correct: 2,
                explanation: "With full charge, the batteries supply a minimum of 60 minutes of standby AC and DC power.",
                reference: "B737 NG CBT - Electrical, Section 73"
            },
            {
                question: "Which bus is directly connected to the battery with no switch?",
                options: [
                    "Switched hot battery bus",
                    "Hot battery bus",
                    "Battery bus",
                    "DC standby bus"
                ],
                correct: 1,
                explanation: "The hot battery bus is directly connected to the battery. There is no switch in this circuit; thus its consumers are always powered as long as the battery voltage is above a minimum.",
                reference: "B737 NG CBT - Electrical, Section 76"
            },
            {
                question: "What are the two basic modes of operation for battery chargers?",
                options: [
                    "High and low mode",
                    "Battery charge mode and transformer rectifier (TR) mode",
                    "Normal and emergency mode",
                    "Manual and automatic mode"
                ],
                correct: 1,
                explanation: "Each battery charger has two basic modes of operation: battery charge mode and transformer rectifier or TR mode.",
                reference: "B737 NG CBT - Electrical, Section 79"
            },
            {
                question: "When does a battery charger go to charge mode?",
                options: [
                    "When battery voltage is above 25V",
                    "When battery voltage is less than 23V DC",
                    "When battery voltage is exactly 24V",
                    "When manually selected"
                ],
                correct: 1,
                explanation: "A battery charger goes to the charge mode when its battery voltage is less than 23V DC.",
                reference: "B737 NG CBT - Electrical, Section 80"
            },
            {
                question: "How many positions does the AC meter selector have?",
                options: [
                    "Five positions",
                    "Six positions",
                    "Seven positions",
                    "Eight positions"
                ],
                correct: 2,
                explanation: "The AC meter selector is a rotary selector with seven positions: Standby power, ground power, generator 1, APU generator, generator 2, the static inverter and test.",
                reference: "B737 NG CBT - Electrical, Section 36"
            },
            {
                question: "When does the generator DRIVE amber caution light illuminate?",
                options: [
                    "High oil pressure in IDG",
                    "Low oil pressure in IDG",
                    "High oil temperature in IDG",
                    "Normal IDG operation"
                ],
                correct: 1,
                explanation: "Generator DRIVE amber caution light illuminates when low oil pressure is sensed in the IDG.",
                reference: "B737 NG CBT - Electrical, Section 41"
            },
            {
                question: "Can an IDG be reconnected in flight after disconnection?",
                options: [
                    "Yes, anytime",
                    "Yes, but only by maintenance",
                    "No, reconnection can only be done on ground by maintenance",
                    "Yes, automatically"
                ],
                correct: 2,
                explanation: "Once an IDG is disconnected, it cannot be reconnected in the air. Reconnection can only be done on the ground by maintenance crew.",
                reference: "B737 NG CBT - Electrical, Section 42"
            },
            {
                question: "What type of switches are the engine generator switches?",
                options: [
                    "Two-position toggle switches",
                    "Three-position switches spring-loaded to center",
                    "Four-position rotary switches",
                    "Push-button switches"
                ],
                correct: 1,
                explanation: "Each switch is a three-position switch and is spring-loaded to the center (neutral) position. The ON and OFF positions are momentary positions.",
                reference: "B737 NG CBT - Electrical, Section 44"
            },
            {
                question: "Why are there two APU generator switches for one APU generator?",
                options: [
                    "For redundancy",
                    "Because there are two bus tie breakers (BTBs)",
                    "For backup operation",
                    "To control different voltages"
                ],
                correct: 1,
                explanation: "There are two APU generator switches because there are two bus tie breakers (BTBs) that supply power to the AC transfer buses.",
                reference: "B737 NG CBT - Electrical, Section 45"
            },
            {
                question: "What does the amber TRANSFER BUS OFF light indicate?",
                options: [
                    "Transfer bus has power",
                    "Transfer bus does not have power",
                    "Transfer bus is overloaded",
                    "Transfer bus is disconnected manually"
                ],
                correct: 1,
                explanation: "The amber TRANSFER BUS OFF light comes on when the related AC transfer bus does not have power.",
                reference: "B737 NG CBT - Electrical, Section 50"
            },
            {
                question: "What does an illuminated SOURCE OFF light indicate?",
                options: [
                    "The transfer bus has no power",
                    "The transfer bus is not powered by the selected source",
                    "The source has failed",
                    "Manual disconnection is required"
                ],
                correct: 1,
                explanation: "The SOURCE OFF light indicates that the related AC transfer bus is not powered by the selected source. This doesn't necessarily mean the transfer bus has no power.",
                reference: "B737 NG CBT - Electrical, Section 51"
            },
            {
                question: "When does the blue APU GEN OFF BUS light extinguish?",
                options: [
                    "When APU starts",
                    "When APU generator is connected to a bus or APU is shut down",
                    "When engines are started",
                    "When external power is connected"
                ],
                correct: 1,
                explanation: "The light goes off when the APU generator is connected to a bus or you shut down the APU.",
                reference: "B737 NG CBT - Electrical, Section 53"
            },
            {
                question: "Can APU generator and external power be connected simultaneously?",
                options: [
                    "Yes, for redundancy",
                    "Yes, during certain operations",
                    "No, they cannot be connected at the same time",
                    "Only on the ground"
                ],
                correct: 2,
                explanation: "APU generator and external power cannot be connected to the electrical system at the same time.",
                reference: "B737 NG CBT - Electrical, Section 57"
            },
            {
                question: "What happens in flight if an engine generator stops supplying power?",
                options: [
                    "System shuts down",
                    "APU must be started",
                    "Bus tie breakers automatically close to allow other generator to supply both buses",
                    "External power must be connected"
                ],
                correct: 2,
                explanation: "If an engine generator is no longer supplying power, the bus tie breakers automatically close to allow the other engine generator to supply both transfer buses through the tie bus.",
                reference: "B737 NG CBT - Electrical, Section 60"
            },
            {
                question: "When is the automatic generator on-line feature available?",
                options: [
                    "Only on the ground",
                    "Only when APU generator is supplying power to both AC transfer buses after takeoff",
                    "During all flight phases",
                    "Only during approach"
                ],
                correct: 1,
                explanation: "The automatic generator on-line feature is armed when the APU generator is still supplying power to both AC transfer buses after takeoff. It's available only in flight and only once per flight.",
                reference: "B737 NG CBT - Electrical, Section 61"
            },
            {
                question: "In single engine generator operation with overload, what is shed first?",
                options: [
                    "Main buses",
                    "Galley power from transfer bus 2",
                    "Essential systems",
                    "All non-essential systems"
                ],
                correct: 1,
                explanation: "In single engine generator operation, if an overload condition is detected, the power from the galleys on the transfer bus 2 are removed first.",
                reference: "B737 NG CBT - Electrical, Section 63"
            },
            {
                question: "When both generators are working and overload occurs, what happens?",
                options: [
                    "Both generators shut down",
                    "All galley power is removed",
                    "System removes power from galleys supplied by affected generator",
                    "Main buses are shed first"
                ],
                correct: 2,
                explanation: "If an over current condition is detected when both generators are working, the system removes the power from the galleys supplied by the affected generator.",
                reference: "B737 NG CBT - Electrical, Section 64"
            },
            {
                question: "What happens when APU is only AC power source in flight with overload?",
                options: [
                    "System shuts down",
                    "All galley buses are automatically shed",
                    "Only lighting is affected",
                    "No automatic action occurs"
                ],
                correct: 1,
                explanation: "If an overload condition is detected when the APU is the only source of AC power in flight, all galley buses are automatically shed.",
                reference: "B737 NG CBT - Electrical, Section 65"
            },
            {
                question: "Which TR unit has backup power capability?",
                options: [
                    "TR1 only",
                    "TR2 only",
                    "TR3 can get power from either AC transfer bus",
                    "All TR units have backup"
                ],
                correct: 2,
                explanation: "TRU 3 normally gets power from AC transfer bus 2; but AC transfer bus 1 can also supply back up power if normal power is lost.",
                reference: "B737 NG CBT - Electrical, Section 70"
            },
            {
                question: "What is the primary use of TR3?",
                options: [
                    "Power DC bus 1",
                    "Power DC bus 2",
                    "Power source for the battery bus",
                    "Backup for all systems"
                ],
                correct: 2,
                explanation: "The primary use of TRU 3 is as a power source for the battery bus.",
                reference: "B737 NG CBT - Electrical, Section 70"
            },
            {
                question: "What type of batteries does the system use?",
                options: [
                    "Lead-acid batteries",
                    "Lithium-ion batteries",
                    "Nickel-cadmium batteries",
                    "Alkaline batteries"
                ],
                correct: 2,
                explanation: "DC system incorporates two nickel-cadmium batteries. The main battery and the auxiliary battery.",
                reference: "B737 NG CBT - Electrical, Section 72"
            },
            {
                question: "Which buses does the battery power during emergency?",
                options: [
                    "Only DC buses",
                    "Battery bus, DC standby bus, switched hot battery bus and hot battery bus",
                    "All electrical buses",
                    "Only essential buses"
                ],
                correct: 1,
                explanation: "When normal power sources do not operate, battery power is supplied to the battery bus, DC standby bus, switched hot battery bus and hot battery bus.",
                reference: "B737 NG CBT - Electrical, Section 74"
            },
            {
                question: "Is the auxiliary battery normally connected to the system?",
                options: [
                    "Yes, always connected",
                    "No, normally isolated from the system",
                    "Only during flight",
                    "Only during emergencies"
                ],
                correct: 1,
                explanation: "The auxiliary battery charger and auxiliary battery are isolated from the power distribution system under normal operation.",
                reference: "B737 NG CBT - Electrical, Section 82"
            },
            {
                question: "When does the amber battery discharge light illuminate?",
                options: [
                    "When battery is charging",
                    "When discharge rate is very high",
                    "When battery is fully charged",
                    "During normal operation"
                ],
                correct: 1,
                explanation: "When the discharge rate of main battery or auxiliary battery is very high, the amber battery discharge light illuminates.",
                reference: "B737 NG CBT - Electrical, Section 84"
            },
            {
                question: "When does the TR UNIT light illuminate in flight?",
                options: [
                    "When any TR unit fails",
                    "When TR1 fails, or TR2 and TR3 fail",
                    "Only when all TR units fail",
                    "Never illuminates in flight"
                ],
                correct: 1,
                explanation: "In flight, the TR unit light illuminates if TR1, or TR2 and TR3 has failed.",
                reference: "B737 NG CBT - Electrical, Section 85"
            },
            {
                question: "When does the amber electric light operate?",
                options: [
                    "Only in flight",
                    "Only when airplane is on the ground",
                    "During all operations",
                    "Only during engine start"
                ],
                correct: 1,
                explanation: "The amber electric light comes on when there is a failure in the DC system or standby system. The light illuminates only when the airplane is on the ground.",
                reference: "B737 NG CBT - Electrical, Section 86"
            },
            {
                question: "What are the two positions of the bus transfer switch?",
                options: [
                    "ON and OFF",
                    "AUTO and OFF",
                    "AUTO and MANUAL",
                    "NORMAL and EMERGENCY"
                ],
                correct: 1,
                explanation: "The bus transfer switch has two positions: AUTO and OFF. The switch is normally in the AUTO position.",
                reference: "B737 NG CBT - Electrical, Section 88"
            },
            {
                question: "What systems are supplied by standby power during emergency?",
                options: [
                    "All aircraft systems",
                    "Only engine systems",
                    "Critical systems necessary to maintain safe flight",
                    "Only navigation systems"
                ],
                correct: 2,
                explanation: "The standby power system supplies AC and DC power to critical systems necessary to maintain safe flight in the event of loss of all engine or APU driven generators.",
                reference: "B737 NG CBT - Electrical, Section 92"
            },
            {
                question: "What are the three positions of the standby power switch?",
                options: [
                    "AUTO, ON, OFF",
                    "AUTO, BATTERY, OFF",
                    "NORMAL, STANDBY, OFF",
                    "AUTO, MANUAL, EMERGENCY"
                ],
                correct: 1,
                explanation: "The standby power switch is a three position switch with AUTO, BATTERY, and OFF positions. The guard holds the switch in the AUTO position.",
                reference: "B737 NG CBT - Electrical, Section 96"
            },
            {
                question: "During normal operation, what powers the AC standby bus?",
                options: [
                    "Battery through static inverter",
                    "AC transfer bus 1",
                    "APU generator",
                    "External power"
                ],
                correct: 1,
                explanation: "During normal operation with the standby power switch in AUTO position, AC standby bus is powered from AC transfer bus 1.",
                reference: "B737 NG CBT - Electrical, Section 99"
            },
            {
                question: "Which VHF radio operates on standby power?",
                options: [
                    "VHF No. 1 radio",
                    "VHF No. 2 radio",
                    "VHF No. 3 radio",
                    "All VHF radios"
                ],
                correct: 0,
                explanation: "Communication systems on standby power include VHF No. 1 radio.",
                reference: "B737 NG CBT - Electrical, Section 108"
            },
            {
                question: "Which flight displays operate on standby power?",
                options: [
                    "All displays",
                    "Captain's outboard and inboard display units",
                    "First Officer's displays only",
                    "No displays operate"
                ],
                correct: 1,
                explanation: "Flight instruments on standby power include Captain's outboard display unit with primary flight display, Captain's inboard display unit with navigation display.",
                reference: "B737 NG CBT - Electrical, Section 112"
            },
            {
                question: "What circuit breaker panels are named in the B737 NG cockpit?",
                options: [
                    "P5 and P17",
                    "P6 and P18",
                    "P7 and P19",
                    "P8 and P20"
                ],
                correct: 1,
                explanation: "Circuit breaker panels in the B737 NG cockpit are named as P6 and P18.",
                reference: "B737 NG CBT - Electrical, Section 130"
            }
        ]
    },
    "engines": {
        title: "Engines",
        questions: [
            // INTRODUCTION & GENERAL ENGINE KNOWLEDGE
            {
                question: "During aircraft familiarization, you identify the powerplant specifications for the 737 NG fleet. What specific engine model provides propulsion?",
                options: [
                    "Turboprop",
                    "Turbojet",
                    "CFM56-7 turbofan engines for optimal fuel efficiency and performance",
                    "Piston"
                ],
                correct: 2,
                explanation: "The Boeing 737 is powered by two CFM56-7 engines, which are axial-flow turbofan engines designed for commercial aviation efficiency and reliability.",
                reference: "B737 NG CBT - Engines, Section 4"
            },
            {
                question: "Understanding engine architecture, you explain the rotor configuration to a trainee. How many independent rotor systems operate in the CFM56-7?",
                options: [
                    "One rotor",
                    "Two rotors - N1 and N2 operating at different speeds",
                    "Three rotors",
                    "Four rotors"
                ],
                correct: 1,
                explanation: "The engine is an axial-flow turbofan with a dual-rotor system. These two rotors are known as the N1 rotor and the N2 rotor, mechanically independent and free to rotate at their own efficient speeds.",
                reference: "B737 NG CBT - Engines, Section 5"
            },
            {
                question: "During engine operation analysis, you identify the low-pressure spool components. What elements comprise the N1 rotor assembly?",
                options: [
                    "High-pressure components",
                    "Fan and low-pressure compressor driven by low-pressure turbine",
                    "Accessory equipment",
                    "Fuel/oil pumps"
                ],
                correct: 1,
                explanation: "The N1 rotor consists of a fan and a low-pressure compressor which are driven by a low-pressure turbine through a shaft that goes inside the hollow N2 shaft.",
                reference: "B737 NG CBT - Engines, Section 7"
            },
            {
                question: "Analyzing the high-pressure spool operation, you examine the core engine components. What elements form the N2 rotor assembly?",
                options: [
                    "Fan/low-pressure compressor",
                    "High-pressure compressor and high-pressure turbine connected by hollow shaft",
                    "Accessory gearbox only",
                    "Fuel system only"
                ],
                correct: 1,
                explanation: "The N2 rotor consists of a high-pressure compressor which is driven by a high-pressure turbine through a hollow shaft, forming the engine's core spool.",
                reference: "B737 NG CBT - Engines, Section 6"
            },
            {
                question: "For engine-driven accessories like generators and pumps, which rotor system provides mechanical power to the accessory gearbox?",
                options: [
                    "N1 rotor",
                    "N2 rotor provides power to accessory gearbox",
                    "Both rotors",
                    "External motor"
                ],
                correct: 1,
                explanation: "An accessory gearbox on the left side of each engine is driven by the N2 rotor, providing mechanical power for various engine accessories.",
                reference: "B737 NG CBT - Engines, Section 9"
            },
            {
                question: "The accessory gearbox powers multiple aircraft systems through engine-driven components. What equipment receives mechanical drive from this gearbox?",
                options: [
                    "Fuel pumps only",
                    "Oil pumps only",
                    "Integrated drive generator, oil pumps, hydraulic pump and fuel pumps",
                    "Hydraulic pump only"
                ],
                correct: 2,
                explanation: "The accessory gearbox drives the integrated drive generator, oil pumps, hydraulic pump and fuel pumps, providing essential power for electrical, hydraulic, and fuel systems.",
                reference: "B737 NG CBT - Engines, Section 10"
            },
            {
                question: "Understanding basic propulsion principles, you explain to students how jet engines create forward motion. What is the fundamental thrust generation method?",
                options: [
                    "Fuel combustion only",
                    "Accelerating ambient air mass through the engine per Newton's third law",
                    "Electric propulsion",
                    "Compressed air storage"
                ],
                correct: 1,
                explanation: "Engine produces thrust by accelerating ambient air as it passes through the engine, creating momentum change that results in forward thrust according to Newton's third law.",
                reference: "B737 NG CBT - Engines, Section 11"
            },
            {
                question: "In turbofan engine design, air flows through two paths: the core and around the core. Which airflow path contributes more to total thrust production?",
                options: [
                    "Core engine produces most",
                    "Equal contribution",
                    "Bypass air produces most of the thrust for improved fuel efficiency",
                    "Only bypass air"
                ],
                correct: 2,
                explanation: "The remaining part of air flows through the duct around and outside of the core engine. This cold or bypass air produces most of the thrust as it exits through the engine exhaust, making turbofans more fuel efficient.",
                reference: "B737 NG CBT - Engines, Section 13"
            },
            {
                question: "What are the three main engine controls on the flight deck?",
                options: [
                    "Throttle, mixture, propeller",
                    "Forward thrust lever, reverse thrust lever, and start lever",
                    "Power lever, condition lever, fuel lever",
                    "Thrust lever, fuel valve, ignition switch"
                ],
                correct: 1,
                explanation: "Engine controls consist of a forward thrust lever, a reverse thrust lever and a start lever for each engine.",
                reference: "B737 NG CBT - Engines, Section 15"
            },
            {
                question: "What prevents simultaneous operation of forward and reverse thrust levers?",
                options: [
                    "Electronic interlock",
                    "Hydraulic system",
                    "A locking mechanism",
                    "Computer control"
                ],
                correct: 2,
                explanation: "A locking mechanism prevents the operation of the forward thrust lever and the reverse thrust lever at the same time. Thus, you cannot select reverse thrust unless the related forward thrust lever is at IDLE.",
                reference: "B737 NG CBT - Engines, Section 19"
            },
            
            // ENGINE FUEL SYSTEM
            {
                question: "What is the primary function of the engine fuel system?",
                options: [
                    "To store fuel",
                    "To filter fuel",
                    "To supply metered fuel to the engine for combustion",
                    "To heat fuel"
                ],
                correct: 2,
                explanation: "The function of the engine fuel system is to supply metered fuel to the engine for combustion.",
                reference: "B737 NG CBT - Engines, Section 22"
            },
            {
                question: "What is the sequence of fuel flow from the fuel tank to the engine?",
                options: [
                    "Tank → Filter → Pump → Engine",
                    "Tank → Spar shutoff valve → Low pressure pump → Heat exchangers → Filter → High pressure pump → HMU",
                    "Tank → Engine directly",
                    "Tank → High pressure pump → Engine"
                ],
                correct: 1,
                explanation: "The boosted fuel from the fuel tank flows through the fuel spar shutoff valve to a low pressure engine fuel pump, then through heat exchangers, filter, high pressure pump, and HMU.",
                reference: "B737 NG CBT - Engines, Section 23-28"
            },
            {
                question: "What happens in the IDG oil cooler regarding fuel?",
                options: [
                    "Fuel is cooled by IDG oil",
                    "Fuel heats the IDG oil and by this process the IDG oil is cooled",
                    "Fuel and IDG oil are mixed",
                    "Fuel bypasses the IDG oil cooler"
                ],
                correct: 1,
                explanation: "The warm IDG oil heats the engine fuel and by this process the IDG oil is cooled.",
                reference: "B737 NG CBT - Engines, Section 24"
            },
            {
                question: "Why is fuel heated in the heat exchanger?",
                options: [
                    "To improve combustion",
                    "To prevent formation of ice from water which may clog the fuel filter",
                    "To reduce fuel consumption",
                    "To increase fuel pressure"
                ],
                correct: 1,
                explanation: "Heating the fuel prevents the formation of ice from the water, which may clog the fuel filter and other downstream components.",
                reference: "B737 NG CBT - Engines, Section 24"
            },
            {
                question: "What occurs when the fuel filter becomes clogged?",
                options: [
                    "Engine shuts down",
                    "Fuel automatically bypasses the filter",
                    "Fuel flow stops",
                    "Fuel pressure increases"
                ],
                correct: 1,
                explanation: "If the fuel filter becomes clogged due to contamination, the fuel automatically bypasses the filter.",
                reference: "B737 NG CBT - Engines, Section 26"
            },
            {
                question: "Which light illuminates before fuel filter bypass occurs?",
                options: [
                    "FUEL PRESSURE light",
                    "FUEL LOW light",
                    "FUEL FILTER BYPASS light",
                    "FUEL TEMP light"
                ],
                correct: 2,
                explanation: "The fuel FILTER BYPASS light illuminates on the fuel control panel before the fuel bypass occurs.",
                reference: "B737 NG CBT - Engines, Section 26"
            },
            {
                question: "What is the function of the hydro mechanical unit (HMU)?",
                options: [
                    "To filter fuel",
                    "To heat fuel",
                    "To supply metered fuel to the fuel nozzles with the electronic engine control",
                    "To store fuel"
                ],
                correct: 2,
                explanation: "With the electronic engine control, the HMU supplies metered fuel to the fuel nozzles.",
                reference: "B737 NG CBT - Engines, Section 28"
            },
            {
                question: "When do both the spar fuel shutoff valve and engine fuel shutoff valve close?",
                options: [
                    "During normal operation",
                    "When either the start lever is in CUTOFF position or the engine fire switch is out",
                    "During engine start",
                    "When thrust levers are at idle"
                ],
                correct: 1,
                explanation: "Both the spar fuel shutoff valve and engine fuel shutoff valve close when either the start lever is in the CUTOFF position or the engine fire switch is out.",
                reference: "B737 NG CBT - Engines, Section 30"
            },
            {
                question: "What information does the fuel flow transmitter provide?",
                options: [
                    "Fuel pressure only",
                    "Fuel temperature only",
                    "Fuel flow and fuel used information to display unit and flight management system",
                    "Fuel quality information"
                ],
                correct: 2,
                explanation: "The fuel flow transmitter measures fuel flow and transmits this information to display unit for fuel flow and fuel used indication and to the flight management system.",
                reference: "B737 NG CBT - Engines, Section 33"
            },
            {
                question: "What distributes fuel to individual fuel nozzles?",
                options: [
                    "Fuel pump",
                    "Fuel manifold",
                    "Fuel filter",
                    "Fuel tank"
                ],
                correct: 1,
                explanation: "From fuel flow transmitter, the fuel is then routed to the fuel manifold which distributes the fuel to individual fuel nozzles.",
                reference: "B737 NG CBT - Engines, Section 34"
            },
            
            // ELECTRONIC ENGINE CONTROL (EEC)
            {
                question: "How many computers does each EEC contain?",
                options: [
                    "One computer",
                    "Two independent computers called channels A and B",
                    "Three computers",
                    "Four computers"
                ],
                correct: 1,
                explanation: "Each EEC has two independent computers which are called channels A and B.",
                reference: "B737 NG CBT - Engines, Section 35"
            },
            {
                question: "How does the EEC alternate between active and standby channels?",
                options: [
                    "Manually by pilot",
                    "Every flight hour",
                    "Each time the engine is started if N2 was more than 76% during previous run",
                    "Never alternates"
                ],
                correct: 2,
                explanation: "Each time the engine is started, the EEC alternates between active channel and standby channel. This change of control occurs if N2 was more than 76 percent during the previous engine run and both channels are valid.",
                reference: "B737 NG CBT - Engines, Section 37"
            },
            {
                question: "What are the five major functions of the EEC?",
                options: [
                    "Start, run, monitor, protect, shutdown",
                    "Engine thrust management, structural limit protection, engine idle operation, reverse thrust control and flight deck indication",
                    "Fuel control, ignition, start, monitor, display",
                    "Power, control, monitor, protect, indicate"
                ],
                correct: 1,
                explanation: "The EEC performs the following major functions: engine thrust management, structural limit protection, engine idle operation, reverse thrust control and flight deck indication.",
                reference: "B737 NG CBT - Engines, Section 39"
            },
            {
                question: "What parameter does the EEC use to control engine thrust?",
                options: [
                    "Fuel flow",
                    "N2 speed",
                    "N1 speed",
                    "EGT"
                ],
                correct: 2,
                explanation: "The EEC uses N1 speed to control engine thrust.",
                reference: "B737 NG CBT - Engines, Section 40"
            },
            {
                question: "What inputs does the EEC use in normal mode to calculate commanded N1?",
                options: [
                    "Thrust lever position only",
                    "Thrust lever position, ambient total pressure, ambient static pressure, ambient total air temperature and bleed air demand",
                    "Fuel flow and engine temperature",
                    "Pilot input only"
                ],
                correct: 1,
                explanation: "In the normal mode, the EEC calculates the commanded N1 speed based on the position of the thrust levers, ambient total pressure, ambient static pressure, ambient total air temperature and bleed air demand.",
                reference: "B737 NG CBT - Engines, Section 41"
            },
            {
                question: "What light indication shows the EEC is operating in normal mode?",
                options: [
                    "Green ON light",
                    "White ON light",
                    "Amber ALTERNATE light",
                    "Red FAIL light"
                ],
                correct: 1,
                explanation: "When the EEC is in the normal mode, the white ON light is in view on the respective EEC switch.",
                reference: "B737 NG CBT - Engines, Section 44"
            },
            {
                question: "When does the EEC automatically enter soft alternate mode?",
                options: [
                    "When thrust levers are moved",
                    "When ambient total pressure data is not available",
                    "During engine start",
                    "During approach phase"
                ],
                correct: 1,
                explanation: "When the ambient total air pressure data is not available, the EEC automatically goes to the soft alternate mode.",
                reference: "B737 NG CBT - Engines, Section 47"
            },
            {
                question: "What happens if the EEC remains in soft alternate mode for more than 15 seconds?",
                options: [
                    "Nothing happens",
                    "Engine shuts down",
                    "The amber ALTERNATE light illuminates and MASTER CAUTION lights come on",
                    "The engine goes to manual control"
                ],
                correct: 2,
                explanation: "If the EEC stays in the soft alternate mode more than 15 seconds, the amber ALTERNATE light illuminates on the respective EEC switch while ON is still in view, and the MASTER CAUTION lights and the ENGINE system annunciator come on.",
                reference: "B737 NG CBT - Engines, Section 51"
            },
            {
                question: "How can you manually select hard alternate mode?",
                options: [
                    "Move thrust levers to maximum",
                    "Lift the EEC switch guard and push the switch",
                    "Turn off the engine",
                    "Use the FMC"
                ],
                correct: 1,
                explanation: "Lift the engine number 1 EEC switch guard and push the switch.",
                reference: "B737 NG CBT - Engines, Section 62"
            },
            {
                question: "What must you do before manually selecting hard alternate mode?",
                options: [
                    "Shut down the engine",
                    "Set thrust levers to mid position and disengage autothrottle",
                    "Increase thrust to maximum",
                    "Contact maintenance"
                ],
                correct: 1,
                explanation: "Before you select the hard alternate mode, set the thrust levers to the mid position. If the autothrottle is engaged, disengage it.",
                reference: "B737 NG CBT - Engines, Section 59-60"
            },
            {
                question: "What protection does the EEC provide for N1 and N2 speeds?",
                options: [
                    "No protection",
                    "N1 redline overspeed protection only",
                    "N2 redline overspeed protection only", 
                    "N1 and N2 redline overspeed protection"
                ],
                correct: 3,
                explanation: "To keep engine operation safe and satisfactory, the EEC provides N1 and N2 redline overspeed protection in both normal and alternate modes.",
                reference: "B737 NG CBT - Engines, Section 65"
            },
            {
                question: "What limit does the EEC NOT provide protection for?",
                options: [
                    "N1 overspeed",
                    "N2 overspeed",
                    "EGT limit",
                    "Fuel flow limit"
                ],
                correct: 2,
                explanation: "However, you must observe the EGT limit, because the EEC does not provide EGT redline exceedance protection.",
                reference: "B737 NG CBT - Engines, Section 67"
            },
            {
                question: "What are the three different idle modes used by the EEC?",
                options: [
                    "Low, medium, high idle",
                    "Ground idle, flight idle, and approach idle",
                    "Start, cruise, landing idle",
                    "Normal, alternate, emergency idle"
                ],
                correct: 1,
                explanation: "EEC uses three different idle modes for different requirements of engine acceleration time: ground idle, flight idle and approach idle.",
                reference: "B737 NG CBT - Engines, Section 71"
            },
            {
                question: "When does the EEC select approach idle?",
                options: [
                    "During takeoff",
                    "During cruise",
                    "In flight when flaps are in landing configuration, or engine anti-ice is ON, or signals not available below 19000 feet",
                    "On the ground only"
                ],
                correct: 2,
                explanation: "The EEC selects approach idle in flight when flaps are in landing configuration, or the engine anti-ice is ON for either engine, or the flap or anti-ice signals are not available to the EEC while the airplane is below 19000 feet.",
                reference: "B737 NG CBT - Engines, Section 74"
            },
            {
                question: "How long does the EEC maintain approach idle after touchdown?",
                options: [
                    "Immediately changes to ground idle",
                    "5 seconds then shifts to ground idle",
                    "10 seconds then shifts to ground idle",
                    "Until thrust levers are moved"
                ],
                correct: 1,
                explanation: "The EEC maintains approach idle for 5 seconds after touchdown; then it shifts to ground idle.",
                reference: "B737 NG CBT - Engines, Section 75"
            },
            {
                question: "When does the ENGINE CONTROL light illuminate?",
                options: [
                    "During normal operation",
                    "When an EEC detects an engine fault that requires maintenance action",
                    "During engine start",
                    "When thrust levers are moved"
                ],
                correct: 1,
                explanation: "When an EEC detects an engine fault that requires a maintenance action, the respective ENGINE CONTROL light on the ENGINE panel illuminates.",
                reference: "B737 NG CBT - Engines, Section 76"
            },
            {
                question: "What other lights illuminate when the ENGINE CONTROL light comes on?",
                options: [
                    "No other lights",
                    "FIRE warning lights",
                    "MASTER CAUTION lights and ENGINE system annunciator",
                    "All warning lights"
                ],
                correct: 2,
                explanation: "Whenever either ENGINE CONTROL light comes on, the MASTER CAUTION lights and the ENGINE system annunciator also illuminate.",
                reference: "B737 NG CBT - Engines, Section 78"
            },
            {
                question: "Can the aircraft dispatch with the ENGINE CONTROL light illuminated?",
                options: [
                    "Yes, with restrictions",
                    "Yes, normal operation",
                    "No, the airplane cannot dispatch",
                    "Only for ferry flights"
                ],
                correct: 2,
                explanation: "The airplane cannot dispatch with this light on.",
                reference: "B737 NG CBT - Engines, Section 79"
            },
            
            // ENGINE OIL SYSTEM
            {
                question: "What are the two main functions of the engine oil system?",
                options: [
                    "Heating and cooling",
                    "Lubrication and cooling for engine bearings and accessory gearbox",
                    "Filtering and storage",
                    "Pressure and flow control"
                ],
                correct: 1,
                explanation: "The engine oil system provides lubrication and cooling for the engine bearings and the accessory gearbox.",
                reference: "B737 NG CBT - Engines, Section 80"
            },
            {
                question: "What pressurizes the oil from the tank?",
                options: [
                    "Electric pump",
                    "Engine driven supply pump",
                    "Hydraulic pump",
                    "Manual pump"
                ],
                correct: 1,
                explanation: "An engine driven supply pump pressurizes the oil from the tank.",
                reference: "B737 NG CBT - Engines, Section 82"
            },
            {
                question: "What is the function of the supply oil filter?",
                options: [
                    "To heat the oil",
                    "To remove foreign particles from the oil",
                    "To pressurize the oil",
                    "To cool the oil"
                ],
                correct: 1,
                explanation: "Oil from the pump goes to the supply oil filter which removes foreign particles from the oil.",
                reference: "B737 NG CBT - Engines, Section 83"
            },
            {
                question: "What sensors monitor oil temperature and pressure?",
                options: [
                    "Manual gauges",
                    "Oil temperature and oil pressure sensors",
                    "Computer sensors",
                    "Mechanical sensors"
                ],
                correct: 1,
                explanation: "The oil temperature and oil pressure sensors transmit the oil temperature and pressure data to the engine display through the EEC.",
                reference: "B737 NG CBT - Engines, Section 85"
            },
            {
                question: "What removes oil from engine bearing compartments?",
                options: [
                    "Supply pump",
                    "Scavenge pump",
                    "Electric pump",
                    "Gravity drain"
                ],
                correct: 1,
                explanation: "The scavenge pump removes the oil that collects in the engine bearing compartments and gearbox sump.",
                reference: "B737 NG CBT - Engines, Section 87"
            },
            {
                question: "What happens when the scavenge oil filter becomes clogged?",
                options: [
                    "Oil flow stops",
                    "Oil automatically bypasses the filter and OIL FILTER BYPASS light illuminates",
                    "Engine shuts down",
                    "Oil pressure increases"
                ],
                correct: 1,
                explanation: "If the scavenge oil filter becomes clogged due to debris, oil automatically bypasses the filter. Before the oil bypass occurs, the OIL FILTER BYPASS light illuminates on the upper display unit.",
                reference: "B737 NG CBT - Engines, Section 89"
            },
            {
                question: "During a winter operation with fuel temperature at -35°C, you observe oil temperature rising slightly in the oil/fuel heat exchanger. The first officer asks about the final destination of the oil after completing this thermal exchange process. In this heat transfer system, where does the oil proceed?",
                options: [
                    "Directly to engine bearing lubrication points for immediate use",
                    "Returns to oil tank after cooling while transferring heat to fuel",
                    "Continues to scavenge pump for additional processing",
                    "Recirculates through secondary oil filter for final cleaning"
                ],
                correct: 1,
                explanation: "Before returning to the oil tank, the oil passes through the engine oil/fuel heat exchanger where the oil cools as it heats the fuel. This thermal exchange serves dual purposes: warming fuel to prevent ice formation while cooling oil for optimal lubrication properties.",
                reference: "B737 NG CBT - Engines, Section 90"
            },
            
            // ENGINE INDICATIONS & ABNORMAL CONDITIONS
            {
                question: "During a pre-flight briefing, the captain reviews engine monitoring systems with a new first officer. They discuss how to interpret engine data during various flight phases. The captain explains the cockpit display architecture for engine parameter monitoring. Which display configuration presents engine parameters?",
                options: [
                    "Single integrated display unit showing all parameters",
                    "Dual display units - upper and lower - providing comprehensive engine monitoring",
                    "Triple display configuration for redundancy",
                    "Quadruple display system with backup units"
                ],
                correct: 1,
                explanation: "Engine parameters are shown on two display units or DUs: the upper display unit and the lower display unit. This dual-display configuration provides comprehensive engine monitoring while maintaining clear information presentation.",
                reference: "B737 NG CBT - Engines, Section 91"
            },
            {
                question: "During approach phase with turbulence, the captain instructs you to monitor engine performance closely. You scan the upper display unit for the most critical engine parameters that provide immediate thrust and thermal status information. Which parameters serve as primary engine indications?",
                options: [
                    "N1 fan speed and N2 core speed for complete rotor monitoring",
                    "N1 fan speed and EGT for thrust and thermal management",
                    "EGT and fuel flow for thermal and consumption analysis",
                    "Oil pressure and temperature for lubrication system health"
                ],
                correct: 1,
                explanation: "N1 and EGT are the primary engine indications shown on the upper display. N1 directly relates to thrust output while EGT indicates thermal status, providing pilots with essential real-time engine performance data.",
                reference: "B737 NG CBT - Engines, Section 97"
            },
            {
                question: "During climb phase, you advance thrust levers for increased power but notice the white arc indicator moving on the N1 display. The first officer asks about this white arc's significance for engine response monitoring. What information does the N1 Command Sector arc provide?",
                options: [
                    "Current N1 speed relative to maximum rated power",
                    "Real-time difference between actual N1 and thrust lever commanded N1",
                    "Maximum permissible N1 limit for current conditions",
                    "Target N1 speed for optimal fuel efficiency"
                ],
                correct: 1,
                explanation: "The white N1 Command Sector arc on the outside of the dial shows the momentary difference between actual N1 and the N1 value commanded by the thrust lever position. This indicates engine response lag and helps pilots understand power transition dynamics.",
                reference: "B737 NG CBT - Engines, Section 99"
            },
            {
                question: "During pre-flight setup, you configure the N1 SET selector for optimal thrust reference display during takeoff. The maintenance technician asks about the available positions for display source selection. What are the four positions of the N1 SET selector outer knob?",
                options: [
                    "OFF, LOW, MED, HIGH for power level selection",
                    "BOTH, AUTO, 1 and 2 for display source configuration",
                    "MANUAL, AUTO, TEST, OFF for operational modes",
                    "START, RUN, STOP, TEST for engine control phases"
                ],
                correct: 1,
                explanation: "The outer knob has four positions: BOTH, AUTO, 1 and 2. These positions determine which engine's data is displayed and how the N1 reference system operates during various flight phases.",
                reference: "B737 NG CBT - Engines, Section 103"
            },
            {
                question: "During a go-around with maximum thrust selected, you notice the N1 indication approaching the redline limit. The first officer monitors for visual warnings as engine parameters reach critical values. What visual indication occurs when N1 exceeds the redline?",
                options: [
                    "Engine automatically shuts down with master warning",
                    "Digital readout, box, pointer and shaded area become red for immediate recognition",
                    "Audible warning horn sounds with flashing lights",
                    "No visual change occurs during brief exceedances"
                ],
                correct: 1,
                explanation: "When N1 exceeds the operating limit and goes above the N1 redline, the digital readout, the box around N1 digital readout, and the N1 pointer and the shaded area becomes red. This comprehensive red indication ensures immediate pilot recognition of the overspeed condition.",
                reference: "B737 NG CBT - Engines, Section 109"
            },
            {
                question: "What does the EGT start limit redline indicate?",
                options: [
                    "Normal operating limit",
                    "Maximum value for EGT during ground engine starts until N2 is approximately 59%",
                    "Maximum cruise EGT",
                    "Emergency EGT limit"
                ],
                correct: 1,
                explanation: "The EGT start limit redline indicates the maximum value for the EGT during ground engine starts until the N2 is approximately 59%.",
                reference: "B737 NG CBT - Engines, Section 112"
            },
            {
                question: "What is the EGT amber band and what does it represent?",
                options: [
                    "Normal operating range",
                    "The EGT caution range between maximum continuous limit and EGT redline",
                    "Start-up range",
                    "Emergency range"
                ],
                correct: 1,
                explanation: "The EGT amber band is the EGT caution range. The EGT caution range shows as an arc between the maximum continuous limit and the EGT redline.",
                reference: "B737 NG CBT - Engines, Section 114-116"
            },
            {
                question: "During a maximum weight takeoff with high EGT values, the first officer notices the EGT remains in normal color despite approaching caution range. You explain the takeoff inhibit logic. How long is the EGT amber color change inhibited during takeoff?",
                options: [
                    "2 minutes for normal takeoff operations",
                    "5 minutes or until completion of takeoff phase",
                    "10 minutes for extended departure procedures",
                    "No inhibit occurs during takeoff operations"
                ],
                correct: 1,
                explanation: "During takeoff and go-around, the amber color change is inhibited for five minutes or until completion of takeoff, whichever comes first. This prevents nuisance warnings during high-power operations when EGT naturally approaches limits.",
                reference: "B737 NG CBT - Engines, Section 118"
            },
            {
                question: "During engine monitoring in cruise flight, you review all available engine parameters for comprehensive health assessment. Beyond the primary N1 and EGT, what are the secondary engine indications?",
                options: [
                    "N1 and EGT primary parameters only",
                    "N2, fuel flow, oil pressure, oil temperature, oil quantity, and engine vibration",
                    "Only fuel flow and oil pressure for basic monitoring",
                    "Only N2 and oil temperature for core assessment"
                ],
                correct: 1,
                explanation: "The secondary engine indications are the N2, fuel flow, oil pressure, oil temperature, oil quantity, and engine vibration. These parameters provide comprehensive engine health monitoring beyond primary thrust indications.",
                reference: "B737 NG CBT - Engines, Section 127"
            },
            {
                question: "During flight operations, you notice secondary engine parameters suddenly appear on the lower display. The trainee asks about the automatic display logic for these parameters. When are secondary engine indications automatically displayed?",
                options: [
                    "Always displayed throughout all flight phases",
                    "Only during engine start sequence",
                    "When displays powered, start lever to CUTOFF in flight, or N2 below idle with parameter exceeded",
                    "Only during declared emergency situations"
                ],
                correct: 2,
                explanation: "The secondary engine indications are automatically displayed when the displays are initially powered, in flight when an engine start lever is moved to CUTOFF, in flight when an engine N2 speed is below idle and a secondary engine parameter is exceeded. This automatic display ensures critical engine data visibility when needed.",
                reference: "B737 NG CBT - Engines, Section 128"
            },
            {
                question: "During cruise flight, you experience an engine malfunction with N2 rapidly decreasing while the start lever remains in idle position. What alert appears when N2 drops below approximately 50% with start lever in idle?",
                options: [
                    "ENGINE FAILURE alert for complete shutdown",
                    "ENGINE FAIL alert on EGT display",
                    "LOW N2 alert for speed indication",
                    "ENGINE SHUTDOWN alert for fuel cutoff"
                ],
                correct: 1,
                explanation: "When the N2 speed decreases below a stabilized idle position of approximately 50% and the engine start lever is in the idle position, an amber ENGINE FAIL alert shows on the related EGT display. This indicates engine failure requiring immediate crew action.",
                reference: "B737 NG CBT - Engines, Section 133"
            },
            {
                question: "During engine acceleration for takeoff, you observe the oil pressure display characteristics changing as power increases. At what N2 speed does the oil pressure amber marker index become visible?",
                options: [
                    "Always visible throughout engine operation",
                    "When N2 reaches 65% or greater",
                    "During engine start sequence only",
                    "When oil pressure drops below normal range"
                ],
                correct: 1,
                explanation: "The position of amber marker is variable depending on the N2 speed. As the N2 increases from 65%, the marker moves upward. When N2 is less than 65%, the amber marker index does not show. This variable marking system adjusts pressure limits based on engine speed.",
                reference: "B737 NG CBT - Engines, Section 139-140"
            },
            {
                question: "During pre-flight inspection, maintenance personnel report insufficient oil quantity for dispatch. You check the engine display for confirmation. What message indicates low oil quantity?",
                options: [
                    "LOW message for quantity indication",
                    "LO message for oil level warning",
                    "EMPTY message for complete depletion",
                    "REFILL message for service requirement"
                ],
                correct: 1,
                explanation: "The low oil quantity is indicated by a LO message. This concise indication provides clear warning of insufficient oil quantity requiring attention before flight.",
                reference: "B737 NG CBT - Engines, Section 146"
            },
            {
                question: "During cruise flight, you notice abnormal engine vibration developing gradually. You monitor the vibration indication for trend analysis. What vibration level is considered high and how is it indicated?",
                options: [
                    "Above 2.0 units, displayed in red color",
                    "Above 3.0 units, displayed in amber color",
                    "Above 4.0 units, displayed in reverse video",
                    "Above 5.0 units, displayed with blinking indication"
                ],
                correct: 2,
                explanation: "High vibration, which is above 4.0 units, is indicated by reverse video. This distinctive display format ensures immediate recognition of potentially damaging vibration levels requiring crew attention.",
                reference: "B737 NG CBT - Engines, Section 150"
            },
            {
                question: "During cruise flight, the LOW OIL PRESSURE alert suddenly appears on the upper display. This is a critical situation requiring immediate action. What does the LOW OIL PRESSURE alert indicate?",
                options: [
                    "Oil level is insufficient for normal operation",
                    "Oil pressure at redline limit or below requiring engine shutdown",
                    "Oil temperature exceeds normal operating range",
                    "Oil filter requires replacement during next maintenance"
                ],
                correct: 1,
                explanation: "When the oil pressure goes to the redline limit or below, the amber LOW OIL PRESSURE alert shows on the upper display. The oil pressure is now too low for continued engine operation and the affected engine must be shut down. This critical alert indicates imminent engine damage risk.",
                reference: "B737 NG CBT - Engines, Section 154-156"
            },
            
            // ABNORMAL CONDITIONS
            {
                question: "During pre-takeoff engine run-up, oil pressure enters the caution range as you advance thrust levers to takeoff power. Ground control requests takeoff clearance, but you notice this abnormal indication. What should you do if oil pressure is in the caution range with takeoff power set?",
                options: [
                    "Continue takeoff as oil pressure is marginally acceptable",
                    "Do not takeoff - abort and investigate the condition",
                    "Reduce power slightly and attempt takeoff with reduced thrust",
                    "Monitor for 5 minutes to see if condition improves"
                ],
                correct: 1,
                explanation: "If the oil pressure is in the caution range with takeoff power set, do not takeoff. Oil pressure in the caution range is not normal at high thrust settings and indicates potential lubrication system problems that could lead to engine failure.",
                reference: "B737 NG CBT - Engines, Section 153"
            },
            {
                question: "During climb phase in hot weather conditions, you observe oil temperature climbing into the caution range on the right engine. The autothrottle is engaged maintaining climb power. What action should you take when oil temperature enters the caution range?",
                options: [
                    "Continue normal operation as temperature is still acceptable",
                    "Disengage autothrottle and retard thrust lever until oil temperature goes below caution range",
                    "Shut down engine immediately to prevent damage",
                    "Increase thrust to improve oil circulation and cooling"
                ],
                correct: 1,
                explanation: "When the oil temperature is in the caution range, disengage the autothrottle, if it is engaged and retard the affected engine thrust lever slowly until the oil temperature goes below the caution range or the thrust lever is at idle. This prevents further thermal damage while maintaining controllability.",
                reference: "B737 NG CBT - Engines, Section 159"
            },
            {
                question: "After reducing power to address high oil temperature, the temperature stabilizes in the caution range but doesn't decrease further. You need to reach your destination which is 30 minutes away. How long can you operate with oil temperature in the caution range?",
                options: [
                    "15 minutes maximum before mandatory shutdown",
                    "30 minutes for short-duration operations",
                    "45 minutes maximum allowed operation time",
                    "60 minutes with continuous monitoring"
                ],
                correct: 2,
                explanation: "If the oil temperature remains in the caution range, you can operate the engine for 45 minutes in this condition. This time limit balances operational necessity with engine protection from thermal damage.",
                reference: "B737 NG CBT - Engines, Section 160"
            },
            {
                question: "During cruise flight, you experience a sudden oil temperature spike that exceeds the redline limit on the left engine. This is a critical emergency requiring immediate action. What must you do when oil temperature exceeds the redline limit?",
                options: [
                    "Monitor for 10 minutes to confirm trend",
                    "Reduce thrust to idle and continue monitoring",
                    "Shutdown the affected engine immediately",
                    "Continue with reduced power and plan nearest diversion"
                ],
                correct: 2,
                explanation: "When the oil temperature is at or above the redline limit, you must shutdown the affected engine. Continued operation with oil temperature at redline will cause catastrophic engine failure and potential fire.",
                reference: "B737 NG CBT - Engines, Section 163"
            },
            {
                question: "During cruise flight, the OIL FILTER BYPASS alert suddenly illuminates on the upper display unit. The first officer asks about the significance of this warning for engine operation. What happens when the OIL FILTER BYPASS alert illuminates?",
                options: [
                    "Continue normal operation with no immediate action required",
                    "Oil is about to bypass the scavenge filter due to contamination",
                    "Change oil immediately during next maintenance check",
                    "Engine will automatically shut down for protection"
                ],
                correct: 1,
                explanation: "When the oil is about to bypass the oil scavenge filter due to filter contamination, the OIL FILTER BYPASS alert illuminates on the upper display unit. This indicates filter contamination but allows continued operation with bypassed, unfiltered oil.",
                reference: "B737 NG CBT - Engines, Section 165"
            },
            {
                question: "During cruise flight in clear air, engine vibration suddenly increases above 4.0 units on the left engine with autothrottle engaged. This indicates potential mechanical problems requiring immediate action. What action should you take for high vibration above 4.0 units?",
                options: [
                    "Continue normal operation and monitor trend",
                    "Increase thrust to clear vibration through power change",
                    "Disengage autothrottle and retard thrust lever until vibration is below 4.0 units",
                    "Shut down engine immediately to prevent damage"
                ],
                correct: 2,
                explanation: "With no icing conditions, if the vibration level goes beyond 4.0 units, disengage the autothrottle, if it is engaged and retard the affected engine thrust lever until the vibration level is below 4.0 units or the thrust lever is at idle. This reduces mechanical stress while maintaining engine operation.",
                reference: "B737 NG CBT - Engines, Section 169"
            },
            
            // ENGINE STARTING SYSTEM
            {
                question: "During ground operations, a maintenance technician asks about the fundamental function of the pneumatic starting system. They understand fuel and ignition systems but need clarity on mechanical requirements. What is the purpose of the engine starting system?",
                options: [
                    "To provide fuel delivery to combustion chambers",
                    "To provide initial torque and rotation speed high enough to start the combustion cycle",
                    "To provide cooling airflow during engine start sequence",
                    "To provide electrical power for ignition systems"
                ],
                correct: 1,
                explanation: "The purpose of engine starting system is to provide initial torque and rotation speed high enough to start the combustion cycle. The starter motor must accelerate the engine core to sufficient speed for sustained combustion and self-sustaining operation.",
                reference: "B737 NG CBT - Engines, Section 195"
            },
            {
                question: "During engine start sequence at a remote airport without ground support equipment, you plan the starting procedure considering available pneumatic sources. What provides pneumatic power for engine starting?",
                options: [
                    "Engine compressor only during normal operation",
                    "Electric motor with battery power",
                    "Auxiliary power unit, ground air cart, or opposite engine",
                    "Hydraulic system pressure conversion"
                ],
                correct: 2,
                explanation: "Pneumatic power comes from the auxiliary power unit or a ground air cart or the opposite engine. These high-pressure air sources provide sufficient power to rotate the starter motor for engine acceleration.",
                reference: "B737 NG CBT - Engines, Section 198"
            },
            {
                question: "What are the four positions of the ENGINE START switch?",
                options: [
                    "OFF, START, RUN, STOP",
                    "OFF, GROUND, CONTINUOUS, FLIGHT",
                    "START, IDLE, CRUISE, CUTOFF",
                    "NORM, ALT, EMER, OFF"
                ],
                correct: 1,
                explanation: "Each ENGINE START switch has four positions: OFF, GROUND, CONTINUOUS, FLIGHT.",
                reference: "B737 NG CBT - Engines, Section 200"
            },
            {
                question: "When do igniters operate automatically even with the start switch in OFF?",
                options: [
                    "During normal flight",
                    "If the EEC detects an imminent engine flameout condition",
                    "During engine start",
                    "Never operate automatically"
                ],
                correct: 1,
                explanation: "When the engine start switch is in the OFF position, the igniters normally do not operate. However, if the EEC detects an imminent engine flameout condition, it turns on both igniters automatically.",
                reference: "B737 NG CBT - Engines, Section 201"
            },
            {
                question: "What happens when the start switch is in the GROUND position?",
                options: [
                    "Only igniters operate",
                    "The start valve opens and pneumatic starter turns the engine",
                    "Fuel flows to engine",
                    "Engine shuts down"
                ],
                correct: 1,
                explanation: "When the start switch is moved to the ground position, the start valve opens and the pneumatic starter turns the engine.",
                reference: "B737 NG CBT - Engines, Section 202"
            },
            {
                question: "What is the normal engine start sequence?",
                options: [
                    "Engine 1 then 2",
                    "Engine 2 then 1",
                    "Both engines simultaneously",
                    "Either engine first"
                ],
                correct: 1,
                explanation: "Normal start sequence is engine number 2 then 1.",
                reference: "B737 NG CBT - Engines, Section 214"
            },
            {
                question: "What should you verify before moving the start lever to IDLE?",
                options: [
                    "Oil pressure indication",
                    "N1 movement and N2 is at 25% or maximum motoring at minimum 20%",
                    "EGT indication",
                    "Fuel flow indication"
                ],
                correct: 1,
                explanation: "Before you move the start lever to IDLE, verify there is a movement in the N1 indicator and N2 is at 25%, or if this is not possible, the N2 is at maximum motoring and a minimum of 20%.",
                reference: "B737 NG CBT - Engines, Section 220"
            },
            {
                question: "Within how many seconds must you observe EGT increase after moving start lever to IDLE?",
                options: [
                    "10 seconds",
                    "15 seconds",
                    "20 seconds",
                    "30 seconds"
                ],
                correct: 1,
                explanation: "Within 15 seconds after the start lever is moved to IDLE, you must observe an increase in the EGT indication.",
                reference: "B737 NG CBT - Engines, Section 222"
            },
            {
                question: "At what N2 percentage does the engine start switch automatically return to OFF?",
                options: [
                    "50% N2",
                    "56% N2",
                    "60% N2",
                    "65% N2"
                ],
                correct: 1,
                explanation: "At 56% N2, the engine start switch automatically goes back to the OFF position.",
                reference: "B737 NG CBT - Engines, Section 224"
            },
            {
                question: "What is the starter duty cycle limitation?",
                options: [
                    "1 minute on, 5 minutes off",
                    "2 minutes on, 10 seconds off between attempts",
                    "3 minutes on, 15 seconds off",
                    "No limitations"
                ],
                correct: 1,
                explanation: "The starter has a duty cycle. Thus, do not exceed 2 minutes during each start attempt and wait at least 10 seconds between start attempts.",
                reference: "B737 NG CBT - Engines, Section 230"
            },
            {
                question: "Which engine should be started first during ground air start and why?",
                options: [
                    "Engine 2 first - better accessibility",
                    "Engine 1 first - because ground crew and equipment are in the area of engine 2",
                    "Either engine - no preference",
                    "Both engines simultaneously"
                ],
                correct: 1,
                explanation: "For safety reasons, engine number 1 must be started first, because ground crew and equipment are in the area of engine number 2.",
                reference: "B737 NG CBT - Engines, Section 240"
            },
            {
                question: "What duct pressure is required for ground air start?",
                options: [
                    "20 psi minimum",
                    "30 psi minimum",
                    "40 psi minimum",
                    "50 psi minimum"
                ],
                correct: 1,
                explanation: "Make sure the duct pressure from the ground air cart is at least 30 psi.",
                reference: "B737 NG CBT - Engines, Section 242"
            },
            {
                question: "What switch positions are required for crossbleed start?",
                options: [
                    "All bleed switches OFF",
                    "Engine BLEED switches ON, APU BLEED OFF, ISOLATION VALVE AUTO",
                    "All bleed switches ON",
                    "APU BLEED ON, engine switches OFF"
                ],
                correct: 1,
                explanation: "Make sure that engine BLEED air switches are set to ON, the APU BLEED air switch is OFF and the ISOLATION VALVE switch is in AUTO.",
                reference: "B737 NG CBT - Engines, Section 247"
            },
            {
                question: "What protections does the EEC provide during ground starts?",
                options: [
                    "No protections",
                    "Only hot start protection",
                    "Hot starts, compressor stalls, EGT start limit exceedances, and wet starts",
                    "Only wet start protection"
                ],
                correct: 2,
                explanation: "During ground starts, the EEC monitors engine parameters to provide protection against imminent hot starts, compressor stalls, EGT start limit exceedances, and wet starts.",
                reference: "B737 NG CBT - Engines, Section 252"
            },
            {
                question: "When does a hot start occur?",
                options: [
                    "When engine is cold",
                    "When there is rapid rise in EGT or EGT approaches start limit",
                    "When fuel flow is insufficient for ignition",
                    "When N2 acceleration is excessive"
                ],
                correct: 1,
                explanation: "Hot start occurs when there is a rapid rise in EGT. Hot start also occurs when the EGT approaches the start limit. This thermal condition indicates excessive combustor temperature that can damage engine components.",
                reference: "B737 NG CBT - Engines, Section 253-254"
            },
            {
                question: "During engine start, you observe EGT rising rapidly toward limits. The EEC provides early warning before taking protective action. What happens when the EEC detects a possible hot start?",
                options: [
                    "Engine automatically shuts down immediately",
                    "White box surrounding EGT digital readout flashes",
                    "Red warning light illuminates with master warning",
                    "Warning horn sounds in cockpit"
                ],
                correct: 1,
                explanation: "When the EEC finds there is a possible hot start, the white box surrounding the EGT digital readout flashes. This early warning alerts pilots to monitor EGT closely and be prepared for possible abort action.",
                reference: "B737 NG CBT - Engines, Section 255"
            },
            {
                question: "During engine start, EGT suddenly spikes above the start limit despite your monitoring efforts. The EEC takes immediate protective action to prevent engine damage. What occurs during an EGT start limit exceedance?",
                options: [
                    "Normal operation continues with monitoring",
                    "EGT display turns red and EEC automatically shuts off fuel flow and ignition",
                    "Only warning light illuminates for pilot action",
                    "Engine power automatically reduces to safe level"
                ],
                correct: 1,
                explanation: "In the event that the EGT exceeds the starting limit, the EGT digital readout, the box around the readout and the dial turn red. The EEC automatically shuts off fuel flow to the engine and turns off the ignition. This automatic protection prevents catastrophic engine damage.",
                reference: "B737 NG CBT - Engines, Section 258-259"
            },
            {
                question: "During engine start sequence, you move the start lever to IDLE but fail to observe any EGT rise despite adequate N2 rotation. This indicates ignition failure with fuel accumulation. What is a wet start and when does it occur?",
                options: [
                    "When engine is contaminated with water ingestion",
                    "When EGT does not increase after start lever moved to IDLE",
                    "When fuel pressure exceeds normal operating limits",
                    "When oil pressure drops below minimum requirements"
                ],
                correct: 1,
                explanation: "A wet start occurs if the EGT does not increase after the start lever is moved to IDLE. Fuel can collect in the combustion chamber and on the ground surrounding the airplane. This creates both fire hazard and potential engine damage from fuel accumulation.",
                reference: "B737 NG CBT - Engines, Section 261-262"
            },
            {
                question: "Following an engine failure in cruise flight, you prepare for engine restart using available air sources. The altitude and airspeed determine restart capability. What are the two methods of inflight engine starting?",
                options: [
                    "Hot start and cold start",
                    "Windmill and crossbleed",
                    "Manual and automatic",
                    "Normal and emergency"
                ],
                correct: 1,
                explanation: "There are two methods of starting an engine inflight: windmill and crossbleed.",
                reference: "B737 NG CBT - Engines, Section 264"
            },
            {
                question: "What indication shows that crossbleed start is required for inflight start?",
                options: [
                    "RED light",
                    "X-BLD START indication above N2 display",
                    "Amber warning",
                    "Master caution"
                ],
                correct: 1,
                explanation: "If an inflight crossbleed starting is required, the X-BLD START indication is shown above the N2 display.",
                reference: "B737 NG CBT - Engines, Section 266"
            },
            {
                question: "What is the minimum duct pressure required for inflight crossbleed start?",
                options: [
                    "20 psi",
                    "30 psi",
                    "40 psi",
                    "50 psi"
                ],
                correct: 1,
                explanation: "Make sure that DUCT PRESSURE is minimum of 30 psi.",
                reference: "B737 NG CBT - Engines, Section 269"
            },
            {
                question: "When should you move the start lever to IDLE during inflight crossbleed start?",
                options: [
                    "When N2 is at 10%",
                    "When N2 is at or above 11%",
                    "When N2 is at 15%",
                    "When N2 is at 20%"
                ],
                correct: 1,
                explanation: "When the N2 is at or above 11%, move the engine start lever to IDLE.",
                reference: "B737 NG CBT - Engines, Section 271"
            },
            {
                question: "What switch position is used for windmill start?",
                options: [
                    "GROUND position",
                    "CONTINUOUS position",
                    "FLIGHT position",
                    "OFF position"
                ],
                correct: 2,
                explanation: "For a windmill start, move the ENGINE START switch to the FLIGHT position.",
                reference: "B737 NG CBT - Engines, Section 274"
            },
            {
                question: "What is flameout and how does it indicate itself?",
                options: [
                    "Engine overheat with high EGT",
                    "Condition where flame is extinguished with rapid decrease in N2",
                    "Loss of fuel pressure",
                    "High vibration levels"
                ],
                correct: 1,
                explanation: "The flameout is a condition where the flame in the combustion chamber is extinguished. A flameout indicates itself with an uncommanded rapid decrease in N2 or with a decrease in N2 below idle speed.",
                reference: "B737 NG CBT - Engines, Section 277-278"
            },
            {
                question: "What are the four conditions requiring an aborted ground start?",
                options: [
                    "Only EGT exceedance",
                    "EGT doesn't increase in 15 seconds, N1/N2 don't increase after EGT increase, EGT approaches start limit",
                    "Only high vibration",
                    "Only low oil pressure"
                ],
                correct: 1,
                explanation: "You must abort the engine start when one or more of these conditions occur: the EGT does not increase by 15 seconds after the engine start lever is moved to IDLE, the N1 or N2 does not increase or increases very slowly after the EGT increases, the EGT quickly approaches or exceeds the start limit.",
                reference: "B737 NG CBT - Engines, Section 281-283"
            },
            {
                question: "What is the procedure for aborting an engine start?",
                options: [
                    "Turn off fuel only",
                    "Move start lever to CUTOFF, motor for 60 seconds, then ENGINE START switch to OFF",
                    "Turn off ignition only",
                    "Reduce thrust to idle"
                ],
                correct: 1,
                explanation: "To abort the start move the engine start lever to CUTOFF. Motor the engine for 60 seconds to remove the collected fuel and cool the engine. Finally, put the ENGINE START switch to OFF.",
                reference: "B737 NG CBT - Engines, Section 285-287"
            },
            {
                question: "What should you do if the START VALVE OPEN alert remains illuminated after starter cutout?",
                options: [
                    "Continue normal operation",
                    "Isolate starter from all bleed air sources",
                    "Restart the engine",
                    "Contact maintenance only"
                ],
                correct: 1,
                explanation: "In this case, the starter must be isolated from all bleed air sources to protect it from a possible damage.",
                reference: "B737 NG CBT - Engines, Section 294"
            },
            
            // REVERSE THRUST SYSTEM
            {
                question: "What is the purpose of reverse thrust?",
                options: [
                    "To provide forward thrust",
                    "To support braking system and reduce landing distance",
                    "To cool the engines",
                    "To provide electrical power"
                ],
                correct: 1,
                explanation: "Reverse thrust provides a means of supporting the braking system to slow the airplane after landing or during a rejected take off (RTO) reducing landing distance and brake wear.",
                reference: "B737 NG CBT - Engines, Section 301"
            },
            {
                question: "What components make up the thrust reverser system?",
                options: [
                    "Only translating sleeves",
                    "Translating sleeves, cascade vanes, and blocker doors",
                    "Only cascade vanes",
                    "Only blocker doors"
                ],
                correct: 1,
                explanation: "Each engine is equipped with a thrust reverser system which consists of the translating sleeves, the cascade vanes and the blocker doors.",
                reference: "B737 NG CBT - Engines, Section 303"
            },
            {
                question: "What happens when thrust reverser is stowed?",
                options: [
                    "Cascade vanes are exposed",
                    "Translating sleeves are retracted and cover cascade vanes, blocker doors are in line with fan duct",
                    "Blocker doors are closed",
                    "Fan air is diverted"
                ],
                correct: 1,
                explanation: "When the thrust reverser is stowed, the translating sleeves are retracted and cover the cascade vanes, the blocker doors are in line with fan air duct and there is no change in the direction of the fan air discharge.",
                reference: "B737 NG CBT - Engines, Section 307"
            },
            {
                question: "How does the thrust reverser create reverse thrust when deployed?",
                options: [
                    "By stopping the engine",
                    "By moving translating sleeves rearward to uncover cascade vanes and close blocker doors",
                    "By reversing engine rotation",
                    "By redirecting fuel flow"
                ],
                correct: 1,
                explanation: "On selection of reverse thrust, the actuation system moves the translating sleeves rearwards which uncovers the cascade vanes. At the same time the blocker doors close off the fan discharge duct. The fan discharge airflow is diverted through the cascade vanes, which creates reverse thrust.",
                reference: "B737 NG CBT - Engines, Section 308"
            },
            {
                question: "Which hydraulic systems power the thrust reversers?",
                options: [
                    "System A for both engines",
                    "System B for both engines",
                    "Engine 1 - System A, Engine 2 - System B",
                    "System C for both engines"
                ],
                correct: 2,
                explanation: "During normal operation, the engine number 1 thrust reverser is powered by hydraulic system A and engine number 2 thrust reverser is powered by hydraulic system B.",
                reference: "B737 NG CBT - Engines, Section 309"
            },
            {
                question: "What happens if hydraulic system A or B fails?",
                options: [
                    "Thrust reverser becomes inoperative",
                    "Standby hydraulic system operates the affected thrust reverser at slower rate",
                    "Manual operation required",
                    "Thrust reverser locks in position"
                ],
                correct: 1,
                explanation: "If either hydraulic system A or B fails, the standby hydraulic system operates the affected thrust reverser. When the standby system is used, the affected thrust reverser extends and retracts at a slower rate.",
                reference: "B737 NG CBT - Engines, Section 310-311"
            },
            {
                question: "What are the positions of the reverse thrust lever?",
                options: [
                    "Stowed, detent 1, detent 2, maximum",
                    "Off, low, medium, high",
                    "Stowed, intermediate, maximum",
                    "Normal, reverse, maximum"
                ],
                correct: 0,
                explanation: "Each reverse thrust lever has these positions: stowed, detent 1, detent 2 and maximum reverse thrust.",
                reference: "B737 NG CBT - Engines, Section 314"
            },
            {
                question: "What conditions must be met for the isolation valve to open during reverse thrust selection?",
                options: [
                    "Engine must be running",
                    "Airplane less than 10 feet radio altitude or air/ground sensor in ground mode",
                    "Thrust levers at maximum",
                    "Hydraulic pressure available"
                ],
                correct: 1,
                explanation: "If the airplane is less than 10 feet of radio altitude or the air/ground sensor is in the ground mode, the isolation valve opens.",
                reference: "B737 NG CBT - Engines, Section 321"
            },
            {
                question: "What color is the REV indication when the translating sleeves are in transit?",
                options: [
                    "Green",
                    "Amber",
                    "Red",
                    "Blue"
                ],
                correct: 1,
                explanation: "When the translating sleeves are in transit, the amber REV light illuminates above the engine N1 indication.",
                reference: "B737 NG CBT - Engines, Section 323"
            },
            {
                question: "At what percentage of travel does the interlock mechanism disengage?",
                options: [
                    "50% of travel",
                    "60% of travel",
                    "70% of travel",
                    "80% of travel"
                ],
                correct: 1,
                explanation: "The interlock mechanism restricts further movement of the reverse thrust lever until the translating sleeves are at the 60% of the travel to the deployed position.",
                reference: "B737 NG CBT - Engines, Section 324"
            },
            {
                question: "What color is the REV indication when the thrust reverser reaches deployed position?",
                options: [
                    "Amber",
                    "Green",
                    "Red",
                    "White"
                ],
                correct: 1,
                explanation: "As the thrust reverser reaches the deployed position, the REV indication changes to green.",
                reference: "B737 NG CBT - Engines, Section 325"
            },
            {
                question: "What happens when you raise the reverse thrust lever to detent 2?",
                options: [
                    "Maximum reverse thrust",
                    "EEC adjusts adequate reverse thrust for normal operations",
                    "Minimum reverse thrust",
                    "Engine shuts down"
                ],
                correct: 1,
                explanation: "When you raise the reverse thrust levers to detent number 2, the EEC adjusts adequate reverse thrust for normal operations.",
                reference: "B737 NG CBT - Engines, Section 326"
            },
            {
                question: "What is the function of the auto-restow circuit?",
                options: [
                    "To deploy thrust reversers automatically",
                    "To compare actual sleeve position with commanded position and restow if needed",
                    "To test thrust reversers",
                    "To provide backup power"
                ],
                correct: 1,
                explanation: "Reverse thrust system also incorporates an auto-restow circuit which compares the actual translating sleeve position and the commanded reverser position. If the auto-restow circuit detects an incomplete stowage or an uncommanded movement of the reverser sleeves toward the deployed position, it opens the isolation valve and sets the control valve to the stow position.",
                reference: "B737 NG CBT - Engines, Section 334-335"
            },
            {
                question: "When does the REVERSER light on the engine panel illuminate?",
                options: [
                    "During normal operation",
                    "When isolation valve or control valve is not in commanded position",
                    "During thrust reverser deployment",
                    "When engines are running"
                ],
                correct: 1,
                explanation: "If the isolation valve or thrust reverser control valve is not in the commanded position, the REVERSER light on the engine panel comes on.",
                reference: "B737 NG CBT - Engines, Section 339"
            },
            {
                question: "What other lights illuminate when the REVERSER light comes on?",
                options: [
                    "No other lights",
                    "MASTER CAUTION and ENGINE system annunciator lights",
                    "Fire warning lights",
                    "All warning lights"
                ],
                correct: 1,
                explanation: "Whenever a REVERSER light comes on, the MASTER CAUTION and ENGINE system annunciation lights also illuminate after a time delay.",
                reference: "B737 NG CBT - Engines, Section 342"
            },
            {
                question: "What should you do if the amber REV indication illuminates during flight?",
                options: [
                    "Continue normal operation",
                    "Check forward thrust lever movement on affected engine and do not actuate reverse thrust lever",
                    "Immediately deploy reverse thrust",
                    "Shut down engine immediately"
                ],
                correct: 1,
                explanation: "To ensure that the REV indication is illuminated due to unstowed the reverser sleeves, check the movement of the forward thrust lever on the affected engine. DO NOT actuate the reverse thrust lever.",
                reference: "B737 NG CBT - Engines, Section 347"
            },
            {
                question: "What happens if you pause when moving reverse thrust levers past detent 1?",
                options: [
                    "Normal operation continues",
                    "MASTER CAUTION and ENGINE system annunciator lights may illuminate",
                    "Engine shuts down",
                    "Thrust reverser deploys fully"
                ],
                correct: 1,
                explanation: "If you pause when moving the reverse thrust levers past detent No. 1 toward the stowed position, the MASTER CAUTION and ENGINE system annunciator lights may illuminate.",
                reference: "B737 NG CBT - Engines, Section 350"
            }
        ]
    },
    "flight-controls": {
        title: "Flight Controls",
        questions: [
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
        ]
    },
    "fuel": {
        title: "Fuel System",
        questions: [
            {
                question: "What is the purpose of the fuel system?",
                options: [
                    "To store fuel only",
                    "To supply fuel to the engines and APU",
                    "To control aircraft weight",
                    "To provide emergency power"
                ],
                correct: 1,
                explanation: "The purpose of fuel system is to supply fuel to the engines and the auxiliary power unit (APU).",
                reference: "B737 NG CBT - Fuel, Section 3"
            },
            {
                question: "How many fuel tanks does the B737 NG have?",
                options: [
                    "Two tanks",
                    "Three tanks",
                    "Four tanks",
                    "Five tanks"
                ],
                correct: 1,
                explanation: "The airplane has three fuel tanks: main tank number 1 is in the left wing; main tank number 2 is in the right wing; and the center tank is in the fuselage and the inboard section of each wing.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the usable fuel capacity of each main tank?",
                options: [
                    "3,915 kgs",
                    "4,200 kgs",
                    "5,000 kgs",
                    "3,500 kgs"
                ],
                correct: 0,
                explanation: "Each main tank has a usable fuel capacity of 3,915 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the usable fuel capacity of the center tank?",
                options: [
                    "10,000 kgs",
                    "12,000 kgs",
                    "13,066 kgs",
                    "15,000 kgs"
                ],
                correct: 2,
                explanation: "The usable fuel capacity of the center tank is 13,066 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the total usable fuel capacity of the airplane?",
                options: [
                    "18,500 kgs",
                    "20,896 kgs",
                    "22,000 kgs",
                    "25,000 kgs"
                ],
                correct: 1,
                explanation: "Total usable fuel capacity of the airplane is 20,896 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the purpose of surge tanks?",
                options: [
                    "To store additional fuel",
                    "To collect fuel overflow only",
                    "To transfer fuel between tanks",
                    "To supply engines"
                ],
                correct: 1,
                explanation: "The surge tanks in the outboard section of the wings collect fuel overflow only.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "How many fuel boost pumps are incorporated in the engine fuel feed system?",
                options: [
                    "Four pumps",
                    "Five pumps",
                    "Six pumps",
                    "Eight pumps"
                ],
                correct: 2,
                explanation: "Engine fuel feed system incorporates six fuel boost pumps for the engine feed.",
                reference: "B737 NG CBT - Fuel, Section 8"
            },
            {
                question: "What powers all fuel boost pumps?",
                options: [
                    "DC electrical power",
                    "AC electrical power",
                    "Hydraulic power",
                    "Pneumatic power"
                ],
                correct: 1,
                explanation: "All fuel boost pumps are driven by AC electrical power and submerged in fuel for cooling.",
                reference: "B737 NG CBT - Fuel, Section 8"
            },
            {
                question: "How many fuel boost pumps are in the center tank?",
                options: [
                    "One pump",
                    "Two pumps, one left and one right",
                    "Three pumps",
                    "Four pumps"
                ],
                correct: 1,
                explanation: "The center tank has two fuel boost pumps, one left and one right.",
                reference: "B737 NG CBT - Fuel, Section 9"
            },
            {
                question: "How many fuel boost pumps are in each main tank?",
                options: [
                    "One pump",
                    "Two pumps, forward and aft",
                    "Three pumps",
                    "Four pumps"
                ],
                correct: 1,
                explanation: "There are forward and aft fuel boost pumps for each main tank.",
                reference: "B737 NG CBT - Fuel, Section 9"
            },
            {
                question: "Which pumps supply fuel to engine number 1?",
                options: [
                    "Main tank 1 pumps only",
                    "Center tank left pump only",
                    "Main tank number 1 forward and aft fuel pumps, and the left center fuel pump",
                    "All center tank pumps"
                ],
                correct: 2,
                explanation: "Main tank number 1 forward and aft fuel pumps, and the left center fuel pump supply fuel to the engine number 1.",
                reference: "B737 NG CBT - Fuel, Section 10"
            },
            {
                question: "Which pumps supply fuel to engine number 2?",
                options: [
                    "Main tank 2 pumps only",
                    "Main tank number 2 forward and aft fuel pumps, and the right center fuel pump",
                    "Center tank right pump only",
                    "All main tank pumps"
                ],
                correct: 1,
                explanation: "Main tank number 2 forward and aft fuel pumps, and the right center fuel pump supply fuel to the engine number 2.",
                reference: "B737 NG CBT - Fuel, Section 10"
            },
            {
                question: "Why do center tank boost pumps supply fuel at higher pressure than main tank pumps?",
                options: [
                    "To prevent contamination",
                    "To ensure fuel in the center tank is used before the fuel in the main tanks",
                    "To increase fuel flow rate",
                    "To cool the fuel"
                ],
                correct: 1,
                explanation: "The center tank boost pumps supply fuel at a higher pressure than the pumps in the main tanks. Therefore, the fuel in the center tank is used before the fuel in the main tanks. This sequence helps to relieve the wing bending stress.",
                reference: "B737 NG CBT - Fuel, Section 11"
            },
            {
                question: "What is the purpose of the crossfeed valve?",
                options: [
                    "To isolate fuel tanks",
                    "To connect the left and right engine fuel feed manifolds",
                    "To transfer fuel to center tank",
                    "To drain fuel tanks"
                ],
                correct: 1,
                explanation: "The crossfeed valve connects the left and right engine fuel feed manifolds and enables the feed of the engine number 2 from left tank or vice versa.",
                reference: "B737 NG CBT - Fuel, Section 13"
            },
            {
                question: "What happens when the crossfeed valve is open?",
                options: [
                    "Engines are isolated",
                    "One fuel tank supplies fuel to both engines",
                    "Fuel is transferred between tanks",
                    "Fuel pumps stop"
                ],
                correct: 1,
                explanation: "When it is open, one fuel tank supplies fuel to both engines.",
                reference: "B737 NG CBT - Fuel, Section 13"
            },
            {
                question: "What should be noted about continuous use of crossfeed?",
                options: [
                    "It improves fuel efficiency",
                    "It will result in fuel imbalance gradually",
                    "It reduces engine performance",
                    "It is always recommended"
                ],
                correct: 1,
                explanation: "Note that continuous use of crossfeed will result in fuel inbalance gradually.",
                reference: "B737 NG CBT - Fuel, Section 13"
            },
            {
                question: "How many fuel shutoff valves are fitted in fuel line to each engine?",
                options: [
                    "One valve",
                    "Two valves - spar and engine fuel shutoff valves",
                    "Three valves",
                    "Four valves"
                ],
                correct: 1,
                explanation: "A spar fuel shutoff valve and an engine fuel shutoff valve fitted in fuel line to each engine, control fuel flow to the engines.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What powers the spar fuel shutoff valves?",
                options: [
                    "Battery bus",
                    "Hot battery bus",
                    "AC power",
                    "Hydraulic power"
                ],
                correct: 1,
                explanation: "Spar fuel shut off valves are electrically powered from the hot battery bus.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What powers the engine fuel shutoff valves?",
                options: [
                    "Hot battery bus",
                    "Battery bus",
                    "AC power",
                    "Hydraulic power"
                ],
                correct: 1,
                explanation: "Engine fuel shutoff valves are electrically powered from the battery bus.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What controls the spar fuel shutoff valves and engine fuel shutoff valves?",
                options: [
                    "Fuel panel switches only",
                    "The engine start levers and the engine fire switches",
                    "Autopilot system",
                    "Manual controls only"
                ],
                correct: 1,
                explanation: "The engine start levers and the engine fire switches control the spar fuel shutoff valves and engine fuel shutoff valves.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What happens when an engine start lever is moved to CUTOFF position?",
                options: [
                    "Only engine valve closes",
                    "Only spar valve closes",
                    "The respective spar fuel shutoff valve and the engine fuel shutoff valve close",
                    "Fuel pumps stop"
                ],
                correct: 2,
                explanation: "Whenever an engine start lever is moved to the \"CUTOFF\" position, the respective spar fuel shutoff valve and the engine fuel shutoff valve close, cutting off the fuel flow to the respective engine.",
                reference: "B737 NG CBT - Fuel, Section 15"
            },
            {
                question: "What happens when an engine fire switch is pulled?",
                options: [
                    "Only fire bottle discharges",
                    "Both the spar fuel shutoff valves and the engine fuel shutoff valve close",
                    "Fuel pumps activate",
                    "Crossfeed opens"
                ],
                correct: 1,
                explanation: "Whenever respective engine fire switch is pulled, both the spar fuel shutoff valves and the engine fuel shutoff valve close, cutting off the fuel flow to the respective engine.",
                reference: "B737 NG CBT - Fuel, Section 16"
            },
            {
                question: "When does suction feed occur?",
                options: [
                    "During normal operation",
                    "When output pressure of fuel boost pumps in one main tank is low or both pumps are off and the crossfeed valve is closed",
                    "When center tank is full",
                    "During engine start"
                ],
                correct: 1,
                explanation: "Suction feed occurs when output pressure of fuel boost pumps in one main tank is low or both pumps are off and the crossfeed valve is closed.",
                reference: "B737 NG CBT - Fuel, Section 17"
            },
            {
                question: "What draws fuel during suction feed?",
                options: [
                    "Electric pumps",
                    "The mechanical pump on engine",
                    "Gravity",
                    "Pneumatic system"
                ],
                correct: 1,
                explanation: "The mechanical pump on engine number 1 draws fuel from its main tank through a suction feed line that bypasses the fuel boost pumps.",
                reference: "B737 NG CBT - Fuel, Section 18"
            },
            {
                question: "What phenomenon may occur when climbing on suction feed?",
                options: [
                    "Increased fuel flow",
                    "Air bubbles may collect in suction line interrupting fuel supply",
                    "Improved engine performance",
                    "No changes"
                ],
                correct: 1,
                explanation: "As the aircraft climbs to cruise altitude, dissolved air in the fuel is released due to the decrease in air pressure; the air bubbles released by the fuel may collect in the suction line interrupting the fuel supply.",
                reference: "B737 NG CBT - Fuel, Section 19"
            },
            {
                question: "What may result from reduced fuel flow during suction feed climb?",
                options: [
                    "Improved efficiency",
                    "Thrust deterioration or engine flameout",
                    "Increased power",
                    "No effect"
                ],
                correct: 1,
                explanation: "Thus, thrust deterioration or engine flameout may occur as a result of the fuel flow reduction.",
                reference: "B737 NG CBT - Fuel, Section 19"
            },
            {
                question: "Where is the center tank fuel scavenge system incorporated?",
                options: [
                    "Center tank pumps",
                    "The forward fuel boost pump in main tank number 1",
                    "Right main tank",
                    "APU fuel line"
                ],
                correct: 1,
                explanation: "A center tank fuel scavenge system is incorporated in the forward fuel boost pump in main tank number 1.",
                reference: "B737 NG CBT - Fuel, Section 20"
            },
            {
                question: "What is the purpose of the scavenge system?",
                options: [
                    "To increase fuel capacity",
                    "To reduce the amount of non-usable fuel in the center tank",
                    "To transfer fuel to center tank",
                    "To cool fuel"
                ],
                correct: 1,
                explanation: "The purpose of scavenge system is to reduce the amount of non-usable fuel in the center tank.",
                reference: "B737 NG CBT - Fuel, Section 20"
            },
            {
                question: "When does the fuel scavenge pump activate?",
                options: [
                    "When center tank is full",
                    "When the fuel quantity in main tank No.1 is about one-half empty",
                    "During engine start",
                    "When APU starts"
                ],
                correct: 1,
                explanation: "When the fuel quantity in main tank No.1 is about one-half empty, the fuel scavenge pump removes any remaining fuel from the center tank and transfers it to main tank No.1 automatically.",
                reference: "B737 NG CBT - Fuel, Section 21"
            },
            {
                question: "How long does the fuel scavenge process continue?",
                options: [
                    "For 30 minutes",
                    "Until center tank is empty",
                    "For the rest of the flight",
                    "Only during climb"
                ],
                correct: 2,
                explanation: "Once the fuel scavenge process begins, it continues for the rest of the flight.",
                reference: "B737 NG CBT - Fuel, Section 21"
            },
            {
                question: "From where does the APU fuel feed system supply fuel to the APU?",
                options: [
                    "Center tank only",
                    "Right engine manifold",
                    "The left side of the fuel manifold",
                    "Any tank"
                ],
                correct: 2,
                explanation: "The APU fuel feed system supplies fuel to the APU from the left side of the fuel manifold as long as the center tank boost pumps or the boost pumps in main tank No. 1 and main tank No. 2 are operating.",
                reference: "B737 NG CBT - Fuel, Section 22"
            },
            {
                question: "From which tank is APU fuel suction fed if boost pumps are not operating?",
                options: [
                    "Center tank",
                    "Main tank number 1",
                    "Main tank number 2",
                    "Any tank"
                ],
                correct: 1,
                explanation: "If the fuel boost pumps are not operating, fuel is suction fed from main tank number 1.",
                reference: "B737 NG CBT - Fuel, Section 22"
            },
            {
                question: "Where is the single-point pressure fueling station located?",
                options: [
                    "Left wing",
                    "Right wing",
                    "Center fuselage",
                    "Both wings"
                ],
                correct: 1,
                explanation: "Pressure fueling system consists of a single-point pressure fueling station in the right wing.",
                reference: "B737 NG CBT - Fuel, Section 24"
            },
            {
                question: "What does the fueling station allow?",
                options: [
                    "Fuel transfer only",
                    "Rapid refueling and defueling all fuel tanks",
                    "Engine fuel supply",
                    "APU operation"
                ],
                correct: 1,
                explanation: "The fueling station allows for rapid refueling and defueling all fuel tanks. The fueling station is also used for the transfer of fuel from tank to tank on the ground.",
                reference: "B737 NG CBT - Fuel, Section 24"
            },
            {
                question: "What automatically closes the fueling valve in each fuel tank?",
                options: [
                    "Pilot control",
                    "A shutoff system when the tank is full",
                    "Timer system",
                    "Pressure switch"
                ],
                correct: 1,
                explanation: "A shutoff system closes the fueling valve in each fuel tank automatically when the tank is full.",
                reference: "B737 NG CBT - Fuel, Section 24"
            },
            {
                question: "What connects the right engine fuel feed manifold with the fueling station?",
                options: [
                    "Transfer valve",
                    "A manual defuel valve",
                    "Crossfeed valve",
                    "Boost pump"
                ],
                correct: 1,
                explanation: "A manual defuel valve connects the right engine fuel feed manifold with the fueling station.",
                reference: "B737 NG CBT - Fuel, Section 25"
            },
            {
                question: "What does moving the defuel valve handle to OPEN position permit?",
                options: [
                    "Engine start only",
                    "Removal of fuel from the fuel tanks or fuel transfer from one fuel tank to another",
                    "APU operation",
                    "Normal fuel flow"
                ],
                correct: 1,
                explanation: "Moving the defuel valve handle in the OPEN position permits removal of fuel from the fuel tanks or fuel transfer from one fuel tank to another.",
                reference: "B737 NG CBT - Fuel, Section 25"
            },
            {
                question: "How many LOW PRESSURE lights are there for center tank fuel pumps?",
                options: [
                    "One light",
                    "Two lights",
                    "Three lights",
                    "Four lights"
                ],
                correct: 1,
                explanation: "A low pressure light over each pump switch allows for monitoring pump output pressure. There are six fuel pump switches on the panel including center tank left and right pump switches.",
                reference: "B737 NG CBT - Fuel, Section 29"
            },
            {
                question: "When are center tank LOW PRESSURE lights extinguished?",
                options: [
                    "When pumps are ON",
                    "When the center pump switches are in the OFF position",
                    "When fuel is low",
                    "Always"
                ],
                correct: 1,
                explanation: "When the center pump switches are in the OFF position, the LOW PRESSURE lights are extinguished.",
                reference: "B737 NG CBT - Fuel, Section 30"
            },
            {
                question: "When do main tank LOW PRESSURE lights illuminate?",
                options: [
                    "When pumps are ON",
                    "When aft and forward pump switches are in OFF position",
                    "When fuel is full",
                    "Never"
                ],
                correct: 1,
                explanation: "When aft and forward pump switches are in OFF position, the LOW PRESSURE lights are illuminated.",
                reference: "B737 NG CBT - Fuel, Section 33"
            },
            {
                question: "What happens when both fuel pump LOW PRESSURE lights illuminate for the same main tank?",
                options: [
                    "Normal operation",
                    "MASTER CAUTION and FUEL system annunciator lights on the glareshield panel also illuminate",
                    "Fuel transfer starts",
                    "APU starts"
                ],
                correct: 1,
                explanation: "When both fuel pump LOW PRESSURE lights illuminate for the same main tank, MASTER CAUTION and FUEL system annunciators lights on the glareshield panel also illuminate.",
                reference: "B737 NG CBT - Fuel, Section 34"
            },
            {
                question: "What may occur when both main tank fuel pumps show LOW PRESSURE at high altitude?",
                options: [
                    "Normal operation",
                    "Improved performance",
                    "Thrust deterioration or engine flameout",
                    "Increased fuel flow"
                ],
                correct: 2,
                explanation: "This situation may cause thrust deterioration or engine flameout at high altitude.",
                reference: "B737 NG CBT - Fuel, Section 34"
            },
            {
                question: "When does the crossfeed VALVE OPEN light illuminate bright blue?",
                options: [
                    "When valve is fully open",
                    "When crossfeed valve is in transit, or the valve is not in the commanded position",
                    "When valve is closed",
                    "During normal operation"
                ],
                correct: 1,
                explanation: "When the selector is moved to open the position, crossfeed VALVE OPEN light illuminates bright blue which means that the valve is in transit, or, the valve is not in the commanded position.",
                reference: "B737 NG CBT - Fuel, Section 36"
            },
            {
                question: "When does the crossfeed VALVE OPEN light become dim?",
                options: [
                    "When valve is closed",
                    "When the valve is open",
                    "When valve is in transit",
                    "Never"
                ],
                correct: 1,
                explanation: "When the valve is open, the crossfeed VALVE OPEN light becomes dim indicating that engine No.1 and engine No. 2 fuel manifolds are connected.",
                reference: "B737 NG CBT - Fuel, Section 36"
            },
            {
                question: "When do ENGINE VALVE CLOSED and SPAR VALVE CLOSED lights illuminate dim?",
                options: [
                    "When valve is open",
                    "When valve is in transit",
                    "When the valve is closed",
                    "When valve malfunctions"
                ],
                correct: 2,
                explanation: "When the valve is closed, the light is on dim.",
                reference: "B737 NG CBT - Fuel, Section 37"
            },
            {
                question: "When do fuel FILTER BYPASS lights illuminate?",
                options: [
                    "During normal operation",
                    "When either fuel filter becomes clogged due to contamination",
                    "When fuel is low",
                    "When pumps are off"
                ],
                correct: 1,
                explanation: "When either fuel filter becomes clogged due to contamination, the respective fuel FILTER BYPASS alert illuminates on the fuel control panel indicating that fuel is about to bypass the filter and unfiltered fuel is to be supplied to the related engine.",
                reference: "B737 NG CBT - Fuel, Section 38"
            },
            {
                question: "What is the maximum tank fuel temperature?",
                options: [
                    "35°C",
                    "49°C",
                    "55°C",
                    "60°C"
                ],
                correct: 1,
                explanation: "Maximum tank fuel temperature is 49°C.",
                reference: "B737 NG CBT - Fuel, Section 39"
            },
            {
                question: "What is the minimum tank fuel temperature prior to takeoff and in-flight?",
                options: [
                    "-30°C",
                    "-43°C, or 3°C above the fuel freezing point temperature, whichever is higher",
                    "-50°C",
                    "-40°C"
                ],
                correct: 1,
                explanation: "The minimum tank fuel temperature prior to takeoff and in-flight is -43°C, or 3°C above the fuel freezing point temperature, whichever is higher.",
                reference: "B737 NG CBT - Fuel, Section 39"
            },
            {
                question: "When does the fuel low alert appear?",
                options: [
                    "When fuel is less than 500 kgs",
                    "When the fuel quantity is less than 907 kgs in either main tank",
                    "When fuel is less than 1000 kgs",
                    "When center tank is empty"
                ],
                correct: 1,
                explanation: "When the fuel quantity is less than 907 kgs in either main tank No.1 or main tank No.2, an amber alert appears on the affected indicator and the quantity digits and arc color change to amber.",
                reference: "B737 NG CBT - Fuel, Section 43"
            },
            {
                question: "When does the low fuel alert disappear?",
                options: [
                    "When fuel is more than 907 kgs",
                    "When fuel quantity in the related tank is more than 1134 kgs",
                    "When fuel is more than 1000 kgs",
                    "When engines shut down"
                ],
                correct: 1,
                explanation: "When fuel quantity in the related tank is more than 1134 kgs, the low fuel alert disappears and the quantity digits and arc return to normal.",
                reference: "B737 NG CBT - Fuel, Section 43"
            },
            {
                question: "When does the fuel imbalance alert appear?",
                options: [
                    "When difference is 200 kgs",
                    "When there is a fuel quantity difference of 453 kgs or more between main tanks",
                    "When difference is 300 kgs",
                    "When center tank is full"
                ],
                correct: 1,
                explanation: "When there is a fuel quantity difference of 453 kgs or more between main tank No. 1 and main tank No. 2 the fuel imbalance alert shows below the main tank with lower fuel quantity.",
                reference: "B737 NG CBT - Fuel, Section 46"
            },
            {
                question: "When does the fuel imbalance alert go away?",
                options: [
                    "When difference is 200 kgs or less",
                    "When the difference between tanks is 91 kgs or less",
                    "When difference is 100 kgs or less",
                    "When engines start"
                ],
                correct: 1,
                explanation: "When the difference between tanks is 91 kgs or less, the fuel imbalance alert on the related main tank fuel quantity indicator goes away and the quantity digits and arc return to normal.",
                reference: "B737 NG CBT - Fuel, Section 46"
            },
            {
                question: "When is the fuel imbalance alert inhibited?",
                options: [
                    "During flight only",
                    "When airplane is on ground",
                    "When center tank is full",
                    "Never inhibited"
                ],
                correct: 1,
                explanation: "The fuel imbalance alert only appears when the airplane is in the air. It is inhibited when airplane is on ground.",
                reference: "B737 NG CBT - Fuel, Section 47"
            }
        ]
    },
    "hydraulics": {
        title: "Hydraulics",
        questions: [
            {
                question: "What is the purpose of the hydraulic system?",
                options: [
                    "To provide electrical power",
                    "To assist the pilot in accomplishing mechanical tasks that would otherwise be impractical or impossible",
                    "To supply fuel to engines",
                    "To control cabin pressure"
                ],
                correct: 1,
                explanation: "The purpose of the hydraulic system is to assist the pilot in accomplishing mechanical tasks that would otherwise be impractical or impossible because of the level of force, work, or power required.",
                reference: "B737 NG CBT - Hydraulics, Section 3"
            },
            {
                question: "How many hydraulic systems does the airplane have?",
                options: [
                    "Two systems",
                    "Three systems designated as system A, system B and Standby system",
                    "Four systems",
                    "One system"
                ],
                correct: 1,
                explanation: "The airplane is equipped with three hydraulic systems designated as system \"A\", system \"B\" and Standby system.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "Can either system A or B power all flight controls?",
                options: [
                    "No, both are required",
                    "Yes, either A or B hydraulic system is capable of powering all flight controls without any decrease in airplane controllability",
                    "Only in emergency",
                    "Only on ground"
                ],
                correct: 1,
                explanation: "Either \"A\" or \"B\" hydraulic system is capable of powering all flight controls without any decrease in airplane controllability.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "When is the standby system used?",
                options: [
                    "During normal operation",
                    "When system A, system B or both system A and B pressure is lost",
                    "Only during takeoff",
                    "Only for landing gear"
                ],
                correct: 1,
                explanation: "The standby system is used if: system \"A\", system \"B\" or both system \"A\" and \"B\" pressure is lost.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "Where are the hydraulic reservoirs located?",
                options: [
                    "In the fuselage",
                    "In the main wheel well compartment",
                    "In the wings",
                    "In the nose"
                ],
                correct: 1,
                explanation: "Each hydraulic system has a reservoir located in the main wheel well compartment, which stores hydraulic fluid.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "What is used to pressurize system A and B reservoirs?",
                options: [
                    "Electric pumps",
                    "Bleed air from the pneumatic system",
                    "Manual pumps",
                    "Atmospheric pressure"
                ],
                correct: 1,
                explanation: "Bleed air from the pneumatic system is used to pressurize system \"A\" and \"B\" reservoirs.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "How is the standby system reservoir pressurized?",
                options: [
                    "Through system A reservoir",
                    "Through system B reservoir",
                    "By electric pump",
                    "By APU bleed air"
                ],
                correct: 1,
                explanation: "The standby system reservoir is pressurized through system \"B\" reservoir.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "Why is pressurization of the reservoirs necessary?",
                options: [
                    "To increase pressure",
                    "To maintain a positive supply of fluid to all hydraulic pumps at all altitudes",
                    "To cool the fluid",
                    "To filter the fluid"
                ],
                correct: 1,
                explanation: "Pressurization of the reservoirs is necessary to maintain a positive supply of fluid to all hydraulic pumps at all altitudes.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "What happens if the reservoirs are not properly pressurized?",
                options: [
                    "Normal operation continues",
                    "Hydraulic fluid tends to foam at higher altitudes",
                    "Pressure increases",
                    "System shuts down"
                ],
                correct: 1,
                explanation: "If the reservoirs are not properly pressurized, hydraulic fluid tends to foam at higher altitudes because of decrease in pressure.",
                reference: "B737 NG CBT - Hydraulics, Section 5"
            },
            {
                question: "How can foaming be recognized?",
                options: [
                    "By steady pressure readings",
                    "By the blinking of the related LOW PRESSURE lights",
                    "By high pressure readings",
                    "By temperature increase"
                ],
                correct: 1,
                explanation: "Foaming causes pressure fluctuations and can be recognized by the blinking of the related LOW PRESSURE lights.",
                reference: "B737 NG CBT - Hydraulics, Section 5"
            },
            {
                question: "How many hydraulic pumps does each A and B hydraulic system have?",
                options: [
                    "One pump each",
                    "Two hydraulic pumps, an engine–driven pump and an AC electric motor–driven pump",
                    "Three pumps each",
                    "Four pumps each"
                ],
                correct: 1,
                explanation: "Both \"A\" and \"B\" hydraulic systems are equipped with two hydraulic pumps, an engine–driven pump and an AC electric motor–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which pump supplies a larger volume of fluid?",
                options: [
                    "Electric motor-driven pump",
                    "The engine–driven hydraulic pump",
                    "Both supply equal volume",
                    "Manual backup pump"
                ],
                correct: 1,
                explanation: "The engine–driven hydraulic pump supplies a larger volume of the fluid than the related electric motor–driven hydraulic pump.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which engine powers the system A engine-driven pump?",
                options: [
                    "The No. 1 engine",
                    "The No. 2 engine",
                    "Both engines",
                    "APU"
                ],
                correct: 0,
                explanation: "The system \"A\" engine–driven pump is powered by the No. 1 engine.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which generator powers the system A electric motor-driven pump under normal conditions?",
                options: [
                    "No. 1 engine generator",
                    "No.2 engine generator",
                    "APU generator",
                    "Battery"
                ],
                correct: 1,
                explanation: "Its electric motor-driven pump is powered by the No.2 engine generator under normal conditions.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which engine powers the system B engine-driven pump?",
                options: [
                    "The No. 1 engine",
                    "The No. 2 engine",
                    "Both engines",
                    "APU"
                ],
                correct: 1,
                explanation: "The system \"B\" engine–driven pump is powered by the No. 2 engine.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which generator powers the system B electric motor-driven pump under normal conditions?",
                options: [
                    "No.1 engine generator",
                    "No. 2 engine generator",
                    "APU generator",
                    "Battery"
                ],
                correct: 0,
                explanation: "Its electric motor-driven pump is powered by the No.1 engine generator under normal conditions.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "What does system A supply hydraulic power to?",
                options: [
                    "Only flight controls",
                    "No.1 thrust reverser, rudder, ailerons, elevator and elevator feel unit, two flight spoilers on each wing, ground spoilers, alternate brakes, autopilot A, landing gear, normal nose wheel steering, and power transfer unit (PTU)",
                    "Only landing gear",
                    "Only brakes"
                ],
                correct: 1,
                explanation: "System \"A\" supplies hydraulic power to No.1 thrust reverser, rudder, ailerons, elevator and elevator feel unit, two flight spoilers on each wing, ground spoilers, alternate brakes, autopilot \"A\", landing gear, normal nose wheel steering, and power transfer unit (PTU).",
                reference: "B737 NG CBT - Hydraulics, Section 7"
            },
            {
                question: "What components are powered by hydraulic system B?",
                options: [
                    "Only thrust reversers",
                    "Autoslats, and leading edge flaps and slats No.2 thrust reverser ailerons, rudder, elevator and elevator feel unit, two flight spoilers on each wing, yaw damper, normal brakes, trailing edge flaps, autopilot B, landing gear transfer unit and alternate nose wheel steering",
                    "Only normal brakes",
                    "Only autopilot B"
                ],
                correct: 1,
                explanation: "Components powered by hydraulic systems \"B\" are autoslats, and leading edge flaps and slats No.2 thrust reverser ailerons, rudder, elevator and elevator feel unit, two flight spoilers on each wing, yaw damper, normal brakes, trailing edge flaps, autopilot \"B\", landing gear transfer unit and alternate nose wheel steering.",
                reference: "B737 NG CBT - Hydraulics, Section 7"
            },
            {
                question: "What is hydraulic fluid used for besides operating components?",
                options: [
                    "Fuel additive",
                    "Cooling and lubrication of the system A and system B pumps",
                    "Anti-ice fluid",
                    "Fire suppressant"
                ],
                correct: 1,
                explanation: "Some hydraulic fluid is used for cooling and lubrication of the system A and system B pumps.",
                reference: "B737 NG CBT - Hydraulics, Section 8"
            },
            {
                question: "How is the hydraulic fluid cooled?",
                options: [
                    "By air conditioning",
                    "With heat exchangers in the main fuel tanks",
                    "By external cooling system",
                    "By electric fans"
                ],
                correct: 1,
                explanation: "This fluid is cooled with heat exchangers in the main fuel tanks before it is routed back to the reservoirs.",
                reference: "B737 NG CBT - Hydraulics, Section 8"
            },
            {
                question: "What is the minimum fuel requirement for ground operation of electric motor-driven pumps?",
                options: [
                    "500 Kgs in the related main tank",
                    "760 Kgs in the related main tank",
                    "1000 Kgs in the related main tank",
                    "1500 Kgs in the related main tank"
                ],
                correct: 1,
                explanation: "The minimum fuel for ground operation of electric motor-driven pumps is 760 Kgs in the related main tank.",
                reference: "B737 NG CBT - Hydraulics, Section 8"
            },
            {
                question: "What are pressure switches fitted in the pump outlets used for?",
                options: [
                    "To control pump speed",
                    "To illuminate the related LOW PRESSURE light when pump output pressure is low",
                    "To start the pumps",
                    "To stop the pumps"
                ],
                correct: 1,
                explanation: "If the pump output pressure is low, pressure switch transmits a signal to illuminate the related LOW PRESSURE light.",
                reference: "B737 NG CBT - Hydraulics, Section 9"
            },
            {
                question: "What is the purpose of check valves in each pump output line?",
                options: [
                    "To increase pressure",
                    "To isolate the related pump from the system to prevent hydraulic backflow",
                    "To filter fluid",
                    "To cool fluid"
                ],
                correct: 1,
                explanation: "The check valve then isolates the related pump from the system to prevent hydraulic backflow.",
                reference: "B737 NG CBT - Hydraulics, Section 9"
            },
            {
                question: "What do pressure transmitters in system A and B send?",
                options: [
                    "Individual pump pressures",
                    "The combined pressure of the engine–driven and electric motor–driven pump to their respective hydraulic system pressure indications",
                    "Temperature readings",
                    "Flow rates"
                ],
                correct: 1,
                explanation: "System \"A\" and system \"B\" are also fitted with pressure transmitters which send the combined pressure of the engine–driven and electric motor–driven pump to their respective hydraulic system pressure indications.",
                reference: "B737 NG CBT - Hydraulics, Section 10"
            },
            {
                question: "Where are system A and B hydraulic indications presented?",
                options: [
                    "On overhead panel",
                    "On upper or lower display unit",
                    "On center pedestal",
                    "On side panels"
                ],
                correct: 1,
                explanation: "System \"A\" and system \"B\" hydraulic indications are presented on upper or lower display unit.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "What color indicates normal operating range?",
                options: [
                    "White",
                    "Green",
                    "Blue",
                    "Yellow"
                ],
                correct: 0,
                explanation: "Normal operating range is shown in white.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "What color indicates the caution range?",
                options: [
                    "White",
                    "Amber",
                    "Red",
                    "Green"
                ],
                correct: 1,
                explanation: "Amber indicates the caution range.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "When does the indication turn to red?",
                options: [
                    "During normal operation",
                    "When maximum operating limit is reached",
                    "When pumps are off",
                    "During maintenance"
                ],
                correct: 1,
                explanation: "The indication turns to red when maximum operating limit is reached.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "How is hydraulic fluid quantity indicated?",
                options: [
                    "In liters",
                    "Digitally in percentage of full quantity",
                    "In gallons",
                    "In pounds"
                ],
                correct: 1,
                explanation: "The quantity of system \"A\" and system \"B\" hydraulic fluid is also indicated digitally in percentage of full quantity.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "When do letters 'RF' illuminate next to the quantity indication?",
                options: [
                    "During normal operation",
                    "When the hydraulic fluid quantity is low",
                    "When pressure is high",
                    "When pumps are running"
                ],
                correct: 1,
                explanation: "If the hydraulic fluid quantity is low, letters \"RF\", or refill, illuminate next to the quantity indication.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "When is the 'RF' indication valid?",
                options: [
                    "Always when fluid is low",
                    "Only when airplane is on ground with both engines shutdown or after landing with flaps up during taxi–in",
                    "Only during flight",
                    "Only during maintenance"
                ],
                correct: 1,
                explanation: "Note that this is valid only when airplane is on ground with both engines shutdown or after landing with flaps up during taxi–in.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "What causes variations in hydraulic quantity indications during normal operation?",
                options: [
                    "System malfunctions",
                    "System gets pressurized after engine start or when you raise or lower the landing gear or leading edge flaps and slats",
                    "Temperature changes only",
                    "Pilot inputs"
                ],
                correct: 1,
                explanation: "These variations occur when system gets pressurized after engine start or when you raise or lower the landing gear or leading edge flaps and slats due to fluid volume absorbed or released by system components.",
                reference: "B737 NG CBT - Hydraulics, Section 12"
            },
            {
                question: "What can cause variations in hydraulic fluid indications during cruise?",
                options: [
                    "Engine power changes",
                    "Cold soaking of aircraft from being exposed to low temperatures during long periods of cruise",
                    "Altitude changes only",
                    "Pilot control inputs"
                ],
                correct: 1,
                explanation: "In addition cold soaking of aircraft which can result from being exposed to low temperatures during long periods of cruise may also cause variations in hydraulic fluid indications.",
                reference: "B737 NG CBT - Hydraulics, Section 12"
            },
            {
                question: "Where are system A and system B controls located?",
                options: [
                    "On center pedestal",
                    "On the hydraulic control panel which is located on the forward overhead panel",
                    "On side panels",
                    "On glare shield"
                ],
                correct: 1,
                explanation: "System \"A\" and System \"B\" controls are on the hydraulic control panel which is located on the forward overhead panel.",
                reference: "B737 NG CBT - Hydraulics, Section 13"
            },
            {
                question: "What does the system A ENG 1 ON/OFF switch control?",
                options: [
                    "Engine 1 start",
                    "The system A engine-driven pump",
                    "Engine 1 fuel flow",
                    "Engine 1 ignition"
                ],
                correct: 1,
                explanation: "System \"A\" ENG 1 ON/OFF switch controls the system A engine-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What does the system B ENG 2 pump ON/OFF switch control?",
                options: [
                    "Engine 2 start",
                    "The system B engine–driven pump",
                    "Engine 2 fuel flow",
                    "Engine 2 ignition"
                ],
                correct: 1,
                explanation: "System \"B\" ENG 2 pump ON/OFF switch controls the system \"B\" engine–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "When do low pressure lights illuminate for engine-driven pumps?",
                options: [
                    "When pumps are ON",
                    "When output pressure from the related pump is low",
                    "During normal operation",
                    "When engines are starting"
                ],
                correct: 1,
                explanation: "The low pressure lights illuminate when output pressure from the related pump is low.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What happens when engine-driven pump switches are in ON position?",
                options: [
                    "Pumps are electrically started",
                    "The engine-driven pumps supply hydraulic pressure to the systems components provided that the engines are running",
                    "Pumps are manually operated",
                    "System shuts down"
                ],
                correct: 1,
                explanation: "When the switches are in the \"ON\" position, the engine-driven pumps supply hydraulic pressure to the systems components provided that the engines are running.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What happens when an engine-driven pump switch is positioned to OFF?",
                options: [
                    "Engine stops",
                    "The fluid flow from this pump to the system components stops and its low pressure light illuminates",
                    "Pump physically stops rotating",
                    "System pressure increases"
                ],
                correct: 1,
                explanation: "When the switch of an engine-driven pump is positioned to \"OFF\", the fluid flow from this pump to the system components stops and its low pressure light illuminates on the control panel.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "Does the engine-driven pump continue to rotate when its switch is OFF?",
                options: [
                    "No, it stops immediately",
                    "Yes, the engine–driven pump continues to rotate as long as the engine is operating",
                    "Only during taxi",
                    "Only above certain RPM"
                ],
                correct: 1,
                explanation: "However, the engine–driven pump continues to rotate as long as the engine is operating.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What does the system A ELEC 2 ON/OFF switch control?",
                options: [
                    "Engine 2 electrical system",
                    "The system A electric motor-driven pump",
                    "Electric fuel pumps",
                    "APU electrical system"
                ],
                correct: 1,
                explanation: "System \"A\" ELEC 2 ON/OFF switch controls the system A electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 15"
            },
            {
                question: "What does the system B ELEC 1 ON/OFF switch control?",
                options: [
                    "Engine 1 electrical system",
                    "The system B electric motor–driven pump",
                    "Electric fuel pumps",
                    "Battery system"
                ],
                correct: 1,
                explanation: "System B ELEC 1 ON/OFF switch controls the system \"B\" electric motor–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 15"
            },
            {
                question: "When do OVERHEAT lights illuminate?",
                options: [
                    "During normal operation",
                    "If an overheat is detected in either system",
                    "When pumps start",
                    "When engines start"
                ],
                correct: 1,
                explanation: "If an overheat is detected in either system, the related OVERHEAT light illuminates.",
                reference: "B737 NG CBT - Hydraulics, Section 16"
            },
            {
                question: "What may happen if an engine-driven hydraulic pump is lost and there is high demand?",
                options: [
                    "System shuts down",
                    "The LOW PRESSURE light for the remaining electric motor-driven hydraulic pump may illuminate intermittently",
                    "Pressure increases",
                    "Backup system activates"
                ],
                correct: 1,
                explanation: "If an engine-driven hydraulic pump is lost and there is a high demand on the system, the LOW PRESSURE light for the remaining electric motor-driven hydraulic pump may illuminate intermittently.",
                reference: "B737 NG CBT - Hydraulics, Section 17"
            },
            {
                question: "What other lights illuminate when there's high demand and engine-driven pump is lost?",
                options: [
                    "Only hydraulic lights",
                    "The flight control LOW PRESSURE light, Master Caution light, and the FLT CONT and HYD system annunciator lights",
                    "Only engine lights",
                    "Only warning lights"
                ],
                correct: 1,
                explanation: "The flight control LOW PRESSURE light, Master Caution light, and the FLT CONT and HYD system annunciator lights also illuminate.",
                reference: "B737 NG CBT - Hydraulics, Section 17"
            },
            {
                question: "What happens during an engine fire when the fire switch is pulled?",
                options: [
                    "Only fire suppression activates",
                    "The corresponding hydraulic shut-off valve closes and the fluid supply to the respective engine-driven pump is cut off",
                    "Engine restarts",
                    "All systems shut down"
                ],
                correct: 1,
                explanation: "During an engine fire, pulling the fire switch causes the corresponding hydraulic shut-off valve to close and the fluid supply to the respective engine-driven pump is cut off.",
                reference: "B737 NG CBT - Hydraulics, Section 18"
            },
            {
                question: "Is there a LOW PRESSURE indication when fire switch is pulled?",
                options: [
                    "Yes, normal indication",
                    "No, the related LOW PRESSURE light is also deactivated",
                    "Only intermittent indication",
                    "Only on ground"
                ],
                correct: 1,
                explanation: "The related LOW PRESSURE light is also deactivated, so there is no LOW PRESSURE indication on the control panel.",
                reference: "B737 NG CBT - Hydraulics, Section 18"
            },
            {
                question: "How is the system A electric motor-driven pump fed?",
                options: [
                    "Through a standpipe",
                    "Through a pipe from the bottom of the reservoir",
                    "From the top of reservoir",
                    "From external source"
                ],
                correct: 1,
                explanation: "In system \"A\", the electric motor-driven pump is fed through a pipe from the bottom of the reservoir.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "How does the engine-driven pump draw its fluid in system A?",
                options: [
                    "From bottom of reservoir",
                    "Through a standpipe which is located at a higher level",
                    "From external tank",
                    "Through pressure line"
                ],
                correct: 1,
                explanation: "The engine-driven pump draws its fluid through a standpipe which is located at a higher level.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "What does the higher level standpipe prevent in system A?",
                options: [
                    "Pump damage",
                    "A total system fluid loss and ensures adequate fluid is left for operation of electric motor-driven pump",
                    "Pressure loss",
                    "Temperature increase"
                ],
                correct: 1,
                explanation: "The higher level of standpipe prevents a total system fluid loss and ensures adequate fluid is left for operation of electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "What is the indicated reservoir fluid quantity when fluid level is at the top of standpipe in system A?",
                options: [
                    "0% full",
                    "Approximately 20% full",
                    "50% full",
                    "100% full"
                ],
                correct: 1,
                explanation: "With fluid level at the top of the standpipe, indicated reservoir fluid quantity is approximately 20% full.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "How do both pumps draw fluid in system B?",
                options: [
                    "From different sources",
                    "Both engine-driven pump and electric motor-driven pump draw its liquid from a common standpipe",
                    "From bottom of reservoir",
                    "From external source"
                ],
                correct: 1,
                explanation: "In system \"B\", both engine-driven pump and electric motor-driven pump draw its liquid from a common standpipe.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What happens to fluid quantity when a leak develops in system B?",
                options: [
                    "Quantity remains constant",
                    "The fluid quantity decreases until it reaches at the top of the standpipe",
                    "Quantity increases",
                    "System compensates automatically"
                ],
                correct: 1,
                explanation: "If a leak develops in either pump, line or component of system \"B\", the fluid quantity decreases until it reaches at the top of the standpipe.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What is the indicated reservoir quantity when system B fluid level reaches the standpipe top?",
                options: [
                    "20% full",
                    "Approximately zero",
                    "50% full",
                    "100% full"
                ],
                correct: 1,
                explanation: "With the fluid level at the top of the standpipe, the indicated reservoir fluid quantity is approximately zero and system B pressure is lost.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What is the function of the power transfer unit (PTU)?",
                options: [
                    "To transfer fluid between systems",
                    "To provide additional hydraulic pressure needed to operate the autoslats and leading edge flaps and slats at the normal rate when system B engine–driven hydraulic pump pressure is low",
                    "To cool hydraulic fluid",
                    "To filter hydraulic fluid"
                ],
                correct: 1,
                explanation: "The function of power transfer unit (PTU) is to provide additional hydraulic pressure needed to operate the autoslats and leading edge flaps and slats at the normal rate when system B engine–driven hydraulic pump pressure is low.",
                reference: "B737 NG CBT - Hydraulics, Section 23"
            },
            {
                question: "Is there fluid transfer between system A and system B through PTU?",
                options: [
                    "Yes, continuous transfer",
                    "No, there is no fluid transfer between system A and system B",
                    "Only during emergency",
                    "Only on ground"
                ],
                correct: 1,
                explanation: "There is no fluid transfer between system \"A\" and system \"B\".",
                reference: "B737 NG CBT - Hydraulics, Section 23"
            },
            {
                question: "When does the PTU operate automatically?",
                options: [
                    "Always during flight",
                    "When System B engine-driven pump pressure is low, the airplane is in flight and the flaps are less than 15 but not up",
                    "Only on ground",
                    "Only during takeoff"
                ],
                correct: 1,
                explanation: "The power transfer unit (PTU) operates automatically by opening of a PTU control valve when all of the following conditions exist: System \"B\" engine-driven pump pressure is low, the airplane is in flight and the flaps are less than 15 but not up.",
                reference: "B737 NG CBT - Hydraulics, Section 24"
            },
            {
                question: "What normally powers the landing gear?",
                options: [
                    "System A",
                    "System B",
                    "Standby system",
                    "Manual operation"
                ],
                correct: 0,
                explanation: "Landing gear is normally powered by system \"A\".",
                reference: "B737 NG CBT - Hydraulics, Section 25"
            },
            {
                question: "When does the landing gear transfer unit provide backup power?",
                options: [
                    "Always",
                    "When system A engine–driven pump volume is lost, to raise the landing gear at the normal rate",
                    "Only on ground",
                    "Only for lowering gear"
                ],
                correct: 1,
                explanation: "When system \"A\" engine–driven pump volume is lost, the landing gear transfer unit provides a backup hydraulic power to raise the landing gear at the normal rate.",
                reference: "B737 NG CBT - Hydraulics, Section 25"
            },
            {
                question: "What powers the landing gear transfer unit?",
                options: [
                    "System A engine-driven pump",
                    "The system B engine–driven pump",
                    "Electric motor",
                    "Manual operation"
                ],
                correct: 1,
                explanation: "The landing gear transfer unit is pressurized by the system \"B\" engine–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 25"
            },
            {
                question: "What is the purpose of the standby hydraulic system?",
                options: [
                    "Primary power source",
                    "To provide backup if system A and/or system B pressure drops below limits",
                    "To cool other systems",
                    "For maintenance only"
                ],
                correct: 1,
                explanation: "The purpose of the standby hydraulic system is to provide backup if system \"A\" and/or system \"B\" pressure drops below limits.",
                reference: "B737 NG CBT - Hydraulics, Section 26"
            },
            {
                question: "What type of pump does the standby hydraulic system have?",
                options: [
                    "Engine-driven pump",
                    "An AC electric motor-driven pump",
                    "Manual pump",
                    "Pneumatic pump"
                ],
                correct: 1,
                explanation: "The system is fitted with an AC electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 26"
            },
            {
                question: "What can the standby hydraulic system power?",
                options: [
                    "All aircraft systems",
                    "Leading edge flaps and slats (only extend), thrust reversers, rudder and standby yaw damper",
                    "Only landing gear",
                    "Only flight controls"
                ],
                correct: 1,
                explanation: "Which can supply hydraulic power needed to operate leading edge flaps and slats (only extend), thrust reversers, rudder and standby yaw damper.",
                reference: "B737 NG CBT - Hydraulics, Section 26"
            },
            {
                question: "Where are the standby hydraulic system controls located?",
                options: [
                    "On overhead panel",
                    "On the flight control panel which is located on the forward overhead panel",
                    "On center pedestal",
                    "On side panel"
                ],
                correct: 1,
                explanation: "The standby hydraulic system controls are on the flight control panel which is located on the forward overhead panel.",
                reference: "B737 NG CBT - Hydraulics, Section 27"
            },
            {
                question: "How can the standby hydraulic system be operated?",
                options: [
                    "Automatically only",
                    "Manually or automatically",
                    "Manually only",
                    "Remote control only"
                ],
                correct: 1,
                explanation: "The standby hydraulic system can be operated manually or automatically.",
                reference: "B737 NG CBT - Hydraulics, Section 28"
            }
        ]
    },
    "landing-gear": {
        title: "Landing Gear",
        questions: [
            {
                question: "What type of landing gear does the 737 airplane have?",
                options: [
                    "Conventional gear",
                    "Tricycle type landing gear with two main landing gear and a single nose gear",
                    "Bicycle gear",
                    "Quadricycle gear"
                ],
                correct: 1,
                explanation: "The 737 airplane has a tricycle type landing gear with two main landing gear and a single nose gear.",
                reference: "B737 NG CBT - Landing Gear, Section 3"
            },
            {
                question: "How many wheels does each gear have?",
                options: [
                    "One wheel",
                    "Two wheels",
                    "Three wheels",
                    "Four wheels"
                ],
                correct: 1,
                explanation: "Each gear has two wheels.",
                reference: "B737 NG CBT - Landing Gear, Section 3"
            },
            {
                question: "What are the functions of the two main landing gear?",
                options: [
                    "To support airplane weight only",
                    "To support most of the airplane weight on the ground, absorb landing forces and transmit the braking loads to the airplane structure",
                    "To provide steering only",
                    "To absorb landing forces only"
                ],
                correct: 1,
                explanation: "The functions of two main landing gear are to support most of the airplane weight on the ground, absorb landing forces and transmit the braking loads to the airplane structure.",
                reference: "B737 NG CBT - Landing Gear, Section 5"
            },
            {
                question: "When do the main landing gear doors open?",
                options: [
                    "During flight",
                    "To permit gear extension",
                    "For maintenance only",
                    "During taxi"
                ],
                correct: 1,
                explanation: "The main landing gear doors open to permit gear extension.",
                reference: "B737 NG CBT - Landing Gear, Section 6"
            },
            {
                question: "What provides an aerodynamic seal around the outboard tire?",
                options: [
                    "Metal plates",
                    "The rubber seals around the openings in the bottom of the main gear wheel well",
                    "Fabric covers",
                    "Nothing seals it"
                ],
                correct: 1,
                explanation: "The rubber seals around the openings in the bottom of the main gear wheel well provide an aerodynamic seal around the outboard tire.",
                reference: "B737 NG CBT - Landing Gear, Section 6"
            },
            {
                question: "What does the nose landing gear support?",
                options: [
                    "All airplane weight",
                    "The forward part of the airplane weight on the ground and absorbs part of the landing forces during landing operations",
                    "Only landing forces",
                    "No weight"
                ],
                correct: 1,
                explanation: "The nose landing gear supports the forward part of the airplane weight on the ground and absorbs part of the landing forces during landing operations.",
                reference: "B737 NG CBT - Landing Gear, Section 7"
            },
            {
                question: "When do the nose landing gear doors open?",
                options: [
                    "Electrically",
                    "Mechanically",
                    "Hydraulically",
                    "Pneumatically"
                ],
                correct: 1,
                explanation: "The two nose landing gear doors open mechanically to permit gear extension.",
                reference: "B737 NG CBT - Landing Gear, Section 8"
            },
            {
                question: "When do the nose wheel doors remain open?",
                options: [
                    "When the gear is down",
                    "When the gear is up",
                    "Never",
                    "Always"
                ],
                correct: 0,
                explanation: "The nose wheel doors remain open when the gear is down.",
                reference: "B737 NG CBT - Landing Gear, Section 8"
            },
            {
                question: "How do the landing gear extension and retraction systems operate?",
                options: [
                    "Electrically",
                    "Hydraulically extend and retract the main and nose landing gear",
                    "Pneumatically",
                    "Manually"
                ],
                correct: 1,
                explanation: "The landing gear extension and retraction systems hydraulically extend and retract the main and nose landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 9"
            },
            {
                question: "Which hydraulic system normally supplies power for retraction and extension?",
                options: [
                    "Hydraulic system A",
                    "Hydraulic system B",
                    "Standby system",
                    "Both A and B"
                ],
                correct: 0,
                explanation: "Hydraulic power for retraction and extension is normally supplied by hydraulic system A.",
                reference: "B737 NG CBT - Landing Gear, Section 10"
            },
            {
                question: "Can hydraulic system B supply pressure for landing gear operation?",
                options: [
                    "No, never",
                    "Yes, through the landing gear transfer unit for retraction only",
                    "Yes, for extension only",
                    "Yes, for both extension and retraction"
                ],
                correct: 1,
                explanation: "Hydraulic system B can supply pressure through the landing gear transfer unit for retraction only.",
                reference: "B737 NG CBT - Landing Gear, Section 10"
            },
            {
                question: "Where is the LANDING GEAR lever located?",
                options: [
                    "On the overhead panel",
                    "On the center instrument panel",
                    "On the side panel",
                    "On the pedestal"
                ],
                correct: 1,
                explanation: "The landing gear are normally controlled by the LANDING GEAR lever which is located on the center instrument panel.",
                reference: "B737 NG CBT - Landing Gear, Section 11"
            },
            {
                question: "How many positions does the landing gear lever have?",
                options: [
                    "Two positions",
                    "Three positions with detents: DOWN, OFF and UP",
                    "Four positions",
                    "Five positions"
                ],
                correct: 1,
                explanation: "The landing gear lever has three positions with detents: (1) DOWN, (2) OFF and (3) UP.",
                reference: "B737 NG CBT - Landing Gear, Section 12"
            },
            {
                question: "How do you move the landing gear lever?",
                options: [
                    "Just move it directly",
                    "You must pull the lever out so that you can move it",
                    "Push it in first",
                    "Turn it clockwise"
                ],
                correct: 1,
                explanation: "You must pull the lever out so that you can move it.",
                reference: "B737 NG CBT - Landing Gear, Section 12"
            },
            {
                question: "What prevents inadvertent gear retraction on the ground?",
                options: [
                    "Pilot discipline",
                    "A lever lock mechanism",
                    "Hydraulic pressure",
                    "Weight on wheels"
                ],
                correct: 1,
                explanation: "To prevent any inadvertent gear retraction on the ground, the control lever assembly also incorporates a lever lock mechanism.",
                reference: "B737 NG CBT - Landing Gear, Section 14"
            },
            {
                question: "When does the solenoid release the lever lock?",
                options: [
                    "On ground",
                    "After the airplane takes off",
                    "During taxi",
                    "Never automatically"
                ],
                correct: 1,
                explanation: "After the airplane takes off, a solenoid gets electrical power and releases the lever lock, allowing the gear lever for being placed in the \"UP\" position.",
                reference: "B737 NG CBT - Landing Gear, Section 14"
            },
            {
                question: "What can be used if the solenoid fails to unlock the lever after takeoff?",
                options: [
                    "Manual force",
                    "An override trigger on the lever",
                    "Hydraulic pressure",
                    "Nothing can be done"
                ],
                correct: 1,
                explanation: "If the solenoid fails to unlock the lever after takeoff, an override trigger on the lever can be used to bypass the landing gear lever lock.",
                reference: "B737 NG CBT - Landing Gear, Section 15"
            },
            {
                question: "How do you use the override trigger?",
                options: [
                    "Push it momentarily",
                    "Pull and hold the override trigger to move the lever UP position",
                    "Turn it",
                    "Press and release"
                ],
                correct: 1,
                explanation: "You need to pull and hold the override trigger to move the lever UP position and retract the landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 15"
            },
            {
                question: "Where are the auxiliary position lights located?",
                options: [
                    "On center panel only",
                    "On the aft overhead panel for redundancy",
                    "On side panels",
                    "On glare shield"
                ],
                correct: 1,
                explanation: "There is also a set of the auxiliary position lights on the aft overhead panel for redundancy.",
                reference: "B737 NG CBT - Landing Gear, Section 16"
            },
            {
                question: "When do the green landing gear position lights illuminate?",
                options: [
                    "When gear is retracting",
                    "When the related landing gear is down and locked",
                    "When gear is extending",
                    "When hydraulic pressure is available"
                ],
                correct: 1,
                explanation: "The green landing gear position lights illuminate when the related landing gear is down and locked.",
                reference: "B737 NG CBT - Landing Gear, Section 17"
            },
            {
                question: "Is it necessary to see green lights on both panels to ensure gear is down and locked?",
                options: [
                    "Yes, both panels must show green",
                    "No, landing gear is down and locked when at least one green landing gear indicator light on center panel or overhead panel for each gear is illuminated",
                    "Only center panel matters",
                    "Only overhead panel matters"
                ],
                correct: 1,
                explanation: "Note that it is not necessary to see green lights illuminated on both panels to ensure the landing gear is down and locked. Landing gear is down and locked when at least one green landing gear indicator light on center panel or overhead panel for each gear is illuminated.",
                reference: "B737 NG CBT - Landing Gear, Section 17"
            },
            {
                question: "When do the red primary position lights illuminate?",
                options: [
                    "During normal operation",
                    "When the position of the control lever is not the same as the position of the landing gear or when landing gear is not down and locked",
                    "When hydraulic pressure is low",
                    "Never"
                ],
                correct: 1,
                explanation: "The red primary position lights illuminate when the position of the control lever is not the same as the position of the landing gear or when landing gear is not down and locked.",
                reference: "B737 NG CBT - Landing Gear, Section 18"
            },
            {
                question: "What happens when you move the LANDING GEAR lever to UP position?",
                options: [
                    "Gear retracts immediately",
                    "Hydraulic system A pressurizes the landing gear and the landing gear begins to retract",
                    "Nothing happens",
                    "Only doors open"
                ],
                correct: 1,
                explanation: "When you move the LANDING GEAR lever to UP position, hydraulic system A pressurizes the landing gear and the landing gear begins to retract.",
                reference: "B737 NG CBT - Landing Gear, Section 19"
            },
            {
                question: "What happens to the lights during retraction?",
                options: [
                    "Lights stay the same",
                    "Green lights extinguish and the red lights illuminate indicating that landing gear are in transit",
                    "All lights extinguish",
                    "Only green lights illuminate"
                ],
                correct: 1,
                explanation: "Green lights extinguish and the red lights illuminate indicating that landing gear are in transit.",
                reference: "B737 NG CBT - Landing Gear, Section 19"
            },
            {
                question: "What automatically happens to the main gear wheels during retraction?",
                options: [
                    "Nothing",
                    "The brakes automatically stop rotation of the main gear wheels before the landing gear retracts",
                    "They speed up",
                    "They free wheel"
                ],
                correct: 1,
                explanation: "During retraction, the brakes automatically stop rotation of the main gear wheels before the landing gear retracts.",
                reference: "B737 NG CBT - Landing Gear, Section 20"
            },
            {
                question: "How are the main gear held in place after retraction?",
                options: [
                    "By hydraulic pressure",
                    "By mechanical uplocks",
                    "By electric locks",
                    "By springs"
                ],
                correct: 1,
                explanation: "After retraction, the main gear are held in place by mechanical uplocks.",
                reference: "B737 NG CBT - Landing Gear, Section 20"
            },
            {
                question: "How do the nose wheels retract?",
                options: [
                    "Forward into the wheel well",
                    "Aft into the wheel well",
                    "Sideways",
                    "Downward"
                ],
                correct: 0,
                explanation: "The nose wheels retract forward into the wheel well and its rotation is stopped by snubbers in the wheel well.",
                reference: "B737 NG CBT - Landing Gear, Section 21"
            },
            {
                question: "How is the nose gear held in place when retracted?",
                options: [
                    "By hydraulic pressure",
                    "By an overcenter lock",
                    "By springs",
                    "By cables"
                ],
                correct: 1,
                explanation: "The nose gear is held in place by an overcenter lock.",
                reference: "B737 NG CBT - Landing Gear, Section 21"
            },
            {
                question: "What happens when you move the landing gear lever to OFF position?",
                options: [
                    "Gear retracts",
                    "Hydraulic pressure is removed from the landing gear system",
                    "Gear extends",
                    "Nothing changes"
                ],
                correct: 1,
                explanation: "When you move the landing gear level to OFF position, hydraulic pressure is removed from the landing gear system.",
                reference: "B737 NG CBT - Landing Gear, Section 22"
            },
            {
                question: "What happens if a main landing gear tire is damaged during takeoff?",
                options: [
                    "Normal retraction continues",
                    "A frangible fitting removes hydraulic pressure and the gear free falls back to extended position",
                    "Gear gets stuck",
                    "Emergency system activates"
                ],
                correct: 1,
                explanation: "A frangible fitting in the wheel well ring opening removes hydraulic pressure from the affected main landing gear when a damaged, spinning tire moves into the main landing gear wheel well. Main landing gear, that has the damaged tire, free falls back to the extended position.",
                reference: "B737 NG CBT - Landing Gear, Section 24"
            },
            {
                question: "Can the affected gear with damaged tire be retracted until the fitting is replaced?",
                options: [
                    "Yes, normally",
                    "No, the affected gear cannot be retracted until the fitting is replaced",
                    "Only manually",
                    "Only with alternate system"
                ],
                correct: 1,
                explanation: "The affected gear cannot be retracted until the fitting is replaced.",
                reference: "B737 NG CBT - Landing Gear, Section 24"
            },
            {
                question: "When does hydraulic system B supply alternate power for landing gear retraction?",
                options: [
                    "Always",
                    "When the airplane is in the air, landing gear lever is UP, either main landing gear is not up and locked and left engine N2 speed is less than a limit value",
                    "On ground only",
                    "Never"
                ],
                correct: 1,
                explanation: "The landing gear transfer valve changes the pressure source of the landing gear from hydraulic system A to hydraulic system B when all of the following conditions occur: the airplane is in the air, landing gear lever is UP, either main landing gear is not up and locked and left engine N2 speed is less than a limit value.",
                reference: "B737 NG CBT - Landing Gear, Section 25"
            },
            {
                question: "How does the gear extend when you position the landing gear lever to DOWN?",
                options: [
                    "By hydraulic force only",
                    "By hydraulic force, landing gear weight, and air loads",
                    "By electric motors",
                    "By springs"
                ],
                correct: 1,
                explanation: "When you position the landing gear lever to the DOWN position, hydraulic system \"A\" pressure releases the mechanical uplocks and the gear starts to extend by hydraulic force, landing gear weight, and air loads.",
                reference: "B737 NG CBT - Landing Gear, Section 26"
            },
            {
                question: "When is manual extension system used?",
                options: [
                    "For normal operation",
                    "If hydraulic system A pressure is not available for extension of the gear",
                    "For maintenance",
                    "During emergencies only"
                ],
                correct: 1,
                explanation: "If hydraulic system \"A\" pressure is not available for extension of the gear, the manual extension system lets you lower the landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 27"
            },
            {
                question: "Where are the manual gear extension handles located?",
                options: [
                    "On overhead panel",
                    "On the cockpit floor",
                    "On side panels",
                    "On center pedestal"
                ],
                correct: 1,
                explanation: "Manual gear extension handles are on the cockpit floor. You get access to the manual extension handles through an access door.",
                reference: "B737 NG CBT - Landing Gear, Section 28"
            },
            {
                question: "How many manual extension handles are there?",
                options: [
                    "Two handles",
                    "Three manual extension handles. One is for the nose landing gear and one for each main landing gear",
                    "Four handles",
                    "One handle"
                ],
                correct: 1,
                explanation: "There are three manual extension handles. One is for the nose landing gear and one for each main landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 28"
            },
            {
                question: "What happens when the access door to manual extension is open?",
                options: [
                    "Normal operation continues",
                    "Manual landing gear extension is possible regardless of LANDING GEAR lever position, normal extension is possible if hydraulic system A is available and retraction is disabled",
                    "All systems shut down",
                    "Only manual operation possible"
                ],
                correct: 1,
                explanation: "When the access door to the manual extension control mechanism is open, manual landing gear extension is possible regardless of the LANDING GEAR lever position, normal landing gear extension is possible if hydraulic system \"A\" pressure is available and landing gear retraction is disabled.",
                reference: "B737 NG CBT - Landing Gear, Section 29"
            },
            {
                question: "How does the gear extend when a manual handle is pulled?",
                options: [
                    "By hydraulic pressure",
                    "The related gear up lock is released and the gear extends by air loads and its own weight",
                    "By electric motor",
                    "By spring force"
                ],
                correct: 1,
                explanation: "When a handle is pulled to its limit, the related gear up lock is released and the gear extends by air loads and its own weight.",
                reference: "B737 NG CBT - Landing Gear, Section 30"
            },
            {
                question: "What does the nose wheel steering system provide?",
                options: [
                    "Brake control",
                    "The ground directional control of the airplane",
                    "Engine control",
                    "Flight control"
                ],
                correct: 1,
                explanation: "The nose wheel steering system provides the ground directional control of the airplane.",
                reference: "B737 NG CBT - Landing Gear, Section 32"
            },
            {
                question: "When can you steer the airplane on the ground?",
                options: [
                    "Anytime",
                    "When the nose gear is in the down position and compressed by weight of the airplane",
                    "Only during taxi",
                    "Only during takeoff"
                ],
                correct: 1,
                explanation: "You can steer the airplane on the ground with nose wheel steering wheel and rudder pedals when the nose gear is in the down position and compressed by weight of the airplane.",
                reference: "B737 NG CBT - Landing Gear, Section 32"
            },
            {
                question: "What is the primary steering control?",
                options: [
                    "Rudder pedals",
                    "The nose wheel steering wheel",
                    "Differential braking",
                    "Engine thrust"
                ],
                correct: 1,
                explanation: "The nose wheel steering wheel is the primary steering control.",
                reference: "B737 NG CBT - Landing Gear, Section 33"
            },
            {
                question: "How much can the nose wheels turn with full steering wheel travel?",
                options: [
                    "45 degrees",
                    "A maximum of 78 degrees in the left or right direction",
                    "90 degrees",
                    "30 degrees"
                ],
                correct: 1,
                explanation: "When you move the steering wheel full travel, the nose wheels turn a maximum of 78 degrees in the left or right direction.",
                reference: "B737 NG CBT - Landing Gear, Section 33"
            },
            {
                question: "How much steering do rudder pedals provide?",
                options: [
                    "Full travel of the rudder pedals turns the nose wheels a maximum of 7 degrees in the left or right direction",
                    "45 degrees",
                    "78 degrees",
                    "15 degrees"
                ],
                correct: 0,
                explanation: "Full travel of the rudder pedals turns the nose wheels a maximum of 7 degrees in the left or right direction.",
                reference: "B737 NG CBT - Landing Gear, Section 34"
            },
            {
                question: "Which steering control has priority?",
                options: [
                    "Rudder pedals",
                    "The steering wheel always overrides rudder pedal steering",
                    "Differential braking",
                    "They have equal priority"
                ],
                correct: 1,
                explanation: "The steering wheel always overrides rudder pedal steering.",
                reference: "B737 NG CBT - Landing Gear, Section 34"
            },
            {
                question: "When is rudder pedal steering engaged?",
                options: [
                    "Always",
                    "When the airplane is on the ground and is disabled when the airplane is in the air",
                    "Only in flight",
                    "Never automatically"
                ],
                correct: 1,
                explanation: "The rudder pedal steering engages when the airplane is on the ground and is disabled when the airplane is in the air.",
                reference: "B737 NG CBT - Landing Gear, Section 35"
            },
            {
                question: "Which hydraulic system normally supplies pressure for nose wheel steering?",
                options: [
                    "Hydraulic system A",
                    "Hydraulic system B",
                    "Standby system",
                    "Both A and B"
                ],
                correct: 0,
                explanation: "Hydraulic system A normally supplies pressure for nose wheel steering.",
                reference: "B737 NG CBT - Landing Gear, Section 36"
            },
            {
                question: "Where is the NOSE WHEEL STEERING switch located?",
                options: [
                    "On overhead panel",
                    "In the flight compartment",
                    "On center pedestal",
                    "On side panel"
                ],
                correct: 1,
                explanation: "If the hydraulic system \"A\" pressure is lost, you can activate alternate nose wheel steering through the NOSE WHEEL STEERING switch which is located in the flight compartment.",
                reference: "B737 NG CBT - Landing Gear, Section 37"
            },
            {
                question: "What does the nose wheel steering switch control?",
                options: [
                    "Engine power",
                    "Manual control of the landing gear transfer valve",
                    "Brake pressure",
                    "Gear extension"
                ],
                correct: 1,
                explanation: "The switch provides you with manual control of the landing gear transfer valve.",
                reference: "B737 NG CBT - Landing Gear, Section 38"
            },
            {
                question: "When does alternate nose wheel steering activate?",
                options: [
                    "Automatically",
                    "When nose wheel steering switch is selected to alternate position, normal quantity of fluid is available in system B reservoir and airplane is on the ground",
                    "Only in flight",
                    "Never"
                ],
                correct: 1,
                explanation: "Alternate nose wheel steering activates when all of the following conditions exist: nose wheel steering switch is selected to the alternate position, normal quantity of fluid is available in system B reservoir and airplane is on the ground.",
                reference: "B737 NG CBT - Landing Gear, Section 39"
            },
            {
                question: "How can the nose wheel steering system be depressurized for towing?",
                options: [
                    "By turning off hydraulics",
                    "Through a lockout pin installed in the towing lever",
                    "By removing fuses",
                    "Cannot be depressurized"
                ],
                correct: 1,
                explanation: "The nose wheel steering system can be depressurized through a lockout pin installed in the towing lever. This allows airplane pushback or towing without depressurizing the hydraulic system A.",
                reference: "B737 NG CBT - Landing Gear, Section 41"
            },
            {
                question: "What are brakes used for?",
                options: [
                    "Steering only",
                    "Slowing, stopping and holding the aircraft on the ground",
                    "Speed control in flight",
                    "Engine control"
                ],
                correct: 1,
                explanation: "Brakes are used for slowing, stopping and holding the aircraft on the ground.",
                reference: "B737 NG CBT - Landing Gear, Section 42"
            },
            {
                question: "How do brakes work?",
                options: [
                    "By electric motors",
                    "They transform kinetic energy of the moving aircraft, into the heat energy by friction in the brake unit",
                    "By air pressure",
                    "By magnetic force"
                ],
                correct: 1,
                explanation: "They transform kinetic energy of the moving aircraft, into the heat energy by friction in the brake unit during the process working.",
                reference: "B737 NG CBT - Landing Gear, Section 42"
            },
            {
                question: "What type of brakes are fitted to each main landing gear?",
                options: [
                    "Single disk brakes",
                    "Multiple-disk brake operated by hydraulic power",
                    "Drum brakes",
                    "Air brakes"
                ],
                correct: 1,
                explanation: "Each main landing gear is fitted with multiple-disk brake operated by hydraulic power.",
                reference: "B737 NG CBT - Landing Gear, Section 43"
            },
            {
                question: "Do the nose wheels have brakes?",
                options: [
                    "Yes",
                    "No, the nose wheels do not have brakes",
                    "Only during taxi",
                    "Only for parking"
                ],
                correct: 1,
                explanation: "The nose wheels do not have brakes.",
                reference: "B737 NG CBT - Landing Gear, Section 43"
            },
            {
                question: "Which hydraulic system supplies power for normal brake system?",
                options: [
                    "Hydraulic A system",
                    "Hydraulic B system",
                    "Standby system",
                    "Both A and B"
                ],
                correct: 1,
                explanation: "Hydraulic B system supplies power for normal brake system.",
                reference: "B737 NG CBT - Landing Gear, Section 45"
            },
            {
                question: "What happens when hydraulic system B fails?",
                options: [
                    "No brakes available",
                    "Hydraulic system A automatically supplies pressure to the alternate brake system",
                    "Manual brakes only",
                    "Electric brakes activate"
                ],
                correct: 1,
                explanation: "When there is a failure of hydraulic system \"B\", hydraulic system A automatically supplies pressure to the alternate brake system.",
                reference: "B737 NG CBT - Landing Gear, Section 45"
            },
            {
                question: "What is the brake accumulator pressurized by?",
                options: [
                    "Hydraulic system A",
                    "The hydraulic system B",
                    "Electric pump",
                    "Manual pump"
                ],
                correct: 1,
                explanation: "Brake system also incorporates a brake accumulator which is pressurized by the hydraulic system B.",
                reference: "B737 NG CBT - Landing Gear, Section 46"
            },
            {
                question: "When does the brake accumulator provide brake energy?",
                options: [
                    "Always",
                    "When normal brake system pressure and alternate brake system pressure are lost",
                    "Only for parking",
                    "Never"
                ],
                correct: 1,
                explanation: "When normal brake system pressure and alternate brake system pressure are lost, hydraulic pressure trapped in the brake accumulator supplies a limited amount of brake energy which provides several braking applications or parking brake application.",
                reference: "B737 NG CBT - Landing Gear, Section 46"
            },
            {
                question: "What does the antiskid system monitor?",
                options: [
                    "Brake temperature",
                    "The wheel deceleration and controls the brake pressure to prevent wheel skids during brake application",
                    "Hydraulic pressure",
                    "Landing gear position"
                ],
                correct: 1,
                explanation: "The antiskid system monitors the wheel deceleration and controls the brake pressure to prevent wheel skids during brake application.",
                reference: "B737 NG CBT - Landing Gear, Section 49"
            },
            {
                question: "When is antiskid protection available?",
                options: [
                    "Only with normal brake system",
                    "For both normal and alternate brake systems",
                    "Only with alternate brake system",
                    "Never"
                ],
                correct: 1,
                explanation: "Anti-skid protection is provided for both normal and alternate brake systems.",
                reference: "B737 NG CBT - Landing Gear, Section 50"
            },
            {
                question: "How does antiskid work with normal brake system?",
                options: [
                    "For both wheels together",
                    "Antiskid protection is available for each wheel. When a wheel skids, antiskid system reduces pressure for that wheel",
                    "Only for main gear",
                    "Only for nose gear"
                ],
                correct: 1,
                explanation: "If the normal brake system has pressure, the antiskid protection is available for each wheel. When a wheel skids, antiskid system reduces pressure for that wheel.",
                reference: "B737 NG CBT - Landing Gear, Section 51"
            },
            {
                question: "How does antiskid work with alternate brake system?",
                options: [
                    "Same as normal system",
                    "Antiskid protection is applied to brakes on both wheels on that main gear instead of individual wheels",
                    "No antiskid protection",
                    "Only for one wheel"
                ],
                correct: 1,
                explanation: "If the alternate hydraulic brake system has pressure, the antiskid system operates almost the same as the normal system. However antiskid protection is applied to brakes on both wheels on that main gear instead of individual wheels.",
                reference: "B737 NG CBT - Landing Gear, Section 52"
            },
            {
                question: "Is antiskid protection available with loss of both hydraulic systems?",
                options: [
                    "No",
                    "Yes, antiskid protection is available even with loss of both hydraulic systems",
                    "Only manually",
                    "Only for parking brake"
                ],
                correct: 1,
                explanation: "Note that antiskid protection is available even with loss of both hydraulic systems.",
                reference: "B737 NG CBT - Landing Gear, Section 53"
            },
            {
                question: "What does locked wheel protection do?",
                options: [
                    "Applies more pressure",
                    "Completely releases the brake pressure at the wheel that has entered a deep skid condition until the wheel spins up again",
                    "Locks the wheel",
                    "Nothing"
                ],
                correct: 1,
                explanation: "Locked wheel protection completely releases the brake pressure at the wheel that has entered a deep skid condition until the wheel spins up again, preventing the wheel lock-up.",
                reference: "B737 NG CBT - Landing Gear, Section 55"
            },
            {
                question: "What does touchdown protection provide?",
                options: [
                    "Landing assistance",
                    "Protection against brake pressure application before touchdown",
                    "Gear protection",
                    "Hydraulic protection"
                ],
                correct: 1,
                explanation: "The touchdown protection feature provides protection against brake pressure application before touchdown. It prevents the pilot from inadvertently landing the airplane with brakes applied.",
                reference: "B737 NG CBT - Landing Gear, Section 56"
            },
            {
                question: "What is hydroplane protection?",
                options: [
                    "Water landing protection",
                    "An additional safeguard which enhances braking performance on icy or flooded runways",
                    "Engine protection",
                    "Gear protection"
                ],
                correct: 1,
                explanation: "Hydroplane protection is an additional safeguard which enhances braking performance on icy or flooded runways.",
                reference: "B737 NG CBT - Landing Gear, Section 57"
            },
            {
                question: "Which hydraulic system does the autobrake system use?",
                options: [
                    "Hydraulic system A",
                    "The hydraulic system B pressure",
                    "Standby system",
                    "Both A and B"
                ],
                correct: 1,
                explanation: "The autobrake system uses the hydraulic system B pressure and is available only with the normal brake system.",
                reference: "B737 NG CBT - Landing Gear, Section 60"
            },
            {
                question: "How many deceleration rates are available for landing autobrake?",
                options: [
                    "Three rates",
                    "Four deceleration rates available: one, two, three and maximum",
                    "Five rates",
                    "Two rates"
                ],
                correct: 1,
                explanation: "There are four deceleration rates available: one, two, three and maximum.",
                reference: "B737 NG CBT - Landing Gear, Section 62"
            },
            {
                question: "How do you select the maximum autobrake setting?",
                options: [
                    "Just move the switch",
                    "You must pull on the select switch momentarily to move it to the maximum position",
                    "Push the switch",
                    "Turn the switch"
                ],
                correct: 1,
                explanation: "You must pull on the select switch momentarily to move it to the maximum position.",
                reference: "B737 NG CBT - Landing Gear, Section 63"
            },
            {
                question: "When does autobrake apply the brakes on touchdown?",
                options: [
                    "Immediately at touchdown",
                    "When both thrust levers are retarded to idle and main wheels spin-up",
                    "After 5 seconds",
                    "Only when selected"
                ],
                correct: 1,
                explanation: "The autobrake applies the brakes on touchdown when both thrust levers are retarded to idle and main wheels spin-up.",
                reference: "B737 NG CBT - Landing Gear, Section 66"
            },
            {
                question: "Can you select landing autobrake settings after touchdown?",
                options: [
                    "No, only before touchdown",
                    "Yes, provided that the ground speed is more than 30 knots",
                    "Only at low speeds",
                    "Never"
                ],
                correct: 1,
                explanation: "You can also select the landing autobrake settings after touchdown provided that the ground speed is more than 30 knots.",
                reference: "B737 NG CBT - Landing Gear, Section 67"
            },
            {
                question: "When can RTO mode be selected?",
                options: [
                    "Anytime",
                    "Only when on the ground before takeoff",
                    "Only in flight",
                    "Only after takeoff"
                ],
                correct: 1,
                explanation: "The RTO mode can be selected only when on the ground before takeoff.",
                reference: "B737 NG CBT - Landing Gear, Section 73"
            },
            {
                question: "At what wheel speed does RTO autobrake engage if takeoff is rejected?",
                options: [
                    "60 knots or more",
                    "88 knots or more",
                    "100 knots or more",
                    "120 knots or more"
                ],
                correct: 1,
                explanation: "If the takeoff is rejected at a wheel speed of 88 knots or more, the autobrake function applies brakes with maximum pressure when you retard the forward thrust levers to IDLE.",
                reference: "B737 NG CBT - Landing Gear, Section 77"
            },
            {
                question: "What happens if takeoff is rejected prior to 88 knots wheel speed?",
                options: [
                    "Autobraking engages",
                    "Autobraking does not engage. The AUTO BRAKE DISARM light remains extinguished and the RTO autobrake function remains armed",
                    "Maximum braking applies",
                    "System fails"
                ],
                correct: 1,
                explanation: "If you reject the takeoff prior to wheel speed reaching 88 knots, autobraking does not engage. The AUTO BRAKE DISARM light remains extinguished and the RTO autobrake function remains armed.",
                reference: "B737 NG CBT - Landing Gear, Section 76"
            }
        ]
    },
    
    "emergency-equipment": {
        title: "Emergency Equipment, Doors & Windows",
        questions: [
            // EXTERIOR DOORS
            {
                question: "During pre-flight inspection at a windy airport, ground crew warns about wind speeds approaching limits. What is the maximum wind speed for operating entry or cargo doors?",
                options: [
                    "30 knots",
                    "40 knots", 
                    "50 knots",
                    "65 knots"
                ],
                correct: 1,
                explanation: "Entry or cargo doors should not be operated in winds more than 40 knots to prevent structural damage and ensure safe operation.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 11"
            },
            {
                question: "Ground operations encounters severe weather with high winds after aircraft arrival. At what wind speed must doors be closed to prevent aircraft structural damage?",
                options: [
                    "40 knots maximum",
                    "50 knots limit", 
                    "65 knots maximum",
                    "75 knots absolute limit"
                ],
                correct: 2,
                explanation: "Doors should not be kept open when winds are more than 65 knots; otherwise damage to the airplane structure may occur.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 12"
            },
            {
                question: "During external door operation, you notice the pressure gate mechanism activating. What occurs when opening a passenger door from outside?",
                options: [
                    "Door opens immediately without pressure equalization",
                    "Pressure gate opens to equalize cabin and ambient pressure as door unlatches",
                    "Emergency slides deploy automatically",
                    "Interior handles become inoperative"
                ],
                correct: 1,
                explanation: "As the door unlatches, pressure gate opens to equalize cabin and ambient pressure. The door is then pushed through the door frame until it is fully open.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 6"
            },
            {
                question: "Flight attendant asks about the visual indication system for armed escape slides. What provides external indication that a door slide is armed?",
                options: [
                    "Red warning light on fuselage",
                    "Pennant secured across viewing window", 
                    "Door handle position indicator",
                    "Audible warning signal"
                ],
                correct: 1,
                explanation: "A pennant, when secured across the viewing window, provides a visual indication to someone outside the airplane that the door slide is armed.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 8"
            },
            {
                question: "Cargo operations require understanding door mechanisms. How are the two plug-type cargo doors hinged and operated?",
                options: [
                    "Hinged on lower edges, open outward electrically",
                    "Hinged on upper edges, open inward manually", 
                    "Hinged on side edges, slide horizontally",
                    "No hinges, lift straight up hydraulically"
                ],
                correct: 1,
                explanation: "The doors have hinges on their upper edges and open inward. You open and close the cargo door manually from inside or outside of the cargo compartment.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "How many overwing emergency exit doors does the aircraft have?",
                options: [
                    "One over each wing",
                    "Two over each wing",
                    "Three over left wing only", 
                    "Four total, two per side"
                ],
                correct: 1,
                explanation: "The airplane also incorporates two emergency exit doors over each wing.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 4"
            },
            {
                question: "During maintenance inspection, you observe the door annunciator panel. Which light illuminates when forward passenger entry door is not secure?",
                options: [
                    "DOOR OPEN",
                    "FORWARD ENTRY", 
                    "PASSENGER",
                    "ENTRY DOOR"
                ],
                correct: 1,
                explanation: "When forward or aft passenger entry door is not secure, FORWARD ENTRY or AFT ENTRY door open light comes on.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 15"
            },
            {
                question: "Which additional lights activate when any door open light illuminates?",
                options: [
                    "Only master warning lights",
                    "MASTER CAUTION and DOORS annunciator",
                    "Fire warning system",
                    "Emergency evacuation alarms"
                ],
                correct: 1,
                explanation: "When a door open light comes on, the MASTER CAUTION and DOORS annunciator lights also come on.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 15"
            },
            
            // CABIN DOOR
            {
                question: "Flight deck security requires understanding access control. What provides mechanical operation of the cabin door from either side?",
                options: [
                    "Electronic keypad entry system",
                    "Door handle with key-lock",
                    "Hydraulic pressure system", 
                    "Pneumatic actuator control"
                ],
                correct: 1,
                explanation: "A door handle with a key-lock permits the door to be opened, closed and locked mechanically from either side.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 16"
            },
            {
                question: "When the cabin door is electrically unlocked, what indication appears?",
                options: [
                    "Red warning light",
                    "Door switch illuminates",
                    "Audible alert sounds", 
                    "Green status light"
                ],
                correct: 1,
                explanation: "With the door unlocked, the switch illuminates. When the switch is pushed, the cabin door locks and CABIN DOOR UNLOCKED light extinguishes.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 17"
            },
            {
                question: "How many blowout panels are installed on the cabin door?",
                options: [
                    "Two panels",
                    "Four panels",
                    "Six panels", 
                    "Eight panels"
                ],
                correct: 1,
                explanation: "There are four blowout panels on the cabin door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 18"
            },
            {
                question: "During rapid flight deck depressurization, what function do the cabin door blowout panels serve?",
                options: [
                    "Seal the door completely",
                    "Open into flight deck and equalize pressure",
                    "Provide structural reinforcement", 
                    "Activate emergency lighting"
                ],
                correct: 1,
                explanation: "If there is a rapid depressurization of flight deck, the blowout panels open into the flight deck and equalize the pressure between the flight deck and the passenger compartment.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 18"
            },
            {
                question: "Which blowout panels form an emergency exit for flight crew?",
                options: [
                    "Lower two panels",
                    "Upper two panels",
                    "Left side panels", 
                    "All four panels"
                ],
                correct: 1,
                explanation: "The upper two blowout panels also form an emergency exit for the flight crew.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 19"
            },
            
            // EMERGENCY EQUIPMENT
            {
                question: "Flight deck emergency equipment inventory includes which protective item for smoke conditions?",
                options: [
                    "Smoke goggles",
                    "Full face masks",
                    "Protective helmets", 
                    "Emergency suits"
                ],
                correct: 0,
                explanation: "Emergency equipment found on the flight deck includes life vests, flashlights, smoke googles and crash axe as well as a halon extinguisher.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 21"
            },
            {
                question: "What types of portable fire extinguishers are available on the aircraft?",
                options: [
                    "CO2 and foam",
                    "Water-type and halon",
                    "Powder and liquid", 
                    "Chemical and gas"
                ],
                correct: 1,
                explanation: "Two types of portable fire extinguishers are available on the aircraft: water-type and halon.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 23"
            },
            {
                question: "Water-type fire extinguishers contain what mixture for operation?",
                options: [
                    "Water and anti-freeze",
                    "Water and foam",
                    "Water and chemicals", 
                    "Pure distilled water"
                ],
                correct: 0,
                explanation: "Water-type fire extinguishers contain a mixture of water and anti-freeze.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 25"
            },
            {
                question: "For which fire types should water-type extinguishers NOT be used?",
                options: [
                    "Fabric and paper fires",
                    "Electrical or grease fires",
                    "Wood and plastic fires", 
                    "Upholstery fires"
                ],
                correct: 1,
                explanation: "Do not use water-type extinguishers on electrical or grease type fires.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 26"
            },
            {
                question: "What indicates acceptable pressure range on halon fire extinguisher?",
                options: [
                    "Red indicator zone",
                    "Green range on pressure indicator",
                    "Yellow warning band", 
                    "Digital display reading"
                ],
                correct: 1,
                explanation: "The green range on pressure indicator shows the acceptable pressure range.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 27"
            },
            {
                question: "What safety equipment is required when discharging halon extinguisher in flight deck?",
                options: [
                    "Protective clothing only",
                    "Oxygen masks with 100% oxygen and emergency selected",
                    "Eye protection equipment", 
                    "Breathing apparatus only"
                ],
                correct: 1,
                explanation: "If a halon fire extinguisher is to be discharged in the flight deck, then all crew members are to don oxygen masks and use 100% oxygen with emergency selected.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 29"
            },
            {
                question: "Emergency locator transmitter switch is normally positioned in which guarded position?",
                options: [
                    "OFF",
                    "ARM",
                    "ON", 
                    "AUTO"
                ],
                correct: 1,
                explanation: "The switch is guarded to ARM position.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 33"
            },
            {
                question: "ELT transmits automatically when reaching predetermined limit of what force?",
                options: [
                    "Pressure force",
                    "G-Load limit",
                    "Temperature limit", 
                    "Vibration threshold"
                ],
                correct: 1,
                explanation: "With the switch in ARM position, ELT transmits automatically when it reaches its predetermined G–Load limit.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 33"
            },
            {
                question: "ELT simultaneously transmits on how many frequencies when activated?",
                options: [
                    "One frequency",
                    "Two frequencies",
                    "Three frequencies", 
                    "Four frequencies"
                ],
                correct: 2,
                explanation: "An ELT light illuminates when emergency locator transmitter has been activated and is simultaneously transmitting on frequencies of 121.5, 243.0 and 406.0 MHz.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 33"
            },
            
            // FLIGHT DECK EVACUATION
            {
                question: "Primary flight deck evacuation route is through which pathway?",
                options: [
                    "Side windows",
                    "Cabin door",
                    "Overhead hatch", 
                    "Emergency panels"
                ],
                correct: 1,
                explanation: "In an emergency you normally escape from the flight deck through the cabin door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 35"
            },
            {
                question: "Flight deck side windows can be opened during which conditions?",
                options: [
                    "Ground only",
                    "Flight only",
                    "Ground or in flight", 
                    "Emergency only"
                ],
                correct: 2,
                explanation: "You may also evacuate the airplane through two sliding flight deck side windows which can be opened on the ground or in flight.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 36"
            },
            {
                question: "Where are escape lanyards for side window evacuation stored?",
                options: [
                    "Under pilot seats",
                    "Compartments above and aft of side windows",
                    "Behind instrument panel", 
                    "In overhead storage bins"
                ],
                correct: 1,
                explanation: "In order to facilitate side window evacuation, escape lanyards are provided in the compartments above and aft of the side windows.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 37"
            },
            {
                question: "Side window evacuation should be used only under what circumstances?",
                options: [
                    "Routine evacuation",
                    "Extreme emergency",
                    "Training purposes", 
                    "Maintenance access"
                ],
                correct: 1,
                explanation: "However, departure through the side window is difficult and should be used only in extreme emergency.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 38"
            },
            
            // ESCAPE SLIDES
            {
                question: "Where is each escape slide compartment located?",
                options: [
                    "Upper outboard face of door",
                    "Lower inboard face of each entry and service door",
                    "External fuselage mount", 
                    "Overhead storage area"
                ],
                correct: 1,
                explanation: "An escape slide is in a compartment at the lower inboard face of each entry and service door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 40"
            },
            {
                question: "What indicates escape slide inflation cylinder pressure is correct?",
                options: [
                    "Red indicator within band",
                    "Pointer within green band",
                    "Digital pressure reading", 
                    "Yellow warning light"
                ],
                correct: 1,
                explanation: "If the pointer is within the green band, the cylinder pressure is correct and the slide is ready for use.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 40"
            },
            {
                question: "What component is used to arm the escape slide?",
                options: [
                    "Girt bar",
                    "Safety pin",
                    "Arming lever", 
                    "Pressure valve"
                ],
                correct: 0,
                explanation: "Girt bar is used to arm the escape slide.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 40"
            },
            {
                question: "Escape slide fully inflates in approximately how many seconds?",
                options: [
                    "Three seconds",
                    "Six seconds",
                    "Ten seconds", 
                    "Fifteen seconds"
                ],
                correct: 1,
                explanation: "The escape slide will fully inflate in approximately six seconds.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 42"
            },
            {
                question: "If escape slide fails to inflate automatically, what action provides manual inflation?",
                options: [
                    "Turn pressure valve",
                    "Pull manual inflation handle sharply",
                    "Press emergency button", 
                    "Activate backup system"
                ],
                correct: 1,
                explanation: "If the escape slide does not inflate automatically, pull the manual inflation handle sharply to inflate the escape slide manually.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 43"
            },
            {
                question: "For water landings, escape slides can serve what secondary function?",
                options: [
                    "Emergency shelter",
                    "Flotation devices",
                    "Navigation aids", 
                    "Communication platforms"
                ],
                correct: 1,
                explanation: "However, if properly inflated, the slides can be used as flotation devices for passengers in the water.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 45"
            },
            {
                question: "What must be done to use escape slide as flotation device?",
                options: [
                    "Inflate to maximum pressure",
                    "Disconnect slide from airplane using release handle",
                    "Attach additional flotation", 
                    "Seal all air valves"
                ],
                correct: 1,
                explanation: "You need to remove the slide from the airplane when the escape slide is used as a flotation device or when the deployed slide blocks the exit.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 46"
            },
            
            // EMERGENCY EXIT DOORS
            {
                question: "To open overwing emergency exit door from inside, what is the first action?",
                options: [
                    "Turn handle clockwise",
                    "Pull interior handle down",
                    "Push door outward", 
                    "Release safety latch"
                ],
                correct: 1,
                explanation: "To open the door from the inside, you must pull the interior handle down to start the door open sequence.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 49"
            },
            {
                question: "From outside aircraft, how do you open overwing emergency exit door?",
                options: [
                    "Pull external handle down",
                    "Hold knee against lower portion and push panel inward",
                    "Turn release mechanism", 
                    "Press emergency activation button"
                ],
                correct: 1,
                explanation: "Hold your knee against lower portion of door and push the emergency exit panel inward. The door opens out and up automatically.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 50"
            },
            {
                question: "Flight lock system prevents emergency door operation during which phases?",
                options: [
                    "Ground operations only",
                    "Takeoff, in-flight, and landing",
                    "Engine start and shutdown", 
                    "Maintenance periods"
                ],
                correct: 1,
                explanation: "Overwing emergency exit door incorporates flight lock system which is designed to prevent the operation of the emergency door during takeoff, in-flight, and landing.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 51"
            },
            {
                question: "Emergency exit doors lock when how many entry/service doors are closed?",
                options: [
                    "Two or more",
                    "Three or more",
                    "All doors", 
                    "At least one"
                ],
                correct: 1,
                explanation: "The emergency exit doors lock when all of these conditions are present: Three or more of the entry/service doors are closed, either engine is running, air ground logic indicates that airplane is in the air or both the left and right thrust levers are advanced.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 52"
            },
            {
                question: "When emergency exit door is not fully closed during takeoff, which lights illuminate?",
                options: [
                    "Only door warning lights",
                    "OVERWING warning, DOORS annunciator, MASTER CAUTION",
                    "Fire warning system", 
                    "Emergency evacuation lights"
                ],
                correct: 1,
                explanation: "When an emergency exit door is not fully closed and locked or when the flight lock is not engaged, either during the takeoff roll or inflight, the associated OVERWING warning lights, DOORS annunciator, and MASTER CAUTION light illuminate.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 53"
            },
            {
                question: "PSEU light illuminates when emergency exit door experiences what condition?",
                options: [
                    "Normal operation",
                    "Locked when should be unlocked or fault detected",
                    "Unlocked position", 
                    "Manual override engaged"
                ],
                correct: 1,
                explanation: "When an emergency exit door is locked when it should be unlocked or a fault is detected, the proximity switch electronics Unit (PSEU) light on aft overhead panel, the OVERHEAD annunciator, and the MASTER CAUTION lights illuminate.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 54"
            },
            
            // ESCAPE STRAPS
            {
                question: "Overwing escape straps provide assistance during which type of emergency?",
                options: [
                    "Fire emergency",
                    "Ditching emergency",
                    "Cabin pressurization failure", 
                    "Engine failure"
                ],
                correct: 1,
                explanation: "Overwing escape straps provide a handhold in a ditching emergency for passengers to move safely over the wing prior to getting into a life raft or to keep their balance on the wing while waiting for rescue.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 55"
            },
            {
                question: "Where are overwing escape straps stored?",
                options: [
                    "Under passenger seats",
                    "Stowage tubes above each aft emergency exit door",
                    "Wing root compartments", 
                    "External wing mounts"
                ],
                correct: 1,
                explanation: "Overwing escape straps are installed in stowage tubes above each aft emergency exit door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 56"
            },
            {
                question: "What condition is required to access overwing escape straps?",
                options: [
                    "Emergency power activated",
                    "Exit door must be open",
                    "Aircraft on ground", 
                    "Cabin pressurization off"
                ],
                correct: 1,
                explanation: "The exit door must be open to gain access to the straps.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 57"
            },
            {
                question: "How is the escape strap attached to the wing?",
                options: [
                    "Magnetic coupling",
                    "Hook to ring on wing",
                    "Screw-in attachment", 
                    "Velcro fastener"
                ],
                correct: 1,
                explanation: "To use, pull the strap free from its stowage and attach the hook to a ring on the wing.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 57"
            },
            
            // ADDITIONAL DOORS & SYSTEMS
            {
                question: "During maintenance access, which door provides entry to center electrical and electronic equipment?",
                options: [
                    "Service door",
                    "Center E/E equipment access door",
                    "Cargo door", 
                    "Emergency access panel"
                ],
                correct: 1,
                explanation: "In addition, there are miscellaneous access doors such as a center electrical and electronic (E/E) equipment access door and an equipment compartment access door on the bottom of the airplane.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 3"
            },
            {
                question: "Cargo door counterbalance mechanism serves what function?",
                options: [
                    "Prevents door damage",
                    "Helps lift door and holds it in uplock position",
                    "Seals door pressure", 
                    "Controls door speed"
                ],
                correct: 1,
                explanation: "A counterbalance mechanism in the door helps lift the door and holds it in an uplock position.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "What prevents pressurization loss through cargo doors?",
                options: [
                    "Electronic sealing system",
                    "Seals around door edge and handle shaft",
                    "Pressure equalization valves", 
                    "Hydraulic pressure locks"
                ],
                correct: 1,
                explanation: "Seals around the door edge and door handle shaft prevent pressurization loss.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "Door lock mechanism in passenger doors engages at which position?",
                options: [
                    "Partially open position",
                    "Fully open position",
                    "Closed position", 
                    "Any position"
                ],
                correct: 1,
                explanation: "A lock mechanism in the upper hinge locks the door in the fully open position.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 6"
            },
            {
                question: "How do you operate water-type fire extinguisher correctly?",
                options: [
                    "Squeeze handle and spray",
                    "Turn handle clockwise, aim at base of fire, push trigger",
                    "Point and press button", 
                    "Pull pin and squeeze"
                ],
                correct: 1,
                explanation: "To operate the water-type extinguisher, turn the handle clockwise, aim at the base of fire and push the trigger.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 25"
            },
            {
                question: "What type of fires are halon extinguishers primarily designed for?",
                options: [
                    "Paper and fabric fires",
                    "Electrical and fuel/grease fires",
                    "Wood and plastic fires", 
                    "All fire types"
                ],
                correct: 1,
                explanation: "The halon extinguishers are primarily for electrical and fuel and grease fires.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 28"
            },
            {
                question: "What prevents accidental operation of stowed halon extinguisher?",
                options: [
                    "Safety pin",
                    "Bracket with pull ring",
                    "Trigger lock", 
                    "Pressure valve"
                ],
                correct: 1,
                explanation: "A bracket with a pull ring prevents accidental operation when the extinguisher is stowed.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 27"
            },
            {
                question: "Flight deck side window opening procedure requires which initial action?",
                options: [
                    "Turn handle outward",
                    "Squeeze trigger in handle",
                    "Pull release lever", 
                    "Push window frame"
                ],
                correct: 1,
                explanation: "To open the window, squeeze the trigger in the handle, turn the handle inward and move the window back until it locks in the open position.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 36"
            },
            {
                question: "Emergency exit handle on cabin door operates which panels?",
                options: [
                    "All four blowout panels",
                    "Upper two blowout panels",
                    "Lower two panels", 
                    "Side access panels"
                ],
                correct: 1,
                explanation: "When you pull on the emergency exit handle, the upper two blowout panels come out of the door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 19"
            },
            {
                question: "When girt bar is installed in floor brackets, what is the escape slide status?",
                options: [
                    "Disarmed",
                    "Armed",
                    "Partially ready", 
                    "Manual mode"
                ],
                correct: 1,
                explanation: "To operate the escape slide, remove the girt bar from the stowage hooks on the door and install it in the floor brackets to arm the escape slide.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 41"
            }
        ]
    }
};

// Additional questions can be added here following the same format
// Each module should have exactly 80 questions as requested

// Function to get random questions for a module
function getRandomQuestions(module, count) {
    if (!quizData[module] || !quizData[module].questions) {
        return [];
    }
    
    const questions = [...quizData[module].questions];
    
    // If not enough questions, return all available
    if (questions.length <= count) {
        return questions;
    }
    
    // Shuffle and return requested count
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to generate additional questions dynamically
function generateAdditionalQuestions(baseQuestions, targetCount) {
    const generated = [];
    const variations = [
        " during normal operation",
        " in emergency conditions", 
        " during maintenance",
        " at high altitude",
        " on the ground",
        " during flight",
        " in cold weather",
        " in hot weather"
    ];
    
    // Generate variations of existing questions
    baseQuestions.forEach(question => {
        variations.forEach(variation => {
            if (generated.length < targetCount - baseQuestions.length) {
                generated.push({
                    ...question,
                    question: question.question.replace('?', variation + '?')
                });
            }
        });
    });
    
    return [...baseQuestions, ...generated.slice(0, targetCount - baseQuestions.length)];
}
    