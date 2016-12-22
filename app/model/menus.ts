
export var menus_one: any = {
    'home':{caption: "home", icon: 'img/Icon_Home_Available.png',iconhover:'img/Icon_Home_Selected.png', destination: 'home'},
    'login':{caption: "login", destination: "",styleclass:'button_style_sma', icon: "img/loginout_icon_unselected.png"},
    'betw':{ caption: "", destination: "",styleclass:"button_betw", icon: "img/Icon_foot_bet.png" },
    'all':{caption: "Setup", icon: 'img/Icon_Settings_Available.png',iconhover:'img/Icon_Settings_Selected.png', destination: 'settingsMenu'},
    'settingsMenu':{caption: "Settings", icon: 'img/Icon_Setup_Available.png',iconhover:'img/Icon_Setup_Selected.png', destination: 'settingsMenu',parent:'all'},
    'wizardsMenu':{caption: "Wizards", icon: 'img/Icon_Wizards_Available.png',iconhover:'img/Icon_Wizards_Selected.png', destination: 'wizardsMenu',parent:'all'},
    'wizardsMenus':{caption: "Wizards", icon: 'img/Icon_Wizards_Available.png',iconhover:'img/Icon_Wizards_Selected.png', destination: 'wizardsMenu',parent:'all'},
        'upgradewizard':{caption:"Upgrade wizard",icon:'img/wizard_unselected.png',destination: 'wizardsMenus/upgradewizard',parent:'productionlinesetup'},
    'printoptimisation':{caption: "Print optimisation", icon: 'img/Icon_Printoptimisation_Pressed.png',iconhover:'img/Icon_Print_optimisation_Selected.png', destination: 'settingsMenu/productionlinesetup',parent:'printoptimisation'},
    'productionlinesetup':{caption: "Production line setup", icon: 'img/Icon_ProductionLineSetup_Available.png',iconhover:'img/Icon_Production_line_setup_Selected.png', destination: 'settingsMenu/linemovement'},
        'linemovement':{caption:"Line movement",destination: 'settingsMenu/linemovement',parent:'productionlinesetup'},
        'printtrigger':{caption:"Print trigger",destination: 'settingsMenu/printtrigger',parent:'productionlinesetup'},
        'poweroptions':{caption:"Power options",destination: 'settingsMenu/poweroptions',parent:'productionlinesetup'},
    'globalprintsettings':{caption: "Global print settings", icon: 'img/Icon_Global_print_settings_Available.png',iconhover:'img/Icon_Global_print_settings_Selected.png', destination: 'settingsMenu/positionorientation'},
        'positionorientation':{caption:"Position / orientation",destination: 'settingsMenu/positionorientation',parent:'globalprintsettings'},
        'content':{caption:"Content",destination: 'settingsMenu/content',parent:'globalprintsettings'},
    'editordefaults':{caption: "Editor defaults", icon: 'img/Icon_Editor_defaults_Available.png',iconhover:'img/Icon_Editor_defaults_Selected.png', destination: 'settingsMenu/properties'},
        'properties':{caption:"Properties",destination: 'settingsMenu/properties',parent:'editordefaults'},
        'clocksdates':{caption:"Clocks / dates",destination: 'settingsMenu/clocksdates',parent:'editordefaults'},
    'advancedsettings':{caption: "Advanced", icon: 'img/Icon_Advanced_Available.png',iconhover:'img/Icon_Advanced_Selected.png', destination: 'settingsMenu/printheadmanualmode'},
        'printheadmanualmode':{caption:"Print head manual mode",destination: 'settingsMenu/printheadmanualmode',parent:'advancedsettings'},
        'inksystemmanualmode':{caption:"Ink system manual mode",destination: 'settingsMenu/inksystemmanualmode',parent:'advancedsettings'},
        'inkdetails':{caption:"Ink details",destination: 'settingsMenu/inkdetails',parent:'advancedsettings'},
        'hardware':{caption:"Hardware",destination: 'settingsMenu/hardware',parent:'advancedsettings'},
        'gutter':{caption:"Gutter",destination: 'settingsMenu/gutter',parent:'advancedsettings'},
        'installoptions':{caption:"Install options",destination: 'settingsMenu/installoptions',parent:'advancedsettings'},
    'printerdiagnostics':{caption: "Printer diagnostics", icon: 'img/Icon_Diagnostics_Available.png',iconhover:'img/Icon_Diagnostics_Selected.png', destination: 'settingsMenu/status'},
        'status':{caption:"Status",destination: 'settingsMenu/status',parent:'printerdiagnostics'},
        'logs':{caption:"Logs",destination: 'settingsMenu/logs',parent:'printerdiagnostics'},
        'qualityproblems':{caption:"Quality problems",destination: 'settingsMenu/qualityproblems',parent:'printerdiagnostics'},
        'jetprofile':{caption:"Jet profile",destination: 'settingsMenu/jetprofile',parent:'printerdiagnostics'},
        'tests':{caption:"Tests",destination: 'settingsMenu/tests',parent:'printerdiagnostics'},
    'adjustment':{caption: "Adjustment", icon: 'img/Icon_Adjustment_Available.png',iconhover:'img/Icon_Adjustment_Selected.png', destination: 'settingsMenu/modulation'},
        'modulation':{caption:"Modulation",destination: 'settingsMenu/modulation',parent:'adjustment'},
        'pressurelogs':{caption:"Pressure",destination: 'settingsMenu/pressurelogs',parent:'adjustment'},
        'testprint':{caption:"Test print",destination: 'settingsMenu/testprint',parent:'adjustment'},
        'installation':{caption:"Installation",destination: 'settingsMenu/installation',parent:'adjustment'},
        'inspection':{caption:"Inspection",destination: 'settingsMenu/inspection',parent:'adjustment'},
    'alertconfiguration':{caption: "Alert configuration", icon: 'img/Icon_Alertconfiguration_Available.png',iconhover:'img/Icon_Alert_configuration_Selected.png', destination: 'settingsMenu/configueralerts'},
        'configueralerts':{caption:"Configure alerts",destination: 'settingsMenu/configueralerts',parent:'alertconfiguration'},
        'rangedalerts':{caption:"Ranged alerts",destination: 'settingsMenu/rangedalerts',parent:'alertconfiguration'},
        'emailalerts':{caption:"Email alerts",destination: 'settingsMenu/emailalerts',parent:'alertconfiguration'},
        'servicealerts':{caption:"Service alerts",destination: 'settingsMenu/servicealerts',parent:'alertconfiguration'},
    'ioport':{caption: "IO port", icon: 'img/Icon_IOPort_Available.png',iconhover:'img/Icon_IO_Port_Selected.png', destination: 'settingsMenu/setup'},
        'setup':{caption:"Set up",destination: 'settingsMenu/setup',parent:'ioport'},
        'assignment':{caption:"Assignment",destination: 'settingsMenu/assignment',parent:'ioport'},
        'monitor':{caption:"Monitor",destination: 'settingsMenu/monitor',parent:'ioport'},
        'test':{caption:"Test",destination: 'settingsMenu/test',parent:'ioport'},
        'labelselect':{caption:"Label select",destination: 'settingsMenu/labelselect',parent:'ioport'},
    'printernetwork':{caption: "Printer network", icon: 'img/Icon_Printer_network_Available.png',iconhover:'img/Icon_Printer_network_Selected.png', destination: 'settingsMenu/ethernet'},
        'ethernet':{caption:'Ethernet',destination: 'settingsMenu/ethernet',parent:'printernetwork'},
        'serial':{caption:'Serial',destination: 'settingsMenu/serial',parent:'printernetwork'},
        'advanced':{caption:'Advanced',destination: 'settingsMenu/advanced',parent:'printernetwork'},
    'regional':{caption: "Regional", icon: 'img/Icon_Regional_Available.png',iconhover:'img/Icon_Regional_Selected.png', destination: 'settingsMenu/languagekeyboard'},
        'languagekeyboard':{caption:'Language & keyboard',destination: 'settingsMenu/languagekeyboard',parent:'regional'},
        'datetime':{caption:'Date & time',destination: 'settingsMenu/datetime',parent:'regional'},
    'backuprestore':{caption: "Backup & restore", icon: 'img/Icon_BackupAndRestore_Available.png',iconhover:'img/Icon_Backup_and_restore_Selected.png', destination: 'settingsMenu/backup'},
        'backup':{caption:'Backup',destination: 'settingsMenu/backup',parent:'backuprestore'},
        'restore':{caption:'Restore',destination: 'settingsMenu/restore',parent:'backuprestore'},
        'defaults':{caption:'Defaults',destination: 'settingsMenu/defaults',parent:'backuprestore'},
        'upgrade':{caption:'Upgrade',destination: 'settingsMenu/upgrade',parent:'backuprestore'},
        'upgradeconfigur':{caption:'Upgrade configuration',destination: 'settingsMenu/upgradeconfigur',parent:'backuprestore'},
    'filemanager':{caption: "File manager", icon: 'img/Icon_File_manager_Available.png',iconhover:'img/Icon_File_manager_Selected.png', destination: 'settingsMenu/modulation'},
    'systeminformation':{caption: "System information", icon: 'img/Icon_System_info_Available.png',iconhover:'img/Icon_System_info_Selected.png', destination: 'settingsMenu/overview'},
        'overview':{caption:'Overview',destination: 'settingsMenu/overview',parent:'systeminformation'},
        'softwareversions':{caption:'Software version',destination: 'settingsMenu/softwareversions',parent:'systeminformation'},
    'userinterface':{caption: "User interface", icon: 'img/Icon_User_interface_Available.png',iconhover:'img/Icon_User_interface_Selected.png', destination: 'settingsMenu/printerconnection'},
        'printerconnection':{caption:'Printer connection',destination: 'settingsMenu/printerconnection',parent:'userinterface'},
        'languageandkey':{caption:'Language & Keyboard',destination: 'settingsMenu/languageandkey',parent:'userinterface'},
        'accessibility':{caption:'Accessibility',destination: 'settingsMenu/accessibility',parent:'userinterface'},
        'diagnostics':{caption:'Diagnostics',destination: 'settingsMenu/diagnostics',parent:'userinterface'},
        'network':{caption:'Network',destination: 'settingsMenu/network',parent:'userinterface'},
        'versioninformation':{caption:'Version information',destination: 'settingsMenu/versioninformation',parent:'userinterface'},
    'tools':{caption: "Tools", icon: 'img/Icon_Tools_Available.png',iconhover:'img/Icon_Tools_Selected.png', destination: 'settingsMenu/logoeditor'},
        'logoeditor':{caption:'Logo editor',destination: 'settingsMenu/logoeditor',parent:'tools'},
    'packsmanagement':{caption: "Packs management", icon: 'img/Icon_Packs_management_Available.png',iconhover:'img/Icon_Packs_management_Selected.png', destination: 'settingsMenu/installpacks'},
        'installpacks':{caption:'Install packs',destination: 'settingsMenu/installpacks',parent:'packsmanagement'},
        'migratepacks':{caption:'Migrate packs',destination: 'settingsMenu/migratepacks',parent:'packsmanagement'},
    'printerstatus':{caption: "Printer status", icon: 'img/Icon_Printer_status_Available.png',iconhover:'img/Icon_Printer_status_Selected.png', destination: 'settingsMenu/consumables'},
        'consumables':{caption:'Consumables',destination: 'settingsMenu/consumables',parent:'printerstatus'},
        'counters':{caption:'Counters',destination: 'settingsMenu/counters',parent:'printerstatus'},
        'statistics':{caption:'Statistics',destination: 'settingsMenu/statistics',parent:'printerstatus'},
        'inspectionp':{caption:'Inspection',destination: 'settingsMenu/inspectionp',parent:'printerstatus'},
        
    
}
export var menus: any = {
    'settingsMenu':[
        'productionlinesetup',
        'globalprintsettings',
        'editordefaults',
        'advancedsettings',
        'printerdiagnostics',
        'adjustment',
        'alertconfiguration',
        'ioport',
        'printernetwork',
        'regional',
        'backuprestore',
        'filemanager',
        'systeminformation',
        'userinterface',
        'tools',
        'packsmanagement',
        'printerstatus'
    ],
    'wizardsMenu':[
        'upgradewizard'
    ],
    //settings
        'productionlinesetup':[
            'linemovement',
            'printtrigger',
            'poweroptions'
        ],
        'globalprintsettings':[
            'positionorientation',
            'content'
        ],
        'editordefaults':[
            'properties',
            'clocksdates'
        ],
        'advancedsettings':[
            'printheadmanualmode',
            'inksystemmanualmode',
            'inkdetails',
            'hardware',
            'gutter',
            'installoptions'
        ],
        'printerdiagnostics':[
            'status',
            'logs',
            'qualityproblems',
            'jetprofile',
            'tests'
        ],
        'adjustment':[
            'modulation',
            'pressurelogs',
            'testprint',
            'installation',
            'inspection'
        ],
        'alertconfiguration':[
            'configueralerts',
            'rangedalerts',
            'emailalerts',
            'servicealerts'
        ],
        'ioport':[
            'setup',
            'assignment',
            'monitor',
            'test',
            'labelselect',
        ],
        'printernetwork':[
            'ethernet',
            'serial',
            'advanced'
        ],
        'regional':[
            'languagekeyboard',
            'datetime'
        ],
        'backuprestore':[
            'backup',
            'restore',
            'defaults',
            'upgrade',
            'upgradeconfigur'
        ],
        'systeminformation':[
            'overview',
            'softwareversions'
        ],
        'userinterface':[
            'printerconnection',
            'languageandkey',
            'accessibility',
            'diagnostics',
            'network',
            'versioninformation'
        ],
        'tools':[
            'logoeditor'
        ],
        'packsmanagement':[
            'installpacks',
            'migratepacks'
        ],
        'printerstatus':[
            'consumables',
            'counters',
            'statistics',
            'inspectionp'
        ],
    'all':[
        'settingsMenu',
        'wizardsMenu'
    ],
    'home':[
        'printoptimisation',
        'productionlinesetup',
        'all'
    ]
    
}
