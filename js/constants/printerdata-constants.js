var ColumnFlag_CF_NONE = 0;
var ColumnFlag_CF_READ_ONLY = 1;
var TableFlag_TF_NONE = 0;
var TableFlag_TF_DISABLE_INSERT_ROWS = 1;
var TableFlag_TF_DISABLE_DELETE_ROWS = 2;
var TableFlag_TF_VALIDATE_BEFORE_COMMIT = 4;
var ValueDataFlag_VD_PASSWORD = 1;
var ValueDataFlag_VD_EMPTY = 2;
var ValueDataFlag_VD_STRING_STORAGE = 4;
var ValueDataFlag_VD_INT_STORAGE = 8;
var ValueDataFlag_VD_DOUBLE_STORAGE = 16;
var ValueDataFlag_VD_LIST_STORAGE = 32;
var ValueDataFlag_VD_EXT_STORAGE = 64;
var ValueDataFlag_VD_CLOCKOFFSET_STORAGE = 128;
var ValueDataFlag_VD_TIME_STORAGE = 256;
var ValueDataFlag_VD_REGEXP_VALIDATOR = 512;
var ValueDataFlag_VD_DATE_STORAGE = 1024;
var ValueDataFlag_VD_BOOL_STORAGE = 2048;
var ValueDataFlag_VD_SLIDER_STORAGE = 4096;
var ValueDataFlag_VD_DELAY_APPLY = 8192;
var PrinterCapabilities_PCAP_NONE = 0;
var PrinterCapabilities_PCAP_RENDER_ON_SCALE = 1;
var PrinterCapabilities_PCAP_CAN_SAVE_CONTENT_ELEMENTS_AS_TEMPLATES = 2;
var PrinterCapabilities_PCAP_CAN_SEND_UNSAVED_LABEL_TO_PRINT_DIRECTLY_FROM_EDITOR = 4;
var PrinterCapabilities_PCAP_CAN_SELECT_VISUAL_ELEMENTS_FROM_LIST = 8;
var PrinterCapabilities_PCAP_GROUPS_HAVE_DESCRIPTION = 16;
var PrinterCapabilities_PCAP_LABEL_CAN_AUTO_EXPAND_HORIZONTALLY = 32;
var PrinterCapabilities_PCAP_LABEL_CAN_AUTO_EXPAND_VERTICALLY = 64;
var PrinterCapabilities_PCAP_PLUGIN_REQUIRES_ALL_EVENTS = 128;
var PrinterCapabilities_PCAP_DISCONNECT_CAN_BE_DISABLED = 256;
var PrinterCapabilities_PCAP_CAN_SELECT_MULTIPLE_VISUAL_ELEMENTS = 512;
var PrinterCapabilities_PCAP_PLUGIN_SYNCHRONISES_WITH_EXTERNAL_EDITOR = 1024;
var PrinterCapabilities_PCAP_VISUAL_ELEMENTS_MUST_BE_VALIDATED_WHEN_CLONED = 2048;
var PrinterCapabilities_PCAP_ROTATE_AROUND_TOP_LEFT = 4096;
var PrinterCapabilities_PCAP_PROMPT_LOGIN_ON_SECURITY_MODE_CHANGE = 8192;
var PrinterCapabilities_PCAP_USER_REMAINS_LOGGED_OUT_ON_EXPIRED_PASSWORD = 16384;
var PrinterCapabilities_PCAP_NO_SMOOTH_TRANSFORMS_IN_MSGMON_AND_PREVIEW = 32768;
var PrinterCapabilitiesFlags_PCAP_NONE = 0;
var PrinterCapabilitiesFlags_PCAP_RENDER_ON_SCALE = 1;
var PrinterCapabilitiesFlags_PCAP_CAN_SAVE_CONTENT_ELEMENTS_AS_TEMPLATES = 2;
var PrinterCapabilitiesFlags_PCAP_CAN_SEND_UNSAVED_LABEL_TO_PRINT_DIRECTLY_FROM_EDITOR = 4;
var PrinterCapabilitiesFlags_PCAP_CAN_SELECT_VISUAL_ELEMENTS_FROM_LIST = 8;
var PrinterCapabilitiesFlags_PCAP_GROUPS_HAVE_DESCRIPTION = 16;
var PrinterCapabilitiesFlags_PCAP_LABEL_CAN_AUTO_EXPAND_HORIZONTALLY = 32;
var PrinterCapabilitiesFlags_PCAP_LABEL_CAN_AUTO_EXPAND_VERTICALLY = 64;
var PrinterCapabilitiesFlags_PCAP_PLUGIN_REQUIRES_ALL_EVENTS = 128;
var PrinterCapabilitiesFlags_PCAP_DISCONNECT_CAN_BE_DISABLED = 256;
var PrinterCapabilitiesFlags_PCAP_CAN_SELECT_MULTIPLE_VISUAL_ELEMENTS = 512;
var PrinterCapabilitiesFlags_PCAP_PLUGIN_SYNCHRONISES_WITH_EXTERNAL_EDITOR = 1024;
var PrinterCapabilitiesFlags_PCAP_VISUAL_ELEMENTS_MUST_BE_VALIDATED_WHEN_CLONED = 2048;
var PrinterCapabilitiesFlags_PCAP_ROTATE_AROUND_TOP_LEFT = 4096;
var PrinterCapabilitiesFlags_PCAP_PROMPT_LOGIN_ON_SECURITY_MODE_CHANGE = 8192;
var PrinterCapabilitiesFlags_PCAP_USER_REMAINS_LOGGED_OUT_ON_EXPIRED_PASSWORD = 16384;
var PrinterCapabilitiesFlags_PCAP_NO_SMOOTH_TRANSFORMS_IN_MSGMON_AND_PREVIEW = 32768;
var PrinterFamily_PFAM_UNKNOWN = 0;
var PrinterFamily_PFAM_CIJ = 1;
var PrinterFamily_PFAM_TTO = 2;
var PrinterFamily_PFAM_LASER = 3;
var PrinterFamily_PFAM_PALM = 4;
var LogOnResult_LOR_OK = 0;
var LogOnResult_LOR_OK_CHANGE_PASSWORD = 1;
var LogOnResult_LOR_INVALID_PASSWORD_USERNAME = 2;
var LogOnResult_LOR_ERROR = 3;
var LabelPreviewRequest_LPR_STANDARD_PREVIEW = 0;
var LabelPreviewRequest_LPR_INITIALISE_VARS = 1;
var LabelPreviewRequest_LPR_NEXT_SEQUENCE = 2;
var PromptedFieldResponse_PFR_OKAY = 0;
var PromptedFieldResponse_PFR_INVALID = 1;
var PrinterSecurityMode_PSM_NONE = 0;
var PrinterSecurityMode_PSM_SIMPLE = 1;
var PrinterSecurityMode_PSM_ADVANCED = 2;
var PrinterStatus_PS_OKAY = 0;
var PrinterStatus_PS_STANDBY = 1;
var PrinterStatus_PS_WARNING = 2;
var PrinterStatus_PS_FAULT = 3;
var USBKeyType_UKT_NONE = 0;
var USBKeyType_UKT_FACTORY = 1;
var USBKeyType_UKT_SERVICE = 2;
var USBKeyType_UKT_DATA = 4;
var SummaryPrintHeadState_PHS_READY = 0;
var SummaryPrintHeadState_PHS_STANDBY = 1;
var SummaryPrintHeadState_PHS_PAUSED = 2;
var SummaryPrintHeadState_PHS_TRANSITION = 3;
var SummaryPrintHeadState_PHS_PRINTING = 4;
var AlertLevel_AL_DISABLED = 0;
var AlertLevel_AL_INFORMAL = 1;
var AlertLevel_AL_WARNING = 2;
var AlertLevel_AL_SUSPEND = 3;
var AlertLevel_AL_STOP = 4;
var ConsumableLevel_IL_EMPTY = 0;
var ConsumableLevel_IL_LOW = 1;
var ConsumableLevel_IL_OK = 2;
var ConsumableLevel_IL_HIGH = 3;
var ConsumableSystem_CIJCS_CLASSIC = 0;
var ConsumableSystem_CIJCS_SERVICE_MODULE = 1;
var ConsumableCalcMethod_CIJCM_STANDARD = 0;
var ConsumableCalcMethod_CIJCM_INTELLIGENT_INK_LIFE = 1;
var Branding_BRANDING_NOT_SET = 0;
var Branding_BRANDING_AVERY = 1;
var Branding_BRANDING_DOMINO = 2;
var Branding_BRANDING_NON_BRANDED = 3;
var Branding_BRANDING_EASYPRINT_MK2 = 4;
var Branding_BRANDING_TETRA_BY_DOMINO = 5;
var IOType_IO_OTHER = 0;
var IOType_IO_INPUT = 1;
var IOType_IO_OUTPUT = 2;
var IOType_IO_INTERRUPT = 3;
var IOType_IO_SENSOR = 4;
var UserStatus_USER_ACTIVE = 0;
var UserStatus_USER_EXPIRED = 1;
var UserStatus_USER_DORMANT = 2;
var UserStatus_USER_DELETED = 3;
var UserStatus_USER_LOCKED = 4;
var ConditionCombiner_CC_AND = 0;
var ConditionCombiner_CC_OR = 1;
var ConditionCombiner_CC_XOR = 2;
var PartType_VERSION_UI_SOFTWARE = 0;
var PartType_VERSION_UI_HARDWARE = 1;
var PartType_VERSION_UI_FIRMWARE = 2;
var PartType_VERSION_UI_END = 2;
var PartType_VERSION_PRINTER_SOFTWARE = 3;
var PartType_VERSION_PRINTER_HARDWARE = 4;
var PartType_VERSION_PRINTER_FIRMWARE = 5;
var FileType_FILETYPE_UNKNOWN = 0;
var FileType_FILETYPE_FOLDER = 1;
var FileType_FILETYPE_MESSAGESTORE = 2;
var FileType_FILETYPE_BACKUPDESTINATION = 4;
var FileType_FILETYPE_ANYFOLDER = 15;
var FileType_FILETYPE_MESSAGE = 16;
var FileType_FILETYPE_IMAGE = 32;
var FileType_FILETYPE_SCRIPT = 64;
var FileType_FILETYPE_BACKUP = 128;
var FileType_FILETYPE_DATABASE = 256;
var FileType_FILETYPE_UPGRADE = 512;
var FileType_FILETYPE_USER = 8388608;
var FileType_FILETYPE_ANY = 2147483632;
var FileTypeFlags_FILETYPE_UNKNOWN = 0;
var FileTypeFlags_FILETYPE_FOLDER = 1;
var FileTypeFlags_FILETYPE_MESSAGESTORE = 2;
var FileTypeFlags_FILETYPE_BACKUPDESTINATION = 4;
var FileTypeFlags_FILETYPE_ANYFOLDER = 15;
var FileTypeFlags_FILETYPE_MESSAGE = 16;
var FileTypeFlags_FILETYPE_IMAGE = 32;
var FileTypeFlags_FILETYPE_SCRIPT = 64;
var FileTypeFlags_FILETYPE_BACKUP = 128;
var FileTypeFlags_FILETYPE_DATABASE = 256;
var FileTypeFlags_FILETYPE_UPGRADE = 512;
var FileTypeFlags_FILETYPE_USER = 8388608;
var FileTypeFlags_FILETYPE_ANY = 2147483632;
var DirectoryPermission_DIRECTORY_NONE = 0;
var DirectoryPermission_DIRECTORY_PASTE = 1;
var DirectoryPermission_DIRECTORY_CREATE_STORE = 2;
var DirectoryPermission_DIRECTORY_IS_TOP_LEVEL = 4;
var DirectoryPermission_DIRECTORY_CREATE_FOLDER = 8;
var DirectoryPermissionFlags_DIRECTORY_NONE = 0;
var DirectoryPermissionFlags_DIRECTORY_PASTE = 1;
var DirectoryPermissionFlags_DIRECTORY_CREATE_STORE = 2;
var DirectoryPermissionFlags_DIRECTORY_IS_TOP_LEVEL = 4;
var DirectoryPermissionFlags_DIRECTORY_CREATE_FOLDER = 8;
var FilePermission_FILE_NONE = 0;
var FilePermission_FILE_COPY = 1;
var FilePermission_FILE_MOVE = 2;
var FilePermission_FILE_DELETE = 4;
var FilePermission_FILE_DETAILS = 8;
var FilePermissionFlags_FILE_NONE = 0;
var FilePermissionFlags_FILE_COPY = 1;
var FilePermissionFlags_FILE_MOVE = 2;
var FilePermissionFlags_FILE_DELETE = 4;
var FilePermissionFlags_FILE_DETAILS = 8;
var MessageOnlineResponse_MOR_MESSAGE_ONLINE_OKAY = 0;
var MessageOnlineResponse_MOR_MESSAGE_REQUIRES_PROMPTED_FIELDS = 1;
var MessageOnlineResponse_MOR_ERROR = 2;
var GrantedCapabilities_GC_CREATE_LABEL = 0;
var GrantedCapabilities_GC_OVERWRITE_LABEL = 1;
var GrantedCapabilities_GC_SAVE_NEW_LABEL = 2;
var GrantedCapabilities_GC_OVERWRITE_EDITING_LABEL = 3;
var GrantedCapabilities_GC_REORDER_VISUAL_ELEMENTS = 4;
var GrantedCapabilities_GC_INITIALISE_PROMPTED_VARIABLES = 5;
var GrantedCapabilities_GC_CLEAR_LABEL = 6;
var GrantedCapabilities_GC_EDIT_GROUP_NAMES = 7;
var GrantedCapabilities_GC_SHOW_PRODUCTION_LINE_SETUP = 8;
var GrantedCapabilities_GC_SHOW_GLOBAL_PRINT_SETTINGS = 9;
var GrantedCapabilities_GC_SHOW_EDITOR_DEFAULTS = 10;
var GrantedCapabilities_GC_SHOW_ADVANCED_SETTINGS = 11;
var GrantedCapabilities_GC_SHOW_DIAGOSTICS = 12;
var GrantedCapabilities_GC_SHOW_ADJUSTMENT = 13;
var GrantedCapabilities_GC_SHOW_ALERT_CONFIGURATION = 14;
var GrantedCapabilities_GC_SHOW_SHOW_IOPORT = 15;
var GrantedCapabilities_GC_SHOW_NETWORK_SETTINGS = 16;
var GrantedCapabilities_GC_SHOW_SECURITY_SETUP = 17;
var GrantedCapabilities_GC_SHOW_REGIONAL_SETTINGS = 18;
var GrantedCapabilities_GC_SHOW_BACKUP_RESTORE = 19;
var GrantedCapabilities_GC_SHOW_FILE_MANAGER = 20;
var GrantedCapabilities_GC_SHOW_SYSTEM_INFO = 21;
var GrantedCapabilities_GC_SHOW_USER_INTERFACE_SETTINGS = 22;
var GrantedCapabilities_GC_SHOW_TOOLS = 23;
var GrantedCapabilities_GC_SHOW_INITIAL_SETUP_WIZARD = 24;
var GrantedCapabilities_GC_SHOW_CUSTOM_BUTTON = 25;
var GrantedCapabilities_GC_SHOW_MESSAGE_SELECT = 26;
var GrantedCapabilities_GC_SHOW_PRINTER_STATUS = 27;
var GrantedCapabilities_GC_HAVE_SERIAL_PORT = 28;
var GrantedCapabilities_GC_USER_CAN_CHANGE_ALL_PASSWORDS = 29;
var GrantedCapabilities_GC_CUSTOMISE_CUSTOM_BUTTON = 30;
var GrantedCapabilities_GC_SHOW_LINE_SETTINGS = 31;
var PrinterData_INVALID_KEY = -1;
var PrinterData_UNSET_KEY = 0;
var PrinterData_JOB_BEGIN = 4096;
var PrinterData_JOB_COUNTERS_TOTAL_CODED = 4096;
var PrinterData_JOB_COUNTERS_TOTAL_DETECTED = 4097;
var PrinterData_JOB_CURRENT_MESSAGE = 4098;
var PrinterData_JOB_CURRENT_MESSAGESTORE = 4099;
var PrinterData_JOB_STROKE_RATE = 4100;
var PrinterData_JOB_PRINT_RATE = 4101;
var PrinterData_JOB_PRINT_SPEED = 4102;
var PrinterData_JOB_MODE = 4103;
var PrinterData_JOB_COUNTERS_LABEL_PRINTS_REMAINING = 4104;
var PrinterData_JOB_LAST_PRINT_DURATION = 4105;
var PrinterData_JOB_END = 4105;
var PrinterData_CONSUMABLES_BEGIN = 8192;
var PrinterData_CONSUMABLES_EXPIRY_DATE = 8192;
var PrinterData_CONSUMABLES_PRIMARY_TYPE = 8193;
var PrinterData_CONSUMABLES_PRIMARY_CONSUMABLE_LEVEL_STATE = 8194;
var PrinterData_CONSUMABLES_PRIMARY_CONSUMABLE_LEVEL_STATE_STRING = 8195;
var PrinterData_CONSUMABLES_PRIMARY_TIME_REMAINING = 8196;
var PrinterData_CONSUMABLES_PRIMARY_PERCENT_REMAINING = 8197;
var PrinterData_CONSUMABLES_PRIMARY_PRINTS_REMAINING = 8198;
var PrinterData_CONSUMABLES_PRIMARY_REMAINING = 8199;
var PrinterData_CONSUMABLES_SECONDARY_TYPE = 8200;
var PrinterData_CONSUMABLES_SECONDARY_CONSUMABLE_LEVEL_STATE = 8201;
var PrinterData_CONSUMABLES_SECONDARY_CONSUMABLE_LEVEL_STATE_STRING = 8202;
var PrinterData_CONSUMABLES_SECONDARY_TIME_REMAINING = 8203;
var PrinterData_CONSUMABLES_SECONDARY_PERCENT_REMAINING = 8204;
var PrinterData_CONSUMABLES_SECONDARY_PRINTS_REMAINING = 8205;
var PrinterData_CONSUMABLES_SECONDARY_REMAINING = 8206;
var PrinterData_CONSUMABLES_MACHINE_TIME_LIFETIME = 8207;
var PrinterData_CONSUMABLES_PRINTING_TIME_LIFETIME = 8208;
var PrinterData_CONSUMABLES_MACHINE_TIME_SINCE_BOOT = 8209;
var PrinterData_CONSUMABLES_PRINTING_TIME_SINCE_BOOT = 8210;
var PrinterData_CONSUMABLES_DATE_OF_NEXT_SERVICE = 8211;
var PrinterData_CONSUMABLES_SYSTEM = 8212;
var PrinterData_CONSUMABLES_CALCULATION_METHOD = 8213;
var PrinterData_CONSUMABLES_PRIMARY_ACTUAL_VISCOSITY = 8214;
var PrinterData_CONSUMABLES_PRIMARY_TARGET_VISCOSITY = 8215;
var PrinterData_CONSUMABLES_PRIMARY_TEMP = 8216;
var PrinterData_CONSUMABLES_PRIMARY_VISCOSITY_LOWER_LIMIT = 8217;
var PrinterData_CONSUMABLES_PRIMARY_VISCOSITY_UPPER_LIMIT = 8218;
var PrinterData_CONSUMABLES_SECURITY_PRIMARY_CONSUMABLE_CODE = 8219;
var PrinterData_CONSUMABLES_SECURITY_SECONDARY_CONSUMABLE_CODE = 8220;
var PrinterData_CONSUMABLES_SECURITY_TERTIARY_CONSUMABLE_CODE = 8221;
var PrinterData_CONSUMABLES_SECURITY_QUATERNARY_CONSUMABLE_CODE = 8222;
var PrinterData_CONSUMABLES_SECURITY_PRIMARY_CONSUMABLE_CODE_REQUIRED = 8223;
var PrinterData_CONSUMABLES_SECURITY_SECONDARY_CONSUMABLE_CODE_REQUIRED = 8224;
var PrinterData_CONSUMABLES_SECURITY_TERTIARY_CONSUMABLE_CODE_REQUIRED = 8225;
var PrinterData_CONSUMABLES_SECURITY_QUATERNARY_CONSUMABLE_CODE_REQUIRED = 8226;
var PrinterData_CONSUMABLES_END = 8226;
var PrinterData_PRINTER_BEGIN = 12288;
var PrinterData_PRINTER_MODEL = 12288;
var PrinterData_PRINTER_ID = 12289;
var PrinterData_PRINTER_CONTROLLER_SERIAL = 12290;
var PrinterData_PRINTER_PH_SERIAL = 12291;
var PrinterData_PRINTER_LOCAL_CONTACT_INFO = 12292;
var PrinterData_PRINTER_BRANDING = 12293;
var PrinterData_PRINTER_SYSTEM_DATE = 12294;
var PrinterData_PRINTER_SYSTEM_TIME = 12295;
var PrinterData_PRINTER_SYSTEM_DATETIME = 12296;
var PrinterData_PRINTER_DATE_FORMAT = 12297;
var PrinterData_PRINTER_PRINTHEAD_SIZE = 12298;
var PrinterData_PRINTER_CONDUIT = 12299;
var PrinterData_PRINTER_PUMP_TYPE = 12300;
var PrinterData_PRINTER_BACKPLANE = 12301;
var PrinterData_PRINTER_PELTIER = 12302;
var PrinterData_PRINTER_AIRDRYER = 12303;
var PrinterData_PRINTER_USERPORT_ENABLED = 12304;
var PrinterData_PRINTER_MARKING_CONTROLLER_TYPE = 12305;
var PrinterData_PRINTER_NONVOLATILE_STORAGE_TYPE = 12306;
var PrinterData_PRINTER_SCANNER_TYPE = 12307;
var PrinterData_PRINTER_FOCUS = 12308;
var PrinterData_PRINTER_LENS_TYPE = 12309;
var PrinterData_PRINTER_CORRECTION_MATRIX = 12310;
var PrinterData_PRINTER_MAX_PRINT_FIELD_WIDTH = 12311;
var PrinterData_PRINTER_MAX_PRINT_FIELD_HEIGHT = 12312;
var PrinterData_PRINTER_BACKUP_LOCATION = 12313;
var PrinterData_PRINTER_BACKUP_FILE = 12314;
var PrinterData_PRINTER_RESTORE_LOCATION = 12315;
var PrinterData_PRINTER_SETTINGS_SPECIAL_FEATURES_ACTIVATED_SPECIAL_FEATURES = 12316;
var PrinterData_PRINTER_NTP_CLIENT_ENABLED = 12317;
var PrinterData_PRINTER_NTP_SERVER_NAME = 12318;
var PrinterData_PRINTER_NTP_REFRESH_TIME = 12319;
var PrinterData_PRINTER_NTP_RECOVERY_TIME = 12320;
var PrinterData_PRINTER_NTP_THRESHOLD_TIME = 12321;
var PrinterData_PRINTER_NTP_LOCAL_SERVER_ENABLED = 12322;
var PrinterData_PRINTER_TIME_ZONE = 12323;
var PrinterData_PRINTER_AUTO_DST_ENABLED = 12324;
var PrinterData_PRINTER_TIME_FORMAT = 12325;
var PrinterData_PRINTER_END = 12325;
var PrinterData_PROMPTEDFIELDS_BEGIN = 16384;
var PrinterData_PROMPTEDFIELDS_CURRENT_FIELD_VALUE = 16384;
var PrinterData_PROMPTEDFIELDS_CURRENT_FIELD_PROMPT = 16385;
var PrinterData_PROMPTEDFIELDS_FIRST_FIELD = 16386;
var PrinterData_PROMPTEDFIELDS_LAST_FIELD = 16387;
var PrinterData_PROMPTEDFIELDS_END = 16387;
var PrinterData_STATUS_BEGIN = 20480;
var PrinterData_STATUS_CURRENT_ALERT = 20480;
var PrinterData_STATUS_PRINTER_STATE = 20481;
var PrinterData_STATUS_USBKEY_CONNECTED = 20482;
var PrinterData_STATUS_END = 20482;
var PrinterData_NETWORK_BEGIN = 24576;
var PrinterData_NETWORK_ETHERNET_AVAILABLE = 24576;
var PrinterData_NETWORK_ETHERNET_ENABLED = 24577;
var PrinterData_NETWORK_ETHERNET_ENABLE_DHCP = 24578;
var PrinterData_NETWORK_ETHERNET_HOST = 24579;
var PrinterData_NETWORK_ETHERNET_IP_ADDRESS = 24580;
var PrinterData_NETWORK_ETHERNET_SUBNET_MASK = 24581;
var PrinterData_NETWORK_ETHERNET_DEFAULT_GATEWAY = 24582;
var PrinterData_NETWORK_ETHERNET_DNS_SERVER = 24583;
var PrinterData_NETWORK_ETHERNET_DOMAIN_NAME = 24584;
var PrinterData_NETWORK_ETHERNET_SELECTED_ADAPTER = 24585;
var PrinterData_NETWORK_EMAIL_ENABLED = 24586;
var PrinterData_NETWORK_EMAIL_ALERTS_TO = 24587;
var PrinterData_NETWORK_EMAIL_ALERTS_FROM = 24588;
var PrinterData_NETWORK_EMAIL_ALERTS_SUBJECT = 24589;
var PrinterData_NETWORK_EMAIL_ALERTS_SMTP_SERVER = 24590;
var PrinterData_NETWORK_EMAIL_ALERTS_SMTP_AUTH_ENABLED = 24591;
var PrinterData_NETWORK_EMAIL_ALERTS_AUTH_MODE = 24592;
var PrinterData_NETWORK_EMAIL_ALERTS_USERNAME = 24593;
var PrinterData_NETWORK_EMAIL_ALERTS_PASSWORD = 24594;
var PrinterData_NETWORK_SERIAL_ENABLED = 24595;
var PrinterData_NETWORK_SERIAL_BAUD_RATE = 24596;
var PrinterData_NETWORK_SERIAL_DATA_BITS = 24597;
var PrinterData_NETWORK_SERIAL_PARITY = 24598;
var PrinterData_NETWORK_SERIAL_STOP_BITS = 24599;
var PrinterData_NETWORK_SERIAL_FLOW_CONTROL = 24600;
var PrinterData_NETWORK_SERIAL_PROTOCOL = 24601;
var PrinterData_NETWORK_SERIAL_COM_PORT = 24602;
var PrinterData_NETWORK_CONNECTION_COUNT = 24603;
var PrinterData_NETWORK_END = 24603;
var PrinterData_LINESETUP_BEGIN = 28672;
var PrinterData_LINESETUP_ORIENTATION_ROTATE_HEAD = 28672;
var PrinterData_LINESETUP_ORIENTATION_ROTATE_PRODUCT = 28673;
var PrinterData_LINESETUP_ORIENTATION_MIRROR_PRINT = 28674;
var PrinterData_LINESETUP_ORIENTATION_ROTATION_ADJUSTMENT = 28675;
var PrinterData_LINESETUP_PRINT_FIELD_AUTO = 28676;
var PrinterData_LINESETUP_PRINT_FIELD_XMIN = 28677;
var PrinterData_LINESETUP_PRINT_FIELD_XMAX = 28678;
var PrinterData_LINESETUP_PRINT_FIELD_YMIN = 28679;
var PrinterData_LINESETUP_PRINT_FIELD_YMAX = 28680;
var PrinterData_LINESETUP_PRINT_FIELD_USAGE = 28681;
var PrinterData_LINESETUP_MOVING = 28682;
var PrinterData_LINESETUP_DIRECTION = 28683;
var PrinterData_LINESETUP_SPEED_INPUT = 28684;
var PrinterData_LINESETUP_FIXED_SPEED = 28685;
var PrinterData_LINESETUP_ENCODER_SCALE = 28686;
var PrinterData_LINESETUP_ENCODER_DIVIDE = 28687;
var PrinterData_LINESETUP_ENCODER_MULTIPLY = 28688;
var PrinterData_LINESETUP_CURRENT_PULSE_COUNT = 28689;
var PrinterData_LINESETUP_CURRENT_LINE_SPEED = 28690;
var PrinterData_LINESETUP_BACKLASH = 28691;
var PrinterData_LINESETUP_BACKLASH_DIRECTION = 28692;
var PrinterData_LINESETUP_BACKLASH_COUNT = 28693;
var PrinterData_LINESETUP_TRIGGER_BY = 28694;
var PrinterData_LINESETUP_TRIGGER_SIGNAL_LEVEL = 28695;
var PrinterData_LINESETUP_TRIGGER_CURRENT_LEVEL = 28696;
var PrinterData_LINESETUP_TRIGGER_DELAY = 28697;
var PrinterData_LINESETUP_TRIGGER_TIME_INTERVAL = 28698;
var PrinterData_LINESETUP_TRIGGER_DISTANCE_INTERVAL = 28699;
var PrinterData_LINESETUP_TRIGGER_START_ON_EXTERNAL_TRIGGER = 28700;
var PrinterData_LINESETUP_TRIGGER_RISING_RAMP_TIME = 28701;
var PrinterData_LINESETUP_TRIGGER_FALLING_RAMP_TIME = 28702;
var PrinterData_LINESETUP_TRIGGER_MAX_EXPECTED_SPEED = 28703;
var PrinterData_LINESETUP_TRIGGER_START_IGNORE_DISTANCE = 28704;
var PrinterData_LINESETUP_TRIGGER_MAX_DISTANCE_BETWEEN = 28705;
var PrinterData_LINESETUP_SHIFT_REGISTER_ENABLED = 28706;
var PrinterData_LINESETUP_SHIFT_REGISTER_QUEUE_DEPTH = 28707;
var PrinterData_LINESETUP_SHIFT_REGISTER_SUPPRESS_LAST_PRINT = 28708;
var PrinterData_LINESETUP_SHIFT_REGISTER_EDGE_SENSITIVITY = 28709;
var PrinterData_LINESETUP_SHIFT_REGISTER_ACTIVE_LEVEL = 28710;
var PrinterData_LINESETUP_PRINT_WHILE_SENSOR_ACTIVE = 28711;
var PrinterData_LINESETUP_END = 28710;
var PrinterData_HARDWARE_BEGIN = 32768;
var PrinterData_HARDWARE_SETTINGS_TARGET_PRESSURE = 32768;
var PrinterData_HARDWARE_SETTINGS_DEFAULT_PRESSURE = 32769;
var PrinterData_HARDWARE_SETTINGS_CONDUIT_COMPENSATION = 32770;
var PrinterData_HARDWARE_SETTINGS_HEATER_STATE = 32771;
var PrinterData_HARDWARE_SETTINGS_JET1_MODULATION_MODE = 32772;
var PrinterData_HARDWARE_SETTINGS_JET1_TARGET_MODULATION = 32773;
var PrinterData_HARDWARE_SETTINGS_JET2_MODULATION_MODE = 32774;
var PrinterData_HARDWARE_SETTINGS_JET2_TARGET_MODULATION = 32775;
var PrinterData_HARDWARE_SETTINGS_SKIP_NEXT_FLUSH = 32776;
var PrinterData_HARDWARE_SETTINGS_WAKEUP_MODE = 32777;
var PrinterData_HARDWARE_SETTINGS_CHARGE_LEVEL = 32778;
var PrinterData_HARDWARE_SETTINGS_DEFAULT_CHARGE_LEVEL = 32779;
var PrinterData_HARDWARE_SETTINGS_TARGET_TEMPERATURE = 32780;
var PrinterData_HARDWARE_SETTINGS_HEAD_RESISTANCE = 32781;
var PrinterData_HARDWARE_SETTINGS_HEAD_POSITION = 32782;
var PrinterData_HARDWARE_SETTINGS_ENABLE_IO_PORT = 32783;
var PrinterData_HARDWARE_VERSION_INFO_LIST = 32784;
var PrinterData_HARDWARE_END = 32784;
var PrinterData_MONITOR_BEGIN = 36864;
var PrinterData_MONITOR_COOLING_FREQUENCY = 36864;
var PrinterData_MONITOR_PRESSURE = 36865;
var PrinterData_MONITOR_PUMP_SPEED = 36866;
var PrinterData_MONITOR_PRIMARY_HEAD_TEMPERATURE = 36867;
var PrinterData_MONITOR_SECONDARY_HEAD_TEMPERATURE = 36868;
var PrinterData_MONITOR_BREAKUP_TIME = 36869;
var PrinterData_MONITOR_SYSTEM_STATUS_DATA = 36870;
var PrinterData_MONITOR_END = 36870;
var PrinterData_PRINTPARAMS_BEGIN = 40960;
var PrinterData_PRINTPARAMS_VECTOR_SORTING_VECTORS = 40960;
var PrinterData_PRINTPARAMS_VECTOR_SORTING_DIRECTION = 40961;
var PrinterData_PRINTPARAMS_VECTOR_SORTING_POLYGON_WISE = 40962;
var PrinterData_PRINTPARAMS_VECTOR_SORTING_ALLOW_REVERSING = 40963;
var PrinterData_PRINTPARAMS_VECTOR_SORTING_LEADING_EDGES = 40964;
var PrinterData_PRINTPARAMS_TUBE_DISTORTION_ENABLE = 40965;
var PrinterData_PRINTPARAMS_TUBE_DISTORTION_AXIS = 40966;
var PrinterData_PRINTPARAMS_TUBE_DISTORTION_CYLINDER_DIAMETER = 40967;
var PrinterData_PRINTPARAMS_TUBE_DISTORTION_VIRTUAL_FOCUS = 40968;
var PrinterData_PRINTPARAMS_PN_TRANSFORMATION_ENABLE = 40969;
var PrinterData_PRINTPARAMS_PN_TRANSFORMATION_AUTO_FACTOR = 40970;
var PrinterData_PRINTPARAMS_PN_TRANSFORMATION_POSITION = 40971;
var PrinterData_PRINTPARAMS_PN_TRANSFORMATION_WIDTH = 40972;
var PrinterData_PRINTPARAMS_SETUP_AIMING_MODE = 40973;
var PrinterData_PRINTPARAMS_MESSAGE_OPTIONS_OVERRIDE_GLOBAL_PARAMS = 40974;
var PrinterData_PRINTPARAMS_MESSAGE_OPTIONS_LOAD_LAST_MESSAGE_ON_STARTUP = 40975;
var PrinterData_PRINTPARAMS_USE_PRINT_COUNTER = 40976;
var PrinterData_PRINTPARAMS_ACTION_WHEN_COUNTER_DONE = 40977;
var PrinterData_PRINTPARAMS_CONTRAST = 40978;
var PrinterData_PRINTPARAMS_PREHEAT = 40979;
var PrinterData_PRINTPARAMS_SLOPE_TYPE = 40980;
var PrinterData_PRINTPARAMS_MAX_WEB_SPEED = 40981;
var PrinterData_PRINTPARAMS_FAST_MODE = 40982;
var PrinterData_PRINTPARAMS_RIBBON_ECONOMY = 40983;
var PrinterData_PRINTPARAMS_STOP_MIDPRINT = 40984;
var PrinterData_PRINTPARAMS_RETRACTION_TYPE = 40985;
var PrinterData_PRINTPARAMS_RETRACTION_LENGTH = 40986;
var PrinterData_PRINTPARAMS_RETRACTION_OFFSET = 40987;
var PrinterData_PRINTPARAMS_NUMBER_OF_COLUMNS = 40988;
var PrinterData_PRINTPARAMS_COLUMNS_WIDTH = 40989;
var PrinterData_PRINTPARAMS_XOFFSET = 40990;
var PrinterData_PRINTPARAMS_YOFFSET = 40991;
var PrinterData_PRINTPARAMS_START_PULSE_OFFSET = 40992;
var PrinterData_PRINTPARAMS_START_PULSE_DELAY = 40993;
var PrinterData_PRINTPARAMS_HEAD_POSITION_OFFSET = 40994;
var PrinterData_PRINTPARAMS_MIRROR_LABEL = 40995;
var PrinterData_PRINTPARAMS_FLIP_LABEL = 40996;
var PrinterData_PRINTPARAMS_HEAD_DOWN = 40997;
var PrinterData_PRINTPARAMS_HEAD_UP = 40998;
var PrinterData_PRINTPARAMS_CURRENT_ADJUST = 40999;
var PrinterData_PRINTPARAMS_MOTOR_START_OFFSET = 41000;
var PrinterData_PRINTPARAMS_MOTOR_STOP_OFFSET = 41001;
var PrinterData_PRINTPARAMS_END = 41001;
var PrinterData_LABELS_BEGIN = 45056;
var PrinterData_LABELS_IO_PORT_ACTIVE_MESSAGE_STORE = 45056;
var PrinterData_LABELS_DEFAULT_MESSAGE_STORE_FOR_SAVE_AS = 45057;
var PrinterData_SECURITY_BEGIN = 49152;
var PrinterData_SECURITY_CURRENTUSER_ID = 49152;
var PrinterData_SECURITY_CURRENTUSER_FULLNAME = 49153;
var PrinterData_SECURITY_CURRENTUSER_GROUP = 49154;
var PrinterData_SECURITY_ENABLE_AUTO_LOGIN = 49155;
var PrinterData_SECURITY_AUTO_LOGIN_USER = 49156;
var PrinterData_SECURITY_SESSION_INACTIVITY_AUTO_LOGOUT = 49157;
var PrinterData_SECURITY_USER_ACCOUNT_EXPIRY = 49158;
var PrinterData_SECURITY_USER_ACCOUNT_EXPIRY_WARNING = 49159;
var PrinterData_SECURITY_PASSWORD_EXPIRY = 49160;
var PrinterData_SECURITY_PASSWORD_EXPIRY_WARNING = 49161;
var PrinterData_SECURITY_PASSWORD_MIN_LENGTH = 49162;
var PrinterData_SECURITY_PASSWORD_MIN_UPPERCASE_CHAR = 49163;
var PrinterData_SECURITY_PASSWORD_MIN_LOWERCASE_CHAR = 49164;
var PrinterData_SECURITY_PASSWORD_MIN_NUMERIC_CHAR = 49165;
var PrinterData_SECURITY_PASSWORD_MIN_SPECIAL_CHAR = 49166;
var PrinterData_SECURITY_PASSWORD_SPECIAL_CHAR = 49167;
var PrinterData_SECURITY_PASSWORD_MAX_REPEATED_CHAR = 49168;
var PrinterData_SECURITY_PASSWORD_MAX_COHERENT_ID_CHAR = 49169;
var PrinterData_SECURITY_PASSWORD_MIN_UNREPEATED_PASSWORD = 49170;
var PrinterData_SECURITY_MODE = 49171;
var PrinterData_SECURITY_REMOTE_SERVER_ADDRESS = 49172;
var PrinterData_SECURITY_REMOTE_SERVER_PORT = 49173;
var PrinterData_SECURITY_REMOTE_DEVICE_ID = 49174;
var PrinterData_SECURITY_REMOTE_ENCODE_PASSWORD = 49175;
var PrinterData_SECURITY_MAX_LOGIN_ATTEMPTS = 49176;
var PrinterData_SECURITY_END = 49176;
var PrinterData_SHIFTCODES_BEGIN = 53248;
var PrinterData_SHIFTCODES_GLOBAL_SHIFTCODE_TABLE = 53248;
var PrinterData_SHIFTCODES_END = 53248;
var PrinterData_CLOCKSETTINGS_BEGIN = 57344;
var PrinterData_CLOCKSETTINGS_ALPHA_HOURS = 57344;
var PrinterData_CLOCKSETTINGS_JULIAN_LEAP_DAY = 57345;
var PrinterData_CLOCKSETTINGS_EXPIRATION_DATE = 57346;
var PrinterData_CLOCKSETTINGS_WEEK_BEGIN_DAY = 57347;
var PrinterData_CLOCKSETTINGS_CALENDAR_WEEK_DEFINITION = 57348;
var PrinterData_CLOCKSETTINGS_TIME_GRANULARITY = 57349;
var PrinterData_CLOCKSETTINGS_CALENDAR_SCHEME = 57350;
var PrinterData_CLOCKSETTINGS_DAY_NAMES = 57351;
var PrinterData_CLOCKSETTINGS_MONTH_NAMES = 57352;
var PrinterData_CLOCKSETTINGS_MONTH_SHORT_NAMES = 57353;
var PrinterData_CLOCKSETTINGS_ALPHA_WEEK_DAYS = 57354;
var PrinterData_CLOCKSETTINGS_ALPHA_MONTH_DAYS = 57355;
var PrinterData_CLOCKSETTINGS_END = 57355;
var PrinterData_MARK_QUALITY_BEGIN = 61440;
var PrinterData_MARK_QUALITY_ENABLE = 61441;
var PrinterData_MARK_QUALITY_CAMERA_DISTANCE = 61442;
var PrinterData_MARK_QUALITY_EJECTOR_DISTANCE = 61443;
var PrinterData_MARK_QUALITY_CHECK_SUCCESSFUL = 61444;
var PrinterData_MARK_QUALITY_EJECTED_SIGNAL_TIMEOUT = 61445;
var PrinterData_MARK_QUALITY_BAD_READ_LIMIT = 61446;
var PrinterData_MARK_QUALITY_CONTROL_REJECTOR_UNIT = 61447;
var PrinterData_MARK_QUALITY_REJECT_SIGNAL_PULSE_WIDTH = 61448;
var PrinterData_MARK_QUALITY_REJECT_OUT_OF_POSITION_PRODUCTS = 61449;
var PrinterData_MARK_QUALITY_END = 61449;
var PrinterData_USER_DEFINED_DATA = 268435456;
var PrinterData_TTO_USER_DATA = 268435456;
var PrinterData_CIJ_USER_DATA = 285212672;
var PrinterData_LASER_USER_DATA = 301989888;
var PrinterData_TIJ_USER_DATA = 318767104;
var PrinterData_OTHER_USER_DATA = 335544320;
var PrinterData_ALWAYS_DISABLED_DATA_KEY = 335544321;
