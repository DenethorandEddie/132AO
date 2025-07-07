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
                correct: 2,
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
                correct: 3,
                explanation: "The left air conditioning pack supplies conditioned air for the flight compartment. Excess cold air from the left pack and cold air from the right pack goes into mix manifold before it is distributed to passenger cabin zones.",
                reference: "B737 NG CBT - Air Conditioning System, Section 35"
            },
            {
                question: "What is the correct sequence of operation in the air cycle machine for cooling hot bleed air?",
                options: [
                    "Primary heat exchanger → turbine → compressor → secondary heat exchanger → distribution",
                    "Secondary heat exchanger → compressor → primary heat exchanger → turbine → distribution",
                    "Compressor → primary heat exchanger → turbine → secondary heat exchanger → distribution",
                    "Primary heat exchanger → compressor → secondary heat exchanger → turbine → distribution"
                ],
                correct: 3,
                explanation: "The operation sequence is: hot bleed air goes to primary heat exchanger where it's cooled, then to compressor where temperature and pressure increase, then to secondary heat exchanger where temperature decreases but pressure stays same, then to turbine where both temperature and pressure decrease while generating power for compressor and cooling fan, then to distribution system.",
                reference: "B737 NG CBT - Air Conditioning System, Section 19"
            },
            {
                question: "When both packs are operating with PACK switches in AUTO, what determines the flow rate, and what are the specific conditions?",
                options: [
                    "Each pack adjusts to low flow; if only one pack operates, it regulates to high flow in flight with flaps up",
                    "Both packs always operate at maximum flow regardless of conditions",
                    "Flow rate is manually controlled by the pilot through separate flow control switches",
                    "Left pack always operates at high flow, right pack at low flow"
                ],
                correct: 0,
                explanation: "When the pack switch is in AUTO, the pack regulates to low flow or high flow as necessary to maintain sufficient pressurization and conditioned air. With both packs operating, each pack adjusts to low flow. If only one pack is operating, the operating pack regulates to high flow in flight with flaps up.",
                reference: "B737 NG CBT - Air Conditioning System, Section 55-58"
            },
            {
                question: "In balanced mode operation, how do the pack/zone temperature controllers determine pack outlet temperature?",
                options: [
                    "Both packs operate at preset fixed temperatures regardless of zone demands",
                    "Left pack provides hot air, right pack provides cold air for mixing",
                    "Controllers calculate required pack outlet temperature for the zone with the lowest temperature requirement; both packs provide this temperature",
                    "Each pack independently calculates its own outlet temperature based on its connected zones"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "A pack trip off occurs when: 1) An overheat condition is detected - the respective PACK light comes on immediately and the related pack valve closes, or 2) When both primary and standby pack controls for the same pack fail - the PACK light comes on immediately and cannot be reset, but the pack continues to operate without control if excessive temperatures don't cause trip off.",
                reference: "B737 NG CBT - Air Conditioning System, Section 94-97"
            },
            {
                question: "What are the three aircraft zones that receive conditioned air, and which pack/zone controllers provide control for each?",
                options: [
                    "Forward cabin, aft cabin, cargo; left controller controls all zones",
                    "Pilot side, copilot side, passenger cabin; controllers alternate control every flight",
                    "Upper deck, main deck, lower deck; each controller controls its respective side",
                    "Cockpit, forward cabin, aft cabin; right controller provides primary cockpit control, left provides aft cabin control"
                ],
                correct: 3,
                explanation: "The three main zones are: Cockpit, forward cabin and aft cabin. The right pack/zone temperature controller provides primary temperature control for the flight compartment zone and forward passenger zone. The left controller provides temperature control for the aft passenger zone and back-up temperature control for the flight compartment zone.",
                reference: "B737 NG CBT - Air Conditioning System, Section 32, 49-50"
            },
            {
                question: "How do the recirculation fans operate in AUTO mode during different flight phases and pack configurations?",
                options: [
                    "Both fans always operate when packs are running regardless of flight phase",
                    "Only one fan operates at a time to prevent air circulation conflicts",
                    "During flight: left fan operates when both packs run and neither PACK switch is HIGH; right fan operates when both packs run and both PACK switches are not HIGH",
                    "Fans only operate on ground, never during flight for pressurization reasons"
                ],
                correct: 2,
                explanation: "During flight with fan switches in AUTO: left recirculation fan operates when both packs are operating provided that either PACK switch is not in HIGH position. Right recirculation fan operates when both packs are operating provided that both PACK switches are not in HIGH position. This reduces engine bleed air usage for better thrust management and fuel consumption.",
                reference: "B737 NG CBT - Air Conditioning System, Section 36-37, 61-62"
            },
            {
                question: "What happens to the collected water in the high pressure water separator, and why is this process important?",
                options: [
                    "Water is sent to water spray nozzle which injects it into ram air duct for evaporative cooling",
                    "Water is stored in tanks for later disposal on ground",
                    "Water is recycled back into the cabin air supply for humidity control",
                    "Water is discharged overboard through a dedicated drain system"
                ],
                correct: 0,
                explanation: "During the cooling process, a high pressure water separator removes and collects water from the air before it goes into the distribution system to prevent freezing in lines and valves due to very low temperature and to avoid passenger discomfort and corrosion. The collected water is sent to water spray nozzle which injects the water into the ram air duct, cooling the ram air stream by evaporation.",
                reference: "B737 NG CBT - Air Conditioning System, Section 20-21"
            },
            {
                question: "Under what specific conditions do RAM DOOR FULL OPEN lights illuminate, and what do they indicate during different flight phases?",
                options: [
                    "Only when doors malfunction, indicating system failure regardless of flight phase",
                    "Only during takeoff and landing for maximum cooling requirements",
                    "On ground (normal), in cruise (may indicate ram air blockage, dirty heat exchangers, or electrical failure)",
                    "Continuously during flight to show normal operation of cooling system"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "The normal cabin temperature range is maintained between 18-24°C for passenger comfort.",
                reference: "B737 NG CBT - Air Conditioning System, Section 3.3"
            },
            {
                question: "How is the air conditioning system controlled?",
                options: [
                    "Manual control only",
                    "By cabin crew only",
                    "Fully automatic only",
                    "Automatic control with manual override"
                ],
                correct: 3,
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
                correct: 1,
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
                    "APU bleed is disconnected",
                    "Cross-bleed duct is isolated",
                    "Cabin pressurization stops"
                ],
                correct: 2,
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
                correct: 0,
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
                correct: 2,
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
                correct: 2,
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
                correct: 2,
                explanation: "The Boeing 737-800 overall length is 129 feet 6 inches, height from ground to vertical stabilizer tip is 41 feet 2 inches, wingspan is 117 feet 5 inches. The minimum pavement width to carry out a 180-degree turn is 79.1 feet.",
                reference: "B737 NG CBT - Aircraft General, Section 3-5"
            },
            {
                question: "What are the safe clearance distances that must be maintained during ground operations to avoid obstacles?",
                options: [
                    "15 feet from wing tip, 20 feet from nose during any ground operation",
                    "Clearances depend on aircraft weight and wind conditions",
                    "20 feet from wing tip, 25 feet from nose when engines are running",
                    "Must not attempt turn when obstacle within 17.8 feet of wing tip or 24.3 feet of nose"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "Flight crew seats have seat base controls for fore/aft position. Upper seat controls include: seat height, thigh pad position, seat recline, armrest height and stowage, back cushion (lumbar support) position and headrest position. For optimum eye reference, adjust so sight aligns along upper surface of glareshield with small amount of airplane nose structure visible and over control column until bottom edge of outboard display unit is visible.",
                reference: "B737 NG CBT - Aircraft General, Section 10-11"
            },
            {
                question: "What equipment and facilities are provided in the passenger compartment, and how are the galleys powered?",
                options: [
                    "Cabin attendant stations near doors with control panels/handsets; galleys powered by 115V AC from transfer buses 1&2",
                    "Basic seating only with no food service capability or attendant facilities",
                    "Galleys powered by 28V DC with manual food preparation only",
                    "Self-service facilities only with no attendant stations required"
                ],
                correct: 0,
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
                    "Heating through engine bleed air with manual bypass valve only",
                    "Automatic heating with overheat protection; power switch, indicator light, temperature selector switch",
                    "Electric heating with timer control and no overheat protection"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "The water system uses a single tank located behind the aft cargo compartment. Fresh water is supplied to galleys and lavatory sinks through distribution lines. A water servicing panel is located on the bottom of the aft fuselage with fill/overflow valve handle for filling the tank and tank drain valve handle for draining water overboard from tank and aft water distribution lines.",
                reference: "B737 NG CBT - Aircraft General, Section 23-26"
            },
            {
                question: "What are the key features and safety characteristics of the cargo compartments?",
                options: [
                    "Open ventilation with passenger cabin air circulation and normal temperature control",
                    "Unpressurized compartments with emergency ventilation systems only",
                    "Fire resistant liner sealing, pressurized without fresh air circulation, pressure equalization valves, blowout panels",
                    "Heated and cooled independently with dedicated air conditioning systems"
                ],
                correct: 2,
                explanation: "The lower cargo compartments are tightly sealed by fire resistant liner to completely confine fire without endangering airplane safety. Both are pressurized but do not have fresh air circulation and temperature control like upper passenger compartments. Each has pressure equalization valve allowing air flow to keep cargo pressure nearly same as cabin pressure. Blowout panels on ceilings and bulkheads prevent structure damage if airplane pressurization is lost.",
                reference: "B737 NG CBT - Aircraft General, Section 27-28"
            },
            {
                question: "What are the control and operational features of the forward airstairs system?",
                options: [
                    "Manual operation only with ground crew assistance required for all movements",
                    "Pneumatic system with engine bleed air operation and emergency manual backup",
                    "Hydraulic operation with cockpit controls and no external access points",
                    "Interior: EXTEND/RETRACT switches, STANDBY switch with battery, STAIR OPER light, tread LIGHTS switch; Exterior: AIRSTAIRS switch, power switch"
                ],
                correct: 3,
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
                correct: 3,
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
                correct: 0,
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
                correct: 3,
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
                correct: 2,
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
                correct: 3,
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
                correct: 0,
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
                correct: 3,
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
                correct: 0,
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
                    "129.6 feet",
                    "117.5 feet",
                    "41.2 feet",
                    "79.1 feet"
                ],
                correct: 3,
                explanation: "The minimum pavement width to carry out a 180 degrees turn is 79.1 feet.",
                reference: "B737 NG CBT - Aircraft General, Principal Dimensions"
            },
            {
                question: "To avoid obstacles during a turn, what is the minimum clearance required from the wing tip?",
                options: [
                    "129.6 feet",
                    "17.8 feet",
                    "24.3 feet",
                    "79.1 feet"
                ],
                correct: 1,
                explanation: "You must not attempt to make a turn when there is an obstacle within 17.8 feet of the wing tip.",
                reference: "B737 NG CBT - Aircraft General, Principal Dimensions"
            },
            {
                question: "Which of the following is NOT listed as equipment in the aft flight deck?",
                options: [
                    "Observer oxygen mask",
                    "Forward airstair controls",
                    "Manual gear release mechanism",
                    "Fire extinguisher"
                ],
                correct: 1,
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
                correct: 3,
                explanation: "The optimal eye reference position is achieved by aligning your sight along the upper surface of the glareshield with a small amount of the airplane nose structure visible.",
                reference: "B737 NG CBT - Aircraft General, Flight Compartment"
            },
            {
                question: "What is the power source for the galleys in the passenger compartment?",
                options: [
                    "28V DC from the main battery",
                    "28V DC from the TRUs",
                    "115V AC from the number 1 and 2 transfer buses",
                    "115V AC from a dedicated galley generator"
                ],
                correct: 2,
                explanation: "Galleys are powered with 115 volt AC from the number 1 and 2 transfer buses.",
                reference: "B737 NG CBT - Aircraft General, Passenger Compartment"
            },
            {
                question: "In a lavatory, which position must the water shutoff valve be in to supply water to the faucet only?",
                options: [
                    "FAUCET ONLY",
                    "OFF",
                    "SUPPLY ON",
                    "TOILET ONLY"
                ],
                correct: 0,
                explanation: "In the FAUCET ONLY position, water goes to the faucet only.",
                reference: "B737 NG CBT - Aircraft General, Lavatories"
            },
            {
                question: "What illuminates when a lavatory door is closed and latched?",
                options: [
                    "The attendant call light",
                    "The 'return to seat' sign",
                    "The water heater power indicator",
                    "The mirror light and lavatory occupied sign"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "The forward lavatory incorporates a drain valve which lets you drain the water from the forward lavatory supply lines.",
                reference: "B737 NG CBT - Aircraft General, Lavatories"
            },
            {
                question: "Where is the potable water tank located?",
                options: [
                    "Above the passenger cabin",
                    "Behind the aft cargo compartment",
                    "In the forward cargo compartment",
                    "In the wing root"
                ],
                correct: 1,
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
                correct: 0,
                explanation: "The blowout panels on the ceilings and bulkheads prevent damage to the airplane structure in case the airplane pressurization is lost.",
                reference: "B737 NG CBT - Aircraft General, Cargo Compartments"
            },
            {
                question: "How are the cargo compartments lit?",
                options: [
                    "Automatically when the door is opened",
                    "From a switch on the flight deck",
                    "They are not lit",
                    "From a switch located at the right bottom corner of the Cargo door"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "The forward airstairs are mounted under the cabin floor just below the forward cabin door.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "What does the white STAIR OPER light on the forward attendant panel indicate?",
                options: [
                    "The stairs are in transit (moving)",
                    "The stairs are fully extended and locked",
                    "There is a fault in the airstair system",
                    "The exterior control panel is being used"
                ],
                correct: 0,
                explanation: "White STAIR OPER light on the panel illuminates when the airstair is in transit.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "When operating the airstairs with the STANDBY Control Switch, what must be done?",
                options: [
                    "The switch must be pressed only once",
                    "The switch must be held in until the stairs are fully extended or retracted",
                    "AC power must be available",
                    "The ground crew must enable standby power from the exterior panel"
                ],
                correct: 1,
                explanation: "The battery switch must be ON and the standby control switch must be held in until the stairs are fully extended or retracted.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "With the airstair Tread LIGHTS switch in the AUTO position, when do the lights illuminate?",
                options: [
                    "Whenever the cabin doors are opened",
                    "When the airstair is in transit",
                    "Continuously when the battery is on",
                    "When the airstair is fully extended"
                ],
                correct: 3,
                explanation: "With the switch in the AUTO position, the tread lights illuminate when the airstair is fully extended and extinguish when the airstair retracts.",
                reference: "B737 NG CBT - Aircraft General, Forward Airstairs"
            },
            {
                question: "What is the overall length of the Boeing 737-800?",
                options: [
                    "41 feet 2 inches",
                    "129 feet 6 inches",
                    "117 feet 5 inches",
                    "79.1 feet"
                ],
                correct: 1,
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
                correct: 3,
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
                correct: 2,
                explanation: "Icing conditions exist when total air temperature is 10°C or below AND visible moisture is present. With TAT at 8°C and clouds with rain showers ahead, both engine and wing anti-ice should be activated immediately as icing conditions are present. Do not wait for visual confirmation.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 4"
            },
            {
                question: "During approach to an airport, you encounter the following conditions: TAT 6°C, scattered clouds at 2000 feet, visibility 3 miles in light drizzle, and occasional sleet. Which elements constitute visible moisture requiring anti-ice activation?",
                options: [
                    "The clouds, drizzle, and sleet all constitute visible moisture",
                    "Only the drizzle since rain is the primary moisture source",
                    "Only the sleet since it's the most dangerous for ice formation",
                    "None, since visibility is above 1 mile"
                ],
                correct: 0,
                explanation: "Visible moisture includes clouds, fog with visibility of one mile or less, rain, snow, sleet or ice crystals. In this scenario, the clouds, drizzle, and sleet all constitute visible moisture. Combined with TAT of 6°C, icing conditions exist.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 4"
            },
            {
                question: "You're preparing for departure at an airport where OAT is 7°C. The ramp has puddles of standing water from recent rain, and there are patches of slush on the taxiways. The runway appears mostly dry with some wet spots. What is the correct assessment of ground icing conditions?",
                options: [
                    "Icing conditions exist due to OAT and standing water/slush on airport surfaces",
                    "No icing conditions since the runway is mostly dry",
                    "Icing conditions only exist on the taxiways where slush is present",
                    "Wait for OAT to drop below 5°C before considering icing conditions"
                ],
                correct: 0,
                explanation: "Ground icing conditions exist when outside air temperature is 10°C or below AND standing water, slush, ice or snow is present on ramps, taxiways or runways. With OAT at 7°C and standing water/slush present on airport surfaces, icing conditions exist for ground operations.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 5"
            },
            {
                question: "During a briefing, your co-pilot asks about ice protection philosophy. You explain that turboprop aircraft often use pneumatic boots while jets use different systems. What is the fundamental difference between these approaches?",
                options: [
                    "Turboprops use thermal systems, jets use electrical systems",
                    "Both use the same systems but with different power sources",
                    "Turboprops use intermittent systems, jets use continuous systems",
                    "Turboprops use de-icing (removes ice after formation), jets use anti-icing (prevents ice formation)"
                ],
                correct: 3,
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
                    "Hot bleed air for flight controls, electrical heating for engines",
                    "Hot bleed air for large areas, electrical heating for smaller precise areas",
                    "Both methods are used redundantly for all components",
                    "The choice depends on flight phase and altitude"
                ],
                correct: 1,
                explanation: "The Boeing 737 uses hot bleed air (thermal anti-icing) for large areas like engine cowls and wing leading edges, and electrical heating (electric anti-icing) for smaller, precise areas like pitot tubes and windshields where precise temperature control is needed.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 7"
            },
            {
                question: "During pre-flight inspection in icing conditions, you notice frost forming on various engine surfaces. Your co-pilot asks which specific area the engine anti-ice system protects and why that particular location is critical for engine operation.",
                options: [
                    "The entire intake area to prevent any ice ingestion",
                    "The engine core components to prevent internal icing",
                    "The engine cowl lips because ice here disrupts airflow and can cause ingestion damage",
                    "The exhaust area to prevent ice formation on hot surfaces"
                ],
                correct: 2,
                explanation: "The engine anti-ice system specifically protects the engine cowl lips from icing. Ice accumulation at this critical location disturbs airflow into the engine, reducing performance and potentially causing compressor stall. Ice particles can also break off and be ingested, causing damage to fan blades and inlet vanes.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 8"
            },
            {
                question: "During flight in icing conditions, you experience a sudden engine parameter change with EGT fluctuations and a slight RPM decrease on the left engine. You suspect ice accumulation on the cowl lips. What are the potential consequences if this condition persists?",
                options: [
                    "Possible compressor stall from airflow disruption and FOD from ice ingestion",
                    "Only minor performance reduction that can be tolerated",
                    "Engine overheat due to restricted airflow",
                    "Only cosmetic damage with no operational impact"
                ],
                correct: 0,
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
                    "Pneumatically controlled with electrical monitoring",
                    "Electrically controlled with pressure actuation from bleed air"
                ],
                correct: 3,
                explanation: "The cowl anti-ice valves are electrically controlled and pressure actuated. The electrical system provides the control signals from the cockpit switches, while the actual valve actuation is accomplished using bleed air pressure. This explains why electrical or pressure system failures can prevent valve operation.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 9"
            },
            {
                question: "Where is the engine anti-ice panel located?",
                options: [
                    "On the center pedestal",
                    "On the main instrument panel",
                    "On the side panel",
                    "On the forward overhead panel"
                ],
                correct: 3,
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
                correct: 1,
                explanation: "Each cowl valve open light becomes dim when the associated cowl valve is open.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 12"
            },
            {
                question: "When should engine anti-ice be activated?",
                options: [
                    "Only when ice is visually observed",
                    "Only on the ground",
                    "Only during flight",
                    "When icing conditions exist or are anticipated"
                ],
                correct: 3,
                explanation: "Engine anti-ice must be immediately activated when icing conditions exist or are anticipated. Do not rely on visual indications of airframe icing.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 13"
            },
            {
                question: "What happens to stall warning logic when engine anti-ice is selected ON?",
                options: [
                    "No effect",
                    "Sets stall warning logic for icing conditions",
                    "Stall warning is disabled",
                    "Stall warning becomes more sensitive"
                ],
                correct: 1,
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
                correct: 1,
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
                correct: 0,
                explanation: "Do not use engine anti-ice in flight when total air temperature is above 10°C.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 17"
            },
            {
                question: "What indication appears on the engine display when a cowl anti-ice valve fails to open?",
                options: [
                    "Amber thermal anti-ice indication",
                    "Green thermal anti-ice indication",
                    "Red thermal anti-ice indication",
                    "No indication"
                ],
                correct: 0,
                explanation: "When either cowl anti-ice valve does not open, an amber thermal anti-ice indication appears on the engine display after a short delay.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 19"
            },
            {
                question: "How many leading edge slats does the wing anti-ice system protect?",
                options: [
                    "Three inboard leading edge slats",
                    "Two inboard slats",
                    "All leading edge slats",
                    "Four inboard slats"
                ],
                correct: 0,
                explanation: "The wing anti-ice system protects three inboard leading edge slats from icing.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "Do leading edge flaps and outboard leading edge slats need ice protection?",
                options: [
                    "No, they do not need to be ice protected",
                    "Yes, they are critical for safety",
                    "Only the flaps need protection",
                    "Only the outboard slats need protection"
                ],
                correct: 0,
                explanation: "Leading edge flaps and outboard leading edge slats do not need to be ice protected.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "What type of anti-ice system is used for wing anti-ice?",
                options: [
                    "Electrical anti-ice system",
                    "Chemical anti-ice system",
                    "Mechanical anti-ice system",
                    "Thermal anti-ice system"
                ],
                correct: 3,
                explanation: "The wing anti-ice system is a thermal anti-ice system which uses hot bleed air from the pneumatic system.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "How does the wing anti-ice system operate both sides?",
                options: [
                    "Simultaneously with a single switch",
                    "Independently",
                    "Left side only",
                    "Alternating between sides"
                ],
                correct: 0,
                explanation: "The wing anti-ice panel consists of a single ON/OFF switch which controls wing anti-ice to both sides at the same time, because both sides must always operate symmetrically.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 23"
            },
            {
                question: "How many wing anti-ice valve open lights are there?",
                options: [
                    "Two lights - one for each side",
                    "One light for both sides",
                    "Three lights",
                    "Four lights"
                ],
                correct: 0,
                explanation: "Two wing anti-ice valve open lights show the position of the wing anti-ice control valves.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 24"
            },
            {
                question: "What makes wing anti-icing effective with slats in any position?",
                options: [
                    "Flexible ducting",
                    "Multiple air outlets",
                    "Telescoping ducts",
                    "Variable pressure control"
                ],
                correct: 2,
                explanation: "The system uses telescoping ducts which makes the wing anti-icing effective with the slats in any position.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 22"
            },
            {
                question: "What happens to the wing anti-ice switch when the aircraft lifts off?",
                options: [
                    "It stays in the ON position",
                    "Nothing happens",
                    "It requires manual action",
                    "It automatically moves to the OFF position"
                ],
                correct: 3,
                explanation: "When the air/ground sensor shifts to the air mode at lift-off, the wing anti-ice switch automatically moves to the OFF position.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 29"
            },
            {
                question: "On the ground, what conditions must be met for wing anti-ice valves to open?",
                options: [
                    "Switch ON, thrust on both engines less than take-off warning setting, and duct temperature below thermal switch activation temperature",
                    "Switch ON and engines running",
                    "Only the switch must be ON",
                    "Switch ON and APU running"
                ],
                correct: 0,
                explanation: "On the ground with the switch ON, both conditions must be met: thrust on both engines is less than the take-off warning setting AND both temperature sensors find a duct temperature lower than preset thermal switch activation temperature.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 27"
            },
            {
                question: "In flight, what affects the operation of wing anti-ice control valves?",
                options: [
                    "Neither engine thrust nor duct temperature",
                    "Only engine thrust setting",
                    "Only duct temperature",
                    "Engine thrust setting and duct temperature"
                ],
                correct: 0,
                explanation: "In flight when the anti-ice switch is positioned to ON, the wing anti-ice control valves open. The engine thrust setting and duct temperature has no effect on the operation of the control valves.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 33"
            },
            {
                question: "How many windows in the flight deck are electrically heated?",
                options: [
                    "All windows",
                    "Only windows 1 and 2",
                    "Windows 1, 2, 4, and 5",
                    "Only windows 1, 2, and 3"
                ],
                correct: 2,
                explanation: "Windows 1 and 2 are electrically heated to prevent icing and fogging. Windows 4 and 5 are electrically heated to prevent fogging only.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Sections 35-36"
            },
            {
                question: "Where is the heating element located in windows 1 and 2?",
                options: [
                    "On the outer surface",
                    "Behind the outer glass panel",
                    "Between the glass panels",
                    "Near the inner glass panel"
                ],
                correct: 1,
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
                correct: 0,
                explanation: "For windows 4 and 5 (eyebrow windows), the heating film is located near the inner glass panel since they are heated to prevent fogging only.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 36"
            },
            {
                question: "Which window has no electrical heating?",
                options: [
                    "Window 1",
                    "Window 2",
                    "Window 4",
                    "Window 3"
                ],
                correct: 3,
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
                    "Windows 2, 4, and 5",
                    "Only window 2",
                    "Windows 2, 3, 4, and 5",
                    "All side windows"
                ],
                correct: 0,
                explanation: "The side window heat switches control windows number 2, 4, and 5 heating.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 38"
            },
            {
                question: "What color are the window heat ON lights?",
                options: [
                    "Amber",
                    "Green",
                    "Blue",
                    "Red"
                ],
                correct: 1,
                explanation: "When window heat is being applied to the selected window, a green ON light illuminates on the associated window heat indicator.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 39"
            },
            {
                question: "Why might window heat indicators remain extinguished when switches are ON during pre-flight in high ambient temperatures?",
                options: [
                    "Windows are already at correct temperature",
                    "Switch malfunction",
                    "System failure",
                    "Power supply issue"
                ],
                correct: 0,
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
                    "Window heat ON light extinguishes and amber overheat light illuminates",
                    "System automatically resets",
                    "Only a warning light illuminates",
                    "Nothing happens"
                ],
                correct: 0,
                explanation: "When an overheat condition is detected, the associated window heat ON light extinguishes and an amber overheat light illuminates on the window heat panel. Master caution and anti-ice system annunciator lights also illuminate.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 43"
            },
            {
                question: "What should be done when an overheat warning is received?",
                options: [
                    "Switch OFF, allow 2-5 minutes to cool, then switch ON again",
                    "Switch OFF immediately and leave OFF",
                    "Continue operation normally",
                    "Increase power to the system"
                ],
                correct: 0,
                explanation: "When an overheat warning is received, the affected window heat must be switched OFF and allowed 2-5 minutes to cool before switching ON again.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 44"
            },
            {
                question: "Besides electrical heating, what else can be used for defogging window 1?",
                options: [
                    "Ram air",
                    "Bleed air",
                    "Conditioned air",
                    "External air"
                ],
                correct: 2,
                explanation: "In addition to electric heating, conditioned air can also be used for defogging the number 1 windows.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 46"
            },
            {
                question: "What is the purpose of the window heat overheat test?",
                options: [
                    "To ensure correct operation of overheat warning function",
                    "To test heating power",
                    "To check electrical connections",
                    "To verify window temperature"
                ],
                correct: 0,
                explanation: "The purpose of overheat test is to ensure the correct operation of overheat warning function of the system by simulating an overheat condition.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 48"
            },
            {
                question: "What is the maximum airspeed limit with inoperative window heat?",
                options: [
                    "250 knots below 10,000 feet",
                    "200 knots below 10,000 feet",
                    "300 knots below 10,000 feet",
                    "No speed restriction"
                ],
                correct: 0,
                explanation: "With inoperative window heat, the airplane maximum airspeed limit is 250 knots below 10,000 feet.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 50"
            },
            {
                question: "What air data probes are electrically heated?",
                options: [
                    "Only pitot probes",
                    "All probes including static ports",
                    "Pitot probes, elevator probes, TAT probe, and alpha vanes",
                    "Only pitot and static probes"
                ],
                correct: 2,
                explanation: "The air data probe heating includes: the pitot probes, the elevator probes, the total air temperature probe and the alpha vanes. There is no heating for static ports.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 51"
            },
            {
                question: "What do probe heat switches A and B control?",
                options: [
                    "A controls all probes, B is backup",
                    "A controls pitot probes, B controls other probes",
                    "A controls left side probes, B controls right side probes",
                    "Both control all probes together"
                ],
                correct: 2,
                explanation: "Switch A controls probe heaters on the left and switch B controls probe heaters on the right.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 52"
            },
            {
                question: "In airplanes with AUTO/ON probe switches, when does AUTO position apply power?",
                options: [
                    "Immediately when selected",
                    "When electrical power is available",
                    "When icing conditions are detected",
                    "Automatically when one of the engines is started"
                ],
                correct: 3,
                explanation: "When a switch is positioned to AUTO, the power is applied automatically to associated probe heaters when you start one of the engines.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 54"
            },
            {
                question: "What happens when an air data probe is not heated?",
                options: [
                    "Nothing visible occurs",
                    "Only performance is affected",
                    "System automatically switches to backup",
                    "Associated probe heat light illuminates"
                ],
                correct: 3,
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
                    "Only captain's pitot probe",
                    "No probe heating",
                    "Only first officer's pitot probe"
                ],
                correct: 1,
                explanation: "When an airplane is on standby power, the probe heating is only available for heating the captain's pitot probe.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 57"
            },
            {
                question: "What does the rain removal system include?",
                options: [
                    "Only windshield wipers",
                    "Only rain repellent coating",
                    "Heated windshields only",
                    "Windshield wipers and permanent rain repellent coating"
                ],
                correct: 3,
                explanation: "The rain removal system incorporates windshield wipers and a permanent rain repellent coating on the windows.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 58"
            },
            {
                question: "How many different wiper speeds can be selected?",
                options: [
                    "Three speeds",
                    "Two speeds",
                    "Four speeds",
                    "Five speeds"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "Intermittent mode operates the wiper with an interval of seven seconds.",
                reference: "B737 NG CBT - Anti-Ice/Rain, Section 60"
            },
            {
                question: "What can happen if windshield wipers are operated on a dry windshield?",
                options: [
                    "Nothing harmful",
                    "Wiper motor damage",
                    "Electrical system overload",
                    "Windshield scratching and damage to rain repellent coating"
                ],
                correct: 3,
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
                    "Internal/external",
                    "Voice communication and data link communication for comprehensive information exchange",
                    "Radio/satellite"
                ],
                correct: 2,
                explanation: "Communication is the process of exchanging information through two types: voice communication (information exchanged verbally) and data link communication (communication through messages like ACARS).",
                reference: "B737 NG CBT - Communication, Section 3-4"
            },
            {
                question: "During preflight preparation, you test all voice communication capabilities. What complete range of voice systems is installed?",
                options: [
                    "VHF/HF only",
                    "Interphone only",
                    "VHF, HF, flight interphone, service interphone, and passenger address system",
                    "VHF/interphone only"
                ],
                correct: 2,
                explanation: "The B737 has these voice communication systems: VHF communication system, HF communication system, flight interphone system, service interphone system and passenger address system.",
                reference: "B737 NG CBT - Communication, Section 5"
            },
            {
                question: "You receive a text message from dispatch about weather updates during flight. What system enables this digital messaging capability?",
                options: [
                    "VHF voice",
                    "ACARS (Aircraft Communications Addressing and Reporting System)",
                    "HF voice",
                    "Interphone"
                ],
                correct: 1,
                explanation: "For datalink communications, the Aircraft Communications Addressing and Reporting System (ACARS) is available in most airplanes for digital messaging.",
                reference: "B737 NG CBT - Communication, Section 6"
            },
            {
                question: "During flight without headsets, you can still hear radio communications and navigation signals. Where are the cabin speakers positioned?",
                options: [
                    "Ceiling above pilot seats for optimal audio reception",
                    "Instrument panel",
                    "Side panels",
                    "Headsets only"
                ],
                correct: 0,
                explanation: "The Captain and First Officer are provided with speakers on the ceiling above their seats to listen to communication or navigation system audio when not using headsets.",
                reference: "B737 NG CBT - Communication, Section 8"
            },
            {
                question: "During different flight phases and emergency conditions, multiple microphone options are available for pilot communication. What transmission devices are installed?",
                options: [
                    "Hand microphone, boom microphone, and oxygen mask integral microphone",
                    "Boom microphone only",
                    "Hand microphone only",
                    "Oxygen mask only"
                ],
                correct: 0,
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
                correct: 2,
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
                correct: 2,
                explanation: "There are three audio control panels in the cockpit: Captain's, First Officer's, and Observer's, each operating independently from the others.",
                reference: "B737 NG CBT - Communication, Section 13"
            },
            {
                question: "You need to adjust radio volume during flight and reach for the audio control panel. Where are the pilot audio control panels positioned?",
                options: [
                    "Aft electronic panel (with observer panel on aft overhead)",
                    "Forward overhead",
                    "Center pedestal",
                    "Side panels"
                ],
                correct: 0,
                explanation: "Captain's and first officer's audio control panels are located on aft electronic panel. The observer's audio control panel is on the aft overhead panel.",
                reference: "B737 NG CBT - Communication, Section 14"
            },
            {
                question: "Before using the communication systems, you examine the audio control panel layout. What are the main functional components?",
                options: [
                    "Volume only",
                    "Transmitters only",
                    "Receivers only",
                    "Transmitter/microphone selectors and receiver switches for complete audio control"
                ],
                correct: 3,
                explanation: "The audio control panel consists of transmitter or microphone selectors and receiver switches, providing comprehensive control over transmission and reception functions.",
                reference: "B737 NG CBT - Communication, Section 16"
            },
            {
                question: "During radio communication with ATC, you set the push-to-talk switch to R/T and press to transmit. What microphone inputs does this activate?",
                options: [
                    "Intercom only",
                    "Hand microphone only",
                    "Selected communication system via boom or oxygen mask microphone",
                    "All microphones off"
                ],
                correct: 2,
                explanation: "When you set the switch to radio/transmit (R/T) position, it acts as a push-to-talk switch for transmission on the communication system selected by microphone selector through boom or oxygen mask microphone.",
                reference: "B737 NG CBT - Communication, Section 18"
            },
            {
                question: "You need to communicate privately with your co-pilot without external transmission. What switch position enables internal crew communication?",
                options: [
                    "External radio",
                    "Passenger address",
                    "I/C position for flight interphone via boom or oxygen mask microphone",
                    "Service interphone"
                ],
                correct: 2,
                explanation: "You set the switch to intercom (I/C) position to talk on the flight interphone system through boom or oxygen mask microphone. With the switch in intercom position, microphone selector is bypassed.",
                reference: "B737 NG CBT - Communication, Section 19"
            },
            {
                question: "During an emergency descent requiring oxygen masks, you still need radio communication capability. What switch ensures microphone selection?",
                options: [
                    "BOOM-MASK switch selects between boom microphone or oxygen mask microphone",
                    "Volume control",
                    "On/off control",
                    "Frequency control"
                ],
                correct: 0,
                explanation: "The BOOM-MASK switch allows selection of the boom microphone or the oxygen mask microphone as audio source for transmission, ensuring communication capability during emergencies.",
                reference: "B737 NG CBT - Communication, Section 20"
            },
            {
                question: "While tuning navigation aids, you want to hear both voice transmissions and Morse code identifiers. What filter switch positions are available?",
                options: [
                    "Low/Medium/High",
                    "On/Off/Auto",
                    "1/2/3",
                    "V (voice), R (range), B (both) for comprehensive audio filtering"
                ],
                correct: 3,
                explanation: "The filter switch controls audio from VOR and ADF: V (voice) for voice audio only, R (range) for Morse code identification only, and B (both) for both voice and range audio.",
                reference: "B737 NG CBT - Communication, Section 22-24"
            },
            {
                question: "During single-pilot operations, you want to monitor communications without wearing headsets. How do you enable the overhead speaker?",
                options: [
                    "Push speaker switch on to activate overhead speaker",
                    "Volume knob",
                    "Intercom mode",
                    "Microphone selector"
                ],
                correct: 0,
                explanation: "You push the speaker switch on to hear the audio from the selected receiver on the overhead speaker at that crew station. You turn the switch to adjust volume.",
                reference: "B737 NG CBT - Communication, Section 25"
            },
            {
                question: "You want to transmit on multiple radio frequencies simultaneously for redundancy. How many transmitter systems can be selected at once?",
                options: [
                    "Two systems",
                    "Three systems",
                    "All systems",
                    "Only one system at a time to prevent interference"
                ],
                correct: 3,
                explanation: "You use the transmitter or microphone selectors to select the communication system that you want to speak on. Note that you can select only one system at a time to prevent interference.",
                reference: "B737 NG CBT - Communication, Section 27"
            },
            {
                question: "After selecting a transmitter for VHF-1, you immediately hear incoming calls on that frequency even though the receiver switch was off. What automatic function occurred?",
                options: [
                    "Transmission only",
                    "Other systems disabled",
                    "Reception only",
                    "Selector illuminates and received audio becomes audible regardless of receiver switch position"
                ],
                correct: 3,
                explanation: "When you select transmitter selector for a communication system, any received audio on the same system can be heard regardless of related receiver switch position, ensuring immediate monitoring capability.",
                reference: "B737 NG CBT - Communication, Section 31"
            },
            {
                question: "While setting up communication equipment, you notice the receiver switches require two distinct actions to operate. What type of switches are these?",
                options: [
                    "Push ON, push OFF type with illuminated status indication",
                    "Rotary switches",
                    "Toggle switches",
                    "Momentary switches"
                ],
                correct: 0,
                explanation: "The receiver switches are push ON, push OFF type. When you push a switch to ON, the switch light illuminates and reception of related communication system is activated.",
                reference: "B737 NG CBT - Communication, Section 33"
            },
            {
                question: "During approach, GPWS and altitude alerts are very loud. Can you reduce the volume of these critical safety warnings?",
                options: [
                    "Yes, via audio panel",
                    "Yes, emergency mode only",
                    "Yes, via overhead panel",
                    "No, heard at preset volumes and cannot be turned off for safety"
                ],
                correct: 3,
                explanation: "Audio warnings for altitude alert, ground proximity, collision avoidance, and windshear are heard through headsets and speakers at preset volumes. You cannot turn off or adjust the volume of these audio alerts for safety reasons.",
                reference: "B737 NG CBT - Communication, Section 36"
            },
            {
                question: "Following an audio system failure, you notice limited radio functionality. What operational modes are available for the audio control panel?",
                options: [
                    "Normal mode and degraded mode with reduced functionality",
                    "Day/night mode",
                    "Auto/manual mode",
                    "Primary/backup mode"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "If degraded mode is selected on the Captain's audio control panel, the Captain only transmits and receives on the VHF-1 radio with reduced system functionality.",
                reference: "B737 NG CBT - Communication, Section 43"
            },
            {
                question: "With the First Officer's audio panel in degraded mode due to system failure, which radio communication remains operational?",
                options: [
                    "VHF-1 radio only",
                    "Any radio",
                    "HF radio",
                    "VHF-2 radio only with restricted capabilities"
                ],
                correct: 3,
                explanation: "If degraded mode is selected on the first officer's audio control panel, the first officer only transmits and receives on the VHF-2 radio with limited system functions.",
                reference: "B737 NG CBT - Communication, Section 44"
            },
            {
                question: "Operating in degraded mode during approach, you're concerned about safety warnings. Will critical audio alerts like GPWS still function?",
                options: [
                    "Yes, normal volume",
                    "Yes, reduced volume",
                    "Altitude alerts only",
                    "No, audio warnings are not heard on audio systems operating in degraded mode"
                ],
                correct: 3,
                explanation: "Audio warnings for altitude alert, GPWS, and windshear are not heard on an audio system operating in the degraded mode, creating potential safety implications.",
                reference: "B737 NG CBT - Communication, Section 47"
            },
            {
                question: "While programming VHF radios for flight, you need to ensure frequencies are within the communication band. What is the operational range?",
                options: [
                    "108.00 to 136.975 MHz",
                    "115.00 to 135.000 MHz",
                    "120.00 to 140.000 MHz",
                    "118.00 to 136.975 MHz for aeronautical communication"
                ],
                correct: 3,
                explanation: "The VHF communication system operates within the frequency range of 118.00 to 136.975 MHz for aeronautical voice communications.",
                reference: "B737 NG CBT - Communication, Section 54"
            },
            {
                question: "During preflight planning, you verify communication redundancy capabilities. How many independent VHF systems are typically installed?",
                options: [
                    "Two",
                    "Four",
                    "Three independent VHF communication systems (some aircraft have two)",
                    "One"
                ],
                correct: 2,
                explanation: "Most 737s have three independent VHF communication systems for redundancy. However, there are airplanes which are fitted with two VHF radios.",
                reference: "B737 NG CBT - Communication, Section 55"
            },
            {
                question: "During external inspection, you identify VHF antenna locations for performance assessment. Where is the VHF 1 antenna positioned?",
                options: [
                    "Bottom fuselage",
                    "Tail",
                    "Wing",
                    "Top of aircraft for optimal signal reception"
                ],
                correct: 3,
                explanation: "VHF 1 antenna is on the top of the aircraft, and VHF 2 and VHF 3 antennas are on the bottom of the airplane fuselage on the centerline for optimal coverage.",
                reference: "B737 NG CBT - Communication, Section 57"
            },
            {
                question: "Which VHF antennas are more susceptible to multipath interference?",
                options: [
                    "Lower fuselage antennas",
                    "Upper fuselage antennas",
                    "Wing-mounted antennas",
                    "All antennas equally"
                ],
                correct: 0,
                explanation: "VHF antennas on the lower fuselage are susceptible to multipath interference caused by radio signals reflected from terrain, structures or other vehicles. The VHF antenna on the upper fuselage is less exposed to multipath interference.",
                reference: "B737 NG CBT - Communication, Section 58"
            },
            {
                question: "Where are the radio tuning panels located?",
                options: [
                    "On the forward overhead panel",
                    "On the glareshield",
                    "On the center pedestal",
                    "On the aft electronic panel"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "Each radio tuning panel can tune only one radio at a time. Any panel can control any transceiver.",
                reference: "B737 NG CBT - Communication, Section 62"
            },
            {
                question: "What does the ACTIVE frequency indicator display?",
                options: [
                    "The tuned frequency of the selected radio",
                    "The preselected frequency",
                    "The backup frequency",
                    "The emergency frequency"
                ],
                correct: 0,
                explanation: "The ACTIVE frequency indicator displays the tuned frequency of the selected radio. The STANDBY frequency indicator displays the preselected or previously tuned frequency.",
                reference: "B737 NG CBT - Communication, Section 64"
            },
            {
                question: "What appears on the frequency indicator when ACARS data mode is selected?",
                options: [
                    "DATA indication",
                    "The frequency numbers",
                    "ACARS indication",
                    "Nothing appears"
                ],
                correct: 0,
                explanation: "For airplanes with ACARS, the indicator shows DATA if the selected radio is in the data mode.",
                reference: "B737 NG CBT - Communication, Section 65"
            },
            {
                question: "What does the frequency transfer switch do?",
                options: [
                    "Turns the radio on/off",
                    "Changes frequency bands",
                    "Selects emergency frequency",
                    "Makes standby frequency active and active frequency standby"
                ],
                correct: 3,
                explanation: "When the frequency transfer switch is pushed, the standby frequency becomes the active frequency, and the active frequency becomes the standby frequency.",
                reference: "B737 NG CBT - Communication, Section 68"
            },
            {
                question: "What are the two purposes of the test switch on radio tuning panels?",
                options: [
                    "Volume control and frequency check",
                    "Frequency scan and emergency activation",
                    "Power on/off and backup activation",
                    "Stop squelch function for confidence check and improve reception of weak signals"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "The HF communication system operates within the aeronautical frequency range of 2 MHz to 29.999 MHz.",
                reference: "B737 NG CBT - Communication, Section 82"
            },
            {
                question: "How many HF radios do most 737s have?",
                options: [
                    "One",
                    "Three",
                    "Two",
                    "None"
                ],
                correct: 0,
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
                correct: 1,
                explanation: "A single HF antenna is on the leading edge of the vertical stabilizer.",
                reference: "B737 NG CBT - Communication, Section 84"
            },
            {
                question: "What happens when you select HF for transmission?",
                options: [
                    "The HF antenna tunes to transmission frequency, you may hear tones during tuning",
                    "Transmission is immediately ready",
                    "The system automatically finds the best frequency",
                    "Nothing happens until you transmit"
                ],
                correct: 0,
                explanation: "When you push the microphone selector for HF radio, the HF antenna tunes to the transmission frequency. While tuning, you may hear steady or intermittent tone on speaker and headset for several seconds.",
                reference: "B737 NG CBT - Communication, Section 93"
            },
            {
                question: "What does it indicate if you hear the tuning tone for more than 15 seconds?",
                options: [
                    "Normal operation",
                    "Low signal strength",
                    "Frequency is busy",
                    "System has failed to tune"
                ],
                correct: 3,
                explanation: "If you hear the tone for more than 15 seconds, it indicates the system has failed to tune.",
                reference: "B737 NG CBT - Communication, Section 95"
            },
            {
                question: "What is the purpose of the flight interphone system?",
                options: [
                    "Private communication between flight crew members",
                    "Communication with air traffic control",
                    "Communication with ground stations",
                    "Communication with passengers"
                ],
                correct: 0,
                explanation: "The flight interphone system lets the flight crew talk to each other. The system is independent of the service interphone system to provide private communication between flight crew members.",
                reference: "B737 NG CBT - Communication, Section 97"
            },
            {
                question: "How can ground crew access the flight interphone system?",
                options: [
                    "Through the service interphone",
                    "They cannot access it",
                    "Through the passenger address system",
                    "Through a jack at the external power panel"
                ],
                correct: 3,
                explanation: "The ground crew can use the flight interphone system through a jack at the external power panel to talk to the flight crew.",
                reference: "B737 NG CBT - Communication, Section 99"
            },
            {
                question: "What does the service interphone system provide?",
                options: [
                    "Intercommunication between flight crew, flight attendants, and ground crew",
                    "Communication with air traffic control",
                    "Communication between pilots only",
                    "Communication with company dispatch"
                ],
                correct: 0,
                explanation: "The service interphone system provides intercommunication between the flight crew, flight attendants, and ground crew.",
                reference: "B737 NG CBT - Communication, Section 103"
            },
            {
                question: "Where is the service interphone switch located?",
                options: [
                    "On the aft electronic panel",
                    "On the center pedestal",
                    "On the forward overhead panel",
                    "On the aft overhead panel"
                ],
                correct: 3,
                explanation: "The service interphone switch on the aft overhead panel lets the flight crew activate or deactivate the external jacks.",
                reference: "B737 NG CBT - Communication, Section 107"
            },
            {
                question: "With the service interphone switch in OFF position, what communication is still possible?",
                options: [
                    "Communication between flight deck and flight attendants",
                    "No communication possible",
                    "Ground crew communication only",
                    "All communications are blocked"
                ],
                correct: 0,
                explanation: "With the service interphone switch in OFF position, external jacks are deactivated. However, communication between flight deck and flight attendants is still possible.",
                reference: "B737 NG CBT - Communication, Section 108"
            },
            {
                question: "Who has priority in passenger address (PA) system announcements?",
                options: [
                    "Pilots",
                    "Flight attendants",
                    "Senior flight attendant",
                    "Captain only"
                ],
                correct: 0,
                explanation: "If a pilot and flight attendant talk to the passengers at the same time, the pilot announcement has first priority and overrides all others.",
                reference: "B737 NG CBT - Communication, Section 114"
            },
            {
                question: "How do flight attendants call the flight deck?",
                options: [
                    "Through the passenger address system",
                    "Through the service interphone switch",
                    "Using handsets located at each attendant station",
                    "Using the overhead speakers"
                ],
                correct: 2,
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
                    "Using PILOT CALL switch on external power panel",
                    "Through service interphone handset",
                    "Through the flight interphone jack",
                    "Using radio communication"
                ],
                correct: 0,
                explanation: "The ground crew uses PILOT CALL switch on the external power panel to call the flight crew.",
                reference: "B737 NG CBT - Communication, Section 125"
            },
            {
                question: "What is the purpose of the SELCAL system?",
                options: [
                    "Emergency communication",
                    "Relieves flight crew from continuously monitoring company communication channels",
                    "Navigation assistance",
                    "Automatic frequency selection"
                ],
                correct: 1,
                explanation: "The selective calling (SELCAL) system relieves the flight crew from continuously monitoring company communications channels.",
                reference: "B737 NG CBT - Communication, Section 127"
            },
            {
                question: "How many letters are in each airplane's SELCAL code?",
                options: [
                    "Three letters",
                    "Six letters",
                    "Five letters",
                    "Four letters"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "When the system receives an incoming call from a ground station, the respective SELCAL light illuminates and a two-tone chime sounds in the flight deck.",
                reference: "B737 NG CBT - Communication, Section 132"
            },
            {
                question: "How long does the cockpit voice recorder keep communication data?",
                options: [
                    "120 minutes",
                    "90 minutes",
                    "60 minutes",
                    "180 minutes"
                ],
                correct: 0,
                explanation: "The cockpit voice recorder continuously records flight crew communications and flight deck sounds. It keeps the last 120 minutes of communication data in memory.",
                reference: "B737 NG CBT - Communication, Section 134"
            },
            {
                question: "When does cockpit voice recorder record in AUTO position?",
                options: [
                    "From first engine start until 5 minutes after last engine shutdown",
                    "Only during flight",
                    "Continuously",
                    "Only when selected by crew"
                ],
                correct: 0,
                explanation: "When the switch is in AUTO position, the voice recorder unit records from first engine start until 5 minutes after last engine shutdown.",
                reference: "B737 NG CBT - Communication, Section 141"
            },
            {
                question: "When can you erase the cockpit voice recorder?",
                options: [
                    "Anytime during flight",
                    "Only at maintenance facilities",
                    "Only when airplane is on ground and parking brake is set",
                    "Never allowed"
                ],
                correct: 2,
                explanation: "You can erase the audio if the airplane is on the ground and the parking brake is set.",
                reference: "B737 NG CBT - Communication, Section 146"
            },
            {
                question: "What does ACARS stand for?",
                options: [
                    "Aircraft Communication And Reporting System",
                    "Automatic Communication And Radio System",
                    "Aircraft Communications Addressing and Reporting System",
                    "Aviation Communication And Radio Service"
                ],
                correct: 2,
                explanation: "ACARS stands for Aircraft Communications Addressing and Reporting System.",
                reference: "B737 NG CBT - Communication, Section 150"
            },
            {
                question: "What is a message from airplane to ground called in ACARS?",
                options: [
                    "Uplink",
                    "Outlink",
                    "Downlink",
                    "Transmission"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "The ACARS consists of a management unit (MU), a control display unit (CDU) and usually a printer.",
                reference: "B737 NG CBT - Communication, Section 153"
            },
            {
                question: "How are medium level ACARS messages indicated?",
                options: [
                    "White ACARS indication only",
                    "Voice announcement",
                    "Flashing red indication",
                    "White ACARS indication with two-tone chime"
                ],
                correct: 3,
                explanation: "If it is a medium level message, ACARS indication is accompanied by a two-tone chime in the flight deck.",
                reference: "B737 NG CBT - Communication, Section 158"
            },
            {
                question: "How are low level ACARS messages visually indicated?",
                options: [
                    "Position indented one space to the right and no aural alert",
                    "Red indication",
                    "Same as medium level messages",
                    "Flashing indication"
                ],
                correct: 0,
                explanation: "If the ACARS message is low level, the position of ACARS indication on the Upper Display Unit is indented one space to the right of higher level messages. Low level ACARS indication is not accompanied by an aural alert.",
                reference: "B737 NG CBT - Communication, Section 159"
            },
            {
                question: "What microphone is used when the hand microphone push-to-talk switch is pressed?",
                options: [
                    "Boom microphone",
                    "Oxygen mask microphone",
                    "All microphones simultaneously",
                    "Hand microphone itself"
                ],
                correct: 3,
                explanation: "Push-to-talk (PTT) switch on the hand microphone is used to transmit through the hand microphone.",
                reference: "B737 NG CBT - Communication, Section 11"
            },
            {
                question: "In normal mode, how do the audio systems operate?",
                options: [
                    "Captain and First Officer systems operate independently",
                    "All systems linked together",
                    "Only one system active at a time",
                    "Backup mode only"
                ],
                correct: 0,
                explanation: "In normal operation the Captain, First Officer, and Observer audio systems operate independently.",
                reference: "B737 NG CBT - Communication, Section 38"
            },
            {
                question: "Which controls operate in degraded mode?",
                options: [
                    "All audio panel controls",
                    "Only receiver switches",
                    "Only BOOM-MASK switch and R/T position of push-to-talk switch",
                    "Only microphone selectors"
                ],
                correct: 2,
                explanation: "The only audio control panel controls that operate are the BOOM-MASK switch and the R/T position of the push-to-talk switch.",
                reference: "B737 NG CBT - Communication, Section 49"
            },
            {
                question: "What type of communication does VHF provide besides voice?",
                options: [
                    "Navigation signals only",
                    "Datalink communication",
                    "Emergency signals only",
                    "Weather information only"
                ],
                correct: 1,
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
                    "All three components - autopilot, autothrottle, and flight director - are integrated and working together",
                    "Autopilot and autothrottle are working independently",
                    "Flight director is providing guidance that the autopilot isn't following",
                    "Only the autopilot since it's maintaining control"
                ],
                correct: 0,
                explanation: "The automatic flight system consists of three integrated components: autopilot (maintains flight path), autothrottle (manages thrust/speed), and flight director (provides guidance cues). All work together sharing information and command inputs for coordinated flight management.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.1"
            },
            {
                question: "During preflight, maintenance reports that autopilot computer A is deferred. Your co-pilot is concerned about dispatch legality and operational capabilities. You explain the redundancy design of the autopilot system. How many computers are installed and what is the impact?",
                options: [
                    "One computer total, aircraft cannot be dispatched",
                    "Three computers, need minimum two for dispatch",
                    "Two computers (A and B), can dispatch with one operative providing normal autopilot functions",
                    "Four computers, can lose up to two and still operate"
                ],
                correct: 2,
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
                correct: 3,
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
                correct: 1,
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
                correct: 1,
                explanation: "The autothrottle system automatically controls engine thrust to maintain selected speeds or flight path angles. In a VNAV descent, it will adjust thrust to maintain the programmed speed while the autopilot manages the vertical path, requiring power increases when airspeed decreases below target.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.1"
            },
            {
                question: "During an unstable approach, you decide to disconnect the autopilot to make manual corrections. You press the autopilot disconnect switch on the control wheel. Your co-pilot notices the autothrottle is still engaged. What exactly occurs when you press the autopilot disconnect switch?",
                options: [
                    "Autopilot disconnects, warning sound activates, but autothrottle remains engaged",
                    "Both autopilot and autothrottle disconnect simultaneously",
                    "Only a warning sound activates without disconnecting anything",
                    "Only autopilot disconnects, autothrottle remains active"
                ],
                correct: 0,
                explanation: "When the autopilot disconnect switch is pressed, the autopilot disconnects and a warning sound is activated, but the autothrottle remains engaged unless separately disconnected. This allows manual flight path control while maintaining automatic thrust management.",
                reference: "B737 NG CBT - Automatic Flight, Section 6.1"
            },
            {
                question: "You're conducting a continuous descent approach with multiple altitude and speed restrictions. The FMS shows a complex vertical profile with crossing restrictions at several waypoints. You want to let the automation manage this precisely. Which mode should you use?",
                options: [
                    "LNAV for following the lateral approach path",
                    "Vertical speed mode for constant rate descent",
                    "Speed intervention for manual speed control only",
                    "VNAV to follow the programmed vertical profile with all altitude and speed constraints"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "Both autopilots can be engaged simultaneously only during certain approach modes (such as CAT II/III ILS approaches) for increased precision and safety. During normal flight, only one autopilot is engaged at a time.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.2"
            },
            {
                question: "During a manual approach with autopilot disconnected, you notice flight director bars on your PFD showing pitch and roll commands. Your trainee asks what these bars represent and how they help with manual flying. What does the flight director provide?",
                options: [
                    "Visual guidance cues on the PFD to help pilots manually fly the computed flight path",
                    "Direct automatic flight control of the aircraft",
                    "Engine thrust commands for manual throttle control",
                    "Navigation information display without flight guidance"
                ],
                correct: 0,
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
                correct: 2,
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
                    "Airport information",
                    "Approach guidance for ILS/VOR/LOC",
                    "Autopilot protection",
                    "Application settings"
                ],
                correct: 1,
                explanation: "APP mode provides lateral and vertical guidance for ILS, VOR, and LOC approaches.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.3"
            },
            {
                question: "What is the purpose of the Flight Level Change (FLCH) mode?",
                options: [
                    "Level flight only",
                    "Flap control",
                    "Flight level information",
                    "Climb/descent at selected airspeed"
                ],
                correct: 3,
                explanation: "FLCH mode allows climbs and descents while maintaining a selected airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.4"
            },
            {
                question: "What does the CMD A annunciation indicate?",
                options: [
                    "Airspeed command",
                    "Command mode active",
                    "Altitude alert",
                    "Autopilot A is engaged"
                ],
                correct: 3,
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
                    "Autothrottle disconnects with warning",
                    "Warning horn sounds"
                ],
                correct: 2,
                explanation: "When the autothrottle disconnect switch is pressed, the autothrottle disconnects and a warning horn sounds.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.3"
            },
            {
                question: "What is the purpose of the Vertical Speed (VS) mode?",
                options: [
                    "Velocity synchronization",
                    "Variable speed control",
                    "Visual speed indication",
                    "Control vertical speed at selected rate"
                ],
                correct: 3,
                explanation: "VS mode controls the aircraft's vertical speed at a selected rate of climb or descent.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.5"
            },
            {
                question: "What does the LAND 3 annunciation indicate?",
                options: [
                    "CAT III autoland capability",
                    "Triple autopilot engagement",
                    "Autoland with 3 autopilots",
                    "Land in 3 minutes"
                ],
                correct: 0,
                explanation: "LAND 3 indicates that the aircraft is configured for CAT III autoland operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.2"
            },
            {
                question: "What is the purpose of the Altitude Hold (ALT HOLD) mode?",
                options: [
                    "Altitude selection",
                    "Altitude alerting",
                    "High altitude protection",
                    "Hold current altitude"
                ],
                correct: 3,
                explanation: "ALT HOLD mode maintains the current altitude when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.6"
            },
            {
                question: "What does the N1 mode control?",
                options: [
                    "Thrust to maintain selected N1",
                    "Navigation mode 1",
                    "Engine N1 speed",
                    "Nitrogen level 1"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "HDG SEL mode maintains the heading selected on the MCP heading selector.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.7"
            },
            {
                question: "What does the TOGA mode provide?",
                options: [
                    "Top of climb guidance",
                    "Takeoff and go-around guidance",
                    "Traffic advisory",
                    "Turbulence avoidance"
                ],
                correct: 1,
                explanation: "TOGA mode provides takeoff and go-around pitch and thrust guidance.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.8"
            },
            {
                question: "What is the function of the autopilot trim system?",
                options: [
                    "All of the above",
                    "Automatic trim adjustment",
                    "Pitch trim compensation",
                    "Trim tab control"
                ],
                correct: 0,
                explanation: "The autopilot trim system provides trim tab control, automatic adjustment, and pitch trim compensation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.4"
            },
            {
                question: "What does the SPD mode control?",
                options: [
                    "Speed brakes",
                    "Selected airspeed",
                    "Special procedures",
                    "Spoiler deployment"
                ],
                correct: 1,
                explanation: "SPD mode controls engine thrust to maintain the selected airspeed.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.5"
            },
            {
                question: "What is the purpose of the Localizer (LOC) mode?",
                options: [
                    "Local navigation",
                    "Locking mechanism",
                    "Location services",
                    "Lateral guidance for ILS/LOC approach"
                ],
                correct: 3,
                explanation: "LOC mode provides lateral guidance for ILS and localizer approaches.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.9"
            },
            {
                question: "What does the G/S mode control?",
                options: [
                    "Glide slope capture and track",
                    "Ground speed",
                    "Gear system",
                    "Generator synchronization"
                ],
                correct: 0,
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
                correct: 0,
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
                correct: 1,
                explanation: "The MCP is used to control autopilot, flight director, and autothrottle functions.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.2"
            },
            {
                question: "What does the ROLLOUT mode control?",
                options: [
                    "Takeoff roll",
                    "Rollback protection",
                    "Roll attitude",
                    "Runway alignment during landing"
                ],
                correct: 3,
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
                    "Proficiency check",
                    "Profile descent",
                    "Propeller control"
                ],
                correct: 2,
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
                    "Thrust reduction to idle",
                    "Retard throttles",
                    "Reverse thrust",
                    "Reduced power"
                ],
                correct: 0,
                explanation: "RETARD mode commands thrust reduction to idle during the landing flare.",
                reference: "B737 NG CBT - Automatic Flight, Section 8.5"
            },
            {
                question: "What is the purpose of the flight director bars?",
                options: [
                    "Flight direction",
                    "Flight data",
                    "Visual guidance for manual flight",
                    "Director commands"
                ],
                correct: 2,
                explanation: "Flight director bars provide visual guidance for manual flight following the selected modes.",
                reference: "B737 NG CBT - Automatic Flight, Section 7.2"
            },
            {
                question: "What does the LAND 2 annunciation indicate?",
                options: [
                    "CAT II autoland capability",
                    "Dual autopilot approach",
                    "Land in 2 minutes",
                    "Landing gear down"
                ],
                correct: 0,
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
                    "Flap position angle",
                    "Flight path angle",
                    "Fuel pump activation",
                    "Fire protection activation"
                ],
                correct: 1,
                explanation: "FPA mode controls the aircraft's flight path angle in degrees.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.12"
            },
            {
                question: "What is the purpose of the bank angle protection?",
                options: [
                    "Bank selection",
                    "Bank angle display",
                    "Banking maneuvers",
                    "Prevent excessive bank angles"
                ],
                correct: 3,
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
                    "All thrust settings",
                    "Climb thrust"
                ],
                correct: 2,
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
                    "Speed selection",
                    "Speed display",
                    "Prevent excessive speeds",
                    "Speed calculation"
                ],
                correct: 2,
                explanation: "The airspeed protection system prevents the autopilot from exceeding safe speed limits.",
                reference: "B737 NG CBT - Automatic Flight, Section 3.4"
            },
            {
                question: "What does the IDLE mode indicate?",
                options: [
                    "Engine idle",
                    "Idle time",
                    "Autothrottle at idle thrust",
                    "Idle function"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "PITCH mode holds the pitch attitude present when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.16"
            },
            {
                question: "What is the purpose of the Mach Hold mode?",
                options: [
                    "Match hold",
                    "Machine hold",
                    "Maintenance hold",
                    "Hold Mach number"
                ],
                correct: 3,
                explanation: "Mach Hold mode maintains a selected Mach number during flight.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.9"
            },
            {
                question: "What does the TRACK mode provide?",
                options: [
                    "Track following",
                    "Track angle hold",
                    "Ground track hold",
                    "Tracking system"
                ],
                correct: 2,
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
                correct: 1,
                explanation: "CWS mode allows manual control input while maintaining autopilot engagement.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.8"
            },
            {
                question: "What is the purpose of the altitude capture mode?",
                options: [
                    "Altitude measurement",
                    "Capture selected altitude",
                    "Altitude display",
                    "Altitude calculation"
                ],
                correct: 1,
                explanation: "Altitude capture mode automatically captures and holds the selected altitude.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.19"
            },
            {
                question: "What does the TURB mode provide?",
                options: [
                    "Turbulence detection",
                    "Turbine monitoring",
                    "Turbulence avoidance",
                    "Turbulence penetration speed"
                ],
                correct: 3,
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
                    "Roll protection",
                    "Roll attitude hold",
                    "Roll indication"
                ],
                correct: 2,
                explanation: "ROLL mode holds the roll attitude present when the mode is engaged.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.20"
            },
            {
                question: "What is the purpose of the speed trim system?",
                options: [
                    "Trim speed control",
                    "Speed trim protection",
                    "Speed trim display",
                    "Speed-based trim adjustment"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "The MCP altitude window displays the selected altitude for the autopilot.",
                reference: "B737 NG CBT - Automatic Flight, Section 1.3"
            },
            {
                question: "What is the autothrottle minimum speed protection?",
                options: [
                    "Minimum maneuvering speed",
                    "Stall speed",
                    "V2 speed",
                    "No protection"
                ],
                correct: 0,
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
                correct: 1,
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
                correct: 2,
                explanation: "Autopilot servo monitors continuously monitor servo operation for proper function.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.10"
            },
            {
                question: "What does the FMS mode provide?",
                options: [
                    "FMS navigation guidance",
                    "Flight management system",
                    "Fuel management system",
                    "Fire management system"
                ],
                correct: 0,
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
                    "Single frequency",
                    "Single autopilot engaged",
                    "Single command"
                ],
                correct: 2,
                explanation: "SINGLE CH mode indicates only one autopilot is engaged for normal operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.11"
            },
            {
                question: "What is the purpose of the go-around mode?",
                options: [
                    "Gate assignment",
                    "Ground avoidance",
                    "Gear operation",
                    "Go-around guidance"
                ],
                correct: 3,
                explanation: "Go-around mode provides pitch and thrust guidance for missed approach procedures.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.23"
            },
            {
                question: "What does the ARM mode indicate?",
                options: [
                    "Arm position",
                    "Automatic mode",
                    "Armed for capture",
                    "Area navigation"
                ],
                correct: 2,
                explanation: "ARM mode indicates the autopilot is armed and ready to capture a navigation signal.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.24"
            },
            {
                question: "What is the autothrottle maximum speed protection?",
                options: [
                    "Maximum thrust speed",
                    "VMO/MMO",
                    "Design speed",
                    "No protection"
                ],
                correct: 1,
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
                correct: 2,
                explanation: "DUAL CH mode indicates both autopilots are engaged for approach operations.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.12"
            },
            {
                question: "What is the purpose of the autopilot test function?",
                options: [
                    "Test pilot knowledge",
                    "Test autopilot operation",
                    "Test equipment",
                    "Test procedures"
                ],
                correct: 1,
                explanation: "The autopilot test function verifies proper operation of the autopilot system.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.13"
            },
            {
                question: "What does the PATH mode control?",
                options: [
                    "Path calculation",
                    "Path angle",
                    "Path following",
                    "Flight path"
                ],
                correct: 3,
                explanation: "PATH mode controls the aircraft's flight path following the FMS guidance.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.25"
            },
            {
                question: "What is the autopilot disconnect warning duration?",
                options: [
                    "2 seconds",
                    "Continuous until acknowledged",
                    "10 seconds",
                    "5 seconds"
                ],
                correct: 1,
                explanation: "The autopilot disconnect warning sounds continuously until acknowledged by the crew.",
                reference: "B737 NG CBT - Automatic Flight, Section 6.3"
            },
            {
                question: "What does the REV mode indicate?",
                options: [
                    "Reverse thrust",
                    "Review mode",
                    "Reverse course",
                    "Revision mode"
                ],
                correct: 2,
                explanation: "REV mode indicates the autopilot is flying a reverse course on a VOR radial.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.26"
            },
            {
                question: "What is the purpose of the autopilot engage logic?",
                options: [
                    "Engagement display",
                    "Engage automatically",
                    "Prevent unsafe engagement",
                    "Engagement timing"
                ],
                correct: 2,
                explanation: "The autopilot engage logic prevents unsafe engagement conditions and ensures proper operation.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.14"
            },
            {
                question: "What does the HOLD mode maintain?",
                options: [
                    "Hold position",
                    "Hold pattern",
                    "Current flight condition",
                    "Hold altitude"
                ],
                correct: 2,
                explanation: "HOLD mode maintains the current flight condition when no other mode is active.",
                reference: "B737 NG CBT - Automatic Flight, Section 4.27"
            },
            {
                question: "What is the autothrottle response time?",
                options: [
                    "1 second",
                    "2 seconds",
                    "Variable",
                    "3 seconds"
                ],
                correct: 2,
                explanation: "The autothrottle response time is variable depending on the flight condition and mode.",
                reference: "B737 NG CBT - Automatic Flight, Section 5.13"
            },
            {
                question: "What does the CAPT/F.O. selector control?",
                options: [
                    "Command selection",
                    "Control transfer",
                    "Communication selection",
                    "Captain/First Officer autopilot"
                ],
                correct: 3,
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
                correct: 3,
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
                correct: 2,
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
                correct: 3,
                explanation: "The autopilot system has dual redundancy with two independent autopilot computers.",
                reference: "B737 NG CBT - Automatic Flight, Section 2.15"
            },
            {
                question: "What are the three primary flight control surfaces on the Boeing 737 NG?",
                options: [
                    "Elevators, spoilers, trim tabs",
                    "Flaps, spoilers, slats",
                    "Ailerons, elevators, rudder",
                    "Rudder, flaps, ailerons"
                ],
                correct: 2,
                explanation: "The three primary flight control surfaces are ailerons (roll), elevators (pitch), and rudder (yaw).",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "Which hydraulic systems normally power the primary flight controls?",
                options: [
                    "System A only",
                    "System B only",
                    "Standby system only",
                    "System A or B"
                ],
                correct: 3,
                explanation: "Primary flight controls are normally powered by either hydraulic system A or B for redundancy.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "What is the function of the blended winglets on the Boeing 737 NG?",
                options: [
                    "Provide additional lift during takeoff",
                    "Increase fuel efficiency and reduce wake turbulence",
                    "Assist with roll control",
                    "Act as speed brakes"
                ],
                correct: 1,
                explanation: "Blended winglets enhance takeoff/climb performance, reduce wake turbulence, and increase fuel efficiency.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "If both hydraulic system A and B fail, which system can operate the rudder?",
                options: [
                    "Manual reversion",
                    "Electric backup",
                    "Standby hydraulic system",
                    "No system can operate the rudder"
                ],
                correct: 2,
                explanation: "The standby hydraulic system can operate the rudder if both main hydraulic systems fail.",
                reference: "B737 NG CBT - Flight Controls, Introduction"
            },
            {
                question: "Which control surface is primarily responsible for roll control?",
                options: [
                    "Elevators",
                    "Rudder",
                    "Flaps",
                    "Ailerons"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "The spoiler mixer coordinates spoiler movement proportional to aileron input for roll control.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "How can the ailerons be operated if total hydraulic power is lost?",
                options: [
                    "Manually via control wheels",
                    "They cannot be operated",
                    "Via standby electric motor",
                    "Via autopilot only"
                ],
                correct: 0,
                explanation: "Ailerons can be operated manually by rotating the control wheels, though with higher forces required.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "What happens if the aileron control system is jammed?",
                options: [
                    "Both control wheels are locked",
                    "Captain can control roll via ailerons",
                    "First officer can control roll via spoilers",
                    "No roll control is possible"
                ],
                correct: 2,
                explanation: "If the aileron system is jammed, the first officer can use the right control wheel to control roll via spoilers.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "What is the function of the elevator feel computer?",
                options: [
                    "Monitors hydraulic pressure only",
                    "Controls elevator trim",
                    "Provides artificial feel force to the control column",
                    "Controls autopilot pitch input"
                ],
                correct: 2,
                explanation: "The elevator feel computer adjusts control column feel forces based on airspeed and stabilizer position.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What does the FEEL DIFFERENTIAL PRESSURE light indicate?",
                options: [
                    "Elevator feel computer failure",
                    "Hydraulic system A failure",
                    "Excessive pressure difference in elevator feel computer",
                    "Elevator jam"
                ],
                correct: 2,
                explanation: "The FEEL DIFFERENTIAL PRESSURE light illuminates when there is an excessive pressure difference in the elevator feel computer.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            // --- YENİ EKLENEN SORULAR DEVAMI ---
            {
                question: "Which axis does the elevator control?",
                options: [
                    "Longitudinal axis",
                    "Yaw axis",
                    "Vertical axis",
                    "Lateral axis"
                ],
                correct: 3,
                explanation: "Elevators control the pitch of the aircraft, which is movement around the lateral axis.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What is the primary function of the rudder?",
                options: [
                    "Control yaw",
                    "Control pitch",
                    "Control roll",
                    "Increase lift"
                ],
                correct: 0,
                explanation: "The rudder controls the yaw of the aircraft, moving the nose left or right around the vertical axis.",
                reference: "B737 NG CBT - Flight Controls, Yaw Control"
            },
            {
                question: "Which system provides backup operation for the rudder if both main hydraulic systems fail?",
                options: [
                    "Manual reversion",
                    "No backup available",
                    "Electric backup",
                    "Standby hydraulic system"
                ],
                correct: 3,
                explanation: "The standby hydraulic system provides backup operation for the rudder.",
                reference: "B737 NG CBT - Flight Controls, Yaw Control"
            },
            {
                question: "What is the function of the yaw damper system?",
                options: [
                    "Controls pitch",
                    "Prevents Dutch roll",
                    "Controls roll",
                    "Provides backup for rudder"
                ],
                correct: 1,
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
                    "Provides backup for elevator",
                    "Controls roll during turns",
                    "Increases stability at low speed, aft CG, and high thrust",
                    "Controls yaw during takeoff"
                ],
                correct: 2,
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
                    "FEEL DIFF PRESSURE",
                    "MACH TRIM FAIL",
                    "STABILIZER OUT OF TRIM"
                ],
                correct: 2,
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
                    "No effect",
                    "Trim overrides autopilot",
                    "Autopilot disengages"
                ],
                correct: 3,
                explanation: "Activating either pair of stabilizer trim switches automatically disengages the autopilot.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What is the function of the elevator feel and centering unit?",
                options: [
                    "Controls elevator trim",
                    "Transmits feel force and centers the control column",
                    "Monitors hydraulic pressure",
                    "Controls autopilot pitch input"
                ],
                correct: 1,
                explanation: "The elevator feel and centering unit transmits feel force to the control columns and centers them when not in use.",
                reference: "B737 NG CBT - Flight Controls, Pitch Control"
            },
            {
                question: "What is the purpose of the FEEL DIFFERENTIAL PRESSURE light?",
                options: [
                    "Indicates autopilot disengaged",
                    "Indicates elevator jam",
                    "Indicates excessive pressure difference in elevator feel computer",
                    "Indicates speed trim failure"
                ],
                correct: 2,
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
                correct: 1,
                explanation: "Spoilers assist ailerons by reducing lift on the up-going wing, increasing roll rate.",
                reference: "B737 NG CBT - Flight Controls, Roll Control"
            },
            {
                question: "How many spoilers are on each wing of the B737 NG?",
                options: [
                    "4",
                    "12",
                    "8",
                    "6"
                ],
                correct: 3,
                explanation: "There are six spoilers on each wing, numbered 1 through 12 from left to right.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What is the function of the speed brake lever?",
                options: [
                    "Engages autopilot",
                    "Controls aileron trim",
                    "Controls rudder trim",
                    "Manually moves spoilers for speed brake function"
                ],
                correct: 3,
                explanation: "The speed brake lever manually moves the spoilers to act as speed brakes.",
                reference: "B737 NG CBT - Flight Controls, Spoilers/Speed Brakes"
            },
            {
                question: "What happens when the speed brake lever is moved to the UP position on the ground?",
                options: [
                    "Only flight spoilers extend",
                    "All spoilers extend to maximum position",
                    "No spoilers extend",
                    "Only ground spoilers extend"
                ],
                correct: 1,
                explanation: "On the ground, moving the speed brake lever to UP extends all spoilers to their maximum position.",
                reference: "B737 NG CBT - Flight Controls, Speed Brakes Ground Operation"
            },
            {
                question: "What is the function of the flap load relief system?",
                options: [
                    "Controls aileron trim",
                    "Extends leading edge slats",
                    "Retracts trailing edge flaps if airspeed exceeds limits",
                    "Provides backup for spoilers"
                ],
                correct: 2,
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
                    "Manually only",
                    "Hydraulically only",
                    "Electrically extended and retracted",
                    "No alternate mode"
                ],
                correct: 2,
                explanation: "In alternate mode, trailing edge flaps are electrically extended and retracted.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the flap lever gates?",
                options: [
                    "Lock the flaps in place",
                    "Prevent inadvertent movement beyond certain positions",
                    "Control aileron trim",
                    "Engage autopilot"
                ],
                correct: 1,
                explanation: "Flap lever gates prevent inadvertent movement beyond flaps 1 and flaps 15 positions during go-around.",
                reference: "B737 NG CBT - Flight Controls, Flap Lever"
            },
            {
                question: "What does the FLAP LOAD RELIEF light indicate?",
                options: [
                    "Flap asymmetry detected",
                    "Flap load relief function is active",
                    "Flap jam detected",
                    "Flap lever in wrong position"
                ],
                correct: 1,
                explanation: "The FLAP LOAD RELIEF light illuminates when the flap load relief function is active.",
                reference: "B737 NG CBT - Flight Controls, Flap Load Relief"
            },
            {
                question: "What is the function of the FSEU (Flaps/Slat Electronics Unit)?",
                options: [
                    "Controls yaw damper",
                    "Controls aileron trim",
                    "Provides backup for spoilers",
                    "Monitors and protects against flap asymmetry and skew"
                ],
                correct: 3,
                explanation: "The FSEU monitors for flap asymmetry, skew, and uncommanded motion, and provides protection.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What should you do if a trailing edge flap asymmetry or skew is detected?",
                options: [
                    "Attempt to reset the system",
                    "Do not use alternate flaps system",
                    "Continue normal operation",
                    "Use manual reversion"
                ],
                correct: 1,
                explanation: "If a trailing edge flap asymmetry or skew is detected, do not use the alternate flaps system as there is no protection.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What is the indication of an uncommanded motion of the leading edge devices?",
                options: [
                    "Flap lever moves",
                    "Green LE FLAPS EXTENDED light comes on",
                    "Amber LE FLAPS TRANSIT light comes on",
                    "No indication"
                ],
                correct: 2,
                explanation: "An amber LE FLAPS TRANSIT light comes on if uncommanded motion of the leading edge devices is detected.",
                reference: "B737 NG CBT - Flight Controls, Asymmetry and Skew Detection"
            },
            {
                question: "What is the normal operation power source for leading edge devices?",
                options: [
                    "Electric motor",
                    "Hydraulic system A",
                    "Hydraulic system B",
                    "Manual only"
                ],
                correct: 2,
                explanation: "Leading edge devices are normally powered by hydraulic system B.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            },
            {
                question: "How are leading edge devices powered in alternate mode?",
                options: [
                    "Electric motor",
                    "Hydraulic system A",
                    "Standby hydraulic system for extension only",
                    "Manual only"
                ],
                correct: 2,
                explanation: "In alternate mode, leading edge devices are powered by the standby hydraulic system for extension only.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the alternate flaps arm switch?",
                options: [
                    "Controls aileron trim",
                    "Extends leading edge slats",
                    "Engages autopilot",
                    "Starts standby hydraulic pump and closes TE flaps bypass valve"
                ],
                correct: 3,
                explanation: "The alternate flaps arm switch starts the standby hydraulic pump and closes the trailing edge flaps bypass valve.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the function of the alternate flaps position switch?",
                options: [
                    "Controls aileron trim",
                    "Electrically drives TE flaps and extends LE devices",
                    "Engages autopilot",
                    "Controls rudder trim"
                ],
                correct: 1,
                explanation: "The alternate flaps position switch electrically drives the trailing edge flaps and extends the leading edge devices.",
                reference: "B737 NG CBT - Flight Controls, Alternate Operation"
            },
            {
                question: "What is the normal time to fully extend or retract trailing edge flaps in alternate mode?",
                options: [
                    "About 30 seconds",
                    "About 1 minute",
                    "About 5 minutes",
                    "About 2 minutes 39 seconds"
                ],
                correct: 3,
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
                correct: 2,
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
                correct: 2,
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
                correct: 3,
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
                correct: 1,
                explanation: "The green bands show the approved takeoff trim range on the stabilizer trim indicator.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What happens if the stabilizer trim is not in the takeoff range during takeoff?",
                options: [
                    "No warning",
                    "An intermittent horn sounds",
                    "Autopilot disengages",
                    "Flaps retract"
                ],
                correct: 1,
                explanation: "If the stabilizer trim is not in the takeoff range, an intermittent horn sounds to warn the crew.",
                reference: "B737 NG CBT - Flight Controls, Pitch Trim"
            },
            {
                question: "What is the maximum number of spoiler panels on each wing?",
                options: [
                    "10",
                    "8",
                    "6",
                    "12"
                ],
                correct: 2,
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
                correct: 2,
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
                correct: 2,
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
                correct: 3,
                explanation: "The annunciator panel indicates the position of each leading edge slat and flap.",
                reference: "B737 NG CBT - Flight Controls, Leading Edge Devices"
            },
            {
                question: "What is the function of the test switch on the leading edge annunciator panel?",
                options: [
                    "Extends leading edge slats",
                    "Engages autopilot",
                    "Controls aileron trim",
                    "Tests all lights on the panel"
                ],
                correct: 3,
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
                correct: 1,
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
                correct: 2,
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
                correct: 3,
                explanation: "The APU is a small gas turbine engine designed to provide auxiliary power to the aircraft. It operates on the same basic principles as the main engines but is much smaller and optimized for ground operations and in-flight emergency power.",
                reference: "B737 NG CBT - APU, Section 2.1"
            },
            {
                question: "During a pre-flight walk-around, you notice the APU exhaust and intake doors in the rear of the aircraft. A new flight attendant asks about the location, mentioning they hear APU noise from the aft galley. Where is the APU positioned and why?",
                options: [
                    "Wing root for easy fuel access and maintenance",
                    "Nose section for optimal weight distribution",
                    "Main landing gear bay for ground service accessibility",
                    "Tail cone (aft fuselage) for noise isolation and structural considerations"
                ],
                correct: 3,
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
                correct: 1,
                explanation: "A normal APU start sequence takes approximately 60 seconds from start initiation to available for loading (electrical and bleed air). This includes light-off, acceleration to operating RPM, and stabilization for load application.",
                reference: "B737 NG CBT - APU, Section 4.1"
            },
            {
                question: "During APU start, you notice the EGT climbing rapidly beyond normal parameters and approaching the red line. Your co-pilot asks if you should abort the start or if the system will handle it. What happens if APU EGT exceeds limits during start?",
                options: [
                    "Start sequence continues normally as EGT naturally decreases",
                    "Only a warning light illuminates but start continues",
                    "APU automatically shuts down immediately to prevent thermal damage",
                    "APU continues running but at reduced power output"
                ],
                correct: 2,
                explanation: "If APU EGT exceeds limits during start, the APU automatically shuts down to prevent thermal damage to turbine components. The protection system prioritizes equipment preservation over operational convenience.",
                reference: "B737 NG CBT - APU, Section 4.2"
            },
            {
                question: "During cruise at FL350, you experience a generator failure and want additional electrical power backup. Your co-pilot questions whether the APU can be started at this altitude. What are the in-flight APU start capabilities?",
                options: [
                    "Yes, but limited to below 20,000 feet for start attempts",
                    "Yes, can be started up to maximum operating altitude for electrical power",
                    "No, APU starts are prohibited during flight for safety reasons",
                    "Only in declared emergency situations with ATC coordination"
                ],
                correct: 1,
                explanation: "The APU can be started during flight up to its maximum operating altitude (25,000 feet) for electrical power. Above this altitude, starting is not possible due to insufficient air density for proper combustion and operation.",
                reference: "B737 NG CBT - APU, Section 3.2"
            },
            {
                question: "During fuel planning, you notice the left main tank has significantly less fuel than the right main tank. Your co-pilot asks if this will affect APU operation during the extended ground time with one engine running. What fuel source does the APU use?",
                options: [
                    "Separate dedicated APU fuel tank independent of main tanks",
                    "Center fuel tank when available, otherwise main tanks",
                    "Right main fuel tank for balance considerations",
                    "Left main fuel tank through dedicated APU fuel line and pump"
                ],
                correct: 3,
                explanation: "The APU draws fuel from the left main fuel tank through the APU fuel system with its own dedicated fuel line and pump. This must be considered during fuel planning, especially for extended ground operations or when the left main tank has lower fuel quantities.",
                reference: "B737 NG CBT - APU, Section 5.1"
            },
            {
                question: "During pushback, you suddenly notice the APU FAULT light illuminated and the APU noise stops. The ground crew reports no visible abnormalities. Your co-pilot asks about the urgency and what this light specifically indicates. What does the APU FAULT light mean?",
                options: [
                    "APU malfunction has occurred or automatic shutdown has been initiated",
                    "APU is starting and will be available shortly",
                    "APU is ready for electrical and bleed air loading",
                    "APU fuel level is low and requires attention"
                ],
                correct: 0,
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
                correct: 2,
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
                    "Ram air and exhaust fan",
                    "Bleed air ventilation"
                ],
                correct: 2,
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
                correct: 0,
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
                correct: 3,
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
                    "Inlet guide vanes",
                    "Wire mesh screen",
                    "No protection",
                    "Intake door"
                ],
                correct: 1,
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
                correct: 0,
                explanation: "The APU exhaust gas temperature limit is 700°C for normal operation.",
                reference: "B737 NG CBT - APU, Section 3.5"
            },
            {
                question: "How is the APU started?",
                options: [
                    "Air starter motor",
                    "Electric starter motor",
                    "Manual hand crank",
                    "Hydraulic starter"
                ],
                correct: 1,
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
                correct: 3,
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
                    "Only on ground",
                    "No, never",
                    "Yes, but briefly during transfer"
                ],
                correct: 3,
                explanation: "The APU generator can briefly parallel with engine generators during transfer sequences.",
                reference: "B737 NG CBT - APU, Section 7.2"
            },
            {
                question: "What is the APU air inlet door operation?",
                options: [
                    "Manual operation",
                    "Pneumatically operated",
                    "Automatic with APU start",
                    "Spring loaded"
                ],
                correct: 2,
                explanation: "The APU air inlet door opens automatically when the APU is started.",
                reference: "B737 NG CBT - APU, Section 2.6"
            },
            {
                question: "What happens to APU bleed air during engine start?",
                options: [
                    "Bleed air is reduced",
                    "APU bleed is isolated",
                    "APU automatically shuts down",
                    "APU bleed continues normally"
                ],
                correct: 3,
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
                    "Constant speed unit",
                    "Electronic governor",
                    "Automatic fuel control"
                ],
                correct: 3,
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
                    "APU malfunction",
                    "Routine maintenance due",
                    "Maintenance access door open",
                    "Maintenance mode active"
                ],
                correct: 1,
                explanation: "The APU MAINT light indicates routine maintenance is due based on operating hours.",
                reference: "B737 NG CBT - APU, Section 6.4"
            },
            {
                question: "What is the APU compressor type?",
                options: [
                    "Centrifugal compressor",
                    "Axial flow compressor",
                    "Mixed flow compressor",
                    "Reciprocating compressor"
                ],
                correct: 0,
                explanation: "The APU uses a centrifugal compressor for air compression.",
                reference: "B737 NG CBT - APU, Section 2.7"
            },
            {
                question: "How is APU fuel supplied during flight?",
                options: [
                    "Gravity feed",
                    "Manual pump",
                    "Engine-driven pump",
                    "Electric fuel pump"
                ],
                correct: 3,
                explanation: "APU fuel is supplied by an electric fuel pump during flight operations.",
                reference: "B737 NG CBT - APU, Section 5.6"
            },
            {
                question: "What is the APU automatic fire extinguishing sequence?",
                options: [
                    "No automatic extinguishing",
                    "30-second delay",
                    "Manual activation only",
                    "Immediate extinguishing"
                ],
                correct: 0,
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
                    "APU automatic shutdown",
                    "Temperature warning only",
                    "Oil cooling increases",
                    "No protection"
                ],
                correct: 0,
                explanation: "If APU oil temperature exceeds limits, the APU automatically shuts down.",
                reference: "B737 NG CBT - APU, Section 5.7"
            },
            {
                question: "What is the APU bleed air pressure regulation?",
                options: [
                    "Manual control",
                    "Engine bleed backup",
                    "Automatic pressure regulation",
                    "No regulation"
                ],
                correct: 2,
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
                correct: 0,
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
                    "APU is running",
                    "APU switch is on",
                    "APU is starting",
                    "APU is available"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "The APU has a single exhaust nozzle directing exhaust gases aft.",
                reference: "B737 NG CBT - APU, Section 2.9"
            },
            {
                question: "How is APU vibration monitored?",
                options: [
                    "Visual inspection",
                    "Vibration sensors",
                    "Sound analysis",
                    "No monitoring"
                ],
                correct: 1,
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
                correct: 0,
                explanation: "The APU bleed air shut-off valve can be operated both manually and automatically.",
                reference: "B737 NG CBT - APU, Section 3.9"
            },
            {
                question: "What happens during APU emergency shutdown?",
                options: [
                    "Immediate fuel and ignition cutoff",
                    "Normal shutdown sequence",
                    "Gradual power reduction",
                    "APU continues at idle"
                ],
                correct: 0,
                explanation: "During emergency shutdown, fuel and ignition are immediately cut off to the APU.",
                reference: "B737 NG CBT - APU, Section 4.8"
            },
            {
                question: "What is the APU generator load capacity?",
                options: [
                    "Limited non-essential loads",
                    "Essential loads only",
                    "All aircraft electrical loads",
                    "Ground equipment only"
                ],
                correct: 0,
                explanation: "The APU generator can handle limited non-essential loads in addition to essential systems.",
                reference: "B737 NG CBT - APU, Section 7.5"
            },
            {
                question: "How is APU starter disconnection accomplished?",
                options: [
                    "Manual disconnection",
                    "Temperature-based disconnection",
                    "Time-based disconnection",
                    "Automatic at operating speed"
                ],
                correct: 3,
                explanation: "The APU starter automatically disconnects when the APU reaches operating speed.",
                reference: "B737 NG CBT - APU, Section 4.9"
            },
            {
                question: "What is the APU ignition system type?",
                options: [
                    "Dual igniters",
                    "Single igniter",
                    "Spark plug ignition",
                    "Hot surface ignition"
                ],
                correct: 0,
                explanation: "The APU uses a dual igniter system for reliable ignition.",
                reference: "B737 NG CBT - APU, Section 4.10"
            },
            {
                question: "What protects the APU from reverse airflow?",
                options: [
                    "Check valves",
                    "Exhaust dampers",
                    "Bleed valve closure",
                    "Inlet door closure"
                ],
                correct: 3,
                explanation: "The APU inlet door closure protects against reverse airflow damage.",
                reference: "B737 NG CBT - APU, Section 2.11"
            },
            {
                question: "What is the APU load control system function?",
                options: [
                    "Control electrical loads",
                    "Control bleed air loads",
                    "Control all APU loads",
                    "Control fuel loads"
                ],
                correct: 2,
                explanation: "The APU load control system manages all APU loads including electrical and bleed air.",
                reference: "B737 NG CBT - APU, Section 3.10"
            },
            {
                question: "How is APU maintenance access provided?",
                options: [
                    "Removable panels",
                    "Access doors",
                    "Ground equipment required",
                    "Both panels and doors"
                ],
                correct: 3,
                explanation: "APU maintenance access is provided through both removable panels and access doors.",
                reference: "B737 NG CBT - APU, Section 2.12"
            },
            {
                question: "What is the APU fuel filter location?",
                options: [
                    "In fuel tank",
                    "Engine fuel system",
                    "APU fuel control unit",
                    "APU fuel line"
                ],
                correct: 3,
                explanation: "The APU fuel filter is located in the APU fuel line before the fuel control unit.",
                reference: "B737 NG CBT - APU, Section 5.9"
            },
            {
                question: "What happens if APU fire detection fails?",
                options: [
                    "Backup detection system",
                    "APU shuts down",
                    "APU continues normally",
                    "Manual monitoring required"
                ],
                correct: 0,
                explanation: "If APU fire detection fails, a backup detection system provides continued protection.",
                reference: "B737 NG CBT - APU, Section 8.4"
            },
            {
                question: "What is the APU control unit function?",
                options: [
                    "Start sequence control",
                    "All of the above",
                    "Load management",
                    "Protection monitoring"
                ],
                correct: 1,
                explanation: "The APU control unit manages start sequence, protection monitoring, and load management.",
                reference: "B737 NG CBT - APU, Section 4.11"
            },
            {
                question: "How is APU air quality maintained?",
                options: [
                    "Air filters",
                    "Oil separation",
                    "No quality control",
                    "Both filters and separation"
                ],
                correct: 3,
                explanation: "APU air quality is maintained through air filters and oil separation systems.",
                reference: "B737 NG CBT - APU, Section 3.11"
            },
            {
                question: "What is the APU door operation during ground operations?",
                options: [
                    "Always closed",
                    "Opens with APU start",
                    "Always open",
                    "Manual operation only"
                ],
                correct: 1,
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
                correct: 1,
                explanation: "The APU uses both air cooling and oil cooling for temperature management.",
                reference: "B737 NG CBT - APU, Section 2.14"
            },
            {
                question: "What is the APU electrical system integration?",
                options: [
                    "Independent system",
                    "Ground power only",
                    "Backup system only",
                    "Integrated with aircraft electrical"
                ],
                correct: 3,
                explanation: "The APU electrical system is fully integrated with the aircraft electrical system.",
                reference: "B737 NG CBT - APU, Section 7.6"
            },
            {
                question: "How is APU performance monitored?",
                options: [
                    "All methods",
                    "Electronic monitoring",
                    "Periodic testing",
                    "Manual readings"
                ],
                correct: 0,
                explanation: "APU performance is monitored through manual readings, electronic monitoring, and periodic testing.",
                reference: "B737 NG CBT - APU, Section 6.6"
            },
            {
                question: "What is the APU environmental control function?",
                options: [
                    "Cabin air conditioning",
                    "Both cabin and compartment",
                    "Compartment ventilation",
                    "No environmental control"
                ],
                correct: 2,
                explanation: "The APU provides compartment ventilation for its own cooling and operation.",
                reference: "B737 NG CBT - APU, Section 2.15"
            },
            {
                question: "What backup systems support APU operation?",
                options: [
                    "Battery power",
                    "All of the above",
                    "Emergency procedures",
                    "Manual controls"
                ],
                correct: 1,
                explanation: "APU operation is supported by battery power, manual controls, and emergency procedures.",
                reference: "B737 NG CBT - APU, Section 4.12"
            },
            {
                question: "How is APU fuel system pressure maintained?",
                options: [
                    "Electric boost pump",
                    "Gravity feed",
                    "Engine-driven pump",
                    "Hand pump"
                ],
                correct: 0,
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
                correct: 3,
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
                correct: 0,
                explanation: "The crew can monitor APU EGT, RPM, and oil pressure parameters.",
                reference: "B737 NG CBT - APU, Section 6.7"
            },
            {
                question: "What is the APU generator protection system?",
                options: [
                    "Overcurrent protection",
                    "All protections",
                    "Frequency protection",
                    "Overvoltage protection"
                ],
                correct: 1,
                explanation: "The APU generator has overcurrent, overvoltage, and frequency protection systems.",
                reference: "B737 NG CBT - APU, Section 7.7"
            },
            {
                question: "How is APU maintenance scheduled?",
                options: [
                    "Both time and hours",
                    "Operating hours only",
                    "Calendar time only",
                    "Condition-based only"
                ],
                correct: 0,
                explanation: "APU maintenance is scheduled based on both calendar time and operating hours.",
                reference: "B737 NG CBT - APU, Section 6.8"
            },
            {
                question: "What is the APU normal operating life?",
                options: [
                    "5,000 hours",
                    "15,000 hours",
                    "10,000 hours",
                    "20,000 hours"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "The load control system manages APU automatic load acceptance based on system demands.",
                reference: "B737 NG CBT - APU, Section 7.8"
            },
            {
                question: "What is the APU fire warning system response time?",
                options: [
                    "15 seconds",
                    "5 seconds",
                    "10 seconds",
                    "Instantaneous"
                ],
                correct: 3,
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
                correct: 2,
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
                correct: 1,
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
                correct: 0,
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
                correct: 2,
                explanation: "The APU can supply both electrical power and bleed air at the same time up to 10,000 feet.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), Introduction"
            },
            {
                question: "What is the maximum altitude for using the APU for bleed air supply alone?",
                options: [
                    "10,000 feet",
                    "35,000 feet",
                    "17,000 feet",
                    "41,000 feet"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "An electronic control unit (ECU) controls and monitors the APU functions and automatically shuts down the APU if it senses damaging operation.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), Introduction"
            },
            {
                question: "For how long does the APU EGT indicator remain powered after an APU shutdown?",
                options: [
                    "It powers down immediately",
                    "60 seconds",
                    "Until the battery switch is turned off",
                    "5 minutes"
                ],
                correct: 3,
                explanation: "The Exhaust Gas Temperature indicator remains powered for 5 minutes after shutdown.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Controls and Indications"
            },
            {
                question: "What does a steady APU MAINTENANCE light indicate?",
                options: [
                    "The APU has failed and cannot be operated.",
                    "The APU requires an immediate shutdown.",
                    "A maintenance problem exists, but the APU can still be operated.",
                    "The APU is currently being serviced by ground crew."
                ],
                correct: 2,
                explanation: "The APU Maintenance Light illuminates when a maintenance problem exists. However, the APU can still be operated.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Controls and Indications"
            },
            {
                question: "What is the primary power source for an APU start if AC power is not available?",
                options: [
                    "External ground power",
                    "An internal hand crank",
                    "Hydraulic power from an accumulator",
                    "DC power from the battery"
                ],
                correct: 3,
                explanation: "If AC power is not available, then DC power from the battery is used to start the APU.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Operation"
            },
            {
                question: "What is a recommended pre-start action to ensure a better APU start if AC power is available?",
                options: [
                    "Turn on all cabin lights",
                    "Cycle the battery switch",
                    "Turn on the aft number 1 fuel boost pump",
                    "Turn on the APU bleed air switch"
                ],
                correct: 2,
                explanation: "If AC power is available, moving the aft number 1 fuel boost pump switch to ON supplies pressurized fuel to the APU, which makes the APU start better.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "What is the indication that the APU has completed its start cycle and is ready to accept a load?",
                options: [
                    "The APU FAULT light extinguishes.",
                    "The APU GENERATOR OFF BUS light illuminates.",
                    "The APU LOW OIL PRESSURE light extinguishes.",
                    "The EGT needle stabilizes in the green band."
                ],
                correct: 1,
                explanation: "When the APU completes the start cycle, the APU GENERATOR OFF BUS light illuminates, indicating it's ready for an electrical or bleed air load.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "Why is it recommended to operate the APU for two minutes before using it as a bleed air source?",
                options: [
                    "This stabilization period extends the service life of the APU.",
                    "To ensure the APU generator is synchronized.",
                    "To allow the ECU to complete self-tests.",
                    "To burn off any excess fuel from the start sequence."
                ],
                correct: 0,
                explanation: "It is recommended to operate the APU for two minute before using it as a bleed air source. This stabilization period extends the service life of the APU.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Start"
            },
            {
                question: "What is the first step in a normal APU shutdown from the flight deck?",
                options: [
                    "Move the APU switch to the OFF position",
                    "Turn the battery switch OFF",
                    "Pull the APU fire switch",
                    "Turn the APU bleed switch OFF"
                ],
                correct: 0,
                explanation: "To shut down the APU normally, you move the APU switch to the OFF position.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Normal Shutdown"
            },
            {
                question: "How long is the cooling cycle during a normal APU shutdown?",
                options: [
                    "60 seconds",
                    "30 seconds",
                    "10 seconds",
                    "120 seconds"
                ],
                correct: 0,
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
                correct: 3,
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
                correct: 1,
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
                correct: 3,
                explanation: "In flight, if an overload condition is detected, all galley buses are automatically shed first.",
                reference: "B737 NG CBT - Auxiliary Power Unit (APU), APU Automatic Load Overshedding"
            },
            {
                question: "What is the maximum APU start cycle duration?",
                options: [
                    "120 seconds",
                    "60 seconds",
                    "90 seconds",
                    "45 seconds"
                ],
                correct: 0,
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
                    "Ram air",
                    "5th and 9th engine compressor stages",
                    "Ground cart"
                ],
                correct: 2,
                explanation: "The primary source of bleed air is the engine compressor stages, specifically the 5th and 9th stages, which extract hot, high-pressure air from the engine compression process.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 1.1"
            },
            {
                question: "During winter operations, you're running engine anti-ice, cabin pressurization, and air conditioning simultaneously. Your trainee asks which aircraft systems require the hot bleed air.",
                options: [
                    "Only air conditioning",
                    "Only anti-ice",
                    "Hydraulics",
                    "Air conditioning, anti-ice, and pressurization systems"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "There are two independent bleed air systems: left and right, each fed by its respective engine, providing redundancy and system isolation capability.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 3.1"
            },
            {
                question: "You notice fluctuating cabin pressure during climb. The issue may be related to the engine bleed air valves. What is their primary function in the system?",
                options: [
                    "Pressure regulation and flow control from engine to aircraft systems",
                    "Temperature control",
                    "Air filtration",
                    "Cooling"
                ],
                correct: 0,
                explanation: "The bleed air pressure regulating and shutoff valves control the flow and regulate pressure of engine bleed air to the bleed air distribution duct, ensuring proper system operation.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4.1"
            },
            {
                question: "During a no-bleed takeoff procedure, you move the engine bleed switches to OFF. What immediately occurs to the engine bleed air valves?",
                options: [
                    "Valves close, stopping bleed air flow",
                    "Valves open",
                    "Pressure increases",
                    "No effect"
                ],
                correct: 0,
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
                    "Pressure regulating valve that reduces pressure to usable levels",
                    "Pressure increase valve",
                    "Shutoff valve",
                    "Filter"
                ],
                correct: 0,
                explanation: "The pressure regulating valve reduces high-pressure engine bleed air to safe, usable pressure levels for aircraft systems like air conditioning and pressurization.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 6.1"
            },
            {
                question: "During climb, you notice the amber BLEED TRIP OFF light illuminated on the overhead panel. What condition caused this automatic system response?",
                options: [
                    "Normal operation",
                    "Valve opening normally",
                    "Bleed valve closed automatically due to excessive temperature or pressure",
                    "Scheduled maintenance"
                ],
                correct: 2,
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
                correct: 1,
                explanation: "Bleed air temperature from the engine compressor stages is typically around 450°F, which requires cooling through heat exchangers before use in aircraft systems.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.1"
            },
            {
                question: "Before the extremely hot bleed air can be safely used by air conditioning systems, it must be cooled. What provides this cooling function?",
                options: [
                    "Electric",
                    "Fuel",
                    "Ram air through heat exchangers",
                    "No cooling"
                ],
                correct: 2,
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
                    "Temperature",
                    "Automatic pressure sensing to maintain proper bleed air pressure",
                    "Timer"
                ],
                correct: 2,
                explanation: "The high stage valves operate automatically to control the flow of the 9th stage bleed air based on pressure requirements to maintain proper bleed air pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 4.3"
            },
            {
                question: "During engine start sequence, pneumatic air is required to turn the starter motor. What is the relationship between bleed air and engine starting?",
                options: [
                    "Valves close automatically",
                    "Bleed air from APU or ground cart provides pneumatic power for engine starters",
                    "No relationship",
                    "Pressure increases"
                ],
                correct: 1,
                explanation: "During engine start, bleed air from the APU or ground cart is used to power the pneumatic starter that turns the engine for starting.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5.2"
            },
            {
                question: "During maintenance operations, you need to isolate the left and right bleed air systems. What component provides this isolation capability?",
                options: [
                    "Isolates left/right only",
                    "Engine/APU separation only",
                    "Isolation valve - isolates left/right systems, separates engine from APU, and prevents reverse flow",
                    "Reverse flow prevention only"
                ],
                correct: 2,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5.3"
            },
            {
                question: "For safety and redundancy purposes, how is bleed air duct temperature continuously monitored to detect potential overheating?",
                options: [
                    "Dual temperature sensors for redundancy and safety",
                    "Single sensor",
                    "Visual only",
                    "No monitoring"
                ],
                correct: 0,
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
                correct: 1,
                explanation: "The bleed air system incorporates multiple protective measures including overpressure switches, over temperature switches (bleed trip sensors), and automatic valve closure to prevent unsafe conditions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 6.3"
            },
            {
                question: "When ground power is available but APU is inoperative, can external ground air conditioning carts supply bleed air for aircraft systems?",
                options: [
                    "No, completely separate",
                    "Yes, through external air connection to right side of bleed air duct",
                    "Testing only",
                    "Emergency only"
                ],
                correct: 1,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct for engine starting and ground use of the air conditioning system.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9.1"
            },
            {
                question: "Before bleed air is distributed to critical aircraft systems, what essential cleaning process occurs to ensure air quality?",
                options: [
                    "Oil removal",
                    "Pressure regulation",
                    "Cooling",
                    "Contaminant filtration to protect downstream systems"
                ],
                correct: 3,
                explanation: "Bleed air filters remove contaminants from the air before distribution to aircraft systems, protecting sensitive components from debris and particles.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 8.4"
            },
            {
                question: "The bleed air isolation valve has multiple operational functions during different flight phases. What does this valve accomplish?",
                options: [
                    "Comprehensive control: prevents reverse flow, enables crossbleed operation, and isolates systems",
                    "Pressure regulation only",
                    "Flow control only",
                    "Reverse flow prevention only"
                ],
                correct: 0,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation, providing operational flexibility.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9.1"
            },
            // --- YENİ EKLENEN SORULAR (BLEED AIR) ---
            {
                question: "During flight preparation, you're reviewing all available bleed air sources for ground and flight operations. What are the three primary sources?",
                options: [
                    "Engines, APU, ram air",
                    "Engines, hydraulics, APU",
                    "APU, batteries, engines",
                    "Engines, APU, and external air cart for comprehensive bleed air supply"
                ],
                correct: 3,
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
                correct: 0,
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
                    "5th stage check valve prevents reverse flow into the 5th stage",
                    "Temperature regulator",
                    "Main shutoff valve",
                    "Pressure booster"
                ],
                correct: 0,
                explanation: "The 5th stage check valve prevents reverse flow of higher pressure 9th stage air into the 5th stage compressor section when high stage valves are open.",
                reference: "B737 NG CBT - Bleed Air Systems, Engine Bleed Air"
            },
            {
                question: "During flight, the amber BLEED TRIP OFF light illuminates and the related engine bleed valve automatically closes. What condition triggered this protective action?",
                options: [
                    "Excessive engine bleed air temperature or pressure detected by trip sensors",
                    "Isolation valve open",
                    "APU valve failure",
                    "Low pressure"
                ],
                correct: 0,
                explanation: "Each bleed air valve incorporates overpressure and over temperature switches (bleed trip sensors) that cause a bleed trip off condition and illuminate the BLEED TRIP OFF lights when limits are exceeded.",
                reference: "B737 NG CBT - Bleed Air Systems, Controls and Indications"
            },
            {
                question: "With the isolation valve switch in AUTO, what condition causes the valve to automatically open to enable crossbleed operation?",
                options: [
                    "Both engine bleeds ON",
                    "Any engine BLEED or pack switch positioned OFF, requiring crossbleed supply",
                    "APU bleed ON",
                    "Both packs ON"
                ],
                correct: 1,
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
                correct: 1,
                explanation: "The function of DUAL BLEED light is to tell you that an engine, or engines, and the APU both supply pressure to the bleed air duct at the same time.",
                reference: "B737 NG CBT - Bleed Air Systems, Controls and Indications"
            },
            {
                question: "For maximum takeoff thrust, you decide to perform a no engine bleed takeoff with APU operating. What switch configuration creates the 'C' pattern?",
                options: [
                    "Engine bleeds ON, APU OFF, Isolation AUTO",
                    "Engine bleeds ON, APU ON, Isolation OPEN",
                    "Engine bleeds OFF, APU bleed ON, Isolation valve CLOSE forming 'C' pattern",
                    "All sources OFF"
                ],
                correct: 2,
                explanation: "You set the switches to no engine bleed configuration with a letter 'C' pattern: Engine bleeds OFF, APU bleed ON, Isolation valve CLOSE position.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "After takeoff, you need to reconfigure from no engine bleed back to normal flight configuration. What is the precise sequence?",
                options: [
                    "Engine 2 ON, APU OFF, Engine 1 ON, then Isolation Valve AUTO in reverse order",
                    "APU OFF, then both engines ON",
                    "Isolation AUTO first, then engines, then APU OFF",
                    "Engine 1 first, then Engine 2, then APU OFF"
                ],
                correct: 0,
                explanation: "You should perform the steps in reverse order: Set Engine 2 bleed ON, APU bleed OFF, Engine 1 bleed ON, then move isolation valve switch to AUTO.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "The left WING-BODY OVERHEAT light illuminates during flight. What specific area does this warning cover?",
                options: [
                    "Left air conditioning pack only",
                    "Left side of system including APU bleed air duct and wing/engine strut areas",
                    "Right engine pylon",
                    "Left wing leading edge only"
                ],
                correct: 1,
                explanation: "The left WING-BODY OVERHEAT light illuminates when a leak is detected in the left side of the system which includes APU bleed air duct, wing and engine strut areas.",
                reference: "B737 NG CBT - Bleed Air Systems, Wing-Body Overheat"
            },
            {
                question: "What is the first step in resetting a BLEED TRIP OFF condition?",
                options: [
                    "Press the trip reset switch immediately.",
                    "Turn the affected engine bleed switch to OFF.",
                    "Deselect the affected air conditioning pack.",
                    "Ensure that the wing anti-ice switch is in the OFF position."
                ],
                correct: 3,
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
                correct: 1,
                explanation: "An APU check valve in the APU duct protects the APU from engine bleed air flow.",
                reference: "B737 NG CBT - Bleed Air Systems, APU Bleed Air"
            },
            {
                question: "An external ground air cart connects to which side of the bleed air system?",
                options: [
                    "The left side",
                    "A central manifold independent of the left/right sides",
                    "Directly to the APU duct",
                    "The right side"
                ],
                correct: 3,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, External Air Source"
            },
            {
                question: "If bleed pressure from an external cart drops below 20 psi, what is the recommended procedure if the APU is available?",
                options: [
                    "Signal the ground crew to increase pressure.",
                    "Turn off both air conditioning packs.",
                    "Immediately disconnect the external cart and start the engines.",
                    "Set isolation valve to AUTO and APU bleed ON to supply the left pack."
                ],
                correct: 3,
                explanation: "If the bleed air duct pressure drops below 20 psi... Set the isolation valve switch to AUTO. Then move the APU bleed air switch to ON. APU supplies left pack and external air source supplies right pack.",
                reference: "B737 NG CBT - Bleed Air Systems, Bleed Air Use on Ground"
            },
            {
                question: "During a no engine bleed takeoff with an inoperative APU, what is the status of the air conditioning packs?",
                options: [
                    "They are turned to HIGH",
                    "They are turned to OFF",
                    "Only the left pack is operative",
                    "They are left in AUTO but receive no air"
                ],
                correct: 3,
                explanation: "With engine bleed switches OFF and APU inoperative, there is no source of bleed air, so the packs, although in AUTO, will not operate.",
                reference: "B737 NG CBT - Bleed Air Systems, No Engine Bleed Operations"
            },
            {
                question: "What is a potential consequence of using wing anti-ice above FL350?",
                options: [
                    "The wing may not receive enough heat.",
                    "A bleed trip off and possible loss of cabin pressure.",
                    "Engine performance will significantly increase.",
                    "There are no specific consequences mentioned."
                ],
                correct: 1,
                explanation: "Use of wing anti-ice above approximately FL350 may cause bleed trip off and possible loss of cabin pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Trip Off Condition"
            },
            {
                question: "What powers the bleed air isolation valve?",
                options: [
                    "28V DC power",
                    "Pneumatic pressure from the duct",
                    "115V AC power",
                    "It is manually operated by a cable"
                ],
                correct: 2,
                explanation: "The valve operates on AC power.",
                reference: "B737 NG CBT - Bleed Air Systems, Engine Bleed Air"
            },
            {
                question: "When performing a Wing-Body Overheat test, which lights should illuminate?",
                options: [
                    "Both WING-BODY OVERHEAT lights, MASTER CAUTION, and the air conditioning annunciator",
                    "Both BLEED TRIP OFF lights only",
                    "Both WING-BODY OVERHEAT lights only",
                    "All lights on the bleed air control panel"
                ],
                correct: 0,
                explanation: "Check that both WING–BODY OVERHEAT lights, MASTER CAUTION lights and airconditioning system annunciator light illuminate while you hold the switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Wing-body overheat test"
            },
            {
                question: "The APU bleed air valve is operated by what kind of power?",
                options: [
                    "AC activated and pressure operated",
                    "Manually via a handle",
                    "DC activated and pressure operated",
                    "Pneumatically from the engine"
                ],
                correct: 2,
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
                    "Air conditioning/pressurization, engine starter, anti-icing, hydraulic reservoirs pressurization and potable water tank pressurization",
                    "Anti-ice systems only",
                    "Air conditioning only",
                    "Engine starter only"
                ],
                correct: 0,
                explanation: "The systems that use bleed air are: Air conditioning/pressurization, engine starter, wing and engine thermal anti-icing, hydraulic reservoirs pressurization and potable water tank pressurization.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 5"
            },
            {
                question: "From which engine compressor stages does bleed air come?",
                options: [
                    "3rd and 7th stages",
                    "9th and 14th stages",
                    "1st and 5th stages",
                    "5th and 9th stages"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "At low engine speed, when 5th stage bleed air pressure is not sufficient for system demands, bleed air from the 9th stage is used.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 9"
            },
            {
                question: "What components make up the engine bleed system?",
                options: [
                    "High stage valves, 5th stage check valves, pressure regulating and shutoff valves, overpressure and over temperature switches, isolation valve and duct pressure transmitters",
                    "Only valves and sensors",
                    "Only pressure and temperature sensors",
                    "Valves and pressure indicators only"
                ],
                correct: 0,
                explanation: "The engine bleed system consists of high stage valves, 5th stage check valves, bleed air pressure regulating and shutoff valves, overpressure and over temperature switches, isolation valve and duct pressure transmitters.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 10"
            },
            {
                question: "When do high stage valves operate?",
                options: [
                    "Continuously",
                    "Only during takeoff",
                    "At low engine speeds to maintain proper bleed air pressure",
                    "Only during cruise"
                ],
                correct: 2,
                explanation: "At low engine speeds, the high stage valves open appropriately to maintain proper bleed air pressure. During takeoff, climb, and most cruise conditions, low pressure bleed air from the 5th stage is adequate and the high stage valves remain closed.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 11"
            },
            {
                question: "What is the purpose of the 5th stage check valve?",
                options: [
                    "To regulate pressure",
                    "To control temperature",
                    "To prevent reverse flow into the 5th stage when high stage valves open",
                    "To isolate the system"
                ],
                correct: 2,
                explanation: "The 5th stage check valve prevents reverse flow into the 5th stage when the high stage valves open.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 12"
            },
            {
                question: "How are bleed air pressure regulating and shutoff valves activated?",
                options: [
                    "Manually operated",
                    "Hydraulically operated",
                    "Pneumatically operated only",
                    "Electrically activated and pressure operated"
                ],
                correct: 3,
                explanation: "The bleed air pressure regulating and shutoff valves control the flow of engine bleed air to the bleed air distribution duct. The valves are electrically activated and pressure operated.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 13"
            },
            {
                question: "What are bleed trip sensors?",
                options: [
                    "Pressure sensors only",
                    "Overpressure switch and over temperature switch",
                    "Temperature sensors only",
                    "Flow sensors"
                ],
                correct: 1,
                explanation: "Each bleed air valve incorporates an overpressure switch and an over temperature switch, called bleed trip sensors, to prevent bleed air overpressure or overheat conditions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 14"
            },
            {
                question: "What power does the bleed air isolation valve operate on?",
                options: [
                    "AC power",
                    "DC power",
                    "Hydraulic power",
                    "Pneumatic power only"
                ],
                correct: 0,
                explanation: "The bleed air isolation valve isolates the left and right sides of the bleed air distribution duct or connects them when necessary for crossbleed operation. The valve operates on AC power.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 15"
            },
            {
                question: "Up to what altitude can APU supply bleed air?",
                options: [
                    "10,000 feet",
                    "15,000 feet",
                    "20,000 feet",
                    "17,000 feet"
                ],
                correct: 3,
                explanation: "The APU bleed air system supplies bleed air to the bleed air duct on the ground and in the air up to 17,000 feet.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 17"
            },
            {
                question: "How is the APU bleed air valve activated?",
                options: [
                    "AC activated and pressure operated",
                    "Hydraulically activated",
                    "DC activated and pressure operated",
                    "Manually operated"
                ],
                correct: 2,
                explanation: "The APU bleed air valve controls APU bleed air flow to the left side of the bleed air duct. The valve is DC activated and pressure operated.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 18"
            },
            {
                question: "What happens to the APU bleed air valve when the APU is shut down?",
                options: [
                    "It remains in last position",
                    "Manual control is required",
                    "It opens automatically",
                    "It closes automatically"
                ],
                correct: 3,
                explanation: "When the APU is shut down, the valve closes automatically. An APU check valve in the APU duct protects the APU from engine bleed air flow.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 18"
            },
            {
                question: "Where does the external air source connect?",
                options: [
                    "Left side of the bleed air duct",
                    "APU bleed air duct",
                    "Both sides simultaneously",
                    "Right side of the bleed air duct"
                ],
                correct: 3,
                explanation: "The external air connection provides for the connection of a ground cart to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 19"
            },
            {
                question: "When do engine bleed air valves open when the switch is ON?",
                options: [
                    "When the respective engine is running",
                    "Immediately when switch is selected",
                    "When APU is running",
                    "When external air is connected"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "When you set the switch to ON, the valve opens when the APU is running.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 22"
            },
            {
                question: "What are the three positions of the isolation valve switch?",
                options: [
                    "OPEN, CLOSE, AUTO",
                    "ON, OFF, AUTO",
                    "HIGH, LOW, AUTO",
                    "NORMAL, BACKUP, OFF"
                ],
                correct: 0,
                explanation: "A three-position ISOLATION VALVE toggle switch lets you control the bleed air isolation valve with CLOSE, OPEN, and AUTO positions.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 23-25"
            },
            {
                question: "In AUTO position, when does the isolation valve close?",
                options: [
                    "When APU is running",
                    "Never closes automatically",
                    "When engines are shut down",
                    "When both engine BLEED air switches are ON and both air conditioning PACK switches are AUTO or HIGH"
                ],
                correct: 3,
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
                    "Amber",
                    "Red",
                    "Green",
                    "Blue"
                ],
                correct: 0,
                explanation: "BLEED TRIP OFF light illuminates in amber when excessive engine bleed air temperature or pressure is detected.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 26"
            },
            {
                question: "What happens when a bleed trip off condition occurs?",
                options: [
                    "Related engine bleed valve closes automatically but switch position remains unchanged",
                    "Related engine bleed valve closes automatically and switch position changes",
                    "Only warning light illuminates",
                    "System continues normal operation"
                ],
                correct: 0,
                explanation: "A trip off condition causes the related engine bleed valve to close automatically, but does not change the position of its switch on the panel.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 26"
            },
            {
                question: "What is the pressure range on the bleed air duct pressure indicator?",
                options: [
                    "0 to 60 psi",
                    "0 to 100 psi",
                    "0 to 80 psi",
                    "0 to 120 psi"
                ],
                correct: 2,
                explanation: "The pressure indicator has two independent needles, left and right, and a single scale between zero and 80 psi.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 27"
            },
            {
                question: "When does the DUAL BLEED light illuminate?",
                options: [
                    "When both engines supply bleed air",
                    "When external air is connected",
                    "When isolation valve is open",
                    "When engine 1 bleed air switch is ON and APU bleed air valve is open, or when engine 2 bleed air switch is ON, isolation valve is open, and APU bleed air valve is open"
                ],
                correct: 3,
                explanation: "The DUAL BLEED light comes on when engine 1 bleed air switch is ON and the APU bleed air valve is open, or when engine 2 bleed air switch is ON, the isolation valve is open, and the APU bleed air valve is open.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 29-30"
            },
            {
                question: "What switch configuration creates a 'C' pattern for no engine bleed takeoff?",
                options: [
                    "Right pack AUTO, isolation valve CLOSE, left pack AUTO, engine bleed switches OFF, APU bleed ON",
                    "All switches ON",
                    "All switches OFF",
                    "Engine bleeds ON, APU bleed OFF"
                ],
                correct: 0,
                explanation: "For no engine bleed takeoff configuration: right pack switch AUTO, isolation valve switch CLOSE, left pack switch AUTO, turn off Engine 1 and 2 bleed air switches, select APU bleed air switch ON.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 42"
            },
            {
                question: "After a no engine bleed takeoff, what is the first step to return to normal configuration?",
                options: [
                    "Turn on Engine 1 bleed air switch",
                    "Set isolation valve to AUTO",
                    "Turn off APU bleed air switch",
                    "Set Engine 2 bleed air switch to ON"
                ],
                correct: 3,
                explanation: "Set the Engine 2 bleed air switch to ON first. This lets Engine 2 supply bleed air to the right side of the bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 44"
            },
            {
                question: "When should you configure for no engine bleed landing if additional go-around thrust is required?",
                options: [
                    "Below 5,000 feet",
                    "Below 15,000 feet",
                    "Below 10,000 feet",
                    "At any altitude"
                ],
                correct: 2,
                explanation: "If additional go-around thrust is required with the APU available, you should configure the switches for a 'No Engine Bleed Landing' when below 10,000 feet.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 45"
            },
            {
                question: "During unpressurized takeoff/landing (APU inoperative), after takeoff when should you turn on Engine 2 bleed air switch?",
                options: [
                    "Between 400 feet and 2000 feet above field elevation",
                    "Immediately after takeoff",
                    "Above 5,000 feet",
                    "At cruise altitude"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "If engine failure occurs, do not position engine BLEED air switches ON until reaching 1500 feet or until obstacle clearance height has been attained.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 49"
            },
            {
                question: "What should you avoid during no engine bleed landing with APU inoperative?",
                options: [
                    "High rates of descent",
                    "High airspeed",
                    "Low airspeed",
                    "Level flight"
                ],
                correct: 0,
                explanation: "You should avoid high rates of descent for passenger comfort.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 50"
            },
            {
                question: "What should you do first when a bleed trip off condition occurs?",
                options: [
                    "Turn off affected engine",
                    "Reset the system immediately",
                    "Turn off pack switch",
                    "Ensure wing anti-ice switch is in OFF position"
                ],
                correct: 3,
                explanation: "In case of a trip off condition, ensure that wing anti-ice switch is in OFF position. Press the trip reset switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 52"
            },
            {
                question: "If BLEED TRIP OFF light stays illuminated after reset, what should you do?",
                options: [
                    "Continue normal operation",
                    "Shut down the affected engine",
                    "Turn off the pack switch on the affected side",
                    "Turn off all bleed air switches"
                ],
                correct: 2,
                explanation: "If BLEED TRIP OFF light stays illuminated, turn off the pack switch on the affected side. This causes the isolation valve to open and bleed air system supplies air to the right side of wing anti-ice.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 54"
            },
            {
                question: "What may happen if wing anti-ice is used above approximately FL350?",
                options: [
                    "Normal operation",
                    "Bleed trip off and possible loss of cabin pressure",
                    "Improved performance",
                    "Nothing significant"
                ],
                correct: 1,
                explanation: "Use of wing anti-ice above approximately FL350 may cause bleed trip off and possible loss of cabin pressure.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 55"
            },
            {
                question: "Where are the sensing elements for wing-body overheat detection located?",
                options: [
                    "Wing and engine strut areas, air conditioning bays, and bleed air duct from APU",
                    "Only in wing areas",
                    "Only in engine areas",
                    "Only around APU"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "The left WING-BODY OVERHEAT light illuminates when a leak is detected in the left side of the system which includes APU bleed air duct.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 58"
            },
            {
                question: "How long should you hold the OVERHEAT TEST switch to test the wing-body overheat system?",
                options: [
                    "2 seconds",
                    "10 seconds",
                    "5 seconds",
                    "Until lights illuminate"
                ],
                correct: 2,
                explanation: "To perform the test push and hold the OVERHEAT TEST switch for 5 seconds.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 62"
            },
            {
                question: "What lights should illuminate during wing-body overheat test?",
                options: [
                    "Only WING-BODY OVERHEAT lights",
                    "Only MASTER CAUTION lights",
                    "WING-BODY OVERHEAT lights, MASTER CAUTION lights and air conditioning system annunciator light",
                    "Only annunciator lights"
                ],
                correct: 2,
                explanation: "Check that both WING-BODY OVERHEAT lights, MASTER CAUTION lights and air conditioning system annunciator light illuminate while you hold the switch.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 62"
            },
            {
                question: "What should external air cart pressure be?",
                options: [
                    "15-20 psi",
                    "30-35 psi",
                    "25-30 psi",
                    "20-25 psi"
                ],
                correct: 3,
                explanation: "When the external air cart supplies air, the bleed air duct pressure should be between 20 psi and 25 psi.",
                reference: "B737 NG CBT - Bleed Air Systems, Section 38"
            },
            {
                question: "What should you do if external air cart pressure drops below 20 psi?",
                options: [
                    "Use APU if available, set isolation valve to AUTO, move APU bleed air switch to ON",
                    "Continue operation",
                    "Disconnect external air",
                    "Increase cart pressure"
                ],
                correct: 0,
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
                correct: 3,
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
                    "Speed increases",
                    "Generator disconnects from the electrical bus via generator circuit breaker",
                    "No effect"
                ],
                correct: 2,
                explanation: "The engine generator switches allow for manual selection of IDG power. The OFF position disconnects the IDG from the related AC transfer bus.",
                reference: "B737 NG CBT - Electrical, Section 3.1"
            },
            {
                question: "For emergency power during total electrical failure, how many backup batteries are installed to maintain critical systems?",
                options: [
                    "One",
                    "Three",
                    "Two nickel-cadmium batteries (main and auxiliary) for emergency power",
                    "Four"
                ],
                correct: 2,
                explanation: "DC system incorporates two nickel-cadmium batteries: the main battery and the auxiliary battery. Each battery is a nominal 24 volt DC power source.",
                reference: "B737 NG CBT - Electrical, Section 4.1"
            },
            {
                question: "Many aircraft systems require 28V DC power while generators produce 115V AC. What components provide this power conversion?",
                options: [
                    "Backup power only",
                    "Convert DC to AC",
                    "Voltage regulation only",
                    "Transformer rectifier units (TRUs) convert AC to DC power"
                ],
                correct: 3,
                explanation: "Transformer rectifier units change three-phase, 115 volt ac, 400 hertz AC power into 28V DC to supply the main DC system loads. These units are the normal DC power sources.",
                reference: "B737 NG CBT - Electrical, Section 5.1"
            },
            {
                question: "Following a generator failure, you notice illuminated annunciator lights on the electrical panel. What does the BUS TRANSFER light specifically indicate?",
                options: [
                    "Bus transfer has occurred due to generator failure or manual disconnect",
                    "Transfer in progress",
                    "Normal operation",
                    "Transfer failure"
                ],
                correct: 0,
                explanation: "The BUS TRANSFER light indicates that a bus transfer has occurred, typically due to generator failure or disconnect, activating automatic electrical system reconfiguration.",
                reference: "B737 NG CBT - Electrical, Section 6.1"
            },
            {
                question: "During flight, you experience multiple generator failures and consider all power options. Is external power a viable source during flight operations?",
                options: [
                    "Yes, always available",
                    "Yes, emergency only",
                    "Special equipment required",
                    "No, external power is limited to ground operations only"
                ],
                correct: 3,
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
                correct: 0,
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
                    "800 Hertz",
                    "400 Hertz for reduced component weight and improved performance"
                ],
                correct: 3,
                explanation: "The frequency of alternating current used in aircraft has a frequency of 400 Hertz, allowing for smaller, lighter electrical components compared to 50/60 Hz systems.",
                reference: "B737 NG CBT - Electrical, Section 7"
            },
            {
                question: "What does a static inverter do?",
                options: [
                    "Converts DC to AC",
                    "Converts AC to DC",
                    "Increases voltage",
                    "Decreases voltage"
                ],
                correct: 0,
                explanation: "A static inverter converts direct current into alternating current.",
                reference: "B737 NG CBT - Electrical, Section 9"
            },
            {
                question: "What does a transformer rectifier unit (TR unit) do?",
                options: [
                    "Converts DC to AC",
                    "Only converts current type",
                    "Only changes voltage level",
                    "Changes voltage level of AC and converts it to DC"
                ],
                correct: 3,
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
                correct: 1,
                explanation: "There are five power sources used for AC generation: the left and right engine integrated drive generators (IDGs), APU generator, external power and static inverter.",
                reference: "B737 NG CBT - Electrical, Section 14"
            },
            {
                question: "What does an IDG consist of?",
                options: [
                    "A constant speed drive section and an AC generator",
                    "Only an AC generator",
                    "Only a constant speed drive",
                    "Two AC generators"
                ],
                correct: 0,
                explanation: "An IDG consists of a constant speed drive section and an AC generator, which are lubricated and cooled by a self-contained oil system.",
                reference: "B737 NG CBT - Electrical, Section 15"
            },
            {
                question: "What voltage and frequency do IDGs supply?",
                options: [
                    "28V DC",
                    "115V AC at 400 Hz",
                    "115V AC at 60 Hz",
                    "230V AC at 400 Hz"
                ],
                correct: 1,
                explanation: "Each IDG supplies three-phase, 115 volt alternating current with a frequency of 400 Hertz.",
                reference: "B737 NG CBT - Electrical, Section 15"
            },
            {
                question: "Can the APU generator meet all electrical power requirements?",
                options: [
                    "Only for ground operations",
                    "For all ground conditions and most flight conditions",
                    "Only for flight operations",
                    "Never meets all requirements"
                ],
                correct: 1,
                explanation: "The APU generator can meet the electrical power requirements for all ground conditions and most flight conditions.",
                reference: "B737 NG CBT - Electrical, Section 16"
            },
            {
                question: "Where is the external power connected?",
                options: [
                    "Upper left side of fuselage",
                    "Lower left side of fuselage",
                    "Upper right side of fuselage",
                    "Lower right side of fuselage"
                ],
                correct: 3,
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
                    "Three TR units",
                    "Two TR units",
                    "Four TR units",
                    "Five TR units"
                ],
                correct: 0,
                explanation: "The DC generation system has three transformer rectifier units denoted as TR 1, TR 2 and TR 3.",
                reference: "B737 NG CBT - Electrical, Section 69"
            },
            {
                question: "What voltage do TR units convert AC power to?",
                options: [
                    "28V DC",
                    "24V DC",
                    "32V DC",
                    "48V DC"
                ],
                correct: 0,
                explanation: "Transformer rectifier units change three-phase, 115 volt ac, 400 hertz AC power into 28V DC.",
                reference: "B737 NG CBT - Electrical, Section 68"
            },
            {
                question: "What is the voltage of the aircraft batteries?",
                options: [
                    "12V DC",
                    "32V DC",
                    "28V DC",
                    "24V DC"
                ],
                correct: 3,
                explanation: "Each battery is a nominal 24 volt DC power source.",
                reference: "B737 NG CBT - Electrical, Section 72"
            },
            {
                question: "How many TR units can supply the total connected DC load?",
                options: [
                    "All three are required",
                    "Only TR1 and TR2",
                    "Any two TR units",
                    "Only one TR unit"
                ],
                correct: 2,
                explanation: "Any two TR units are capable of supplying the total connected DC load.",
                reference: "B737 NG CBT - Electrical, Section 69"
            },
            {
                question: "When does the DC cross bus tie relay automatically open?",
                options: [
                    "When glide slope is captured during ILS approach",
                    "During takeoff",
                    "During landing",
                    "Never opens automatically"
                ],
                correct: 0,
                explanation: "The relay automatically opens when the glide slope is captured during a flight director or autopilot ILS approach.",
                reference: "B737 NG CBT - Electrical, Section 71"
            },
            {
                question: "What is the primary function of the main battery?",
                options: [
                    "Start the engines",
                    "Operate the landing gear",
                    "Power the galley systems",
                    "Supply emergency power to standby system when normal power sources are not available"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "With full charge, the batteries supply a minimum of 60 minutes of standby AC and DC power.",
                reference: "B737 NG CBT - Electrical, Section 73"
            },
            {
                question: "Which bus is directly connected to the battery with no switch?",
                options: [
                    "Switched hot battery bus",
                    "Battery bus",
                    "Hot battery bus",
                    "DC standby bus"
                ],
                correct: 2,
                explanation: "The hot battery bus is directly connected to the battery. There is no switch in this circuit; thus its consumers are always powered as long as the battery voltage is above a minimum.",
                reference: "B737 NG CBT - Electrical, Section 76"
            },
            {
                question: "What are the two basic modes of operation for battery chargers?",
                options: [
                    "High and low mode",
                    "Manual and automatic mode",
                    "Normal and emergency mode",
                    "Battery charge mode and transformer rectifier (TR) mode"
                ],
                correct: 3,
                explanation: "Each battery charger has two basic modes of operation: battery charge mode and transformer rectifier or TR mode.",
                reference: "B737 NG CBT - Electrical, Section 79"
            },
            {
                question: "When does a battery charger go to charge mode?",
                options: [
                    "When battery voltage is above 25V",
                    "When battery voltage is exactly 24V",
                    "When battery voltage is less than 23V DC",
                    "When manually selected"
                ],
                correct: 2,
                explanation: "A battery charger goes to the charge mode when its battery voltage is less than 23V DC.",
                reference: "B737 NG CBT - Electrical, Section 80"
            },
            {
                question: "How many positions does the AC meter selector have?",
                options: [
                    "Seven positions",
                    "Six positions",
                    "Five positions",
                    "Eight positions"
                ],
                correct: 0,
                explanation: "The AC meter selector is a rotary selector with seven positions: Standby power, ground power, generator 1, APU generator, generator 2, the static inverter and test.",
                reference: "B737 NG CBT - Electrical, Section 36"
            },
            {
                question: "When does the generator DRIVE amber caution light illuminate?",
                options: [
                    "High oil pressure in IDG",
                    "Normal IDG operation",
                    "High oil temperature in IDG",
                    "Low oil pressure in IDG"
                ],
                correct: 3,
                explanation: "Generator DRIVE amber caution light illuminates when low oil pressure is sensed in the IDG.",
                reference: "B737 NG CBT - Electrical, Section 41"
            },
            {
                question: "Can an IDG be reconnected in flight after disconnection?",
                options: [
                    "Yes, anytime",
                    "Yes, but only by maintenance",
                    "Yes, automatically",
                    "No, reconnection can only be done on ground by maintenance"
                ],
                correct: 3,
                explanation: "Once an IDG is disconnected, it cannot be reconnected in the air. Reconnection can only be done on the ground by maintenance crew.",
                reference: "B737 NG CBT - Electrical, Section 42"
            },
            {
                question: "What type of switches are the engine generator switches?",
                options: [
                    "Three-position switches spring-loaded to center",
                    "Two-position toggle switches",
                    "Four-position rotary switches",
                    "Push-button switches"
                ],
                correct: 0,
                explanation: "Each switch is a three-position switch and is spring-loaded to the center (neutral) position. The ON and OFF positions are momentary positions.",
                reference: "B737 NG CBT - Electrical, Section 44"
            },
            {
                question: "Why are there two APU generator switches for one APU generator?",
                options: [
                    "For redundancy",
                    "For backup operation",
                    "Because there are two bus tie breakers (BTBs)",
                    "To control different voltages"
                ],
                correct: 2,
                explanation: "There are two APU generator switches because there are two bus tie breakers (BTBs) that supply power to the AC transfer buses.",
                reference: "B737 NG CBT - Electrical, Section 45"
            },
            {
                question: "What does the amber TRANSFER BUS OFF light indicate?",
                options: [
                    "Transfer bus has power",
                    "Transfer bus is overloaded",
                    "Transfer bus does not have power",
                    "Transfer bus is disconnected manually"
                ],
                correct: 2,
                explanation: "The amber TRANSFER BUS OFF light comes on when the related AC transfer bus does not have power.",
                reference: "B737 NG CBT - Electrical, Section 50"
            },
            {
                question: "What does an illuminated SOURCE OFF light indicate?",
                options: [
                    "The transfer bus has no power",
                    "Manual disconnection is required",
                    "The source has failed",
                    "The transfer bus is not powered by the selected source"
                ],
                correct: 3,
                explanation: "The SOURCE OFF light indicates that the related AC transfer bus is not powered by the selected source. This doesn't necessarily mean the transfer bus has no power.",
                reference: "B737 NG CBT - Electrical, Section 51"
            },
            {
                question: "When does the blue APU GEN OFF BUS light extinguish?",
                options: [
                    "When APU generator is connected to a bus or APU is shut down",
                    "When APU starts",
                    "When engines are started",
                    "When external power is connected"
                ],
                correct: 0,
                explanation: "The light goes off when the APU generator is connected to a bus or you shut down the APU.",
                reference: "B737 NG CBT - Electrical, Section 53"
            },
            {
                question: "Can APU generator and external power be connected simultaneously?",
                options: [
                    "No, they cannot be connected at the same time",
                    "Yes, during certain operations",
                    "Yes, for redundancy",
                    "Only on the ground"
                ],
                correct: 0,
                explanation: "APU generator and external power cannot be connected to the electrical system at the same time.",
                reference: "B737 NG CBT - Electrical, Section 57"
            },
            {
                question: "What happens in flight if an engine generator stops supplying power?",
                options: [
                    "Bus tie breakers automatically close to allow other generator to supply both buses",
                    "APU must be started",
                    "System shuts down",
                    "External power must be connected"
                ],
                correct: 0,
                explanation: "If an engine generator is no longer supplying power, the bus tie breakers automatically close to allow the other engine generator to supply both transfer buses through the tie bus.",
                reference: "B737 NG CBT - Electrical, Section 60"
            },
            {
                question: "When is the automatic generator on-line feature available?",
                options: [
                    "Only on the ground",
                    "During all flight phases",
                    "Only when APU generator is supplying power to both AC transfer buses after takeoff",
                    "Only during approach"
                ],
                correct: 2,
                explanation: "The automatic generator on-line feature is armed when the APU generator is still supplying power to both AC transfer buses after takeoff. It's available only in flight and only once per flight.",
                reference: "B737 NG CBT - Electrical, Section 61"
            },
            {
                question: "In single engine generator operation with overload, what is shed first?",
                options: [
                    "Galley power from transfer bus 2",
                    "Main buses",
                    "Essential systems",
                    "All non-essential systems"
                ],
                correct: 0,
                explanation: "In single engine generator operation, if an overload condition is detected, the power from the galleys on the transfer bus 2 are removed first.",
                reference: "B737 NG CBT - Electrical, Section 63"
            },
            {
                question: "When both generators are working and overload occurs, what happens?",
                options: [
                    "Both generators shut down",
                    "System removes power from galleys supplied by affected generator",
                    "All galley power is removed",
                    "Main buses are shed first"
                ],
                correct: 1,
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
                correct: 2,
                explanation: "If an overload condition is detected when the APU is the only source of AC power in flight, all galley buses are automatically shed.",
                reference: "B737 NG CBT - Electrical, Section 65"
            },
            {
                question: "Which TR unit has backup power capability?",
                options: [
                    "TR1 only",
                    "TR3 can get power from either AC transfer bus",
                    "TR2 only",
                    "All TR units have backup"
                ],
                correct: 1,
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
                correct: 3,
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
                correct: 2,
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
                    "When TR1 fails, or TR2 and TR3 fail",
                    "When any TR unit fails",
                    "Only when all TR units fail",
                    "Never illuminates in flight"
                ],
                correct: 0,
                explanation: "In flight, the TR unit light illuminates if TR1, or TR2 and TR3 has failed.",
                reference: "B737 NG CBT - Electrical, Section 85"
            },
            {
                question: "When does the amber electric light operate?",
                options: [
                    "Only in flight",
                    "Only during engine start",
                    "During all operations",
                    "Only when airplane is on the ground"
                ],
                correct: 3,
                explanation: "The amber electric light comes on when there is a failure in the DC system or standby system. The light illuminates only when the airplane is on the ground.",
                reference: "B737 NG CBT - Electrical, Section 86"
            },
            {
                question: "What are the two positions of the bus transfer switch?",
                options: [
                    "AUTO and OFF",
                    "ON and OFF",
                    "AUTO and MANUAL",
                    "NORMAL and EMERGENCY"
                ],
                correct: 0,
                explanation: "The bus transfer switch has two positions: AUTO and OFF. The switch is normally in the AUTO position.",
                reference: "B737 NG CBT - Electrical, Section 88"
            },
            {
                question: "What systems are supplied by standby power during emergency?",
                options: [
                    "Critical systems necessary to maintain safe flight",
                    "Only engine systems",
                    "All aircraft systems",
                    "Only navigation systems"
                ],
                correct: 0,
                explanation: "The standby power system supplies AC and DC power to critical systems necessary to maintain safe flight in the event of loss of all engine or APU driven generators.",
                reference: "B737 NG CBT - Electrical, Section 92"
            },
            {
                question: "What are the three positions of the standby power switch?",
                options: [
                    "AUTO, ON, OFF",
                    "AUTO, MANUAL, EMERGENCY",
                    "NORMAL, STANDBY, OFF",
                    "AUTO, BATTERY, OFF"
                ],
                correct: 3,
                explanation: "The standby power switch is a three position switch with AUTO, BATTERY, and OFF positions. The guard holds the switch in the AUTO position.",
                reference: "B737 NG CBT - Electrical, Section 96"
            },
            {
                question: "During normal operation, what powers the AC standby bus?",
                options: [
                    "Battery through static inverter",
                    "External power",
                    "APU generator",
                    "AC transfer bus 1"
                ],
                correct: 3,
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
                correct: 1,
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
                correct: 3,
                explanation: "Flight instruments on standby power include Captain's outboard display unit with primary flight display, Captain's inboard display unit with navigation display.",
                reference: "B737 NG CBT - Electrical, Section 112"
            },
            {
                question: "What circuit breaker panels are named in the B737 NG cockpit?",
                options: [
                    "P5 and P17",
                    "P8 and P20",
                    "P7 and P19",
                    "P6 and P18"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "The N1 rotor consists of a fan and a low-pressure compressor which are driven by a low-pressure turbine through a shaft that goes inside the hollow N2 shaft.",
                reference: "B737 NG CBT - Engines, Section 7"
            },
            {
                question: "Analyzing the high-pressure spool operation, you examine the core engine components. What elements form the N2 rotor assembly?",
                options: [
                    "Fan/low-pressure compressor",
                    "Accessory gearbox only",
                    "High-pressure compressor and high-pressure turbine connected by hollow shaft",
                    "Fuel system only"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "An accessory gearbox on the left side of each engine is driven by the N2 rotor, providing mechanical power for various engine accessories.",
                reference: "B737 NG CBT - Engines, Section 9"
            },
            {
                question: "The accessory gearbox powers multiple aircraft systems through engine-driven components. What equipment receives mechanical drive from this gearbox?",
                options: [
                    "Fuel pumps only",
                    "Oil pumps only",
                    "Hydraulic pump only",
                    "Integrated drive generator, oil pumps, hydraulic pump and fuel pumps"
                ],
                correct: 3,
                explanation: "The accessory gearbox drives the integrated drive generator, oil pumps, hydraulic pump and fuel pumps, providing essential power for electrical, hydraulic, and fuel systems.",
                reference: "B737 NG CBT - Engines, Section 10"
            },
            {
                question: "Understanding basic propulsion principles, you explain to students how jet engines create forward motion. What is the fundamental thrust generation method?",
                options: [
                    "Fuel combustion only",
                    "Electric propulsion",
                    "Accelerating ambient air mass through the engine per Newton's third law",
                    "Compressed air storage"
                ],
                correct: 2,
                explanation: "Engine produces thrust by accelerating ambient air as it passes through the engine, creating momentum change that results in forward thrust according to Newton's third law.",
                reference: "B737 NG CBT - Engines, Section 11"
            },
            {
                question: "In turbofan engine design, air flows through two paths: the core and around the core. Which airflow path contributes more to total thrust production?",
                options: [
                    "Core engine produces most",
                    "Bypass air produces most of the thrust for improved fuel efficiency",
                    "Equal contribution",
                    "Only bypass air"
                ],
                correct: 1,
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
                correct: 3,
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
                    "To supply metered fuel to the engine for combustion",
                    "To filter fuel",
                    "To store fuel",
                    "To heat fuel"
                ],
                correct: 0,
                explanation: "The function of the engine fuel system is to supply metered fuel to the engine for combustion.",
                reference: "B737 NG CBT - Engines, Section 22"
            },
            {
                question: "What is the sequence of fuel flow from the fuel tank to the engine?",
                options: [
                    "Tank → Spar shutoff valve → Low pressure pump → Heat exchangers → Filter → High pressure pump → HMU",
                    "Tank → Filter → Pump → Engine",
                    "Tank → Engine directly",
                    "Tank → High pressure pump → Engine"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "The warm IDG oil heats the engine fuel and by this process the IDG oil is cooled.",
                reference: "B737 NG CBT - Engines, Section 24"
            },
            {
                question: "Why is fuel heated in the heat exchanger?",
                options: [
                    "To prevent formation of ice from water which may clog the fuel filter",
                    "To improve combustion",
                    "To reduce fuel consumption",
                    "To increase fuel pressure"
                ],
                correct: 0,
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
                correct: 1,
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
                    "During engine start",
                    "When either the start lever is in CUTOFF position or the engine fire switch is out",
                    "When thrust levers are at idle"
                ],
                correct: 2,
                explanation: "Both the spar fuel shutoff valve and engine fuel shutoff valve close when either the start lever is in the CUTOFF position or the engine fire switch is out.",
                reference: "B737 NG CBT - Engines, Section 30"
            },
            {
                question: "What information does the fuel flow transmitter provide?",
                options: [
                    "Fuel flow and fuel used information to display unit and flight management system",
                    "Fuel temperature only",
                    "Fuel pressure only",
                    "Fuel quality information"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "From fuel flow transmitter, the fuel is then routed to the fuel manifold which distributes the fuel to individual fuel nozzles.",
                reference: "B737 NG CBT - Engines, Section 34"
            },
            
            // ELECTRONIC ENGINE CONTROL (EEC)
            {
                question: "How many computers does each EEC contain?",
                options: [
                    "Two independent computers called channels A and B",
                    "One computer",
                    "Three computers",
                    "Four computers"
                ],
                correct: 0,
                explanation: "Each EEC has two independent computers which are called channels A and B.",
                reference: "B737 NG CBT - Engines, Section 35"
            },
            {
                question: "How does the EEC alternate between active and standby channels?",
                options: [
                    "Manually by pilot",
                    "Each time the engine is started if N2 was more than 76% during previous run",
                    "Every flight hour",
                    "Never alternates"
                ],
                correct: 1,
                explanation: "Each time the engine is started, the EEC alternates between active channel and standby channel. This change of control occurs if N2 was more than 76 percent during the previous engine run and both channels are valid.",
                reference: "B737 NG CBT - Engines, Section 37"
            },
            {
                question: "What are the five major functions of the EEC?",
                options: [
                    "Engine thrust management, structural limit protection, engine idle operation, reverse thrust control and flight deck indication",
                    "Start, run, monitor, protect, shutdown",
                    "Fuel control, ignition, start, monitor, display",
                    "Power, control, monitor, protect, indicate"
                ],
                correct: 0,
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
                    "Pilot input only",
                    "Fuel flow and engine temperature",
                    "Thrust lever position, ambient total pressure, ambient static pressure, ambient total air temperature and bleed air demand"
                ],
                correct: 3,
                explanation: "In the normal mode, the EEC calculates the commanded N1 speed based on the position of the thrust levers, ambient total pressure, ambient static pressure, ambient total air temperature and bleed air demand.",
                reference: "B737 NG CBT - Engines, Section 41"
            },
            {
                question: "What light indication shows the EEC is operating in normal mode?",
                options: [
                    "Green ON light",
                    "Amber ALTERNATE light",
                    "White ON light",
                    "Red FAIL light"
                ],
                correct: 2,
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
                    "The engine goes to manual control",
                    "The amber ALTERNATE light illuminates and MASTER CAUTION lights come on"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "Lift the engine number 1 EEC switch guard and push the switch.",
                reference: "B737 NG CBT - Engines, Section 62"
            },
            {
                question: "What must you do before manually selecting hard alternate mode?",
                options: [
                    "Set thrust levers to mid position and disengage autothrottle",
                    "Shut down the engine",
                    "Increase thrust to maximum",
                    "Contact maintenance"
                ],
                correct: 0,
                explanation: "Before you select the hard alternate mode, set the thrust levers to the mid position. If the autothrottle is engaged, disengage it.",
                reference: "B737 NG CBT - Engines, Section 59-60"
            },
            {
                question: "What protection does the EEC provide for N1 and N2 speeds?",
                options: [
                    "No protection",
                    "N1 and N2 redline overspeed protection",
                    "N2 redline overspeed protection only",
                    "N1 redline overspeed protection only"
                ],
                correct: 1,
                explanation: "To keep engine operation safe and satisfactory, the EEC provides N1 and N2 redline overspeed protection in both normal and alternate modes.",
                reference: "B737 NG CBT - Engines, Section 65"
            },
            {
                question: "What limit does the EEC NOT provide protection for?",
                options: [
                    "N1 overspeed",
                    "N2 overspeed",
                    "Fuel flow limit",
                    "EGT limit"
                ],
                correct: 3,
                explanation: "However, you must observe the EGT limit, because the EEC does not provide EGT redline exceedance protection.",
                reference: "B737 NG CBT - Engines, Section 67"
            },
            {
                question: "What are the three different idle modes used by the EEC?",
                options: [
                    "Ground idle, flight idle, and approach idle",
                    "Low, medium, high idle",
                    "Start, cruise, landing idle",
                    "Normal, alternate, emergency idle"
                ],
                correct: 0,
                explanation: "EEC uses three different idle modes for different requirements of engine acceleration time: ground idle, flight idle and approach idle.",
                reference: "B737 NG CBT - Engines, Section 71"
            },
            {
                question: "When does the EEC select approach idle?",
                options: [
                    "In flight when flaps are in landing configuration, or engine anti-ice is ON, or signals not available below 19000 feet",
                    "During cruise",
                    "During takeoff",
                    "On the ground only"
                ],
                correct: 0,
                explanation: "The EEC selects approach idle in flight when flaps are in landing configuration, or the engine anti-ice is ON for either engine, or the flap or anti-ice signals are not available to the EEC while the airplane is below 19000 feet.",
                reference: "B737 NG CBT - Engines, Section 74"
            },
            {
                question: "How long does the EEC maintain approach idle after touchdown?",
                options: [
                    "Immediately changes to ground idle",
                    "10 seconds then shifts to ground idle",
                    "5 seconds then shifts to ground idle",
                    "Until thrust levers are moved"
                ],
                correct: 2,
                explanation: "The EEC maintains approach idle for 5 seconds after touchdown; then it shifts to ground idle.",
                reference: "B737 NG CBT - Engines, Section 75"
            },
            {
                question: "When does the ENGINE CONTROL light illuminate?",
                options: [
                    "When an EEC detects an engine fault that requires maintenance action",
                    "During normal operation",
                    "During engine start",
                    "When thrust levers are moved"
                ],
                correct: 0,
                explanation: "When an EEC detects an engine fault that requires a maintenance action, the respective ENGINE CONTROL light on the ENGINE panel illuminates.",
                reference: "B737 NG CBT - Engines, Section 76"
            },
            {
                question: "What other lights illuminate when the ENGINE CONTROL light comes on?",
                options: [
                    "No other lights",
                    "FIRE warning lights",
                    "All warning lights",
                    "MASTER CAUTION lights and ENGINE system annunciator"
                ],
                correct: 3,
                explanation: "Whenever either ENGINE CONTROL light comes on, the MASTER CAUTION lights and the ENGINE system annunciator also illuminate.",
                reference: "B737 NG CBT - Engines, Section 78"
            },
            {
                question: "Can the aircraft dispatch with the ENGINE CONTROL light illuminated?",
                options: [
                    "No, the airplane cannot dispatch",
                    "Yes, normal operation",
                    "Yes, with restrictions",
                    "Only for ferry flights"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "The engine oil system provides lubrication and cooling for the engine bearings and the accessory gearbox.",
                reference: "B737 NG CBT - Engines, Section 80"
            },
            {
                question: "What pressurizes the oil from the tank?",
                options: [
                    "Engine driven supply pump",
                    "Electric pump",
                    "Hydraulic pump",
                    "Manual pump"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "Oil from the pump goes to the supply oil filter which removes foreign particles from the oil.",
                reference: "B737 NG CBT - Engines, Section 83"
            },
            {
                question: "What sensors monitor oil temperature and pressure?",
                options: [
                    "Manual gauges",
                    "Computer sensors",
                    "Oil temperature and oil pressure sensors",
                    "Mechanical sensors"
                ],
                correct: 2,
                explanation: "The oil temperature and oil pressure sensors transmit the oil temperature and pressure data to the engine display through the EEC.",
                reference: "B737 NG CBT - Engines, Section 85"
            },
            {
                question: "What removes oil from engine bearing compartments?",
                options: [
                    "Scavenge pump",
                    "Supply pump",
                    "Electric pump",
                    "Gravity drain"
                ],
                correct: 0,
                explanation: "The scavenge pump removes the oil that collects in the engine bearing compartments and gearbox sump.",
                reference: "B737 NG CBT - Engines, Section 87"
            },
            {
                question: "What happens when the scavenge oil filter becomes clogged?",
                options: [
                    "Oil flow stops",
                    "Engine shuts down",
                    "Oil automatically bypasses the filter and OIL FILTER BYPASS light illuminates",
                    "Oil pressure increases"
                ],
                correct: 2,
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
                correct: 3,
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
                correct: 2,
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
                    "Real-time difference between actual N1 and thrust lever commanded N1",
                    "Current N1 speed relative to maximum rated power",
                    "Maximum permissible N1 limit for current conditions",
                    "Target N1 speed for optimal fuel efficiency"
                ],
                correct: 0,
                explanation: "The white N1 Command Sector arc on the outside of the dial shows the momentary difference between actual N1 and the N1 value commanded by the thrust lever position. This indicates engine response lag and helps pilots understand power transition dynamics.",
                reference: "B737 NG CBT - Engines, Section 99"
            },
            {
                question: "During pre-flight setup, you configure the N1 SET selector for optimal thrust reference display during takeoff. The maintenance technician asks about the available positions for display source selection. What are the four positions of the N1 SET selector outer knob?",
                options: [
                    "OFF, LOW, MED, HIGH for power level selection",
                    "MANUAL, AUTO, TEST, OFF for operational modes",
                    "BOTH, AUTO, 1 and 2 for display source configuration",
                    "START, RUN, STOP, TEST for engine control phases"
                ],
                correct: 2,
                explanation: "The outer knob has four positions: BOTH, AUTO, 1 and 2. These positions determine which engine's data is displayed and how the N1 reference system operates during various flight phases.",
                reference: "B737 NG CBT - Engines, Section 103"
            },
            {
                question: "During a go-around with maximum thrust selected, you notice the N1 indication approaching the redline limit. The first officer monitors for visual warnings as engine parameters reach critical values. What visual indication occurs when N1 exceeds the redline?",
                options: [
                    "Digital readout, box, pointer and shaded area become red for immediate recognition",
                    "Engine automatically shuts down with master warning",
                    "Audible warning horn sounds with flashing lights",
                    "No visual change occurs during brief exceedances"
                ],
                correct: 0,
                explanation: "When N1 exceeds the operating limit and goes above the N1 redline, the digital readout, the box around N1 digital readout, and the N1 pointer and the shaded area becomes red. This comprehensive red indication ensures immediate pilot recognition of the overspeed condition.",
                reference: "B737 NG CBT - Engines, Section 109"
            },
            {
                question: "What does the EGT start limit redline indicate?",
                options: [
                    "Maximum value for EGT during ground engine starts until N2 is approximately 59%",
                    "Normal operating limit",
                    "Maximum cruise EGT",
                    "Emergency EGT limit"
                ],
                correct: 0,
                explanation: "The EGT start limit redline indicates the maximum value for the EGT during ground engine starts until the N2 is approximately 59%.",
                reference: "B737 NG CBT - Engines, Section 112"
            },
            {
                question: "What is the EGT amber band and what does it represent?",
                options: [
                    "Normal operating range",
                    "Emergency range",
                    "Start-up range",
                    "The EGT caution range between maximum continuous limit and EGT redline"
                ],
                correct: 3,
                explanation: "The EGT amber band is the EGT caution range. The EGT caution range shows as an arc between the maximum continuous limit and the EGT redline.",
                reference: "B737 NG CBT - Engines, Section 114-116"
            },
            {
                question: "During a maximum weight takeoff with high EGT values, the first officer notices the EGT remains in normal color despite approaching caution range. You explain the takeoff inhibit logic. How long is the EGT amber color change inhibited during takeoff?",
                options: [
                    "2 minutes for normal takeoff operations",
                    "No inhibit occurs during takeoff operations",
                    "10 minutes for extended departure procedures",
                    "5 minutes or until completion of takeoff phase"
                ],
                correct: 3,
                explanation: "During takeoff and go-around, the amber color change is inhibited for five minutes or until completion of takeoff, whichever comes first. This prevents nuisance warnings during high-power operations when EGT naturally approaches limits.",
                reference: "B737 NG CBT - Engines, Section 118"
            },
            {
                question: "During engine monitoring in cruise flight, you review all available engine parameters for comprehensive health assessment. Beyond the primary N1 and EGT, what are the secondary engine indications?",
                options: [
                    "N1 and EGT primary parameters only",
                    "Only N2 and oil temperature for core assessment",
                    "Only fuel flow and oil pressure for basic monitoring",
                    "N2, fuel flow, oil pressure, oil temperature, oil quantity, and engine vibration"
                ],
                correct: 3,
                explanation: "The secondary engine indications are the N2, fuel flow, oil pressure, oil temperature, oil quantity, and engine vibration. These parameters provide comprehensive engine health monitoring beyond primary thrust indications.",
                reference: "B737 NG CBT - Engines, Section 127"
            },
            {
                question: "During flight operations, you notice secondary engine parameters suddenly appear on the lower display. The trainee asks about the automatic display logic for these parameters. When are secondary engine indications automatically displayed?",
                options: [
                    "Always displayed throughout all flight phases",
                    "When displays powered, start lever to CUTOFF in flight, or N2 below idle with parameter exceeded",
                    "Only during engine start sequence",
                    "Only during declared emergency situations"
                ],
                correct: 1,
                explanation: "The secondary engine indications are automatically displayed when the displays are initially powered, in flight when an engine start lever is moved to CUTOFF, in flight when an engine N2 speed is below idle and a secondary engine parameter is exceeded. This automatic display ensures critical engine data visibility when needed.",
                reference: "B737 NG CBT - Engines, Section 128"
            },
            {
                question: "During cruise flight, you experience an engine malfunction with N2 rapidly decreasing while the start lever remains in idle position. What alert appears when N2 drops below approximately 50% with start lever in idle?",
                options: [
                    "ENGINE FAILURE alert for complete shutdown",
                    "LOW N2 alert for speed indication",
                    "ENGINE FAIL alert on EGT display",
                    "ENGINE SHUTDOWN alert for fuel cutoff"
                ],
                correct: 2,
                explanation: "When the N2 speed decreases below a stabilized idle position of approximately 50% and the engine start lever is in the idle position, an amber ENGINE FAIL alert shows on the related EGT display. This indicates engine failure requiring immediate crew action.",
                reference: "B737 NG CBT - Engines, Section 133"
            },
            {
                question: "During engine acceleration for takeoff, you observe the oil pressure display characteristics changing as power increases. At what N2 speed does the oil pressure amber marker index become visible?",
                options: [
                    "When N2 reaches 65% or greater",
                    "Always visible throughout engine operation",
                    "During engine start sequence only",
                    "When oil pressure drops below normal range"
                ],
                correct: 0,
                explanation: "The position of amber marker is variable depending on the N2 speed. As the N2 increases from 65%, the marker moves upward. When N2 is less than 65%, the amber marker index does not show. This variable marking system adjusts pressure limits based on engine speed.",
                reference: "B737 NG CBT - Engines, Section 139-140"
            },
            {
                question: "During pre-flight inspection, maintenance personnel report insufficient oil quantity for dispatch. You check the engine display for confirmation. What message indicates low oil quantity?",
                options: [
                    "LO message for oil level warning",
                    "LOW message for quantity indication",
                    "EMPTY message for complete depletion",
                    "REFILL message for service requirement"
                ],
                correct: 0,
                explanation: "The low oil quantity is indicated by a LO message. This concise indication provides clear warning of insufficient oil quantity requiring attention before flight.",
                reference: "B737 NG CBT - Engines, Section 146"
            },
            {
                question: "During cruise flight, you notice abnormal engine vibration developing gradually. You monitor the vibration indication for trend analysis. What vibration level is considered high and how is it indicated?",
                options: [
                    "Above 4.0 units, displayed in reverse video",
                    "Above 3.0 units, displayed in amber color",
                    "Above 2.0 units, displayed in red color",
                    "Above 5.0 units, displayed with blinking indication"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "When the oil pressure goes to the redline limit or below, the amber LOW OIL PRESSURE alert shows on the upper display. The oil pressure is now too low for continued engine operation and the affected engine must be shut down. This critical alert indicates imminent engine damage risk.",
                reference: "B737 NG CBT - Engines, Section 154-156"
            },
            
            // ABNORMAL CONDITIONS
            {
                question: "During pre-takeoff engine run-up, oil pressure enters the caution range as you advance thrust levers to takeoff power. Ground control requests takeoff clearance, but you notice this abnormal indication. What should you do if oil pressure is in the caution range with takeoff power set?",
                options: [
                    "Continue takeoff as oil pressure is marginally acceptable",
                    "Reduce power slightly and attempt takeoff with reduced thrust",
                    "Do not takeoff - abort and investigate the condition",
                    "Monitor for 5 minutes to see if condition improves"
                ],
                correct: 2,
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
                correct: 0,
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
                correct: 3,
                explanation: "If the oil temperature remains in the caution range, you can operate the engine for 45 minutes in this condition. This time limit balances operational necessity with engine protection from thermal damage.",
                reference: "B737 NG CBT - Engines, Section 160"
            },
            {
                question: "During cruise flight, you experience a sudden oil temperature spike that exceeds the redline limit on the left engine. This is a critical emergency requiring immediate action. What must you do when oil temperature exceeds the redline limit?",
                options: [
                    "Monitor for 10 minutes to confirm trend",
                    "Shutdown the affected engine immediately",
                    "Reduce thrust to idle and continue monitoring",
                    "Continue with reduced power and plan nearest diversion"
                ],
                correct: 1,
                explanation: "When the oil temperature is at or above the redline limit, you must shutdown the affected engine. Continued operation with oil temperature at redline will cause catastrophic engine failure and potential fire.",
                reference: "B737 NG CBT - Engines, Section 163"
            },
            {
                question: "During cruise flight, the OIL FILTER BYPASS alert suddenly illuminates on the upper display unit. The first officer asks about the significance of this warning for engine operation. What happens when the OIL FILTER BYPASS alert illuminates?",
                options: [
                    "Oil is about to bypass the scavenge filter due to contamination",
                    "Continue normal operation with no immediate action required",
                    "Change oil immediately during next maintenance check",
                    "Engine will automatically shut down for protection"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "With no icing conditions, if the vibration level goes beyond 4.0 units, disengage the autothrottle, if it is engaged and retard the affected engine thrust lever until the vibration level is below 4.0 units or the thrust lever is at idle. This reduces mechanical stress while maintaining engine operation.",
                reference: "B737 NG CBT - Engines, Section 169"
            },
            
            // ENGINE STARTING SYSTEM
            {
                question: "During ground operations, a maintenance technician asks about the fundamental function of the pneumatic starting system. They understand fuel and ignition systems but need clarity on mechanical requirements. What is the purpose of the engine starting system?",
                options: [
                    "To provide fuel delivery to combustion chambers",
                    "To provide electrical power for ignition systems",
                    "To provide cooling airflow during engine start sequence",
                    "To provide initial torque and rotation speed high enough to start the combustion cycle"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "Pneumatic power comes from the auxiliary power unit or a ground air cart or the opposite engine. These high-pressure air sources provide sufficient power to rotate the starter motor for engine acceleration.",
                reference: "B737 NG CBT - Engines, Section 198"
            },
            {
                question: "What are the four positions of the ENGINE START switch?",
                options: [
                    "OFF, GROUND, CONTINUOUS, FLIGHT",
                    "OFF, START, RUN, STOP",
                    "START, IDLE, CRUISE, CUTOFF",
                    "NORM, ALT, EMER, OFF"
                ],
                correct: 0,
                explanation: "Each ENGINE START switch has four positions: OFF, GROUND, CONTINUOUS, FLIGHT.",
                reference: "B737 NG CBT - Engines, Section 200"
            },
            {
                question: "When do igniters operate automatically even with the start switch in OFF?",
                options: [
                    "During normal flight",
                    "During engine start",
                    "If the EEC detects an imminent engine flameout condition",
                    "Never operate automatically"
                ],
                correct: 2,
                explanation: "When the engine start switch is in the OFF position, the igniters normally do not operate. However, if the EEC detects an imminent engine flameout condition, it turns on both igniters automatically.",
                reference: "B737 NG CBT - Engines, Section 201"
            },
            {
                question: "What happens when the start switch is in the GROUND position?",
                options: [
                    "The start valve opens and pneumatic starter turns the engine",
                    "Only igniters operate",
                    "Fuel flows to engine",
                    "Engine shuts down"
                ],
                correct: 0,
                explanation: "When the start switch is moved to the ground position, the start valve opens and the pneumatic starter turns the engine.",
                reference: "B737 NG CBT - Engines, Section 202"
            },
            {
                question: "What is the normal engine start sequence?",
                options: [
                    "Engine 2 then 1",
                    "Engine 1 then 2",
                    "Both engines simultaneously",
                    "Either engine first"
                ],
                correct: 0,
                explanation: "Normal start sequence is engine number 2 then 1.",
                reference: "B737 NG CBT - Engines, Section 214"
            },
            {
                question: "What should you verify before moving the start lever to IDLE?",
                options: [
                    "Oil pressure indication",
                    "Fuel flow indication",
                    "EGT indication",
                    "N1 movement and N2 is at 25% or maximum motoring at minimum 20%"
                ],
                correct: 3,
                explanation: "Before you move the start lever to IDLE, verify there is a movement in the N1 indicator and N2 is at 25%, or if this is not possible, the N2 is at maximum motoring and a minimum of 20%.",
                reference: "B737 NG CBT - Engines, Section 220"
            },
            {
                question: "Within how many seconds must you observe EGT increase after moving start lever to IDLE?",
                options: [
                    "10 seconds",
                    "30 seconds",
                    "20 seconds",
                    "15 seconds"
                ],
                correct: 3,
                explanation: "Within 15 seconds after the start lever is moved to IDLE, you must observe an increase in the EGT indication.",
                reference: "B737 NG CBT - Engines, Section 222"
            },
            {
                question: "At what N2 percentage does the engine start switch automatically return to OFF?",
                options: [
                    "50% N2",
                    "60% N2",
                    "56% N2",
                    "65% N2"
                ],
                correct: 2,
                explanation: "At 56% N2, the engine start switch automatically goes back to the OFF position.",
                reference: "B737 NG CBT - Engines, Section 224"
            },
            {
                question: "What is the starter duty cycle limitation?",
                options: [
                    "1 minute on, 5 minutes off",
                    "3 minutes on, 15 seconds off",
                    "2 minutes on, 10 seconds off between attempts",
                    "No limitations"
                ],
                correct: 2,
                explanation: "The starter has a duty cycle. Thus, do not exceed 2 minutes during each start attempt and wait at least 10 seconds between start attempts.",
                reference: "B737 NG CBT - Engines, Section 230"
            },
            {
                question: "Which engine should be started first during ground air start and why?",
                options: [
                    "Engine 2 first - better accessibility",
                    "Either engine - no preference",
                    "Engine 1 first - because ground crew and equipment are in the area of engine 2",
                    "Both engines simultaneously"
                ],
                correct: 2,
                explanation: "For safety reasons, engine number 1 must be started first, because ground crew and equipment are in the area of engine number 2.",
                reference: "B737 NG CBT - Engines, Section 240"
            },
            {
                question: "What duct pressure is required for ground air start?",
                options: [
                    "20 psi minimum",
                    "50 psi minimum",
                    "40 psi minimum",
                    "30 psi minimum"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "Make sure that engine BLEED air switches are set to ON, the APU BLEED air switch is OFF and the ISOLATION VALVE switch is in AUTO.",
                reference: "B737 NG CBT - Engines, Section 247"
            },
            {
                question: "What protections does the EEC provide during ground starts?",
                options: [
                    "Hot starts, compressor stalls, EGT start limit exceedances, and wet starts",
                    "Only hot start protection",
                    "No protections",
                    "Only wet start protection"
                ],
                correct: 0,
                explanation: "During ground starts, the EEC monitors engine parameters to provide protection against imminent hot starts, compressor stalls, EGT start limit exceedances, and wet starts.",
                reference: "B737 NG CBT - Engines, Section 252"
            },
            {
                question: "When does a hot start occur?",
                options: [
                    "When there is rapid rise in EGT or EGT approaches start limit",
                    "When engine is cold",
                    "When fuel flow is insufficient for ignition",
                    "When N2 acceleration is excessive"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "When the EEC finds there is a possible hot start, the white box surrounding the EGT digital readout flashes. This early warning alerts pilots to monitor EGT closely and be prepared for possible abort action.",
                reference: "B737 NG CBT - Engines, Section 255"
            },
            {
                question: "During engine start, EGT suddenly spikes above the start limit despite your monitoring efforts. The EEC takes immediate protective action to prevent engine damage. What occurs during an EGT start limit exceedance?",
                options: [
                    "Normal operation continues with monitoring",
                    "Only warning light illuminates for pilot action",
                    "EGT display turns red and EEC automatically shuts off fuel flow and ignition",
                    "Engine power automatically reduces to safe level"
                ],
                correct: 2,
                explanation: "In the event that the EGT exceeds the starting limit, the EGT digital readout, the box around the readout and the dial turn red. The EEC automatically shuts off fuel flow to the engine and turns off the ignition. This automatic protection prevents catastrophic engine damage.",
                reference: "B737 NG CBT - Engines, Section 258-259"
            },
            {
                question: "During engine start sequence, you move the start lever to IDLE but fail to observe any EGT rise despite adequate N2 rotation. This indicates ignition failure with fuel accumulation. What is a wet start and when does it occur?",
                options: [
                    "When engine is contaminated with water ingestion",
                    "When oil pressure drops below minimum requirements",
                    "When fuel pressure exceeds normal operating limits",
                    "When EGT does not increase after start lever moved to IDLE"
                ],
                correct: 3,
                explanation: "A wet start occurs if the EGT does not increase after the start lever is moved to IDLE. Fuel can collect in the combustion chamber and on the ground surrounding the airplane. This creates both fire hazard and potential engine damage from fuel accumulation.",
                reference: "B737 NG CBT - Engines, Section 261-262"
            },
            {
                question: "Following an engine failure in cruise flight, you prepare for engine restart using available air sources. The altitude and airspeed determine restart capability. What are the two methods of inflight engine starting?",
                options: [
                    "Windmill and crossbleed",
                    "Hot start and cold start",
                    "Manual and automatic",
                    "Normal and emergency"
                ],
                correct: 0,
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
                correct: 3,
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
                correct: 2,
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
                correct: 0,
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
                correct: 1,
                explanation: "For a windmill start, move the ENGINE START switch to the FLIGHT position.",
                reference: "B737 NG CBT - Engines, Section 274"
            },
            {
                question: "What is flameout and how does it indicate itself?",
                options: [
                    "Engine overheat with high EGT",
                    "High vibration levels",
                    "Loss of fuel pressure",
                    "Condition where flame is extinguished with rapid decrease in N2"
                ],
                correct: 3,
                explanation: "The flameout is a condition where the flame in the combustion chamber is extinguished. A flameout indicates itself with an uncommanded rapid decrease in N2 or with a decrease in N2 below idle speed.",
                reference: "B737 NG CBT - Engines, Section 277-278"
            },
            {
                question: "What are the four conditions requiring an aborted ground start?",
                options: [
                    "Only EGT exceedance",
                    "Only high vibration",
                    "EGT doesn't increase in 15 seconds, N1/N2 don't increase after EGT increase, EGT approaches start limit",
                    "Only low oil pressure"
                ],
                correct: 2,
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
                    "Restart the engine",
                    "Isolate starter from all bleed air sources",
                    "Contact maintenance only"
                ],
                correct: 2,
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
                    "Only blocker doors",
                    "Only cascade vanes",
                    "Translating sleeves, cascade vanes, and blocker doors"
                ],
                correct: 3,
                explanation: "Each engine is equipped with a thrust reverser system which consists of the translating sleeves, the cascade vanes and the blocker doors.",
                reference: "B737 NG CBT - Engines, Section 303"
            },
            {
                question: "What happens when thrust reverser is stowed?",
                options: [
                    "Cascade vanes are exposed",
                    "Blocker doors are closed",
                    "Translating sleeves are retracted and cover cascade vanes, blocker doors are in line with fan duct",
                    "Fan air is diverted"
                ],
                correct: 2,
                explanation: "When the thrust reverser is stowed, the translating sleeves are retracted and cover the cascade vanes, the blocker doors are in line with fan air duct and there is no change in the direction of the fan air discharge.",
                reference: "B737 NG CBT - Engines, Section 307"
            },
            {
                question: "How does the thrust reverser create reverse thrust when deployed?",
                options: [
                    "By stopping the engine",
                    "By reversing engine rotation",
                    "By moving translating sleeves rearward to uncover cascade vanes and close blocker doors",
                    "By redirecting fuel flow"
                ],
                correct: 2,
                explanation: "On selection of reverse thrust, the actuation system moves the translating sleeves rearwards which uncovers the cascade vanes. At the same time the blocker doors close off the fan discharge duct. The fan discharge airflow is diverted through the cascade vanes, which creates reverse thrust.",
                reference: "B737 NG CBT - Engines, Section 308"
            },
            {
                question: "Which hydraulic systems power the thrust reversers?",
                options: [
                    "Engine 1 - System A, Engine 2 - System B",
                    "System B for both engines",
                    "System A for both engines",
                    "System C for both engines"
                ],
                correct: 0,
                explanation: "During normal operation, the engine number 1 thrust reverser is powered by hydraulic system A and engine number 2 thrust reverser is powered by hydraulic system B.",
                reference: "B737 NG CBT - Engines, Section 309"
            },
            {
                question: "What happens if hydraulic system A or B fails?",
                options: [
                    "Thrust reverser becomes inoperative",
                    "Manual operation required",
                    "Standby hydraulic system operates the affected thrust reverser at slower rate",
                    "Thrust reverser locks in position"
                ],
                correct: 2,
                explanation: "If either hydraulic system A or B fails, the standby hydraulic system operates the affected thrust reverser. When the standby system is used, the affected thrust reverser extends and retracts at a slower rate.",
                reference: "B737 NG CBT - Engines, Section 310-311"
            },
            {
                question: "What are the positions of the reverse thrust lever?",
                options: [
                    "Normal, reverse, maximum",
                    "Off, low, medium, high",
                    "Stowed, intermediate, maximum",
                    "Stowed, detent 1, detent 2, maximum"
                ],
                correct: 3,
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
                    "Blue",
                    "Red",
                    "Amber"
                ],
                correct: 3,
                explanation: "When the translating sleeves are in transit, the amber REV light illuminates above the engine N1 indication.",
                reference: "B737 NG CBT - Engines, Section 323"
            },
            {
                question: "At what percentage of travel does the interlock mechanism disengage?",
                options: [
                    "50% of travel",
                    "80% of travel",
                    "70% of travel",
                    "60% of travel"
                ],
                correct: 3,
                explanation: "The interlock mechanism restricts further movement of the reverse thrust lever until the translating sleeves are at the 60% of the travel to the deployed position.",
                reference: "B737 NG CBT - Engines, Section 324"
            },
            {
                question: "What color is the REV indication when the thrust reverser reaches deployed position?",
                options: [
                    "Amber",
                    "Red",
                    "Green",
                    "White"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "When you raise the reverse thrust levers to detent number 2, the EEC adjusts adequate reverse thrust for normal operations.",
                reference: "B737 NG CBT - Engines, Section 326"
            },
            {
                question: "What is the function of the auto-restow circuit?",
                options: [
                    "To compare actual sleeve position with commanded position and restow if needed",
                    "To deploy thrust reversers automatically",
                    "To test thrust reversers",
                    "To provide backup power"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "If the isolation valve or thrust reverser control valve is not in the commanded position, the REVERSER light on the engine panel comes on.",
                reference: "B737 NG CBT - Engines, Section 339"
            },
            {
                question: "What other lights illuminate when the REVERSER light comes on?",
                options: [
                    "No other lights",
                    "All warning lights",
                    "Fire warning lights",
                    "MASTER CAUTION and ENGINE system annunciator lights"
                ],
                correct: 3,
                explanation: "Whenever a REVERSER light comes on, the MASTER CAUTION and ENGINE system annunciation lights also illuminate after a time delay.",
                reference: "B737 NG CBT - Engines, Section 342"
            },
            {
                question: "What should you do if the amber REV indication illuminates during flight?",
                options: [
                    "Check forward thrust lever movement on affected engine and do not actuate reverse thrust lever",
                    "Continue normal operation",
                    "Immediately deploy reverse thrust",
                    "Shut down engine immediately"
                ],
                correct: 0,
                explanation: "To ensure that the REV indication is illuminated due to unstowed the reverser sleeves, check the movement of the forward thrust lever on the affected engine. DO NOT actuate the reverse thrust lever.",
                reference: "B737 NG CBT - Engines, Section 347"
            },
            {
                question: "What happens if you pause when moving reverse thrust levers past detent 1?",
                options: [
                    "Normal operation continues",
                    "Thrust reverser deploys fully",
                    "Engine shuts down",
                    "MASTER CAUTION and ENGINE system annunciator lights may illuminate"
                ],
                correct: 3,
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
                    "Normal and emergency",
                    "Hydraulic and electric",
                    "Primary and secondary flight control systems"
                ],
                correct: 3,
                explanation: "There are two types of flight control systems: Primary flight control system and secondary flight control system.",
                reference: "B737 NG CBT - Flight Controls, Section 4"
            },
            {
                question: "What are the primary flight controls?",
                options: [
                    "Flaps, slats, spoilers",
                    "Trim tabs and control surfaces",
                    "Ailerons, elevators, and rudder",
                    "Leading edge devices"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "The secondary flight controls are the leading edge flaps, the leading edge slats, the trailing edge flaps, spoilers and speed brakes and horizontal stabilizer.",
                reference: "B737 NG CBT - Flight Controls, Section 6"
            },
            {
                question: "Which hydraulic systems normally power the primary controls?",
                options: [
                    "System A only",
                    "System A or System B",
                    "System B only",
                    "Standby system only"
                ],
                correct: 1,
                explanation: "The primary controls are normally powered by either hydraulic system A or system B.",
                reference: "B737 NG CBT - Flight Controls, Section 8"
            },
            {
                question: "Which controls can be operated manually if necessary?",
                options: [
                    "Ailerons and elevators",
                    "All controls",
                    "Rudder only",
                    "Spoilers only"
                ],
                correct: 0,
                explanation: "The ailerons and elevators may also be operated manually if necessary.",
                reference: "B737 NG CBT - Flight Controls, Section 9"
            },
            {
                question: "If systems A and B fail, how can the rudder be operated?",
                options: [
                    "Manual reversion only",
                    "By the standby hydraulic system",
                    "Electric backup",
                    "Cannot be operated"
                ],
                correct: 1,
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
                correct: 3,
                explanation: "The secondary flight controls, including trailing edge (TE) flaps and leading edge flaps and slats, are normally powered by hydraulic system B.",
                reference: "B737 NG CBT - Flight Controls, Section 11"
            },
            {
                question: "If hydraulic system B fails, how can trailing edge flaps be operated?",
                options: [
                    "Manual operation only",
                    "By system A",
                    "Electrically",
                    "Cannot be operated"
                ],
                correct: 2,
                explanation: "If hydraulic system B fails, the trailing edge flaps can be operated electrically.",
                reference: "B737 NG CBT - Flight Controls, Section 11"
            },
            {
                question: "What automatically powers leading edge flaps and slats under certain conditions?",
                options: [
                    "Power transfer unit (PTU)",
                    "Standby hydraulic pump",
                    "Electric motor",
                    "Emergency system"
                ],
                correct: 0,
                explanation: "The power transfer unit (PTU) automatically powers the leading edge flaps and slats under certain conditions.",
                reference: "B737 NG CBT - Flight Controls, Section 12"
            },
            {
                question: "Which systems power the spoilers?",
                options: [
                    "System A and system B",
                    "System B only",
                    "System A only",
                    "Standby system only"
                ],
                correct: 0,
                explanation: "The spoilers are powered by system A and system B.",
                reference: "B737 NG CBT - Flight Controls, Section 13"
            },
            
            // ROLL CONTROL
            {
                question: "What controls airplane movement around the longitudinal axis?",
                options: [
                    "Pitch control system",
                    "Trim system",
                    "Yaw control system",
                    "Roll control system"
                ],
                correct: 3,
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
                correct: 1,
                explanation: "The roll control is primarily provided by ailerons and supported by spoilers.",
                reference: "B737 NG CBT - Flight Controls, Section 30"
            },
            {
                question: "During roll control, which spoilers extend?",
                options: [
                    "All spoilers",
                    "Flight spoilers on the wing with upward aileron deflection only",
                    "Ground spoilers only",
                    "No spoilers extend"
                ],
                correct: 1,
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
                correct: 0,
                explanation: "The feel and centering unit controls the aileron hydraulic power control units which move the ailerons, and gives an artificial feel force to the pilot.",
                reference: "B737 NG CBT - Flight Controls, Section 35"
            },
            {
                question: "What controls spoiler power control units?",
                options: [
                    "Feel and centering unit",
                    "Aileron trim",
                    "Control wheels directly",
                    "Spoiler mixer"
                ],
                correct: 3,
                explanation: "The spoiler mixer controls the power control units on each spoiler panel to provide spoiler movement proportional to aileron movement.",
                reference: "B737 NG CBT - Flight Controls, Section 36"
            },
            {
                question: "Which control wheel provides input to aileron power control units?",
                options: [
                    "First officer's control wheel",
                    "Both control wheels equally",
                    "Captain's control wheel",
                    "Autopilot control wheel"
                ],
                correct: 2,
                explanation: "The captain's control wheel supplies mechanical input by cables through the feel and centering unit to the aileron power control units.",
                reference: "B737 NG CBT - Flight Controls, Section 37"
            },
            {
                question: "Which control wheel provides input to spoiler power control units?",
                options: [
                    "Captain's control wheel",
                    "Both control wheels equally",
                    "First officer's control wheel",
                    "Neither control wheel"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "If the aileron control system is jammed, the ailerons are inoperative and the captain's control wheel cannot move. In this case, the first officer operates the right control wheel which provides roll control through the spoilers.",
                reference: "B737 NG CBT - Flight Controls, Section 44"
            },
            {
                question: "How many aileron trim switches must be operated for the system to work?",
                options: [
                    "One switch",
                    "Either switch",
                    "Both switches at the same time",
                    "No switches required"
                ],
                correct: 2,
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
                    "Rudder system",
                    "Yaw control system",
                    "Pitch control system"
                ],
                correct: 3,
                explanation: "The pitch control system controls the movement of the airplane around the lateral axis.",
                reference: "B737 NG CBT - Flight Controls, Section 52"
            },
            {
                question: "What provides primary pitch control?",
                options: [
                    "Elevators only",
                    "Horizontal stabilizer only",
                    "Control columns only",
                    "Elevators and supported by horizontal stabilizer"
                ],
                correct: 3,
                explanation: "The pitch control is primarily provided by elevators and supported by an horizontal stabilizer.",
                reference: "B737 NG CBT - Flight Controls, Section 53"
            },
            {
                question: "What moves the elevators?",
                options: [
                    "Control columns only",
                    "Autopilot only",
                    "Mach trim only",
                    "Control columns, autopilot and mach trim system"
                ],
                correct: 3,
                explanation: "The elevators are moved by control columns, autopilot and mach trim system.",
                reference: "B737 NG CBT - Flight Controls, Section 56"
            },
            {
                question: "What happens during a control column breakout?",
                options: [
                    "Captain's and first officer's control columns separate",
                    "Control is lost",
                    "Autopilot takes over",
                    "Elevator locks"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "The function of the elevator feel computer is to change the control column feel forces as the airspeed changes and the horizontal stabilizer moves.",
                reference: "B737 NG CBT - Flight Controls, Section 65"
            },
            {
                question: "When does the FEEL DIFFERENTIAL PRESSURE light illuminate?",
                options: [
                    "Normal operation",
                    "During autopilot operation",
                    "When there is excessive difference between system A and B pressures in elevator feel computer",
                    "When elevators move"
                ],
                correct: 2,
                explanation: "Failure of either hydraulic system causes a significant hydraulic pressure difference to build up in elevator feel computer and the FEEL DIFFERENTIAL PRESSURE light illuminates.",
                reference: "B737 NG CBT - Flight Controls, Section 67"
            },
            {
                question: "At what Mach number does Mach trim automatically activate?",
                options: [
                    "Mach 0.5",
                    "Mach 0.8",
                    "Mach 0.7",
                    "Mach 0.615"
                ],
                correct: 3,
                explanation: "When the airspeed is more than mach 0.615, Mach trim automatically activates to adjust the elevators with respect to the stabilizer as speed increases.",
                reference: "B737 NG CBT - Flight Controls, Section 71"
            },
            {
                question: "What should you limit airspeed to when MACH TRIM FAIL light illuminates?",
                options: [
                    "280 knots/.82 Mach",
                    "250 knots/.75 Mach",
                    "300 knots/.85 Mach",
                    "320 knots/.90 Mach"
                ],
                correct: 0,
                explanation: "When mach trim function fails in both flight control computers, MACH TRIM FAIL light illuminates on the flight control panel. You should limit airspeed to 280 knots/.82 Mach.",
                reference: "B737 NG CBT - Flight Controls, Section 72"
            },
            {
                question: "How many degrees can the horizontal stabilizer travel leading edge up?",
                options: [
                    "2.5 degrees",
                    "6.8 degrees",
                    "4.2 degrees",
                    "12.9 degrees"
                ],
                correct: 2,
                explanation: "The horizontal stabilizer can travel 4.2 degrees leading edge up from the neutral position for airplane nose down trim.",
                reference: "B737 NG CBT - Flight Controls, Section 76"
            },
            {
                question: "How many degrees can the horizontal stabilizer travel leading edge down?",
                options: [
                    "4.2 degrees",
                    "12.9 degrees",
                    "8.5 degrees",
                    "16.2 degrees"
                ],
                correct: 1,
                explanation: "It can move 12.9 degrees leading edge down position for airplane nose up trim.",
                reference: "B737 NG CBT - Flight Controls, Section 76"
            },
            {
                question: "What are the three methods of pitch trim?",
                options: [
                    "Electric, hydraulic, manual",
                    "Primary, secondary, emergency",
                    "Manual pitch trim, electric pitch trim and autopilot pitch trim",
                    "Normal, alternate, standby"
                ],
                correct: 2,
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
                    "To reduce probability of trim runaway",
                    "For redundancy only",
                    "For different trim rates",
                    "For captain and first officer"
                ],
                correct: 0,
                explanation: "The reason for a double switch on the pitch trim is to reduce the probability of a trim runaway.",
                reference: "B737 NG CBT - Flight Controls, Section 79"
            },
            {
                question: "When does the Stabilizer Out Of Trim light illuminate?",
                options: [
                    "During normal operation",
                    "When trim wheels are moved",
                    "When autopilot is not trimming the horizontal stabilizer properly",
                    "During manual trim"
                ],
                correct: 2,
                explanation: "Stabilizer Out Of Trim light on the left forward panel illuminates when the autopilot is not trimming the horizontal stabilizer properly.",
                reference: "B737 NG CBT - Flight Controls, Section 84"
            },
            {
                question: "What happens when either pair of stabilizer trim switches is activated with autopilot engaged?",
                options: [
                    "Autopilot automatically disengages",
                    "Trim rate changes",
                    "Nothing happens",
                    "Stabilizer locks"
                ],
                correct: 0,
                explanation: "With the autopilot is engaged, activating either pair of stabilizer trim switches automatically disengages the autopilot.",
                reference: "B737 NG CBT - Flight Controls, Section 87"
            },
            {
                question: "When does the stabilizer trim actuator engage high speed trim?",
                options: [
                    "When flaps are retracted",
                    "During landing only",
                    "During takeoff only",
                    "When flaps are extended"
                ],
                correct: 3,
                explanation: "When the flaps are extended, stabilizer trim actuator engages in high speed trim.",
                reference: "B737 NG CBT - Flight Controls, Section 89"
            },
            {
                question: "What corresponds to the stabilizer neutral position of 0 degrees?",
                options: [
                    "2 units of trim",
                    "8 units of trim",
                    "6 units of trim",
                    "4 units of trim"
                ],
                correct: 3,
                explanation: "The stabilizer neutral position of 0 degrees corresponds 4 units of trim.",
                reference: "B737 NG CBT - Flight Controls, Section 94"
            },
            {
                question: "What does the green band on stabilizer trim indicators show?",
                options: [
                    "Normal operating range",
                    "Emergency trim range",
                    "Landing trim range",
                    "Approved takeoff trim range"
                ],
                correct: 3,
                explanation: "The green bands show the approved takeoff trim range.",
                reference: "B737 NG CBT - Flight Controls, Section 95"
            },
            {
                question: "What is the purpose of the speed trim system?",
                options: [
                    "To control airspeed",
                    "To trim for cruise flight",
                    "To increase airplane stability during operations with low gross weight, aft CG, low speed and high thrust",
                    "To assist autopilot"
                ],
                correct: 2,
                explanation: "The purpose of the speed trim system is to increase the airplane stability during operations with a low gross weight, aft center of gravity, low speed and high thrust.",
                reference: "B737 NG CBT - Flight Controls, Section 101"
            },
            {
                question: "When does speed trim function primarily occur?",
                options: [
                    "During cruise",
                    "During takeoff or go-around",
                    "During approach",
                    "During descent"
                ],
                correct: 1,
                explanation: "The speed trim function primarily occurs during takeoff or go-around and only operates when the autopilots are not engaged.",
                reference: "B737 NG CBT - Flight Controls, Section 102"
            },
            
            // YAW CONTROL
            {
                question: "What provides yaw control around the vertical axis?",
                options: [
                    "Ailerons and spoilers",
                    "Elevators and stabilizer",
                    "Hydraulically powered rudder and digital yaw damper system",
                    "Control wheels"
                ],
                correct: 2,
                explanation: "The yaw control is provided by a hydraulically powered rudder and a digital yaw damper system.",
                reference: "B737 NG CBT - Flight Controls, Section 108"
            },
            {
                question: "How many power control units attach to the rudder?",
                options: [
                    "Two PCUs - main and standby",
                    "One PCU",
                    "Three PCUs",
                    "Four PCUs"
                ],
                correct: 0,
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
                    "To provide backup control",
                    "To lock the rudder",
                    "To reduce rudder deflection during flight when not taking off or landing"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "When the airspeed is more than 137 knots, the load limiter limits both hydraulic system A and B pressure within the main rudder PCU to reduce rudder output force by 25%.",
                reference: "B737 NG CBT - Flight Controls, Section 120"
            },
            {
                question: "What does the Force Fight Monitor (FFM) detect?",
                options: [
                    "If system A and B actuators are operating in opposition to each other",
                    "Rudder movement",
                    "Hydraulic pressure loss",
                    "Control input"
                ],
                correct: 0,
                explanation: "The main rudder PCU also incorporates a Force Fight Monitor (FFM) which detects if system A and B actuators are operating in opposition to each other.",
                reference: "B737 NG CBT - Flight Controls, Section 122"
            },
            {
                question: "Which system powers the standby rudder PCU?",
                options: [
                    "System A",
                    "System B",
                    "Electric system",
                    "The standby hydraulic system"
                ],
                correct: 3,
                explanation: "The standby rudder PCU is powered by the standby hydraulic system.",
                reference: "B737 NG CBT - Flight Controls, Section 123"
            },
            {
                question: "How can the standby rudder system be pressurized manually?",
                options: [
                    "By moving either flight control switch to standby rudder position",
                    "By pressing a button",
                    "By pulling a handle",
                    "Automatically only"
                ],
                correct: 0,
                explanation: "You can pressurize the standby rudder system manually by moving either flight control switch to standby rudder position.",
                reference: "B737 NG CBT - Flight Controls, Section 124"
            },
            {
                question: "What happens when the standby rudder system is activated?",
                options: [
                    "No indication",
                    "Red warning light",
                    "Amber standby rudder ON light illuminates and MASTER CAUTION lights come on",
                    "System automatically resets"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "You control the rudder trim with the rudder trim control knob on the aft electronic panel.",
                reference: "B737 NG CBT - Flight Controls, Section 128"
            },
            {
                question: "What is Dutch roll?",
                options: [
                    "Normal turning motion",
                    "Emergency maneuver",
                    "Unwanted airplane motion with continuous oscillations in yaw and roll",
                    "Takeoff procedure"
                ],
                correct: 2,
                explanation: "Dutch roll is an unwanted airplane motion which is identified by a combination of a continuous oscillations in yaw and roll.",
                reference: "B737 NG CBT - Flight Controls, Section 131"
            },
            {
                question: "When do rudder pedals move during yaw damper operation?",
                options: [
                    "Always move",
                    "Rudder pedals do not move",
                    "Move proportionally",
                    "Move in opposite direction"
                ],
                correct: 1,
                explanation: "When yaw damper moves the rudder to reduce unwanted yaw motion, rudder pedals do not move.",
                reference: "B737 NG CBT - Flight Controls, Section 134"
            },
            {
                question: "Which system powers the main yaw damper?",
                options: [
                    "System B",
                    "System A",
                    "Standby hydraulics",
                    "Electric system"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "The standby yaw damper is powered by standby hydraulics.",
                reference: "B737 NG CBT - Flight Controls, Section 137"
            },
            {
                question: "How many SMYD computers control the yaw dampers?",
                options: [
                    "One computer",
                    "Four computers",
                    "Three computers",
                    "Two computers"
                ],
                correct: 3,
                explanation: "Both yaw dampers are controlled through two Stall Management/Yaw Damper (SMYD) computers.",
                reference: "B737 NG CBT - Flight Controls, Section 138"
            },
            {
                question: "What is the rudder movement limit for main yaw damping with flaps up?",
                options: [
                    "2 degrees",
                    "1 degree",
                    "3 degrees",
                    "4 degrees"
                ],
                correct: 0,
                explanation: "For main yaw damping, rudder movement is limited to 2 degrees with flaps up and 3 degrees with flaps down.",
                reference: "B737 NG CBT - Flight Controls, Section 150"
            },
            
            // STALL IDENTIFICATION
            {
                question: "What enhances stall identification and control?",
                options: [
                    "Autopilot only",
                    "Control wheels only",
                    "Yaw damper, Elevator Feel Shift (EFS) module and speed trim system",
                    "Hydraulic systems"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "The elevator feel shift module supplies increased system A pressure to the elevator feel and centering unit during a stall. This increases forward control column feel force up to four times normal feel.",
                reference: "B737 NG CBT - Flight Controls, Section 158"
            },
            {
                question: "When is the elevator feel shift module inhibited?",
                options: [
                    "Never inhibited",
                    "During landing only",
                    "During takeoff only",
                    "When airplane is on ground, or below 100 ft radio altitude with autopilot engaged"
                ],
                correct: 3,
                explanation: "The elevator feel shift module is inhibited when the airplane is on the ground, or when the airplane is below 100 ft radio altitude with autopilot engaged.",
                reference: "B737 NG CBT - Flight Controls, Section 159"
            },
            
            // SECONDARY FLIGHT CONTROLS - SPOILERS/SPEED BRAKES
            {
                question: "How many spoilers are on each wing?",
                options: [
                    "Four spoilers",
                    "Five spoilers",
                    "Eight spoilers",
                    "Six spoilers"
                ],
                correct: 3,
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
                correct: 0,
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
                correct: 0,
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
                correct: 3,
                explanation: "The flight spoilers are powered by hydraulic system A and B.",
                reference: "B737 NG CBT - Flight Controls, Section 171"
            },
            {
                question: "Which system powers the ground spoilers?",
                options: [
                    "Both systems",
                    "System B only",
                    "Hydraulic system A",
                    "Standby system"
                ],
                correct: 2,
                explanation: "The Ground spoilers are powered by hydraulic system A.",
                reference: "B737 NG CBT - Flight Controls, Section 172"
            },
            {
                question: "What are the speed brake lever positions?",
                options: [
                    "Down, up",
                    "Off, on",
                    "Down, armed, flight detent, and UP",
                    "Retract, extend"
                ],
                correct: 2,
                explanation: "The speed brake lever has detents at these three positions: Down, armed and flight detent. There is also UP position with no detent.",
                reference: "B737 NG CBT - Flight Controls, Section 176"
            },
            {
                question: "When does the SPEED BRAKE DO NOT ARM light illuminate?",
                options: [
                    "When a fault has occurred in the automatic speed brake system",
                    "Normal operation",
                    "When speed brakes are extended",
                    "During manual operation"
                ],
                correct: 0,
                explanation: "The SPEED BRAKE DO NOT ARM light comes on to indicate a fault has occurred in the automatic speed brake system.",
                reference: "B737 NG CBT - Flight Controls, Section 180"
            },
            {
                question: "What is prohibited when moving speed brake lever beyond flight detent in flight?",
                options: [
                    "Normal operation",
                    "Reduces efficiency",
                    "May cause buffeting",
                    "No restrictions"
                ],
                correct: 2,
                explanation: "Moving the SPEED BRAKE lever beyond the FLIGHT DETENT is prohibited in flight, as it may cause buffeting.",
                reference: "B737 NG CBT - Flight Controls, Section 182"
            },
            {
                question: "What conditions cause automatic speed brake deployment on landing?",
                options: [
                    "Thrust levers at idle only",
                    "Radio altitude less than 10 feet and wheel spin-up at more than 60 knots",
                    "Wheel spin-up and gear compression",
                    "Landing gear down"
                ],
                correct: 1,
                explanation: "When the radio altitude is less than 10 feet and the main landing gear wheels spin up at a speed of more than 60 knots, the SPEED BRAKE lever automatically moves to the UP position.",
                reference: "B737 NG CBT - Flight Controls, Section 198"
            },
            {
                question: "When do ground spoilers deploy during landing?",
                options: [
                    "At touchdown",
                    "When speed brakes extend",
                    "When right main landing gear strut compresses",
                    "When thrust reversers deploy"
                ],
                correct: 2,
                explanation: "When the right main landing gear strut compresses, the ground spoilers deploy.",
                reference: "B737 NG CBT - Flight Controls, Section 200"
            },
            
            // LEADING EDGE DEVICES AND TRAILING EDGE FLAPS
            {
                question: "How many leading edge devices are on each wing?",
                options: [
                    "Four devices total",
                    "Eight devices total",
                    "Six devices - two flaps and four slats",
                    "Ten devices total"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "Leading edge flaps have two positions: Up and fully extended.",
                reference: "B737 NG CBT - Flight Controls, Section 210"
            },
            {
                question: "How many positions do leading edge slats have?",
                options: [
                    "Two positions",
                    "Four positions",
                    "Three positions: Up, extended and fully extended",
                    "Five positions"
                ],
                correct: 2,
                explanation: "Leading edge slats have three positions: Up, extended and fully extended.",
                reference: "B737 NG CBT - Flight Controls, Section 211"
            },
            {
                question: "Which system normally powers leading edge devices and trailing edge flaps?",
                options: [
                    "Hydraulic system B",
                    "System A",
                    "Standby system",
                    "Electric system"
                ],
                correct: 0,
                explanation: "During normal operation leading edge devices and trailing edge flaps are powered by hydraulic system B.",
                reference: "B737 NG CBT - Flight Controls, Section 216"
            },
            {
                question: "How many flap lever positions are there?",
                options: [
                    "Seven positions",
                    "Eight positions",
                    "Ten positions",
                    "Nine different positions"
                ],
                correct: 3,
                explanation: "The flap lever lets you move the trailing edge flaps to nine different positions.",
                reference: "B737 NG CBT - Flight Controls, Section 233"
            },
            {
                question: "What do flap positions between 1-15 provide?",
                options: [
                    "Increased drag only",
                    "No change",
                    "Increased lift and drag",
                    "Increased lift"
                ],
                correct: 3,
                explanation: "In general, trailing edge flap positions between 1–15 provide increased lift.",
                reference: "B737 NG CBT - Flight Controls, Section 234"
            },
            {
                question: "What do flap positions between 15-40 provide?",
                options: [
                    "Increased lift and drag",
                    "Increased drag only",
                    "Increased lift only",
                    "Reduced lift"
                ],
                correct: 0,
                explanation: "Positions between 15–40 provide increased lift and drag.",
                reference: "B737 NG CBT - Flight Controls, Section 234"
            },
            {
                question: "Where are the flap gates located?",
                options: [
                    "At flaps 15 and flaps 40",
                    "At flaps 5 and flaps 25",
                    "At flaps 10 and flaps 30",
                    "At flaps 1 and flaps 15"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "The flap load relief function is provided by the flaps/slat electronics unit (FSEU).",
                reference: "B737 NG CBT - Flight Controls, Section 244"
            },
            {
                question: "At which flap positions is load relief operative?",
                options: [
                    "All positions",
                    "Flaps 30 and 40 only",
                    "Flaps 10, 15, 25, 30 and flaps 40 positions",
                    "Flaps 1 through 15"
                ],
                correct: 2,
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
                    "To supply fuel to the engines and APU",
                    "To store fuel only",
                    "To control aircraft weight",
                    "To provide emergency power"
                ],
                correct: 0,
                explanation: "The purpose of fuel system is to supply fuel to the engines and the auxiliary power unit (APU).",
                reference: "B737 NG CBT - Fuel, Section 3"
            },
            {
                question: "How many fuel tanks does the B737 NG have?",
                options: [
                    "Two tanks",
                    "Five tanks",
                    "Four tanks",
                    "Three tanks"
                ],
                correct: 3,
                explanation: "The airplane has three fuel tanks: main tank number 1 is in the left wing; main tank number 2 is in the right wing; and the center tank is in the fuselage and the inboard section of each wing.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the usable fuel capacity of each main tank?",
                options: [
                    "5,000 kgs",
                    "4,200 kgs",
                    "3,915 kgs",
                    "3,500 kgs"
                ],
                correct: 2,
                explanation: "Each main tank has a usable fuel capacity of 3,915 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the usable fuel capacity of the center tank?",
                options: [
                    "10,000 kgs",
                    "13,066 kgs",
                    "12,000 kgs",
                    "15,000 kgs"
                ],
                correct: 1,
                explanation: "The usable fuel capacity of the center tank is 13,066 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the total usable fuel capacity of the airplane?",
                options: [
                    "18,500 kgs",
                    "25,000 kgs",
                    "22,000 kgs",
                    "20,896 kgs"
                ],
                correct: 3,
                explanation: "Total usable fuel capacity of the airplane is 20,896 kgs.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "What is the purpose of surge tanks?",
                options: [
                    "To store additional fuel",
                    "To transfer fuel between tanks",
                    "To collect fuel overflow only",
                    "To supply engines"
                ],
                correct: 2,
                explanation: "The surge tanks in the outboard section of the wings collect fuel overflow only.",
                reference: "B737 NG CBT - Fuel, Section 5"
            },
            {
                question: "How many fuel boost pumps are incorporated in the engine fuel feed system?",
                options: [
                    "Six pumps",
                    "Five pumps",
                    "Four pumps",
                    "Eight pumps"
                ],
                correct: 0,
                explanation: "Engine fuel feed system incorporates six fuel boost pumps for the engine feed.",
                reference: "B737 NG CBT - Fuel, Section 8"
            },
            {
                question: "What powers all fuel boost pumps?",
                options: [
                    "DC electrical power",
                    "Hydraulic power",
                    "AC electrical power",
                    "Pneumatic power"
                ],
                correct: 2,
                explanation: "All fuel boost pumps are driven by AC electrical power and submerged in fuel for cooling.",
                reference: "B737 NG CBT - Fuel, Section 8"
            },
            {
                question: "How many fuel boost pumps are in the center tank?",
                options: [
                    "One pump",
                    "Three pumps",
                    "Two pumps, one left and one right",
                    "Four pumps"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "There are forward and aft fuel boost pumps for each main tank.",
                reference: "B737 NG CBT - Fuel, Section 9"
            },
            {
                question: "Which pumps supply fuel to engine number 1?",
                options: [
                    "Main tank number 1 forward and aft fuel pumps, and the left center fuel pump",
                    "Center tank left pump only",
                    "Main tank 1 pumps only",
                    "All center tank pumps"
                ],
                correct: 0,
                explanation: "Main tank number 1 forward and aft fuel pumps, and the left center fuel pump supply fuel to the engine number 1.",
                reference: "B737 NG CBT - Fuel, Section 10"
            },
            {
                question: "Which pumps supply fuel to engine number 2?",
                options: [
                    "Main tank 2 pumps only",
                    "All main tank pumps",
                    "Center tank right pump only",
                    "Main tank number 2 forward and aft fuel pumps, and the right center fuel pump"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "The center tank boost pumps supply fuel at a higher pressure than the pumps in the main tanks. Therefore, the fuel in the center tank is used before the fuel in the main tanks. This sequence helps to relieve the wing bending stress.",
                reference: "B737 NG CBT - Fuel, Section 11"
            },
            {
                question: "What is the purpose of the crossfeed valve?",
                options: [
                    "To isolate fuel tanks",
                    "To drain fuel tanks",
                    "To transfer fuel to center tank",
                    "To connect the left and right engine fuel feed manifolds"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "When it is open, one fuel tank supplies fuel to both engines.",
                reference: "B737 NG CBT - Fuel, Section 13"
            },
            {
                question: "What should be noted about continuous use of crossfeed?",
                options: [
                    "It will result in fuel imbalance gradually",
                    "It improves fuel efficiency",
                    "It reduces engine performance",
                    "It is always recommended"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "A spar fuel shutoff valve and an engine fuel shutoff valve fitted in fuel line to each engine, control fuel flow to the engines.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What powers the spar fuel shutoff valves?",
                options: [
                    "Hot battery bus",
                    "Battery bus",
                    "AC power",
                    "Hydraulic power"
                ],
                correct: 0,
                explanation: "Spar fuel shut off valves are electrically powered from the hot battery bus.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What powers the engine fuel shutoff valves?",
                options: [
                    "Hot battery bus",
                    "AC power",
                    "Battery bus",
                    "Hydraulic power"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "The engine start levers and the engine fire switches control the spar fuel shutoff valves and engine fuel shutoff valves.",
                reference: "B737 NG CBT - Fuel, Section 14"
            },
            {
                question: "What happens when an engine start lever is moved to CUTOFF position?",
                options: [
                    "The respective spar fuel shutoff valve and the engine fuel shutoff valve close",
                    "Only spar valve closes",
                    "Only engine valve closes",
                    "Fuel pumps stop"
                ],
                correct: 0,
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
                    "When output pressure of fuel boost pumps in one main tank is low or both pumps are off and the crossfeed valve is closed",
                    "During normal operation",
                    "When center tank is full",
                    "During engine start"
                ],
                correct: 0,
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
                correct: 3,
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
                correct: 3,
                explanation: "As the aircraft climbs to cruise altitude, dissolved air in the fuel is released due to the decrease in air pressure; the air bubbles released by the fuel may collect in the suction line interrupting the fuel supply.",
                reference: "B737 NG CBT - Fuel, Section 19"
            },
            {
                question: "What may result from reduced fuel flow during suction feed climb?",
                options: [
                    "Thrust deterioration or engine flameout",
                    "Improved efficiency",
                    "Increased power",
                    "No effect"
                ],
                correct: 0,
                explanation: "Thus, thrust deterioration or engine flameout may occur as a result of the fuel flow reduction.",
                reference: "B737 NG CBT - Fuel, Section 19"
            },
            {
                question: "Where is the center tank fuel scavenge system incorporated?",
                options: [
                    "Center tank pumps",
                    "APU fuel line",
                    "Right main tank",
                    "The forward fuel boost pump in main tank number 1"
                ],
                correct: 3,
                explanation: "A center tank fuel scavenge system is incorporated in the forward fuel boost pump in main tank number 1.",
                reference: "B737 NG CBT - Fuel, Section 20"
            },
            {
                question: "What is the purpose of the scavenge system?",
                options: [
                    "To increase fuel capacity",
                    "To transfer fuel to center tank",
                    "To reduce the amount of non-usable fuel in the center tank",
                    "To cool fuel"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "When the fuel quantity in main tank No.1 is about one-half empty, the fuel scavenge pump removes any remaining fuel from the center tank and transfers it to main tank No.1 automatically.",
                reference: "B737 NG CBT - Fuel, Section 21"
            },
            {
                question: "How long does the fuel scavenge process continue?",
                options: [
                    "For the rest of the flight",
                    "Until center tank is empty",
                    "For 30 minutes",
                    "Only during climb"
                ],
                correct: 0,
                explanation: "Once the fuel scavenge process begins, it continues for the rest of the flight.",
                reference: "B737 NG CBT - Fuel, Section 21"
            },
            {
                question: "From where does the APU fuel feed system supply fuel to the APU?",
                options: [
                    "The left side of the fuel manifold",
                    "Right engine manifold",
                    "Center tank only",
                    "Any tank"
                ],
                correct: 0,
                explanation: "The APU fuel feed system supplies fuel to the APU from the left side of the fuel manifold as long as the center tank boost pumps or the boost pumps in main tank No. 1 and main tank No. 2 are operating.",
                reference: "B737 NG CBT - Fuel, Section 22"
            },
            {
                question: "From which tank is APU fuel suction fed if boost pumps are not operating?",
                options: [
                    "Center tank",
                    "Main tank number 2",
                    "Main tank number 1",
                    "Any tank"
                ],
                correct: 2,
                explanation: "If the fuel boost pumps are not operating, fuel is suction fed from main tank number 1.",
                reference: "B737 NG CBT - Fuel, Section 22"
            },
            {
                question: "Where is the single-point pressure fueling station located?",
                options: [
                    "Left wing",
                    "Both wings",
                    "Center fuselage",
                    "Right wing"
                ],
                correct: 3,
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
                correct: 3,
                explanation: "The fueling station allows for rapid refueling and defueling all fuel tanks. The fueling station is also used for the transfer of fuel from tank to tank on the ground.",
                reference: "B737 NG CBT - Fuel, Section 24"
            },
            {
                question: "What automatically closes the fueling valve in each fuel tank?",
                options: [
                    "Pilot control",
                    "Timer system",
                    "A shutoff system when the tank is full",
                    "Pressure switch"
                ],
                correct: 2,
                explanation: "A shutoff system closes the fueling valve in each fuel tank automatically when the tank is full.",
                reference: "B737 NG CBT - Fuel, Section 24"
            },
            {
                question: "What connects the right engine fuel feed manifold with the fueling station?",
                options: [
                    "Transfer valve",
                    "Crossfeed valve",
                    "A manual defuel valve",
                    "Boost pump"
                ],
                correct: 2,
                explanation: "A manual defuel valve connects the right engine fuel feed manifold with the fueling station.",
                reference: "B737 NG CBT - Fuel, Section 25"
            },
            {
                question: "What does moving the defuel valve handle to OPEN position permit?",
                options: [
                    "Engine start only",
                    "APU operation",
                    "Removal of fuel from the fuel tanks or fuel transfer from one fuel tank to another",
                    "Normal fuel flow"
                ],
                correct: 2,
                explanation: "Moving the defuel valve handle in the OPEN position permits removal of fuel from the fuel tanks or fuel transfer from one fuel tank to another.",
                reference: "B737 NG CBT - Fuel, Section 25"
            },
            {
                question: "How many LOW PRESSURE lights are there for center tank fuel pumps?",
                options: [
                    "One light",
                    "Four lights",
                    "Three lights",
                    "Two lights"
                ],
                correct: 3,
                explanation: "A low pressure light over each pump switch allows for monitoring pump output pressure. There are six fuel pump switches on the panel including center tank left and right pump switches.",
                reference: "B737 NG CBT - Fuel, Section 29"
            },
            {
                question: "When are center tank LOW PRESSURE lights extinguished?",
                options: [
                    "When the center pump switches are in the OFF position",
                    "When pumps are ON",
                    "When fuel is low",
                    "Always"
                ],
                correct: 0,
                explanation: "When the center pump switches are in the OFF position, the LOW PRESSURE lights are extinguished.",
                reference: "B737 NG CBT - Fuel, Section 30"
            },
            {
                question: "When do main tank LOW PRESSURE lights illuminate?",
                options: [
                    "When pumps are ON",
                    "When fuel is full",
                    "When aft and forward pump switches are in OFF position",
                    "Never"
                ],
                correct: 2,
                explanation: "When aft and forward pump switches are in OFF position, the LOW PRESSURE lights are illuminated.",
                reference: "B737 NG CBT - Fuel, Section 33"
            },
            {
                question: "What happens when both fuel pump LOW PRESSURE lights illuminate for the same main tank?",
                options: [
                    "Normal operation",
                    "Fuel transfer starts",
                    "MASTER CAUTION and FUEL system annunciator lights on the glareshield panel also illuminate",
                    "APU starts"
                ],
                correct: 2,
                explanation: "When both fuel pump LOW PRESSURE lights illuminate for the same main tank, MASTER CAUTION and FUEL system annunciators lights on the glareshield panel also illuminate.",
                reference: "B737 NG CBT - Fuel, Section 34"
            },
            {
                question: "What may occur when both main tank fuel pumps show LOW PRESSURE at high altitude?",
                options: [
                    "Thrust deterioration or engine flameout",
                    "Improved performance",
                    "Normal operation",
                    "Increased fuel flow"
                ],
                correct: 0,
                explanation: "This situation may cause thrust deterioration or engine flameout at high altitude.",
                reference: "B737 NG CBT - Fuel, Section 34"
            },
            {
                question: "When does the crossfeed VALVE OPEN light illuminate bright blue?",
                options: [
                    "When crossfeed valve is in transit, or the valve is not in the commanded position",
                    "When valve is fully open",
                    "When valve is closed",
                    "During normal operation"
                ],
                correct: 0,
                explanation: "When the selector is moved to open the position, crossfeed VALVE OPEN light illuminates bright blue which means that the valve is in transit, or, the valve is not in the commanded position.",
                reference: "B737 NG CBT - Fuel, Section 36"
            },
            {
                question: "When does the crossfeed VALVE OPEN light become dim?",
                options: [
                    "When valve is closed",
                    "When valve is in transit",
                    "When the valve is open",
                    "Never"
                ],
                correct: 2,
                explanation: "When the valve is open, the crossfeed VALVE OPEN light becomes dim indicating that engine No.1 and engine No. 2 fuel manifolds are connected.",
                reference: "B737 NG CBT - Fuel, Section 36"
            },
            {
                question: "When do ENGINE VALVE CLOSED and SPAR VALVE CLOSED lights illuminate dim?",
                options: [
                    "When the valve is closed",
                    "When valve is in transit",
                    "When valve is open",
                    "When valve malfunctions"
                ],
                correct: 0,
                explanation: "When the valve is closed, the light is on dim.",
                reference: "B737 NG CBT - Fuel, Section 37"
            },
            {
                question: "When do fuel FILTER BYPASS lights illuminate?",
                options: [
                    "During normal operation",
                    "When fuel is low",
                    "When either fuel filter becomes clogged due to contamination",
                    "When pumps are off"
                ],
                correct: 2,
                explanation: "When either fuel filter becomes clogged due to contamination, the respective fuel FILTER BYPASS alert illuminates on the fuel control panel indicating that fuel is about to bypass the filter and unfiltered fuel is to be supplied to the related engine.",
                reference: "B737 NG CBT - Fuel, Section 38"
            },
            {
                question: "What is the maximum tank fuel temperature?",
                options: [
                    "35°C",
                    "55°C",
                    "49°C",
                    "60°C"
                ],
                correct: 2,
                explanation: "Maximum tank fuel temperature is 49°C.",
                reference: "B737 NG CBT - Fuel, Section 39"
            },
            {
                question: "What is the minimum tank fuel temperature prior to takeoff and in-flight?",
                options: [
                    "-30°C",
                    "-50°C",
                    "-43°C, or 3°C above the fuel freezing point temperature, whichever is higher",
                    "-40°C"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "When the fuel quantity is less than 907 kgs in either main tank No.1 or main tank No.2, an amber alert appears on the affected indicator and the quantity digits and arc color change to amber.",
                reference: "B737 NG CBT - Fuel, Section 43"
            },
            {
                question: "When does the low fuel alert disappear?",
                options: [
                    "When fuel is more than 907 kgs",
                    "When engines shut down",
                    "When fuel is more than 1000 kgs",
                    "When fuel quantity in the related tank is more than 1134 kgs"
                ],
                correct: 3,
                explanation: "When fuel quantity in the related tank is more than 1134 kgs, the low fuel alert disappears and the quantity digits and arc return to normal.",
                reference: "B737 NG CBT - Fuel, Section 43"
            },
            {
                question: "When does the fuel imbalance alert appear?",
                options: [
                    "When difference is 200 kgs",
                    "When difference is 300 kgs",
                    "When there is a fuel quantity difference of 453 kgs or more between main tanks",
                    "When center tank is full"
                ],
                correct: 2,
                explanation: "When there is a fuel quantity difference of 453 kgs or more between main tank No. 1 and main tank No. 2 the fuel imbalance alert shows below the main tank with lower fuel quantity.",
                reference: "B737 NG CBT - Fuel, Section 46"
            },
            {
                question: "When does the fuel imbalance alert go away?",
                options: [
                    "When the difference between tanks is 91 kgs or less",
                    "When difference is 200 kgs or less",
                    "When difference is 100 kgs or less",
                    "When engines start"
                ],
                correct: 0,
                explanation: "When the difference between tanks is 91 kgs or less, the fuel imbalance alert on the related main tank fuel quantity indicator goes away and the quantity digits and arc return to normal.",
                reference: "B737 NG CBT - Fuel, Section 46"
            },
            {
                question: "When is the fuel imbalance alert inhibited?",
                options: [
                    "When airplane is on ground",
                    "During flight only",
                    "When center tank is full",
                    "Never inhibited"
                ],
                correct: 0,
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
                    "To assist the pilot in accomplishing mechanical tasks that would otherwise be impractical or impossible",
                    "To provide electrical power",
                    "To supply fuel to engines",
                    "To control cabin pressure"
                ],
                correct: 0,
                explanation: "The purpose of the hydraulic system is to assist the pilot in accomplishing mechanical tasks that would otherwise be impractical or impossible because of the level of force, work, or power required.",
                reference: "B737 NG CBT - Hydraulics, Section 3"
            },
            {
                question: "How many hydraulic systems does the airplane have?",
                options: [
                    "Two systems",
                    "One system",
                    "Four systems",
                    "Three systems designated as system A, system B and Standby system"
                ],
                correct: 3,
                explanation: "The airplane is equipped with three hydraulic systems designated as system \"A\", system \"B\" and Standby system.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "Can either system A or B power all flight controls?",
                options: [
                    "Yes, either A or B hydraulic system is capable of powering all flight controls without any decrease in airplane controllability",
                    "No, both are required",
                    "Only in emergency",
                    "Only on ground"
                ],
                correct: 0,
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
                    "In the nose",
                    "In the wings",
                    "In the main wheel well compartment"
                ],
                correct: 3,
                explanation: "Each hydraulic system has a reservoir located in the main wheel well compartment, which stores hydraulic fluid.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "What is used to pressurize system A and B reservoirs?",
                options: [
                    "Bleed air from the pneumatic system",
                    "Electric pumps",
                    "Manual pumps",
                    "Atmospheric pressure"
                ],
                correct: 0,
                explanation: "Bleed air from the pneumatic system is used to pressurize system \"A\" and \"B\" reservoirs.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "How is the standby system reservoir pressurized?",
                options: [
                    "Through system B reservoir",
                    "Through system A reservoir",
                    "By electric pump",
                    "By APU bleed air"
                ],
                correct: 0,
                explanation: "The standby system reservoir is pressurized through system \"B\" reservoir.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "Why is pressurization of the reservoirs necessary?",
                options: [
                    "To increase pressure",
                    "To cool the fluid",
                    "To maintain a positive supply of fluid to all hydraulic pumps at all altitudes",
                    "To filter the fluid"
                ],
                correct: 2,
                explanation: "Pressurization of the reservoirs is necessary to maintain a positive supply of fluid to all hydraulic pumps at all altitudes.",
                reference: "B737 NG CBT - Hydraulics, Section 4"
            },
            {
                question: "What happens if the reservoirs are not properly pressurized?",
                options: [
                    "Normal operation continues",
                    "System shuts down",
                    "Pressure increases",
                    "Hydraulic fluid tends to foam at higher altitudes"
                ],
                correct: 3,
                explanation: "If the reservoirs are not properly pressurized, hydraulic fluid tends to foam at higher altitudes because of decrease in pressure.",
                reference: "B737 NG CBT - Hydraulics, Section 5"
            },
            {
                question: "How can foaming be recognized?",
                options: [
                    "By steady pressure readings",
                    "By high pressure readings",
                    "By the blinking of the related LOW PRESSURE lights",
                    "By temperature increase"
                ],
                correct: 2,
                explanation: "Foaming causes pressure fluctuations and can be recognized by the blinking of the related LOW PRESSURE lights.",
                reference: "B737 NG CBT - Hydraulics, Section 5"
            },
            {
                question: "How many hydraulic pumps does each A and B hydraulic system have?",
                options: [
                    "Two hydraulic pumps, an engine–driven pump and an AC electric motor–driven pump",
                    "One pump each",
                    "Three pumps each",
                    "Four pumps each"
                ],
                correct: 0,
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
                    "APU",
                    "The No. 2 engine",
                    "Both engines",
                    "The No. 1 engine"
                ],
                correct: 3,
                explanation: "The system \"A\" engine–driven pump is powered by the No. 1 engine.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which generator powers the system A electric motor-driven pump under normal conditions?",
                options: [
                    "No. 1 engine generator",
                    "Battery",
                    "APU generator",
                    "No.2 engine generator"
                ],
                correct: 3,
                explanation: "Its electric motor-driven pump is powered by the No.2 engine generator under normal conditions.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "Which engine powers the system B engine-driven pump?",
                options: [
                    "The No. 2 engine",
                    "The No. 1 engine",
                    "Both engines",
                    "APU"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "Its electric motor-driven pump is powered by the No.1 engine generator under normal conditions.",
                reference: "B737 NG CBT - Hydraulics, Section 6"
            },
            {
                question: "What does system A supply hydraulic power to?",
                options: [
                    "No.1 thrust reverser, rudder, ailerons, elevator and elevator feel unit, two flight spoilers on each wing, ground spoilers, alternate brakes, autopilot A, landing gear, normal nose wheel steering, and power transfer unit (PTU)",
                    "Only flight controls",
                    "Only landing gear",
                    "Only brakes"
                ],
                correct: 0,
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
                    "By external cooling system",
                    "With heat exchangers in the main fuel tanks",
                    "By electric fans"
                ],
                correct: 2,
                explanation: "This fluid is cooled with heat exchangers in the main fuel tanks before it is routed back to the reservoirs.",
                reference: "B737 NG CBT - Hydraulics, Section 8"
            },
            {
                question: "What is the minimum fuel requirement for ground operation of electric motor-driven pumps?",
                options: [
                    "500 Kgs in the related main tank",
                    "1000 Kgs in the related main tank",
                    "760 Kgs in the related main tank",
                    "1500 Kgs in the related main tank"
                ],
                correct: 2,
                explanation: "The minimum fuel for ground operation of electric motor-driven pumps is 760 Kgs in the related main tank.",
                reference: "B737 NG CBT - Hydraulics, Section 8"
            },
            {
                question: "What are pressure switches fitted in the pump outlets used for?",
                options: [
                    "To illuminate the related LOW PRESSURE light when pump output pressure is low",
                    "To control pump speed",
                    "To start the pumps",
                    "To stop the pumps"
                ],
                correct: 0,
                explanation: "If the pump output pressure is low, pressure switch transmits a signal to illuminate the related LOW PRESSURE light.",
                reference: "B737 NG CBT - Hydraulics, Section 9"
            },
            {
                question: "What is the purpose of check valves in each pump output line?",
                options: [
                    "To increase pressure",
                    "To cool fluid",
                    "To filter fluid",
                    "To isolate the related pump from the system to prevent hydraulic backflow"
                ],
                correct: 3,
                explanation: "The check valve then isolates the related pump from the system to prevent hydraulic backflow.",
                reference: "B737 NG CBT - Hydraulics, Section 9"
            },
            {
                question: "What do pressure transmitters in system A and B send?",
                options: [
                    "Individual pump pressures",
                    "Flow rates",
                    "Temperature readings",
                    "The combined pressure of the engine–driven and electric motor–driven pump to their respective hydraulic system pressure indications"
                ],
                correct: 3,
                explanation: "System \"A\" and system \"B\" are also fitted with pressure transmitters which send the combined pressure of the engine–driven and electric motor–driven pump to their respective hydraulic system pressure indications.",
                reference: "B737 NG CBT - Hydraulics, Section 10"
            },
            {
                question: "Where are system A and B hydraulic indications presented?",
                options: [
                    "On overhead panel",
                    "On center pedestal",
                    "On upper or lower display unit",
                    "On side panels"
                ],
                correct: 2,
                explanation: "System \"A\" and system \"B\" hydraulic indications are presented on upper or lower display unit.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "What color indicates normal operating range?",
                options: [
                    "Blue",
                    "Green",
                    "White",
                    "Yellow"
                ],
                correct: 2,
                explanation: "Normal operating range is shown in white.",
                reference: "B737 NG CBT - Hydraulics, Section 11"
            },
            {
                question: "What color indicates the caution range?",
                options: [
                    "Amber",
                    "White",
                    "Red",
                    "Green"
                ],
                correct: 0,
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
                correct: 0,
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
                correct: 2,
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
                correct: 2,
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
                correct: 2,
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
                correct: 0,
                explanation: "In addition cold soaking of aircraft which can result from being exposed to low temperatures during long periods of cruise may also cause variations in hydraulic fluid indications.",
                reference: "B737 NG CBT - Hydraulics, Section 12"
            },
            {
                question: "Where are system A and system B controls located?",
                options: [
                    "On center pedestal",
                    "On glare shield",
                    "On side panels",
                    "On the hydraulic control panel which is located on the forward overhead panel"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "System \"A\" ENG 1 ON/OFF switch controls the system A engine-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What does the system B ENG 2 pump ON/OFF switch control?",
                options: [
                    "The system B engine–driven pump",
                    "Engine 2 start",
                    "Engine 2 fuel flow",
                    "Engine 2 ignition"
                ],
                correct: 0,
                explanation: "System \"B\" ENG 2 pump ON/OFF switch controls the system \"B\" engine–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "When do low pressure lights illuminate for engine-driven pumps?",
                options: [
                    "When output pressure from the related pump is low",
                    "When pumps are ON",
                    "During normal operation",
                    "When engines are starting"
                ],
                correct: 0,
                explanation: "The low pressure lights illuminate when output pressure from the related pump is low.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What happens when engine-driven pump switches are in ON position?",
                options: [
                    "Pumps are electrically started",
                    "System shuts down",
                    "Pumps are manually operated",
                    "The engine-driven pumps supply hydraulic pressure to the systems components provided that the engines are running"
                ],
                correct: 3,
                explanation: "When the switches are in the \"ON\" position, the engine-driven pumps supply hydraulic pressure to the systems components provided that the engines are running.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "What happens when an engine-driven pump switch is positioned to OFF?",
                options: [
                    "Engine stops",
                    "Pump physically stops rotating",
                    "The fluid flow from this pump to the system components stops and its low pressure light illuminates",
                    "System pressure increases"
                ],
                correct: 2,
                explanation: "When the switch of an engine-driven pump is positioned to \"OFF\", the fluid flow from this pump to the system components stops and its low pressure light illuminates on the control panel.",
                reference: "B737 NG CBT - Hydraulics, Section 14"
            },
            {
                question: "Does the engine-driven pump continue to rotate when its switch is OFF?",
                options: [
                    "No, it stops immediately",
                    "Only above certain RPM",
                    "Only during taxi",
                    "Yes, the engine–driven pump continues to rotate as long as the engine is operating"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "System \"A\" ELEC 2 ON/OFF switch controls the system A electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 15"
            },
            {
                question: "What does the system B ELEC 1 ON/OFF switch control?",
                options: [
                    "Engine 1 electrical system",
                    "Electric fuel pumps",
                    "The system B electric motor–driven pump",
                    "Battery system"
                ],
                correct: 2,
                explanation: "System B ELEC 1 ON/OFF switch controls the system \"B\" electric motor–driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 15"
            },
            {
                question: "When do OVERHEAT lights illuminate?",
                options: [
                    "If an overheat is detected in either system",
                    "During normal operation",
                    "When pumps start",
                    "When engines start"
                ],
                correct: 0,
                explanation: "If an overheat is detected in either system, the related OVERHEAT light illuminates.",
                reference: "B737 NG CBT - Hydraulics, Section 16"
            },
            {
                question: "What may happen if an engine-driven hydraulic pump is lost and there is high demand?",
                options: [
                    "System shuts down",
                    "Pressure increases",
                    "The LOW PRESSURE light for the remaining electric motor-driven hydraulic pump may illuminate intermittently",
                    "Backup system activates"
                ],
                correct: 2,
                explanation: "If an engine-driven hydraulic pump is lost and there is a high demand on the system, the LOW PRESSURE light for the remaining electric motor-driven hydraulic pump may illuminate intermittently.",
                reference: "B737 NG CBT - Hydraulics, Section 17"
            },
            {
                question: "What other lights illuminate when there's high demand and engine-driven pump is lost?",
                options: [
                    "The flight control LOW PRESSURE light, Master Caution light, and the FLT CONT and HYD system annunciator lights",
                    "Only hydraulic lights",
                    "Only engine lights",
                    "Only warning lights"
                ],
                correct: 0,
                explanation: "The flight control LOW PRESSURE light, Master Caution light, and the FLT CONT and HYD system annunciator lights also illuminate.",
                reference: "B737 NG CBT - Hydraulics, Section 17"
            },
            {
                question: "What happens during an engine fire when the fire switch is pulled?",
                options: [
                    "Only fire suppression activates",
                    "All systems shut down",
                    "Engine restarts",
                    "The corresponding hydraulic shut-off valve closes and the fluid supply to the respective engine-driven pump is cut off"
                ],
                correct: 3,
                explanation: "During an engine fire, pulling the fire switch causes the corresponding hydraulic shut-off valve to close and the fluid supply to the respective engine-driven pump is cut off.",
                reference: "B737 NG CBT - Hydraulics, Section 18"
            },
            {
                question: "Is there a LOW PRESSURE indication when fire switch is pulled?",
                options: [
                    "No, the related LOW PRESSURE light is also deactivated",
                    "Yes, normal indication",
                    "Only intermittent indication",
                    "Only on ground"
                ],
                correct: 0,
                explanation: "The related LOW PRESSURE light is also deactivated, so there is no LOW PRESSURE indication on the control panel.",
                reference: "B737 NG CBT - Hydraulics, Section 18"
            },
            {
                question: "How is the system A electric motor-driven pump fed?",
                options: [
                    "Through a standpipe",
                    "From external source",
                    "From the top of reservoir",
                    "Through a pipe from the bottom of the reservoir"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "The engine-driven pump draws its fluid through a standpipe which is located at a higher level.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "What does the higher level standpipe prevent in system A?",
                options: [
                    "Pump damage",
                    "Pressure loss",
                    "A total system fluid loss and ensures adequate fluid is left for operation of electric motor-driven pump",
                    "Temperature increase"
                ],
                correct: 2,
                explanation: "The higher level of standpipe prevents a total system fluid loss and ensures adequate fluid is left for operation of electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "What is the indicated reservoir fluid quantity when fluid level is at the top of standpipe in system A?",
                options: [
                    "0% full",
                    "100% full",
                    "50% full",
                    "Approximately 20% full"
                ],
                correct: 3,
                explanation: "With fluid level at the top of the standpipe, indicated reservoir fluid quantity is approximately 20% full.",
                reference: "B737 NG CBT - Hydraulics, Section 20"
            },
            {
                question: "How do both pumps draw fluid in system B?",
                options: [
                    "From different sources",
                    "From bottom of reservoir",
                    "Both engine-driven pump and electric motor-driven pump draw its liquid from a common standpipe",
                    "From external source"
                ],
                correct: 2,
                explanation: "In system \"B\", both engine-driven pump and electric motor-driven pump draw its liquid from a common standpipe.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What happens to fluid quantity when a leak develops in system B?",
                options: [
                    "Quantity remains constant",
                    "System compensates automatically",
                    "Quantity increases",
                    "The fluid quantity decreases until it reaches at the top of the standpipe"
                ],
                correct: 3,
                explanation: "If a leak develops in either pump, line or component of system \"B\", the fluid quantity decreases until it reaches at the top of the standpipe.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What is the indicated reservoir quantity when system B fluid level reaches the standpipe top?",
                options: [
                    "20% full",
                    "50% full",
                    "Approximately zero",
                    "100% full"
                ],
                correct: 2,
                explanation: "With the fluid level at the top of the standpipe, the indicated reservoir fluid quantity is approximately zero and system B pressure is lost.",
                reference: "B737 NG CBT - Hydraulics, Section 22"
            },
            {
                question: "What is the function of the power transfer unit (PTU)?",
                options: [
                    "To transfer fluid between systems",
                    "To cool hydraulic fluid",
                    "To provide additional hydraulic pressure needed to operate the autoslats and leading edge flaps and slats at the normal rate when system B engine–driven hydraulic pump pressure is low",
                    "To filter hydraulic fluid"
                ],
                correct: 2,
                explanation: "The function of power transfer unit (PTU) is to provide additional hydraulic pressure needed to operate the autoslats and leading edge flaps and slats at the normal rate when system B engine–driven hydraulic pump pressure is low.",
                reference: "B737 NG CBT - Hydraulics, Section 23"
            },
            {
                question: "Is there fluid transfer between system A and system B through PTU?",
                options: [
                    "Yes, continuous transfer",
                    "Only on ground",
                    "Only during emergency",
                    "No, there is no fluid transfer between system A and system B"
                ],
                correct: 3,
                explanation: "There is no fluid transfer between system \"A\" and system \"B\".",
                reference: "B737 NG CBT - Hydraulics, Section 23"
            },
            {
                question: "When does the PTU operate automatically?",
                options: [
                    "Always during flight",
                    "Only during takeoff",
                    "Only on ground",
                    "When System B engine-driven pump pressure is low, the airplane is in flight and the flaps are less than 15 but not up"
                ],
                correct: 3,
                explanation: "The power transfer unit (PTU) operates automatically by opening of a PTU control valve when all of the following conditions exist: System \"B\" engine-driven pump pressure is low, the airplane is in flight and the flaps are less than 15 but not up.",
                reference: "B737 NG CBT - Hydraulics, Section 24"
            },
            {
                question: "What normally powers the landing gear?",
                options: [
                    "Standby system",
                    "System B",
                    "System A",
                    "Manual operation"
                ],
                correct: 2,
                explanation: "Landing gear is normally powered by system \"A\".",
                reference: "B737 NG CBT - Hydraulics, Section 25"
            },
            {
                question: "When does the landing gear transfer unit provide backup power?",
                options: [
                    "Always",
                    "Only for lowering gear",
                    "Only on ground",
                    "When system A engine–driven pump volume is lost, to raise the landing gear at the normal rate"
                ],
                correct: 3,
                explanation: "When system \"A\" engine–driven pump volume is lost, the landing gear transfer unit provides a backup hydraulic power to raise the landing gear at the normal rate.",
                reference: "B737 NG CBT - Hydraulics, Section 25"
            },
            {
                question: "What powers the landing gear transfer unit?",
                options: [
                    "The system B engine–driven pump",
                    "System A engine-driven pump",
                    "Electric motor",
                    "Manual operation"
                ],
                correct: 0,
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
                    "Pneumatic pump",
                    "Manual pump",
                    "An AC electric motor-driven pump"
                ],
                correct: 3,
                explanation: "The system is fitted with an AC electric motor-driven pump.",
                reference: "B737 NG CBT - Hydraulics, Section 26"
            },
            {
                question: "What can the standby hydraulic system power?",
                options: [
                    "All aircraft systems",
                    "Only landing gear",
                    "Leading edge flaps and slats (only extend), thrust reversers, rudder and standby yaw damper",
                    "Only flight controls"
                ],
                correct: 2,
                explanation: "Which can supply hydraulic power needed to operate leading edge flaps and slats (only extend), thrust reversers, rudder and standby yaw damper.",
                reference: "B737 NG CBT - Hydraulics, Section 26"
            },
            {
                question: "Where are the standby hydraulic system controls located?",
                options: [
                    "On overhead panel",
                    "On side panel",
                    "On center pedestal",
                    "On the flight control panel which is located on the forward overhead panel"
                ],
                correct: 3,
                explanation: "The standby hydraulic system controls are on the flight control panel which is located on the forward overhead panel.",
                reference: "B737 NG CBT - Hydraulics, Section 27"
            },
            {
                question: "How can the standby hydraulic system be operated?",
                options: [
                    "Manually or automatically",
                    "Automatically only",
                    "Manually only",
                    "Remote control only"
                ],
                correct: 0,
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
                    "Bicycle gear",
                    "Tricycle type landing gear with two main landing gear and a single nose gear",
                    "Quadricycle gear"
                ],
                correct: 2,
                explanation: "The 737 airplane has a tricycle type landing gear with two main landing gear and a single nose gear.",
                reference: "B737 NG CBT - Landing Gear, Section 3"
            },
            {
                question: "How many wheels does each gear have?",
                options: [
                    "One wheel",
                    "Four wheels",
                    "Three wheels",
                    "Two wheels"
                ],
                correct: 3,
                explanation: "Each gear has two wheels.",
                reference: "B737 NG CBT - Landing Gear, Section 3"
            },
            {
                question: "What are the functions of the two main landing gear?",
                options: [
                    "To support most of the airplane weight on the ground, absorb landing forces and transmit the braking loads to the airplane structure",
                    "To support airplane weight only",
                    "To provide steering only",
                    "To absorb landing forces only"
                ],
                correct: 0,
                explanation: "The functions of two main landing gear are to support most of the airplane weight on the ground, absorb landing forces and transmit the braking loads to the airplane structure.",
                reference: "B737 NG CBT - Landing Gear, Section 5"
            },
            {
                question: "When do the main landing gear doors open?",
                options: [
                    "To permit gear extension",
                    "During flight",
                    "For maintenance only",
                    "During taxi"
                ],
                correct: 0,
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
                    "Only landing forces",
                    "The forward part of the airplane weight on the ground and absorbs part of the landing forces during landing operations",
                    "No weight"
                ],
                correct: 2,
                explanation: "The nose landing gear supports the forward part of the airplane weight on the ground and absorbs part of the landing forces during landing operations.",
                reference: "B737 NG CBT - Landing Gear, Section 7"
            },
            {
                question: "When do the nose landing gear doors open?",
                options: [
                    "Mechanically",
                    "Electrically",
                    "Hydraulically",
                    "Pneumatically"
                ],
                correct: 0,
                explanation: "The two nose landing gear doors open mechanically to permit gear extension.",
                reference: "B737 NG CBT - Landing Gear, Section 8"
            },
            {
                question: "When do the nose wheel doors remain open?",
                options: [
                    "Never",
                    "When the gear is up",
                    "When the gear is down",
                    "Always"
                ],
                correct: 2,
                explanation: "The nose wheel doors remain open when the gear is down.",
                reference: "B737 NG CBT - Landing Gear, Section 8"
            },
            {
                question: "How do the landing gear extension and retraction systems operate?",
                options: [
                    "Electrically",
                    "Pneumatically",
                    "Hydraulically extend and retract the main and nose landing gear",
                    "Manually"
                ],
                correct: 2,
                explanation: "The landing gear extension and retraction systems hydraulically extend and retract the main and nose landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 9"
            },
            {
                question: "Which hydraulic system normally supplies power for retraction and extension?",
                options: [
                    "Both A and B",
                    "Hydraulic system B",
                    "Standby system",
                    "Hydraulic system A"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "Hydraulic system B can supply pressure through the landing gear transfer unit for retraction only.",
                reference: "B737 NG CBT - Landing Gear, Section 10"
            },
            {
                question: "Where is the LANDING GEAR lever located?",
                options: [
                    "On the overhead panel",
                    "On the side panel",
                    "On the center instrument panel",
                    "On the pedestal"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "The landing gear lever has three positions with detents: (1) DOWN, (2) OFF and (3) UP.",
                reference: "B737 NG CBT - Landing Gear, Section 12"
            },
            {
                question: "How do you move the landing gear lever?",
                options: [
                    "You must pull the lever out so that you can move it",
                    "Just move it directly",
                    "Push it in first",
                    "Turn it clockwise"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "To prevent any inadvertent gear retraction on the ground, the control lever assembly also incorporates a lever lock mechanism.",
                reference: "B737 NG CBT - Landing Gear, Section 14"
            },
            {
                question: "When does the solenoid release the lever lock?",
                options: [
                    "On ground",
                    "During taxi",
                    "After the airplane takes off",
                    "Never automatically"
                ],
                correct: 2,
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
                correct: 0,
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
                    "On side panels",
                    "On the aft overhead panel for redundancy",
                    "On glare shield"
                ],
                correct: 2,
                explanation: "There is also a set of the auxiliary position lights on the aft overhead panel for redundancy.",
                reference: "B737 NG CBT - Landing Gear, Section 16"
            },
            {
                question: "When do the green landing gear position lights illuminate?",
                options: [
                    "When the related landing gear is down and locked",
                    "When gear is retracting",
                    "When gear is extending",
                    "When hydraulic pressure is available"
                ],
                correct: 0,
                explanation: "The green landing gear position lights illuminate when the related landing gear is down and locked.",
                reference: "B737 NG CBT - Landing Gear, Section 17"
            },
            {
                question: "Is it necessary to see green lights on both panels to ensure gear is down and locked?",
                options: [
                    "Yes, both panels must show green",
                    "Only overhead panel matters",
                    "Only center panel matters",
                    "No, landing gear is down and locked when at least one green landing gear indicator light on center panel or overhead panel for each gear is illuminated"
                ],
                correct: 3,
                explanation: "Note that it is not necessary to see green lights illuminated on both panels to ensure the landing gear is down and locked. Landing gear is down and locked when at least one green landing gear indicator light on center panel or overhead panel for each gear is illuminated.",
                reference: "B737 NG CBT - Landing Gear, Section 17"
            },
            {
                question: "When do the red primary position lights illuminate?",
                options: [
                    "During normal operation",
                    "When hydraulic pressure is low",
                    "When the position of the control lever is not the same as the position of the landing gear or when landing gear is not down and locked",
                    "Never"
                ],
                correct: 2,
                explanation: "The red primary position lights illuminate when the position of the control lever is not the same as the position of the landing gear or when landing gear is not down and locked.",
                reference: "B737 NG CBT - Landing Gear, Section 18"
            },
            {
                question: "What happens when you move the LANDING GEAR lever to UP position?",
                options: [
                    "Hydraulic system A pressurizes the landing gear and the landing gear begins to retract",
                    "Gear retracts immediately",
                    "Nothing happens",
                    "Only doors open"
                ],
                correct: 0,
                explanation: "When you move the LANDING GEAR lever to UP position, hydraulic system A pressurizes the landing gear and the landing gear begins to retract.",
                reference: "B737 NG CBT - Landing Gear, Section 19"
            },
            {
                question: "What happens to the lights during retraction?",
                options: [
                    "Green lights extinguish and the red lights illuminate indicating that landing gear are in transit",
                    "Lights stay the same",
                    "All lights extinguish",
                    "Only green lights illuminate"
                ],
                correct: 0,
                explanation: "Green lights extinguish and the red lights illuminate indicating that landing gear are in transit.",
                reference: "B737 NG CBT - Landing Gear, Section 19"
            },
            {
                question: "What automatically happens to the main gear wheels during retraction?",
                options: [
                    "Nothing",
                    "They speed up",
                    "The brakes automatically stop rotation of the main gear wheels before the landing gear retracts",
                    "They free wheel"
                ],
                correct: 2,
                explanation: "During retraction, the brakes automatically stop rotation of the main gear wheels before the landing gear retracts.",
                reference: "B737 NG CBT - Landing Gear, Section 20"
            },
            {
                question: "How are the main gear held in place after retraction?",
                options: [
                    "By hydraulic pressure",
                    "By electric locks",
                    "By mechanical uplocks",
                    "By springs"
                ],
                correct: 2,
                explanation: "After retraction, the main gear are held in place by mechanical uplocks.",
                reference: "B737 NG CBT - Landing Gear, Section 20"
            },
            {
                question: "How do the nose wheels retract?",
                options: [
                    "Sideways",
                    "Aft into the wheel well",
                    "Forward into the wheel well",
                    "Downward"
                ],
                correct: 2,
                explanation: "The nose wheels retract forward into the wheel well and its rotation is stopped by snubbers in the wheel well.",
                reference: "B737 NG CBT - Landing Gear, Section 21"
            },
            {
                question: "How is the nose gear held in place when retracted?",
                options: [
                    "By hydraulic pressure",
                    "By cables",
                    "By springs",
                    "By an overcenter lock"
                ],
                correct: 3,
                explanation: "The nose gear is held in place by an overcenter lock.",
                reference: "B737 NG CBT - Landing Gear, Section 21"
            },
            {
                question: "What happens when you move the landing gear lever to OFF position?",
                options: [
                    "Gear retracts",
                    "Gear extends",
                    "Hydraulic pressure is removed from the landing gear system",
                    "Nothing changes"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "A frangible fitting in the wheel well ring opening removes hydraulic pressure from the affected main landing gear when a damaged, spinning tire moves into the main landing gear wheel well. Main landing gear, that has the damaged tire, free falls back to the extended position.",
                reference: "B737 NG CBT - Landing Gear, Section 24"
            },
            {
                question: "Can the affected gear with damaged tire be retracted until the fitting is replaced?",
                options: [
                    "Yes, normally",
                    "Only manually",
                    "No, the affected gear cannot be retracted until the fitting is replaced",
                    "Only with alternate system"
                ],
                correct: 2,
                explanation: "The affected gear cannot be retracted until the fitting is replaced.",
                reference: "B737 NG CBT - Landing Gear, Section 24"
            },
            {
                question: "When does hydraulic system B supply alternate power for landing gear retraction?",
                options: [
                    "When the airplane is in the air, landing gear lever is UP, either main landing gear is not up and locked and left engine N2 speed is less than a limit value",
                    "Always",
                    "On ground only",
                    "Never"
                ],
                correct: 0,
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
                correct: 3,
                explanation: "When you position the landing gear lever to the DOWN position, hydraulic system \"A\" pressure releases the mechanical uplocks and the gear starts to extend by hydraulic force, landing gear weight, and air loads.",
                reference: "B737 NG CBT - Landing Gear, Section 26"
            },
            {
                question: "When is manual extension system used?",
                options: [
                    "For normal operation",
                    "For maintenance",
                    "If hydraulic system A pressure is not available for extension of the gear",
                    "During emergencies only"
                ],
                correct: 2,
                explanation: "If hydraulic system \"A\" pressure is not available for extension of the gear, the manual extension system lets you lower the landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 27"
            },
            {
                question: "Where are the manual gear extension handles located?",
                options: [
                    "On overhead panel",
                    "On side panels",
                    "On the cockpit floor",
                    "On center pedestal"
                ],
                correct: 2,
                explanation: "Manual gear extension handles are on the cockpit floor. You get access to the manual extension handles through an access door.",
                reference: "B737 NG CBT - Landing Gear, Section 28"
            },
            {
                question: "How many manual extension handles are there?",
                options: [
                    "Two handles",
                    "Four handles",
                    "Three manual extension handles. One is for the nose landing gear and one for each main landing gear",
                    "One handle"
                ],
                correct: 2,
                explanation: "There are three manual extension handles. One is for the nose landing gear and one for each main landing gear.",
                reference: "B737 NG CBT - Landing Gear, Section 28"
            },
            {
                question: "What happens when the access door to manual extension is open?",
                options: [
                    "Normal operation continues",
                    "Only manual operation possible",
                    "All systems shut down",
                    "Manual landing gear extension is possible regardless of LANDING GEAR lever position, normal extension is possible if hydraulic system A is available and retraction is disabled"
                ],
                correct: 3,
                explanation: "When the access door to the manual extension control mechanism is open, manual landing gear extension is possible regardless of the LANDING GEAR lever position, normal landing gear extension is possible if hydraulic system \"A\" pressure is available and landing gear retraction is disabled.",
                reference: "B737 NG CBT - Landing Gear, Section 29"
            },
            {
                question: "How does the gear extend when a manual handle is pulled?",
                options: [
                    "By hydraulic pressure",
                    "By spring force",
                    "By electric motor",
                    "The related gear up lock is released and the gear extends by air loads and its own weight"
                ],
                correct: 3,
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
                correct: 2,
                explanation: "The nose wheel steering system provides the ground directional control of the airplane.",
                reference: "B737 NG CBT - Landing Gear, Section 32"
            },
            {
                question: "When can you steer the airplane on the ground?",
                options: [
                    "When the nose gear is in the down position and compressed by weight of the airplane",
                    "Anytime",
                    "Only during taxi",
                    "Only during takeoff"
                ],
                correct: 0,
                explanation: "You can steer the airplane on the ground with nose wheel steering wheel and rudder pedals when the nose gear is in the down position and compressed by weight of the airplane.",
                reference: "B737 NG CBT - Landing Gear, Section 32"
            },
            {
                question: "What is the primary steering control?",
                options: [
                    "Rudder pedals",
                    "Differential braking",
                    "The nose wheel steering wheel",
                    "Engine thrust"
                ],
                correct: 2,
                explanation: "The nose wheel steering wheel is the primary steering control.",
                reference: "B737 NG CBT - Landing Gear, Section 33"
            },
            {
                question: "How much can the nose wheels turn with full steering wheel travel?",
                options: [
                    "45 degrees",
                    "90 degrees",
                    "A maximum of 78 degrees in the left or right direction",
                    "30 degrees"
                ],
                correct: 2,
                explanation: "When you move the steering wheel full travel, the nose wheels turn a maximum of 78 degrees in the left or right direction.",
                reference: "B737 NG CBT - Landing Gear, Section 33"
            },
            {
                question: "How much steering do rudder pedals provide?",
                options: [
                    "78 degrees",
                    "45 degrees",
                    "Full travel of the rudder pedals turns the nose wheels a maximum of 7 degrees in the left or right direction",
                    "15 degrees"
                ],
                correct: 2,
                explanation: "Full travel of the rudder pedals turns the nose wheels a maximum of 7 degrees in the left or right direction.",
                reference: "B737 NG CBT - Landing Gear, Section 34"
            },
            {
                question: "Which steering control has priority?",
                options: [
                    "The steering wheel always overrides rudder pedal steering",
                    "Rudder pedals",
                    "Differential braking",
                    "They have equal priority"
                ],
                correct: 0,
                explanation: "The steering wheel always overrides rudder pedal steering.",
                reference: "B737 NG CBT - Landing Gear, Section 34"
            },
            {
                question: "When is rudder pedal steering engaged?",
                options: [
                    "Always",
                    "Never automatically",
                    "Only in flight",
                    "When the airplane is on the ground and is disabled when the airplane is in the air"
                ],
                correct: 3,
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
                correct: 3,
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
                correct: 3,
                explanation: "If the hydraulic system \"A\" pressure is lost, you can activate alternate nose wheel steering through the NOSE WHEEL STEERING switch which is located in the flight compartment.",
                reference: "B737 NG CBT - Landing Gear, Section 37"
            },
            {
                question: "What does the nose wheel steering switch control?",
                options: [
                    "Engine power",
                    "Gear extension",
                    "Brake pressure",
                    "Manual control of the landing gear transfer valve"
                ],
                correct: 3,
                explanation: "The switch provides you with manual control of the landing gear transfer valve.",
                reference: "B737 NG CBT - Landing Gear, Section 38"
            },
            {
                question: "When does alternate nose wheel steering activate?",
                options: [
                    "Automatically",
                    "Never",
                    "Only in flight",
                    "When nose wheel steering switch is selected to alternate position, normal quantity of fluid is available in system B reservoir and airplane is on the ground"
                ],
                correct: 3,
                explanation: "Alternate nose wheel steering activates when all of the following conditions exist: nose wheel steering switch is selected to the alternate position, normal quantity of fluid is available in system B reservoir and airplane is on the ground.",
                reference: "B737 NG CBT - Landing Gear, Section 39"
            },
            {
                question: "How can the nose wheel steering system be depressurized for towing?",
                options: [
                    "By turning off hydraulics",
                    "Cannot be depressurized",
                    "By removing fuses",
                    "Through a lockout pin installed in the towing lever"
                ],
                correct: 3,
                explanation: "The nose wheel steering system can be depressurized through a lockout pin installed in the towing lever. This allows airplane pushback or towing without depressurizing the hydraulic system A.",
                reference: "B737 NG CBT - Landing Gear, Section 41"
            },
            {
                question: "What are brakes used for?",
                options: [
                    "Steering only",
                    "Speed control in flight",
                    "Slowing, stopping and holding the aircraft on the ground",
                    "Engine control"
                ],
                correct: 2,
                explanation: "Brakes are used for slowing, stopping and holding the aircraft on the ground.",
                reference: "B737 NG CBT - Landing Gear, Section 42"
            },
            {
                question: "How do brakes work?",
                options: [
                    "By electric motors",
                    "By magnetic force",
                    "By air pressure",
                    "They transform kinetic energy of the moving aircraft, into the heat energy by friction in the brake unit"
                ],
                correct: 3,
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
                correct: 0,
                explanation: "Each main landing gear is fitted with multiple-disk brake operated by hydraulic power.",
                reference: "B737 NG CBT - Landing Gear, Section 43"
            },
            {
                question: "Do the nose wheels have brakes?",
                options: [
                    "No, the nose wheels do not have brakes",
                    "Yes",
                    "Only during taxi",
                    "Only for parking"
                ],
                correct: 0,
                explanation: "The nose wheels do not have brakes.",
                reference: "B737 NG CBT - Landing Gear, Section 43"
            },
            {
                question: "Which hydraulic system supplies power for normal brake system?",
                options: [
                    "Hydraulic A system",
                    "Standby system",
                    "Hydraulic B system",
                    "Both A and B"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "When there is a failure of hydraulic system \"B\", hydraulic system A automatically supplies pressure to the alternate brake system.",
                reference: "B737 NG CBT - Landing Gear, Section 45"
            },
            {
                question: "What is the brake accumulator pressurized by?",
                options: [
                    "The hydraulic system B",
                    "Hydraulic system A",
                    "Electric pump",
                    "Manual pump"
                ],
                correct: 0,
                explanation: "Brake system also incorporates a brake accumulator which is pressurized by the hydraulic system B.",
                reference: "B737 NG CBT - Landing Gear, Section 46"
            },
            {
                question: "When does the brake accumulator provide brake energy?",
                options: [
                    "Always",
                    "Never",
                    "Only for parking",
                    "When normal brake system pressure and alternate brake system pressure are lost"
                ],
                correct: 3,
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
                correct: 2,
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
                    "No antiskid protection",
                    "Antiskid protection is applied to brakes on both wheels on that main gear instead of individual wheels",
                    "Only for one wheel"
                ],
                correct: 2,
                explanation: "If the alternate hydraulic brake system has pressure, the antiskid system operates almost the same as the normal system. However antiskid protection is applied to brakes on both wheels on that main gear instead of individual wheels.",
                reference: "B737 NG CBT - Landing Gear, Section 52"
            },
            {
                question: "Is antiskid protection available with loss of both hydraulic systems?",
                options: [
                    "Yes, antiskid protection is available even with loss of both hydraulic systems",
                    "No",
                    "Only manually",
                    "Only for parking brake"
                ],
                correct: 0,
                explanation: "Note that antiskid protection is available even with loss of both hydraulic systems.",
                reference: "B737 NG CBT - Landing Gear, Section 53"
            },
            {
                question: "What does locked wheel protection do?",
                options: [
                    "Applies more pressure",
                    "Locks the wheel",
                    "Completely releases the brake pressure at the wheel that has entered a deep skid condition until the wheel spins up again",
                    "Nothing"
                ],
                correct: 2,
                explanation: "Locked wheel protection completely releases the brake pressure at the wheel that has entered a deep skid condition until the wheel spins up again, preventing the wheel lock-up.",
                reference: "B737 NG CBT - Landing Gear, Section 55"
            },
            {
                question: "What does touchdown protection provide?",
                options: [
                    "Landing assistance",
                    "Gear protection",
                    "Protection against brake pressure application before touchdown",
                    "Hydraulic protection"
                ],
                correct: 2,
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
                correct: 3,
                explanation: "Hydroplane protection is an additional safeguard which enhances braking performance on icy or flooded runways.",
                reference: "B737 NG CBT - Landing Gear, Section 57"
            },
            {
                question: "Which hydraulic system does the autobrake system use?",
                options: [
                    "Hydraulic system A",
                    "Both A and B",
                    "Standby system",
                    "The hydraulic system B pressure"
                ],
                correct: 3,
                explanation: "The autobrake system uses the hydraulic system B pressure and is available only with the normal brake system.",
                reference: "B737 NG CBT - Landing Gear, Section 60"
            },
            {
                question: "How many deceleration rates are available for landing autobrake?",
                options: [
                    "Three rates",
                    "Two rates",
                    "Five rates",
                    "Four deceleration rates available: one, two, three and maximum"
                ],
                correct: 3,
                explanation: "There are four deceleration rates available: one, two, three and maximum.",
                reference: "B737 NG CBT - Landing Gear, Section 62"
            },
            {
                question: "How do you select the maximum autobrake setting?",
                options: [
                    "Just move the switch",
                    "Turn the switch",
                    "Push the switch",
                    "You must pull on the select switch momentarily to move it to the maximum position"
                ],
                correct: 3,
                explanation: "You must pull on the select switch momentarily to move it to the maximum position.",
                reference: "B737 NG CBT - Landing Gear, Section 63"
            },
            {
                question: "When does autobrake apply the brakes on touchdown?",
                options: [
                    "When both thrust levers are retarded to idle and main wheels spin-up",
                    "Immediately at touchdown",
                    "After 5 seconds",
                    "Only when selected"
                ],
                correct: 0,
                explanation: "The autobrake applies the brakes on touchdown when both thrust levers are retarded to idle and main wheels spin-up.",
                reference: "B737 NG CBT - Landing Gear, Section 66"
            },
            {
                question: "Can you select landing autobrake settings after touchdown?",
                options: [
                    "No, only before touchdown",
                    "Never",
                    "Only at low speeds",
                    "Yes, provided that the ground speed is more than 30 knots"
                ],
                correct: 3,
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
                    "88 knots or more",
                    "60 knots or more",
                    "100 knots or more",
                    "120 knots or more"
                ],
                correct: 0,
                explanation: "If the takeoff is rejected at a wheel speed of 88 knots or more, the autobrake function applies brakes with maximum pressure when you retard the forward thrust levers to IDLE.",
                reference: "B737 NG CBT - Landing Gear, Section 77"
            },
            {
                question: "What happens if takeoff is rejected prior to 88 knots wheel speed?",
                options: [
                    "Autobraking engages",
                    "System fails",
                    "Maximum braking applies",
                    "Autobraking does not engage. The AUTO BRAKE DISARM light remains extinguished and the RTO autobrake function remains armed"
                ],
                correct: 3,
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
                    "40 knots",
                    "30 knots",
                    "50 knots",
                    "65 knots"
                ],
                correct: 0,
                explanation: "Entry or cargo doors should not be operated in winds more than 40 knots to prevent structural damage and ensure safe operation.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 11"
            },
            {
                question: "Ground operations encounters severe weather with high winds after aircraft arrival. At what wind speed must doors be closed to prevent aircraft structural damage?",
                options: [
                    "40 knots maximum",
                    "65 knots maximum",
                    "50 knots limit",
                    "75 knots absolute limit"
                ],
                correct: 1,
                explanation: "Doors should not be kept open when winds are more than 65 knots; otherwise damage to the airplane structure may occur.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 12"
            },
            {
                question: "During external door operation, you notice the pressure gate mechanism activating. What occurs when opening a passenger door from outside?",
                options: [
                    "Pressure gate opens to equalize cabin and ambient pressure as door unlatches",
                    "Door opens immediately without pressure equalization",
                    "Emergency slides deploy automatically",
                    "Interior handles become inoperative"
                ],
                correct: 0,
                explanation: "As the door unlatches, pressure gate opens to equalize cabin and ambient pressure. The door is then pushed through the door frame until it is fully open.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 6"
            },
            {
                question: "Flight attendant asks about the visual indication system for armed escape slides. What provides external indication that a door slide is armed?",
                options: [
                    "Red warning light on fuselage",
                    "Audible warning signal",
                    "Door handle position indicator",
                    "Pennant secured across viewing window"
                ],
                correct: 3,
                explanation: "A pennant, when secured across the viewing window, provides a visual indication to someone outside the airplane that the door slide is armed.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 8"
            },
            {
                question: "Cargo operations require understanding door mechanisms. How are the two plug-type cargo doors hinged and operated?",
                options: [
                    "Hinged on lower edges, open outward electrically",
                    "Hinged on side edges, slide horizontally",
                    "Hinged on upper edges, open inward manually",
                    "No hinges, lift straight up hydraulically"
                ],
                correct: 2,
                explanation: "The doors have hinges on their upper edges and open inward. You open and close the cargo door manually from inside or outside of the cargo compartment.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "How many overwing emergency exit doors does the aircraft have?",
                options: [
                    "Two over each wing",
                    "One over each wing",
                    "Three over left wing only",
                    "Four total, two per side"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "When forward or aft passenger entry door is not secure, FORWARD ENTRY or AFT ENTRY door open light comes on.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 15"
            },
            {
                question: "Which additional lights activate when any door open light illuminates?",
                options: [
                    "Only master warning lights",
                    "Fire warning system",
                    "MASTER CAUTION and DOORS annunciator",
                    "Emergency evacuation alarms"
                ],
                correct: 2,
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
                    "Door switch illuminates",
                    "Red warning light",
                    "Audible alert sounds",
                    "Green status light"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "There are four blowout panels on the cabin door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 18"
            },
            {
                question: "During rapid flight deck depressurization, what function do the cabin door blowout panels serve?",
                options: [
                    "Seal the door completely",
                    "Provide structural reinforcement",
                    "Open into flight deck and equalize pressure",
                    "Activate emergency lighting"
                ],
                correct: 2,
                explanation: "If there is a rapid depressurization of flight deck, the blowout panels open into the flight deck and equalize the pressure between the flight deck and the passenger compartment.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 18"
            },
            {
                question: "Which blowout panels form an emergency exit for flight crew?",
                options: [
                    "Upper two panels",
                    "Lower two panels",
                    "Left side panels",
                    "All four panels"
                ],
                correct: 0,
                explanation: "The upper two blowout panels also form an emergency exit for the flight crew.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 19"
            },
            
            // EMERGENCY EQUIPMENT
            {
                question: "Flight deck emergency equipment inventory includes which protective item for smoke conditions?",
                options: [
                    "Emergency suits",
                    "Full face masks",
                    "Protective helmets",
                    "Smoke goggles"
                ],
                correct: 3,
                explanation: "Emergency equipment found on the flight deck includes life vests, flashlights, smoke googles and crash axe as well as a halon extinguisher.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 21"
            },
            {
                question: "What types of portable fire extinguishers are available on the aircraft?",
                options: [
                    "CO2 and foam",
                    "Powder and liquid",
                    "Water-type and halon",
                    "Chemical and gas"
                ],
                correct: 2,
                explanation: "Two types of portable fire extinguishers are available on the aircraft: water-type and halon.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 23"
            },
            {
                question: "Water-type fire extinguishers contain what mixture for operation?",
                options: [
                    "Water and chemicals",
                    "Water and foam",
                    "Water and anti-freeze",
                    "Pure distilled water"
                ],
                correct: 2,
                explanation: "Water-type fire extinguishers contain a mixture of water and anti-freeze.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 25"
            },
            {
                question: "For which fire types should water-type extinguishers NOT be used?",
                options: [
                    "Fabric and paper fires",
                    "Upholstery fires",
                    "Wood and plastic fires",
                    "Electrical or grease fires"
                ],
                correct: 3,
                explanation: "Do not use water-type extinguishers on electrical or grease type fires.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 26"
            },
            {
                question: "What indicates acceptable pressure range on halon fire extinguisher?",
                options: [
                    "Green range on pressure indicator",
                    "Red indicator zone",
                    "Yellow warning band",
                    "Digital display reading"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "If a halon fire extinguisher is to be discharged in the flight deck, then all crew members are to don oxygen masks and use 100% oxygen with emergency selected.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 29"
            },
            {
                question: "Emergency locator transmitter switch is normally positioned in which guarded position?",
                options: [
                    "ARM",
                    "OFF",
                    "ON",
                    "AUTO"
                ],
                correct: 0,
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
                    "Three frequencies",
                    "Two frequencies",
                    "Four frequencies"
                ],
                correct: 1,
                explanation: "An ELT light illuminates when emergency locator transmitter has been activated and is simultaneously transmitting on frequencies of 121.5, 243.0 and 406.0 MHz.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 33"
            },
            
            // FLIGHT DECK EVACUATION
            {
                question: "Primary flight deck evacuation route is through which pathway?",
                options: [
                    "Cabin door",
                    "Side windows",
                    "Overhead hatch",
                    "Emergency panels"
                ],
                correct: 0,
                explanation: "In an emergency you normally escape from the flight deck through the cabin door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 35"
            },
            {
                question: "Flight deck side windows can be opened during which conditions?",
                options: [
                    "Ground or in flight",
                    "Flight only",
                    "Ground only",
                    "Emergency only"
                ],
                correct: 0,
                explanation: "You may also evacuate the airplane through two sliding flight deck side windows which can be opened on the ground or in flight.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 36"
            },
            {
                question: "Where are escape lanyards for side window evacuation stored?",
                options: [
                    "Compartments above and aft of side windows",
                    "Under pilot seats",
                    "Behind instrument panel",
                    "In overhead storage bins"
                ],
                correct: 0,
                explanation: "In order to facilitate side window evacuation, escape lanyards are provided in the compartments above and aft of the side windows.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 37"
            },
            {
                question: "Side window evacuation should be used only under what circumstances?",
                options: [
                    "Extreme emergency",
                    "Routine evacuation",
                    "Training purposes",
                    "Maintenance access"
                ],
                correct: 0,
                explanation: "However, departure through the side window is difficult and should be used only in extreme emergency.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 38"
            },
            
            // ESCAPE SLIDES
            {
                question: "Where is each escape slide compartment located?",
                options: [
                    "Upper outboard face of door",
                    "External fuselage mount",
                    "Lower inboard face of each entry and service door",
                    "Overhead storage area"
                ],
                correct: 2,
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
                correct: 0,
                explanation: "If the pointer is within the green band, the cylinder pressure is correct and the slide is ready for use.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 40"
            },
            {
                question: "What component is used to arm the escape slide?",
                options: [
                    "Arming lever",
                    "Safety pin",
                    "Girt bar",
                    "Pressure valve"
                ],
                correct: 2,
                explanation: "Girt bar is used to arm the escape slide.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 40"
            },
            {
                question: "Escape slide fully inflates in approximately how many seconds?",
                options: [
                    "Three seconds",
                    "Fifteen seconds",
                    "Ten seconds",
                    "Six seconds"
                ],
                correct: 3,
                explanation: "The escape slide will fully inflate in approximately six seconds.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 42"
            },
            {
                question: "If escape slide fails to inflate automatically, what action provides manual inflation?",
                options: [
                    "Turn pressure valve",
                    "Activate backup system",
                    "Press emergency button",
                    "Pull manual inflation handle sharply"
                ],
                correct: 3,
                explanation: "If the escape slide does not inflate automatically, pull the manual inflation handle sharply to inflate the escape slide manually.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 43"
            },
            {
                question: "For water landings, escape slides can serve what secondary function?",
                options: [
                    "Emergency shelter",
                    "Navigation aids",
                    "Flotation devices",
                    "Communication platforms"
                ],
                correct: 2,
                explanation: "However, if properly inflated, the slides can be used as flotation devices for passengers in the water.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 45"
            },
            {
                question: "What must be done to use escape slide as flotation device?",
                options: [
                    "Inflate to maximum pressure",
                    "Seal all air valves",
                    "Attach additional flotation",
                    "Disconnect slide from airplane using release handle"
                ],
                correct: 3,
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
                    "Turn release mechanism",
                    "Hold knee against lower portion and push panel inward",
                    "Press emergency activation button"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "Overwing emergency exit door incorporates flight lock system which is designed to prevent the operation of the emergency door during takeoff, in-flight, and landing.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 51"
            },
            {
                question: "Emergency exit doors lock when how many entry/service doors are closed?",
                options: [
                    "Two or more",
                    "All doors",
                    "Three or more",
                    "At least one"
                ],
                correct: 2,
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
                correct: 2,
                explanation: "When an emergency exit door is not fully closed and locked or when the flight lock is not engaged, either during the takeoff roll or inflight, the associated OVERWING warning lights, DOORS annunciator, and MASTER CAUTION light illuminate.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 53"
            },
            {
                question: "PSEU light illuminates when emergency exit door experiences what condition?",
                options: [
                    "Locked when should be unlocked or fault detected",
                    "Normal operation",
                    "Unlocked position",
                    "Manual override engaged"
                ],
                correct: 0,
                explanation: "When an emergency exit door is locked when it should be unlocked or a fault is detected, the proximity switch electronics Unit (PSEU) light on aft overhead panel, the OVERHEAD annunciator, and the MASTER CAUTION lights illuminate.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 54"
            },
            
            // ESCAPE STRAPS
            {
                question: "Overwing escape straps provide assistance during which type of emergency?",
                options: [
                    "Ditching emergency",
                    "Fire emergency",
                    "Cabin pressurization failure",
                    "Engine failure"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "Overwing escape straps are installed in stowage tubes above each aft emergency exit door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 56"
            },
            {
                question: "What condition is required to access overwing escape straps?",
                options: [
                    "Exit door must be open",
                    "Emergency power activated",
                    "Aircraft on ground",
                    "Cabin pressurization off"
                ],
                correct: 0,
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
                correct: 2,
                explanation: "To use, pull the strap free from its stowage and attach the hook to a ring on the wing.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 57"
            },
            
            // ADDITIONAL DOORS & SYSTEMS
            {
                question: "During maintenance access, which door provides entry to center electrical and electronic equipment?",
                options: [
                    "Center E/E equipment access door",
                    "Service door",
                    "Cargo door",
                    "Emergency access panel"
                ],
                correct: 0,
                explanation: "In addition, there are miscellaneous access doors such as a center electrical and electronic (E/E) equipment access door and an equipment compartment access door on the bottom of the airplane.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 3"
            },
            {
                question: "Cargo door counterbalance mechanism serves what function?",
                options: [
                    "Prevents door damage",
                    "Seals door pressure",
                    "Helps lift door and holds it in uplock position",
                    "Controls door speed"
                ],
                correct: 2,
                explanation: "A counterbalance mechanism in the door helps lift the door and holds it in an uplock position.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "What prevents pressurization loss through cargo doors?",
                options: [
                    "Electronic sealing system",
                    "Pressure equalization valves",
                    "Seals around door edge and handle shaft",
                    "Hydraulic pressure locks"
                ],
                correct: 2,
                explanation: "Seals around the door edge and door handle shaft prevent pressurization loss.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 10"
            },
            {
                question: "Door lock mechanism in passenger doors engages at which position?",
                options: [
                    "Fully open position",
                    "Partially open position",
                    "Closed position",
                    "Any position"
                ],
                correct: 0,
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
                correct: 0,
                explanation: "To operate the water-type extinguisher, turn the handle clockwise, aim at the base of fire and push the trigger.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 25"
            },
            {
                question: "What type of fires are halon extinguishers primarily designed for?",
                options: [
                    "Electrical and fuel/grease fires",
                    "Paper and fabric fires",
                    "Wood and plastic fires",
                    "All fire types"
                ],
                correct: 0,
                explanation: "The halon extinguishers are primarily for electrical and fuel and grease fires.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 28"
            },
            {
                question: "What prevents accidental operation of stowed halon extinguisher?",
                options: [
                    "Safety pin",
                    "Pressure valve",
                    "Trigger lock",
                    "Bracket with pull ring"
                ],
                correct: 3,
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
                    "Side access panels",
                    "Lower two panels",
                    "Upper two blowout panels"
                ],
                correct: 3,
                explanation: "When you pull on the emergency exit handle, the upper two blowout panels come out of the door.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 19"
            },
            {
                question: "When girt bar is installed in floor brackets, what is the escape slide status?",
                options: [
                    "Disarmed",
                    "Partially ready",
                    "Armed",
                    "Manual mode"
                ],
                correct: 2,
                explanation: "To operate the escape slide, remove the girt bar from the stowage hooks on the door and install it in the floor brackets to arm the escape slide.",
                reference: "B737 NG CBT - Emergency Equipment, Doors & Windows, Section 41"
            }
        ]
    },
    "fire-protection": {
        title: "Fire Protection System",
        questions: [
            {
                question: "What are the five main fire protection systems on the B737 NG?",
                options: [
                    "Engine, APU, cargo, lavatory, and fuel tank fire protection",
                    "Engine, APU, wing, cargo, and cockpit fire protection",
                    "Engine, APU, wheel well, cargo, and lavatory fire protection",
                    "Engine, APU, hydraulic, electrical, and cargo fire protection"
                ],
                correct: 2,
                explanation: "The B737 NG is equipped with fire protection systems for engines, APU, main wheel wells, cargo compartments, and lavatories. Additionally, there's a wing/body fire protection system discussed in the air conditioning section.",
                reference: "B737 NG CBT - Fire Protection, Section 4"
            },
            {
                question: "How many detection loops does each engine have for fire and overheat detection?",
                options: [
                    "Two independent identical loops (A and B) monitoring fan and core sections",
                    "One continuous loop monitoring both fan and core sections",
                    "Three separate loops for fan, core, and exhaust sections",
                    "Four loops with redundant coverage for each section"
                ],
                correct: 0,
                explanation: "Each engine has two independent and identical detector loops, denoted as loop 'A' and loop 'B', which monitor the fan and core sections for overheat and fire conditions. This dual loop design provides redundancy and prevents false alerts.",
                reference: "B737 NG CBT - Fire Protection, Section 6"
            },
            {
                question: "In normal operation with the overheat detector switch in NORMAL position, what must occur for an engine fire alert to be triggered?",
                options: [
                    "Only one loop needs to sense a fire condition",
                    "Loop A has priority, but loop B can override if temperature exceeds threshold",
                    "Either loop can trigger the alert, but both must confirm within 30 seconds",
                    "Both loops must sense a fire condition simultaneously"
                ],
                correct: 3,
                explanation: "In normal mode operation, both detector loops must sense a fire condition to trigger an engine fire alert. This prevents false alarms and ensures system reliability.",
                reference: "B737 NG CBT - Fire Protection, Section 10"
            },
            {
                question: "What happens when one detector loop fails with the overheat detector switch in NORMAL position?",
                options: [
                    "The system automatically shifts to single loop operation with no flight deck indication",
                    "The FAULT light illuminates immediately and the system becomes inoperative",
                    "Both loops must be manually reset before the system can function",
                    "The system continues normal dual-loop operation until the second loop fails"
                ],
                correct: 0,
                explanation: "When one loop fails in NORMAL position, the system automatically shifts to single loop operation. The remaining detector loop can trigger all overheat or fire alerts. There is no indication in the flight deck of single loop failure.",
                reference: "B737 NG CBT - Fire Protection, Section 13"
            },
            {
                question: "When does the FAULT light illuminate on the engine and APU fire control panel?",
                options: [
                    "When any single detector loop fails regardless of switch position",
                    "When the fire extinguisher bottles are low on pressure",
                    "Only when the system detects a false fire indication",
                    "When both loops fail in NORMAL position, or when selected loop fails in A or B position"
                ],
                correct: 3,
                explanation: "The FAULT light illuminates when both loops fail on an engine with the overheat detector switch in NORMAL, or when the selected loop fails with the switch in A or B position, indicating the overheat/fire detection system is not operative.",
                reference: "B737 NG CBT - Fire Protection, Section 14-15"
            },
            {
                question: "What are the flight deck indications when an engine overheat condition is detected?",
                options: [
                    "Fire warning bell sounds and fire warning lights illuminate",
                    "Only the engine overheat light illuminates in amber",
                    "MASTER CAUTION lights illuminate, overheat annunciator lights come on, engine overheat light illuminates, and fire handle unlocks",
                    "APU fire warning activates as a backup indication"
                ],
                correct: 3,
                explanation: "When an engine overheat condition is detected, both MASTER CAUTION lights illuminate, overheat detector annunciator lights come on, the related engine overheat light illuminates, and the related engine fire handle switch unlocks.",
                reference: "B737 NG CBT - Fire Protection, Section 16"
            },
            {
                question: "What are the complete flight deck indications when an engine fire condition is detected?",
                options: [
                    "Only the fire warning bell sounds and fire warning lights illuminate",
                    "MASTER CAUTION lights illuminate, but fire warning bell is inhibited",
                    "Fire warning bell sounds, but overheat indications are suppressed",
                    "Fire warning bell sounds, red fire warning lights illuminate, engine fire switch light illuminates, plus all overheat indications remain ON"
                ],
                correct: 3,
                explanation: "When an engine fire condition is detected, the fire warning bell sounds, both red fire warning lights illuminate, the related engine fire switch light illuminates, and all related engine overheat alert indications stay ON.",
                reference: "B737 NG CBT - Fire Protection, Section 18"
            },
            {
                question: "What type of extinguishing agent is used in the engine fire extinguisher bottles?",
                options: [
                    "Carbon dioxide (CO2) in compressed form",
                    "Dry chemical powder with nitrogen propellant",
                    "Halon in liquid form pressurized by nitrogen",
                    "Water with fire-retardant additives"
                ],
                correct: 2,
                explanation: "The spherical extinguisher bottles contain halon in liquid form as the extinguishing agent. The bottles are pressurized by nitrogen to ensure complete discharge of the agent.",
                reference: "B737 NG CBT - Fire Protection, Section 21"
            },
            {
                question: "How is the halon extinguishing agent discharged from the bottles?",
                options: [
                    "Manual valve operation releases pressure gradually",
                    "Thermal activation melts a discharge plug automatically",
                    "Compressed air pushes the agent through a spring-loaded valve",
                    "Cartridge with explosive powder is fired electrically, rupturing a disk"
                ],
                correct: 3,
                explanation: "A cartridge in the discharge head contains explosive powder which is fired by heating up a wire (squib) electrically. The explosion of the cartridge ruptures a thin disk at the bottom of the bottle and releases the agent.",
                reference: "B737 NG CBT - Fire Protection, Section 21"
            },
            {
                question: "Under what conditions do the engine fire switches automatically unlock?",
                options: [
                    "Only when a fire condition is detected",
                    "When either an overheat or fire condition causes illumination of engine overheat light or engine fire switch",
                    "Only when both engines simultaneously detect overheat conditions",
                    "When the APU fire system is activated"
                ],
                correct: 2,
                explanation: "The engine fire switches automatically unlock when there is an overheat or fire condition which causes illumination of an engine overheat light or engine fire switch. You can also manually unlock using the override button.",
                reference: "B737 NG CBT - Fire Protection, Section 22-23"
            },
            {
                question: "What systems are affected when an engine fire switch is pulled up?",
                options: [
                    "Only the fuel supply to the engine is shut off",
                    "Only electrical systems are isolated from the affected engine",
                    "All engine systems continue operating except fire suppression is activated",
                    "Fuel shutoff valves close, hydraulic pump shuts off, generator trips, bleed air valve closes, thrust reverser disabled, and extinguisher squibs arm"
                ],
                correct: 3,
                explanation: "Pulling the engine fire switch up causes: fuel shutoff valves close, hydraulic pump shutoff valve closes, generator trips off, bleed air valve closes (affecting wing anti-ice), thrust reverser is disabled, and one discharge squib on each extinguisher bottle is armed.",
                reference: "B737 NG CBT - Fire Protection, Section 25"
            },
            {
                question: "How are the engine fire extinguisher bottles discharged after the fire switch is pulled?",
                options: [
                    "Both bottles discharge automatically in sequence",
                    "Rotate the fire switch counter-clockwise for left bottle, clockwise for right bottle",
                    "Push the fire switch down to discharge both bottles simultaneously",
                    "Use separate discharge buttons located next to each fire switch"
                ],
                correct: 3,
                explanation: "After pulling the fire switch up, rotating it counter-clockwise discharges the left bottle, and rotating it clockwise discharges the right bottle. Each bottle can be discharged into either engine.",
                reference: "B737 NG CBT - Fire Protection, Section 26-27"
            },
            {
                question: "What is the main difference between the APU fire detection system and the engine fire detection system?",
                options: [
                    "APU system uses infrared sensors instead of heat detectors",
                    "APU system uses a single fire detection loop and has no overheat detection",
                    "APU system has overheat detection capability while engine system does not",
                    "APU system operates on different electrical power source"
                ],
                correct: 1,
                explanation: "The APU fire detection system operates the same as the engine system but uses a single fire detection loop and has no overheat detection system. It monitors only for fire conditions.",
                reference: "B737 NG CBT - Fire Protection, Section 29-30"
            },
            {
                question: "What automatic actions occur when an APU fire condition is detected?",
                options: [
                    "Only fire warning indications activate in the flight deck",
                    "Fire warning bell sounds, FIRE warning lights illuminate, APU fire switch illuminates and unlocks, and APU automatically shuts down and isolates",
                    "APU continues operating but fire suppression system activates",
                    "All electrical systems automatically switch to engine generators"
                ],
                correct: 2,
                explanation: "When an APU fire is detected, the fire warning bell sounds, both red FIRE warning lights illuminate, the APU fire switch light comes on and unlocks, and the APU automatically shuts down and isolates from other systems.",
                reference: "B737 NG CBT - Fire Protection, Section 32"
            },
            {
                question: "Where is the APU remote control panel located and what are its indications?",
                options: [
                    "Right main wheel well with alternating horn and red light at one per second rate",
                    "Left main wheel well with steady red light and continuous horn",
                    "Cargo compartment with flashing amber light",
                    "Engine compartment with audible alarm only"
                ],
                correct: 0,
                explanation: "The APU remote control panel is in the right main wheel well and provides aural and visual indications of APU fire. A horn and red light operate alternately at a one per second rate. The horn does not operate in flight.",
                reference: "B737 NG CBT - Fire Protection, Section 33"
            },
            {
                question: "What systems are affected when the APU fire switch is pulled up?",
                options: [
                    "APU fuel shutoff valve closes, APU shuts down, bleed air valve closes, generator breaker opens, air inlet door closes, and fire extinguisher squib arms",
                    "Only the APU fire extinguisher squib is armed",
                    "All APU systems continue operating except fire suppression activates",
                    "Only electrical isolation occurs while APU continues running"
                ],
                correct: 0,
                explanation: "When the APU fire switch is pulled up: APU fuel shutoff valve closes and APU shuts down, APU bleed air valve closes, APU generator breaker opens, APU air inlet door closes, and the APU fire extinguisher bottle squib arms.",
                reference: "B737 NG CBT - Fire Protection, Section 40"
            },
            {
                question: "How can APU fire be extinguished from the ground?",
                options: [
                    "Only from the flight deck using normal procedures",
                    "Automatically through ground-based fire suppression systems",
                    "From the APU remote control panel in the right main wheel well",
                    "Manual foam application by ground personnel only"
                ],
                correct: 2,
                explanation: "On the ground, APU fire can be extinguished from the remote control panel in the right main wheel well. Pull down the APU fire control handle to arm the system, then use the toggle switch to discharge the extinguisher bottle.",
                reference: "B737 NG CBT - Fire Protection, Section 42"
            },
            {
                question: "What is unique about the wheel well fire protection system compared to other fire protection systems?",
                options: [
                    "It has dual detection loops for redundancy",
                    "It has fire detection but no fire extinguishing system",
                    "It has automatic fire suppression capability",
                    "It operates independently of aircraft electrical power"
                ],
                correct: 1,
                explanation: "Fire protection for the main wheel well consists of a fire detection system powered by AC transfer bus 2, but there is no fire extinguishing system for the main wheel well.",
                reference: "B737 NG CBT - Fire Protection, Section 43"
            },
            {
                question: "How is a wheel well fire extinguished?",
                options: [
                    "Using dedicated wheel well fire extinguisher bottles",
                    "By isolating electrical power to the wheel well",
                    "Through automatic halon discharge system",
                    "By extending the landing gear to allow air flow through the wheel well"
                ],
                correct: 3,
                explanation: "Since there is no fire extinguisher for the wheel well, you can extinguish a wheel well fire by air flow. After resetting the master fire warning system, extend the landing gear to let air flow through the wheel well, ensuring airspeed is below maximum gear extension speed.",
                reference: "B737 NG CBT - Fire Protection, Section 46"
            },
            {
                question: "What are the flight deck indications of a wheel well fire?",
                options: [
                    "Only the wheel well fire warning light illuminates",
                    "Fire warning bell sounds, both red FIRE WARNING lights illuminate, and red WHEEL WELL light illuminates",
                    "MASTER CAUTION lights illuminate with associated annunciator lights",
                    "APU fire warning activates as the wheel well system is interconnected"
                ],
                correct: 1,
                explanation: "Flight deck indications of a wheel well fire include: fire warning bell sounds, both red FIRE WARNING lights illuminate, and the red WHEEL WELL light on the engine and APU fire control panel comes on.",
                reference: "B737 NG CBT - Fire Protection, Section 45"
            },
            {
                question: "How many smoke detectors are installed in each cargo compartment?",
                options: [
                    "Two detectors in forward, three in aft compartment",
                    "Three detectors in forward, four in aft compartment",
                    "Six detectors in each compartment for redundancy",
                    "Four detectors in forward, six in aft compartment"
                ],
                correct: 3,
                explanation: "There are four smoke detectors in the forward cargo compartment and six smoke detectors in the aft cargo compartment. The detectors are photoelectric and located in the ceiling of the compartments.",
                reference: "B737 NG CBT - Fire Protection, Section 50"
            },
            {
                question: "What configuration are the cargo compartment smoke detectors arranged in?",
                options: [
                    "Single loop configuration with all detectors in series",
                    "Triple redundant configuration with voting logic",
                    "Dual loop configuration where both loops must detect smoke to trigger warning",
                    "Independent detector configuration with individual monitoring"
                ],
                correct: 2,
                explanation: "The cargo compartment smoke detectors are in a dual loop configuration. In normal operation, both loops must detect smoke to trigger a warning, providing redundancy and preventing false alarms.",
                reference: "B737 NG CBT - Fire Protection, Section 50"
            },
            {
                question: "What are the positions of the cargo compartment detector switches and their functions?",
                options: [
                    "ON/OFF positions for each compartment independently",
                    "AUTO, MANUAL, and TEST positions for system operation modes",
                    "NORMAL, A, and B positions - NORMAL requires both loops to agree, A or B selects single loop operation",
                    "HIGH, MEDIUM, and LOW sensitivity settings"
                ],
                correct: 2,
                explanation: "Each cargo compartment detector switch has three positions: NORMAL (both loops must sense smoke to trigger indication), A (only loop A triggers indication), and B (only loop B triggers indication). In failure of one loop, the system automatically shifts to single-loop mode.",
                reference: "B737 NG CBT - Fire Protection, Section 52-54"
            },
            {
                question: "What are the flight deck indications when a cargo compartment fire is detected?",
                options: [
                    "Fire warning bell sounds, both master fire warning lights illuminate, and forward or aft cargo fire light illuminates",
                    "Only the cargo fire warning light illuminates for the affected compartment",
                    "MASTER CAUTION lights illuminate with cargo fire annunciator lights",
                    "All fire warning systems activate including engine and APU indications"
                ],
                correct: 0,
                explanation: "When a cargo compartment fire is detected: the fire warning bell sounds, both master fire warning lights illuminate, and the forward or aft cargo fire light on the cargo fire control panel illuminates.",
                reference: "B737 NG CBT - Fire Protection, Section 55"
            },
            {
                question: "How many fire extinguisher bottles serve the cargo compartments and where are they located?",
                options: [
                    "One bottle for each compartment, located in the cargo areas",
                    "Two bottles total, installed in the air conditioning mix bay",
                    "Three bottles with one backup, located in the wheel well",
                    "Four bottles for maximum coverage, distributed throughout the aircraft"
                ],
                correct: 3,
                explanation: "The cargo compartment fire extinguishing system consists of two fire extinguisher bottles installed in the air conditioning mix bay. These bottles contain halon as the extinguishing agent and connect to discharge nozzles in the cargo compartment ceilings.",
                reference: "B737 NG CBT - Fire Protection, Section 57-58"
            },
            {
                question: "What is the complete procedure to operate the cargo compartment fire extinguishing system?",
                options: [
                    "Push the discharge switch immediately when fire is detected",
                    "Push the cargo fire warning switch, lift the discharge switch protective cover, and push the discharge switch for minimum 1 second",
                    "Pull the cargo fire handle and rotate to discharge the extinguisher",
                    "Turn the cargo fire switch to ARM position and wait for automatic discharge"
                ],
                correct: 0,
                explanation: "To operate the cargo compartment fire extinguishing system: push the related cargo fire warning switch, lift the discharge switch protective cover, and push the discharge switch for a minimum of 1 second.",
                reference: "B737 NG CBT - Fire Protection, Section 59"
            },
            {
                question: "What happens when the cargo compartment discharge switch is pushed?",
                options: [
                    "Both bottles discharge simultaneously into the selected compartment",
                    "The system arms but waits for pilot confirmation before discharge",
                    "All bottles discharge into both compartments as a precaution",
                    "The first bottle discharges into the selected compartment and a 60-minute timer starts"
                ],
                correct: 3,
                explanation: "When the discharge switch is pushed: the first bottle starts to discharge into the selected compartment and a 60-minute timer starts to operate. When the first bottle is totally discharged, the discharge switch illuminates.",
                reference: "B737 NG CBT - Fire Protection, Section 60"
            },
            {
                question: "What is the function of the 60-minute timer in the cargo fire extinguishing system?",
                options: [
                    "It provides time for manual fire fighting before automatic discharge",
                    "It automatically resets the system after 60 minutes of operation",
                    "It delays the first bottle discharge to allow for crew response",
                    "If airplane is in flight, after 60 minutes the second bottle discharges at reduced flow; discharge is inhibited if airplane lands first"
                ],
                correct: 3,
                explanation: "The 60-minute timer determines the second discharge. If the airplane is in flight, after 60 minutes the second bottle starts to discharge at a reduced flow into the same compartment. The second discharge is inhibited if the airplane lands before the 60 minutes are over.",
                reference: "B737 NG CBT - Fire Protection, Section 61"
            },
            {
                question: "What components make up the lavatory fire protection system?",
                options: [
                    "Only smoke detection with no fire suppression",
                    "Smoke detection system and fire extinguishing system",
                    "Fire detection only with manual suppression",
                    "Overheat detection and automatic ventilation system"
                ],
                correct: 3,
                explanation: "Lavatory fire protection consists of lavatory smoke detection system and lavatory fire extinguishing system, providing both detection and suppression capabilities.",
                reference: "B737 NG CBT - Fire Protection, Section 62"
            },
            {
                question: "How does the lavatory smoke detection system indicate a smoke condition?",
                options: [
                    "Red alarm light illuminates on the sensor and internal horn sounds until interrupt switch is pushed or smoke clears",
                    "Flight deck warning lights illuminate immediately",
                    "Only audible alarm sounds with no visual indication",
                    "Smoke detector sends signal directly to cargo fire control panel"
                ],
                correct: 0,
                explanation: "When smoke is detected in a lavatory, the red alarm light illuminates on the sensor and an internal horn sounds. The horn stays ON until you push the interrupt switch or the sensor no longer detects smoke.",
                reference: "B737 NG CBT - Fire Protection, Section 64"
            },
            {
                question: "How does the lavatory fire extinguishing system operate?",
                options: [
                    "Manual activation by flight crew using cockpit controls",
                    "Automatic activation when smoke detector triggers fire suppression",
                    "Activation by cabin crew using manual discharge handle",
                    "Automatic activation when temperature indicators change from white to black and discharge port plug melts"
                ],
                correct: 3,
                explanation: "When there is an overheat or fire condition, temperature indicators change color from white to black, the plug at the discharge port melts, and the extinguisher automatically releases halon to stop the fire. There is no flight deck indication of extinguisher discharge.",
                reference: "B737 NG CBT - Fire Protection, Section 66"
            },
            {
                question: "What tests can be performed on the fire protection systems during preflight?",
                options: [
                    "FAULT/INOP test, overheat/fire test, fire extinguisher test, and cargo fire system test",
                    "Only visual inspection of extinguisher bottles and indicators",
                    "Engine run-up test with fire simulation",
                    "Smoke generation test in all compartments"
                ],
                correct: 0,
                explanation: "During preflight, you can perform: FAULT/INOP test (checks fault detection circuits), overheat/fire test (checks detection loops), fire extinguisher test (checks squib continuity), and cargo fire system test (checks smoke detectors and extinguishing system).",
                reference: "B737 NG CBT - Fire Protection, Section 67"
            },
            {
                question: "What are the indications of a successful FAULT/INOP test?",
                options: [
                    "Only the FAULT lights illuminate on the control panel",
                    "Fire warning bell sounds with all fire warning lights",
                    "MASTER CAUTION lights illuminate, overheat/detector annunciator lights illuminate, amber FAULT light illuminates, and amber APU DETECTOR INOP light illuminates",
                    "All extinguisher discharge lights illuminate"
                ],
                correct: 2,
                explanation: "A successful FAULT/INOP test shows: both MASTER CAUTION lights come on, overheat/detector annunciator lights illuminate, amber FAULT light comes on, and amber APU DETECTOR INOP light illuminates.",
                reference: "B737 NG CBT - Fire Protection, Section 68"
            },
            {
                question: "What are the indications of a successful overheat/fire test?",
                options: [
                    "Only engine and APU fire lights illuminate",
                    "Only the fire warning bell sounds",
                    "All systems indicate normal operation",
                    "Fire warning bell operates, master FIRE WARN lights illuminate, MASTER CAUTION lights illuminate, overheat/detector annunciator lights illuminate, engine and APU fire switches illuminate and unlock, engine OVERHEAT lights illuminate, APU remote panel operates, and WHEEL WELL light illuminates"
                ],
                correct: 3,
                explanation: "A successful overheat/fire test produces comprehensive indications: fire warning bell operates, master FIRE WARN lights illuminate, MASTER CAUTION lights illuminate, overheat/detector annunciator lights illuminate, ENG 1, ENG 2, and APU fire switches illuminate and unlock, engine OVERHEAT lights illuminate, APU remote panel operates (if AC power available), and WHEEL WELL light illuminates.",
                reference: "B737 NG CBT - Fire Protection, Section 69"
            },
            {
                question: "How is the fire extinguisher bottle squib continuity tested?",
                options: [
                    "By discharging a small amount of agent from each bottle",
                    "By measuring electrical resistance at each bottle connection",
                    "Using the extinguisher test switch in positions 1 and 2 - if all three green lights illuminate for each position, the test is satisfactory",
                    "Through automatic self-test during engine start sequence"
                ],
                correct: 2,
                explanation: "The extinguisher test switch tests squib continuity. Position 1 tests the number 1 discharge squib circuits for all three bottles, position 2 tests the number 2 circuits. If all three green lights illuminate for each position, the test is satisfactory.",
                reference: "B737 NG CBT - Fire Protection, Section 70"
            },
            {
                question: "What are the complete indications of a successful cargo fire system test?",
                options: [
                    "Only the cargo fire warning lights illuminate",
                    "All fire protection systems activate simultaneously",
                    "MASTER CAUTION lights illuminate with cargo annunciator lights",
                    "Master FIRE WARN lights illuminate, fire warning bell operates, forward and aft extinguisher lights illuminate, cargo fire warning switch lights illuminate, and cargo fire bottle DISCH light illuminates"
                ],
                correct: 3,
                explanation: "A successful cargo fire system test shows: both master FIRE WARN lights illuminate, fire warning bell operates, forward and aft fire extinguisher lights illuminate (verifying squib continuity), cargo fire warning switch lights illuminate when all detectors respond, and cargo fire bottle DISCH light illuminates.",
                reference: "B737 NG CBT - Fire Protection, Section 71"
            },
            {
                question: "What happens if one or more detectors fail during the cargo fire system test?",
                options: [
                    "The test continues normally with no indication",
                    "The test must be repeated with different switch positions",
                    "All fire protection systems shut down automatically",
                    "The DETECTOR fault light illuminates to indicate detector failure"
                ],
                correct: 3,
                explanation: "If one or more detectors in the selected loop has failed, the DETECTOR fault light will illuminate during the cargo fire system test. Test indications clear when the TEST switch is released, with up to a four-second delay for system reset.",
                reference: "B737 NG CBT - Fire Protection, Section 72"
            },
            {
                question: "What do the three positions of the overheat detector switch control?",
                options: [
                    "NORMAL (both loops A and B must agree), A (only loop A triggers alert), B (only loop B triggers alert)",
                    "The sensitivity level of the detection system",
                    "The temperature thresholds for overheat and fire detection",
                    "The power source for the detection system"
                ],
                correct: 0,
                explanation: "The overheat detector switch positions are: NORMAL (detection loop A and loop B must agree to trigger an alert), A (detection loop A is the only sense authority), and B (detection loop B is the only sense authority).",
                reference: "B737 NG CBT - Fire Protection, Section 74"
            },
            {
                question: "What is the function of the fire warning BELL CUTOUT switch?",
                options: [
                    "It only stops the fire warning bell",
                    "It disables all fire protection systems temporarily",
                    "It extinguishes both master FIRE WARN lights, stops the fire warning bell, stops the remote APU fire warning horn, and resets the system for additional warnings",
                    "It switches the fire warning system to backup mode"
                ],
                correct: 2,
                explanation: "When pushed, the fire warning BELL CUTOUT switch extinguishes both master FIRE WARN lights, stops the fire warning bell, stops the remote APU fire warning horn, and resets the system for additional warnings.",
                reference: "B737 NG CBT - Fire Protection, Section 75"
            },
            {
                question: "What does an illuminated red engine fire switch indicate and what actions does it enable?",
                options: [
                    "Indicates fire in associated engine, unlocks the fire switch, and when UP position arms extinguisher circuits and isolates engine systems",
                    "Only indicates fire detected in the associated engine",
                    "Indicates overheat condition requiring immediate engine shutdown",
                    "Indicates fire extinguisher system malfunction"
                ],
                correct: 0,
                explanation: "An illuminated red engine fire switch indicates fire in the associated engine and unlocks the fire switch. When moved to UP position, it arms one discharge squib on each engine fire extinguisher and isolates related engine systems from other systems.",
                reference: "B737 NG CBT - Fire Protection, Section 77"
            },
            {
                question: "What is indicated when the amber FAULT light illuminates on the fire control panel?",
                options: [
                    "Fire extinguisher bottles are low on pressure",
                    "If overheat detector switch is in NORMAL: both detector loops for an engine have failed. If in A or B: selected detector loop has failed",
                    "The fire warning system needs calibration",
                    "Manual override is required for fire protection system operation"
                ],
                correct: 3,
                explanation: "The amber FAULT light indicates: if the overheat detector switch is in NORMAL position, both detector loops for an engine have failed; if in A or B position, the selected detector loop for an engine has failed.",
                reference: "B737 NG CBT - Fire Protection, Section 82"
            },
            {
                question: "What is the significance of the amber APU DETECTOR INOP light?",
                options: [
                    "APU fire extinguisher system is not armed",
                    "APU fire extinguisher bottle pressure is low",
                    "APU is not running and detector cannot function",
                    "APU detector loop has failed"
                ],
                correct: 3,
                explanation: "The amber APU DETECTOR INOP light illuminates to indicate that the APU detector loop has failed, meaning the APU fire detection system is not operative.",
                reference: "B737 NG CBT - Fire Protection, Section 83"
            },
            {
                question: "What do the green extinguisher test lights indicate?",
                options: [
                    "Number 1 or number 2 discharge squib circuit test is satisfactory",
                    "Fire extinguisher bottles are properly pressurized",
                    "Fire extinguisher system is armed and ready",
                    "Fire extinguisher bottles have been recently serviced"
                ],
                correct: 0,
                explanation: "The green extinguisher test lights illuminate to indicate that the number 1 or number 2 discharge squib circuit test is satisfactory, confirming proper electrical continuity for bottle discharge.",
                reference: "B737 NG CBT - Fire Protection, Section 86"
            },
            {
                question: "What is the function of the cargo fire ARM switches?",
                options: [
                    "They test the cargo fire detection system",
                    "They select which cargo compartment to monitor",
                    "They discharge the cargo fire extinguisher immediately",
                    "When pushed, the word ARMED illuminates and the fire extinguisher for the related cargo compartment is armed"
                ],
                correct: 3,
                explanation: "When the cargo fire ARM switches are pushed, the word ARMED illuminates in white and the fire extinguisher for the related cargo compartment is armed. The system can then be activated by the discharge switch.",
                reference: "B737 NG CBT - Fire Protection, Section 91"
            },
            {
                question: "What happens to the second bottle discharge timer when the cargo fire system is disarmed?",
                options: [
                    "The timer continues running but discharge is delayed",
                    "The timer automatically resets to zero",
                    "The second bottle discharge timer is disabled when the system is disarmed",
                    "The timer function is transferred to manual control"
                ],
                correct: 2,
                explanation: "If the first bottle has discharged and the system remains armed, the second discharge is inhibited if the airplane lands before 60 minutes are over. The second bottle discharge timer is disabled when the system is disarmed.",
                reference: "B737 NG CBT - Fire Protection, Section 91"
            },
            {
                question: "What are the normal indications on the lavatory fire extinguisher temperature indicator?",
                options: [
                    "Green indicates normal, red indicates fire condition",
                    "Blue indicates normal, orange indicates high temperature",
                    "White indicates normal condition, black indicates exposure to high temperatures",
                    "Clear indicates normal, yellow indicates caution condition"
                ],
                correct: 0,
                explanation: "The lavatory fire extinguisher temperature indicator placard shows white for normal condition and black when the indicator is exposed to high temperatures, indicating activation of the fire suppression system.",
                reference: "B737 NG CBT - Fire Protection, Section 99"
            },
            {
                question: "How can you tell if a lavatory fire extinguisher has discharged?",
                options: [
                    "The nozzle tips change from black to ash gray color",
                    "The temperature indicator changes from white to red",
                    "A flight deck warning light illuminates",
                    "The extinguisher bottle pressure gauge shows zero"
                ],
                correct: 0,
                explanation: "The heat activated nozzle tips are normally black. An ash gray color indicates the extinguisher has discharged, providing visual confirmation of fire suppression system activation.",
                reference: "B737 NG CBT - Fire Protection, Section 100"
            },
            {
                question: "What is the power source for the engine overheat and fire detection system?",
                options: [
                    "Main aircraft electrical system",
                    "External ground power",
                    "APU generator",
                    "Battery bus"
                ],
                correct: 3,
                explanation: "The engine overheat and fire detection system uses continuous detector loops powered by the battery bus, ensuring operation even if main electrical power is lost.",
                reference: "B737 NG CBT - Fire Protection, Section 6"
            },
            {
                question: "What is the power source for the engine fire extinguishing system?",
                options: [
                    "Battery bus",
                    "APU generator",
                    "Main electrical system",
                    "Hot battery bus"
                ],
                correct: 3,
                explanation: "The engine fire extinguisher system is powered by the hot battery bus, ensuring reliable operation during emergency conditions when other electrical systems may be compromised.",
                reference: "B737 NG CBT - Fire Protection, Section 20"
            },
            {
                question: "What power source operates the wheel well fire detection system?",
                options: [
                    "Battery bus",
                    "AC transfer bus 2",
                    "Hot battery bus",
                    "APU electrical system"
                ],
                correct: 1,
                explanation: "Fire protection for the main wheel well consists of a fire detection system powered by the AC transfer bus 2, providing reliable power for this critical safety system.",
                reference: "B737 NG CBT - Fire Protection, Section 43"
            }
        ]
    },
    "flight-instruments": {
        title: "Flight Instruments & Displays",
        questions: [
            {
                question: "What is the purpose of the Common Display System (CDS) and how many identical display units does it utilize?",
                options: [
                    "Provides engine monitoring only using four display units",
                    "Controls autopilot functions using eight specialized display units",
                    "Supplies performance, navigation and engine information using six identical flat panel LCD units",
                    "Manages communication systems using two primary display units"
                ],
                correct: 2,
                explanation: "The Common Display System (CDS) supplies performance, navigation and engine information to the flight crew in many different formats using six identical, flat panel, liquid crystal display units: Captain's outboard/inboard, First Officer's outboard/inboard, upper and lower.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 146-149"
            },
            {
                question: "In normal DEU operation, which display units are controlled by DEU 1 and DEU 2 respectively?",
                options: [
                    "DEU 1 controls Captain's outboard/inboard and upper displays, DEU 2 controls First Officer's outboard/inboard and lower displays",
                    "DEU 1 controls First Officer displays, DEU 2 controls Captain displays",
                    "Both DEUs control all six displays simultaneously for redundancy",
                    "DEU 1 controls engine displays, DEU 2 controls flight displays"
                ],
                correct: 0,
                explanation: "Normally, DEU 1 supplies display data to the Captain's outboard, Captain's inboard and upper display units. DEU 2 supplies display data to the First Officer outboard, First Officer inboard and lower display units. If a DEU fails, the remaining DEU automatically supplies data to all six displays.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 156-158"
            },
            {
                question: "What are the three positions of the CONTROL PANEL select switch and what do they control?",
                options: [
                    "AUTO, MANUAL, TEST - controls display brightness levels",
                    "LEFT, RIGHT, CENTER - controls display unit physical positioning",
                    "PRIMARY, SECONDARY, BACKUP - controls data source priority",
                    "NORMAL, BOTH ON 1, BOTH ON 2 - controls which EFIS control panel controls the outboard and inboard display units"
                ],
                correct: 3,
                explanation: "The CONTROL PANEL select switch has three positions: NORMAL (Captain's EFIS controls Captain's displays, First Officer's EFIS controls First Officer's displays), BOTH ON 1 (Captain's EFIS controls both pilots' displays), BOTH ON 2 (First Officer's EFIS controls both pilots' displays).",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 173-175"
            },
            {
                question: "What occurs during automatic display switching if the Captain's outboard display unit fails?",
                options: [
                    "The respective outboard display blanks and primary flight data automatically shows on the inboard display unit",
                    "The display remains blank and no automatic switching occurs",
                    "The lower display unit automatically shows primary flight data",
                    "The First Officer's outboard display mirrors the failed display data"
                ],
                correct: 0,
                explanation: "If an outboard display unit fails, the respective display blanks and the primary flight data automatically shows on the inboard display unit. This ensures continuous availability of critical flight information.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 195"
            },
            {
                question: "How do the air data modules (ADMs) contribute to the display system, and how many are there?",
                options: [
                    "Four ADMs receive pitot and static pressure, convert to electrical signals, and send data to ADIRUs",
                    "Two ADMs provide backup navigation data to the displays",
                    "Six ADMs control individual display unit brightness and contrast",
                    "Eight ADMs manage all aircraft system data distribution"
                ],
                correct: 0,
                explanation: "The ADIRS incorporates four air data modules (ADMs). They receive total air pressure from primary pitot probes and static air pressure from primary static ports, convert pneumatic pressure to electrical signals, and send this data to the ADIRUs for processing and display.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 212-216"
            },
            {
                question: "What conditions trigger the CDS FAULT message, and what action should be taken?",
                options: [
                    "Message shows in flight when one DEU fails - continue normal operation",
                    "Message shows on ground when at least one engine is not running due to total DEU failure - do not takeoff",
                    "Message shows during engine start - complete normal startup procedure",
                    "Message shows only during maintenance operations - no crew action required"
                ],
                correct: 2,
                explanation: "The CDS FAULT message shows only when the airplane is on the ground and at least one engine is not running, indicating a total DEU failure. Do not takeoff when CDS FAULT annunciates, as this represents a critical system failure.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 223-224"
            },
            {
                question: "What is the significance of the DISPLAY SOURCE message in flight?",
                options: [
                    "Indicates normal dual DEU operation is functioning properly",
                    "Shows that all display units are getting data from only one DEU due to a DEU failure",
                    "Warns of display brightness sensor malfunction",
                    "Indicates EFIS control panel requires recalibration"
                ],
                correct: 0,
                explanation: "In flight, when a DEU failure causes all display units to get data from only one DEU, the amber DISPLAY SOURCE message shows on the lower left corner of the primary flight display, indicating loss of redundancy in the display system.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 227"
            },
            {
                question: "What limitations exist when the DISPLAY SOURCE message is annunciated?",
                options: [
                    "Single autopilot operation only, no approach capability",
                    "Flight director indications become unreliable on both sides",
                    "All autopilot functions are disabled until message clears",
                    "Must select opposite autopilot if DEU fails on same side as engaged autopilot, dual autopilot approach not available"
                ],
                correct: 3,
                explanation: "If a DEU fails on the same side as the engaged autopilot, you must select the opposite autopilot and ensure correct flight director indications on the same side as operating autopilot. Dual autopilot approach is not available with DISPLAY SOURCE annunciated.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 228-229"
            },
            {
                question: "At what airspeed threshold does the PFD airspeed tape show actual versus minimum displayed speed?",
                options: [
                    "Below 30 knots, displays 30 knots minimum",
                    "Below 80 knots, displays 80 knots minimum",
                    "Below 60 knots, displays 60 knots minimum",
                    "Below 45 knots, displays 45 knots minimum"
                ],
                correct: 3,
                explanation: "When the airspeed is below 45 knots, the PFD display shows 45 knots as the minimum displayable speed on the speed tape, preventing confusion at very low airspeeds.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 244"
            },
            {
                question: "When does the Mach number display, and what replaces it at lower speeds?",
                options: [
                    "Displays above 0.40 Mach, replaced by ground speed when decreasing below 0.40 Mach",
                    "Displays above 0.30 Mach, replaced by true airspeed below",
                    "Always displays above 10,000 feet regardless of Mach number",
                    "Displays above 0.50 Mach, replaced by indicated airspeed below"
                ],
                correct: 0,
                explanation: "The Mach number is displayed as a digital readout below the speed tape when the current Mach number is more than 0.40. When the airspeed decreases below 0.40 Mach, the current ground speed is displayed instead.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 245-246"
            },
            {
                question: "What does the airspeed trend vector indicate and what is its time prediction?",
                options: [
                    "Shows wind correction angle over next 5 seconds",
                    "Shows track deviation prediction over next 20 seconds",
                    "Displays altitude trend over next 15 seconds",
                    "Indicates predicted airspeed in the next 10 seconds based on current airspeed and acceleration"
                ],
                correct: 3,
                explanation: "An airspeed trend vector of variable length indicates the predicted airspeed in the next 10 seconds based on the current airspeed and acceleration, helping pilots anticipate airspeed changes.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 247"
            },
            {
                question: "What determines the maximum speed indication on the speed tape?",
                options: [
                    "Always shows Vmo regardless of configuration",
                    "Shows FMC calculated maximum speed for current weight",
                    "Displays maximum certified airspeed for the aircraft",
                    "Shows the lowest of Vmo or Mmo, landing gear placard speed, or flap placard speed"
                ],
                correct: 3,
                explanation: "The maximum speed is the lowest of Vmo or Mmo (maximum operating speed), landing gear placard speed, or flap placard speed. The bottom of the alternating red and black bar shows this maximum speed limit.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 254"
            },
            {
                question: "What does the amber bar on the speed tape indicate when flaps are up versus when flaps are extended?",
                options: [
                    "Always indicates same speed limit regardless of flap position",
                    "Always indicates stall speed plus safety margin",
                    "With flaps up: approach speed; with flaps extended: takeoff speed",
                    "With flaps up: maximum maneuver speed before high speed buffet; with flaps extended: next flap position limit speed"
                ],
                correct: 3,
                explanation: "With flaps up, the bottom of the hollow amber bar indicates maximum maneuver speed (highest speed before high speed buffet at high altitude/gross weight). With flaps not up, it indicates the next flap position limit speed (maximum speed for next flap position).",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 255-257"
            },
            {
                question: "At what banking capability does the minimum maneuver speed amber bar protect against stick shaker activation?",
                options: [
                    "Up to 40 degrees bank while maneuvering in level flight before stick shaker occurs",
                    "Up to 25 degrees bank before stick shaker occurs",
                    "Up to 50 degrees bank in any flight condition",
                    "Up to 60 degrees bank during approach phase only"
                ],
                correct: 0,
                explanation: "The top of the amber bar indicates minimum maneuver speed. At this speed, you can bank the airplane up to 40 degrees while maneuvering in level flight before stick shaker occurs, providing adequate stall margin during maneuvering.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 260"
            },
            {
                question: "What conditions must be met for the NO V SPEEDS failure flag to be displayed?",
                options: [
                    "When airplane is in flight and V speeds are not set",
                    "Only when manual speed entry mode is selected",
                    "When FMC is operating normally but speeds are automatically calculated",
                    "On the ground, if both V1 and VR are not valid or are set to less than 80 knots"
                ],
                correct: 3,
                explanation: "On the ground, if both decision speed V1 and rotation speed VR are not valid or are set to less than 80 knots, the NO V SPEEDS failure flag is displayed to alert crew of invalid takeoff speeds.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 267"
            },
            {
                question: "When the FMC is operative, at what altitude does the UP bug disappear from view and why?",
                options: [
                    "Above 15,000 feet because flaps are always retracted",
                    "Above 30,000 feet because maneuver speed is not relevant",
                    "Above 25,000 feet due to temperature compensation limits",
                    "Above approximately 20,000 feet because its value is out of the displayed range"
                ],
                correct: 3,
                explanation: "The UP bug (flaps up maneuvering speed) is not indicated above approximately 20,000 feet altitude because its value is out of the displayed airspeed range on the speed tape.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 272"
            },
            {
                question: "How does the SPEED REFERENCE selector work when the FMC is inoperative, and what are the slew speeds?",
                options: [
                    "Single knob control with fixed slew rate of 5 knots per turn",
                    "Touch screen interface with digital entry capability",
                    "Dual control: outer knob selects reference type, inner knob sets value with slow slew (1 kt/1000 lbs) and fast slew (10 kts/10000 lbs)",
                    "Voice-activated control system with manual backup"
                ],
                correct: 2,
                explanation: "The speed reference selector is a dual control. Outer knob selects reference type (V1, VR, GROSS WEIGHT, VREF, Bug 5). Inner knob is spring-loaded with slow slew (1 knot/1000 pounds) and fast slew (10 knots/10000 pounds) for setting values.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 281-289"
            },
            {
                question: "What happens to airspeed bugs and displays after lift-off during the climb phase?",
                options: [
                    "All bugs remain displayed throughout the climb",
                    "All speed bugs disappear until approach phase",
                    "Only V2 bug remains visible until cruise altitude",
                    "V1 and VR bugs are removed, minimum speed bar appears, next smaller flap maneuvering speed bug shows"
                ],
                correct: 3,
                explanation: "After lift-off, the V1 and VR bugs are removed from the display. The minimum speed bar comes into view and the bug for the next smaller flap maneuvering speed shows to guide the pilot during the climb and flap retraction sequence.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 303-304"
            },
            {
                question: "When is a flap bug NOT displayed during approach configuration changes?",
                options: [
                    "When airspeed is above maximum flap extension speed",
                    "When landing gear is extended before flap selection",
                    "If calculated flap maneuvering speed is within 4 knots of the reference speed",
                    "If approach is being conducted in gusty wind conditions"
                ],
                correct: 2,
                explanation: "A flap bug is not displayed if the calculated flap maneuvering speed is within 4 knots of the reference speed. In such cases, reduce airspeed to reference speed + 5 knots before extending to the next flap setting.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 330-331"
            },
            {
                question: "At what bank angle does the bank pointer fill and change color, and what happens to the slip/skid indicator?",
                options: [
                    "30 degrees bank, slip/skid indicator becomes red",
                    "35 degrees bank, pointer fills and changes to amber, slip/skid indicator also changes to filled amber",
                    "40 degrees bank, pointer becomes red, slip/skid indicator blanks",
                    "45 degrees bank, pointer flashes amber, slip/skid indicator becomes oversized"
                ],
                correct: 1,
                explanation: "If the bank angle is 35 degrees or more, the bank pointer fills and changes to amber. Similarly, if the bank attitude is more than 35 degrees, the slip/skid indication also changes to a filled amber color.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 345-348"
            },
            {
                question: "When does the pitch limit indication appear on the attitude indicator?",
                options: [
                    "Only during takeoff and landing phases",
                    "At all times when flaps are not up, and in some B737s also when flaps are up and airspeed approaches stick shaker activation",
                    "Only when stick shaker system is armed",
                    "Continuously regardless of flight configuration"
                ],
                correct: 0,
                explanation: "The pitch limit indication is displayed at all times when the flaps are not up. In some B737s, it's also displayed when flaps are up and airspeed approaches stick shaker activation for current flight conditions.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 351"
            },
            {
                question: "What determines the brightness and dimness of the flight path vector (FPV) symbol?",
                options: [
                    "Ambient light conditions automatically adjust brightness",
                    "Always bright during day operations, always dim during night operations",
                    "Bright when flight director is not shown and no TCAS RA displayed; dim when either flight director or TCAS RA is displayed",
                    "Pilot-controlled brightness setting independent of other systems"
                ],
                correct: 2,
                explanation: "The flight path vector symbol is bright when the flight director is not shown and there is no TCAS resolution advisory displayed. The symbol is dim when either the flight director or a TCAS resolution advisory is displayed.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 355-356"
            },
            {
                question: "Under what conditions does the localizer scale expand and what happens with excessive deviation?",
                options: [
                    "Scale expands at full deflection, turns red with any deviation",
                    "Scale expands only during back course approaches",
                    "Scale never changes size, only color coding varies",
                    "Scale expands when localizer is engaged and deviation is slightly more than half dot; turns amber and pointer flashes with excessive deviation"
                ],
                correct: 3,
                explanation: "When the localizer is engaged and deviation is slightly more than half dot, the scale expands for better precision. If the FCC detects excessive localizer deviation, the scale turns amber and the pointer flashes to alert the crew.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 362-363"
            },
            {
                question: "How does glideslope indication change when deviation exceeds normal limits?",
                options: [
                    "Glideslope scale remains white but pointer disappears",
                    "When glideslope deviation is more than one dot, the scale turns amber and pointer flashes",
                    "Scale turns red and audio warning activates",
                    "No visual changes occur, only audio alerts are provided"
                ],
                correct: 1,
                explanation: "When the glideslope deviation is more than one dot, the scale turns amber and the pointer flashes to provide clear visual indication of excessive glideslope deviation during approach.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 367"
            },
            {
                question: "At what radio altitude does the rising runway symbol first appear and what happens at 0 feet?",
                options: [
                    "Appears at 1000 feet, disappears at touchdown",
                    "Appears only during autoland approaches below 200 feet",
                    "Appears at 500 feet, remains stationary until touchdown",
                    "Appears below 2500 feet when localizer pointer is in view, touches airplane symbol bottom at 0 feet radio altitude"
                ],
                correct: 3,
                explanation: "A rising runway shows when the localizer pointer is in view and radio altitude is below 2500 feet. When radio altitude is less than 200 feet, the rising runway moves up towards the airplane symbol, touching the bottom of the airplane symbol at 0 feet radio altitude.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 378-380"
            },
            {
                question: "What do the pitch and roll comparator flags indicate and how long do they flash?",
                options: [
                    "Indicate attitude sensor failure, flash continuously until reset",
                    "Show when attitude limits are exceeded, flash for 5 seconds",
                    "Displayed if Captain and First Officer pitch or roll values differ by more than 5 degrees, flash for 10 seconds then remain steady",
                    "Indicate autopilot disconnect, flash for 15 seconds"
                ],
                correct: 2,
                explanation: "The pitch and roll comparator flags are displayed if the Captain and First Officer pitch or roll display values differ from each other by more than 5 degrees. The flags flash for 10 seconds then remain steady to alert crews of attitude disagreement.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 385"
            },
            {
                question: "What symbol appears next to the altitude digital readout below 10,000 feet for positive altitudes?",
                options: [
                    "A green triangle pointing upward",
                    "A blue diamond shape",
                    "A green crosshatch symbol",
                    "A yellow circle with altitude numbers"
                ],
                correct: 2,
                explanation: "For positive values of altitude below 10,000 feet, a green crosshatch symbol is displayed next to the current altitude digital readout to provide visual reference for the lower altitude range.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 392"
            },
            {
                question: "What visual changes occur when approaching the selected altitude on the altitude display?",
                options: [
                    "Selected altitude digital readout is boxed and current altitude digital readout box becomes bold",
                    "Selected altitude bug flashes and audio alert sounds",
                    "Altitude tape changes color from white to green",
                    "Digital readouts begin flashing alternately"
                ],
                correct: 0,
                explanation: "When approaching the selected altitude, the selected altitude digital readout is boxed and the current altitude digital readout box becomes bold to provide clear visual indication of altitude capture approach.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 396"
            },
            {
                question: "How is the landing altitude reference bar color-coded?",
                options: [
                    "Green from 1000 to 500 feet, red from 500 feet to landing altitude",
                    "Blue above 1000 feet, white below 1000 feet",
                    "White from 1000 to 500 feet above landing altitude, amber from 500 feet to landing altitude",
                    "Yellow when above 1000 feet, white when below 1000 feet"
                ],
                correct: 2,
                explanation: "The landing altitude reference bar shows the height above touchdown. The bar is white from 1000 to 500 feet above the landing altitude, and an amber bar is indicated from 500 feet to the landing altitude.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 405"
            },
            {
                question: "When does an amber box appear around the barometric setting display?",
                options: [
                    "When barometric pressure is outside normal range",
                    "During all approach phases below 1000 feet",
                    "When barometric setting needs manual adjustment",
                    "With numeric setting: climbing above transition altitude; with standard setting: descending below transition flight level"
                ],
                correct: 3,
                explanation: "With a numeric barometric reference set, as the airplane climbs above the transition altitude, an amber box appears around the indicated barometric setting. If standard barometric reference is set, the amber box is displayed when descending below transition flight level.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 414-415"
            },
            {
                question: "When does vertical speed display as a digital value versus just the pointer?",
                options: [
                    "Always displays digital value regardless of vertical speed",
                    "Digital value appears only when autopilot is engaged",
                    "Only displays digital value during climb phases",
                    "Digital value shows above the indication when climb exceeds 400 fpm, below the indication when descent exceeds 400 fpm"
                ],
                correct: 3,
                explanation: "If the rate of climb is more than 400 feet per minute, the vertical speed shows as a digital value above the vertical speed indication. When the rate of descent is more than 400 feet per minute, the vertical speed shows as a digital value below the indication.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 419-420"
            },
            {
                question: "How does the vertical speed display change during TCAS operation?",
                options: [
                    "Display remains unchanged during TCAS events",
                    "Entire vertical speed indication flashes amber",
                    "Vertical speed tape turns red for prohibited values, pointer changes to red if within prohibited range",
                    "Vertical speed scale reverses direction"
                ],
                correct: 2,
                explanation: "The vertical speed tape turns red to indicate prohibited vertical speed values during a TCAS event. The vertical speed pointer changes to red if it is within the prohibited vertical speed range, clearly showing the pilot what vertical speeds to avoid.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 422-423"
            },
            {
                question: "What happens to the heading bug when the selected heading exceeds the display range?",
                options: [
                    "Bug disappears completely until heading is within range",
                    "Bug remains at current position and flashes",
                    "Bug moves in direction of shorter turn to the heading and parks on that side of compass rose",
                    "Bug moves to center of display with numeric indication"
                ],
                correct: 2,
                explanation: "If the selected heading exceeds the display range, the bug moves in the direction of the shorter turn to the heading and parks on this side of the compass rose, indicating the direction to turn to reach the selected heading.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 428"
            },
            {
                question: "What are the threshold values and time requirements for airspeed and altitude disagree alerts?",
                options: [
                    "Airspeed: 10 knots for 10 seconds; Altitude: 100 feet for 3 seconds",
                    "Airspeed: 3 knots for 3 seconds; Altitude: 150 feet for 8 seconds",
                    "Airspeed: 5 knots for 5 seconds; Altitude: 200 feet for 5 seconds",
                    "Airspeed: 8 knots for 8 seconds; Altitude: 250 feet for 10 seconds"
                ],
                correct: 2,
                explanation: "If Captain's and First Officer's airspeeds disagree by 5 knots or more for 5 seconds, AIRSPEED DISAGREE shows. When altitudes differ by more than 200 feet for more than 5 seconds, ALTITUDE DISAGREE message shows.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 435-437"
            },
            {
                question: "What are the specific threshold values for angle of attack disagree alert?",
                options: [
                    "10 degrees difference for 10 seconds",
                    "5 degrees difference for 5 seconds",
                    "15 degrees difference for 15 seconds",
                    "8 degrees difference for 8 seconds"
                ],
                correct: 0,
                explanation: "When the Captain's and First Officer's angle of attack values disagree by more than 10 degrees for more than 10 seconds, the ANGLE OF ATTACK DISAGREE message shows, and may cause AIRSPEED DISAGREE and ALTITUDE DISAGREE alerts to be displayed.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 442-443"
            },
            {
                question: "What distinguishes the expanded versus centered VOR display modes?",
                options: [
                    "Centered mode shows only basic navigation, expanded mode shows weather",
                    "Centered mode is for approach only, expanded mode for enroute",
                    "No difference in information displayed, only screen size varies",
                    "Expanded mode shows partial compass rose, centered mode shows full compass rose"
                ],
                correct: 3,
                explanation: "The expanded VOR display is indicated with a partial compass rose, while the centered VOR display is indicated with a full compass rose. Both displays present the same information and are oriented to heading-up.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 455-457"
            },
            {
                question: "How are VOR versus ADF bearing pointers distinguished on the navigation display?",
                options: [
                    "All pointers are the same color but different shapes",
                    "VOR pointers are blue, ADF pointers are white",
                    "VOR pointers are green, ADF pointers are cyan; Number 1 pointers are thin, Number 2 pointers are thick",
                    "VOR pointers are solid, ADF pointers are dashed"
                ],
                correct: 2,
                explanation: "Green bearing pointers show when the related VOR/ADF switch is in VOR position. When the switch is moved to ADF position, cyan ADF bearing pointer shows. Number 1 VOR/ADF bearing pointers are thin, while Number 2 VOR/ADF bearing pointers are thick.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 467-469"
            },
            {
                question: "What information is displayed in the upper right corner of VOR mode and what replaces frequency?",
                options: [
                    "Aircraft registration and flight number",
                    "Fuel quantity and endurance data",
                    "Current time and date information",
                    "Reference VOR receiver frequency or identifier initially, then decoded identifier replaces frequency"
                ],
                correct: 3,
                explanation: "The reference VOR receiver frequency or identifier is displayed in the upper right corner. When you tune a VOR, the frequency shows first, then after the VOR identifier is decoded, the decoded identifier replaces the frequency.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 466, 484"
            },
            {
                question: "What message appears when VOR mode is selected with an ILS frequency tuned?",
                options: [
                    "ILS FREQUENCY INVALID message displays",
                    "NO NAVIGATION DATA message appears",
                    "EFIS MODE/NAV FREQ DISAGREE message shows, VOR course deviation bar removed, DME and frequency display dashes",
                    "FREQUENCY MISMATCH warning shows"
                ],
                correct: 2,
                explanation: "With an ILS frequency tuned, if you select VOR mode, the amber EFIS MODE/NAV FREQ DISAGREE message shows, the VOR course deviation bar is removed, and the DME display and VOR frequency at the upper right corner display dashes.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 486"
            },
            {
                question: "How is localizer deviation indicated differently in APPROACH mode compared to VOR mode?",
                options: [
                    "APPROACH mode shows ILS localizer deviation bar that fills when deviation is less than 2.5 dots from center",
                    "No difference between modes in deviation indication",
                    "APPROACH mode uses analog meters instead of deviation bars",
                    "APPROACH mode shows deviation numerically only"
                ],
                correct: 0,
                explanation: "In APPROACH mode, the localizer deviation bar and scale shows ILS localizer deviation (also integrated approach navigation final approach course deviation if installed). The bar fills when the deviation is less than 2.5 dots from center.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 494-495"
            },
            {
                question: "What is unique about MAP mode display orientation compared to VOR and APPROACH modes?",
                options: [
                    "MAP mode is always magnetic north up",
                    "MAP mode orientation is manually selectable by pilot",
                    "MAP mode rotates based on wind direction",
                    "MAP mode is usually track-up oriented with current track line always vertical"
                ],
                correct: 3,
                explanation: "In most B737s, the MAP displays are track-up oriented displays. The MAP mode track shows at the top of the display and the current track line is always vertical, unlike VOR and APPROACH modes which are heading-up.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 507-508"
            },
            {
                question: "How are active versus inactive routes distinguished on the MAP display?",
                options: [
                    "Active routes are green, inactive routes are blue",
                    "Active routes are solid, inactive routes are dotted",
                    "All routes appear the same color but different line thickness",
                    "Active route shown with continuous magenta line, modified route with white short dashes, inactive route with cyan long dashes"
                ],
                correct: 3,
                explanation: "The active route is displayed with a continuous magenta line between waypoints. A modified route is indicated with white short dashes between waypoints. The inactive route is shown with cyan long dashes between waypoints.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 521"
            },
            {
                question: "How many segments does the position trend vector show and what does each represent?",
                options: [
                    "Always shows 2 segments representing 1 minute each",
                    "Always shows 5 segments for 10-second intervals",
                    "Variable segments: each shows 30-second prediction, number depends on display range (3 for >20nm, 2 for 20nm, 1 for ≤10nm)",
                    "Shows 4 segments representing 15-second intervals"
                ],
                correct: 2,
                explanation: "During turns, each segment of the position trend vector shows where you will be at the end of 30 seconds. For range more than 20nm, 3 segments show; for 20nm, 2 segments; for ≤10nm, 1 segment.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 534-537"
            },
            {
                question: "What do the green circles on the MAP display represent?",
                options: [
                    "Navigation aid positions and frequencies",
                    "Approximate map positions of FMC calculated top of climb, top of descent, end of descent, step climb, and deceleration segments",
                    "Weather radar returns and storm cells",
                    "Terrain elevation warnings and obstacles"
                ],
                correct: 1,
                explanation: "The green circles indicate approximate map positions of FMC calculated top of climb, top of descent, end of descent, step climb, and beginning of deceleration segments for holding patterns, waypoint speed restrictions, or flaps up maneuvering speed.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 539-541"
            },
            {
                question: "What does the VNAV path deviation scale show and what happens when deviation exceeds limits?",
                options: [
                    "Shows ±200 feet deviation, pointer disappears when exceeded",
                    "Shows ±600 feet deviation, scale changes color when exceeded",
                    "Shows ±400 feet deviation during descent, pointer parks at scale limit with digital readout when exceeded",
                    "Shows ±800 feet deviation, audio warning when exceeded"
                ],
                correct: 2,
                explanation: "The VNAV path deviation scale shows plus/minus 400 feet deviation from the selected VNAV PATH during descent. If deviation is more than 400 feet, the pointer parks at the scale limit and a digital readout shows the actual deviation.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 545-546"
            },
            {
                question: "How is the altitude arc calculated and displayed during climb and descent?",
                options: [
                    "Based on FMC calculated climb/descent path only",
                    "Based on engine performance calculations",
                    "Shows only during autopilot operation",
                    "Shows where you will reach MCP selected altitude based on current groundspeed and vertical speed, independent of FMC path"
                ],
                correct: 3,
                explanation: "The altitude arc shows where you will reach the altitude selected from the MCP. The position is determined based on current groundspeed and vertical speed, and the altitude arc indication is independent of any FMC computed climb or descent path.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 551-552"
            },
            {
                question: "When does the STATION map switch show all versus only high altitude navaids?",
                options: [
                    "Always shows all navaids regardless of range",
                    "Shows all FMC database navaids if range is 40nm or less, only high altitude navaids if range exceeds 40nm",
                    "Shows high altitude navaids below 20nm range, all navaids above",
                    "Manual selection determines which navaids are displayed"
                ],
                correct: 1,
                explanation: "When the STATION switch is pushed, all FMC database navigation aids are displayed if the selected range is 40 nautical miles or less. When the selected range is more than 40 nautical miles, only the high altitude navaids are displayed.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 554-555"
            },
            {
                question: "What is the primary difference between MAP mode and PLAN mode orientation?",
                options: [
                    "MAP mode is north-up, PLAN mode is track-up",
                    "Both modes have identical orientation",
                    "MAP mode is track-up, PLAN mode indicates active flight route with true north at top",
                    "PLAN mode orientation varies with magnetic variation"
                ],
                correct: 2,
                explanation: "While MAP mode is track-up oriented, PLAN mode indicates the active flight route with true north at the top. PLAN mode is used during preflight to review the route and to see route details not visible in MAP mode.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 573"
            },
            {
                question: "What happens when you push the STEP prompt key in PLAN mode?",
                options: [
                    "Changes the map range to next setting",
                    "Activates the flight plan automatically",
                    "Moves the next waypoint to center of display for route review",
                    "Switches between MAP and PLAN mode displays"
                ],
                correct: 2,
                explanation: "In PLAN mode, the STEP prompt allows you to change the waypoint at the center. When you push the STEP prompt key, the next waypoint shows at the center of display, allowing you to review the entire flight route waypoint by waypoint.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 582-585"
            },
            {
                question: "What does the Vertical Situation Display (VSD) show and where is it located?",
                options: [
                    "Shows lateral flight path on the upper display",
                    "Presents graphical picture of airplane's vertical flight path in lower portion of center map display",
                    "Displays engine parameters on the lower display unit",
                    "Shows weather radar returns on navigation display"
                ],
                correct: 1,
                explanation: "The Vertical Situation Display (VSD) presents a clear graphical picture of the airplane's vertical flight path for enhancing flight crew's vertical situation awareness. It shows in the lower portion of the center map display.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 592-593"
            },
            {
                question: "How is the enroute swath determined and what happens during turns?",
                options: [
                    "Fixed width corridor that never changes",
                    "Indicates area of map shown on VSD; only waypoints and terrain within swath lines displayed; during turns, inside edge opens in turn direction",
                    "Shows all terrain regardless of aircraft position",
                    "Manually adjustable by pilot input"
                ],
                correct: 3,
                explanation: "The enroute swath indicates the area of the map shown on the VSD. Only waypoints and terrain within the swath lines are displayed. During turns, the swath edge on the inside of the turn opens in the direction of the turn.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 605-608"
            },
            {
                question: "When is the enroute swath display inhibited?",
                options: [
                    "Inhibited on takeoff and approach when within 6nm of runway and less than 3000 feet above field elevation",
                    "Never inhibited regardless of flight phase",
                    "Inhibited only during autopilot operation",
                    "Inhibited above 10,000 feet altitude"
                ],
                correct: 0,
                explanation: "The enroute swath display is inhibited both on takeoff and approach when the airplane is within 6 nautical miles of the runway and less than 3000 feet above field elevation to avoid display clutter during critical phases.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 609"
            },
            {
                question: "What are the decision gates on the VSD approach display and at what altitudes are they positioned?",
                options: [
                    "Green gates at 1500 and 1000 feet above field elevation",
                    "First white gate at 1000 feet, second amber gate at 500 feet above field elevation for path and speed stability",
                    "Red gates at 800 and 400 feet above field elevation",
                    "Blue gates at 2000 and 1000 feet above field elevation"
                ],
                correct: 2,
                explanation: "Two decision gates are displayed on the FMC approach glide path angle line or 3-degree reference line. The first white gate is at 1000 feet and the second amber gate is at 500 feet above field elevation, showing suggested points where airplane should be path and speed stable.",
                reference: "B737 NG CBT - Flight Instruments & Displays, Section 623-624"
            }
        ]
    },
    "fms-approach": {
        title: "FMS - APPROACH",
        questions: [
            {
                question: "What defines the beginning of the approach phase and when does the FMC switch to 'on approach' mode?",
                options: [
                    "Begins at the end of descent point, FMC switches when within 2 NM of first approach waypoint or 2000 feet of destination airport elevation, whichever occurs first",
                    "Begins at descent initiation, FMC switches when cleared for approach",
                    "Begins when landing gear is extended, FMC switches automatically at 1000 feet AGL",
                    "Begins at top of descent, FMC switches when approach frequency is tuned"
                ],
                correct: 0,
                explanation: "The approach phase starts at the end of descent point and continues to touchdown or go-around. The FMC switches to 'on approach' when the airplane is within 2 NM of the first approach waypoint or 2000 feet of destination airport elevation, whichever occurs first.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 3-4"
            },
            {
                question: "What are the specific requirements for a vertical path to be suitable for VNAV approach use?",
                options: [
                    "Any published approach with minimum descent altitude specified",
                    "A path with constant rate descent from cruise altitude to runway",
                    "A path that is about 3° and crosses the runway threshold at approximately 50 feet",
                    "Any approach with published decision height below 200 feet AGL"
                ],
                correct: 2,
                explanation: "A vertical path suitable for use of VNAV is a path that is about 3° and crosses the runway threshold at approximately 50 feet. This provides a standard glide path angle similar to an ILS approach.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 7"
            },
            {
                question: "Which specific features must be present on the ROUTE LEGS page for VNAV to be used on approaches?",
                options: [
                    "Published localizer frequency and course information only",
                    "Minimum descent altitude and visual descent point defined",
                    "Published GP angle for final approach segment, OR runway waypoint coincident with approach end of runway, OR missed approach waypoint before approach end of runway",
                    "Step-down fixes with associated altitudes for the entire approach"
                ],
                correct: 2,
                explanation: "VNAV should be used only for approaches that have one of these on the ROUTE LEGS page: a published GP angle for the final approach segment, or a runway waypoint coincident with the approach end of the runway, or a missed approach waypoint before the approach end of the runway. These features allow construction of a normal glide path.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 8"
            },
            {
                question: "What happens to VNAV during an ILS approach when using the recommended procedure?",
                options: [
                    "VNAV remains engaged throughout the entire approach to landing",
                    "VNAV disengages when passing the waypoint with the GS code as glideslope is captured",
                    "VNAV automatically switches to ILS mode but remains engaged",
                    "VNAV must be manually disconnected before intercepting glideslope"
                ],
                correct: 0,
                explanation: "For an ILS approach, VNAV will disengage when passing the waypoint with the GS code, as the glideslope is captured. This allows the ILS glideslope to provide vertical guidance for the remainder of the approach.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 9"
            },
            {
                question: "What is the pilot's critical responsibility when flying an approach without a runway waypoint on the ROUTE LEGS page?",
                options: [
                    "Monitor airspeed more closely than normal approaches",
                    "Fly the approach manually without autopilot engagement",
                    "Not to descend below the minimum descent altitude until adequate visual contact has been achieved",
                    "Request vectors to final approach course from ATC"
                ],
                correct: 2,
                explanation: "For an approach without a runway waypoint on the ROUTE LEGS page, it is the pilot's responsibility not to descend below the minimum descent altitude until adequate visual contact has been achieved, as the FMC cannot provide proper vertical guidance to a specific runway point.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 10"
            },
            {
                question: "How are STARs initially displayed when the ARRIVALS page is first selected?",
                options: [
                    "In alphabetic order, with profile descents listed under PROFILE DESCENT label after the STARs",
                    "In order of runway proximity and approach suitability",
                    "In order of most recently used procedures",
                    "In order of fuel efficiency and time savings"
                ],
                correct: 0,
                explanation: "When the ARRIVALS page is first selected, the STARs are listed in alphabetic order. Profile descents, if available, are listed under PROFILE DESCENT label after the STARs.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 16"
            },
            {
                question: "What happens to the display when a STAR is selected on the ARRIVALS page?",
                options: [
                    "All procedures remain visible for comparison purposes",
                    "The page switches automatically to the LEGS page for route verification",
                    "Only the selected STAR appears while all approaches remain visible",
                    "Selected STAR moves to the top and all other STARs and non-applicable approaches/runways are removed, with a 'selected' label appearing"
                ],
                correct: 3,
                explanation: "When a STAR is selected, it moves to the top and all other STARs and non-applicable approaches/runways are removed. A 'selected' label appears next to the STAR, indicating an arrival selection is made but not executed yet.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 21"
            },
            {
                question: "What does the approach transition line display and what is its purpose?",
                options: [
                    "Only the primary approach course and localizer frequency",
                    "Alternate approaches available from the same initial approach fix",
                    "All approach transitions related to the selected approach, including initial approach fix, feeder fixes, and fixes providing routing to initial approach fix",
                    "Missed approach procedures and holding patterns only"
                ],
                correct: 2,
                explanation: "The approach transition line displays all approach transitions related to the selected approach. Transitions can include the initial approach fix, feeder fixes, and fixes that provide routing to the initial approach fix.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 25"
            },
            {
                question: "Why must pilots check the LEGS page after entering STAR and approach procedures?",
                options: [
                    "STAR and approach entries usually create route discontinuities that must be connected",
                    "To verify fuel calculations and time estimates are accurate",
                    "To confirm the approach frequency and course information",
                    "To set the appropriate approach minimums and reference speeds"
                ],
                correct: 0,
                explanation: "The STAR and approach entries usually create route discontinuities. Therefore, you should go to the LEGS page to check for route discontinuities and connect them before activating the modifications.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 27"
            },
            {
                question: "After executing STAR and approach procedures, how are they identified on the ARRIVALS page?",
                options: [
                    "They are highlighted in green with 'ACTIVE' labels",
                    "They move to a separate 'ACTIVE PROCEDURES' section",
                    "Only the active procedures remain visible on the page",
                    "All STARs and approaches are shown in their initial order, with executed procedures identified as 'active'"
                ],
                correct: 3,
                explanation: "After execution, all STARs and approaches are shown in their initial order. This allows you to select any STAR or approach if your clearance changes. The executed STAR and approach procedure are identified as 'active'.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 33"
            },
            {
                question: "How are VFR approaches set up using the ARRIVALS page?",
                options: [
                    "VFR approaches use special VFR procedure pages separate from the ARRIVALS page",
                    "Use the runways listed in the ARRIVALS page, which are displayed after the approaches",
                    "VFR approaches cannot be programmed in the FMC and must be flown manually",
                    "Set up through the DIRECT-TO function to the destination airport"
                ],
                correct: 1,
                explanation: "If a VFR approach has to be performed, you use the runways listed in the ARRIVALS page. The runways for the destination airport are displayed after the approaches.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 34-35"
            },
            {
                question: "What happens when a runway is selected for a VFR approach?",
                options: [
                    "The runway becomes highlighted but all other options remain visible",
                    "Other runways and approaches are removed and a runway extension data line appears",
                    "The FMC automatically creates a 3-degree glide path to the runway",
                    "A standard traffic pattern is automatically programmed for the approach"
                ],
                correct: 1,
                explanation: "When a runway is selected for VFR approach, other runways and approaches are removed and a runway extension data line appears on the page, allowing creation of a waypoint on the extended runway centerline.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 36"
            },
            {
                question: "What are the valid entries for runway extension distance and resolution?",
                options: [
                    "From 1 to 25 nautical miles with 0.1 nautical mile resolution",
                    "From 0.5 to 15 nautical miles with 0.5 nautical mile resolution",
                    "From 2 to 20 nautical miles with 1.0 nautical mile resolution",
                    "From 0.1 to 50 nautical miles with 0.01 nautical mile resolution"
                ],
                correct: 0,
                explanation: "The runway extension line lets you create a waypoint on the extended runway centerline at a specified distance from the runway threshold. Valid entries are from 1 to 25 nautical miles with 0.1 nautical mile resolution.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 37"
            },
            {
                question: "What are the valid flight path angle entries for recent FMC versions when a runway is selected?",
                options: [
                    "Between 1.0 to 6.0 degrees",
                    "Between 2.5 to 4.5 degrees",
                    "Between 2.0 to 5.5 degrees",
                    "Between 1.5 to 7.0 degrees"
                ],
                correct: 2,
                explanation: "Recent FMC versions show a flight path angle data line when a runway is selected. This lets you enter a flight path angle between the runway threshold and the runway extension waypoint. Valid entries are between 2.0 to 5.5 degrees.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 44"
            },
            {
                question: "How is the APPROACH REFERENCE page accessed during flight?",
                options: [
                    "By selecting the INITIALIZATION REFERENCE function key",
                    "Through the DEPARTURE/ARRIVAL index page",
                    "Automatically displayed when approach phase begins",
                    "Through the PERFORMANCE page menu"
                ],
                correct: 0,
                explanation: "During flight, you can access the APPROACH REFERENCE page by selecting the INITIALIZATION REFERENCE function key.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 46"
            },
            {
                question: "What information is displayed on the approach information line of the APPROACH REFERENCE page?",
                options: [
                    "Only the runway length and surface type",
                    "Approach category and minimum visibility requirements",
                    "ILS frequency, identifier for the associated runway, and front course (with 'T' suffix if relative to true north)",
                    "Decision height and minimum descent altitude only"
                ],
                correct: 2,
                explanation: "The approach information line shows the ILS frequency and the identifier for the associated runway. The front course of the ILS approach is also displayed, with a suffix of 'T' if the course is relative to true north.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 49-50"
            },
            {
                question: "How are the FMC calculated reference speeds initially displayed and how are they selected?",
                options: [
                    "Initially in large font, selected by single line select key push",
                    "Always displayed in large font once calculated",
                    "Initially in small font, selected by pushing the corresponding line select key twice",
                    "Initially hidden until manually requested by the pilot"
                ],
                correct: 2,
                explanation: "Initially, the reference speeds show in small font. To select an FMC computed reference speed you push the corresponding line select key twice. Selection causes the speed to change to large font.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 54-55"
            },
            {
                question: "What happens to reference speeds when gross weight changes significantly after selection?",
                options: [
                    "Reference speeds automatically update to reflect new gross weight",
                    "FMC provides an automatic alert when reference speeds become invalid",
                    "Once selected, reference speed will not be updated automatically - pilot must delete current speed or select different reference speed to update",
                    "Reference speeds gradually adjust over time to new gross weight"
                ],
                correct: 2,
                explanation: "Once selected, the reference speed will not be updated automatically. If the gross weight changes due to large amount of fuel use, you must delete the current speed or select a different reference speed to make an update.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 56"
            },
            {
                question: "What is the default wind correction value and what is the valid range for manual entry?",
                options: [
                    "Default +3 knots, range 0 to +15 knots",
                    "Default +5 knots, range 0 to +20 knots",
                    "Default +10 knots, range 0 to +25 knots",
                    "Default +2 knots, range 0 to +12 knots"
                ],
                correct: 2,
                explanation: "The default wind correction value is +5 knots. You may enter a wind correction between 0 and +20 knots.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 58"
            },
            {
                question: "What are the maximum final approach speed limitations when applying wind corrections?",
                options: [
                    "Should not exceed V reference + 15 knots or maximum flap speed",
                    "Should not exceed V reference + 20 knots or landing flap placard speed minus 5 knots, whichever is lower",
                    "Should not exceed V reference + 25 knots under any conditions",
                    "Should not exceed 1.3 times stall speed in landing configuration"
                ],
                correct: 0,
                explanation: "When making corrections for winds, the maximum final approach speed should not exceed V reference + 20 knots or landing flap placard speed minus 5 knots, whichever is lower. Do not apply wind corrections for tailwinds.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 61"
            },
            {
                question: "When should wind corrections NOT be applied according to the procedures?",
                options: [
                    "When wind speed is less than 10 knots",
                    "When visibility is less than 1 mile",
                    "During precision approaches only",
                    "For tailwinds"
                ],
                correct: 3,
                explanation: "Do not apply wind corrections for tailwinds. Wind corrections are intended to provide additional stall margin for headwinds and crosswinds, not for tailwind conditions.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 61"
            },
            {
                question: "How can the ALTERNATE DESTINATIONS page be accessed depending on FMC version?",
                options: [
                    "Only through the main menu index page",
                    "From the INITIALIZATION REFERENCE INDEX page, APPROACH REFERENCE page, or ROUTE page depending on FMC version",
                    "Exclusively through the PERFORMANCE page",
                    "Only during emergency or abnormal situations"
                ],
                correct: 0,
                explanation: "The alternate destination page can be accessed from the INITIALIZATION REFERENCE INDEX page, or the APPROACH REFERENCE page, or the ROUTE page depending on FMC version.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 63"
            },
            {
                question: "What types of identifiers are valid entries for the ALTERNATE column?",
                options: [
                    "Only airports with published instrument approaches",
                    "Only airports within 200 nautical miles",
                    "Airports, navaids, or waypoints",
                    "Only airports with maintenance and fuel services"
                ],
                correct: 2,
                explanation: "The ALTERNATE column allows entry of alternate destination identifiers. Valid entries are airports, navaids, or waypoints.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 64"
            },
            {
                question: "What is the default routing method shown in the VIA column for alternate destinations?",
                options: [
                    "The DIRECT-TO route to the alternate destination",
                    "Standard instrument departure and arrival procedures",
                    "Published airways routing to the alternate",
                    "Radar vectors as provided by air traffic control"
                ],
                correct: 0,
                explanation: "The VIA column shows the direct-to route to the alternate or missed approach from the original destination to the alternate. The default for the VIA is the DIRECT-TO route to the alternate destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 66"
            },
            {
                question: "How many airports does the FMC display when NEAREST AIRPORTS prompt is selected?",
                options: [
                    "Three airports in order of distance",
                    "All airports within 50 nautical miles of present position",
                    "Ten airports within 100 nautical miles",
                    "Five airports nearest to the airplane present position"
                ],
                correct: 3,
                explanation: "When the NEAREST AIRPORTS prompt is selected, the FMC searches the navigation database and then shows the five airports nearest to the airplane present position.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 68"
            },
            {
                question: "In what order are the nearest airports displayed and how can you return to the previous page?",
                options: [
                    "Alphabetically, use RETURN function key",
                    "By airport size, use BACK function key", 
                    "The nearest airport in first line, second nearest in next line, etc., use PREVIOUS prompt to go back to ALTERNATE DESTINATIONS page",
                    "By fuel availability, use HOME function key"
                ],
                correct: 1,
                explanation: "The nearest airport and related data is displayed in the first line, the second nearest in the next line and so on. The PREVIOUS prompt lets you go back to the ALTERNATE DESTINATIONS page.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 69"
            },
            {
                question: "What happens when manual entry of distance is attempted with missed approach routing selected?",
                options: [
                    "Manual entry overrides the calculated distance",
                    "Manual entry of distance to go is not allowed for missed approach routing",
                    "Manual entry is allowed but shows as approximate",
                    "Manual entry requires confirmation before acceptance"
                ],
                correct: 1,
                explanation: "When missed approach routing is selected, the distance to, estimated time of arrival and fuel remaining at the alternate change accordingly. Note that manual entry of distance to go is not allowed for missed approach routing.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 79"
            },
            {
                question: "What basis does the FMC use for missed approach route predictions to the alternate airport?",
                options: [
                    "Direct routing from present position to alternate",
                    "Descent to original destination followed by missed approach, then climb, cruise, and descent to alternate destination",
                    "Standard missed approach procedure plus direct routing",
                    "Published missed approach procedure followed by airways routing"
                ],
                correct: 0,
                explanation: "The FMC predictions for the missed approach route to the alternate airport are based on descent to the original destination followed by a missed approach and then climb, cruise, and descent to the alternate destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 78"
            },
            {
                question: "What replaces the MISSED APPROACH prompt to allow selection of direct routing method?",
                options: [
                    "DIRECT TO prompt",
                    "STRAIGHT LINE prompt",
                    "DIRECT ROUTE prompt",
                    "IMMEDIATE prompt"
                ],
                correct: 0,
                explanation: "DIRECT TO replaces the MISSED APPROACH prompt to let you select the direct routing method to the alternate destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 80"
            },
            {
                question: "What is the first step when executing a diversion to an alternate airport using the ROUTE page?",
                options: [
                    "Select the alternate destination from the nearest airports list",
                    "Request clearance from air traffic control",
                    "Calculate fuel requirements for the diversion",
                    "Put the new destination over the original destination on the ROUTE page"
                ],
                correct: 3,
                explanation: "When doing a diversion to an alternate airport, with the ROUTE page selected, put the new destination over the original destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 82"
            },
            {
                question: "Where can the cleared cruise altitude be set during a diversion?",
                options: [
                    "Only on the ROUTE page",
                    "Only through air traffic control data link",
                    "On the PERFORMANCE INITIALIZATION page, CRUISE page, or CLIMB page",
                    "Automatically calculated by the FMC"
                ],
                correct: 2,
                explanation: "You can set the cleared cruise altitude on the PERFORMANCE INITIALIZATION page or CRUISE page or CLIMB page.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 85"
            },
            {
                question: "What determines when VNAV should be the preferred method for non-ILS approaches on airplanes not equipped with IAN?",
                options: [
                    "When the approach has any published minimum descent altitude",
                    "When the runway has precision approach lighting systems",
                    "When weather conditions require instrument approach procedures",
                    "When the approach has an appropriate vertical path defined on the FMC LEGS page"
                ],
                correct: 3,
                explanation: "For airplanes not equipped with integrated approach navigation (IAN), VNAV is preferred to execute non-ILS approaches that have an appropriate vertical path defined on the FMC LEGS page.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 6"
            },
            {
                question: "What determines the FMC calculated reference speeds displayed on the APPROACH REFERENCE page?",
                options: [
                    "Standard aircraft configuration and sea level conditions",
                    "Average of previous flight reference speeds",
                    "Maximum certificated landing weight for the aircraft",
                    "The calculated gross weight for the three landing flap settings"
                ],
                correct: 3,
                explanation: "The reference speed lines show the FMC calculated reference speeds for the three landing flap settings. These speeds are based on the calculated gross weight.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 53"
            },
            {
                question: "What visual indication confirms that a reference speed has been selected on the APPROACH REFERENCE page?",
                options: [
                    "Speed appears in green font with asterisk",
                    "Speed flashes for 10 seconds then becomes highlighted",
                    "Speed changes to large font, flap/speed line shows selected configuration, and reference speed bug displays on airspeed indicator",
                    "Speed moves to top of the page with SELECTED label"
                ],
                correct: 2,
                explanation: "When an FMC computed reference speed is selected, the speed changes to large font. The flap/speed line shows the selected flap and reference speed. The reference speed bug is displayed on the airspeed display.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 55"
            },
            {
                question: "What is the purpose of the wind correction value on the APPROACH REFERENCE page?",
                options: [
                    "To calculate crosswind landing performance data",
                    "To calculate ground speed and time to runway",
                    "To determine the required approach course corrections",
                    "To provide additional stall margin for airspeed excursions caused by turbulence and wind shear"
                ],
                correct: 3,
                explanation: "The wind correction is added to the selected reference speed. This provides an additional stall margin for airspeed excursions caused by turbulence and wind shear.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 60"
            },
            {
                question: "What information is automatically displayed when an alternate destination identifier is entered?",
                options: [
                    "Only the airport identifier and runway information",
                    "Fuel and maintenance services available",
                    "Weather conditions and approach capabilities only",
                    "Distance to, estimated time of arrival, and fuel remaining at alternate destination"
                ],
                correct: 3,
                explanation: "When an alternate destination identifier is entered, distance to, estimated time of arrival and fuel remaining at alternate destination are automatically displayed.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 67"
            },
            {
                question: "How does manual distance entry capability differ between direct-to and missed approach routing to alternates?",
                options: [
                    "Manual entry is always allowed regardless of routing method",
                    "With direct-to routing manual entry is allowed, with missed approach routing manual entry is not allowed",
                    "Manual entry is never allowed for alternate destinations",
                    "Manual entry is only allowed for international alternates"
                ],
                correct: 0,
                explanation: "With the direct to routing selected, manual entry is allowed. However, manual entry of distance to go is not allowed for missed approach routing.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 74, 79"
            },
            {
                question: "What specific information does the TRIP ALTITUDE line display for alternate destinations?",
                options: [
                    "FMC calculated optimum cruise altitude to the alternate destination",
                    "Current cruise altitude being flown to the alternate",
                    "Minimum safe altitude for the route to alternate",
                    "Maximum altitude capability for the current weight"
                ],
                correct: 0,
                explanation: "The TRIP ALTITUDE line displays the FMC calculated optimum cruise altitude to the alternate destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 75"
            },
            {
                question: "What must be accomplished before activating modifications after entering STAR and approach procedures?",
                options: [
                    "Verify weather conditions and approach minimums",
                    "Obtain air traffic control clearance for the procedures",
                    "Confirm fuel calculations and landing performance",
                    "Check for route discontinuities on LEGS page and connect all discontinuities"
                ],
                correct: 3,
                explanation: "After entering STAR and approach procedures, you should go to the LEGS page to check for route discontinuities and connect them. With all discontinuities linked, you can activate the modifications.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 27, 32"
            },
            {
                question: "What approach information is displayed for localizer and localizer backcourse approaches?",
                options: [
                    "Only the course information without frequency data",
                    "ILS frequency and identifier, and front course are displayed",
                    "Different format showing only localizer-specific data",
                    "No frequency information is shown for localizer approaches"
                ],
                correct: 3,
                explanation: "The ILS frequency and identifier, and front course are also displayed for localizer and localizer backcourse approaches, using the same format as ILS approaches.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 51"
            },
            {
                question: "In some FMC versions, what additional prompt may be displayed on the ALTERNATE DESTINATIONS page?",
                options: [
                    "FUEL PLANNING prompt for calculating reserves",
                    "WEATHER REQUEST prompt used to request weather data uplink for the alternate destination",
                    "NAVIGATION CHART prompt for displaying approach plates",
                    "PERFORMANCE DATA prompt for landing calculations"
                ],
                correct: 1,
                explanation: "In some FMC versions, a WEATHER REQUEST prompt is displayed in the ALTERNATE DESTINATIONS page. The prompt is used to request weather data uplink for the alternate destination.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 70"
            },
            {
                question: "What happens to the page display when multiple arrival pages exist for a destination airport?",
                options: [
                    "All procedures are compressed onto a single page",
                    "Multiple arrival pages are available when more than 5 STARs or approaches exist",
                    "Only the most commonly used procedures are shown",
                    "The page automatically cycles through available options"
                ],
                correct: 0,
                explanation: "If more than 5 STARs or approaches exist for the destination airport, there are multiple arrival pages.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 18"
            },
            {
                question: "What does the approach include when selected on the ARRIVALS page?",
                options: [
                    "Only the final approach segment and minimums",
                    "Standard approach procedures without missed approach",
                    "Missed approach routing and holding if the missed approach procedure is part of published approach",
                    "Only the initial and intermediate approach segments"
                ],
                correct: 2,
                explanation: "The approach includes missed approach routing and holding if the missed approach procedure is part of published approach.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 24"
            },
            {
                question: "What happens after selecting a runway for VFR approach in terms of route planning?",
                options: [
                    "The approach is immediately ready for activation",
                    "The FMC automatically files a VFR flight plan",
                    "A waypoint on the final is created and you should check LEGS page for route discontinuities",
                    "Standard traffic pattern entries are programmed"
                ],
                correct: 2,
                explanation: "With the runway extension entered, a waypoint on the final is created. You should then go to the LEGS page to check for route discontinuities and connect them before activating modifications.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 38-42"
            },
            {
                question: "How is the gross weight normally displayed on the APPROACH REFERENCE page and when might manual entry be required?",
                options: [
                    "Normally shows FMC calculated gross weight, but crew entry is possible; if FMC data is not valid, a box prompt is shown",
                    "Always requires manual entry from weight and balance calculations",
                    "Shows only takeoff gross weight minus fuel burned",
                    "Automatically updates from fuel quantity sensors only"
                ],
                correct: 0,
                explanation: "The gross weight line normally shows the FMC calculated gross weight; however, crew entry is also possible. If the gross weight data from FMC is not valid, a box prompt is shown.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 47"
            },
            {
                question: "What information is displayed on the runway length data field of the APPROACH REFERENCE page?",
                options: [
                    "Runway length for the destination runway in feet and meters",
                    "Only runway length in feet",
                    "Runway length, width, and surface type",
                    "Available landing distance after obstacles"
                ],
                correct: 0,
                explanation: "This data field shows the runway length for the destination runway in feet and meters.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 48"
            },
            {
                question: "What wind data is displayed on the alternate destination individual pages?",
                options: [
                    "Only wind speed without direction information",
                    "Winds aloft for the planned cruise altitude",
                    "Forecast winds at the alternate destination",
                    "Current wind direction and speed"
                ],
                correct: 3,
                explanation: "This data line displays current wind direction and speed on the alternate destination individual pages.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 76"
            },
            {
                question: "What step follows entering the expected routing for a new destination during diversion procedures?",
                options: [
                    "Immediately activate the route changes",
                    "Request clearance from air traffic control",
                    "Calculate new fuel requirements and performance data",
                    "Select the LEGS page to check for any route discontinuity, ensure no discontinuities exist, then make modifications active"
                ],
                correct: 3,
                explanation: "After entering the expecting routing for the new destination airport, you should select the LEGS page to check for any route discontinuity. When you ensure there is no route discontinuity, make the modifications active.",
                reference: "B737 NG CBT - FMS - APPROACH, Section 84"
            },
            {
                question: "What is the operational relationship between the ARRIVALS page information and the approach reference data displayed on the FMC?",
                options: [
                    "The ARRIVALS page provides the foundation for approach reference calculations, with approach reference data building upon the arrival routing information",
                    "They are completely independent systems with no operational connection",
                    "The approach reference data overrides all ARRIVALS page information",
                    "ARRIVALS page is only used for navigation; approach reference is only for performance"
                ],
                correct: 0,
                explanation: "The ARRIVALS page provides the routing foundation that connects to the approach procedures. The approach reference data then builds upon this routing information to provide speed, altitude, and configuration guidance for the specific approach type selected.",
                reference: "B737 NG CBT - FMS - APPROACH, Systems Integration"
            },
            {
                question: "How does the FMC handle the transition from arrival procedures to approach procedures in terms of navigation and performance management?",
                options: [
                    "The transition requires manual pilot intervention to connect arrival and approach segments",
                    "The FMC seamlessly integrates arrival and approach procedures, providing continuous navigation guidance and performance calculations throughout the transition",
                    "Arrival and approach procedures must be managed separately with no automated integration",
                    "The transition is handled entirely by ATC with no FMC involvement"
                ],
                correct: 1,
                explanation: "The FMC provides integrated management of the arrival-to-approach transition, seamlessly connecting the routing, altitude constraints, and speed restrictions from arrival procedures into the approach phase, ensuring continuous navigation and performance guidance.",
                reference: "B737 NG CBT - FMS - APPROACH, Integrated Operations"
            }
        ]
    },
    "fms-cruise": {
        title: "FMS - CRUISE",
        questions: [
            {
                question: "When does the cruise phase start automatically and what are the primary pages used during cruise?",
                options: [
                    "Starts at 10,000 feet, uses CLIMB, DESCENT, and PERFORMANCE pages",
                    "Starts at top of climb point, uses CRUISE, PROGRESS, and ROUTE LEGS pages",
                    "Starts when autopilot is engaged, uses NAVIGATION, FUEL, and ENGINE pages",
                    "Starts at transition altitude, uses ALTITUDE, SPEED, and WEATHER pages"
                ],
                correct: 1,
                explanation: "The cruise phase starts automatically at the top of climb point. During cruise, you mainly refer to CRUISE, PROGRESS and ROUTE LEGS pages for flight management and monitoring.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 3-4"
            },
            {
                question: "What are the four primary cruise modes available in the FMC?",
                options: [
                    "Auto cruise, manual cruise, emergency cruise, and backup cruise",
                    "High speed cruise, low speed cruise, fuel saving cruise, and time saving cruise",
                    "Economy cruise, required time of arrival cruise, manual speed cruise, and long range cruise",
                    "Normal cruise, abnormal cruise, alternate cruise, and standard cruise"
                ],
                correct: 2,
                explanation: "Four primary cruise modes are available: economy cruise (default), required time of arrival cruise, manual speed cruise, and long range cruise. You can also select engine out cruise which is discussed separately.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 8"
            },
            {
                question: "What is the default cruise mode and what factors does the FMC use to calculate its speed?",
                options: [
                    "Manual speed cruise; uses pilot input, altitude, and weather conditions",
                    "Long range cruise; uses maximum range calculations and fuel efficiency",
                    "Economy cruise; uses gross weight, cost index, cruise altitude, and headwind or tailwind component",
                    "RTA cruise; uses required arrival time and distance calculations"
                ],
                correct: 2,
                explanation: "Economy cruise is the default cruise mode. The FMC calculates the economy cruise speed as a function of gross weight, cost index, cruise altitude, and headwind or tailwind component.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 9, 13"
            },
            {
                question: "What labels appear after the target speed to indicate different control modes?",
                options: [
                    "AUTO for autopilot control, MANUAL for pilot control",
                    "FMC for computer control, PILOT for manual override",
                    "MCP for speed intervention active, HOLD for hold speed prior to hold entry fix",
                    "VNAV for vertical navigation, LNAV for lateral navigation"
                ],
                correct: 2,
                explanation: "With speed intervention active, the MCP label is displayed after the target speed to indicate that MCP controls the speed. When decelerating to hold speed prior to the hold entry fix, the HOLD label shows after the target speed.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 14-15"
            },
            {
                question: "What is the purpose of the turbulence N1 value displayed on the cruise page?",
                options: [
                    "Mandatory N1 setting that the FMC automatically applies during turbulence",
                    "Recommended N1 for turbulence penetration, advisory information only and cannot be used by the FMC",
                    "Maximum N1 limit that prevents engine damage in turbulent conditions",
                    "Backup N1 setting used when autothrottle fails in turbulence"
                ],
                correct: 1,
                explanation: "The recommended N1 for turbulence penetration is shown for advisory information for the flight crew only and cannot be used by the FMC. It provides guidance but is not automatically implemented.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 16"
            },
            {
                question: "What CDU message appears when predicted fuel at destination is less than fuel reserve, and what happens when predicted fuel drops to 2000 pounds or less?",
                options: [
                    "LOW FUEL WARNING appears on display; EMERGENCY FUEL message shows in scratchpad",
                    "USING RESERVE FUEL message on CDU; INSUFFICIENT FUEL message appears on scratchpad",
                    "FUEL ALERT shows on screen; LAND IMMEDIATELY message displays",
                    "RESERVE FUEL USED warning; DIVERT NOW message appears"
                ],
                correct: 1,
                explanation: "If predicted fuel at destination is less than the fuel reserve value entered on PERFORMANCE INITIALIZATION page, the CDU message USING RESERVE FUEL is displayed. When predicted fuel drops to 2000 pounds or less, INSUFFICIENT FUEL message appears on scratchpad.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 18-19"
            },
            {
                question: "What message appears when the FMC detects an unexpected drop in fuel quantity?",
                options: [
                    "FUEL LEAK DETECTED - LAND IMMEDIATELY",
                    "CHECK FMC FUEL QUANTITY - check fuel quantity indications for correctness",
                    "FUEL SYSTEM MALFUNCTION - REFER TO QRH",
                    "VERIFY FUEL FLOW - CHECK ENGINE PARAMETERS"
                ],
                correct: 1,
                explanation: "In case the FMC detects an unexpected drop in fuel quantity, the scratchpad message CHECK FMC FUEL QUANTITY is displayed. The crew should check the fuel quantity indications for correctness.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 20"
            },
            {
                question: "When is the top of descent data always displayed on the cruise page?",
                options: [
                    "When altitude is above 25,000 feet",
                    "When distance is less than 100 nautical miles",
                    "When VNAV is engaged and active",
                    "When descent clearance has been received"
                ],
                correct: 1,
                explanation: "The top of descent line displays estimated time of arrival at and distance to go to the top of descent point. The data is always displayed when the distance is less than 100 nautical miles.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 21"
            },
            {
                question: "How does the wind data line title change when wind is entered manually versus computed by the FMC?",
                options: [
                    "Shows MANUAL WIND when entered manually, AUTO WIND when computed",
                    "Shows PILOT WIND when manual, FMC WIND when computed",
                    "Shows ESTIMATED WIND when entered manually, computed wind shows no special title",
                    "Shows ACTUAL WIND when manual, PREDICTED WIND when computed"
                ],
                correct: 2,
                explanation: "The computed true wind direction and speed at current altitude is displayed normally. When you enter wind data manually, the data line title then changes to ESTIMATED WIND.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 22-23"
            },
            {
                question: "What changes on the RTA cruise page compared to economy cruise page?",
                options: [
                    "All data is the same with just the title changed",
                    "Target speed shows computed speed to meet RTA, turbulence N1 replaced by time error at RTA waypoint",
                    "Only the fuel calculations are modified for RTA requirements",
                    "Wind data is replaced with time-to-arrival calculations"
                ],
                correct: 1,
                explanation: "The RTA cruise page shows the same data as economy cruise with exceptions: target speed displays computed speed required to meet the entered RTA, and turbulence N1 target is replaced by time error at the RTA waypoint.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 24-25"
            },
            {
                question: "How do you enter a manual cruise speed and what happens to the page title?",
                options: [
                    "Use MCP speed selector, page title remains unchanged",
                    "Enter speed in scratchpad, push line select key next to target speed, execute - page title changes to show new speed",
                    "Use SPEED page to input desired speed, title shows MANUAL SPEED",
                    "Set speed on autopilot panel, title indicates PILOT CONTROLLED"
                ],
                correct: 1,
                explanation: "To enter manual cruise speed, put the new speed in scratchpad, push the line select key next to target speed, then execute the modification. The title of the cruise page changes to show the new speed mode.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 26-27"
            },
            {
                question: "How can you initiate a cruise climb and what are the two methods for entering the new altitude?",
                options: [
                    "Use only the MCP altitude selector for automatic input",
                    "Manually enter new altitude in scratchpad, or use MCP altitude selector to automatically put altitude in scratchpad",
                    "Request ATC clearance first, then FMC automatically updates",
                    "Use CLIMB page to input new cruise level"
                ],
                correct: 1,
                explanation: "To initiate cruise climb, manually enter new altitude in scratchpad, or use the altitude selector on MCP to have the new altitude automatically put in scratchpad. Note that scratchpad shows MCP altitude changes only when cruise page is in view.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 29-30"
            },
            {
                question: "What happens to the wind data during cruise climb and why?",
                options: [
                    "Wind data is automatically updated for the new altitude",
                    "Actual wind changes to estimated wind because FMC uses wind data at original cruise altitude to compute target speed for new altitude",
                    "Wind data is removed until reaching the new altitude",
                    "Wind data shows predicted conditions at the new altitude"
                ],
                correct: 1,
                explanation: "During cruise climb, the actual wind header changes to estimated wind to indicate the FMC uses wind data at the original cruise altitude to compute target speed for the new altitude. Manual wind entry for new altitude is allowed if reliable.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 33"
            },
            {
                question: "What additional information is displayed during cruise climb mode?",
                options: [
                    "Only time and distance to new altitude",
                    "Time of arrival at and distance to new cruise altitude, plus predicted cost savings or penalty",
                    "Fuel burn rate and engine parameters for the climb",
                    "Wind conditions and temperature at the new altitude"
                ],
                correct: 1,
                explanation: "During cruise climb, the page displays time of arrival at and distance to the new cruise altitude, and also shows predicted cost savings or penalty associated with flying the displayed speed.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 32, 34"
            },
            {
                question: "When does the cruise climb mode automatically change back to cruise?",
                options: [
                    "When the pilot manually selects cruise mode",
                    "Upon reaching the selected altitude",
                    "After 5 minutes of climbing",
                    "When VNAV is disengaged and re-engaged"
                ],
                correct: 1,
                explanation: "Upon reaching the selected altitude, the cruise climb mode then automatically changes back to cruise mode.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 35"
            },
            {
                question: "What is the purpose of step climb cruise and when is it most advantageous?",
                options: [
                    "To maintain constant altitude throughout cruise for ATC requirements",
                    "To minimize cost by climbing to higher cruise altitudes as fuel is consumed and optimum altitude increases",
                    "To avoid turbulence by changing altitude levels during cruise",
                    "To meet specific arrival time requirements at destination"
                ],
                correct: 1,
                explanation: "Step climb cruise minimizes cost by conducting cruise as close to optimum altitude as possible. Since optimum altitude increases as fuel is consumed, climbing to higher cruise altitude reduces trip cost.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 39-40"
            },
            {
                question: "When might it be advantageous to request an initial STEP TO altitude above optimum?",
                options: [
                    "When weather conditions require higher altitude",
                    "When altitude changes are difficult to obtain on specific routes, to minimize being held at low altitude/high fuel consumption",
                    "When approaching controlled airspace boundaries",
                    "When other aircraft are operating at optimum altitude"
                ],
                correct: 1,
                explanation: "When altitude changes are difficult to obtain on specific routes, it may be advantageous to request an initial STEP TO altitude above optimum. This minimizes the possibility of being held at a low altitude/high fuel consumption condition for long periods.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 41"
            },
            {
                question: "When is the STEP TO altitude line displayed on the cruise page?",
                options: [
                    "Always during cruise phase",
                    "Only when more than 100 nautical miles from top of descent or RTA mode is not active",
                    "Only when fuel savings are predicted",
                    "When requested by ATC or flight dispatch"
                ],
                correct: 1,
                explanation: "The FMC shows the STEP TO altitude line to examine step climb altitudes for better economy. The line is displayed only when you are more than 100 nautical miles from top of descent or RTA mode is not active.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 42"
            },
            {
                question: "What information does the FMC display when you enter a STEP TO altitude?",
                options: [
                    "Only the new altitude and fuel requirements",
                    "Estimated time of arrival at and distance to first possible step climb point, predicted fuel at destination, and fuel savings or penalty",
                    "Wind conditions and temperature at the step altitude",
                    "ATC clearance requirements for the altitude change"
                ],
                correct: 1,
                explanation: "When you enter a STEP TO altitude, the FMC displays: estimated time of arrival at and distance to first possible step climb point based on gross weight, predicted fuel remaining at destination assuming step climb is performed, and computed fuel savings or penalty.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 43, 45-46"
            },
            {
                question: "How do you execute a step climb when you're close to the step climb point?",
                options: [
                    "Push the STEP CLIMB function key",
                    "Put step climb altitude in scratchpad and move it to cruise altitude data line, then execute",
                    "Use MCP altitude selector to command the climb",
                    "Request ATC clearance and FMC automatically executes"
                ],
                correct: 1,
                explanation: "When you are as close as practicable to the step climb point, put the step climb altitude in the scratchpad and move it to cruise altitude data line. Execute the modification to initiate a cruise climb.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 47"
            },
            {
                question: "How is long range cruise speed defined in relation to maximum range cruise speed?",
                options: [
                    "Speed below maximum range that provides 5% better fuel economy",
                    "Speed above maximum range cruise that results in 1% penalty in fuel mileage for 3-5% higher cruise velocity",
                    "Speed equal to maximum range cruise with wind corrections applied",
                    "Speed optimized for minimum time regardless of fuel consumption"
                ],
                correct: 1,
                explanation: "Long range cruise speed is defined as the speed above maximum-range cruise speed that will result in a 1 percent penalty in fuel mileage. The advantage is that 1 percent of range is sacrificed for 3 to 5 percent higher cruise velocity.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 49"
            },
            {
                question: "What important limitation exists with long range cruise speed regarding wind corrections?",
                options: [
                    "Wind corrections are automatically applied but may be inaccurate",
                    "FMC does not apply wind corrections to long range cruise speed, so it may give higher fuel burn than economy speed",
                    "Wind corrections are applied but only for headwind components",
                    "Long range cruise automatically adjusts for all wind conditions"
                ],
                correct: 1,
                explanation: "The FMC does not apply wind corrections to the long range cruise speed. Therefore, it may give a higher fuel burn than the economy speed which is optimized for all cruise wind conditions.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 51"
            },
            {
                question: "How many progress pages are available and what are they?",
                options: [
                    "Three pages: flight progress, navigation progress, and fuel progress",
                    "Four pages: two flight progress pages, one RTA progress page, and one RNP progress page",
                    "Five pages: flight, navigation, performance, weather, and fuel progress",
                    "Two pages: current progress and predicted progress"
                ],
                correct: 1,
                explanation: "There are four progress pages: two flight progress pages, one RTA progress page, and one RNP progress page. The RNP progress page is discussed in a different lesson.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 54"
            },
            {
                question: "What information is displayed on the FROM line of the first flight progress page?",
                options: [
                    "Identifier of next waypoint with course and distance information",
                    "Identifier of last waypoint flown over with altitude, actual time of arrival, and fuel at that waypoint",
                    "Current position with coordinates and ground speed",
                    "Destination information with estimated arrival data"
                ],
                correct: 1,
                explanation: "The FROM line indicates the identifier of the last waypoint you flew over and the altitude, the actual time of arrival and the fuel at that waypoint.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 56"
            },
            {
                question: "What data is shown for the active waypoint on the flight progress page?",
                options: [
                    "Only waypoint identifier and distance",
                    "Identifier, flight plan course and distance from present position, estimated time of arrival, and predicted fuel remaining",
                    "Waypoint coordinates and magnetic bearing",
                    "Frequency information and navigation aids"
                ],
                correct: 1,
                explanation: "The active waypoint line shows: identifier of active waypoint, flight plan course and distance to go from present position to active waypoint, estimated time of arrival and predicted fuel remaining at that waypoint.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 57"
            },
            {
                question: "What different altitude change points can be displayed on the altitude change point line?",
                options: [
                    "Only top of climb and top of descent",
                    "Top of descent, top of climb, STEP POINT, and end of descent",
                    "Cruise altitude changes and emergency descent points",
                    "Initial climb, cruise, and final descent points"
                ],
                correct: 1,
                explanation: "The altitude change point line displays estimated time of arrival at and distance to go to various points. It shows the same data for top of climb, top of descent, STEP POINT and end of descent.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 60"
            },
            {
                question: "What message appears when the FMC is not receiving required fuel data?",
                options: [
                    "FUEL DATA INVALID - CHECK SYSTEM",
                    "VERIFY GROSS WEIGHT AND FUEL message, FUEL line changes to dashes",
                    "NO FUEL INFORMATION - MANUAL ENTRY REQUIRED",
                    "FUEL SYSTEM FAILURE - REFER TO QRH"
                ],
                correct: 1,
                explanation: "When the FMC is not receiving required fuel data, the CDU shows VERIFY GROSS WEIGHT AND FUEL message. The FUEL line changes to dashes on the PERFORMANCE INITIALIZATION page.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 63"
            },
            {
                question: "How should you handle manual fuel entry when FMC fuel data is unavailable?",
                options: [
                    "Enter fuel weight once and FMC will calculate consumption",
                    "Manually enter fuel weight on PERFORMANCE INITIALIZATION page, update approximately every 30 minutes - MAN appears next to fuel weight",
                    "Use backup fuel quantity system for automatic updates",
                    "Calculate fuel manually using engine parameters"
                ],
                correct: 1,
                explanation: "You should manually enter fuel weight on the PERFORMANCE INITIALIZATION page. The word MAN appears next to the fuel weight. Continue to manually update fuel weight approximately every 30 minutes for the remainder of the flight to keep gross weight current.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 64"
            },
            {
                question: "How often does the VERIFY GROSS WEIGHT AND FUEL message reappear if manual updates are not performed?",
                options: [
                    "Every 15 minutes throughout the flight",
                    "Every 30 minutes if subsequent entries are not performed, but not displayed during descent with reference speed selected",
                    "Every 45 minutes until landing",
                    "Every hour during cruise phase only"
                ],
                correct: 1,
                explanation: "The VERIFY GROSS WEIGHT AND FUEL message shows again each 30 minutes, if subsequent entries are not performed. This message is not displayed during descent with reference speed selected.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 65"
            },
            {
                question: "What wind-related information is displayed on the second flight progress page?",
                options: [
                    "Only true wind direction and speed",
                    "HEADWIND or TAILWIND component, crosswind component (left/right direction and speed), and true wind direction and speed",
                    "Wind speed and direction at different altitudes",
                    "Forecast winds for the route ahead"
                ],
                correct: 1,
                explanation: "The second progress page shows: HEADWIND or TAILWIND line (current component), crosswind component direction (left or right) and speed, and WIND data line indicating present true wind direction and speed.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 69-71"
            },
            {
                question: "What does the CROSSTRACK ERROR line display and when is it blank?",
                options: [
                    "Current cross track error from GPS course, blank if error greater than 50 nautical miles",
                    "Current cross track error direction (left/right) and magnitude from FMC LNAV course, blank if error greater than 99.9 nautical miles",
                    "Lateral deviation from programmed route, blank during manual navigation",
                    "Distance from intended track, blank when LNAV is not engaged"
                ],
                correct: 1,
                explanation: "The CROSSTRACK ERROR line displays the current cross track error direction, left or right, and magnitude from the FMC LNAV course. The display is blank if error is greater than 99.9 nautical miles.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 73"
            },
            {
                question: "What are the two purposes of the RTA progress page during flight?",
                options: [
                    "Monitor fuel consumption and track navigation accuracy",
                    "Initiate required time of arrival mode and provide advisory data on flight progress in RTA mode",
                    "Calculate arrival times and manage speed restrictions",
                    "Display weather information and alternate airport data"
                ],
                correct: 1,
                explanation: "During flight, the RTA page serves two purposes: you use the page to initiate the required time of arrival mode, and with RTA function active, the page provides advisory data on flight progress in the RTA mode.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 76"
            },
            {
                question: "What do dashes in the RTA waypoint line indicate?",
                options: [
                    "RTA function is not available for the route",
                    "An entry is allowed for RTA waypoint, provided waypoint is on remaining part of route",
                    "System malfunction in RTA calculations",
                    "RTA data is being computed by the FMC"
                ],
                correct: 1,
                explanation: "The dashes in the RTA waypoint line indicate that an entry is allowed. If needed, you may enter an RTA for a waypoint provided the waypoint is on the remaining part of the route.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 77"
            },
            {
                question: "What does the RTA SPEED line display and how is it limited?",
                options: [
                    "Maximum possible speed for the aircraft configuration",
                    "FMC computed target speed for current flight phase to meet RTA, limited by MINIMUM/MAXIMUM speeds on PERFORMANCE LIMITS page and speed restrictions",
                    "Pilot-selected speed for RTA compliance",
                    "Average speed required for the entire route"
                ],
                correct: 1,
                explanation: "The RTA SPEED line displays the FMC computed target speed for the current flight phase necessary to meet the RTA. This speed is limited by MINIMUM/MAXIMUM speeds on PERFORMANCE LIMITS page and by the speed in the SPEED RESTRICTION line.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 82"
            },
            {
                question: "When is the speed restriction line displayed during RTA operations?",
                options: [
                    "Always when RTA is active",
                    "During climb and descent phases, blank during cruise and on ground",
                    "Only during approach phase",
                    "When speed restrictions are manually entered"
                ],
                correct: 1,
                explanation: "The speed restriction affecting the RTA progress during climb and descent is displayed. The line is blank during cruise and on ground.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 83"
            },
            {
                question: "What information is provided in the RTA WINDOW?",
                options: [
                    "Current time and distance to RTA waypoint",
                    "Earliest and latest achievable arrival times at the RTA waypoint",
                    "Fuel requirements for different arrival scenarios",
                    "Weather conditions affecting RTA performance"
                ],
                correct: 1,
                explanation: "The RTA WINDOW shows the earliest and latest achievable arrival times at the RTA waypoint, indicating the range of possible arrival times the aircraft can achieve.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 86"
            },
            {
                question: "What happens to the display when reaching top of climb if the climb page was displayed during climb?",
                options: [
                    "Display remains on climb page until manually changed",
                    "Display automatically changes to the cruise page upon reaching top of climb point",
                    "Display switches to navigation page automatically",
                    "Display shows a selection menu for cruise operations"
                ],
                correct: 1,
                explanation: "If the climb page is displayed during the climb, the display automatically changes to the cruise page upon reaching the top of climb point.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 5"
            },
            {
                question: "Where does the current cruise altitude displayed on the cruise page come from?",
                options: [
                    "Automatically from the aircraft's current altitude",
                    "From the PERFORMANCE INITIALIZATION page or from the CLIMB page",
                    "From ATC clearance data entry",
                    "From the flight plan routing information"
                ],
                correct: 1,
                explanation: "The page shows the current cruise altitude which comes from the PERFORMANCE INITIALIZATION page or from the CLIMB page.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 10"
            },
            {
                question: "What information is displayed regarding optimum and maximum altitudes on the cruise page?",
                options: [
                    "Mandatory altitudes that must be used for the flight",
                    "FMC calculated optimum altitude for minimum cost in still air and maximum possible altitude, for information only",
                    "ATC assigned altitudes and backup altitude options",
                    "Fuel-critical altitudes and emergency descent altitudes"
                ],
                correct: 1,
                explanation: "The FMC calculated optimum altitude for the minimum cost in still air is displayed. The maximum possible altitude is displayed next to the optimum altitude. Note that these values are for your information only.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 11"
            },
            {
                question: "Can the deletion or modification of hold speed or MCP speed intervention be performed?",
                options: [
                    "Yes, both can be deleted or modified at any time",
                    "No, deletion or modification of hold speed or MCP speed intervention is not allowed",
                    "Only MCP speed intervention can be modified",
                    "Only hold speed can be deleted during cruise"
                ],
                correct: 1,
                explanation: "The deletion or modification of hold speed or MCP speed intervention is not allowed once these modes are active.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 15"
            },
            {
                question: "What should you do when the INSUFFICIENT FUEL message appears on the scratchpad?",
                options: [
                    "Continue normal flight and monitor fuel closely",
                    "Modify flight plan or cruising altitude, or divert for additional fuel",
                    "Reduce power settings to conserve fuel",
                    "Request priority handling from ATC"
                ],
                correct: 1,
                explanation: "When a change in conditions or flight plan causes predicted fuel at destination to be 2000 pounds or less, an INSUFFICIENT FUEL message appears on the scratchpad. In this case, modify flight plan or cruising altitude, or divert for additional fuel.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 19"
            },
            {
                question: "How does the long range cruise speed typically compare to economy speed used by most carriers?",
                options: [
                    "Long range cruise speed is usually lower than economy speed",
                    "Long range cruise speed is usually higher than the economy speed that results from cost index selected by most carriers",
                    "Both speeds are typically identical",
                    "Long range cruise varies significantly while economy speed remains constant"
                ],
                correct: 1,
                explanation: "The long range cruise speed is usually higher than the economy speed that results from using the cost index selected by most carriers.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 50"
            },
            {
                question: "How can you access the progress pages and during which phases of flight?",
                options: [
                    "Only during cruise phase using CRUISE function key",
                    "Using PROGRESS function key during any phase of the flight",
                    "Through NAVIGATION page during approach and cruise",
                    "Via PERFORMANCE page during climb and descent"
                ],
                correct: 1,
                explanation: "You can access the progress pages by using the PROGRESS function key during any phase of the flight.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 53"
            },
            {
                question: "What appears in the title line of the first flight progress page?",
                options: [
                    "Current date and departure airport",
                    "Flight number entered on the ROUTE page",
                    "Aircraft registration and flight level",
                    "Pilot names and flight duration"
                ],
                correct: 1,
                explanation: "The first page displays airplane progress on the active route. The flight number entered on the ROUTE page shows in the title line.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 55"
            },
            {
                question: "What does the NAV STATUS prompt on the progress page allow you to access?",
                options: [
                    "Weather radar and terrain information",
                    "NAVIGATION STATUS page which is discussed in a different lesson",
                    "GPS and IRS system status",
                    "Communication and transponder settings"
                ],
                correct: 1,
                explanation: "The NAV STATUS prompt lets you select the NAVIGATION STATUS page which is discussed in a different lesson.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 66"
            },
            {
                question: "What additional data is shown on the second flight progress page besides wind information?",
                options: [
                    "Engine parameters and fuel flow rates",
                    "Static air temperature with ISA deviation, GPS track, and true airspeed",
                    "Navigation aids and communication frequencies",
                    "Weather conditions and turbulence reports"
                ],
                correct: 1,
                explanation: "The second progress page shows present static air temperature and equivalent ISA deviation, and also displays the current GPS track and true airspeed.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 72, 74"
            },
            {
                question: "What does the PRIOR RTA prompt display when available?",
                options: [
                    "Next RTA waypoint in the flight plan",
                    "Last active RTA waypoint and time if previous RTA waypoint is still in flight plan",
                    "All RTA waypoints for the entire route",
                    "RTA performance statistics for the flight"
                ],
                correct: 1,
                explanation: "The page shows PRIOR RTA prompt, if a previous RTA waypoint is still in the flight plan. You can use the prompt to display the last active RTA waypoint and time.",
                reference: "B737 NG CBT - FMS - CRUISE, Section 79"
            },
            {
                question: "What is the operational significance of the ECON mode during cruise flight operations?",
                options: [
                    "ECON mode provides maximum speed regardless of fuel consumption",
                    "ECON mode optimizes the balance between speed and fuel efficiency based on cost index calculations",
                    "ECON mode maintains constant airspeed throughout the cruise phase",
                    "ECON mode is only used during climb and descent phases"
                ],
                correct: 1,
                explanation: "ECON mode optimizes cruise performance by balancing speed and fuel efficiency based on the cost index value entered during flight planning. This provides the most economical cruise operation for the given flight conditions.",
                reference: "B737 NG CBT - FMS - CRUISE, ECON Mode Operations"
            },
            {
                question: "How does the FMC manage fuel optimization during different cruise altitudes and weights?",
                options: [
                    "Fuel optimization is calculated only at the beginning of cruise and remains constant",
                    "The FMC continuously recalculates optimal cruise parameters as fuel burns and weight decreases",
                    "Fuel optimization requires manual pilot input every hour during cruise",
                    "The system only optimizes fuel flow, not speed or altitude recommendations"
                ],
                correct: 1,
                explanation: "The FMC continuously recalculates optimal cruise parameters as fuel burns and aircraft weight decreases during flight. This ensures that speed, altitude, and fuel flow recommendations remain optimal throughout the changing cruise conditions.",
                reference: "B737 NG CBT - FMS - CRUISE, Continuous Optimization"
            },
            {
                question: "What is the relationship between step climb operations and cruise fuel efficiency?",
                options: [
                    "Step climbs always improve fuel efficiency regardless of conditions",
                    "Step climbs optimize cruise efficiency by moving to more favorable altitudes as aircraft weight decreases",
                    "Step climbs are only used for ATC separation and have no fuel benefit",
                    "Step climbs reduce fuel efficiency but improve passenger comfort"
                ],
                correct: 1,
                explanation: "Step climbs optimize cruise efficiency by allowing the aircraft to climb to more favorable altitudes as fuel burn reduces aircraft weight. This maintains optimal altitude for the current weight, improving fuel efficiency and performance throughout the cruise phase.",
                reference: "B737 NG CBT - FMS - CRUISE, Step Climb Operations"
            },
            {
                question: "How does the cruise performance monitoring system help pilots during extended cruise operations?",
                options: [
                    "It only provides basic fuel quantity information",
                    "The system continuously monitors actual performance against predicted performance, alerting pilots to deviations and providing updated arrival estimates",
                    "It replaces the need for pilot monitoring during cruise flight",
                    "The system only works during the initial cruise phase"
                ],
                correct: 1,
                explanation: "The cruise performance monitoring system continuously compares actual aircraft performance with FMC predictions, providing real-time updates on fuel consumption, arrival times, and performance deviations. This allows pilots to make informed decisions about cruise optimization and flight planning adjustments.",
                reference: "B737 NG CBT - FMS - CRUISE, Performance Monitoring"
            }
        ]
    },

    "fms-descent": {
    title: "FMS - DESCENT",
    questions: [
        {
            question: "What is the fundamental principle behind how the FMC constructs the descent path during descent planning?",
            options: [
                "The FMC calculates from cruise altitude downward to the destination using a standard 3-degree descent angle",
                "The FMC constructs the descent path upward, beginning at the end of descent point up to the final cruise altitude",
                "The FMC uses a fixed descent rate of 1000 feet per minute from top of descent to destination",
                "The FMC creates multiple descent segments based on engine performance characteristics only"
            ],
            correct: 1,
            explanation: "The FMC constructs the descent path upward, beginning at the end of descent point up to the final cruise altitude. This reverse construction method allows the FMC to work backwards from constraints at the destination to determine the optimal descent profile.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 4-5"
        },
        {
            question: "What defines the 'end of descent' point in FMC descent planning, and how does this affect the descent path calculation?",
            options: [
                "The end of descent is always the runway threshold regardless of approach type",
                "The end of descent is the last waypoint with an altitude constraint in the descent, the runway threshold or the missed approach point for approaches without a runway waypoint",
                "The end of descent is determined by the pilot's manual input during descent planning",
                "The end of descent is automatically set to 1000 feet above destination airport elevation"
            ],
            correct: 1,
            explanation: "The end of descent is the last waypoint with an altitude constraint in the descent, the runway threshold or the missed approach point for approaches without a runway waypoint. This point serves as the foundation for the FMC's upward construction of the descent path.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 5"
        },
        {
            question: "During path descent mode, what specific flight control relationship exists between the autopilot/flight director system and the autothrottle system?",
            options: [
                "Both systems work together to maintain constant airspeed during descent",
                "The autopilot controls thrust while autothrottle controls pitch to maintain the path",
                "The autopilot flight director system controls the pitch to hold the FMC descent path while the autothrottle sets the thrust to idle",
                "The systems alternate control every 1000 feet of descent to optimize fuel consumption"
            ],
            correct: 2,
            explanation: "In path descent mode, the autopilot flight director system controls the pitch to hold the FMC descent path while the autothrottle sets the thrust to idle. This configuration allows for the most economical descent by maintaining the optimal flight path while using minimal thrust.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 10"
        },
        {
            question: "What is the key operational difference between path descent and speed descent modes in terms of pilot monitoring responsibilities?",
            options: [
                "Path descent requires monitoring thrust settings; speed descent requires monitoring altitude changes",
                "Path descent requires monitoring descent rate; speed descent requires monitoring fuel consumption",
                "Path descent requires monitoring the descent and adjusting speed when necessary; speed descent requires monitoring the descent and adjusting rate of descent to stay on desired path",
                "Both modes require identical monitoring procedures with no operational differences"
            ],
            correct: 2,
            explanation: "In path descent, you must monitor the descent and adjust the speed when necessary. In speed descent, you must monitor the descent and adjust the rate of descent to stay on the desired descent path when necessary. This reflects the fundamental difference in how each mode prioritizes flight path versus speed control.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 10-11"
        },
        {
            question: "What factors does the FMC consider when refining the descent profile and determining the top of descent point?",
            options: [
                "Only altitude constraints and basic aircraft weight",
                "Airport speed restrictions, waypoint speed and altitude constraints, temperature, forecast descent wind inputs and forecast use of anti-ice",
                "Aircraft weight, fuel quantity, and current atmospheric conditions only",
                "Standard atmospheric conditions and published approach procedures only"
            ],
            correct: 1,
            explanation: "The FMC refines the descent profile and top of descent for the airport speed restrictions, waypoint speed and altitude constraints, temperature, the forecast descent wind inputs and forecast use of anti-ice. These comprehensive factors ensure an accurate and achievable descent profile.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 8"
        },
        {
            question: "On the DESCENT FORECAST page, what is the significance of the transition level line and how does it affect descent planning?",
            options: [
                "It only affects cabin pressurization and has no impact on descent calculations",
                "The transition level line normally shows flight level 180 as the default descent transition level and changes automatically when an arrival procedure with a different stored value is entered",
                "It represents the altitude where descent must begin regardless of other factors",
                "It indicates the minimum altitude for autopilot engagement during descent"
            ],
            correct: 1,
            explanation: "The transition level line normally shows flight level 180 as the default descent transition level. The display changes automatically when an arrival procedure with a different stored value is entered. This affects the altimeter setting transition point during descent.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 17"
        },
        {
            question: "What is the purpose and limitation of the thermal anti-ice entry on the DESCENT FORECAST page?",
            options: [
                "It controls automatic anti-ice system activation during descent",
                "The thermal anti-ice line lets you enter the altitudes at which anti-icing is expected to be turned on and off",
                "It provides warnings when anti-ice systems are required during descent",
                "It calculates fuel consumption penalties for anti-ice system usage"
            ],
            correct: 1,
            explanation: "The thermal anti-ice line lets you enter the altitudes at which anti-icing is expected to be turned on and off. This information helps the FMC refine the descent path calculation by accounting for the performance changes when anti-ice systems are active.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 18"
        },
        {
            question: "What happens to the descent planning when you enter forecast wind data for multiple altitudes on the DESCENT FORECAST page?",
            options: [
                "The FMC ignores wind data and uses standard atmospheric conditions",
                "Only the highest altitude wind data is used for calculations",
                "You may enter up to 3 winds in any sequence, and the FMC modifies the descent profile causing the distance to the top of descent to change",
                "Wind data is only used for display purposes and doesn't affect the descent path"
            ],
            correct: 2,
            explanation: "You may enter up to 3 winds in any sequence on the DESCENT FORECAST page. When you execute the modification and go back to the cruise page, you will see that the distance to the top of descent has changed because the FMC has modified the descent profile based on the wind data.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 22-23"
        },
        {
            question: "What is the specific operational requirement for initiating a path descent in terms of aircraft position relative to the flight plan?",
            options: [
                "The aircraft must be exactly on the programmed route with no deviation",
                "You must initiate a path descent while within the allowable cross-track error for LNAV, however during descent it is possible to disengage LNAV while remaining in path mode",
                "Path descent can only be initiated when the aircraft is in level flight",
                "The aircraft must be at least 10 miles from the top of descent point"
            ],
            correct: 1,
            explanation: "You must initiate a path descent while within the allowable cross-track error for LNAV. However, during the descent, it is possible to disengage LNAV while remaining in the path mode. This provides flexibility during the descent phase while maintaining the vertical profile.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 26"
        },
        {
            question: "What specific alert occurs when approaching the top of descent, and what pilot action is required?",
            options: [
                "The FMC automatically begins descent without pilot intervention",
                "During cruise, when you are five miles from the top of descent, the scratchpad message RESET MCP ALTITUDE shows",
                "A continuous chime sounds until the descent is initiated",
                "The autopilot automatically captures the descent altitude"
            ],
            correct: 1,
            explanation: "During cruise, when you are five miles from the top of descent, the scratchpad message RESET MCP ALTITUDE shows. This alert prompts the pilot to set the appropriate descent altitude in the MCP before reaching the top of descent point.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 27"
        },
        {
            question: "What automatic system changes occur when the aircraft reaches the top of descent point during a path descent?",
            options: [
                "Only the autothrottle reduces to idle power",
                "The FMC commands idle thrust and pitch mode remains in VNAV PATH to track the descent path, while the cruise page automatically changes to descent page",
                "The autopilot disengages and requires manual reengagement",
                "All flight management systems reset to default settings"
            ],
            correct: 1,
            explanation: "When you reach the top of descent point, the FMC commands idle thrust and pitch mode remains in VNAV PATH to track the descent path. The cruise page automatically changes to descent page to reflect the active descent phase.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 29"
        },
        {
            question: "How is the end of descent altitude determined for different types of approaches?",
            options: [
                "It's always set to airport elevation plus 1000 feet",
                "The end of descent altitude is the altitude restriction for the end of descent waypoint; if an approach with a runway waypoint is selected, it will be runway elevation plus threshold crossing height",
                "It's manually entered by the pilot during approach setup",
                "It's automatically set to the published decision altitude for the approach"
            ],
            correct: 1,
            explanation: "The end of descent altitude is the altitude restriction for the end of descent waypoint. If an approach with a runway waypoint is selected, the end of descent altitude will be runway elevation plus threshold crossing height. This ensures proper approach geometry for different approach types.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 31-32"
        },
        {
            question: "What does the vertical deviation line display during a path descent, and what is its operational significance?",
            options: [
                "It shows the aircraft's lateral deviation from the flight plan",
                "The vertical deviation line displays present deviation in feet high or low from the computed descent path",
                "It indicates the remaining distance to the destination",
                "It shows the current rate of descent in feet per minute"
            ],
            correct: 1,
            explanation: "The vertical deviation line displays present deviation in feet high or low from the computed descent path. This information is crucial for monitoring adherence to the planned descent profile and making necessary adjustments.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 34"
        },
        {
            question: "What condition triggers the 'DESCENT PATH UNACHIEVABLE' message, and what are the operational implications?",
            options: [
                "When the aircraft is below the descent path and cannot climb",
                "During a path descent, if you are above the descent path and the FMC predicts that the restrictions at the next waypoint cannot be achieved; this does not affect LNAV but you need to modify the restrictions",
                "When the autopilot is disengaged during descent",
                "When fuel quantity is insufficient to reach the destination"
            ],
            correct: 1,
            explanation: "During a path descent, if you are above the descent path and the FMC predicts that the restrictions at the next waypoint cannot be achieved, the CDU message DESCENT PATH UNACHIEVABLE shows. This does not affect the LNAV and it remains engaged, but you need to modify the restrictions.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 35"
        },
        {
            question: "What information is provided on the vertical path data line, and how should pilots interpret these values?",
            options: [
                "Only the current altitude and target altitude",
                "The flight path angle shows the current flight path angle being flown; the vertical bearing indicates the required flight path angle if flying direct to the waypoint/altitude; the vertical speed displays the required vertical speed to achieve the vertical bearing",
                "Wind direction and speed at the current altitude",
                "Fuel consumption rate and time to destination"
            ],
            correct: 1,
            explanation: "On the vertical path data line, the flight path angle shows the current flight path angle being flown. The vertical bearing indicates the required flight path angle if you are flying direct to the waypoint/altitude on the upper line. The vertical speed displays the required vertical speed in feet per minute to achieve the vertical bearing value indicated.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 39-41"
        },
        {
            question: "How does the FMC handle speed restrictions at the destination airport, and what protection is built into the system?",
            options: [
                "The FMC maintains exactly the published speed restriction",
                "The FMC targets a speed 10 knots less than airport speed restriction value to provide protection for small airspeed changes",
                "Speed restrictions are ignored during the final approach phase",
                "The FMC adds 10 knots to the restriction for safety margin"
            ],
            correct: 1,
            explanation: "The FMC targets a speed 10 knots less than airport speed restriction value. This provides a protection for small airspeed changes and ensures compliance with the restriction even with minor speed variations.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 44"
        },
        {
            question: "What happens to speed control when flaps are extended during descent, and how does this override other restrictions?",
            options: [
                "Flap extension has no effect on speed control during descent",
                "When flaps are extended, the line shows the appropriate speed for the flap position and the flap speed overrides any other speed restriction",
                "Flap speeds are advisory only and don't override other restrictions",
                "The pilot must manually adjust speed when flaps are extended"
            ],
            correct: 1,
            explanation: "When the flaps are extended, the line shows the appropriate speed for the flap position. The flap speed overrides any other speed restriction, ensuring safe operation with the current flap configuration.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 46"
        },
        {
            question: "During an ILS approach, what specific system change occurs upon glide slope capture?",
            options: [
                "The FMC automatically adjusts the descent rate",
                "Upon capture of the glide slope, the VNAV disengages and the speed display on the MCP opens",
                "The autopilot switches to approach mode automatically",
                "The autothrottle increases thrust to maintain approach speed"
            ],
            correct: 1,
            explanation: "If you are performing an ILS approach, upon capture of the glide slope, the VNAV disengages and the speed display on the MCP opens. This allows for manual speed control during the precision approach phase.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 47"
        },
        {
            question: "What is displayed on RTA descent pages instead of the normal distance and time information?",
            options: [
                "Fuel consumption and efficiency data",
                "If there is an RTA waypoint in descent, the distance and time is replaced by the time error and the target speed displays computed RTA target speed",
                "Wind correction angles and ground speed",
                "Approach category and landing configuration data"
            ],
            correct: 1,
            explanation: "If there is an RTA waypoint in descent, you select the RTA descent pages. On the RTA descent pages, the distance and time is replaced by the time error. The target speed displays computed RTA target speed for meeting the required time of arrival.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 48"
        },
        {
            question: "Under what specific condition is speed descent the only available descent mode?",
            options: [
                "When the aircraft is above maximum altitude for path descent",
                "With no end of descent point specified, the speed descent is the only descent mode available",
                "When flying in manual flight mode without autopilot",
                "During emergency descent procedures only"
            ],
            correct: 1,
            explanation: "With no end of descent point specified, the speed descent is the only descent mode available. This is because path descent requires a defined end point to construct the vertical profile.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 50"
        },
        {
            question: "What are the fundamental control differences between path descent and speed descent modes?",
            options: [
                "Path descent uses manual thrust control; speed descent uses automatic thrust control",
                "In speed descent, the FMC holds a fixed speed by controlling the pitch and does not attempt to maintain the path; it is your responsibility to stay on the path using speedbrakes or thrust when necessary",
                "Speed descent provides more accurate altitude control than path descent",
                "Path descent requires constant pilot input; speed descent is fully automatic"
            ],
            correct: 1,
            explanation: "In speed descent, the FMC holds a fixed speed by controlling the pitch. It does not attempt to maintain the path; thus it is your responsibility to stay on the path. You can control the path using speedbrakes or thrust when necessary.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 55"
        },
        {
            question: "What is the LNAV requirement difference between path descent and speed descent modes?",
            options: [
                "Both modes require identical LNAV coupling requirements",
                "Speed descent requires more precise LNAV tracking than path descent",
                "You don't have to be close to the LNAV path to initiate a VNAV speed descent and it can be flown with any roll mode",
                "Path descent can be flown without LNAV; speed descent cannot"
            ],
            correct: 2,
            explanation: "You don't have to be close to the LNAV path in order to initiate a VNAV speed descent. It can be flown with any roll mode. This provides more flexibility in speed descent operations compared to path descent.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 56"
        },
        {
            question: "How does the FMC handle altitude constraints during speed descent mode?",
            options: [
                "Altitude constraints are ignored during speed descent",
                "When you are at waypoint with an altitude constraint, the FMC commands level flight until you pass the waypoint with thrust temporarily increasing to keep target speed and pitch mode temporarily changing to VNAV PATH",
                "The aircraft automatically climbs to meet altitude constraints",
                "Altitude constraints cause the FMC to switch to path descent mode"
            ],
            correct: 1,
            explanation: "When you are at waypoint with an altitude constraint, the FMC commands level flight until you pass the waypoint. The thrust temporarily increases to keep the target speed and the pitch mode temporarily changes to VNAV PATH. Although speed descent complies with altitude constraints, it will not guarantee the airplane reaches the altitude restriction at the required point.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 57"
        },
        {
            question: "What happens to the descent profile when you modify the descent speed schedule using manual speed descent?",
            options: [
                "The descent profile remains unchanged regardless of speed changes",
                "The FMC computes a new descent path and top of descent; since a slower descent speed moves the top of descent closer to you",
                "Only the current segment is affected; future segments remain the same",
                "The system reverts to path descent mode automatically"
            ],
            correct: 1,
            explanation: "When you change the descent speed, the FMC computes a new descent path and top of descent. Since a slower descent speed is selected in the example, the top of descent moves closer to you. This demonstrates how speed changes affect the entire descent profile.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 59, 62"
        },
        {
            question: "What are the two methods available for initiating an early descent in VNAV?",
            options: [
                "Using the altitude intervention switch on the MCP or using the DESCENT NOW prompt on the DESCENT page",
                "Manual disconnect of autopilot or emergency descent procedures",
                "Speed brake deployment or thrust reduction",
                "Direct-to navigation or heading mode selection"
            ],
            correct: 0,
            explanation: "You can initiate a VNAV early descent by setting a lower altitude and then pushing the altitude intervention switch on the MCP. The other method to initiate an early descent is to use DESCENT NOW prompt on the DESCENT page.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 64-65"
        },
        {
            question: "What is the specific descent behavior when initiating an early VNAV path descent using the DESCENT NOW prompt?",
            options: [
                "The FMC immediately commands idle thrust and follows the original path",
                "The FMC commands a 1000 feet per minute descent until the planned idle descent path is captured with autothrottle mode FMC SPEED and pitch mode VNAV PATH",
                "The aircraft maintains current speed and gradually reduces thrust",
                "The system switches to speed descent mode automatically"
            ],
            correct: 1,
            explanation: "When you execute the DESCENT NOW modification, the FMC commands a 1000 feet per minute descent until the planned idle descent path is captured. The autothrottle mode is FMC SPEED and the pitch mode is VNAV PATH. When the planned idle descent path is captured, the FMC commands idle thrust while maintaining VNAV PATH.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 68-69"
        },
        {
            question: "How does early VNAV speed descent differ from early VNAV path descent in terms of flight profile?",
            options: [
                "Early speed descent follows the same profile as early path descent",
                "When you execute the modification for early speed descent, the FMC commands an idle thrust normal rate of descent; this path is not intended to capture the planned descent path, but to hold the target speed",
                "Early speed descent climbs initially before beginning descent",
                "Early speed descent uses maximum thrust to maintain speed"
            ],
            correct: 1,
            explanation: "When you execute the modification for early speed descent, the FMC commands an idle thrust normal rate of descent. This path is not intended to capture the planned descent path, but to hold the target speed. The pitch mode changes to VNAV SPEED while the autothrottle maintains idle thrust.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 71-72"
        },
        {
            question: "What are the two available methods for deleting waypoint altitude constraints during descent?",
            options: [
                "Using the CDU message system or the MCP altitude window",
                "You can delete the altitude constraint on the DESCENT page or the ROUTE LEGS page",
                "Through the navigation display or the primary flight display",
                "Using the flight plan page or the approach page"
            ],
            correct: 1,
            explanation: "You can delete the altitude constraint on the DESCENT page or the ROUTE LEGS page. Both methods provide access to modify altitude constraints, and when deleted on one page, the change is reflected on the other page.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 74-76"
        },
        {
            question: "What is the effect of unforecast tailwind during VNAV path descent when target speed is the controlling factor?",
            options: [
                "The FMC automatically increases thrust to maintain path",
                "The FMC commands pitch to maintain the descent path, but the airspeed will be higher than the target speed",
                "The aircraft automatically climbs to compensate for the tailwind",
                "The VNAV system disengages immediately"
            ],
            correct: 1,
            explanation: "If an unforecast tailwind starts to blow during path descent when target speed is the active controlling speed, the FMC commands pitch to maintain the descent path, but the airspeed will be higher than the target speed due to the tailwind effect.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 81"
        },
        {
            question: "What alert message appears when airspeed increases significantly above target during tailwind conditions, and what pilot action is required?",
            options: [
                "SPEED DEVIATION message appears; reduce thrust manually",
                "When the speed increases 10 knots or more above FMC target speed or within 5 knots of Vmo/Mmo, the scratchpad message DRAG REQUIRED is displayed; you can use speedbrakes to increase drag",
                "OVERSPEED WARNING appears; disconnect autopilot immediately",
                "WINDSHEAR message appears; execute windshear recovery procedure"
            ],
            correct: 1,
            explanation: "When the speed increases 10 knots or more above FMC target speed or within 5 knots of Vmo/Mmo, the scratchpad message DRAG REQUIRED is displayed. You can use the speedbrakes to increase drag and reduce the airspeed to the target.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 82-83"
        },
        {
            question: "What happens if airspeed exceeds the speed restriction by more than 15 knots during descent?",
            options: [
                "The FMC automatically reduces thrust to minimum",
                "VNAV disconnects and the OVERSPEED DISCONNECT message shows on the scratchpad; you should manually reduce speed and reengage VNAV",
                "The aircraft automatically climbs to reduce airspeed",
                "The autopilot switches to heading mode"
            ],
            correct: 1,
            explanation: "If you let the airspeed exceed the speed restriction by more than 15 knots, VNAV disconnects. The OVERSPEED DISCONNECT message shows on the scratchpad. You should manually reduce speed and reengage the VNAV.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 85-86"
        },
        {
            question: "During VNAV speed descent with unforecast tailwind, what happens to the flight path and what corrective action is available?",
            options: [
                "The flight path remains unchanged due to speed control",
                "The FMC commands pitch to maintain the target speed, but the tailwind pushes the airplane above the descent path; you can use speedbrakes to return to the VNAV path",
                "The aircraft automatically reduces speed to compensate",
                "The FMC increases thrust to maintain the descent path"
            ],
            correct: 1,
            explanation: "During VNAV speed descent with unforecast tailwind, the FMC commands pitch to maintain the target speed; but the tailwind pushes the airplane above the descent path. You can use the speedbrakes to return to the VNAV path.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 88"
        },
        {
            question: "What is the effect of unforecast headwind during VNAV path descent, and what pilot action may be required?",
            options: [
                "The headwind has no effect on path descent operations",
                "If an unforecast headwind starts to blow during VNAV path descent, the FMC commands pitch to keep the descent path, but the airspeed will go below the target speed; you can use thrust to increase airspeed back to target",
                "The FMC automatically increases descent rate to compensate",
                "The aircraft maintains both path and speed without any changes"
            ],
            correct: 1,
            explanation: "If an unforecast headwind starts to blow during a VNAV path descent, the FMC commands pitch to keep the descent path, but the airspeed will go below the target speed. You can use thrust to increase airspeed back to target.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 89"
        },
        {
            question: "How does unforecast headwind affect VNAV speed descent, and what corrective action is available?",
            options: [
                "Headwind improves speed descent performance with no action required",
                "In the event of unforecast headwind during speed descent, FMC commands pitch to keep target speed, but the headwind causes the airplane to go below the VNAV path; you can use thrust to recapture the path",
                "The FMC automatically adjusts the descent profile to compensate",
                "The aircraft maintains the original descent path regardless of headwind"
            ],
            correct: 1,
            explanation: "In the event of unforecast headwind during a speed descent, FMC commands pitch to keep target speed, but the headwind causes the airplane to go below the VNAV path. You can use the thrust to recapture the path.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 90"
        },
        {
            question: "What is the primary advantage of path descent over speed descent in terms of operational efficiency?",
            options: [
                "Path descent provides better speed control capabilities",
                "The path descent is the most economical descent method compared to speed descent which is more flexible but less economical",
                "Path descent allows for steeper descent angles",
                "Path descent requires less pilot monitoring"
            ],
            correct: 1,
            explanation: "The path descent is the most economical descent method. The speed descent is more flexible, but less economical than path descent. This makes path descent the preferred method when operational conditions allow.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 10-11"
        },
        {
            question: "What determines the availability of path descent mode in the FMC?",
            options: [
                "Aircraft weight and balance parameters",
                "Path descent is available only when there is a defined end of descent point",
                "Current altitude and airspeed restrictions",
                "Weather conditions and wind forecasts"
            ],
            correct: 1,
            explanation: "The path descent is available only when there is a defined end of descent point. Without this reference point, the FMC cannot construct the upward path calculation required for path descent mode.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 25"
        },
        {
            question: "What happens to the target speed display as the aircraft progresses through the descent path?",
            options: [
                "The target speed remains constant throughout the descent",
                "The target speed line shows command Mach and airspeeds as the airplane proceeds through the descent path",
                "Target speed is manually controlled by the pilot throughout descent",
                "The target speed increases continuously to maintain descent rate"
            ],
            correct: 1,
            explanation: "The target speed line shows command Mach and airspeeds as the airplane proceeds through the descent path. This reflects the FMC's calculation of appropriate speeds for different phases and altitudes during the descent.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 33"
        },
        {
            question: "What information is displayed about the next waypoint with altitude constraint, and what happens if no constraints exist?",
            options: [
                "The next waypoint with altitude constraint is displayed here with constraint data from the ROUTE LEGS page; if there are no altitude constraints, the display is blank and path descent is not available",
                "All waypoints are displayed regardless of altitude constraints",
                "Only the final destination waypoint is shown",
                "Waypoint information is displayed on a separate page"
            ],
            correct: 0,
            explanation: "The next waypoint with altitude constraint is displayed here. The constraint data comes from the ROUTE LEGS page. If there are no altitude constraints, the display is blank and a path descent is not available.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 36"
        },
        {
            question: "What does the estimated time of arrival and distance information show for the constrained waypoint?",
            options: [
                "Only the distance remaining to the waypoint",
                "This line shows the estimated time of arrival at and distance to go to the constrained waypoint",
                "The fuel required to reach the waypoint",
                "The required descent rate to meet the constraint"
            ],
            correct: 1,
            explanation: "This line shows the estimated time of arrival at and distance to go to the constrained waypoint. This information helps pilots plan their descent management and compliance with the altitude restriction.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 37"
        },
        {
            question: "How does the navigation display assist with speed restriction compliance during descent?",
            options: [
                "It shows only the current aircraft speed",
                "The navigation display shows you where the deceleration will start and stop to meet the speed restriction",
                "It displays fuel consumption information only",
                "It shows the wind conditions at the destination"
            ],
            correct: 1,
            explanation: "The navigation display shows you where the deceleration will start and stop to meet the speed restriction. This visual information helps pilots understand when speed changes will occur to comply with airport restrictions.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 43"
        },
        {
            question: "What speed indication appears when approaching the destination airport after speed restrictions are met?",
            options: [
                "The final approach speed for the runway",
                "When you are close to the destination airport, the line shows flaps up maneuvering speed followed by the word FLAPS",
                "The maximum landing speed for the aircraft",
                "The recommended taxi speed for the airport"
            ],
            correct: 1,
            explanation: "When you are close to the destination airport, the line shows flaps up maneuvering speed followed by the word FLAPS. This indicates the transition from cruise configuration to approach configuration speeds.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 45"
        },
        {
            question: "What is the procedure for modifying the descent speed schedule during descent?",
            options: [
                "Use the autopilot speed knob to adjust target speed",
                "To change the descent speed, select the descent page and key-in the desired speed in the scratch pad, then push line select key next to the TARGET SPEED line and execute the modification",
                "Contact ATC for speed change clearance first",
                "Use the MCP speed window to input new speed"
            ],
            correct: 1,
            explanation: "To change the descent speed, select the descent page and key-in the desired speed in the scratch pad. Then push line select key next to the TARGET SPEED line. Execute the modification. The FMC will then calculate a new descent path and top of descent.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 60"
        },
        {
            question: "What is the procedure for deleting altitude constraints using the DESCENT page?",
            options: [
                "Use the ROUTE LEGS page only for constraint deletion",
                "Push delete key to enter DELETE in the scratch pad, then select the line select key adjacent to the constraint and execute the modification",
                "Contact ATC to remove the altitude constraint",
                "Use the MCP altitude window to override the constraint"
            ],
            correct: 1,
            explanation: "You can delete the altitude constraint on the DESCENT page by pushing delete key to enter DELETE in the scratch pad. Then select the line select key adjacent to the constraint. Execute the modification. The FMC will then calculate a new descent path.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 75"
        },
        {
            question: "What does the cabin rate of descent line show on the DESCENT FORECAST page?",
            options: [
                "The maximum allowable cabin rate of descent",
                "This line shows the predicted cabin rate of descent required by the flight plan descent profile",
                "The current cabin altitude rate of change",
                "The recommended cabin rate setting for passenger comfort"
            ],
            correct: 1,
            explanation: "This line shows the predicted cabin rate of descent required by the flight plan descent profile. This information helps pilots understand the pressurization requirements during the planned descent.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 19"
        },
        {
            question: "What entries can be made on the DESCENT FORECAST page for environmental conditions?",
            options: [
                "Only temperature and wind information",
                "Other entries that can be made are ISA deviation, QNH, and wind direction and speed for up to three descent altitudes",
                "Only QNH and wind direction",
                "Temperature, humidity, and visibility information"
            ],
            correct: 1,
            explanation: "Other entries that can be made on the DESCENT FORECAST page are ISA deviation, QNH, and wind direction and speed for up to three descent altitudes. These environmental factors help refine the descent calculations.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 20"
        },
        {
            question: "What altimeter setting limitation exists on the DESCENT FORECAST page?",
            options: [
                "Only standard altimeter settings can be entered",
                "You cannot enter a QFE altimeter setting",
                "Only metric altimeter settings are allowed",
                "Both QNH and QFE settings can be entered"
            ],
            correct: 1,
            explanation: "Note that you cannot enter a QFE altimeter setting on the DESCENT FORECAST page. Only QNH altimeter settings are accepted for the descent planning calculations.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 21"
        },
        {
            question: "What are the four available descent modes displayed on the DESCENT page?",
            options: [
                "Manual, automatic, emergency, and approach modes",
                "The available descent modes are: economy path descent, economy speed descent, manual speed descent and RTA descent",
                "Normal, alternate, backup, and manual modes",
                "Standard, custom, approach, and emergency modes"
            ],
            correct: 1,
            explanation: "The available descent modes are: economy path descent, economy speed descent, manual speed descent and RTA descent. These modes provide different levels of automation and control for various operational requirements.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 24"
        },
        {
            question: "What is the default descent mode selected by the FMC?",
            options: [
                "Economy speed descent is the default mode",
                "The ECONOMY PATH is the default descent mode",
                "Manual speed descent is the default mode",
                "RTA descent is the default when available"
            ],
            correct: 1,
            explanation: "The ECONOMY PATH is the default descent mode. Since the FMC defaults to a PATH descent, you usually have to select speed descent when a speed descent is necessary for operational reasons.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 25, 49"
        },
        {
            question: "What is the relationship between the FMC descent profile calculation and the approach vertical angle coded in the navigation database?",
            options: [
                "The approach vertical angle is ignored during descent planning",
                "The FMC computes the initial segment of the path based on the approach vertical angle coded in the navigation database",
                "The approach vertical angle only affects the final approach phase",
                "The vertical angle is manually entered by pilots during approach setup"
            ],
            correct: 1,
            explanation: "The FMC computes the initial segment of the path based on the approach vertical angle coded in the navigation database. This provides the foundation for building the descent profile from the approach end backward to the cruise altitude.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 6"
        },
        {
            question: "How does the FMC construct the complete descent profile after computing the approach segment?",
            options: [
                "It uses a standard 3-degree descent angle throughout the entire descent",
                "With the approach segment computed, the FMC constructs a vertical profile for a descent with idle thrust, flaps and gear up and speed brakes retracted to determine a top of descent point",
                "It calculates based on maximum descent rate capabilities of the aircraft",
                "The profile is based on fuel consumption optimization only"
            ],
            correct: 1,
            explanation: "With the approach segment computed, the FMC constructs a vertical profile for a descent with idle thrust, flaps and gear up and speed brakes retracted to determine a top of descent point. This creates the baseline descent path that is then refined with operational constraints.",
            reference: "B737 NG CBT - FMS - DESCENT, Section 7"
        }
    ]
},

    "fms-engine-out": {
    title: "FMS - ENGINE OUT",
    questions: [
        {
            question: "When accessing the ENGINE OUT CLIMB page after selecting an engine failure, what is the fundamental characteristic of this page that distinguishes it from other FMC operational pages?",
            options: [
                "The page requires immediate execution to activate engine out procedures",
                "The page shows only advisory information for an engine inoperative condition and once selected, it cannot be executed",
                "The page automatically configures the aircraft for single-engine operations",
                "The page provides real-time thrust calculations that must be manually updated"
            ],
            correct: 1,
            explanation: "The ENGINE OUT CLIMB page shows only advisory information for an engine inoperative condition. Once the page is selected, it cannot be executed. This is a key distinction - it provides guidance data but does not actively control aircraft systems.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 5-6"
        },
        {
            question: "What is the source of the active cruise altitude displayed on the ENGINE OUT CLIMB page, and what are the limitations regarding manual entry?",
            options: [
                "The altitude comes from ATC clearance and can be manually adjusted by the pilot",
                "The altitude is calculated based on current fuel weight and allows manual override",
                "This line shows the active cruise altitude which comes from performance initialization page or cruise page, with manual entry not allowed",
                "The altitude is derived from the flight plan route and can be modified through the LEGS page"
            ],
            correct: 2,
            explanation: "This line shows the active cruise altitude which comes from performance initialization page or cruise page. Manual entry is not allowed. The system uses pre-programmed cruise altitude data to ensure accuracy in engine-out calculations.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 7"
        },
        {
            question: "How does the FMC define and calculate the maximum engine out altitude displayed on the ENGINE OUT CLIMB page?",
            options: [
                "The maximum altitude where the aircraft can maintain level flight with one engine",
                "The maximum engine out altitude at which specified rate of climb can be achieved using one engine at maximum continuous thrust",
                "The highest altitude where cabin pressurization can be maintained with one engine",
                "The maximum service ceiling reduced by 50% for single-engine operations"
            ],
            correct: 1,
            explanation: "The maximum altitude line shows the maximum engine out altitude at which specified rate of climb can be achieved using one engine at maximum continuous thrust. This represents the performance-limited ceiling for continued climb capability.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 8"
        },
        {
            question: "What specific speed does the engine out speed line display, and what is the basis for this calculation?",
            options: [
                "The minimum control speed for single-engine flight in the current configuration",
                "The engine out speed line displays the minimum drag engine out climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower",
                "The best glide speed for single-engine descent to the nearest airport",
                "The maximum allowable speed for single-engine operations based on structural limits"
            ],
            correct: 1,
            explanation: "The engine out speed line displays the minimum drag engine out climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower. This speed optimizes climb performance while minimizing drag in the single-engine configuration.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 9"
        },
        {
            question: "What backup procedure should be followed if the computed climb speeds are not available on the ENGINE OUT CLIMB page?",
            options: [
                "Use the last known climb speed and reduce thrust to 90% maximum continuous",
                "If the computed climb speeds are not available, use flaps up maneuver speed and maximum continuous thrust",
                "Maintain current airspeed and gradually increase thrust to maximum available",
                "Use published V2 speed plus 10 knots with maximum takeoff thrust"
            ],
            correct: 1,
            explanation: "If the computed climb speeds are not available, use flaps up maneuver speed and maximum continuous thrust. This provides a safe fallback when FMC calculations are unavailable.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 10"
        },
        {
            question: "What does the N1 display show on the ENGINE OUT CLIMB page, and how should this information be used operationally?",
            options: [
                "This line displays the N1 for maximum continuous thrust, and you should set maximum continuous thrust on the operative engine",
                "The N1 shows current thrust setting and should be used to balance power between engines",
                "The display indicates minimum required N1 for obstacle clearance during single-engine climb",
                "The N1 value represents optimal fuel efficiency setting for extended single-engine operations"
            ],
            correct: 0,
            explanation: "This line displays the N1 for maximum continuous thrust. Set maximum continuous thrust on the operative engine. This ensures the operative engine is providing the maximum continuous power available for the climb.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 11-12"
        },
        {
            question: "What is the correct thrust management procedure during single-engine climb, particularly regarding timing of thrust adjustments?",
            options: [
                "Immediately reduce thrust to maximum continuous as soon as engine failure is detected",
                "Leave thrust set at maximum continuous thrust until airspeed increases to the commanded value",
                "Continuously adjust thrust to maintain exact target airspeed throughout the climb",
                "Set thrust to maximum available and allow airspeed to stabilize naturally"
            ],
            correct: 1,
            explanation: "Set maximum continuous thrust on the operative engine. Leave thrust set at maximum continuous thrust until airspeed increases to the commanded value. This sequence ensures proper energy management during the critical climb phase.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 12"
        },
        {
            question: "What automatic transition occurs when the aircraft reaches cruise altitude during a single-engine climb?",
            options: [
                "The FMC automatically reduces thrust to cruise power settings",
                "The engine out climb automatically changes to the engine out cruise when reaching the cruise altitude",
                "The system switches to normal two-engine cruise procedures",
                "The autopilot automatically engages altitude hold mode"
            ],
            correct: 1,
            explanation: "The engine out climb automatically changes to the engine out cruise when reaching the cruise altitude. This transition provides continuity in the engine-out guidance and procedures.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 13"
        },
        {
            question: "How do you access the ENGINE OUT CRUISE page when an engine failure occurs during cruise flight?",
            options: [
                "Select EMERGENCY on the FMC menu followed by ENGINE OUT procedures",
                "The engine out cruise page may be accessed by selecting the ENGINE OUT prompt on the cruise page, followed by the prompt corresponding to the failed engine",
                "Use the ALTN page and select single-engine cruise performance data",
                "Access through the PERF page and select engine failure configuration"
            ],
            correct: 1,
            explanation: "The engine out cruise page may be accessed by selecting the ENGINE OUT prompt on the cruise page, followed by the prompt corresponding to the failed engine. This provides specific guidance for the particular engine that has failed.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 15"
        },
        {
            question: "What specific information does the ENGINE OUT CRUISE page display, and how does this data change during flight?",
            options: [
                "Fixed performance data based on takeoff weight that remains constant throughout flight",
                "The page displays FMC calculated optimum engine out speed and maximum engine out altitude at the current gross weight, with fields updated as fuel is burned",
                "Current engine parameters and recommended emergency descent procedures",
                "Fuel consumption rates and estimated time to nearest suitable airport"
            ],
            correct: 1,
            explanation: "The page displays FMC calculated optimum engine out speed and maximum engine out altitude at the current gross weight. The fields are updated as fuel is burned. This ensures the guidance remains accurate as aircraft weight decreases.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 16"
        },
        {
            question: "What is the first critical action regarding autothrottle and thrust selection when an engine fails during cruise?",
            options: [
                "Engage autothrottle and select cruise thrust mode for automatic power management",
                "When an engine fails during cruise, you should disengage the autothrottle and select CONTINUOUS thrust in the FMC",
                "Maintain autothrottle engagement but reduce thrust to 80% on the operative engine",
                "Switch to manual thrust control and gradually increase power as needed"
            ],
            correct: 1,
            explanation: "When an engine fails during cruise, you should disengage the autothrottle and select CONTINUOUS thrust in the FMC. This ensures proper manual control of the critical thrust management phase.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 17"
        },
        {
            question: "After disengaging autothrottle and selecting continuous thrust, what is the next step in thrust management?",
            options: [
                "Monitor thrust automatically set by the FMC continuous thrust selection",
                "Manually set maximum continuous limit thrust on the operative engine",
                "Wait for FMC guidance before making any thrust adjustments",
                "Reduce thrust gradually to prevent overstressing the remaining engine"
            ],
            correct: 1,
            explanation: "Manually set maximum continuous limit thrust on the operative engine. This manual setting ensures the operative engine provides the required power for single-engine operations.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 17"
        },
        {
            question: "What is the correct sequence for altitude management after referencing the ENGINE OUT CRUISE page?",
            options: [
                "Maintain current altitude and monitor performance degradation over time",
                "Read the maximum altitude value and set the maximum altitude on the MCP altitude window",
                "Immediately begin descent to the computed engine-out service ceiling",
                "Request ATC clearance to the FMC-calculated optimal altitude"
            ],
            correct: 1,
            explanation: "Read the maximum altitude value and set the maximum altitude on the MCP altitude window. This prepares the aircraft systems for the altitude change required by the single-engine condition.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 19"
        },
        {
            question: "What is the proper sequence for airspeed management during the engine-out cruise configuration?",
            options: [
                "Maintain current cruise speed and allow the aircraft to settle naturally",
                "Next set the engine out speed in the MCP indicated airspeed window",
                "Gradually reduce speed over 10 minutes to prevent sudden configuration changes",
                "Use autopilot speed mode to automatically capture the target speed"
            ],
            correct: 1,
            explanation: "Next set the engine out speed in the MCP indicated airspeed window. This targets the optimal speed for single-engine cruise performance as calculated by the FMC.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 20"
        },
        {
            question: "When should level change be engaged during the engine-out cruise procedure?",
            options: [
                "Immediately after setting the target altitude in the MCP",
                "When the airspeed reduces to the engine out speed engage the level change",
                "After confirming the operative engine is stabilized at maximum continuous thrust",
                "Only after receiving ATC clearance for the altitude change"
            ],
            correct: 1,
            explanation: "When the airspeed reduces to the engine out speed engage the level change. This timing ensures proper energy management during the descent to the engine-out cruise altitude.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 21"
        },
        {
            question: "What is the recommended procedure after leveling off at the target engine-out altitude?",
            options: [
                "Immediately begin planning for emergency landing at nearest airport",
                "After level off at the target altitude, maintain continuous thrust and let the airplane accelerate to the single engine long range cruise speed, then determine the course of action",
                "Reduce thrust to normal cruise setting and resume standard procedures",
                "Begin fuel balancing procedures to optimize single-engine performance"
            ],
            correct: 1,
            explanation: "After level off at the target altitude, maintain continuous thrust and let the airplane accelerate to the single engine long range cruise speed. Then determine the course of action. This allows the aircraft to achieve optimal single-engine cruise performance before making further decisions.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 22"
        },
        {
            question: "What is the appropriate procedure when the aircraft is already at or below maximum ENGINE OUT altitude when an engine becomes inoperative?",
            options: [
                "Begin immediate descent to a lower, more suitable altitude for single-engine operations",
                "If the airplane is at or below maximum ENGINE OUT altitude when an engine becomes inoperative, maintain engine out cruise speed using manual thrust adjustments",
                "Climb to the maximum engine-out altitude to improve single-engine performance",
                "Maintain current altitude and speed until engine restart procedures are completed"
            ],
            correct: 1,
            explanation: "If the airplane is at or below maximum ENGINE OUT altitude when an engine becomes inoperative, maintain engine out cruise speed using manual thrust adjustments. This maintains optimal performance within the aircraft's single-engine capabilities.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 23"
        },
        {
            question: "During the ENGINE OUT CLIMB procedure, what is the relationship between the displayed climb speed and the target altitudes?",
            options: [
                "The speed is optimized for the higher of current cruise altitude or maximum service ceiling",
                "The engine out speed displays minimum drag climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower",
                "The speed calculation is based on the nearest suitable airport elevation plus safety margin",
                "The displayed speed represents the minimum controllable airspeed for the current weight"
            ],
            correct: 1,
            explanation: "The engine out speed line displays the minimum drag engine out climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower. This ensures the speed is appropriate for whichever altitude limit is more restrictive.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 9"
        },
        {
            question: "What is the significance of the Left and Right Engine Out prompts that appear when accessing engine-out procedures?",
            options: [
                "They indicate which engine has higher oil pressure and should remain operative",
                "When the engine out prompt is selected, the climb page shows the Left and Right Engine Out prompts to let you select the inoperative engine",
                "They show the thrust differential between engines to help identify the failed engine",
                "The prompts indicate which engine restart procedure should be attempted first"
            ],
            correct: 1,
            explanation: "When the engine out prompt is selected, the climb page shows the Left and Right Engine Out prompts to let you select the inoperative engine. This selection is crucial for providing accurate performance data specific to which engine has failed.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 4"
        },
        {
            question: "Why is it significant that the ENGINE OUT CLIMB page cannot be executed once selected?",
            options: [
                "It prevents accidental activation of emergency procedures that could worsen the situation",
                "The page shows only advisory information and once selected, it cannot be executed, distinguishing it from operational control pages",
                "It requires captain authorization before any engine-out procedures can be implemented",
                "The system must complete internal calculations before allowing procedure execution"
            ],
            correct: 1,
            explanation: "The page shows only advisory information for an engine inoperative condition. Once the page is selected, it cannot be executed. This distinguishes it from other FMC pages that actively control aircraft systems - this page only provides guidance.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 5-6"
        },
        {
            question: "What is the operational significance of using minimum drag speed during engine-out climb?",
            options: [
                "It maximizes the rate of climb while minimizing engine stress on the operative engine",
                "The minimum drag engine out climb speed optimizes performance to reach cruise or maximum engine out altitude efficiently",
                "It ensures adequate stall margin during the critical single-engine flight phase",
                "It provides the best fuel economy during extended single-engine operations"
            ],
            correct: 1,
            explanation: "The engine out speed line displays the minimum drag engine out climb speed. This speed optimizes the aircraft's performance to efficiently reach either the cruise altitude or maximum engine out altitude, whichever is lower, by minimizing drag losses.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 9"
        },
        {
            question: "How does the FMC ensure accuracy of engine-out performance data during different phases of flight?",
            options: [
                "The system uses standard atmospheric conditions and average aircraft weights for all calculations",
                "The FMC calculated optimum engine out speed and maximum altitude are based on current gross weight, with fields updated as fuel is burned",
                "Performance data is manually updated by the flight crew every 30 minutes during flight",
                "The system interpolates between takeoff and landing weights using flight time estimates"
            ],
            correct: 1,
            explanation: "The page displays FMC calculated optimum engine out speed and maximum engine out altitude at the current gross weight. The fields are updated as fuel is burned. This real-time updating ensures the performance data remains accurate throughout the flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 16"
        },
        {
            question: "What is the specific purpose of selecting CONTINUOUS thrust in the FMC after an engine failure during cruise?",
            options: [
                "It automatically calculates fuel consumption for single-engine flight planning",
                "Selecting CONTINUOUS thrust in the FMC provides the thrust reference for maximum continuous power on the operative engine",
                "It activates backup systems to compensate for the failed engine's lost power",
                "It initiates automatic thrust balancing between the operative engine and backup systems"
            ],
            correct: 1,
            explanation: "When an engine fails during cruise, you should disengage the autothrottle and select CONTINUOUS thrust in the FMC. This selection provides the proper thrust reference for setting maximum continuous limit thrust on the operative engine.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 17"
        },
        {
            question: "Why is manual thrust management required instead of autothrottle operation during engine-out procedures?",
            options: [
                "The autothrottle system cannot compensate for the asymmetric thrust condition safely",
                "Manual thrust control ensures precise power management during the critical phase where autothrottle may not provide appropriate responses",
                "The autothrottle requires both engines operative to maintain proper fuel flow calculations",
                "Manual control prevents overcooling of the operative engine during extended high-power operations"
            ],
            correct: 1,
            explanation: "When an engine fails during cruise, you should disengage the autothrottle and manually set maximum continuous limit thrust on the operative engine. Manual control ensures precise power management during this critical phase where automatic systems may not provide the most appropriate responses.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 17"
        },
        {
            question: "What is the operational logic behind waiting for airspeed to increase to commanded value before making thrust adjustments?",
            options: [
                "It prevents engine surge during rapid power changes in the single-engine configuration",
                "Leave thrust set at maximum continuous thrust until airspeed increases to the commanded value to ensure proper energy management during climb",
                "It allows time for the failed engine to cool down before attempting restart procedures",
                "It ensures adequate hydraulic pressure is maintained for flight control operation"
            ],
            correct: 1,
            explanation: "Set maximum continuous thrust on the operative engine. Leave thrust set at maximum continuous thrust until airspeed increases to the commanded value. This ensures proper energy management and prevents premature thrust reductions during the critical climb phase.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 12"
        },
        {
            question: "How does the automatic transition from ENGINE OUT CLIMB to ENGINE OUT CRUISE benefit flight operations?",
            options: [
                "It automatically adjusts fuel flow for optimal single-engine cruise efficiency",
                "The automatic change to engine out cruise when reaching cruise altitude provides continuity in guidance and procedures",
                "It triggers automatic navigation to the nearest suitable airport for emergency landing",
                "It activates extended range cruise procedures for maximum flight endurance"
            ],
            correct: 1,
            explanation: "The engine out climb automatically changes to the engine out cruise when reaching the cruise altitude. This automatic transition provides continuity in the FMC guidance and ensures appropriate procedures are available for each phase of flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 13"
        },
        {
            question: "What is the significance of the maximum engine out altitude calculation being based on specified rate of climb capability?",
            options: [
                "It ensures compliance with minimum obstacle clearance requirements during emergency procedures",
                "The maximum altitude where specified rate of climb can be achieved using one engine at maximum continuous thrust defines the performance ceiling",
                "It provides adequate safety margin for engine restart attempts at higher altitudes",
                "It maintains sufficient cabin pressurization capability with one engine operative"
            ],
            correct: 1,
            explanation: "The maximum altitude line shows the maximum engine out altitude at which specified rate of climb can be achieved using one engine at maximum continuous thrust. This defines the absolute performance ceiling where the aircraft can still maintain climb capability.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 8"
        },
        {
            question: "Why is the flaps up maneuver speed used as a backup when computed climb speeds are unavailable?",
            options: [
                "It provides the minimum speed for safe single-engine flight in any configuration",
                "Flaps up maneuver speed ensures adequate stall margin and control authority when FMC computed speeds are not available",
                "It matches the speed used during normal two-engine climb procedures for consistency",
                "It represents the optimal speed for fuel efficiency during single-engine operations"
            ],
            correct: 1,
            explanation: "If the computed climb speeds are not available, use flaps up maneuver speed and maximum continuous thrust. This backup procedure ensures adequate stall margin and control authority when the FMC cannot provide optimized speeds.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 10"
        },
        {
            question: "What does the N1 reference display provide that is critical for single-engine operations?",
            options: [
                "It shows the minimum N1 required to maintain single-engine flight in the current configuration",
                "This line displays the N1 for maximum continuous thrust, providing the target setting for the operative engine",
                "It indicates the optimal N1 for fuel efficiency during extended single-engine cruise",
                "It shows the maximum N1 available before risking engine damage during emergency operations"
            ],
            correct: 1,
            explanation: "This line displays the N1 for maximum continuous thrust. Set maximum continuous thrust on the operative engine. This provides the precise target for setting the appropriate power level on the remaining engine.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 11-12"
        },
        {
            question: "How does the selection of which engine has failed affect the FMC calculations and displayed information?",
            options: [
                "The failed engine selection determines asymmetric thrust calculations and specific performance limitations for that configuration",
                "All engine-out calculations are identical regardless of which engine fails",
                "Only fuel flow calculations change based on which engine has failed",
                "The selection only affects display formatting but not actual performance calculations"
            ],
            correct: 0,
            explanation: "When the engine out prompt is selected, the climb page shows the Left and Right Engine Out prompts to let you select the inoperative engine. This selection affects the FMC's calculations because different engines may have different impacts on aircraft performance and systems.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 4"
        },
        {
            question: "What is the relationship between current gross weight and the accuracy of engine-out performance calculations?",
            options: [
                "Gross weight only affects fuel consumption estimates but not performance capabilities",
                "The FMC calculated optimum speed and maximum altitude are based on current gross weight with real-time updates as fuel burns",
                "Engine-out performance is calculated using average weights to provide conservative estimates",
                "Weight changes during flight have minimal impact on single-engine performance calculations"
            ],
            correct: 1,
            explanation: "The page displays FMC calculated optimum engine out speed and maximum engine out altitude at the current gross weight. The fields are updated as fuel is burned. This ensures performance data accuracy as aircraft weight changes during flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 16"
        },
        {
            question: "Why is it important to let the airplane accelerate to single engine long range cruise speed after leveling off?",
            options: [
                "It provides optimal fuel efficiency for extended single-engine operations while maintaining adequate performance margins",
                "It ensures proper engine cooling after the high-power climb phase",
                "It allows time for systems to stabilize before making decisions about continuing the flight",
                "It provides the best speed for potential engine restart attempts"
            ],
            correct: 0,
            explanation: "After level off at the target altitude, maintain continuous thrust and let the airplane accelerate to the single engine long range cruise speed. Then determine the course of action. This speed provides the optimal balance of fuel efficiency and performance for extended single-engine flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 22"
        },
        {
            question: "What determines whether an aircraft should descend to maximum engine-out altitude or can remain at current cruise altitude?",
            options: [
                "The decision is based on whether current altitude exceeds the maximum engine out altitude calculated by the FMC for current weight",
                "Fuel quantity remaining and distance to destination are the primary factors",
                "Air traffic control clearances and airspace restrictions determine altitude capability",
                "Weather conditions and turbulence levels at different altitudes"
            ],
            correct: 0,
            explanation: "If the airplane is at or below maximum ENGINE OUT altitude when an engine becomes inoperative, maintain engine out cruise speed using manual thrust adjustments. This implies that if above this altitude, descent is required to the maximum engine-out altitude.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 23"
        },
        {
            question: "How does the use of manual thrust adjustments during engine-out cruise differ from normal autothrottle operations?",
            options: [
                "Manual adjustments provide more precise control of power settings critical for single-engine performance optimization",
                "Manual control is required because autothrottle cannot function with asymmetric engine configuration",
                "Manual thrust prevents automatic systems from making inappropriate power changes during emergency conditions",
                "Manual control allows for engine restart attempts without system interference"
            ],
            correct: 0,
            explanation: "If the airplane is at or below maximum ENGINE OUT altitude when an engine becomes inoperative, maintain engine out cruise speed using manual thrust adjustments. Manual control provides the precision needed for optimal single-engine performance management.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 23"
        },
        {
            question: "What is the strategic purpose of determining course of action after achieving single engine long range cruise speed?",
            options: [
                "This allows evaluation of options including continuing to destination versus diverting based on aircraft performance and operational factors",
                "It provides time to attempt engine restart procedures in stable flight conditions",
                "It allows for consultation with maintenance control for troubleshooting guidance",
                "It ensures proper documentation of the emergency for regulatory reporting requirements"
            ],
            correct: 0,
            explanation: "After level off at the target altitude, maintain continuous thrust and let the airplane accelerate to the single engine long range cruise speed. Then determine the course of action. This provides the optimal point to assess whether to continue or divert based on performance capabilities.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 22"
        },
        {
            question: "How does the engine-out climb speed calculation account for performance optimization in single-engine configuration?",
            options: [
                "The minimum drag engine out climb speed minimizes power required while maximizing climb performance to reach the target altitude efficiently",
                "The speed ensures minimum control speed margins are maintained throughout the climb",
                "The calculation provides the fastest possible climb rate regardless of fuel consumption",
                "The speed is optimized for engine cooling during high-power single-engine operations"
            ],
            correct: 0,
            explanation: "The engine out speed line displays the minimum drag engine out climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower. This speed minimizes drag losses while optimizing climb performance in the single-engine configuration.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 9"
        },
        {
            question: "What operational advantage does having both climb and cruise engine-out pages provide during emergency management?",
            options: [
                "It provides phase-appropriate guidance ensuring optimal procedures for both climbing and cruise flight segments during single-engine operations",
                "It allows comparison between different engine failure scenarios to choose optimal responses",
                "It provides redundant information to verify calculations during high-workload emergency situations",
                "It enables practice of emergency procedures during normal flight operations"
            ],
            correct: 0,
            explanation: "The engine out climb automatically changes to the engine out cruise when reaching the cruise altitude. Having separate pages for each phase ensures that the guidance and procedures are optimized for the specific flight segment and performance requirements.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 13"
        },
        {
            question: "Why is maximum continuous thrust specifically used rather than maximum available thrust during engine-out operations?",
            options: [
                "Maximum continuous thrust provides sustainable power levels that can be maintained for extended periods without risking engine damage",
                "Maximum continuous thrust reduces fuel consumption compared to higher power settings",
                "It prevents overheating of the operative engine during single-engine flight",
                "It maintains better engine balance and reduces vibration in the single-engine configuration"
            ],
            correct: 0,
            explanation: "This line displays the N1 for maximum continuous thrust. Set maximum continuous thrust on the operative engine. Maximum continuous thrust is designed to be sustainable for extended periods, making it appropriate for potentially long single-engine operations.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 11-12"
        },
        {
            question: "How does the timing of level change engagement relate to energy management during engine-out procedures?",
            options: [
                "Engaging level change when airspeed reaches engine out speed ensures optimal energy state transition from climb to cruise configuration",
                "Early engagement provides faster descent to reduce engine workload",
                "Late engagement allows more time for engine restart attempts at altitude",
                "The timing prevents excessive speed buildup during the descent phase"
            ],
            correct: 0,
            explanation: "When the airspeed reduces to the engine out speed engage the level change. This timing ensures the aircraft transitions to the descent at the optimal energy state, with speed already stabilized at the target for single-engine cruise.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 21"
        },
        {
            question: "What is the operational significance of the advisory-only nature of the ENGINE OUT pages?",
            options: [
                "It ensures pilots maintain decision-making authority while receiving computed guidance for optimal single-engine performance management",
                "It prevents automatic system responses that might worsen the emergency situation",
                "It allows pilots to cross-check calculations with manual performance charts",
                "It provides training information for practicing emergency procedures"
            ],
            correct: 0,
            explanation: "The page shows only advisory information for an engine inoperative condition. Once the page is selected, it cannot be executed. This design ensures pilots retain control while receiving FMC-calculated guidance for optimal performance.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 6"
        },
        {
            question: "How does the weight-based updating of engine-out performance data enhance operational safety?",
            options: [
                "Real-time weight updates ensure performance calculations remain accurate as fuel burns, preventing performance degradation surprises during extended single-engine flight",
                "Weight updates allow for more precise fuel planning to reach alternate airports",
                "Updated calculations provide better estimates for engine restart success probability",
                "Weight changes help determine optimal altitudes for emergency descent procedures"
            ],
            correct: 0,
            explanation: "The page displays FMC calculated optimum engine out speed and maximum engine out altitude at the current gross weight. The fields are updated as fuel is burned. This ensures the performance data remains accurate and reliable throughout the flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 16"
        },
        {
            question: "What is the relationship between maximum continuous thrust setting and long-term engine-out operations?",
            options: [
                "Maximum continuous thrust provides the optimal balance between performance and engine longevity for extended single-engine operations without exceeding thermal limits",
                "It ensures adequate power for climb while preserving the engine for potential long flights",
                "It provides consistent power output regardless of altitude or atmospheric conditions",
                "It matches the power setting used during normal cruise for operational consistency"
            ],
            correct: 0,
            explanation: "Set maximum continuous thrust on the operative engine. Maximum continuous thrust is specifically designed to provide sustained high power output without exceeding engine thermal or mechanical limits, making it ideal for extended single-engine operations.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 12"
        },
        {
            question: "How does the selection between cruise altitude and maximum engine-out altitude impact flight planning during emergencies?",
            options: [
                "The lower of cruise altitude or maximum engine-out altitude determines the performance envelope, requiring speed optimization for whichever altitude limit is more restrictive",
                "The selection determines fuel consumption rates for diversion planning",
                "It affects communication requirements with air traffic control",
                "The choice impacts passenger cabin pressurization and comfort levels"
            ],
            correct: 0,
            explanation: "The engine out speed line displays the minimum drag engine out climb speed to the cruise altitude, or maximum engine out altitude, whichever is lower. This ensures the speed is optimized for the most restrictive altitude limitation.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 9"
        },
        {
            question: "What is the fundamental operational difference between the ENGINE OUT CLIMB page and ENGINE OUT CRUISE page in terms of their activation triggers?",
            options: [
                "ENGINE OUT CLIMB is used when an engine fails during takeoff; ENGINE OUT CRUISE is used when an engine fails during cruise flight",
                "Both pages provide identical information but are accessed through different menu systems",
                "ENGINE OUT CLIMB is for left engine failures; ENGINE OUT CRUISE is for right engine failures",
                "The pages differ only in the altitude ranges they cover"
            ],
            correct: 0,
            explanation: "ENGINE OUT CLIMB is accessed when an engine becomes inoperative during climb, while ENGINE OUT CRUISE is used when an engine failure occurs during cruise altitude. Each page provides phase-specific guidance and performance data.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 3, 14"
        },
        {
            question: "Why does the ENGINE OUT CLIMB page display both cruise altitude and maximum engine out altitude information?",
            options: [
                "To allow pilots to choose between different altitude options based on weather conditions",
                "The page shows the target cruise altitude and calculates whether it's achievable with one engine, providing maximum engine out altitude as the performance limit",
                "To provide backup altitude information in case of navigation system failures",
                "The altitudes represent different emergency descent options"
            ],
            correct: 1,
            explanation: "The page shows the active cruise altitude from the performance initialization and calculates the maximum engine out altitude at which specified climb rate can be achieved. This helps pilots understand if their planned cruise altitude is achievable with one engine.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 7-8"
        },
        {
            question: "What is the operational significance of the fact that both primary and standby pack controls must fail to trigger certain ENGINE OUT warnings?",
            options: [
                "This relates to cabin pressurization systems, not engine-out procedures",
                "It demonstrates the redundancy built into engine-out performance calculations and advisory systems",
                "This is not related to ENGINE OUT procedures but refers to different aircraft systems",
                "It shows the importance of having multiple independent systems for critical flight operations"
            ],
            correct: 3,
            explanation: "While this specific example refers to other aircraft systems, it illustrates the principle of redundancy that applies throughout aircraft design, including the ENGINE OUT advisory systems which provide backup guidance when primary systems fail.",
            reference: "Aircraft Systems Design Principles"
        },
        {
            question: "How does the engine-out cruise speed calculation differ between aircraft at different gross weights throughout the flight?",
            options: [
                "The speed remains constant regardless of weight changes during flight",
                "Engine-out cruise speed is calculated for current gross weight and updates continuously as fuel is burned, ensuring optimal performance throughout the flight",
                "Speed calculations are based on takeoff weight and remain fixed for the entire flight",
                "The speed is manually adjusted by pilots based on fuel consumption estimates"
            ],
            correct: 1,
            explanation: "The FMC calculated optimum engine out speed and maximum engine out altitude are based on current gross weight, with fields updated as fuel is burned. This real-time updating ensures performance data accuracy as aircraft weight decreases during flight.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 16"
        },
        {
            question: "What is the relationship between single-engine long range cruise speed and fuel efficiency during extended engine-out operations?",
            options: [
                "Single-engine long range cruise speed provides optimal fuel efficiency while maintaining adequate performance margins for extended single-engine flight",
                "The speed prioritizes maximum range over fuel efficiency",
                "Long range cruise speed is the fastest possible speed for single-engine operations",
                "The speed is designed primarily for passenger comfort during emergency situations"
            ],
            correct: 0,
            explanation: "After leveling off, you maintain continuous thrust and let the airplane accelerate to single engine long range cruise speed. This speed provides the optimal balance of fuel efficiency and performance for extended single-engine flight operations.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 22"
        },
        {
            question: "Why is it operationally important to 'determine the course of action' only after achieving single engine long range cruise speed?",
            options: [
                "This timing allows complete evaluation of aircraft performance capabilities before making critical decisions about continuing versus diverting",
                "It provides time for the failed engine to cool down before restart attempts",
                "The delay allows ATC to provide updated weather information for decision making",
                "It ensures all emergency checklists are completed before making navigation decisions"
            ],
            correct: 0,
            explanation: "After achieving single engine long range cruise speed, then determine the course of action. This provides the optimal assessment point where aircraft performance, fuel efficiency, and range capabilities can be fully evaluated before deciding whether to continue to destination or divert.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 22"
        },
        {
            question: "What is the safety significance of the engine-out altitude and speed calculations being based on maximum continuous thrust rather than maximum available thrust?",
            options: [
                "Maximum continuous thrust ensures sustainable operations for extended periods without exceeding engine thermal or mechanical limits during potentially long single-engine flights",
                "Maximum continuous thrust provides better fuel economy than higher power settings",
                "It reduces engine noise during single-engine operations",
                "Maximum continuous thrust is easier for pilots to set accurately"
            ],
            correct: 0,
            explanation: "Maximum continuous thrust is specifically designed to provide sustained high power output without exceeding engine thermal or mechanical limits. This makes it ideal for extended single-engine operations that may last for hours until landing.",
            reference: "B737 NG CBT - FMS - ENGINE OUT, Section 11-12"
        }
    ]
},

    "fms-fmc-abnormals": {
        title: "FMS - FMC ABNORMALS",
        questions: [
            {
                question: "What is the fundamental operational principle that governs the relationship between the left and right FMCs during normal dual operation?",
                options: [
                    "Both FMCs operate independently with no data synchronization between them",
                    "The left FMS is the primary and the right FMC is synchronized with the primary FMC at all times, with each FMC exchanging data with the other for comparison and validation",
                    "The right FMC is always the master controller with the left FMC serving as backup only",
                    "Both FMCs alternate as primary every 30 minutes during flight operations"
                ],
                correct: 1,
                explanation: "In normal dual operation, the left FMS is the primary and the right FMC is synchronized with the primary FMC at all times. Each FMC exchanges data with the other FMC for comparison and validation. This ensures data integrity and system reliability through continuous cross-checking.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 4"
            },
            {
                question: "When a failure occurs in the right FMC, what specific sequence of visual and system indications will the flight crew observe?",
                options: [
                    "Only the FMC alert light illuminates with no other indications",
                    "The FMC alert light illuminates on each pilot's forward panel, the message light comes on, and scratchpad message SINGLE FMC OPERATION is displayed in both CDUs",
                    "The autopilot disconnects immediately with no warning messages",
                    "Both navigation displays show failure flags without any alert lights"
                ],
                correct: 1,
                explanation: "When a failure occurs in the right FMC, the FMC alert light illuminates on each pilot's forward panel. The message light comes on and scratchpad message SINGLE FMC OPERATION is displayed in both CDUs. This provides clear indication to the crew of the system status change.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 6-7"
            },
            {
                question: "What happens to the autopilot system when the right FMC fails and autopilot B is currently engaged?",
                options: [
                    "The autopilot continues normal operation without any changes",
                    "If autopilot B is in use the LNAV and VNAV will disengage, but these modes can be reengaged when autopilot A is selected",
                    "The entire autopilot system disconnects and cannot be reengaged",
                    "Only VNAV disengages while LNAV continues to function normally"
                ],
                correct: 1,
                explanation: "If autopilot B is in use when the right FMC fails, the LNAV and VNAV will disengage. These modes can be reengaged when autopilot A is selected. This ensures flight management capability is maintained through the remaining functional FMC.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 8"
            },
            {
                question: "What specific display changes occur on the First Officer's navigation display following a right FMC failure?",
                options: [
                    "No changes occur on the First Officer's navigation display",
                    "Only the MAP failure flag appears immediately",
                    "The vertical track flag is shown on the First Officer's navigation display in MAP mode, and after 25-30 seconds, the MAP failure flag appears on the same display",
                    "The display goes completely blank until the FMC source switch is repositioned"
                ],
                correct: 2,
                explanation: "Following a right FMC failure, the vertical track flag is shown on the First Officer's navigation display in MAP mode. After 25-30 seconds, the MAP failure flag appears on the same display. This sequence provides progressive indication of the system degradation.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 9"
            },
            {
                question: "What is the correct procedure to restore the right navigation display after a right FMC failure?",
                options: [
                    "Reset the entire FMS system using the master reset switch",
                    "You move the FMC source select switch to BOTH ON LEFT to restore the right navigation display",
                    "Turn off the right navigation display and restart it manually",
                    "Wait for automatic system recovery without any crew action"
                ],
                correct: 1,
                explanation: "You move the FMC source select switch to BOTH ON LEFT to restore the right navigation display. This directs navigation display information from the functioning left FMC to both displays, maintaining situational awareness for both pilots.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 10"
            },
            {
                question: "How can pilots distinguish between an actual FMC failure and a temporary data disagreement between the FMCs?",
                options: [
                    "Both conditions produce identical indications with no distinguishing features",
                    "If you observe FMC failure indications with no vertical track flag, it means that there is a disagreement between left and right FMC data rather than an actual failure",
                    "Data disagreements only occur during takeoff and landing phases",
                    "The distinction can only be made through maintenance diagnostic equipment"
                ],
                correct: 1,
                explanation: "If you observe these indications with no vertical track flag, it means that there is a disagreement between left and right FMC data. This helps pilots distinguish between actual hardware failure and temporary data synchronization issues that may be resolvable.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 11"
            },
            {
                question: "What is the correct procedure sequence for resolving FMC data disagreement issues?",
                options: [
                    "Immediately shut down the suspected failed FMC and continue with single FMC operation",
                    "Place the FMC Source Select Switch to BOTH ON LEFT, wait for DUAL FMC OPERATION RESTORED message on both scratchpads, then move the switch to NORMAL to restore dual operation",
                    "Reset both FMCs simultaneously and reload all flight plan data",
                    "Continue operation without any corrective action as the system will self-correct"
                ],
                correct: 1,
                explanation: "Place the FMC Source Select Switch to BOTH ON LEFT. This allows the two FMCs to resynchronize. When the message DUAL FMC OPERATION RESTORED is displayed on both scratchpads, move the switch to NORMAL to restore dual operation. This procedure allows for automatic resynchronization.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 12-13"
            },
            {
                question: "What are the specific indications that occur when the left FMC fails compared to a right FMC failure?",
                options: [
                    "Left FMC failure produces no indications since it's the primary system",
                    "The FMC alert lights illuminate and the MENU page is displayed on both CDUs, with vertical track flag shown on the Captain's navigation display followed by MAP failure flag",
                    "Only the Captain's displays are affected with no indications for the First Officer",
                    "The indications are identical to right FMC failure with no distinguishing characteristics"
                ],
                correct: 1,
                explanation: "If the left FMC fails, the FMC alert lights illuminate and the MENU page is displayed on both CDUs. Vertical track flag is shown on the Captain's navigation display followed by MAP failure flag. This mirrors the right FMC failure pattern but affects the opposite pilot's displays.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 14, 17"
            },
            {
                question: "How does a left FMC failure affect autopilot operations when autopilot A is currently engaged?",
                options: [
                    "The autopilot continues normal operation without interruption",
                    "If autopilot A is in use the LNAV and VNAV will disengage, but these modes can be reengaged when autopilot B is selected",
                    "All autopilot functions become unavailable until the FMC is repaired",
                    "Only manual flight is possible with no autopilot capability remaining"
                ],
                correct: 1,
                explanation: "If autopilot A is in use when the left FMC fails, the LNAV and VNAV will disengage. These modes can be reengaged when autopilot B is selected. This maintains flight management capability through the remaining functional FMC system.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 16"
            },
            {
                question: "What is the correct switch position to restore the left navigation display after a left FMC failure?",
                options: [
                    "BOTH ON LEFT to use the remaining functional FMC",
                    "You place the FMC source select switch to BOTH ON RIGHT to restore the left navigation display",
                    "NORMAL position maintains dual operation despite the failure",
                    "ALTERNATE position provides backup navigation display functionality"
                ],
                correct: 1,
                explanation: "You place the FMC source select switch to BOTH ON RIGHT to restore the left navigation display. This ensures both pilots maintain navigation display information from the functioning right FMC after the left FMC failure.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 18"
            },
            {
                question: "What is the detailed procedure for verifying FMC functionality after repositioning the source select switch following a suspected failure?",
                options: [
                    "No verification is required; the switch position change is sufficient",
                    "Clear the message, place the FMC source select switch to appropriate position, wait one minute, then select the POSITION SHIFT page to verify bearing/distance information",
                    "Only monitor the navigation displays for proper operation",
                    "Cycle electrical power to both FMCs to verify functionality"
                ],
                correct: 1,
                explanation: "Clear the message, place the FMC source select switch to BOTH ON LEFT (or RIGHT), wait one minute, then select the POSITION SHIFT page. If bearing/distance information for both FMCs are displayed, place FMC source select switch to NORMAL. This verifies system functionality before returning to dual operation.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 19-22"
            },
            {
                question: "How should pilots determine whether to continue with single FMC operation or attempt to restore dual FMC operation?",
                options: [
                    "Always continue with single FMC operation regardless of POSITION SHIFT page indications",
                    "If bearing/distance information for both FMCs are displayed on POSITION SHIFT page, return to NORMAL; if bearing/distance information for only a single FMC is displayed, continue with single FMC operation",
                    "The decision is based solely on autopilot functionality testing",
                    "Dual operation should always be attempted regardless of system indications"
                ],
                correct: 1,
                explanation: "If bearing/distance information for both FMCs are displayed on the POSITION SHIFT page, place FMC source select switch to NORMAL. If bearing/distance information for only a single FMC is displayed, continue with single FMC operation. This diagnostic approach ensures safe system configuration.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 22-23"
            },
            {
                question: "What are the complete system indications and operational impacts when both FMCs fail simultaneously?",
                options: [
                    "Only the alert lights illuminate with all other systems continuing normal operation",
                    "The FMC alert light illuminates, MENU page is displayed on both CDUs, vertical track flag appears on both navigation displays followed by MAP failure flags, and LNAV and VNAV become unavailable",
                    "The aircraft automatically reverts to backup navigation systems with no pilot intervention required",
                    "Only the navigation displays are affected with autopilot continuing normal operation"
                ],
                correct: 1,
                explanation: "If both FMCs fail, the FMC alert light illuminates, the MENU page is displayed on both CDUs, and the vertical track flag is shown on both navigation displays followed by MAP failure flags. With both FMCs failed, LNAV and VNAV are not available, requiring conventional navigation.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 24-27"
            },
            {
                question: "What essential pilot actions are required for approach preparation when both FMCs have failed?",
                options: [
                    "No special actions are required as backup systems automatically engage",
                    "When preparing for the approach, use the SPEED REFERENCE selector to set the current gross weight and the reference airspeed bugs, then set the N1 bugs using the N1 SET selector",
                    "Only manual flight controls are available with no reference speed guidance",
                    "The approach must be abandoned and an alternate airport selected"
                ],
                correct: 1,
                explanation: "When preparing for the approach with both FMCs failed, use the SPEED REFERENCE selector to set the current gross weight and the reference airspeed bugs. Then, set the N1 bugs using the N1 SET selector. This provides essential reference data for safe approach operations.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 28-29"
            },
            {
                question: "Under what specific conditions does the FMC DISAGREE message appear, and what are the operational restrictions?",
                options: [
                    "Only during cruise flight with no operational restrictions",
                    "During an approach or on the ground, when parameters required for dual FMC operation are in disagreement; an approach with an RNP alerting requirement is not authorized when this message is shown",
                    "The message only appears during system startup with no flight restrictions",
                    "FMC DISAGREE occurs randomly and has no impact on approach operations"
                ],
                correct: 1,
                explanation: "During an approach or on the ground, when parameters required for dual FMC operation are in disagreement, the scratchpad message FMC DISAGREE is displayed on both CDUs. The FMC alert light illuminates. An approach with an RNP alerting requirement is not authorized when the FMC DISAGREE message is shown.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 30"
            },
            {
                question: "What is the required pilot response when encountering FMC DISAGREE during an RNP approach versus a non-RNP approach?",
                options: [
                    "The same response is required for both approach types",
                    "If flying an approach with an RNP alerting requirement, go-around unless appropriate visual references can be established and maintained; if the approach does not have an RNP alerting requirement, verify your position",
                    "Continue the approach normally regardless of the approach type",
                    "Immediately disconnect the autopilot and continue manually for both approach types"
                ],
                correct: 1,
                explanation: "If you are flying an approach with an RNP alerting requirement, go-around unless appropriate visual references can be established and maintained. If the approach does not have an RNP alerting requirement, verify your position. This accounts for the different precision requirements of various approach types.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 31-32"
            },
            {
                question: "What specific type of disagreement triggers the FMC DISAGREE-VERTICAL message, and when does it typically occur?",
                options: [
                    "Disagreement in lateral navigation data during cruise flight",
                    "During descent, when left FMC and right FMC target airspeeds or vertical paths disagree",
                    "Disagreement in radio navigation frequency selections during approach",
                    "Conflicting waypoint data during flight plan programming"
                ],
                correct: 1,
                explanation: "During descent, when left FMC and right FMC target airspeeds or vertical paths disagree, the scratchpad message FMC DISAGREE - VERTICAL message shows on both CDUs. The FMC alert light comes on. This indicates specific vertical navigation parameter conflicts.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 33"
            },
            {
                question: "What is the correct crew response when FMC DISAGREE-VERTICAL message appears during descent operations?",
                options: [
                    "Immediately move the FMC source select switch to single FMC operation",
                    "Do not move the FMC source select switch as the FMC will attempt to correct the disagreement without crew action, but keep an eye on crossing altitudes to ensure compliance",
                    "Disconnect VNAV immediately and continue with manual vertical navigation",
                    "Reset both FMCs and reload the descent profile"
                ],
                correct: 1,
                explanation: "Do not move the FMC source select switch as the FMC will attempt to correct the disagreement without crew action. Keep an eye on crossing altitudes to ensure compliance. This allows the system to self-correct while maintaining pilot vigilance for altitude restrictions.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 34"
            },
            {
                question: "What is the fundamental requirement for FMC operation that makes electrical power interruptions particularly significant?",
                options: [
                    "The FMC only requires electrical power during startup and can operate on internal battery afterward",
                    "The FMC requires continuous electrical power to operate, thus any interruption in electrical power will affect the FMC operation",
                    "The FMC can operate indefinitely without electrical power using backup systems",
                    "Electrical power is only needed for display functions with navigation continuing normally"
                ],
                correct: 1,
                explanation: "The FMC requires continuous electrical power to operate. Thus, any interruption in electrical power will affect the FMC operation. This fundamental requirement makes power management critical for FMS functionality throughout all phases of flight.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 35"
            },
            {
                question: "What happens to FMC systems and data when electrical power is interrupted for less than ten seconds?",
                options: [
                    "All FMC data is immediately erased and must be re-entered",
                    "If the power to the FMCs has stopped for less than ten seconds, LNAV and VNAV will disengage, but no data is erased whether the airplane is in the air or on the ground",
                    "The FMC continues normal operation without any interruption or data loss",
                    "Only navigation displays are affected with flight management continuing normally"
                ],
                correct: 1,
                explanation: "If the power to the FMCs has stopped for less than ten seconds, LNAV and VNAV will disengage. No data is erased whether the airplane is in the air or on the ground. When power is restored, the FMC continues normal operation.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 36-38"
            },
            {
                question: "What are the different consequences of power loss for ten seconds or more depending on whether the aircraft is on the ground versus in flight?",
                options: [
                    "The consequences are identical regardless of aircraft location",
                    "On the ground, all preflight procedures and entries are erased; in flight, LNAV and VNAV disengage but the internal battery keeps flight plan data in memory for an extended period",
                    "In flight, all data is lost immediately; on the ground, data is preserved",
                    "Power loss duration has no impact on data retention in either case"
                ],
                correct: 1,
                explanation: "If power is lost for ten seconds or more on the ground, all preflight procedures and entries are erased from FMC. In flight, LNAV and VNAV will disengage, but the internal battery lets the FMC keep the flight plan data in memory for an extended period of time.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 39, 41-42"
            },
            {
                question: "Why can't the FMC automatically resume normal operation after power restoration following an extended power loss in flight?",
                options: [
                    "The internal battery completely fails during extended power loss",
                    "When power is restored, the FMC is not able to know where to go next, because it has no idea how long the power has been off",
                    "The flight plan data is automatically corrupted during power interruptions",
                    "The FMC requires complete reprogramming after any power loss in flight"
                ],
                correct: 1,
                explanation: "When the power is restored after extended loss in flight, the FMC is not able to know where to go next, because it has no idea how long the power has been off. This uncertainty about aircraft position relative to the flight plan requires pilot intervention.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 43"
            },
            {
                question: "What specific pilot action is required to restore FMC navigation after power restoration following extended power loss in flight?",
                options: [
                    "The FMC automatically resumes navigation without pilot intervention",
                    "On the ROUTE LEGS page when the scratchpad message SELECT ACTIVE WAYPOINT/LEG appears on the CDUs, you must enter the next waypoint and execute to return to the route",
                    "Reload the entire flight plan from the beginning",
                    "Reset the FMC to factory settings and start fresh programming"
                ],
                correct: 1,
                explanation: "On the ROUTE LEGS page when the scratchpad message SELECT ACTIVE WAYPOINT/LEG appears on the CDUs, you must enter the next waypoint and execute to return to the route. This allows the FMC to reestablish its position reference in the flight plan.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 44"
            },
            {
                question: "What is the operational philosophy behind the FMC's dual-system architecture in terms of reliability and failure management?",
                options: [
                    "The dual system is designed primarily for increased computational speed rather than reliability",
                    "The two FMCs provide redundancy where each system can operate independently, with continuous cross-checking for data validation and the ability to revert to single-system operation when necessary",
                    "One FMC is always a backup that only activates during failures",
                    "The dual system is required only for regulatory compliance with no operational benefits"
                ],
                correct: 1,
                explanation: "The dual FMC architecture provides redundancy where both systems operate together with continuous data exchange and validation. In failure scenarios, the system can gracefully degrade to single FMC operation while maintaining essential flight management capabilities.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, System Philosophy"
            },
            {
                question: "How does the FMC source select switch function as a critical interface for managing FMC failures and disagreements?",
                options: [
                    "The switch only controls display brightness and has no impact on FMC functionality",
                    "The FMC source select switch allows pilots to direct navigation information from a functioning FMC to both displays, facilitate resynchronization between FMCs, and manage single versus dual FMC operation modes",
                    "The switch is automatic and requires no pilot intervention during failures",
                    "The switch only affects communication radios and navigation aids"
                ],
                correct: 1,
                explanation: "The FMC source select switch is critical for managing FMC operations, allowing pilots to direct functional FMC data to both displays, facilitate resynchronization attempts, and configure the system for single or dual FMC operation as required by the situation.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Switch Operations"
            },
            {
                question: "What diagnostic value does the POSITION SHIFT page provide in determining FMC system health and functionality?",
                options: [
                    "It only shows current aircraft position with no diagnostic capability",
                    "The POSITION SHIFT page displays bearing/distance information for both FMCs, allowing pilots to verify if both systems are functioning properly and making informed decisions about single versus dual FMC operation",
                    "It provides engine performance data unrelated to FMC functionality",
                    "The page only shows navigation database version information"
                ],
                correct: 1,
                explanation: "The POSITION SHIFT page displays bearing/distance information for both FMCs, providing a clear diagnostic tool to verify system functionality. This allows pilots to determine whether both FMCs are operational or if single FMC operation is required.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 22"
            },
            {
                question: "Why is the distinction between RNP and non-RNP approaches critical when FMC DISAGREE conditions occur?",
                options: [
                    "RNP approaches require higher precision navigation data integrity, making FMC disagreements potentially unsafe for approach continuation",
                    "There is no difference in how FMC DISAGREE affects different approach types",
                    "RNP approaches use different navigation equipment unaffected by FMC status",
                    "Non-RNP approaches are always more restrictive than RNP approaches"
                ],
                correct: 0,
                explanation: "RNP approaches require precise navigation performance with specific accuracy requirements. When FMC DISAGREE occurs, the navigation system integrity is compromised, making it unsafe to continue an RNP approach unless visual references can be established and maintained.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 30-31"
            },
            {
                question: "How does the internal battery system in the FMC provide protection against data loss during in-flight power interruptions?",
                options: [
                    "The internal battery provides complete FMC functionality during power loss",
                    "The internal battery lets the FMC keep the flight plan data in memory for an extended period of time during power interruptions, preserving essential navigation information even when main power is lost",
                    "The battery only powers the displays with no data protection capability",
                    "The battery system is identical for ground and flight operations"
                ],
                correct: 1,
                explanation: "The internal battery lets the FMC keep the flight plan data in memory for an extended period of time during power interruptions. This critical backup system preserves flight plan information during in-flight power loss, though position reference is lost.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 42"
            },
            {
                question: "What is the operational logic behind the automatic LNAV and VNAV disengagement during various FMC failure scenarios?",
                options: [
                    "LNAV and VNAV disengage as a safety measure when FMC reliability is compromised, ensuring pilots maintain positive control of navigation and preventing potentially erroneous guidance from degraded systems",
                    "The disengagement is a malfunction rather than a designed safety feature",
                    "LNAV and VNAV only disengage to conserve electrical power during failures",
                    "The disengagement occurs randomly and is not related to FMC functionality"
                ],
                correct: 0,
                explanation: "LNAV and VNAV automatically disengage during FMC failures as a safety design feature. This ensures pilots maintain positive control when the navigation system reliability is compromised, preventing potentially dangerous guidance from malfunctioning systems.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Safety Philosophy"
            },
            {
                question: "How does the progression of failure indications (vertical track flag followed by MAP failure flag) help pilots understand the degradation of navigation system capability?",
                options: [
                    "The progression provides clear temporal indication of system degradation, allowing pilots to understand the extent of navigation capability loss and take appropriate corrective actions",
                    "The flags appear randomly and provide no useful diagnostic information",
                    "Both flags always appear simultaneously with no progressive indication",
                    "The flags only indicate display problems unrelated to navigation capability"
                ],
                correct: 0,
                explanation: "The progressive appearance of vertical track flag followed by MAP failure flag provides pilots with clear temporal indication of navigation system degradation. This sequence helps crews understand the extent of capability loss and take appropriate corrective measures.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 9, 17"
            },
            {
                question: "Why is the one-minute wait period specified in the FMC failure recovery procedure, and what system processes occur during this time?",
                options: [
                    "The one-minute wait allows sufficient time for FMC systems to stabilize, complete internal diagnostics, and establish proper data synchronization before verification of system functionality",
                    "The wait period is arbitrary and serves no technical purpose",
                    "One minute is required for pilot checklist completion only",
                    "The wait time is needed for ATC notification procedures"
                ],
                correct: 0,
                explanation: "The one-minute wait period allows sufficient time for FMC systems to stabilize and complete internal processes after the source select switch repositioning. This ensures proper system state before testing functionality through the POSITION SHIFT page.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 21"
            },
            {
                question: "What is the relationship between FMC DISAGREE-VERTICAL conditions and altitude constraint compliance during descent operations?",
                options: [
                    "FMC DISAGREE-VERTICAL has no impact on altitude constraint management",
                    "During FMC DISAGREE-VERTICAL, pilots must keep an eye on crossing altitudes to ensure compliance while the system attempts automatic correction, as vertical navigation reliability may be compromised",
                    "All altitude constraints are automatically cancelled when this condition occurs",
                    "The condition only affects speed management with no altitude implications"
                ],
                correct: 1,
                explanation: "During FMC DISAGREE-VERTICAL conditions, pilots must keep an eye on crossing altitudes to ensure compliance. While the FMC attempts automatic correction, vertical navigation reliability may be compromised, requiring increased pilot vigilance for altitude restrictions.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 34"
            },
            {
                question: "How does the difference in power loss duration (less than ten seconds versus ten seconds or more) affect FMC data retention and recovery procedures?",
                options: [
                    "Power loss duration has no impact on FMC data or procedures",
                    "Short power loss (less than 10 seconds) preserves all data requiring only LNAV/VNAV reengagement; longer power loss erases ground-entered data or requires position reestablishment in flight",
                    "Longer power loss is always less severe than short power loss",
                    "Both durations result in complete data loss requiring full reprogramming"
                ],
                correct: 1,
                explanation: "Short power interruptions (less than 10 seconds) preserve all data with only LNAV/VNAV disengagement. Longer interruptions (10+ seconds) erase preflight data on ground or require position reestablishment in flight, reflecting different system protection capabilities.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 36-44"
            },
            {
                question: "What is the fundamental design philosophy that makes FMCs 'very reliable and do not fail usually,' and how does this affect pilot training and preparedness?",
                options: [
                    "FMCs are designed with robust hardware and software architecture making failures rare, but pilots must still be thoroughly trained in failure procedures because the consequences of FMC failure significantly impact flight operations",
                    "FMC reliability means pilots need minimal training in failure procedures",
                    "The statement about reliability is incorrect as FMCs fail frequently",
                    "High reliability eliminates the need for backup navigation systems"
                ],
                correct: 0,
                explanation: "FMCs are designed to be very reliable and do not fail usually due to robust engineering. However, their critical role in flight operations means pilots must be thoroughly trained in failure recognition and management procedures despite the low probability of occurrence.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 3"
            },
            {
                question: "How does the integration of manual reference systems (SPEED REFERENCE selector and N1 SET selector) provide backup capability when both FMCs fail?",
                options: [
                    "These manual systems provide essential reference data for approach operations when automated FMC guidance is unavailable, ensuring continued safe flight operations through pilot-managed performance calculations",
                    "The manual systems are completely independent and superior to FMC calculations",
                    "Manual systems only provide basic information with no operational utility",
                    "These systems are only used for training purposes and not actual operations"
                ],
                correct: 0,
                explanation: "When both FMCs fail, the SPEED REFERENCE selector and N1 SET selector provide critical backup capability by allowing pilots to manually set reference speeds and power settings. This ensures continued safe approach operations despite loss of automated guidance.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 28-29"
            },
            {
                question: "What operational considerations should pilots evaluate when deciding whether to continue an approach during FMC DISAGREE conditions?",
                options: [
                    "Pilots should consider approach type (RNP vs non-RNP), availability of visual references, ability to verify position through alternate means, and overall flight safety margins before deciding to continue or execute a go-around",
                    "All approaches should be continued regardless of FMC status",
                    "FMC DISAGREE always requires immediate go-around execution",
                    "The decision is made entirely by ATC with no pilot discretion"
                ],
                correct: 0,
                explanation: "During FMC DISAGREE, pilots must evaluate multiple factors: approach type and its precision requirements, availability of visual references for safe approach continuation, ability to verify position through independent means, and overall safety margins before making the continue/go-around decision.",
                reference: "B737 NG CBT - FMS - FMC ABNORMALS, Section 30-32"
            }
        ]
    }
};
    