import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { SettingsButton } from '../model/setting-button';
import { IcService } from '../service/intercomm.service';
import { NavService } from '../service/navigation.service';

// This is a TS file that contains JS definitions.
var icc = require('../model/IntercommCommonActivateRequest.js');

@Component({
    selector: 'editor-defaults',
    templateUrl: 'htmltemplate/genericsettingtemplate.html'
})
export class GenericSettingComponent implements OnInit, OnDestroy {



    timer: Observable<number>;
    timerSubscription: Subscription;
    setting: boolean;

    settings: SettingsButton[] = [{ caption: "Production Line Setup", icon: 'img/printer_configuration_unselected.png', destination: '/settingsMenu/ProductionLineSetup' },
    {caption: "Global Print Settings", icon: 'img/machine_print_settings_unselected.png', destination: '/settingsMenu/GlobalPrintSettings' }
    ];

    tabSettings: SettingsButton[] = [{ caption: "Settings", icon: 'img/Icon_Setup_Available.png', destination: '/' },
    {caption: "Wizards", icon: 'img/Icon_Wizards_Available.png', destination: '/' }];

    constructor(
        private icservice: IcService,
        private route: ActivatedRoute,
        private navservice: NavService) { }

    ngOnInit() {
        this.timer = Observable.timer(500, 1000);
        // TODO enable this later
        this.timerSubscription = this.timer.subscribe(t => {
            this.icservice.remoteProcedureCall(icc.ReadBleedValve, []).subscribe(
                (res: any) => {
                    //console.log(res)
                    this.setting = res["bState"];
                },
                (error: any) => {
                    console.log(error);
                }
            );
        });

        this.route.url.subscribe(
            urlList => {
                this.navservice.setCurrentPath(urlList)
                console.log(urlList.pop().path);
            });
    }

    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }

    onSettingToggle() {
        let output = !this.setting;
        //console.log(output);
        this.icservice.remoteProcedureCall(icc.WriteBleedValve, [output]).subscribe(
            (res: any) => {
                //TODO implement something, anything
                //console.log(res);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }



}