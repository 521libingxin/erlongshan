/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/setup/setup.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../app/service/navigation.service';
import * as import10 from '../../../app/service/menus.service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '@angular/router/src/directives/router_outlet';
import * as import20 from '../../../app/service/setting-button.component';
import * as import21 from '../service/setting-button.component.ngfactory';
export var Wrapper_SetupComponent = (function () {
    function Wrapper_SetupComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.SetupComponent(p0, p1, p2);
    }
    Wrapper_SetupComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SetupComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_SetupComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_SetupComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SetupComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SetupComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SetupComponent;
}());
var renderType_SetupComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_SetupComponent_Host0 = (function (_super) {
    __extends(View_SetupComponent_Host0, _super);
    function View_SetupComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SetupComponent_Host0, renderType_SetupComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SetupComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'menus', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SetupComponent0(this.viewUtils, this, 0, this._el_0);
        this._SetupComponent_0_3 = new Wrapper_SetupComponent(this.injectorGet(import8.Router, this.parentIndex), this.injectorGet(import9.NavService, this.parentIndex), this.injectorGet(import10.menuService, this.parentIndex));
        this.compView_0.create(this._SetupComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SetupComponent_0_3.context);
    };
    View_SetupComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SetupComponent) && (0 === requestNodeIndex))) {
            return this._SetupComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SetupComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SetupComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SetupComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._SetupComponent_0_3.ngOnDestroy();
    };
    View_SetupComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SetupComponent_Host0;
}(import1.AppView));
export var SetupComponentNgFactory = new import7.ComponentFactory('menus', View_SetupComponent_Host0, import0.SetupComponent);
var styles_SetupComponent = [];
var renderType_SetupComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SetupComponent, {});
export var View_SetupComponent0 = (function (_super) {
    __extends(View_SetupComponent0, _super);
    function View_SetupComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SetupComponent0, renderType_SetupComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SetupComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', new import3.InlineArray2(2, 'class', 'setting_left'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new import11.ViewContainer(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import14.TemplateRef_(this, 3, this._anchor_3);
        this._NgFor_3_6 = new import12.Wrapper_NgFor(this._vc_3.vcRef, this._TemplateRef_3_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'setting_right'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_8 = new import11.ViewContainer(8, 6, this, this._el_8);
        this._RouterOutlet_8_5 = new import13.Wrapper_RouterOutlet(this.parentView.injectorGet(import16.RouterOutletMap, this.parentIndex), this._vc_8.vcRef, this.parentView.injectorGet(import17.ComponentFactoryResolver, this.parentIndex), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), null);
        return null;
    };
    View_SetupComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import18.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6.context;
        }
        if (((token === import19.RouterOutlet) && (8 === requestNodeIndex))) {
            return this._RouterOutlet_8_5.context;
        }
        return notFoundResult;
    };
    View_SetupComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.tabSettings;
        this._NgFor_3_6.check_ngForOf(currVal_3_0_0, throwOnChange, false);
        this._NgFor_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._RouterOutlet_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    };
    View_SetupComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._RouterOutlet_8_5.ngOnDestroy();
    };
    View_SetupComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_SetupComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_SetupComponent0;
}(import1.AppView));
var View_SetupComponent1 = (function (_super) {
    __extends(View_SetupComponent1, _super);
    function View_SetupComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SetupComponent1, renderType_SetupComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_SetupComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'nav-icon-button', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import21.View_SettingsButtonComponent0(this.viewUtils, this, 2, this._el_2);
        this._SettingsButtonComponent_2_3 = new import21.Wrapper_SettingsButtonComponent();
        this.compView_2.create(this._SettingsButtonComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_SetupComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.SettingsButtonComponent) && (2 === requestNodeIndex))) {
            return this._SettingsButtonComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_SetupComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._SettingsButtonComponent_2_3.check_button(currVal_2_0_0, throwOnChange, false);
        this._SettingsButtonComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_SetupComponent1.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_SetupComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SetupComponent1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.go(this.context.$implicit.destination) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SetupComponent1;
}(import1.AppView));
//# sourceMappingURL=setup.component.ngfactory.js.map