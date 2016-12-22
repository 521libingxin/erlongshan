
//	Printer Data Constants
//	Created by Matthew McDonald on 23rd July 2013 - matthew.mcdonald@domino-uk.com
//	 * Moving constants from QML to JS
//
//	Usage:
//		* In QML file paste this at the top of the file:
//			import "../javascript/Constants.js" as Functionality
//		* When needing data from here, then use:
//			Functionality.variable
//			e.g. -> keys : [ Functionality.cij_PELTIER_ID, Functionality.cij_AIRDRYER_ID]


//===========================
// DEFINITIONS
//===========================
// --> Redefined 'PrinterData' as we can't import in a JS file
var USER_DEFINED_DATA = 0x10000000
var TTO_USER_DATA = USER_DEFINED_DATA
var CIJ_USER_DATA = USER_DEFINED_DATA + 0x01000000
var LASER_USER_DATA = USER_DEFINED_DATA + 0x02000000
var TIJ_USER_DATA = USER_DEFINED_DATA + 0x03000000
var OTHER_USER_DATA = USER_DEFINED_DATA + 0x04000000

// ==========================
// TTO
//===========================

// Define custom values here to try and give consistancy
var tto_ENGINEERING_KEY = TTO_USER_DATA + 0x1
var tto_ENGINEERING_VALUE = TTO_USER_DATA + 0x2
var tto_ENGINEERING_VALUE_LABEL = TTO_USER_DATA + 0x3
var tto_ENGINEERING_DEFAULT_VALUE = TTO_USER_DATA + 0x4
var tto_PRINT_HEAD_HEIGHT = TTO_USER_DATA + 5 
var tto_CONTINUOUS_HEAD_DOWN = TTO_USER_DATA + 0x6
var tto_CONTINUOUS_HEAD_DOWN_OFFSET = TTO_USER_DATA + 0x7
var tto_SYSTEM_ID = TTO_USER_DATA + 0x8
var tto_PRINT_SPEED = TTO_USER_DATA + 0x9
var tto_FULL_RIBBON_DIAMETER = TTO_USER_DATA + 0xA
var tto_FULL_RIBBON_LENGTH = TTO_USER_DATA + 0xB
var tto_RESIN_RIBBON_BOOST = TTO_USER_DATA + 0xC
var tto_RIBBON_TYPE = TTO_USER_DATA + 0xD

// ==========================
// CIJ
//===========================

var cij_DEFAULT_LABEL_REPEAT = CIJ_USER_DATA + 0x1
var cij_DEFAULT_LABEL_REPEAT_COUNT = CIJ_USER_DATA + 0x2
var cij_DEFAULT_LABEL_REPEAT_PITCH = CIJ_USER_DATA + 0x3
var cij_DEFAULT_LABEL_REPEAT_UPDATE = CIJ_USER_DATA + 0x4
var cij_DEFAULT_LABEL_REPEAT_EOP = CIJ_USER_DATA + 0x5

var cij_SELECTED_CALENDAR_SCHEME = CIJ_USER_DATA + 0x6
var cij_DEFAULT_CLOCK_DAY_NAMES = CIJ_USER_DATA + 0x7 // Table of 7 3-character strings
var cij_DEFAULT_CLOCK_ALPHA_HOURS = CIJ_USER_DATA + 0x8 // Table of 24 1-character strings
var cij_DEFAULT_CLOCK_MONTH_NAMES = CIJ_USER_DATA + 0x9 // Table of 12 3-characters strings

var cij_TEST_PRINT_INTERNAL_STROKE_RATE = CIJ_USER_DATA + 0xa // 0xa
var cij_TEST_PRINT_CONTINUOUS_ENABLED = CIJ_USER_DATA + 0xb // 0xb

var cij_AUTO_MOD_START_VOLTAGE = CIJ_USER_DATA + 0xc

var cij_TARGET_TEMP_JET2 = CIJ_USER_DATA + 0xd

var cij_AUTO_MESSAGE_CONVERT_ENABLED = CIJ_USER_DATA + 0xe

