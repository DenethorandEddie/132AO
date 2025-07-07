// FMS Navigation Management and Monitoring Quiz Module
const fmsNavigationManagement = {
    title: "FMS - Navigation Management and Monitoring",
    questions: [
        {
            question: "What are the three types of navigation databases that provide navigation data to the FMC for automatic airplane navigation control?",
            options: [
                "Primary, secondary, and backup navigation databases",
                "Permanent, supplemental, and temporary navigation databases",
                "Static, dynamic, and conditional navigation databases", 
                "Internal, external, and auxiliary navigation databases"
            ],
            correct: 1,
            explanation: "The navigation data used by the FMC is provided by three types of databases: permanent navigation database (periodically updated), supplemental navigation database (stored until cleared by flight crew), and temporary navigation database (automatically erased at flight completion).",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 3-6"
        },
        {
            question: "Under what circumstances is data in the temporary navigation database automatically erased?",
            options: [
                "When the aircraft electrical power is turned off",
                "At flight completion",
                "Every 28 days during database updates",
                "When the supplemental database reaches capacity"
            ],
            correct: 1,
            explanation: "The data stored in the temporary database is automatically erased at flight completion, unlike the supplemental navigation database which is stored until cleared by the flight crew.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 5"
        },
        {
            question: "How are waypoints categorized in the navigation database, and which category cannot be created by the flight crew?",
            options: [
                "Waypoints, navaids, airports, and runways - flight crew cannot create navaids",
                "Waypoints, navaids, airports, and runways - flight crew cannot create runways",
                "Primary, secondary, tertiary, and emergency - flight crew cannot create emergency waypoints",
                "Geographical, procedural, conditional, and fixed - flight crew cannot create fixed waypoints"
            ],
            correct: 1,
            explanation: "Waypoints are stored in the navigation database under four categories: waypoints, navaids, airports, and runways. Flight crew cannot create waypoints in the runway category as they are only stored in the permanent navigation database.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 8"
        },
        {
            question: "What is the fundamental difference between geographically fixed waypoints and conditional waypoints?",
            options: [
                "Fixed waypoints use GPS coordinates, conditional waypoints use VOR/DME references",
                "Fixed waypoints have unchanging geographical positions, conditional waypoints change location with flight conditions",
                "Fixed waypoints are in the permanent database, conditional waypoints are crew-created",
                "Fixed waypoints are mandatory for the route, conditional waypoints are optional"
            ],
            correct: 1,
            explanation: "A geographically fixed waypoint has a geographical position that does not change, while conditional waypoints are not geographically fixed and their location changes with flight conditions including wind, true airspeed, thrust available, and airplane pitch.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 10-18"
        },
        {
            question: "What is the maximum number of characters allowed for waypoint identifiers, and what happens when multiple waypoints share the same identifier?",
            options: [
                "Maximum 6 characters; system automatically selects the closest waypoint",
                "Maximum 5 characters; CDU changes to SELECT DESIRED page for proper waypoint selection",
                "Maximum 4 characters; system displays an error message",
                "Maximum 7 characters; system uses the first waypoint found in the database"
            ],
            correct: 1,
            explanation: "Waypoint identifiers are limited to a maximum of five characters. When you attempt to enter a duplicated identifier, the CDU page changes to SELECT DESIRED to let you select the proper waypoint, displaying latitude, longitude, category, frequency, and name information.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 11-17"
        },
        {
            question: "How are conditional waypoints displayed on the CDU, and can they be entered manually by the flight crew?",
            options: [
                "Displayed in brackets [ ], can be entered manually on any navigation page",
                "Displayed in parentheses ( ), cannot be entered manually",
                "Displayed in capital letters, can be entered only through ROUTE page",
                "Displayed with asterisks *, cannot be modified once created"
            ],
            correct: 1,
            explanation: "Conditional waypoints are displayed on the CDU in parentheses and cannot be entered manually. They are automatically entered into the route when you select a procedure on DEPARTURES or ARRIVALS pages.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 19-20"
        },
        {
            question: "What are the four types of conditional waypoints that can be automatically created during procedure selection?",
            options: [
                "Altitude passing, VOR radial/DME intercept, course intercept, and heading vector",
                "Departure, enroute, arrival, and approach conditional waypoints",
                "Geographic, magnetic, true, and grid navigation conditional waypoints",
                "Primary, alternate, emergency, and backup conditional waypoints"
            ],
            correct: 0,
            explanation: "The four types of conditional waypoints are: passing through an altitude, flying a heading to a VOR radial or DME distance, intercepting a course, and heading vector to a course or fix. Each type changes location based on specific flight conditions.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 21"
        },
        {
            question: "In a conditional waypoint for altitude passing constraint requiring heading 344° until at or above 812 feet, what determines the actual geographical location of this waypoint?",
            options: [
                "The waypoint location is fixed at the point where 812 feet altitude is normally reached",
                "The location changes based on current flight conditions including wind, airspeed, and aircraft performance",
                "The location is determined by the departure runway threshold coordinates",
                "The location is calculated based on standard atmospheric conditions only"
            ],
            correct: 1,
            explanation: "Conditional waypoints' locations are not fixed and change with flight conditions. As wind, true airspeed, thrust available, and airplane pitch change, the location where the altitude constraint will be satisfied also changes.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 22-23"
        },
        {
            question: "When VECTOR is the active leg and LNAV is not engaged, what specific condition triggers automatic sequencing to the next waypoint?",
            options: [
                "When the aircraft reaches the programmed altitude",
                "When within 3 nautical miles of the next leg",
                "When the heading has been maintained for more than 5 minutes",
                "When the flight crew selects the next waypoint manually"
            ],
            correct: 1,
            explanation: "When VECTOR is the active leg and LNAV is not engaged, the FMC automatically sequences to the next waypoint when within 3 nautical miles of the next leg. If LNAV is engaged, manual execution is required.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 28"
        },
        {
            question: "What information is displayed on the REFERENCE NAVIGATION DATA page when a waypoint identifier that exists in the database is entered?",
            options: [
                "Only latitude and longitude coordinates",
                "Latitude, longitude, and automatically computed magnetic variation",
                "Frequency, elevation, and classification data only",
                "Route information and distance to destination"
            ],
            correct: 1,
            explanation: "When a waypoint identifier is entered on the REFERENCE NAVIGATION DATA page, it displays the waypoint latitude and longitude, and shows the waypoint magnetic variation that is automatically computed based on latitude and longitude.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 33"
        },
        {
            question: "For crew-created waypoints, what additional information may be displayed beyond the basic latitude and longitude data?",
            options: [
                "Fuel consumption data and time estimates",
                "Reference identifier and radial/distance from reference point",
                "Weather information and wind data",
                "Communication frequencies and airport services"
            ],
            correct: 1,
            explanation: "For crew-created waypoints, additional data may include the reference identifier (the identifier of the point where the created waypoint is referenced to) and the radial/distance line showing bearing and distance from the reference point.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 34-35"
        },
        {
            question: "When entering a navaid identifier on the REFERENCE NAVIGATION DATA page, what comprehensive information is displayed?",
            options: [
                "Only frequency and identifier information",
                "Latitude, longitude, magnetic variation, frequency, classification, and elevation",
                "Range information and signal strength data",
                "Approach procedures and runway information"
            ],
            correct: 1,
            explanation: "When a navaid identifier is entered, the page shows latitude, longitude, magnetic variation, frequency, classification, and elevation of the navaid, providing comprehensive reference information.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 36-37"
        },
        {
            question: "What specific runway data is displayed when a runway identifier is entered on the airport data display, and what is unique about runway data creation?",
            options: [
                "Only runway heading and length; runways can be created by flight crew",
                "Threshold elevation and length in feet and meters; runways cannot be defined by flight crew",
                "Surface type and lighting information; runways are stored in temporary database",
                "Approach frequencies and ILS data; runways are updated monthly"
            ],
            correct: 1,
            explanation: "The runway display shows runway threshold elevation in feet and runway length in feet and meters. Runways cannot be defined by the flight crew as they are stored only in the permanent navigation database.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 39-40"
        },
        {
            question: "What does the SUMMARY prompt on the REFERENCE NAVIGATION DATA display provide access to?",
            options: [
                "A summary of all navigation errors and warnings",
                "Pages showing data contained in temporary and supplemental databases",
                "Flight plan progress and fuel consumption summary",
                "Weather information and NOTAM summaries"
            ],
            correct: 1,
            explanation: "The SUMMARY prompt on the REFERENCE NAVIGATION DATA display selects the pages that show the data contained in temporary and supplemental databases. If there is no temporary or supplemental data, this data field is blank.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 42"
        },
        {
            question: "What is required to make the supplemental navigation database valid, and when can this database be accessed?",
            options: [
                "A crew signature; can be accessed anytime during flight",
                "An effectivity date entry; can be accessed only on the ground",
                "Maintenance validation; can be accessed only at cruise altitude",
                "Company authorization code; can be accessed only during preflight"
            ],
            correct: 1,
            explanation: "For the supplemental navigation database to be valid, you must enter an effectivity date. The supplemental navigation database can be accessed only on the ground through the INITIALIZATION/REFERENCE INDEX page.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 45-47"
        },
        {
            question: "What are the two methods available for deleting data from the supplemental navigation database?",
            options: [
                "Automatic deletion at flight completion or manual deletion during flight",
                "Individual data deletion or entire database deletion using DELETE ALL SUPPLEMENTAL DATA",
                "Crew deletion or maintenance deletion with special codes",
                "Temporary deletion or permanent deletion with supervisor approval"
            ],
            correct: 1,
            explanation: "Data may be deleted from the supplemental database either individually (by entering identifier and using DELETE key) or entirely using the DELETE ALL SUPPLEMENTAL DATA prompt.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 49-51"
        },
        {
            question: "Where are waypoints created on REFERENCE NAVIGATION DATA pages automatically stored, and how long do they remain available?",
            options: [
                "Permanent database; remain available until next database update",
                "Temporary navigation database; available for one flight only",
                "Supplemental database; remain until manually deleted",
                "Active route memory; remain until route is changed"
            ],
            correct: 1,
            explanation: "Entries defined on the REFERENCE NAVIGATION DATA pages are automatically stored in the temporary navigation database for one flight only, while entries on SUPPLEMENTAL NAVIGATION DATA pages are stored until manually deleted.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 56"
        },
        {
            question: "What are the specific formatting rules that must be followed when entering latitude and longitude for created waypoints?",
            options: [
                "Use spaces between latitude and longitude, include leading zeros optionally",
                "Do not insert space or slash between lat/long, do not omit leading zeros, enter all digits and decimal points unless full degrees",
                "Always use decimal format with exactly 6 decimal places",
                "Use standard aviation format with degrees, minutes, and seconds separated by slashes"
            ],
            correct: 1,
            explanation: "When entering latitude and longitude: do not insert a space or slash between latitude and longitude, do not omit leading zeros, enter all digits and decimal points unless the latitude and longitude are full degrees.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 60"
        },
        {
            question: "How are Place Bearing/Distance waypoints named, and what is the requirement for the reference point?",
            options: [
                "Named by crew preference; reference point can be any geographical location",
                "Named by first three characters of reference identifier plus two-digit sequence number; reference must be in database",
                "Named automatically by the FMC; reference point must be a navaid only",
                "Named using airport codes; reference point must be within 100 nautical miles"
            ],
            correct: 1,
            explanation: "Place Bearing/Distance waypoints are named by the first three characters of the reference identifier followed by a two-digit sequence number. The reference point must be any waypoint whose identifier is already stored in permanent, supplemental, or temporary database.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 65-66"
        },
        {
            question: "What is the mathematical method used by the FMC to determine the airplane's present position from multiple navigation sensors?",
            options: [
                "Simple averaging of all available position data",
                "Special mathematical filtering method to blend sensor data into single FMC position",
                "Weighted calculation based on signal strength only",
                "Sequential selection of most accurate sensor"
            ],
            correct: 1,
            explanation: "The FMC determines present position from IRS, GPS, and navigation radios. The position data from these sensors are blended into a single position using a special mathematical filtering method, creating the computed FMC position.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 71"
        },
        {
            question: "How do the dual FMCs share position information, and what determines the final FMC position calculation?",
            options: [
                "FMCs alternate as primary every 30 minutes; position is from primary FMC only",
                "Each FMC sends its position to the other with confidence factor; final position combines both weighted by confidence factors",
                "FMCs independently calculate position; crew selects which to use",
                "Both FMCs must agree exactly; any disagreement triggers manual navigation"
            ],
            correct: 1,
            explanation: "Each FMC sends its FMC position to the other FMC with a confidence factor. In each FMC, the final FMC position is calculated from a combination of these two positions weighted from their respective confidence factors.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 72"
        },
        {
            question: "What is the priority order of navigation sensors used by the FMC to calculate and update position?",
            options: [
                "GPS, then IRS, then DME, then VOR, then localizer",
                "IRS and GPS, then IRS and two or more DMEs, then IRS and DME/VOR, then IRS and DME/localizer, then IRS only",
                "DME pairs, then GPS, then VOR/DME, then IRS, then localizer",
                "GPS only, with IRS as backup when GPS is unavailable"
            ],
            correct: 1,
            explanation: "Navigation sensors are used in this priority order: IRS and GPS, IRS and two or more DMEs, IRS and a DME collocated with VOR, IRS and a DME collocated with localizer, IRS and localizer, and only IRS.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 73"
        },
        {
            question: "When using DME pairs for position determination, what criteria does the primary FMC use to select DME stations?",
            options: [
                "Closest DME stations regardless of geometry",
                "DME stations with the best range and geometry to give most accurate position estimate",
                "DME stations with strongest signal strength",
                "DME stations specified in the flight plan route"
            ],
            correct: 1,
            explanation: "The primary FMC selects the DME stations to be tuned by both FMCs. It selects the DME stations that have the best range and geometry to give the most accurate estimate of position.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 76"
        },
        {
            question: "What correction does the FMC apply to DME distance measurements, and why is this correction necessary?",
            options: [
                "Magnetic variation correction for true bearing calculation",
                "Slant range distance correction for airplane altitude",
                "Temperature correction for signal propagation speed",
                "Equipment delay correction for processing time"
            ],
            correct: 1,
            explanation: "With all radio updates, the FMC will correct the DME slant range distance for the airplane altitude, ensuring accurate horizontal distance calculation rather than the direct line-of-sight slant range.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 77"
        },
        {
            question: "What message appears on the CDU scratchpad when GPS and radio navigation data become unavailable, forcing the FMC to use only IRS data?",
            options: [
                "NAVIGATION DEGRADED",
                "IRS NAVIGATION ONLY",
                "RADIO NAVIGATION LOST",
                "GPS UNAVAILABLE"
            ],
            correct: 1,
            explanation: "If GPS data and radio data are not available or become invalid, the FMC uses IRS data to compute present position. In this case, the scratchpad message IRS NAVIGATION ONLY appears on the CDU.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 78"
        },
        {
            question: "During localizer approach in the airport terminal area, what specific navigation inputs does the FMC use to update position?",
            options: [
                "GPS data and IRS position only",
                "Localizer deviation and DME distance",
                "VOR bearing and DME distance",
                "ILS glideslope and localizer signals"
            ],
            correct: 1,
            explanation: "In an airport terminal area, when the airplane is on a localizer approach, the FMC uses localizer deviation and DME distance to update the FMC position.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 79"
        },
        {
            question: "What navigation data does the FMC use for position calculation during extended ground operations?",
            options: [
                "IRS data only as radio position is not reliable on ground",
                "GPS data provides accurate FMC position during ground operations",
                "DME and VOR data for precise ground positioning",
                "Manual position updates from ground control"
            ],
            correct: 1,
            explanation: "On the ground, the FMC uses GPS data to calculate the current position, providing accurate FMC position during extended ground operations. If GPS data is not available, the FMC calculates position based on IRS data.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 80-81"
        },
        {
            question: "What does an ANP value of 4.00 represent in terms of navigation accuracy confidence?",
            options: [
                "The aircraft is exactly 4.00 nautical miles from the calculated position",
                "The FMC is 95% sure the actual position lies within a 4 nautical mile radius circle around calculated position",
                "The navigation error will not exceed 4.00 nautical miles under any circumstances",
                "The FMC position is accurate to within 4.00 meters"
            ],
            correct: 1,
            explanation: "ANP 4.00 means the FMC is 95% sure that the airplane's actual position lies within a circle with a radius of 4 nautical miles around the calculated position. Lower ANP values represent higher accuracy.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 83-84"
        },
        {
            question: "How is Required Navigation Performance (RNP) defined, and what is its relationship to ANP?",
            options: [
                "RNP is the minimum navigation accuracy required; ANP must not exceed RNP value",
                "RNP is the maximum allowable error within defined airspace; ANP should not exceed RNP",
                "RNP is the actual performance achieved; ANP is the required minimum standard",
                "RNP and ANP are identical measurements using different calculation methods"
            ],
            correct: 1,
            explanation: "Required Navigation Performance (RNP) is the maximum allowable error of FMC position estimate within a defined airspace. Actual navigation performance (ANP) should not exceed the RNP value.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 85-86"
        },
        {
            question: "What are the three sources the FMC can use to determine the displayed RNP value for route segments?",
            options: [
                "Pilot input, ATC clearance, or company policy RNP values",
                "Default RNP, navigation database RNP values, or manually entered RNP",
                "Oceanic, domestic, or international RNP standards",
                "GPS-derived, IRS-calculated, or DME-based RNP values"
            ],
            correct: 1,
            explanation: "The FMC uses one of the following as the displayed RNP: default RNP values (if no database or manual entry), navigation database RNP values (assigned for certain segments), or manually entered RNP values.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 88-90"
        },
        {
            question: "What message is displayed when the actual navigation performance exceeds the required navigation performance, and what action is required?",
            options: [
                "NAVIGATION ACCURACY DEGRADED; continue with caution",
                "UNABLE REQUIRED NAVIGATION PERFORMANCE RNP; procedure must be aborted",
                "RNP EXCEEDED; request ATC guidance",
                "POSITION ACCURACY QUESTIONABLE; verify position manually"
            ],
            correct: 1,
            explanation: "When ANP exceeds RNP, an UNABLE REQUIRED NAVIGATION PERFORMANCE RNP message is displayed. This indicates that the FMC position does not meet required accuracy, so the procedure must be aborted.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 91"
        },
        {
            question: "What specific position information is displayed on the POSITION REFERENCE page?",
            options: [
                "Only FMC calculated position and GPS position",
                "Each IRS calculated position, GPS position, navigation radio position, and FMC calculated position",
                "Current position, destination position, and alternate airport position",
                "Previous position, current position, and predicted position"
            ],
            correct: 1,
            explanation: "The position reference page shows each IRS calculated airplane position, the GPS position, the navigation radio position, and the FMC calculated position. Note that radio position is always blank when the airplane is on the ground.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 94"
        },
        {
            question: "What does the POSITION SHIFT page display in its center section with parentheses, and what do the letter and number indicators mean?",
            options: [
                "Current wind data; letters indicate direction, numbers indicate speed",
                "Active position references used in FMC position calculation; L/R indicates left/right GPS or IRS, number 2 shows dual system use",
                "Navigation radio frequencies; letters indicate band, numbers indicate channel",
                "Waypoint distances; letters indicate bearing, numbers indicate distance"
            ],
            correct: 1,
            explanation: "The data with parentheses in the center shows active position references used in FMC position calculation. Letter L or R indicates left or right GPS or IRS being used; number 2 shows both IRSs or GPSs are used in calculation.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 98-99"
        },
        {
            question: "During flight, what capability does the POSITION SHIFT page provide for FMC position management?",
            options: [
                "It allows viewing position data only without modification capability",
                "It lets you update the FMC calculated position to one of the positions shown on the page",
                "It provides automatic position correction based on GPS data",
                "It displays historical position data for navigation review"
            ],
            correct: 1,
            explanation: "In flight, the POSITION SHIFT page lets you update the FMC calculated position to one of the positions shown on the page. The process involves selecting the desired position, which highlights the line and illuminates the execute light.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 101-104"
        },
        {
            question: "On the NAVIGATION STATUS page, how are DME stations displayed differently based on their usage status?",
            options: [
                "Used for navigation: large font with highlighted identifier; received but not used: large font without highlight; not received: small font",
                "All DME stations are displayed identically regardless of status",
                "Used stations appear in green, unused in amber, unavailable in red",
                "Navigation DME stations appear at top, non-navigation at bottom"
            ],
            correct: 0,
            explanation: "DME station display varies by status: if used for navigation, data shows in large font with highlighted identifier; if received but not used, large font with identifier not highlighted; if tuned but not received, identifier and frequency appear in small font.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 110-112"
        },
        {
            question: "What information is provided in the VOR or ILS data lines on the NAVIGATION STATUS page?",
            options: [
                "Only frequency and identifier information",
                "VOR or ILS identifier, frequency, and tuning method (M for manual, P for procedural)",
                "Signal strength and deviation information",
                "Range and bearing data for navigation"
            ],
            correct: 1,
            explanation: "The VOR or ILS data lines show the identifier, frequency, and method used to tune the frequency. The M indicates manual tuning and P indicates procedural tuning.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 107-108"
        },
        {
            question: "What is the purpose of the NAVIGATION OPTIONS page, and when would pilots use the DME and VOR INHIBIT functions?",
            options: [
                "To select navigation display formats and range settings",
                "To inhibit specific navaids not suitable for FMC position update due to NOTAM or ATC unreliability declarations",
                "To prioritize GPS over radio navigation systems",
                "To configure backup navigation systems for emergency use"
            ],
            correct: 1,
            explanation: "The NAVIGATION OPTIONS page lets you inhibit specific navaids for FMC position update. Although FMC doesn't use unsuitable navaids, it may not be aware of unreliable navaids declared by NOTAM or ATC, requiring manual exclusion.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 115-117"
        },
        {
            question: "How many DME and VOR navaids can be inhibited using the NAVIGATION OPTIONS page, and what happens to these inhibitions at flight completion?",
            options: [
                "Up to 5 DME and 5 VOR navaids; inhibitions remain until manually cleared",
                "Up to 2 DME and 2 VOR navaids; entries automatically erased at flight completion",
                "Up to 3 DME and 3 VOR navaids; inhibitions transfer to next flight",
                "Unlimited navaids; inhibitions remain until database update"
            ],
            correct: 1,
            explanation: "The DME INHIBIT lines let you enter up to two DME navaid identifiers, and you can inhibit up to two VOR navaids. Entries are automatically erased at flight completion or can be manually removed using the DELETE key.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 117-118"
        },
        {
            question: "What is the relationship between DME UPDATE mode and VOR-DME/LOCALIZER-DME updates on the NAVIGATION OPTIONS page?",
            options: [
                "DME, VOR, and LOCALIZER updates operate independently",
                "When DME UPDATE is OFF, VOR-DME and LOCALIZER-DME updates are also inhibited even if VOR and LOCALIZER UPDATES are ON",
                "VOR and LOCALIZER updates override DME update settings",
                "DME UPDATE only affects standalone DME stations"
            ],
            correct: 1,
            explanation: "When the DME UPDATE is selected OFF, the VOR-DME and LOCALIZER-DME updates are also inhibited even if the VOR and LOCALIZER UPDATES are ON, showing the critical role of DME in these combined navigation systems.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 121"
        },
        {
            question: "When GPS update is off and the aircraft is at the departure runway, what automatic position update occurs when TO/GA is selected?",
            options: [
                "FMC updates to the aircraft's current GPS position",
                "FMC automatically updates to runway threshold for accurate flight start position",
                "FMC maintains the last known IRS position",
                "FMC requests manual position confirmation from crew"
            ],
            correct: 1,
            explanation: "When GPS update is off and there may be a position shift at the departure runway, pushing the TO/GA switch causes the FMC to automatically update to runway threshold to ensure the flight starts with an accurate FMC position.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 122-123"
        },
        {
            question: "When GPS update is off and the full runway length will not be used for takeoff, what manual action is required and where is it entered?",
            options: [
                "Enter actual takeoff position coordinates on POSITION page",
                "Enter runway remaining distance on TAKEOFF REFERENCE page representing distance between original threshold and start of takeoff",
                "Set custom threshold position on NAVIGATION OPTIONS page",
                "Input intersection runway data on DEPARTURE page"
            ],
            correct: 1,
            explanation: "If published full runway length will not be used for takeoff with GPS update off, you must manually enter runway remaining distance on the TAKEOFF REFERENCE page - the distance between original threshold and start of takeoff.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 124-127"
        },
        {
            question: "How can a manually entered position shift be removed, and what additional actions may be required?",
            options: [
                "Use the CLEAR key on the TAKEOFF REFERENCE page",
                "Select the ROUTE page, reenter the runway number, and check/reenter other performance data as required",
                "Access NAVIGATION OPTIONS and reset position to default",
                "Cycle the FMC power to reset all position data"
            ],
            correct: 1,
            explanation: "To remove the position shift, select the ROUTE page and reenter the runway number. You must check and reenter other performance data as required after making this change.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 128"
        },
        {
            question: "What determines whether conditional waypoints related to altitude constraints will be geographically repositioned during flight?",
            options: [
                "ATC clearance changes and route modifications only",
                "Changes in wind, true airspeed, thrust available, and airplane pitch affecting where the altitude constraint is satisfied",
                "Pilot selection of different climb or descent profiles",
                "Database updates and navigation system recalibration"
            ],
            correct: 1,
            explanation: "Conditional waypoints change location with flight conditions. For altitude-related conditional waypoints, changes in wind, true airspeed, thrust available, and airplane pitch will affect where the specific altitude constraint will be satisfied, thus repositioning the waypoint.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 18-23"
        },
        {
            question: "In the SELECT DESIRED page for duplicate waypoint identifiers, what comprehensive information is provided to help pilots choose the correct waypoint?",
            options: [
                "Only latitude and longitude coordinates",
                "Latitude, longitude, waypoint category/navaid type, frequency (if navaid), and name",
                "Distance from aircraft and bearing information",
                "Route relevance and recommended selection"
            ],
            correct: 1,
            explanation: "The SELECT DESIRED page lists latitude and longitude, displays the waypoint category or type of navaid (APT for airport, WPT for waypoint), shows frequency if it's a navaid, and displays the name of the waypoint or navaid.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 14-16"
        },
        {
            question: "What is the operational significance of the automatic TO/GA position update to runway threshold when GPS is unavailable?",
            options: [
                "It provides backup navigation in case of complete navigation failure",
                "It ensures accurate flight start position for precise navigation and performance calculations throughout the flight",
                "It synchronizes both FMCs to identical starting positions",
                "It calibrates the IRS systems for improved accuracy"
            ],
            correct: 1,
            explanation: "The automatic update to runway threshold when TO/GA is selected ensures that the flight starts with an accurate FMC position, which is critical for all subsequent navigation calculations, performance computations, and flight path management throughout the flight.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 123"
        },
        {
            question: "What is the fundamental purpose of the confidence factor that each FMC sends along with its position data to the other FMC?",
            options: [
                "To indicate which FMC should be primary for navigation decisions",
                "To weight the combination of dual FMC positions based on relative accuracy and reliability",
                "To synchronize timing between the two FMC systems",
                "To provide backup data in case of single FMC failure"
            ],
            correct: 1,
            explanation: "Each FMC sends its position to the other with a confidence factor so that the final FMC position can be calculated as a combination of both positions weighted by their respective confidence factors, optimizing overall navigation accuracy.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 72"
        },
        {
            question: "Why does the FMC apply special geometric and range criteria when automatically selecting DME stations for position triangulation?",
            options: [
                "To ensure the selected stations are within communication range",
                "To optimize position accuracy by choosing stations with best geometry for triangulation and adequate signal strength",
                "To avoid interference with other aircraft navigation systems",
                "To comply with international navigation standards"
            ],
            correct: 1,
            explanation: "The primary FMC selects DME stations with the best range and geometry to give the most accurate estimate of position. Good geometry means the DME stations are positioned to provide optimal triangulation angles for precise position determination.",
            reference: "B737 NG CBT - FMS Navigation Management and Monitoring, Section 76"
        }
    ]
};

// Export for use in main quiz data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fmsNavigationManagement;
}