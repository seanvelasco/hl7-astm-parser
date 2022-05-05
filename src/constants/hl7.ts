export const segmentNamesDictionary = {
    "ABS": "Abstract",
    "ACC": "Accident",
    "ADD": "Addendum",
    "AFF": "Professional Affiliation",
    "AIG": "Appointment Information - General Resource",
    "AIL": "Appointment Information - Location Resource",
    "AIP": "Appointment Information - Personnel Resource",
    "AIS": "Appointment Information",
    "AL1": "Patient Allergy Information",
    "APR": "Appointment Preferences",
    "ARQ": "Appointment Request",
    "AUT": "Authorization Information",
    "BHS": "Batch Header Segment",
    "BLC": "Blood Code",
    "BLG": "Billing",
    "BPO": "Blood product order",
    "BPX": "Blood product dispense status",
    "BTS": "Batch Trailer Segment",
    "BTX": "Blood Product Transfusion/Disposition",
    "CDM": "Charge Description Master",
    "CER": "Certificate Detail",
    "CM0": "Clinical Study Master",
    "CM1": "Clinical Study Phase Master",
    "CM2": "Clinical Study Schedule Master",
    "CNS": "Clear Notification",
    "CON": "Consent",
    "CSP": "Clinical Study Phase",
    "CSR": "Clinical Study Registration",
    "CSS": "Clinical Study Data Schedule Segment",
    "CTD": "Contact Data",
    "CTI": "Clinical Trial Identification",
    "DB1": "Disability",
    "DG1": "Diagnosis",
    "DRG": "Diagnosis Related Group",
    "DSC": "Continuation Pointer",
    "DSP": "Display Data",
    "ECD": "Equipment Command",
    "ECR": "Equipment Command Response",
    "EDU": "Educational Detail",
    "EQL": "Embedded Query Language",
    "EQP": "Equipment/log Service",
    "EQU": "Equipment Detail",
    "ERQ": "Event replay query",
    "ERR": "Error",
    "EVN": "Event Type",
    "FAC": "Facility",
    "FHS": "File Header Segment",
    "FT1": "Financial Transaction",
    "FTS": "File Trailer Segment",
    "GOL": "Goal Detail",
    "GP1": "Grouping/Reimbursement - Visit",
    "GP2": "Grouping/Reimbursement - Procedure Line Item",
    "GT1": "Guarantor",
    "IAM": "Patient Adverse Reaction Information",
    "IIM": "Inventory Item Master",
    "IN1": "Insurance",
    "IN2": "Insurance Additional Information",
    "IN3": "Insurance Additional Information, Certification",
    "INV": "Inventory Detail",
    "IPC": "Imaging Procedure Control Segment",
    "ISD": "Interaction Status Detail",
    "LAN": "Language Detail",
    "LCC": "Location Charge Code",
    "LCH": "Location Characteristic",
    "LDP": "Location Department",
    "LOC": "Location Identification",
    "LRL": "Location Relationship",
    "MFA": "Master File Acknowledgment",
    "MFE": "Master File Entry",
    "MFI": "Master File Identification",
    "MRG": "Merge Patient Information",
    "MSA": "Message Acknowledgment",
    "MSH": "Message Header",
    "NCK": "System Clock",
    "NDS": "Notification Detail",
    "NK1": "Next of Kin / Associated Parties",
    "NPU": "Bed Status Update",
    "NSC": "Application Status Change",
    "NST": "Application control level statistics",
    "NTE": "Notes and Comments",
    "OBR": "Observation Request",
    "OBX": "Observation/Result",
    "ODS": "Dietary Orders, Supplements, and Preferences",
    "ODT": "Diet Tray Instructions",
    "OM1": "General Segment",
    "OM2": "Numeric Observation",
    "OM3": "Categorical Service/Test/Observation",
    "OM4": "Observations that Require Specimens",
    "OM5": "Observation Batteries (Sets)",
    "OM6": "Observations that are Calculated from Other Observations",
    "OM7": "Additional Basic Attributes",
    "ORC": "Common Order",
    "ORG": "Practitioner Organization Unit",
    "OVR": "Override Segment",
    "PCR": "Possible Causal Relationship",
    "PD1": "Patient Additional Demographic",
    "PDA": "Patient Death and Autopsy",
    "PDC": "Product Detail Country",
    "PEO": "Product Experience Observation",
    "PES": "Product Experience Sender",
    "PID": "Patient Identification",
    "PR1": "Procedures",
    "PRA": "Practitioner Detail",
    "PRB": "Problem Details",
    "PRC": "Pricing",
    "PRD": "Provider Data",
    "PSH": "Product Summary Header",
    "PTH": "Pathway",
    "PV1": "Patient Visit",
    "PV2": "Patient Visit - Additional Information",
    "QAK": "Query Acknowledgment",
    "QID": "Query Identification",
    "QPD": "Query Parameter Definition",
    "QRD": "Original-Style Query Definition",
    "QRF": "Original style query filter",
    "QRI": "Query Response Instance",
    "RCP": "Response Control Parameter",
    "RDF": "Table Row Definition",
    "RDT": "Table Row Data",
    "RF1": "Referral Information",
    "RGS": "Resource Group",
    "RMI": "Risk Management Incident",
    "ROL": "Role",
    "RQ1": "Requisition Detail-1",
    "RQD": "Requisition Detail",
    "RXA": "Pharmacy/Treatment Administration",
    "RXC": "Pharmacy/Treatment Component Order",
    "RXD": "Pharmacy/Treatment Dispense",
    "RXE": "Pharmacy/Treatment Encoded Order",
    "RXG": "Pharmacy/Treatment Give",
    "RXO": "Pharmacy/Treatment Order",
    "RXR": "Pharmacy/Treatment Route",
    "SAC": "Specimen Container detail",
    "SCH": "Scheduling Activity Information",
    "SFT": "Software Segment",
    "SID": "Substance Identifier",
    "SPM": "Specimen",
    "SPR": "Stored Procedure Request Definition",
    "STF": "Staff Identification",
    "TCC": "Test Code Configuration",
    "TCD": "Test Code Detail",
    "TQ1": "Timing/Quantity",
    "TQ2": "Timing/Quantity Relationship",
    "TXA": "Transcription Document Header",
    "UB1": "UB82 Data",
    "UB2": "UB92 Data",
    "URD": "Results/update Definition",
    "URS": "Unsolicited Selection",
    "VAR": "Variance",
    "VTQ": "Virtual Table Query Request"
}