var cij_COUNTER_PERSISTENCE_ENABLED = CIJ_USER_DATA + 0xf
var cij_COUNTER_PERSISTENCE_PROMPT_RESET = CIJ_USER_DATA + 0x10
var cij_PERSISTENT_VARS_IN_LABEL = CIJ_USER_DATA + 0x11

var cij_SERVICE_ALERTS_ENABLED = CIJ_USER_DATA + 0x12
var cij_SERVICE_INTERVAL_REQUIRES_KEY = CIJ_USER_DATA + 0x13
var cij_CUSTOM_INK_CHANGE_REQUIRES_KEY = CIJ_USER_DATA + 0x14
var cij_CUSTOM_INK_CHANGE_ALERT_ENABLED = CIJ_USER_DATA + 0x15
var cij_CUSTOM_INK_CHANGE_FIRST_ALERT = CIJ_USER_DATA + 0x16
var cij_CUSTOM_INK_CHANGE_FINAL_ALERT = CIJ_USER_DATA + 0x17
var cij_ENERGY_SAVE_REQUIRES_KEY = CIJ_USER_DATA + 0x18
var cij_ENERGY_SAVE_ENABLED = CIJ_USER_DATA + 0x19
var cij_ENERGY_SAVE_TIME = CIJ_USER_DATA + 0x1a

var cij_JET1_GUTTER_STATE = CIJ_USER_DATA + 0x1b
var cij_JET2_GUTTER_STATE = CIJ_USER_DATA + 0x1c
var cij_GUTTER_PUMP_SPEED = CIJ_USER_DATA + 0x1d // rpm

var cij_DEFAULT_LABEL_FORWARD_OFFSET = CIJ_USER_DATA + 0x1e // int
var cij_DEFAULT_LABEL_REVERSE_OFFSET = CIJ_USER_DATA + 0x1f // int

var cij_USE_EXTENDED_INK_DATA = CIJ_USER_DATA + 0x20 // int

var cij_MAXIMUM_STROKE_RATE = CIJ_USER_DATA + 0x21 // int
var cij_GUTTER_PUMP_STATE = CIJ_USER_DATA + 0x64 // int
var cij_PUMP_STATE = CIJ_USER_DATA + 0x65
var cij_PUMP_SPEED_SETPOINT = CIJ_USER_DATA + 0x66
var cij_VALVE_FEED = CIJ_USER_DATA + 0x67 // bool
var cij_VALVE_BLEED = CIJ_USER_DATA + 0x68 // bool
var cij_VALVE_FLUSH = CIJ_USER_DATA + 0x69 // bool
var cij_VALVE_WASH = CIJ_USER_DATA + 0x6A // bool
var cij_VALVE_VISCOMETER = CIJ_USER_DATA + 0x6B // bool
var cij_VALVE_MAKEUP = CIJ_USER_DATA + 0x6C // bool
var cij_VALVE_NOZZLE = CIJ_USER_DATA + 0x6D // bool
var cij_VALVE_NOZZLE2 = CIJ_USER_DATA + 0x6E // bool
var cij_GUTTER_DRY_ALERT = CIJ_USER_DATA + 0x6F // bool
var cij_MONITOR_GUTTER_PUMP_SPEED = CIJ_USER_DATA + 0x70 // int
var cij_INK_VERSION = CIJ_USER_DATA + 0x71 // string
var cij_WASH_TYPE = CIJ_USER_DATA + 0x72 // string
var cij_INK_CLASS = CIJ_USER_DATA + 0x73 // string
var cij_INK_SYSTEM = CIJ_USER_DATA + 0x74 // string
var cij_FLIGHT_TIME = CIJ_USER_DATA + 0x75 // int
var cij_GUTTER_PUMP_TYPE = CIJ_USER_DATA + 0x76 // string

var cij_RESETTABLE_COUNTER_2_FUNCTION = CIJ_USER_DATA + 0x77 // list
var cij_SCREEN_BRIGHTNESS = CIJ_USER_DATA + 0x78 // int

var cij_SBC_HARDWARE_ID = CIJ_USER_DATA + 0x79 // string
var cij_WAKEUP_TIMEOUT = CIJ_USER_DATA + 0x7A // int
var cij_JET_WARMUP_TIMEOUT = CIJ_USER_DATA + 0x7B // int
var cij_PEB_BOARD_TYPE = CIJ_USER_DATA + 0x7C// int

var cij_UPGRADE_UI_PIC = CIJ_USER_DATA + 0x7D // bool
var cij_PRINT_HEAD_TYPE = CIJ_USER_DATA + 0x7E // int
var cij_MODULATION_FREQUENCY = CIJ_USER_DATA + 0x7F // int
var cij_BEHAVIOURAL_SCRIPTS = CIJ_USER_DATA + 0x80// list
var cij_SCRIPT_VARIABLES = CIJ_USER_DATA + 0x81// list
var cij_UPGRADE_PEC_CONFIG = CIJ_USER_DATA + 0x82// bool
var cij_UPGRADE_PEC_APP = CIJ_USER_DATA + 0x83// bool
var cij_UPGRADE_SGB_CONFIG = CIJ_USER_DATA + 0x84// bool
var cij_UPGRADE_SGB_APP = CIJ_USER_DATA + 0x85// bool
var cij_UPGRADE_IGNORE_VERSION = CIJ_USER_DATA + 0x86// bool
var cij_RUN_PREPROGRAMMED_APP = CIJ_USER_DATA + 0x87// bool
var cij_UPGRADE_FONTS = CIJ_USER_DATA + 0x88// bool
var cij_SERVICE_MODE = CIJ_USER_DATA + 0x89// int
var cij_WEBSERVER_ENABLED = CIJ_USER_DATA + 0x8A // bool
var cij_SERVICE_RUN_HOURS = CIJ_USER_DATA + 0x8B// int
var cij_HV_TARGET = CIJ_USER_DATA + 0x8C// int
var cij_HV_MONITOR = CIJ_USER_DATA + 0x8D// int

var cij_BFT_UPPER_LIMITS = CIJ_USER_DATA + 0x8E
var cij_BFT_LOWER_LIMITS = CIJ_USER_DATA + 0x8F

var cij_CUSTOM_JET_WARMUP_TIME_ENABLED = CIJ_USER_DATA + 0x90
var cij_CUSTOM_WAKEUP_TIME_ENABLED = CIJ_USER_DATA + 0x91
var cij_GUTTER_PUMP_ID = CIJ_USER_DATA + 0x92

var cij_BUP_TIME_JET1 = CIJ_USER_DATA + 0x93
var cij_BUP_TIME_JET2 = CIJ_USER_DATA + 0x94
var cij_CHARGE_LEVEL_JET1 = CIJ_USER_DATA + 0x95
var cij_CHARGE_LEVEL_JET2 = CIJ_USER_DATA + 0x96

var cij_MODULATION_LEVEL_JET1 = CIJ_USER_DATA + 0x97
var cij_MODULATION_LEVEL_JET2 = CIJ_USER_DATA + 0x98

var cij_GLOBAL_BOLD = CIJ_USER_DATA + 0x99 // bool
var cij_GLOBAL_INVERSE = CIJ_USER_DATA + 0x9A // bool
var cij_GLOBAL_REVERSE = CIJ_USER_DATA + 0x9B // bool
var cij_GLOBAL_INTER_CHAR_GAP = CIJ_USER_DATA + 0x9C // 0x9C // int

var cij_WARMUP_MODE_ENABLED = CIJ_USER_DATA + 0x9D

var cij_PELTIER_MODE = CIJ_USER_DATA + 0x9E
var cij_PELTIER_TEMP = CIJ_USER_DATA + 0x9F
var cij_PELTIER_CURRENT_STATE = CIJ_USER_DATA + 0x0A0