export const elementGroup = {
    "ABS": [
        [
            "Discharge Care Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Transfer Medical Service Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Severity of Illness Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/Time of Attestation",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Attested By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Triage Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Abstract Completion Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Abstracted By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Case Category Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Caesarian Section Indicator",
            []
        ],
        [
            "Gestation Category Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Gestation Period - Weeks",
            []
        ],
        [
            "Newborn Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Stillborn Indicator",
            []
        ]
    ],
    "ACC": [
        [
            "Accident Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Accident Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Accident Location",
            []
        ],
        [
            "Auto Accident State",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Accident Job Related Indicator",
            []
        ],
        [
            "Accident Death Indicator",
            []
        ],
        [
            "Entered By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Accident Description",
            []
        ],
        [
            "Brought In By",
            []
        ],
        [
            "Police Notified Indicator",
            []
        ],
        [
            "Accident Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ]
    ],
    "ADD": [
        [
            "Addendum Continuation Pointer",
            []
        ]
    ],
    "AFF": [
        [
            "Set ID - AFF",
            []
        ],
        [
            "Professional Organization",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Professional Organization Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Professional Organization Affiliation Date Range",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Professional Affiliation Additional Information",
            []
        ]
    ],
    "AIG": [
        [
            "Set ID - AIG",
            []
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Resource ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Resource Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Resource Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Resource Quantity",
            []
        ],
        [
            "Resource Quantity Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Start Date/Time Offset",
            []
        ],
        [
            "Start Date/Time Offset Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Duration",
            []
        ],
        [
            "Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allow Substitution Code",
            []
        ],
        [
            "Filler Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "AIL": [
        [
            "Set ID - AIL",
            []
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Location Resource ID",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Location Type-AIL",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Location Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Start Date/Time Offset",
            []
        ],
        [
            "Start Date/Time Offset Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Duration",
            []
        ],
        [
            "Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allow Substitution Code",
            []
        ],
        [
            "Filler Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "AIP": [
        [
            "Set ID - AIP",
            []
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Personnel Resource ID",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Resource Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Resource Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Start Date/Time Offset",
            []
        ],
        [
            "Start Date/Time Offset Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Duration",
            []
        ],
        [
            "Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allow Substitution Code",
            []
        ],
        [
            "Filler Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "AIS": [
        [
            "Set ID - AIS",
            []
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Universal Service Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Start Date/Time Offset",
            []
        ],
        [
            "Start Date/Time Offset Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Duration",
            []
        ],
        [
            "Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allow Substitution Code",
            []
        ],
        [
            "Filler Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Placer Supplemental Service Information",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Filler Supplemental Service Information",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "AL1": [
        [
            "Set ID - AL1",
            []
        ],
        [
            "Allergen Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergen Code/Mnemonic/Description",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergy Severity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergy Reaction Code",
            []
        ],
        [
            "Identification Date",
            []
        ]
    ],
    "APR": [
        [
            "Time Selection Criteria",
            [
                "Parameter Class",
                "Parameter Value"
            ]
        ],
        [
            "Resource Selection Criteria",
            [
                "Parameter Class",
                "Parameter Value"
            ]
        ],
        [
            "Location Selection Criteria",
            [
                "Parameter Class",
                "Parameter Value"
            ]
        ],
        [
            "Slot Spacing Criteria",
            []
        ],
        [
            "Filler Override Criteria",
            [
                "Parameter Class",
                "Parameter Value"
            ]
        ]
    ],
    "ARQ": [
        [
            "Placer Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Occurrence Number",
            []
        ],
        [
            "Placer Group Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Schedule ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Request Event Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Duration",
            []
        ],
        [
            "Appointment Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Start Date/Time Range",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Priority-ARQ",
            []
        ],
        [
            "Repeating Interval",
            [
                "Repeat Pattern",
                "Explicit Time Interval"
            ]
        ],
        [
            "Repeating Interval Duration",
            []
        ],
        [
            "Placer Contact Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Placer Contact Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Placer Contact Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Placer Contact Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Entered By Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Entered By Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Entered By Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Parent Placer Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Parent Filler Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Placer Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "AUT": [
        [
            "Authorizing Payor, Plan ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Authorizing Payor, Company ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Authorizing Payor, Company Name",
            []
        ],
        [
            "Authorization Effective Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Authorization Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Authorization Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Reimbursement Limit",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Requested Number of Treatments",
            []
        ],
        [
            "Authorized Number of Treatments",
            []
        ],
        [
            "Process Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "BHS": [
        [
            "Batch Field Separator",
            []
        ],
        [
            "Batch Encoding Characters",
            []
        ],
        [
            "Batch Sending Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Batch Sending Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Batch Receiving Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Batch Receiving Facility ",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Batch Creation Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Batch Security",
            []
        ],
        [
            "Batch Name/ID/Type",
            []
        ],
        [
            "Batch Comment",
            []
        ],
        [
            "Batch Control ID",
            []
        ],
        [
            "Reference Batch Control ID",
            []
        ]
    ],
    "BLC": [
        [
            "Blood Product Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Blood Amount",
            [
                "Quantity",
                "Units"
            ]
        ]
    ],
    "BLG": [
        [
            "When to Charge",
            [
                "Invocation Event",
                "Date/Time"
            ]
        ],
        [
            "Charge Type",
            []
        ],
        [
            "Account ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Charge Type Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "BPO": [
        [
            "Set ID - BPO",
            []
        ],
        [
            "BP Universal Service ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP  Processing Requirements",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Quantity",
            []
        ],
        [
            "BP Amount",
            []
        ],
        [
            "BP Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "BP Intended Use Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Intended Dispense From Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "BP Intended Dispense From Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "BP Requested Dispense Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Requested Dispense To Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "BP Requested Dispense To Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "BP Indication for Use",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Informed Consent Indicator",
            []
        ]
    ],
    "BPX": [
        [
            "Set ID - BPX",
            []
        ],
        [
            "BP Dispense Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Status",
            []
        ],
        [
            "BP Date/Time of Status",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BC Donation ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "BC Component",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BC Donation Type / Intended Use",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "CP Commercial Product",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "CP Manufacturer",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "CP Lot Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "BP Blood Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BC Special Testing",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Expiration Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Quantity",
            []
        ],
        [
            "BP Amount",
            []
        ],
        [
            "BP Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "BP Unique ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "BP Actual Dispensed To Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "BP Actual Dispensed To Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "BP Dispensed to Receiver",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "BP Dispensing Individual",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ]
    ],
    "BTS": [
        [
            "Batch Message Count",
            []
        ],
        [
            "Batch Comment",
            []
        ],
        [
            "Batch Totals",
            []
        ]
    ],
    "BTX": [
        [
            "Set ID - BTX",
            []
        ],
        [
            "BC Donation ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "BC Component",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BC Blood Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "CP Commercial Product",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "CP Manufacturer",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "CP Lot Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "BP Quantity",
            []
        ],
        [
            "BP Amount",
            []
        ],
        [
            "BP Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "BP Transfusion/Disposition Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Message Status",
            []
        ],
        [
            "BP Date/Time of Status",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Administrator",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "BP Verifier",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "BP Transfusion Start Date/Time of Status",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Transfusion End Date/Time of Status",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "BP Adverse Reaction Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "BP Transfusion Interrupted Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "CDM": [
        [
            "Primary Key Value - CDM",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Charge Code Alias",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Charge Description Short",
            []
        ],
        [
            "Charge Description Long",
            []
        ],
        [
            "Description Override Indicator",
            []
        ],
        [
            "Exploding Charges",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Active/Inactive Flag",
            []
        ],
        [
            "Inventory Number",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Resource Load",
            []
        ],
        [
            "Contract Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Contract Organization",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Room Fee Indicator",
            []
        ]
    ],
    "CER": [
        [
            "Set ID - CER",
            []
        ],
        [
            "Serial Number",
            []
        ],
        [
            "Version",
            []
        ],
        [
            "Granting Authority",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Issuing Authority",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Signature of Issuing Authority",
            [
                "Source Application",
                "Type Of Data",
                "Data Subtype",
                "Encoding",
                "Data"
            ]
        ],
        [
            "Granting Country",
            []
        ],
        [
            "Granting State/Province",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Granting County/Parish",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Certificate Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Certificate Domain",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Subject ID",
            []
        ],
        [
            "Subject Name",
            []
        ],
        [
            "Subject Directory Attribute Extension (Health Professional Data)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Subject Public Key Info",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Authority Key Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Basic Constraint",
            []
        ],
        [
            "CRL Distribution Point",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Jurisdiction Country",
            []
        ],
        [
            "Jurisdiction State/Province",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Jurisdiction County/Parish",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Jurisdiction Breadth",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Granting Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Issuing Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Activation Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inactivation Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Renewal Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Revocation Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Revocation Reason Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Certificate Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "CM0": [
        [
            "Set ID - CM0",
            []
        ],
        [
            "Sponsor Study ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Alternate Study ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Title of Study",
            []
        ],
        [
            "Chairman of Study",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Last IRB Approval Date",
            []
        ],
        [
            "Total Accrual to Date",
            []
        ],
        [
            "Last Accrual Date",
            []
        ],
        [
            "Contact for Study",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Contact's Telephone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Contact's Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ]
    ],
    "CM1": [
        [
            "Set ID - CM1",
            []
        ],
        [
            "Study Phase Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Description of Study Phase",
            []
        ]
    ],
    "CM2": [
        [
            "Set ID - CM2",
            []
        ],
        [
            "Scheduled Time Point",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Description of Time Point",
            []
        ],
        [
            "Events Scheduled This Time Point",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "CNS": [
        [
            "Starting Notification Reference Number",
            []
        ],
        [
            "Ending Notification Reference Number",
            []
        ],
        [
            "Starting Notification Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Ending Notification Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Starting Notification Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ending Notification Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "CON": [
        [
            "Set ID - CON",
            []
        ],
        [
            "Consent Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Consent Form ID",
            []
        ],
        [
            "Consent Form Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Consent Text",
            []
        ],
        [
            "Subject-specific Consent Text",
            []
        ],
        [
            "Consent Background",
            []
        ],
        [
            "Subject-specific Consent Background",
            []
        ],
        [
            "Consenter-imposed limitations",
            []
        ],
        [
            "Consent Mode",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Consent Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Consent Discussion Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Consent Decision Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Consent Effective Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Consent End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Subject Competence Indicator",
            []
        ],
        [
            "Translator Assistance Indicator",
            []
        ],
        [
            "Language Translated To",
            []
        ],
        [
            "Informational Material Supplied Indicator",
            []
        ],
        [
            "Consent Bypass Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Consent Disclosure Level",
            []
        ],
        [
            "Consent Non-disclosure Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Non-subject Consenter Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Consenter ID",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Relationship to Subject Table",
            []
        ]
    ],
    "CSP": [
        [
            "Study Phase Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/time Study Phase Began",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Date/time Study Phase Ended",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Study Phase Evaluability",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "CSR": [
        [
            "Sponsor Study ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Alternate Study ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Institution Registering the Patient",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Sponsor Patient ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Alternate Patient ID - CSR",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Date/Time Of Patient Study Registration",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Person Performing Study Registration",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Study Authorizing Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Date/time Patient Study Consent Signed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Patient Study Eligibility Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Study Randomization Date/time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Randomized Study Arm",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Stratum for Study Randomization",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Evaluability Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/time Ended Study",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Reason Ended Study",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "CSS": [
        [
            "Study Scheduled Time Point",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Study Scheduled Patient Time Point",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Study Quality Control Codes",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "CTD": [
        [
            "Contact Role",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Contact Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Contact Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Contact Communication Information",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Preferred Method of Contact",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Identifiers",
            [
                "Id Number",
                "Type Of Id Number",
                "State/Other Qualifying Information",
                "Expiration Date"
            ]
        ]
    ],
    "CTI": [
        [
            "Sponsor Study ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Study Phase Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Study Scheduled Time Point",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "DB1": [
        [
            "Set ID - DB1",
            []
        ],
        [
            "Disabled Person Code",
            []
        ],
        [
            "Disabled Person Identifier",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Disabled Indicator",
            []
        ],
        [
            "Disability Start Date",
            []
        ],
        [
            "Disability End Date",
            []
        ],
        [
            "Disability Return to Work Date",
            []
        ],
        [
            "Disability Unable to Work Date",
            []
        ]
    ],
    "DG1": [
        [
            "Set ID - DG1",
            []
        ],
        [
            "Diagnosis Coding Method",
            []
        ],
        [
            "Diagnosis Code - DG1",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Diagnosis Description",
            []
        ],
        [
            "Diagnosis Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Diagnosis Type",
            []
        ],
        [
            "Major Diagnostic Category",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Diagnostic Related Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "DRG Approval Indicator",
            []
        ],
        [
            "DRG Grouper Review Code",
            []
        ],
        [
            "Outlier Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Outlier Days",
            []
        ],
        [
            "Outlier Cost",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Grouper Version And Type",
            []
        ],
        [
            "Diagnosis Priority",
            []
        ],
        [
            "Diagnosing Clinician",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Diagnosis Classification",
            []
        ],
        [
            "Confidential Indicator",
            []
        ],
        [
            "Attestation Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Diagnosis Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Diagnosis Action Code",
            []
        ]
    ],
    "DRG": [
        [
            "Diagnostic Related Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "DRG Assigned Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "DRG Approval Indicator",
            []
        ],
        [
            "DRG Grouper Review Code",
            []
        ],
        [
            "Outlier Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Outlier Days",
            []
        ],
        [
            "Outlier Cost",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "DRG Payor",
            []
        ],
        [
            "Outlier Reimbursement",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Confidential Indicator",
            []
        ],
        [
            "DRG Transfer Type",
            []
        ]
    ],
    "DSC": [
        [
            "Continuation Pointer",
            []
        ],
        [
            "Continuation Style",
            []
        ]
    ],
    "DSP": [
        [
            "Set ID - DSP",
            []
        ],
        [
            "Display Level",
            []
        ],
        [
            "Data Line",
            []
        ],
        [
            "Logical Break Point",
            []
        ],
        [
            "Result ID",
            []
        ]
    ],
    "ECD": [
        [
            "Reference Command Number",
            []
        ],
        [
            "Remote Control Command",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Response Required",
            []
        ],
        [
            "Requested Completion Time",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Parameters",
            []
        ]
    ],
    "ECR": [
        [
            "Command Response",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/Time Completed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Command Response Parameters",
            []
        ]
    ],
    "EDU": [
        [
            "Set ID - EDU",
            []
        ],
        [
            "Academic Degree",
            []
        ],
        [
            "Academic Degree Program Date Range",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Academic Degree Program Participation Date Range",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Academic Degree Granted Date",
            []
        ],
        [
            "School",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "School Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "School Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Major Field of Study",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "EQL": [
        [
            "Query Tag",
            []
        ],
        [
            "Query/Response Format Code",
            []
        ],
        [
            "EQL Query Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "EQL Query Statement",
            []
        ]
    ],
    "EQP": [
        [
            "Event type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "File Name",
            []
        ],
        [
            "Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Transaction Data",
            []
        ]
    ],
    "EQU": [
        [
            "Equipment Instance Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Event Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Equipment State",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Local/Remote Control State",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Alert Level",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "ERQ": [
        [
            "Query Tag",
            []
        ],
        [
            "Event Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Input Parameter List",
            [
                "Segment Field Name",
                "Values"
            ]
        ]
    ],
    "ERR": [
        [
            "Error Code and Location",
            [
                "Segment Id",
                "Segment Sequence",
                "Field Position",
                "Code Identifying Error"
            ]
        ],
        [
            "Error Location",
            [
                "Segment Id",
                "Segment Sequence",
                "Field Position",
                "Field Repetition",
                "Component Number",
                "Sub-component Number"
            ]
        ],
        [
            "HL7 Error Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Severity",
            []
        ],
        [
            "Application Error Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Application Error Parameter",
            []
        ],
        [
            "Diagnostic Information",
            []
        ],
        [
            "User Message",
            []
        ],
        [
            "Inform Person Indicator",
            []
        ],
        [
            "Override Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Override Reason Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Help Desk Contact Point",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ]
    ],
    "EVN": [
        [
            "Event Type Code",
            []
        ],
        [
            "Recorded Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Date/Time Planned Event",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Reason Code",
            []
        ],
        [
            "Operator ID",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Event Occurred",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "FAC": [
        [
            "Facility ID-FAC",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Facility Type",
            []
        ],
        [
            "Facility Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Facility Telecommunication",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Contact Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Contact Title",
            []
        ],
        [
            "Contact Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Contact Telecommunication",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Signature Authority",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Signature Authority Title",
            []
        ],
        [
            "Signature Authority Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Signature Authority Telecommunication",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ]
    ],
    "FHS": [
        [
            "File Field Separator",
            []
        ],
        [
            "File Encoding Characters",
            []
        ],
        [
            "File Sending Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "File Sending Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "File Receiving Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "File Receiving Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "File Creation Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "File Security",
            []
        ],
        [
            "File Name/ID",
            []
        ],
        [
            "File Header Comment",
            []
        ],
        [
            "File Control ID",
            []
        ],
        [
            "Reference File Control ID",
            []
        ]
    ],
    "FT1": [
        [
            "Set ID - FT1",
            []
        ],
        [
            "Transaction ID",
            []
        ],
        [
            "Transaction Batch ID",
            []
        ],
        [
            "Transaction Date",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Transaction Posting Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Transaction Type",
            []
        ],
        [
            "Transaction Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Transaction Description",
            []
        ],
        [
            "Transaction Description - Alt",
            []
        ],
        [
            "Transaction Quantity",
            []
        ],
        [
            "Transaction Amount - Extended",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Transaction Amount - Unit",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Department Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insurance Plan ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insurance Amount",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Assigned Patient Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Fee Schedule",
            []
        ],
        [
            "Patient Type",
            []
        ],
        [
            "Diagnosis Code - FT1",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Performed By Code",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Ordered By Code",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Unit Cost",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Entered By Code",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Procedure Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Advanced Beneficiary Notice Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Medically Necessary Duplicate Procedure Reason.",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "NDC Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Payment Reference ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Transaction Reference Key",
            []
        ]
    ],
    "FTS": [
        [
            "File Batch Count",
            []
        ],
        [
            "File Trailer Comment",
            []
        ]
    ],
    "GOL": [
        [
            "Action Code",
            []
        ],
        [
            "Action Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Goal ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Goal Instance ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Episode of Care ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Goal List Priority",
            []
        ],
        [
            "Goal Established Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Expected Goal Achieve Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Goal Classification",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Goal Management Discipline",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Current Goal Review Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Current Goal Review Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Next Goal Review Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Previous Goal Review Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Goal Review Interval",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Goal Evaluation",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Goal Evaluation Comment",
            []
        ],
        [
            "Goal Life Cycle Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Goal Life Cycle Status Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Goal Target Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Goal Target Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ]
    ],
    "GP1": [
        [
            "Type of Bill Code",
            []
        ],
        [
            "Revenue Code",
            []
        ],
        [
            "Overall Claim Disposition Code",
            []
        ],
        [
            "OCE Edits per Visit Code",
            []
        ],
        [
            "Outlier Cost",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ]
    ],
    "GP2": [
        [
            "Revenue Code",
            []
        ],
        [
            "Number of Service Units",
            []
        ],
        [
            "Charge",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Reimbursement Action Code",
            []
        ],
        [
            "Denial or Rejection Code",
            []
        ],
        [
            "OCE Edit Code",
            []
        ],
        [
            "Ambulatory Payment Classification Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Modifier Edit Code",
            []
        ],
        [
            "Payment Adjustment Code",
            []
        ],
        [
            "Packaging Status Code",
            []
        ],
        [
            "Expected CMS Payment Amount",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Reimbursement Type Code",
            []
        ],
        [
            "Co-Pay Amount",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Pay Rate per Service Unit",
            []
        ]
    ],
    "GT1": [
        [
            "Set ID - GT1",
            []
        ],
        [
            "Guarantor Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Guarantor Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Guarantor Spouse Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Guarantor Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Guarantor Ph Num - Home",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Guarantor Ph Num - Business",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Guarantor Date/Time Of Birth",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Guarantor Administrative Sex",
            []
        ],
        [
            "Guarantor Type",
            []
        ],
        [
            "Guarantor Relationship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Guarantor SSN",
            []
        ],
        [
            "Guarantor Date - Begin",
            []
        ],
        [
            "Guarantor Date - End",
            []
        ],
        [
            "Guarantor Priority",
            []
        ],
        [
            "Guarantor Employer Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Guarantor Employer Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Guarantor Employer Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Guarantor Employee ID Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Guarantor Employment Status",
            []
        ],
        [
            "Guarantor Organization Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Guarantor Billing Hold Flag",
            []
        ],
        [
            "Guarantor Credit Rating Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Guarantor Death Date And Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Guarantor Death Flag",
            []
        ],
        [
            "Guarantor Charge Adjustment Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Guarantor Household Annual Income",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Guarantor Household Size",
            []
        ],
        [
            "Guarantor Employer ID Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Guarantor Marital Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Guarantor Hire Effective Date",
            []
        ],
        [
            "Employment Stop Date",
            []
        ],
        [
            "Living Dependency",
            []
        ],
        [
            "Ambulatory Status",
            []
        ],
        [
            "Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Language",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Living Arrangement",
            []
        ],
        [
            "Publicity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Protection Indicator",
            []
        ],
        [
            "Student Indicator",
            []
        ],
        [
            "Religion",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Mother's Maiden Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Nationality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ethnic Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Person's Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Contact Person's Telephone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Contact Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Relationship",
            []
        ],
        [
            "Job Title",
            []
        ],
        [
            "Job Code/Class",
            [
                "Job Code",
                "Job Class",
                "Job Description Text"
            ]
        ],
        [
            "Guarantor Employer's Organization Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Handicap",
            []
        ],
        [
            "Job Status",
            []
        ],
        [
            "Guarantor Financial Class",
            [
                "Financial Class Code",
                "Effective Date"
            ]
        ],
        [
            "Guarantor Race",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Guarantor Birth Place",
            []
        ],
        [
            "VIP Indicator",
            []
        ]
    ],
    "IAM": [
        [
            "Set ID - IAM",
            []
        ],
        [
            "Allergen Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergen Code/Mnemonic/Description",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergy Severity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergy Reaction Code",
            []
        ],
        [
            "Allergy Action Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Allergy Unique Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Action Reason",
            []
        ],
        [
            "Sensitivity to Causative Agent Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergen Group Code/Mnemonic/Description",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Onset Date",
            []
        ],
        [
            "Onset Date Text",
            []
        ],
        [
            "Reported Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Reported By",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Relationship to Patient Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Alert Device Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Allergy Clinical Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Statused by Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Statused by Organization",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Statused at Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "IIM": [
        [
            "Primary Key Value - IIM",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Service Item Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Inventory Lot Number",
            []
        ],
        [
            "Inventory Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inventory Manufacturer Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Inventory Location",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Inventory Received Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inventory Received Quantity",
            []
        ],
        [
            "Inventory Received Quantity Unit",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Inventory Received Item Cost",
            [
                "Quantity",
                "Denomination"
            ]
        ],
        [
            "Inventory On Hand Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inventory On Hand Quantity",
            []
        ],
        [
            "Inventory On Hand Quantity Unit",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Procedure Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "IN1": [
        [
            "Set ID - IN1",
            []
        ],
        [
            "Insurance Plan ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insurance Company ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Insurance Company Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Insurance Company Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Insurance Co Contact Person",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Insurance Co Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Group Number",
            []
        ],
        [
            "Group Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Insured's Group Emp ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Insured's Group Emp Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Plan Effective Date",
            []
        ],
        [
            "Plan Expiration Date",
            []
        ],
        [
            "Authorization Information",
            [
                "Authorization Number",
                "Date",
                "Source"
            ]
        ],
        [
            "Plan Type",
            []
        ],
        [
            "Name Of Insured",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Insured's Relationship To Patient",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insured's Date Of Birth",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Insured's Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Assignment Of Benefits",
            []
        ],
        [
            "Coordination Of Benefits",
            []
        ],
        [
            "Coord Of Ben. Priority",
            []
        ],
        [
            "Notice Of Admission Flag",
            []
        ],
        [
            "Notice Of Admission Date",
            []
        ],
        [
            "Report Of Eligibility Flag",
            []
        ],
        [
            "Report Of Eligibility Date",
            []
        ],
        [
            "Release Information Code",
            []
        ],
        [
            "Pre-Admit Cert (PAC)",
            []
        ],
        [
            "Verification Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Verification By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Type Of Agreement Code",
            []
        ],
        [
            "Billing Status",
            []
        ],
        [
            "Lifetime Reserve Days",
            []
        ],
        [
            "Delay Before L.R. Day",
            []
        ],
        [
            "Company Plan Code",
            []
        ],
        [
            "Policy Number",
            []
        ],
        [
            "Policy Deductible",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Policy Limit - Amount",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Policy Limit - Days",
            []
        ],
        [
            "Room Rate - Semi-Private",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Room Rate - Private",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Insured's Employment Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insured's Administrative Sex",
            []
        ],
        [
            "Insured's Employer's Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Verification Status",
            []
        ],
        [
            "Prior Insurance Plan ID",
            []
        ],
        [
            "Coverage Type",
            []
        ],
        [
            "Handicap",
            []
        ],
        [
            "Insured's ID Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Signature Code",
            []
        ],
        [
            "Signature Code Date",
            []
        ],
        [
            "Insured's Birth Place",
            []
        ],
        [
            "VIP Indicator",
            []
        ]
    ],
    "IN2": [
        [
            "Insured's Employee ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Insured's Social Security Number",
            []
        ],
        [
            "Insured's Employer's Name and ID",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Employer Information Data",
            []
        ],
        [
            "Mail Claim Party",
            []
        ],
        [
            "Medicare Health Ins Card Number",
            []
        ],
        [
            "Medicaid Case Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Medicaid Case Number",
            []
        ],
        [
            "Military Sponsor Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Military ID Number",
            []
        ],
        [
            "Dependent Of Military Recipient",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Military Organization",
            []
        ],
        [
            "Military Station",
            []
        ],
        [
            "Military Service",
            []
        ],
        [
            "Military Rank/Grade",
            []
        ],
        [
            "Military Status",
            []
        ],
        [
            "Military Retire Date",
            []
        ],
        [
            "Military Non-Avail Cert On File",
            []
        ],
        [
            "Baby Coverage",
            []
        ],
        [
            "Combine Baby Bill",
            []
        ],
        [
            "Blood Deductible",
            []
        ],
        [
            "Special Coverage Approval Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Special Coverage Approval Title",
            []
        ],
        [
            "Non-Covered Insurance Code",
            []
        ],
        [
            "Payor ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Payor Subscriber ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Eligibility Source",
            []
        ],
        [
            "Room Coverage Type/Amount",
            [
                "Room Type",
                "Amount Type",
                "Coverage Amount",
                "Money Or Percentage"
            ]
        ],
        [
            "Policy Type/Amount",
            [
                "Policy Type",
                "Amount Class",
                "Money Or Percentage Quantity",
                "Money Or Percentage"
            ]
        ],
        [
            "Daily Deductible",
            [
                "Delay Days",
                "Monetary Amount",
                "Number Of Days"
            ]
        ],
        [
            "Living Dependency",
            []
        ],
        [
            "Ambulatory Status",
            []
        ],
        [
            "Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Language",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Living Arrangement",
            []
        ],
        [
            "Publicity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Protection Indicator",
            []
        ],
        [
            "Student Indicator",
            []
        ],
        [
            "Religion",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Mother's Maiden Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Nationality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ethnic Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Marital Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insured's Employment Start Date",
            []
        ],
        [
            "Employment Stop Date",
            []
        ],
        [
            "Job Title",
            []
        ],
        [
            "Job Code/Class",
            [
                "Job Code",
                "Job Class",
                "Job Description Text"
            ]
        ],
        [
            "Job Status",
            []
        ],
        [
            "Employer Contact Person Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Employer Contact Person Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Employer Contact Reason",
            []
        ],
        [
            "Insured's Contact Person's Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Insured's Contact Person Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Insured's Contact Person Reason",
            []
        ],
        [
            "Relationship to the Patient Start Date",
            []
        ],
        [
            "Relationship to the Patient Stop Date",
            []
        ],
        [
            "Insurance Co. Contact Reason",
            []
        ],
        [
            "Insurance Co Contact Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Policy Scope",
            []
        ],
        [
            "Policy Source",
            []
        ],
        [
            "Patient Member Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Guarantor's Relationship To Insured",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Insured's Phone Number - Home",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Insured's Employer Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Military Handicapped Program",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Suspend Flag",
            []
        ],
        [
            "Copay Limit Flag",
            []
        ],
        [
            "Stoploss Limit Flag",
            []
        ],
        [
            "Insured Organization Name and ID",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Insured Employer Organization Name and ID",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Race",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "CMS Patient's Relationship to Insured",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "IN3": [
        [
            "Set ID - IN3",
            []
        ],
        [
            "Certification Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Certified By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Certification Required",
            []
        ],
        [
            "Penalty",
            [
                "Money Or Percentage Indicator",
                "Money Or Percentage Quantity",
                "Currency Denomination"
            ]
        ],
        [
            "Certification Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Certification Modify Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Operator",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Certification Begin Date",
            []
        ],
        [
            "Certification End Date",
            []
        ],
        [
            "Days",
            [
                "Day Type",
                "Number Of Days"
            ]
        ],
        [
            "Non-Concur Code/Description",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Non-Concur Effective Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Physician Reviewer",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Certification Contact",
            []
        ],
        [
            "Certification Contact Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Appeal Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Certification Agency",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Certification Agency Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Pre-Certification Requirement",
            [
                "Certification Patient Type",
                "Certification Required",
                "Date/Time Certification Required"
            ]
        ],
        [
            "Case Manager",
            []
        ],
        [
            "Second Opinion Date",
            []
        ],
        [
            "Second Opinion Status",
            []
        ],
        [
            "Second Opinion Documentation Received",
            []
        ],
        [
            "Second Opinion Physician",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ]
    ],
    "INV": [
        [
            "Substance Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Inventory Container Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Container Carrier Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Position on Carrier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Initial Quantity",
            []
        ],
        [
            "Current Quantity",
            []
        ],
        [
            "Available Quantity",
            []
        ],
        [
            "Consumption Quantity",
            []
        ],
        [
            "Quantity Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Expiration Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "First Used Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "On Board Stability Duration",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Test/Fluid Identifier(s)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Manufacturer Lot Number",
            []
        ],
        [
            "Manufacturer Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Supplier Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "On Board Stability Time",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Target Value",
            [
                "Quantity",
                "Units"
            ]
        ]
    ],
    "IPC": [
        [
            "Accession Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Requested Procedure ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Study Instance UID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Scheduled Procedure Step ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Modality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Protocol Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Scheduled Station Name",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Scheduled Procedure Step Location",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Scheduled AE Title",
            []
        ]
    ],
    "ISD": [
        [
            "Reference Interaction Number (unique identifier)",
            []
        ],
        [
            "Interaction Type Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Interaction Active State",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "LAN": [
        [
            "Set ID - LAN",
            []
        ],
        [
            "Language Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Language Ability Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Language Proficiency Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "LCC": [
        [
            "Primary Key Value - LCC",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Location Department",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Accommodation Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Charge Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "LCH": [
        [
            "Primary Key Value - LCH",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Segment Unique Key",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Location Characteristic ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Location Characteristic Value-LCH",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "LDP": [
        [
            "Primary Key Value - LDP",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Location Department",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Location Service",
            []
        ],
        [
            "Specialty Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Valid Patient Classes",
            []
        ],
        [
            "Active/Inactive Flag",
            []
        ],
        [
            "Activation Date - LDP",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inactivation Date - LDP",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Inactivated Reason",
            []
        ],
        [
            "Visiting Hours",
            [
                "Start Day Range",
                "End Day Range",
                "Start Hour Range",
                "End Hour Range"
            ]
        ],
        [
            "Contact Phone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Location Cost Center",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "LOC": [
        [
            "Primary Key Value - LOC",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Location Description",
            []
        ],
        [
            "Location Type - LOC",
            []
        ],
        [
            "Organization Name - LOC",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Location Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Location Phone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "License Number",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Location Equipment",
            []
        ],
        [
            "Location Service Code",
            []
        ]
    ],
    "LRL": [
        [
            "Primary Key Value - LRL",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Segment Unique Key",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Location Relationship ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Organizational Location Relationship Value",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Patient Location Relationship Value",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ]
    ],
    "MFA": [
        [
            "Record-Level Event Code",
            []
        ],
        [
            "MFN Control ID",
            []
        ],
        [
            "Event Completion Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "MFN Record Level Error Return",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Key Value - MFA",
            []
        ],
        [
            "Primary Key Value Type - MFA",
            []
        ]
    ],
    "MFE": [
        [
            "Record-Level Event Code",
            []
        ],
        [
            "MFN Control ID",
            []
        ],
        [
            "Effective Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Primary Key Value - MFE",
            []
        ],
        [
            "Primary Key Value Type",
            []
        ]
    ],
    "MFI": [
        [
            "Master File Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Master File Application Identifier",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "File-Level Event Code",
            []
        ],
        [
            "Entered Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Effective Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Response Level Code",
            []
        ]
    ],
    "MRG": [
        [
            "Prior Patient Identifier List",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Alternate Patient ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Patient Account Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Patient ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Visit Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Alternate Visit ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Patient Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ]
    ],
    "MSA": [
        [
            "Acknowledgment Code",
            []
        ],
        [
            "Message Control ID",
            []
        ],
        [
            "Text Message",
            []
        ],
        [
            "Expected Sequence Number",
            []
        ],
        [
            "Delayed Acknowledgment Type",
            []
        ],
        [
            "Error Condition",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "MSH": [
        [
            "Field Separator",
            []
        ],
        [
            "Encoding Characters",
            []
        ],
        [
            "Sending Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Sending Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Receiving Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Receiving Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Date/Time Of Message",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Security",
            []
        ],
        [
            "Message Type",
            [
                "Message Code",
                "Trigger Event",
                "Message Structure"
            ]
        ],
        [
            "Message Control ID",
            []
        ],
        [
            "Processing ID",
            [
                "Processing Id",
                "Processing Mode"
            ]
        ],
        [
            "Version ID",
            [
                "Version Id",
                "Internationalization Code",
                "International Version Id"
            ]
        ],
        [
            "Sequence Number",
            []
        ],
        [
            "Continuation Pointer",
            []
        ],
        [
            "Accept Acknowledgment Type",
            []
        ],
        [
            "Application Acknowledgment Type",
            []
        ],
        [
            "Country Code",
            []
        ],
        [
            "Character Set",
            []
        ],
        [
            "Principal Language Of Message",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Alternate Character Set Handling Scheme",
            []
        ],
        [
            "Message Profile Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "NCK": [
        [
            "System Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "NDS": [
        [
            "Notification Reference Number",
            []
        ],
        [
            "Notification Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Notification Alert Severity",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Notification Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "NK1": [
        [
            "Set ID - NK1",
            []
        ],
        [
            "NK Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Relationship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Business Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Contact Role",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Start Date",
            []
        ],
        [
            "End Date",
            []
        ],
        [
            "Next of Kin / Associated Parties Job Title",
            []
        ],
        [
            "Next of Kin / Associated Parties Job Code/Class",
            [
                "Job Code",
                "Job Class",
                "Job Description Text"
            ]
        ],
        [
            "Next of Kin / Associated Parties Employee Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Organization Name - NK1",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Marital Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administrative Sex",
            []
        ],
        [
            "Date/Time of Birth",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Living Dependency",
            []
        ],
        [
            "Ambulatory Status",
            []
        ],
        [
            "Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Language",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Living Arrangement",
            []
        ],
        [
            "Publicity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Protection Indicator",
            []
        ],
        [
            "Student Indicator",
            []
        ],
        [
            "Religion",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Mother's Maiden Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Nationality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ethnic Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Contact Person's Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Contact Person's Telephone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Contact Person's Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Next of Kin/Associated Party's Identifiers",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Job Status",
            []
        ],
        [
            "Race",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Handicap",
            []
        ],
        [
            "Contact Person Social Security Number",
            []
        ],
        [
            "Next of Kin Birth Place",
            []
        ],
        [
            "VIP Indicator",
            []
        ]
    ],
    "NPU": [
        [
            "Bed Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Bed Status",
            []
        ]
    ],
    "NSC": [
        [
            "Application Change Type",
            []
        ],
        [
            "Current CPU",
            []
        ],
        [
            "Current Fileserver",
            []
        ],
        [
            "Current Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Current Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "New CPU",
            []
        ],
        [
            "New Fileserver",
            []
        ],
        [
            "New Application",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "New Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "NST": [
        [
            "Statistics Available",
            []
        ],
        [
            "Source Identifier",
            []
        ],
        [
            "Source Type",
            []
        ],
        [
            "Statistics Start",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Statistics End",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Receive Character Count",
            []
        ],
        [
            "Send Character Count",
            []
        ],
        [
            "Messages Received",
            []
        ],
        [
            "Messages Sent",
            []
        ],
        [
            "Checksum Errors Received",
            []
        ],
        [
            "Length Errors Received",
            []
        ],
        [
            "Other Errors Received",
            []
        ],
        [
            "Connect Timeouts",
            []
        ],
        [
            "Receive Timeouts",
            []
        ],
        [
            "Application control-level Errors",
            []
        ]
    ],
    "NTE": [
        [
            "Set ID - NTE",
            []
        ],
        [
            "Source of Comment",
            []
        ],
        [
            "Comment",
            []
        ],
        [
            "Comment Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "OBR": [
        [
            "Set ID - OBR",
            []
        ],
        [
            "Placer Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Universal Service Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Priority - OBR",
            []
        ],
        [
            "Requested Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Observation Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Observation End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Collection Volume",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Collector Identifier",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Specimen Action Code",
            []
        ],
        [
            "Danger Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Relevant Clinical Information",
            []
        ],
        [
            "Specimen Received Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Specimen Source",
            [
                "Specimen Source Name Or Code",
                "Additives",
                "Specimen Collection Method",
                "Body Site",
                "Site Modifier",
                "Collection Method Modifier Code",
                "Specimen Role"
            ]
        ],
        [
            "Ordering Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Order Callback Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Placer Field 1",
            []
        ],
        [
            "Placer Field 2",
            []
        ],
        [
            "Filler Field 1",
            []
        ],
        [
            "Filler Field 2",
            []
        ],
        [
            "Results Rpt/Status Chng - Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Charge to Practice",
            [
                "Monetary Amount",
                "Charge Code"
            ]
        ],
        [
            "Diagnostic Serv Sect ID",
            []
        ],
        [
            "Result Status",
            []
        ],
        [
            "Parent Result",
            [
                "Parent Observation Identifier",
                "Parent Observation Sub-identifier",
                "Parent Observation Value Descriptor"
            ]
        ],
        [
            "Quantity/Timing",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Result Copies To",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Parent",
            [
                "Placer Assigned Identifier",
                "Filler Assigned Identifier"
            ]
        ],
        [
            "Transportation Mode",
            []
        ],
        [
            "Reason for Study",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Principal Result Interpreter",
            [
                "Name",
                "Start Date/Time",
                "End Date/Time",
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor"
            ]
        ],
        [
            "Assistant Result Interpreter",
            [
                "Name",
                "Start Date/Time",
                "End Date/Time",
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor"
            ]
        ],
        [
            "Technician",
            [
                "Name",
                "Start Date/Time",
                "End Date/Time",
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor"
            ]
        ],
        [
            "Transcriptionist",
            [
                "Name",
                "Start Date/Time",
                "End Date/Time",
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor"
            ]
        ],
        [
            "Scheduled Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Number of Sample Containers",
            []
        ],
        [
            "Transport Logistics of Collected Sample",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Collector's Comment",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Transport Arrangement Responsibility",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Transport Arranged",
            []
        ],
        [
            "Escort Required",
            []
        ],
        [
            "Planned Patient Transport Comment",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Placer Supplemental Service Information",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Filler Supplemental Service Information",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Medically Necessary Duplicate Procedure Reason.",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Result Handling",
            []
        ]
    ],
    "OBX": [
        [
            "Set ID - OBX",
            []
        ],
        [
            "Value Type",
            []
        ],
        [
            "Observation Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Observation Sub-ID",
            []
        ],
        [
            "Observation Value",
            []
        ],
        [
            "Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "References Range",
            []
        ],
        [
            "Abnormal Flags",
            []
        ],
        [
            "Probability",
            []
        ],
        [
            "Nature of Abnormal Test",
            []
        ],
        [
            "Observation Result Status",
            []
        ],
        [
            "Effective Date of Reference Range",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "User Defined Access Checks",
            []
        ],
        [
            "Date/Time of the Observation",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Producer's ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Responsible Observer",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Observation Method",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Equipment Instance Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Date/Time of the Analysis",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "ODS": [
        [
            "Type",
            []
        ],
        [
            "Service Period",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Diet, Supplement, or Preference Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Text Instruction",
            []
        ]
    ],
    "ODT": [
        [
            "Tray Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Service Period",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Text Instruction",
            []
        ]
    ],
    "OM1": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Producer's Service/Test/Observation ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Permitted Data Types",
            []
        ],
        [
            "Specimen Required",
            []
        ],
        [
            "Producer ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Observation Description",
            []
        ],
        [
            "Other Service/Test/Observation IDs for the Observation",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Other Names",
            []
        ],
        [
            "Preferred Report Name for the Observation",
            []
        ],
        [
            "Preferred Short Name or Mnemonic for Observation",
            []
        ],
        [
            "Preferred Long Name for the Observation",
            []
        ],
        [
            "Orderability",
            []
        ],
        [
            "Identity of Instrument Used to Perform this Study",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Coded Representation of Method",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Portable Device Indicator",
            []
        ],
        [
            "Observation Producing Department/Section",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Telephone Number of Section",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Nature of Service/Test/Observation",
            []
        ],
        [
            "Report Subheader",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Report Display Order",
            []
        ],
        [
            "Date/Time Stamp for any change in Definition for the Observation",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Effective Date/Time of Change",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Typical Turn-Around Time",
            []
        ],
        [
            "Processing Time",
            []
        ],
        [
            "Processing Priority",
            []
        ],
        [
            "Reporting Priority",
            []
        ],
        [
            "Outside Site(s) Where Observation may be Performed ",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Address of Outside Site(s)",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Phone Number of Outside Site",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Confidentiality Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Observations Required to Interpret the Observation",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Interpretation of Observations",
            []
        ],
        [
            "Contraindications to Observations",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Reflex Tests/Observations",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Rules that Trigger Reflex Testing",
            []
        ],
        [
            "Fixed Canned Message",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Preparation",
            []
        ],
        [
            "Procedure Medication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Factors that may Affect the Observation",
            []
        ],
        [
            "Service/Test/Observation Performance Schedule",
            []
        ],
        [
            "Description of Test Methods",
            []
        ],
        [
            "Kind of Quantity Observed",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Point Versus Interval",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Challenge Information",
            []
        ],
        [
            "Relationship Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Target Anatomic Site Of Test",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Modality Of Imaging Measurement",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "OM2": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Units of Measure",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Range of Decimal Precision",
            []
        ],
        [
            "Corresponding SI Units of Measure",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "SI Conversion Factor",
            []
        ],
        [
            "Reference (Normal) Range - Ordinal and Continuous Observations",
            [
                "Numeric Range",
                "Administrative Sex",
                "Age Range",
                "Gestational Age Range",
                "Species",
                "Race/Subspecies",
                "Conditions"
            ]
        ],
        [
            "Critical Range for Ordinal and Continuous Observations",
            [
                "Numeric Range",
                "Administrative Sex",
                "Age Range",
                "Gestational Age Range",
                "Species",
                "Race/Subspecies",
                "Conditions"
            ]
        ],
        [
            "Absolute Range for Ordinal and Continuous Observations",
            [
                "Numeric Range",
                "Administrative Sex",
                "Age Range",
                "Gestational Age Range",
                "Species",
                "Race/Subspecies",
                "Conditions"
            ]
        ],
        [
            "Delta Check Criteria",
            [
                "Normal Range",
                "Numeric Threshold",
                "Change Computation",
                "Days Retained"
            ]
        ],
        [
            "Minimum Meaningful Increments",
            []
        ]
    ],
    "OM3": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Preferred Coding System",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Valid Coded 'Answers'",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Normal Text/Codes for Categorical Observations",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Abnormal Text/Codes for Categorical Observations",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Critical Text/Codes for Categorical Observations",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Value Type",
            []
        ]
    ],
    "OM4": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Derived Specimen",
            []
        ],
        [
            "Container Description",
            []
        ],
        [
            "Container Volume",
            []
        ],
        [
            "Container Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Specimen",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Additive",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Preparation",
            []
        ],
        [
            "Special Handling Requirements",
            []
        ],
        [
            "Normal Collection Volume",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Minimum Collection Volume",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Specimen Requirements",
            []
        ],
        [
            "Specimen Priorities",
            []
        ],
        [
            "Specimen Retention Time",
            [
                "Quantity",
                "Units"
            ]
        ]
    ],
    "OM5": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Test/Observations Included within an Ordered Test Battery",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Observation ID Suffixes",
            []
        ]
    ],
    "OM6": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Derivation Rule",
            []
        ]
    ],
    "OM7": [
        [
            "Sequence Number - Test/Observation Master File",
            []
        ],
        [
            "Universal Service Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Category Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Category Description",
            []
        ],
        [
            "Category Synonym",
            []
        ],
        [
            "Effective Test/Service Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Effective Test/Service End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Test/Service Default Duration Quantity",
            []
        ],
        [
            "Test/Service Default Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Test/Service Default Frequency",
            []
        ],
        [
            "Consent Indicator",
            []
        ],
        [
            "Consent Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Consent Effective Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Consent Effective End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Consent Interval Quantity",
            []
        ],
        [
            "Consent Interval Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Consent Waiting Period Quantity",
            []
        ],
        [
            "Consent Waiting Period Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Effective Date/Time of Change",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Entered By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Orderable-at Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Formulary Status",
            []
        ],
        [
            "Special Order Indicator",
            []
        ],
        [
            "Primary Key Value - CDM",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "ORC": [
        [
            "Order Control",
            []
        ],
        [
            "Placer Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Placer Group Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Order Status",
            []
        ],
        [
            "Response Flag",
            []
        ],
        [
            "Quantity/Timing",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Parent Order",
            [
                "Placer Assigned Identifier",
                "Filler Assigned Identifier"
            ]
        ],
        [
            "Date/Time of Transaction",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Entered By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Verified By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Ordering Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Enterer's Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Call Back Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Order Effective Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Order Control Code Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Entering Organization",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Entering Device",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Action By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Advanced Beneficiary Notice Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ordering Facility Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Ordering Facility Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Ordering Facility Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Ordering Provider Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Order Status Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Advanced Beneficiary Notice Override Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Filler's Expected Availability Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Confidentiality Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Order Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Enterer Authorization Mode",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "ORG": [
        [
            "Set ID - ORG",
            []
        ],
        [
            "Organization Unit Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Organization Unit Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Org Unit Indicator",
            []
        ],
        [
            "Practitioner Org Unit Identifier",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Health Care Provider Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Health Care Provider Classification Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Health Care Provider Area of Specialization Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Effective Date Range",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Employment Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Board Approval Indicator",
            []
        ],
        [
            "Primary Care Physician Indicator",
            []
        ]
    ],
    "OVR": [
        [
            "Business Rule Override Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Business Rule Override Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Override Comments",
            []
        ],
        [
            "Override Entered By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Override Authorized By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ]
    ],
    "PCR": [
        [
            "Implicated Product",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Generic Product",
            []
        ],
        [
            "Product Class",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Total Duration Of Therapy",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Product Manufacture Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Product Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Product Implantation Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Product Explantation Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Single Use Device",
            []
        ],
        [
            "Indication For Product Use",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Product Problem",
            []
        ],
        [
            "Product Serial/Lot Number",
            []
        ],
        [
            "Product Available For Inspection",
            []
        ],
        [
            "Product Evaluation Performed",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Product Evaluation Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Product Evaluation Results",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Evaluated Product Source",
            []
        ],
        [
            "Date Product Returned To Manufacturer",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Device Operator Qualifications",
            []
        ],
        [
            "Relatedness Assessment",
            []
        ],
        [
            "Action Taken In Response To The Event",
            []
        ],
        [
            "Event Causality Observations",
            []
        ],
        [
            "Indirect Exposure Mechanism",
            []
        ]
    ],
    "PD1": [
        [
            "Living Dependency",
            []
        ],
        [
            "Living Arrangement",
            []
        ],
        [
            "Patient Primary Facility",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Patient Primary Care Provider Name and ID No.",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Student Indicator",
            []
        ],
        [
            "Handicap",
            []
        ],
        [
            "Living Will Code",
            []
        ],
        [
            "Organ Donor Code",
            []
        ],
        [
            "Separate Bill",
            []
        ],
        [
            "Duplicate Patient",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Publicity Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Protection Indicator",
            []
        ],
        [
            "Protection Indicator Effective Date",
            []
        ],
        [
            "Place of Worship",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Advance Directive Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Immunization Registry Status",
            []
        ],
        [
            "Immunization Registry Status Effective Date",
            []
        ],
        [
            "Publicity Code Effective Date",
            []
        ],
        [
            "Military Branch",
            []
        ],
        [
            "Military Rank/Grade",
            []
        ],
        [
            "Military Status",
            []
        ]
    ],
    "PDA": [
        [
            "Death Cause Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Death Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Death Certified Indicator",
            []
        ],
        [
            "Death Certificate Signed Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Death Certified By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Autopsy Indicator",
            []
        ],
        [
            "Autopsy Start and End Date/Time",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Autopsy Performed By",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Coroner Indicator",
            []
        ]
    ],
    "PDC": [
        [
            "Manufacturer/Distributor",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Country",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Brand Name",
            []
        ],
        [
            "Device Family Name",
            []
        ],
        [
            "Generic Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Model Identifier",
            []
        ],
        [
            "Catalogue Identifier",
            []
        ],
        [
            "Other Identifier",
            []
        ],
        [
            "Product Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Marketing Basis",
            []
        ],
        [
            "Marketing Approval ID",
            []
        ],
        [
            "Labeled Shelf Life",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Expected Shelf Life",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Date First Marketed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Date Last Marketed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "PEO": [
        [
            "Event Identifiers Used",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Event Symptom/Diagnosis Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Event Onset Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Exacerbation Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Improved Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Ended Data/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Location Occurred Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Event Qualification",
            []
        ],
        [
            "Event Serious",
            []
        ],
        [
            "Event Expected",
            []
        ],
        [
            "Event Outcome",
            []
        ],
        [
            "Patient Outcome",
            []
        ],
        [
            "Event Description From Others",
            []
        ],
        [
            "Event From Original Reporter",
            []
        ],
        [
            "Event Description From Patient",
            []
        ],
        [
            "Event Description From Practitioner",
            []
        ],
        [
            "Event Description From Autopsy",
            []
        ],
        [
            "Cause Of Death",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Primary Observer Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Primary Observer Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Primary Observer Telephone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Primary Observer's Qualification",
            []
        ],
        [
            "Confirmation Provided By",
            []
        ],
        [
            "Primary Observer Aware Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Primary Observer's identity May Be Divulged",
            []
        ]
    ],
    "PES": [
        [
            "Sender Organization Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Sender Individual Name",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Sender Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Sender Telephone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Sender Event Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Sender Sequence Number",
            []
        ],
        [
            "Sender Event Description",
            []
        ],
        [
            "Sender Comment",
            []
        ],
        [
            "Sender Aware Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Report Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Event Report Timing/Type",
            []
        ],
        [
            "Event Report Source",
            []
        ],
        [
            "Event Reported To",
            []
        ]
    ],
    "PID": [
        [
            "Set ID - PID",
            []
        ],
        [
            "Patient ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Patient Identifier List",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Alternate Patient ID - PID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Patient Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Mother's Maiden Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Date/Time of Birth",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Administrative Sex",
            []
        ],
        [
            "Patient Alias",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Race",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "County Code",
            []
        ],
        [
            "Phone Number - Home",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Phone Number - Business",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Primary Language",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Marital Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Religion",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Account Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "SSN Number - Patient",
            []
        ],
        [
            "Driver's License Number - Patient",
            [
                "License Number",
                "Issuing State, Province, Country",
                "Expiration Date"
            ]
        ],
        [
            "Mother's Identifier",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Ethnic Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Birth Place",
            []
        ],
        [
            "Multiple Birth Indicator",
            []
        ],
        [
            "Birth Order",
            []
        ],
        [
            "Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Veterans Military Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Nationality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Death Date and Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Patient Death Indicator",
            []
        ],
        [
            "Identity Unknown Indicator",
            []
        ],
        [
            "Identity Reliability Code",
            []
        ],
        [
            "Last Update Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Last Update Facility",
            [
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Species Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Breed Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Strain",
            []
        ],
        [
            "Production Class Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Tribal Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "PR1": [
        [
            "Set ID - PR1",
            []
        ],
        [
            "Procedure Coding Method",
            []
        ],
        [
            "Procedure Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Description",
            []
        ],
        [
            "Procedure Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Procedure Functional Type",
            []
        ],
        [
            "Procedure Minutes",
            []
        ],
        [
            "Anesthesiologist",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Anesthesia Code",
            []
        ],
        [
            "Anesthesia Minutes",
            []
        ],
        [
            "Surgeon",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Procedure Practitioner",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Consent Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Priority",
            []
        ],
        [
            "Associated Diagnosis Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Code Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure DRG Type",
            []
        ],
        [
            "Tissue Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Procedure Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Procedure Action Code",
            []
        ]
    ],
    "PRA": [
        [
            "Primary Key Value - PRA",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Practitioner Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Practitioner Category",
            []
        ],
        [
            "Provider Billing",
            []
        ],
        [
            "Specialty",
            [
                "Specialty Name",
                "Governing Board",
                "Eligible Or Certified",
                "Date Of Certification"
            ]
        ],
        [
            "Practitioner ID Numbers",
            [
                "Id Number",
                "Type Of Id Number",
                "State/Other Qualifying Information",
                "Expiration Date"
            ]
        ],
        [
            "Privileges",
            [
                "Privilege",
                "Privilege Class",
                "Expiration Date",
                "Activation Date",
                "Facility"
            ]
        ],
        [
            "Date Entered Practice",
            []
        ],
        [
            "Institution",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date Left Practice",
            []
        ],
        [
            "Government Reimbursement Billing Eligibility",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Set ID - PRA",
            []
        ]
    ],
    "PRB": [
        [
            "Action Code",
            []
        ],
        [
            "Action Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Problem ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Instance ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Episode of Care ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Problem List Priority",
            []
        ],
        [
            "Problem Established Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Anticipated Problem Resolution Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Actual Problem Resolution Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Problem Classification",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Management Discipline",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Persistence",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Confirmation Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Life Cycle Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Life Cycle Status Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Problem Date of Onset",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Problem Onset Text",
            []
        ],
        [
            "Problem Ranking",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Certainty of Problem (0-1)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Probability of Problem",
            []
        ],
        [
            "Individual Awareness of Problem",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Problem Prognosis",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Individual Awareness of Prognosis",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Family/Significant Other Awareness of Problem/Prognosis",
            []
        ],
        [
            "Security/Sensitivity",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "PRC": [
        [
            "Primary Key Value - PRC",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Facility ID - PRC",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Department",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Valid Patient Classes",
            []
        ],
        [
            "Price",
            [
                "Price",
                "Price Type",
                "From Value",
                "To Value",
                "Range Units",
                "Range Type"
            ]
        ],
        [
            "Formula",
            []
        ],
        [
            "Minimum Quantity",
            []
        ],
        [
            "Maximum Quantity",
            []
        ],
        [
            "Minimum Price",
            [
                "Quantity",
                "Denomination"
            ]
        ],
        [
            "Maximum Price",
            [
                "Quantity",
                "Denomination"
            ]
        ],
        [
            "Effective Start Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Effective End Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Price Override Flag",
            []
        ],
        [
            "Billing Category",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Chargeable Flag",
            []
        ],
        [
            "Active/Inactive Flag",
            []
        ],
        [
            "Cost",
            [
                "Quantity",
                "Denomination"
            ]
        ],
        [
            "Charge On Indicator",
            []
        ]
    ],
    "PRD": [
        [
            "Provider Role",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Provider Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Provider Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Provider Communication Information",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Preferred Method of Contact",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider Identifiers",
            [
                "Id Number",
                "Type Of Id Number",
                "State/Other Qualifying Information",
                "Expiration Date"
            ]
        ],
        [
            "Effective Start Date of Provider Role",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Effective End Date of Provider Role",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "PSH": [
        [
            "Report Type",
            []
        ],
        [
            "Report Form Identifier",
            []
        ],
        [
            "Report Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Report Interval Start Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Report Interval End Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Quantity Manufactured",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Quantity Distributed",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Quantity Distributed Method",
            []
        ],
        [
            "Quantity Distributed Comment",
            []
        ],
        [
            "Quantity in Use",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Quantity in Use Method",
            []
        ],
        [
            "Quantity in Use Comment",
            []
        ],
        [
            "Number of Product Experience Reports Filed by Facility",
            []
        ],
        [
            "Number of Product Experience Reports Filed by Distributor",
            []
        ]
    ],
    "PTH": [
        [
            "Action Code",
            []
        ],
        [
            "Pathway ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Pathway Instance ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Pathway Established Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Pathway Life Cycle Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Change Pathway Life Cycle Status Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "PV1": [
        [
            "Set ID - PV1",
            []
        ],
        [
            "Patient Class",
            []
        ],
        [
            "Assigned Patient Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Admission Type",
            []
        ],
        [
            "Preadmit Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prior Patient Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Attending Doctor",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Referring Doctor",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Consulting Doctor",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Hospital Service",
            []
        ],
        [
            "Temporary Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Preadmit Test Indicator",
            []
        ],
        [
            "Re-admission Indicator",
            []
        ],
        [
            "Admit Source",
            []
        ],
        [
            "Ambulatory Status",
            []
        ],
        [
            "VIP Indicator",
            []
        ],
        [
            "Admitting Doctor",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Patient Type",
            []
        ],
        [
            "Visit Number",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Financial Class",
            [
                "Financial Class Code",
                "Effective Date"
            ]
        ],
        [
            "Charge Price Indicator",
            []
        ],
        [
            "Courtesy Code",
            []
        ],
        [
            "Credit Rating",
            []
        ],
        [
            "Contract Code",
            []
        ],
        [
            "Contract Effective Date",
            []
        ],
        [
            "Contract Amount",
            []
        ],
        [
            "Contract Period",
            []
        ],
        [
            "Interest Code",
            []
        ],
        [
            "Transfer to Bad Debt Code",
            []
        ],
        [
            "Transfer to Bad Debt Date",
            []
        ],
        [
            "Bad Debt Agency Code",
            []
        ],
        [
            "Bad Debt Transfer Amount",
            []
        ],
        [
            "Bad Debt Recovery Amount",
            []
        ],
        [
            "Delete Account Indicator",
            []
        ],
        [
            "Delete Account Date",
            []
        ],
        [
            "Discharge Disposition",
            []
        ],
        [
            "Discharged to Location",
            [
                "Discharge Location",
                "Effective Date"
            ]
        ],
        [
            "Diet Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Servicing Facility",
            []
        ],
        [
            "Bed Status",
            []
        ],
        [
            "Account Status",
            []
        ],
        [
            "Pending Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Prior Temporary Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Admit Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Discharge Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Current Patient Balance",
            []
        ],
        [
            "Total Charges",
            []
        ],
        [
            "Total Adjustments",
            []
        ],
        [
            "Total Payments",
            []
        ],
        [
            "Alternate Visit ID",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Visit Indicator",
            []
        ],
        [
            "Other Healthcare Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ]
    ],
    "PV2": [
        [
            "Prior Pending Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Accommodation Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Admit Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Transfer Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Valuables",
            []
        ],
        [
            "Patient Valuables Location",
            []
        ],
        [
            "Visit User Code",
            []
        ],
        [
            "Expected Admit Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Expected Discharge Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Estimated Length of Inpatient Stay",
            []
        ],
        [
            "Actual Length of Inpatient Stay",
            []
        ],
        [
            "Visit Description",
            []
        ],
        [
            "Referral Source Code",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Previous Service Date",
            []
        ],
        [
            "Employment Illness Related Indicator",
            []
        ],
        [
            "Purge Status Code",
            []
        ],
        [
            "Purge Status Date",
            []
        ],
        [
            "Special Program Code",
            []
        ],
        [
            "Retention Indicator",
            []
        ],
        [
            "Expected Number of Insurance Plans",
            []
        ],
        [
            "Visit Publicity Code",
            []
        ],
        [
            "Visit Protection Indicator",
            []
        ],
        [
            "Clinic Organization Name",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Patient Status Code",
            []
        ],
        [
            "Visit Priority Code",
            []
        ],
        [
            "Previous Treatment Date",
            []
        ],
        [
            "Expected Discharge Disposition",
            []
        ],
        [
            "Signature on File Date",
            []
        ],
        [
            "First Similar Illness Date",
            []
        ],
        [
            "Patient Charge Adjustment Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Recurring Service Code",
            []
        ],
        [
            "Billing Media Code",
            []
        ],
        [
            "Expected Surgery Date and Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Military Partnership Code",
            []
        ],
        [
            "Military Non-Availability Code",
            []
        ],
        [
            "Newborn Baby Indicator",
            []
        ],
        [
            "Baby Detained Indicator",
            []
        ],
        [
            "Mode of Arrival Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Recreational Drug Use Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Admission Level of Care Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Precaution Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Condition Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Living Will Code",
            []
        ],
        [
            "Organ Donor Code",
            []
        ],
        [
            "Advance Directive Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Patient Status Effective Date",
            []
        ],
        [
            "Expected LOA Return Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Expected Pre-admission Testing Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Notify Clergy Code",
            []
        ]
    ],
    "QAK": [
        [
            "Query Tag",
            []
        ],
        [
            "Query Response Status",
            []
        ],
        [
            "Message Query Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Hit Count",
            []
        ],
        [
            "This payload",
            []
        ],
        [
            "Hits remaining",
            []
        ]
    ],
    "QID": [
        [
            "Query Tag",
            []
        ],
        [
            "Message Query Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "QPD": [
        [
            "Message Query Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Query Tag",
            []
        ],
        [
            "User Parameters (in successive fields)",
            []
        ]
    ],
    "QRD": [
        [
            "Query Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Query Format Code",
            []
        ],
        [
            "Query Priority",
            []
        ],
        [
            "Query ID",
            []
        ],
        [
            "Deferred Response Type",
            []
        ],
        [
            "Deferred Response Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Quantity Limited Request",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Who Subject Filter",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "What Subject Filter",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "What Department Data Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "What Data Code Value Qual.",
            [
                "First Data Code Value",
                "Last Data Code Value"
            ]
        ],
        [
            "Query Results Level",
            []
        ]
    ],
    "QRF": [
        [
            "Where Subject Filter",
            []
        ],
        [
            "When Data Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "When Data End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "What User Qualifier",
            []
        ],
        [
            "Other QRY Subject Filter",
            []
        ],
        [
            "Which Date/Time Qualifier",
            []
        ],
        [
            "Which Date/Time Status Qualifier",
            []
        ],
        [
            "Date/Time Selection Qualifier",
            []
        ],
        [
            "When Quantity/Timing Qualifier",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Search Confidence Threshold",
            []
        ]
    ],
    "QRI": [
        [
            "Candidate Confidence",
            []
        ],
        [
            "Match Reason Code",
            []
        ],
        [
            "Algorithm Descriptor",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "RCP": [
        [
            "Query Priority",
            []
        ],
        [
            "Quantity Limited Request",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Response Modality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Execution and Delivery Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Modify Indicator",
            []
        ],
        [
            "Sort-by Field",
            [
                "Sort-by Field",
                "Sequencing"
            ]
        ],
        [
            "Segment group inclusion",
            []
        ]
    ],
    "RDF": [
        [
            "Number of Columns per Row",
            []
        ],
        [
            "Column Description",
            [
                "Segment Field Name",
                "Hl7 Data Type",
                "Maximum Column Width"
            ]
        ]
    ],
    "RDT": [
        [
            "Column Value",
            []
        ]
    ],
    "RF1": [
        [
            "Referral Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Referral Priority",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Referral Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Referral Disposition",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Referral Category",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Originating Referral Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Effective Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Process Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Referral Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "External Referral Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "RGS": [
        [
            "Set ID - RGS",
            []
        ],
        [
            "Segment Action Code",
            []
        ],
        [
            "Resource Group ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "RMI": [
        [
            "Risk Management Incident Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/Time Incident",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Incident Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "ROL": [
        [
            "Role Instance ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Action Code",
            []
        ],
        [
            "Role-ROL",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Role Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Role Begin Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Role End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Role Duration",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Role Action Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Organization Unit Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Office/Home Address/Birthplace",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Phone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ]
    ],
    "RQ1": [
        [
            "Anticipated Price",
            []
        ],
        [
            "Manufacturer Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Manufacturer's Catalog",
            []
        ],
        [
            "Vendor ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Vendor Catalog",
            []
        ],
        [
            "Taxable",
            []
        ],
        [
            "Substitute Allowed",
            []
        ]
    ],
    "RQD": [
        [
            "Requisition Line Number",
            []
        ],
        [
            "Item Code - Internal",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Item Code - External",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Hospital Item Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requisition Quantity",
            []
        ],
        [
            "Requisition Unit of Measure",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dept. Cost Center",
            []
        ],
        [
            "Item Natural Account Code",
            []
        ],
        [
            "Deliver To ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date Needed",
            []
        ]
    ],
    "RXA": [
        [
            "Give Sub-ID Counter",
            []
        ],
        [
            "Administration Sub-ID Counter",
            []
        ],
        [
            "Date/Time Start of Administration",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Date/Time End of Administration",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Administered Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administered Amount",
            []
        ],
        [
            "Administered Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administered Dosage Form",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administration Notes",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administering Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Administered-at Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor",
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation"
            ]
        ],
        [
            "Administered Per (Time Unit)",
            []
        ],
        [
            "Administered Strength",
            []
        ],
        [
            "Administered Strength Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Lot Number",
            []
        ],
        [
            "Substance Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Substance Manufacturer Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance/Treatment Refusal Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Indication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Completion Status",
            []
        ],
        [
            "Action Code - RXA",
            []
        ],
        [
            "System Entry Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Administered Drug Strength Volume",
            []
        ],
        [
            "Administered Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Administered Barcode Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Pharmacy Order Type",
            []
        ]
    ],
    "RXC": [
        [
            "RX Component Type",
            []
        ],
        [
            "Component Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Component Amount",
            []
        ],
        [
            "Component Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Component Strength",
            []
        ],
        [
            "Component Strength Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Supplementary Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Component Drug Strength Volume",
            []
        ],
        [
            "Component Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "RXD": [
        [
            "Dispense Sub-ID Counter",
            []
        ],
        [
            "Dispense/Give Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Date/Time Dispensed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Actual Dispense Amount",
            []
        ],
        [
            "Actual Dispense Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Actual Dosage Form",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Prescription Number",
            []
        ],
        [
            "Number of Refills Remaining",
            []
        ],
        [
            "Dispense Notes",
            []
        ],
        [
            "Dispensing Provider",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Substitution Status",
            []
        ],
        [
            "Total Daily Dose",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Dispense-to Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor",
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation"
            ]
        ],
        [
            "Needs Human Review",
            []
        ],
        [
            "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Actual Strength",
            []
        ],
        [
            "Actual Strength Unit",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Lot Number",
            []
        ],
        [
            "Substance Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Substance Manufacturer Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Indication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dispense Package Size",
            []
        ],
        [
            "Dispense Package Size Unit",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dispense Package Method",
            []
        ],
        [
            "Supplementary Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Initiating Location",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Packaging/Assembly Location",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Actual Drug Strength Volume",
            []
        ],
        [
            "Actual Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Dispense to Pharmacy",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Dispense to Pharmacy Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Pharmacy Order Type",
            []
        ],
        [
            "Dispense Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "RXE": [
        [
            "Quantity/Timing",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Give Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Amount - Minimum",
            []
        ],
        [
            "Give Amount - Maximum",
            []
        ],
        [
            "Give Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Dosage Form",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider's Administration Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Deliver-To Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor",
                "Address"
            ]
        ],
        [
            "Substitution Status",
            []
        ],
        [
            "Dispense Amount",
            []
        ],
        [
            "Dispense Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Number Of Refills",
            []
        ],
        [
            "Ordering Provider's DEA Number",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Pharmacist/Treatment Supplier's Verifier ID",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Prescription Number",
            []
        ],
        [
            "Number of Refills Remaining",
            []
        ],
        [
            "Number of Refills/Doses Dispensed",
            []
        ],
        [
            "D/T of Most Recent Refill or Dose Dispensed",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Total Daily Dose",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Needs Human Review",
            []
        ],
        [
            "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Per (Time Units)",
            []
        ],
        [
            "Give Rate Amount",
            []
        ],
        [
            "Give Rate Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Strength",
            []
        ],
        [
            "Give Strength Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Indication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dispense Package Size",
            []
        ],
        [
            "Dispense Package Size Unit",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dispense Package Method",
            []
        ],
        [
            "Supplementary Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Original Order Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Give Drug Strength Volume",
            []
        ],
        [
            "Give Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Controlled Substance Schedule",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Formulary Status",
            []
        ],
        [
            "Pharmaceutical Substance Alternative",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Pharmacy of Most Recent Fill",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Initial Dispense Amount",
            []
        ],
        [
            "Dispensing Pharmacy",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Dispensing Pharmacy Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Deliver-to Patient Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Deliver-to Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Pharmacy Order Type",
            []
        ]
    ],
    "RXG": [
        [
            "Give Sub-ID Counter",
            []
        ],
        [
            "Dispense Sub-ID Counter",
            []
        ],
        [
            "Quantity/Timing",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Give Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Amount - Minimum",
            []
        ],
        [
            "Give Amount - Maximum",
            []
        ],
        [
            "Give Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Dosage Form",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administration Notes",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substitution Status",
            []
        ],
        [
            "Dispense-to Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor",
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation"
            ]
        ],
        [
            "Needs Human Review",
            []
        ],
        [
            "Pharmacy/Treatment Supplier's Special Administration Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Per (Time Unit)",
            []
        ],
        [
            "Give Rate Amount",
            []
        ],
        [
            "Give Rate Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Strength",
            []
        ],
        [
            "Give Strength Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Lot Number",
            []
        ],
        [
            "Substance Expiration Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Substance Manufacturer Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Indication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Give Drug Strength Volume",
            []
        ],
        [
            "Give Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Give Barcode Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Pharmacy Order Type",
            []
        ]
    ],
    "RXO": [
        [
            "Requested Give Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Give Amount - Minimum",
            []
        ],
        [
            "Requested Give Amount - Maximum",
            []
        ],
        [
            "Requested Give Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Dosage Form",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider's Pharmacy/Treatment Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Provider's Administration Instructions",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Deliver-To Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Patient Location Type",
                "Building",
                "Floor",
                "Address"
            ]
        ],
        [
            "Allow Substitutions",
            []
        ],
        [
            "Requested Dispense Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Dispense Amount",
            []
        ],
        [
            "Requested Dispense Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Number Of Refills",
            []
        ],
        [
            "Ordering Provider's DEA Number",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Pharmacist/Treatment Supplier's Verifier ID",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Needs Human Review",
            []
        ],
        [
            "Requested Give Per (Time Unit)",
            []
        ],
        [
            "Requested Give Strength",
            []
        ],
        [
            "Requested Give Strength Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Indication",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Give Rate Amount",
            []
        ],
        [
            "Requested Give Rate Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Total Daily Dose",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Supplementary Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Requested Drug Strength Volume",
            []
        ],
        [
            "Requested Drug Strength Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Pharmacy Order Type",
            []
        ],
        [
            "Dispensing Interval",
            []
        ]
    ],
    "RXR": [
        [
            "Route",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administration Site",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Administration Device",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administration Method",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Routing Instruction",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Administration Site Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "SAC": [
        [
            "External Accession Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Accession Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Container Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Primary (parent) Container Identifier ",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Equipment Container Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Specimen Source",
            [
                "Specimen Source Name Or Code",
                "Additives",
                "Specimen Collection Method",
                "Body Site",
                "Site Modifier",
                "Collection Method Modifier Code",
                "Specimen Role"
            ]
        ],
        [
            "Registration Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Container Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Carrier Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Carrier Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Position in Carrier",
            [
                "Value1",
                "Value2",
                "Value3",
                "Value4",
                "Value5",
                "Value6",
                "Value7",
                "Value8",
                "Value9",
                "Value10"
            ]
        ],
        [
            "Tray Type - SAC",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Tray Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Position in Tray",
            [
                "Value1",
                "Value2",
                "Value3",
                "Value4",
                "Value5",
                "Value6",
                "Value7",
                "Value8",
                "Value9",
                "Value10"
            ]
        ],
        [
            "Location",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Container Height",
            []
        ],
        [
            "Container Diameter",
            []
        ],
        [
            "Barrier Delta",
            []
        ],
        [
            "Bottom Delta",
            []
        ],
        [
            "Container Height/Diameter/Delta Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Container Volume",
            []
        ],
        [
            "Available Specimen Volume",
            []
        ],
        [
            "Initial Specimen Volume",
            []
        ],
        [
            "Volume Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Separator Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Cap Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Additive",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Component",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Dilution Factor",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Treatment",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Temperature",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Hemolysis Index",
            []
        ],
        [
            "Hemolysis Index Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Lipemia Index",
            []
        ],
        [
            "Lipemia Index Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Icterus Index",
            []
        ],
        [
            "Icterus Index Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Fibrin Index",
            []
        ],
        [
            "Fibrin Index Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "System Induced Contaminants",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Drug Interference",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Artificial Blood",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Special Handling Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Other Environmental Factors",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "SCH": [
        [
            "Placer Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Occurrence Number",
            []
        ],
        [
            "Placer Group Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Schedule ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Event Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Duration",
            []
        ],
        [
            "Appointment Duration Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Appointment Timing Quantity",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ],
        [
            "Placer Contact Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Placer Contact Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Placer Contact Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Placer Contact Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Filler Contact Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Filler Contact Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Filler Contact Address",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Filler Contact Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Entered By Person",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Entered By Phone Number",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Entered By Location",
            [
                "Point Of Care",
                "Room",
                "Bed",
                "Facility",
                "Location Status",
                "Person Location Type",
                "Building",
                "Floor",
                "Location Description",
                "Comprehensive Location Identifier",
                "Assigning Authority For Location"
            ]
        ],
        [
            "Parent Placer Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Parent Filler Appointment ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Placer Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ]
    ],
    "SFT": [
        [
            "Software Vendor Organization",
            [
                "Organization Name",
                "Organization Name Type Code",
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Organization Identifier"
            ]
        ],
        [
            "Software Certified Version or Release Number",
            []
        ],
        [
            "Software Product Name",
            []
        ],
        [
            "Software Binary ID",
            []
        ],
        [
            "Software Product Information",
            []
        ],
        [
            "Software Install Date",
            [
                "Time",
                "Degree Of Precision"
            ]
        ]
    ],
    "SID": [
        [
            "Application / Method Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Substance Lot Number",
            []
        ],
        [
            "Substance Container Identifier",
            []
        ],
        [
            "Substance Manufacturer Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "SPM": [
        [
            "Set ID - SPM",
            []
        ],
        [
            "Specimen ID",
            [
                "Placer Assigned Identifier",
                "Filler Assigned Identifier"
            ]
        ],
        [
            "Specimen Parent IDs",
            [
                "Placer Assigned Identifier",
                "Filler Assigned Identifier"
            ]
        ],
        [
            "Specimen Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Type Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Additives",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Collection Method",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Source Site",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Source Site Modifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Collection Site",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Role",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Collection Amount",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Grouped Specimen Count",
            []
        ],
        [
            "Specimen Description",
            []
        ],
        [
            "Specimen Handling Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Risk Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Collection Date/Time",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Specimen Received Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Specimen Expiration Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Specimen Availability",
            []
        ],
        [
            "Specimen Reject Reason",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Quality",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Appropriateness",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Condition",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Current Quantity",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Number of Specimen Containers",
            []
        ],
        [
            "Container Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Container Condition",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Specimen Child Role",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "SPR": [
        [
            "Query Tag",
            []
        ],
        [
            "Query/Response Format Code",
            []
        ],
        [
            "Stored Procedure Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Input Parameter List",
            [
                "Segment Field Name",
                "Values"
            ]
        ]
    ],
    "STF": [
        [
            "Primary Key Value - STF",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Staff Identifier List",
            [
                "Id Number",
                "Check Digit",
                "Check Digit Scheme",
                "Assigning Authority",
                "Identifier Type Code",
                "Assigning Facility",
                "Effective Date",
                "Expiration Date",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Staff Name",
            [
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Name Type Code",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix"
            ]
        ],
        [
            "Staff Type",
            []
        ],
        [
            "Administrative Sex",
            []
        ],
        [
            "Date/Time of Birth",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Active/Inactive Flag",
            []
        ],
        [
            "Department",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Hospital Service - STF",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Phone",
            [
                "Telephone Number",
                "Telecommunication Use Code",
                "Telecommunication Equipment Type",
                "Email Address",
                "Country Code",
                "Area/City Code",
                "Local Number",
                "Extension",
                "Any Text",
                "Extension Prefix",
                "Speed Dial Code",
                "Unformatted Telephone Number"
            ]
        ],
        [
            "Office/Home Address/Birthplace",
            [
                "Street Address",
                "Other Designation",
                "City",
                "State Or Province",
                "Zip Or Postal Code",
                "Country",
                "Address Type",
                "Other Geographic Designation",
                "County/Parish Code",
                "Census Tract",
                "Address Representation Code",
                "Address Validity Range",
                "Effective Date",
                "Expiration Date"
            ]
        ],
        [
            "Institution Activation Date",
            [
                "Date",
                "Institution Name"
            ]
        ],
        [
            "Institution Inactivation Date",
            [
                "Date",
                "Institution Name"
            ]
        ],
        [
            "Backup Person ID",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "E-Mail Address",
            []
        ],
        [
            "Preferred Method of Contact",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Marital Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Job Title",
            []
        ],
        [
            "Job Code/Class",
            [
                "Job Code",
                "Job Class",
                "Job Description Text"
            ]
        ],
        [
            "Employment Status Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Additional Insured on Auto",
            []
        ],
        [
            "Driver's License Number - Staff",
            [
                "License Number",
                "Issuing State, Province, Country",
                "Expiration Date"
            ]
        ],
        [
            "Copy Auto Ins",
            []
        ],
        [
            "Auto Ins. Expires",
            []
        ],
        [
            "Date Last DMV Review",
            []
        ],
        [
            "Date Next DMV Review",
            []
        ],
        [
            "Race",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Ethnic Group",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Re-activation Approval Indicator",
            []
        ],
        [
            "Citizenship",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Death Date and Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Death Indicator",
            []
        ],
        [
            "Institution Relationship Type Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Institution Relationship Period",
            [
                "Range Start Date/Time",
                "Range End Date/Time"
            ]
        ],
        [
            "Expected Return Date",
            []
        ],
        [
            "Cost Center Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Generic Classification Indicator",
            []
        ],
        [
            "Inactive Reason Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ]
    ],
    "TCC": [
        [
            "Universal Service Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Test Application Identifier",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Specimen Source",
            [
                "Specimen Source Name Or Code",
                "Additives",
                "Specimen Collection Method",
                "Body Site",
                "Site Modifier",
                "Collection Method Modifier Code",
                "Specimen Role"
            ]
        ],
        [
            "Auto-Dilution Factor Default",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Rerun Dilution Factor Default",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Pre-Dilution Factor Default",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Endogenous Content of Pre-Dilution Diluent",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Inventory Limits Warning Level",
            []
        ],
        [
            "Automatic Rerun Allowed",
            []
        ],
        [
            "Automatic Repeat Allowed",
            []
        ],
        [
            "Automatic Reflex Allowed",
            []
        ],
        [
            "Equipment Dynamic Range",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Units",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Processing Type",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "TCD": [
        [
            "Universal Service Identifier",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Auto-Dilution Factor",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Rerun Dilution Factor",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Pre-Dilution Factor",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Endogenous Content of Pre-Dilution Diluent",
            [
                "Comparator",
                "Num1",
                "Separator/Suffix",
                "Num2"
            ]
        ],
        [
            "Automatic Repeat Allowed",
            []
        ],
        [
            "Reflex Allowed",
            []
        ],
        [
            "Analyte Repeat Status",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ]
    ],
    "TQ1": [
        [
            "Set ID - TQ1",
            []
        ],
        [
            "Quantity",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Repeat Pattern",
            [
                "Repeat Pattern Code",
                "Calendar Alignment",
                "Phase Range Begin Value",
                "Phase Range End Value",
                "Period Quantity",
                "Period Units",
                "Institution Specified Time",
                "Event",
                "Event Offset Quantity",
                "Event Offset Units",
                "General Timing Specification"
            ]
        ],
        [
            "Explicit Time",
            []
        ],
        [
            "Relative Time and Units",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Service Duration",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Start date/time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "End date/time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Priority",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System",
                "Coding System Version Id",
                "Alternate Coding System Version Id",
                "Original Text"
            ]
        ],
        [
            "Condition text",
            []
        ],
        [
            "Text instruction",
            []
        ],
        [
            "Conjunction",
            []
        ],
        [
            "Occurrence duration",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Total occurrences",
            []
        ]
    ],
    "TQ2": [
        [
            "Set ID - TQ2",
            []
        ],
        [
            "Sequence/Results Flag",
            []
        ],
        [
            "Related Placer Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Related Filler Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Related Placer Group Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Sequence Condition Code",
            []
        ],
        [
            "Cyclic Entry/Exit Indicator",
            []
        ],
        [
            "Sequence Condition Time Interval",
            [
                "Quantity",
                "Units"
            ]
        ],
        [
            "Cyclic Group Maximum Number of Repeats",
            []
        ],
        [
            "Special Service Request Relationship",
            []
        ]
    ],
    "TXA": [
        [
            "Set ID - TXA",
            []
        ],
        [
            "Document Type",
            []
        ],
        [
            "Document Content Presentation",
            []
        ],
        [
            "Activity Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Primary Activity Provider Code/Name",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Origination Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Transcription Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Edit Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Originator Code/Name",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Assigned Document Authenticator",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Transcriptionist Code/Name",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Unique Document Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Parent Document Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Placer Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Filler Order Number",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Unique Document File Name",
            []
        ],
        [
            "Document Completion Status",
            []
        ],
        [
            "Document Confidentiality Status",
            []
        ],
        [
            "Document Availability Status",
            []
        ],
        [
            "Document Storage Status",
            []
        ],
        [
            "Document Change Reason",
            []
        ],
        [
            "Authentication Person, Time Stamp",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Date/Time Action Performed",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Distributed Copies (Code and Name of Recipients) ",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ]
    ],
    "UB1": [
        [
            "Set ID - UB1",
            []
        ],
        [
            "Blood Deductible (43)",
            []
        ],
        [
            "Blood Furnished-Pints Of (40)",
            []
        ],
        [
            "Blood Replaced-Pints (41)",
            []
        ],
        [
            "Blood Not Replaced-Pints (42)",
            []
        ],
        [
            "Co-Insurance Days (25)",
            []
        ],
        [
            "Condition Code (35-39)",
            []
        ],
        [
            "Covered Days (23)",
            []
        ],
        [
            "Non Covered Days (24)",
            []
        ],
        [
            "Value Amount and Code (46-49)",
            [
                "Value Code",
                "Value Amount"
            ]
        ],
        [
            "Number Of Grace Days (90)",
            []
        ],
        [
            "Special Program Indicator (44)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "PSRO/UR Approval Indicator (87)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "PSRO/UR Approved Stay-Fm (88)",
            []
        ],
        [
            "PSRO/UR Approved Stay-To (89)",
            []
        ],
        [
            "Occurrence (28-32)",
            [
                "Occurrence Code",
                "Occurrence Date"
            ]
        ],
        [
            "Occurrence Span (33)",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Occur Span Start Date (33)",
            []
        ],
        [
            "Occur Span End Date (33)",
            []
        ],
        [
            "UB-82 Locator 2",
            []
        ],
        [
            "UB-82 Locator 9",
            []
        ],
        [
            "UB-82 Locator 27",
            []
        ],
        [
            "UB-82 Locator 45",
            []
        ]
    ],
    "UB2": [
        [
            "Set ID - UB2",
            []
        ],
        [
            "Co-Insurance Days (9)",
            []
        ],
        [
            "Condition Code (24-30)",
            []
        ],
        [
            "Covered Days (7)",
            []
        ],
        [
            "Non-Covered Days (8)",
            []
        ],
        [
            "Value Amount and Code",
            [
                "Value Code",
                "Value Amount"
            ]
        ],
        [
            "Occurrence Code and Date (32-35)",
            [
                "Occurrence Code",
                "Occurrence Date"
            ]
        ],
        [
            "Occurrence Span Code/Dates (36)",
            [
                "Occurrence Span Code",
                "Occurrence Span Start Date",
                "Occurrence Span Stop Date"
            ]
        ],
        [
            "UB92 Locator 2 (State)",
            []
        ],
        [
            "UB92 Locator 11 (State)",
            []
        ],
        [
            "UB92 Locator 31 (National)",
            []
        ],
        [
            "Document Control Number",
            []
        ],
        [
            "UB92 Locator 49 (National)",
            []
        ],
        [
            "UB92 Locator 56 (State)",
            []
        ],
        [
            "UB92 Locator 57 (National)",
            []
        ],
        [
            "UB92 Locator 78 (State)",
            []
        ],
        [
            "Special Visit Count",
            []
        ]
    ],
    "URD": [
        [
            "R/U Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Report Priority",
            []
        ],
        [
            "R/U Who Subject Definition",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "R/U What Subject Definition",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "R/U What Department Code",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "R/U Display/Print Locations",
            []
        ],
        [
            "R/U Results Level",
            []
        ]
    ],
    "URS": [
        [
            "R/U Where Subject Definition",
            []
        ],
        [
            "R/U When Data Start Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "R/U When Data End Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "R/U What User Qualifier",
            []
        ],
        [
            "R/U Other Results Subject Definition",
            []
        ],
        [
            "R/U Which Date/Time Qualifier",
            []
        ],
        [
            "R/U Which Date/Time Status Qualifier",
            []
        ],
        [
            "R/U Date/Time Selection Qualifier",
            []
        ],
        [
            "R/U Quantity/Timing Qualifier",
            [
                "Quantity",
                "Interval",
                "Duration",
                "Start Date/Time",
                "End Date/Time",
                "Priority",
                "Condition",
                "Text",
                "Conjunction",
                "Order Sequencing",
                "Occurrence Duration",
                "Total Occurrences"
            ]
        ]
    ],
    "VAR": [
        [
            "Variance Instance ID",
            [
                "Entity Identifier",
                "Namespace Id",
                "Universal Id",
                "Universal Id Type"
            ]
        ],
        [
            "Documented Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Stated Variance Date/Time",
            [
                "Time",
                "Degree Of Precision"
            ]
        ],
        [
            "Variance Originator",
            [
                "Id Number",
                "Family Name",
                "Given Name",
                "Second And Further Given Names Or Initials Thereof",
                "Suffix (e.g., Jr Or Iii)",
                "Prefix (e.g., Dr)",
                "Degree (e.g., Md)",
                "Source Table",
                "Assigning Authority",
                "Name Type Code",
                "Identifier Check Digit",
                "Check Digit Scheme",
                "Identifier Type Code",
                "Assigning Facility",
                "Name Representation Code",
                "Name Context",
                "Name Validity Range",
                "Name Assembly Order",
                "Effective Date",
                "Expiration Date",
                "Professional Suffix",
                "Assigning Jurisdiction",
                "Assigning Agency Or Department"
            ]
        ],
        [
            "Variance Classification",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Variance Description",
            []
        ]
    ],
    "VTQ": [
        [
            "Query Tag",
            []
        ],
        [
            "Query/Response Format Code",
            []
        ],
        [
            "VT Query Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Virtual Table Name",
            [
                "Identifier",
                "Text",
                "Name Of Coding System",
                "Alternate Identifier",
                "Alternate Text",
                "Name Of Alternate Coding System"
            ]
        ],
        [
            "Selection Criteria",
            [
                "Segment Field Name",
                "Relational Operator",
                "Value",
                "Relational Conjunction"
            ]
        ]
    ]
}