var cij_LINE_MOVEMENT_PERSISTENCE_TIME = CIJ_USER_DATA + 0x0A1 // int
var cij_LINE_MOVEMENT_PERSISTENCE_STROKES = CIJ_USER_DATA + 0x0A2 // int
var cij_GLOBAL_PRINT_WIDTH = CIJ_USER_DATA + 0x0A3 // int
var cij_GLOBAL_PRINT_HEIGHT = CIJ_USER_DATA + 0x0A4 // int
var cij_MANUAL_MODE_ENABLED = CIJ_USER_DATA + 0x0A5 // bool
var cij_INK_SELECTION_LIST = CIJ_USER_DATA + 0x0A6 // int
var cij_AVAILABLE_MESSAGE_STORES = CIJ_USER_DATA + 0x0A7 // List, active message store selected
var cij_LABEL_FORMATS_AVAILABLE = CIJ_USER_DATA + 0xA8 // int
var cij_LABEL_FORMATS_SELECTED = CIJ_USER_DATA + 0xA9 // int
var cij_DEFAULT_LABEL_FORMAT_HEAD1 = CIJ_USER_DATA + 0xAA // int
var cij_DEFAULT_LABEL_FORMAT_HEAD2 = CIJ_USER_DATA + 0xAB // int

var cij_SKIP_FLUSH = CIJ_USER_DATA + 0xAC
var cij_WAKE_UP_MODE = CIJ_USER_DATA + 0xAD
var cij_VALID_TRANSITIONS = CIJ_USER_DATA + 0xAE

var cij_LOCAL_CONTACT_INFO_LINE1 = CIJ_USER_DATA + 0xAF
var cij_LOCAL_CONTACT_INFO_LINE2 = CIJ_USER_DATA + 0xB0

var cij_GUTTER_ALGORITHM_STATE = CIJ_USER_DATA + 0xB1
var cij_GUTTER_ALGORITHM_AIRFLOW = CIJ_USER_DATA + 0xB2
var cij_GUTTER_ALGORITHM_PUMPOFFSET = CIJ_USER_DATA + 0xB3
var cij_GUTTER_ALGORITHM_INKTEMPOFFSET = CIJ_USER_DATA + 0xB4

var cij_PRESSURE_ORIGINAL_SET_POINT = CIJ_USER_DATA + 0xB5 // int

var cij_PRINT_HEAD_FULL_INFO = CIJ_USER_DATA + 0xB6 // int
var cij_MIN_GUTTER_PUMP_SPEED = CIJ_USER_DATA + 0xB7 // int
var cij_APPLICATIONS_BOARD = CIJ_USER_DATA + 0xB8 // int
var cij_PEC_FLASH_ID = CIJ_USER_DATA + 0xB9 // int
var cij_SGB_FLASH_ID = CIJ_USER_DATA + 0xBA // int
var cij_USER_PORT_FITTED = CIJ_USER_DATA + 0xBB // bool
var cij_PELTIER_ID = CIJ_USER_DATA + 0xBC // bool
var cij_AIRDRYER_ID = CIJ_USER_DATA + 0xBD // bool

var cij_PRINTER_STARTING_MODE = CIJ_USER_DATA + 0xBE // list
var cij_MODULATION_FREQUENCY_FINE_TUNING = CIJ_USER_DATA + 0xBF // int
var cij_CURRENT_CHARGE_LEVEL_JET1 = CIJ_USER_DATA + 0xC0 // int
var cij_CURRENT_CHARGE_LEVEL_JET2 = CIJ_USER_DATA + 0xC1 // int
var cij_SECURITY_HIDE_DORMANT = CIJ_USER_DATA + 0xC2// bool

var cij_GUTTER_PUMP_PRESENT = CIJ_USER_DATA + 0xC3 // bool
var cij_MEMORY_TOTAL = CIJ_USER_DATA + 0xC4 // int
var cij_MEMORY_REMAINING = CIJ_USER_DATA + 0xC5 // int

var cij_SUMP_LIFE = CIJ_USER_DATA + 0xC6 // int
var cij_JET_PROFILE_DATA_JET1 = CIJ_USER_DATA + 0xC7 // table
var cij_JET_PROFILE_DATA_JET2 = CIJ_USER_DATA + 0xC8 // table
var cij_JET_RUNNING = CIJ_USER_DATA + 0xC9 // bool

// ======================================================================================
// D-SERIES LASER - Additional data ids to the defined data ids PrinterData::ePrinterData
//=======================================================================================
var laser_Dyn2Interface_GeneralbFailOnUnknownVariable = LASER_USER_DATA + 0x1
var laser_Dyn2Interface_GeneralbGlobalVariables = LASER_USER_DATA + 0x2
var laser_Dyn2Interface_GeneralnMSG27WarningLevel = LASER_USER_DATA + 0x3
var laser_Dyn2Interface_RS232bEcho = LASER_USER_DATA + 0x4
var laser_Dyn2Interface_RS232bEnabled = LASER_USER_DATA + 0x5
var laser_Dyn2Interface_RS232bHaveAllGrants = LASER_USER_DATA + 0x6
var laser_Dyn2Interface_RS232nBaudrate = LASER_USER_DATA + 0x7
var laser_Dyn2Interface_RS232nDataBits = LASER_USER_DATA + 0x8
var laser_Dyn2Interface_RS232nFlowControl = LASER_USER_DATA + 0x9
var laser_Dyn2Interface_RS232nParity = LASER_USER_DATA + 0xa
var laser_Dyn2Interface_RS232nStopBits = LASER_USER_DATA + 0xb
var laser_Dyn2Interface_RS232strDevice = LASER_USER_DATA + 0xc
var laser_Dyn2Interface_RS232nMaxPort = LASER_USER_DATA + 0xd
var laser_Dyn2Interface_TCPIPbEcho = LASER_USER_DATA + 0xe
var laser_Dyn2Interface_TCPIPbEnabled = LASER_USER_DATA + 0xf
var laser_Dyn2Interface_TCPIPbHaveAllGrants = LASER_USER_DATA + 0x10
var laser_Dyn2Interface_TCPIPnPort = LASER_USER_DATA + 0x11
var laser_Dyn2Interface_TCPIPstrRemoteHostsAllowed = LASER_USER_DATA + 0x12
var laser_Dyn2Interface_TCPIPstrRemoteIPsAllowed = LASER_USER_DATA + 0x13
var laser_DSPOUTPUTAimingMode = LASER_USER_DATA + 0x14
var laser_COMPILERfScannerFieldWidth = LASER_USER_DATA + 0x15
var laser_COMPILERfScannerFieldHeight = LASER_USER_DATA + 0x16
var laser_COMPILERfScannerCenterX = LASER_USER_DATA + 0x17
var laser_COMPILERfScannerCenterY = LASER_USER_DATA + 0x18
var laser_VALIDSCANNERFIELDnMode = LASER_USER_DATA + 0x19
var laser_VALIDSCANNERFIELDfMinX = LASER_USER_DATA + 0x1a
var laser_VALIDSCANNERFIELDfMaxX = LASER_USER_DATA + 0x1b
var laser_VALIDSCANNERFIELDfMinY = LASER_USER_DATA + 0x1c
var laser_VALIDSCANNERFIELDfMaxY = LASER_USER_DATA + 0x1d
var laser_VALIDSCANNERFIELDfMinXY = LASER_USER_DATA + 0x1e
var laser_VALIDSCANNERFIELDfMaxXY = LASER_USER_DATA + 0x1f
var laser_VALIDSCANNERFIELDfMinYX = LASER_USER_DATA + 0x20
var laser_VALIDSCANNERFIELDfMaxYX = LASER_USER_DATA + 0x21
var laser_MARKONTHEFLYnEncoderDelay = LASER_USER_DATA + 0x22
var laser_MARKONTHEFLYfFieldUseLimit = LASER_USER_DATA + 0x23
var laser_DSPBUFFERINGnBufSize = LASER_USER_DATA + 0x24
var laser_PRODUCTDETECTbPD1Enabled = LASER_USER_DATA + 0x25
var laser_PRODUCTDETECTbPD1HighActive = LASER_USER_DATA + 0x26
var laser_COMPILERbLoopByDistance = LASER_USER_DATA + 0x27
var laser_COMPILERbLoopByTime = LASER_USER_DATA + 0x28
var laser_MARKONTHEFLYfPrintStartDelayInMS = LASER_USER_DATA + 0x29
var laser_DELAYSMaxJumpDelay = LASER_USER_DATA + 0x2a
var laser_DELAYSMaxLaserOffDelay = LASER_USER_DATA + 0x2b
var laser_DELAYSMaxLaserOnDelay = LASER_USER_DATA + 0x2c
var laser_DELAYSMaxMarkDelay = LASER_USER_DATA + 0x2d
var laser_DELAYSMaxMaxVectorLength = LASER_USER_DATA + 0x2e
var laser_DELAYSMaxPolygonDelay = LASER_USER_DATA + 0x2f
var laser_DELAYSMaxStepPeriod = LASER_USER_DATA + 0x30
var laser_DELAYSMaxFrequency = LASER_USER_DATA + 0x31
//var laser_DELAYSMaxT2 = LASER_USER_DATA + 0x32
var laser_DELAYSMaxLaserPower = LASER_USER_DATA + 0x33
var laser_DELAYSMinJumpDelay = LASER_USER_DATA + 0x34
var laser_DELAYSMinLaserOffDelay = LASER_USER_DATA + 0x35
var laser_DELAYSMinLaserOnDelay = LASER_USER_DATA + 0x36
var laser_DELAYSMinMarkDelay = LASER_USER_DATA + 0x37
var laser_DELAYSMinMaxVectorLength = LASER_USER_DATA + 0x38
var laser_DELAYSMinPolygonDelay = LASER_USER_DATA + 0x39
var laser_DELAYSMinStepPeriod = LASER_USER_DATA + 0x3a
var laser_DELAYSMinFrequency = LASER_USER_DATA + 0x3b
//var laser_DELAYSMinT2 = LASER_USER_DATA + 0x3c
var laser_DELAYSMinLaserPower = LASER_USER_DATA + 0x3d
var laser_SPEEDSMaxJumpSpeed = LASER_USER_DATA + 0x3e
var laser_SPEEDSMaxMarkSpeed = LASER_USER_DATA + 0x3f
var laser_SPEEDSMinJumpSpeed = LASER_USER_DATA + 0x40
var laser_SPEEDSMinMarkSpeed = LASER_USER_DATA + 0x41
var laser_LASERnCO2PeriodLength = LASER_USER_DATA + 0x42
var laser_LASERnCO2StandbyPeriodLength = LASER_USER_DATA + 0x43
var laser_LASERnCO2StandbyOnLength = LASER_USER_DATA + 0x44
var laser_YAG_nCom = LASER_USER_DATA + 0x45
var laser_YAG_nBaud = LASER_USER_DATA + 0x46
var laser_YAG_fLaserCurrent = LASER_USER_DATA + 0x47
var laser_YAG_nWaveform = LASER_USER_DATA + 0x48
var laser_DSPnLaserType = LASER_USER_DATA + 0x49
var laser_LASERTESTMODEnPulsePeriod = LASER_USER_DATA + 0x4a
var laser_LASERTESTMODEnPulseWidth = LASER_USER_DATA + 0x4b
var laser_LASERTESTMODEnWaveform = LASER_USER_DATA + 0x4c
var laser_COLDSTARTnPulsePeriod = LASER_USER_DATA + 0x4d
var laser_COLDSTARTnPulseWidth = LASER_USER_DATA + 0x4e
var laser_COLDSTARTnPulseCount = LASER_USER_DATA + 0x4f
var laser_COLDSTARTnMarkSpeed = LASER_USER_DATA + 0x50
var laser_COLDSTARTnStartupDelayMS = LASER_USER_DATA + 0x51
var laser_Obsolete1 = LASER_USER_DATA + 0x52
var laser_Obsolete2 = LASER_USER_DATA + 0x53
var laser_Obsolete3 = LASER_USER_DATA + 0x54
var laser_Obsolete4 = LASER_USER_DATA + 0x55
var laser_LaserTestModeFrequency = LASER_USER_DATA + 0x56
var laser_GraphicPrintFieldOrientation = LASER_USER_DATA + 0x57
var laser_GraphicLineMovement = LASER_USER_DATA + 0x58
var laser_ConfigurationMainCategory = LASER_USER_DATA + 0x59
var laser_ConfigurationSubCategory = LASER_USER_DATA + 0x5A
var laser_ConfigurationData = LASER_USER_DATA + 0x5B
var laser_ActualPrintOrientation = LASER_USER_DATA + 0x5C
var laser_ActualPrintMirror = LASER_USER_DATA + 0x5D
var laser_RequestedPrintOrientation = LASER_USER_DATA + 0x5E
var laser_RequestedPrintMirror = LASER_USER_DATA + 0x5F
var laser_Is45Degree = LASER_USER_DATA + 0x60
var laser_Dyn2Interface_ServiceFileSharing = LASER_USER_DATA + 0x61
var laser_FontList  = LASER_USER_DATA + 0x62
var laser_ParameterSetList  = LASER_USER_DATA + 0x63
var laser_MeasuredDistance = LASER_USER_DATA + 0x64
var laser_MeasuredSpeed  = LASER_USER_DATA + 0x65
var laser_MultiHeadConnections = LASER_USER_DATA + 0x66
var laser_MultiHeadFields = LASER_USER_DATA + 0x67
var laser_PositionOffsetStepWidth= LASER_USER_DATA + 0x68
var laser_PositionOffsetX = LASER_USER_DATA  + 0x69
var laser_MeasuredXLength = LASER_USER_DATA  + 0x6A
var laser_MeasuredYLength = LASER_USER_DATA  + 0x6B
var laser_SquareSideLength = LASER_USER_DATA  + 0x6C
var laser_ProductMovement = LASER_USER_DATA  + 0x6D

var laser_PositionOffsetY = LASER_USER_DATA + 0x70
var laser_OpticalCorrectionMode = LASER_USER_DATA + 0x71
var laser_MultiHeadEnabled = LASER_USER_DATA + 0x72
var laser_MultiHeadOperationMode = LASER_USER_DATA + 0x73

// Total print time of editor message
var laser_EditorTotalPrintTime = LASER_USER_DATA  + 0x74
// Total line speed of editor message
var laser_EditorTotalLineSpeed = LASER_USER_DATA  + 0x75
// Error info of editor message
var laser_EditorErrorMessage = LASER_USER_DATA  + 0x76


// The keys below are for data to be shown on the editor main screen
var laser_editor_totalPrintTime = LASER_USER_DATA + 0x100
var laser_editor_maximumLineSpeed = LASER_USER_DATA + 0x101
var laser_editor_errorMsg = LASER_USER_DATA + 0x102

/*
  The keys below are for multi-head setup.  The offset for each piece of data is
  laser_MultiHeadSetupDataStart + (n * laser_HeadOffset) + dataOffset
  where n is 0 for the first head, 1 for the second head etc.
  For example, the key for the Usable Field Height for the third print head is
  laser_MultiHeadSetupDataStart + (2 * laser_HeadOffset) + laser_UsableFieldHeightOffset
  */

var laser_MultiHeadSetupDataStart = LASER_USER_DATA + 0x1000
var laser_MultiHeadNumberOfHeads = laser_MultiHeadSetupDataStart
var laser_HeadOffset = 0x100
var laser_UsableFieldWidthOffset = 0x1
var laser_UsableFieldHeightOffset = 0x2
var laser_UsableFieldCentreXOffset = 0x3
var laser_UsableFieldCentreYOffset = 0x4
// -------- End of multi-head setup --------

// =========================================================
// D-SERIES LASER - ids to reference displayed graphic files
//==========================================================
var laser_graphic_PrinterOrientation00 = 0x1
var laser_graphic_PrinterOrientation01 = 0x2
var laser_graphic_PrinterOrientation02 = 0x3
var laser_graphic_PrinterOrientation03 = 0x4
var laser_graphic_PrinterOrientation04 = 0x5
var laser_graphic_PrinterOrientation05 = 0x6
var laser_graphic_PrinterOrientation06 = 0x7
var laser_graphic_PrinterOrientation07 = 0x8
var laser_graphic_PrinterOrientation08 = 0x9
var laser_graphic_PrinterOrientation09 = 0xa
var laser_graphic_PrinterOrientation10 = 0xb
var laser_graphic_PrinterOrientation11 = 0xc
var laser_graphic_PrinterOrientation12 = 0xd
var laser_graphic_PrinterOrientation13 = 0xe
var laser_graphic_PrinterOrientation14 = 0xf
var laser_graphic_PrinterOrientation15 = 0x10
var laser_graphic_PrinterOrientation16 = 0x11
var laser_graphic_PrinterOrientation17 = 0x12
var laser_graphic_PrinterOrientation18 = 0x13
var laser_graphic_PrinterOrientation19 = 0x14
var laser_graphic_PrinterOrientation20 = 0x15
var laser_graphic_PrinterOrientation21 = 0x16
var laser_graphic_PrinterOrientation22 = 0x17
var laser_graphic_PrinterOrientation23 = 0x18
var laser_graphic_PrinterOrientation24 = 0x19
var laser_graphic_PrinterOrientation25 = 0x1a
var laser_graphic_PrinterOrientation26 = 0x1b
var laser_graphic_PrinterOrientation27 = 0x1c
var laser_graphic_PrinterOrientation28 = 0x1d
var laser_graphic_PrinterOrientation29 = 0x1e
var laser_graphic_PrinterOrientation30 = 0x1f
var laser_graphic_PrinterOrientation31 = 0x20
var laser_graphic_PrinterOrientation32 = 0x21
var laser_graphic_PrinterOrientation33 = 0x22
var laser_graphic_PrinterOrientation34 = 0x23
var laser_graphic_PrinterOrientation35 = 0x24
var laser_graphic_PrinterOrientation36 = 0x25
var laser_graphic_PrinterOrientation37 = 0x26
var laser_graphic_PrinterOrientation38 = 0x27
var laser_graphic_PrinterOrientation39 = 0x28
var laser_graphic_PrinterOrientation40 = 0x29
var laser_graphic_PrinterOrientation41 = 0x2a
var laser_graphic_PrinterOrientation42 = 0x2b
var laser_graphic_PrinterOrientation43 = 0x2c
var laser_graphic_PrinterOrientation44 = 0x2d
var laser_graphic_PrinterOrientation45 = 0x2e
var laser_graphic_PrinterOrientation46 = 0x2f
var laser_graphic_PrinterOrientation47 = 0x30
var laser_graphic_PrinterOrientation48 = 0x31
var laser_graphic_PrinterOrientation49 = 0x32
var laser_graphic_PrinterOrientation50 = 0x33
var laser_graphic_PrinterOrientation51 = 0x34
var laser_graphic_PrinterOrientation52 = 0x35
var laser_graphic_PrinterOrientation53 = 0x36
var laser_graphic_PrinterOrientation54 = 0x37
var laser_graphic_PrinterOrientation55 = 0x38
var laser_graphic_PrinterOrientation56 = 0x39
var laser_graphic_PrinterOrientation57 = 0x3a
var laser_graphic_PrinterOrientation58 = 0x3b
var laser_graphic_PrinterOrientation59 = 0x3c
var laser_graphic_PrinterOrientation60 = 0x3d
var laser_graphic_PrinterOrientation61 = 0x3e
var laser_graphic_PrinterOrientation62 = 0x3f
var laser_graphic_PrinterOrientation63 = 0x40

