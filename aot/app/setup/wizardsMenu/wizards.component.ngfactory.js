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
import * as import0 from '../../../../app/setup/wizardsMenu/wizards.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../../../app/service/navigation.service';
import * as import11 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/router/src/router_outlet_map';
import * as import16 from '@angular/core/src/linker/component_factory_resolver';
import * as import17 from '@angular/router/src/directives/router_outlet';
export var Wrapper_WizardsComponent = (function () {
    function Wrapper_WizardsComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.WizardsComponent(p0, p1, p2, p3);
    }
    Wrapper_WizardsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_WizardsComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_WizardsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_WizardsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_WizardsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_WizardsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_WizardsComponent;
}());
var renderType_WizardsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_WizardsComponent_Host0 = (function (_super) {
    __extends(View_WizardsComponent_Host0, _super);
    function View_WizardsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WizardsComponent_Host0, renderType_WizardsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_WizardsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'menus', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_WizardsComponent0(this.viewUtils, this, 0, this._el_0);
        this._WizardsComponent_0_3 = new Wrapper_WizardsComponent(this.injectorGet(import8.Router, this.parentIndex), this.injectorGet(import9.ActivatedRoute, this.parentIndex), this.injectorGet(import10.NavService, this.parentIndex), this.injectorGet(import11.NgbModal, this.parentIndex));
        this.compView_0.create(this._WizardsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._WizardsComponent_0_3.context);
    };
    View_WizardsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.WizardsComponent) && (0 === requestNodeIndex))) {
            return this._WizardsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_WizardsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._WizardsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_WizardsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._WizardsComponent_0_3.ngOnDestroy();
    };
    View_WizardsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_WizardsComponent_Host0;
}(import1.AppView));
export var WizardsComponentNgFactory = new import7.ComponentFactory('menus', View_WizardsComponent_Host0, import0.WizardsComponent);
var styles_WizardsComponent = [];
var renderType_WizardsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_WizardsComponent, {});
export var View_WizardsComponent0 = (function (_super) {
    __extends(View_WizardsComponent0, _super);
    function View_WizardsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WizardsComponent0, renderType_WizardsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_WizardsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new import12.ViewContainer(1, null, this, this._anchor_1);
        this._TemplateRef_1_4 = new import14.TemplateRef_(this, 1, this._anchor_1);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'wizards_box'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'wizards_top'), null);
        this._text_6 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_3, 'button', new import3.InlineArray2(2, 'class', 'btn_close'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'btn_close_in'), null);
        this._text_10 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_11 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'wizards_main'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_14 = new import12.ViewContainer(14, 12, this, this._el_14);
        this._RouterOutlet_14_5 = new import13.Wrapper_RouterOutlet(this.parentView.injectorGet(import15.RouterOutletMap, this.parentIndex), this._vc_14.vcRef, this.parentView.injectorGet(import16.ComponentFactoryResolver, this.parentIndex), null);
        this._text_15 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n        ', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._anchor_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17
        ]), [disposable_0]);
        return null;
    };
    View_WizardsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_4;
        }
        if (((token === import17.RouterOutlet) && (14 === requestNodeIndex))) {
            return this._RouterOutlet_14_5.context;
        }
        return notFoundResult;
    };
    View_WizardsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RouterOutlet_14_5.ngDoCheck(this, this._el_14, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
    };
    View_WizardsComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._RouterOutlet_14_5.ngOnDestroy();
    };
    View_WizardsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_WizardsComponent1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    View_WizardsComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.open(this._TemplateRef_1_4) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_WizardsComponent0;
}(import1.AppView));
var View_WizardsComponent1 = (function (_super) {
    __extends(View_WizardsComponent1, _super);
    function View_WizardsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_WizardsComponent1, renderType_WizardsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_WizardsComponent1.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n            ', null);
        this._el_1 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'login_alert'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'button', new import3.InlineArray4(4, 'class', 'btn_depth_style', 'style', 'margin-bottom:7px;'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n                    Disconnect from printer\n                ', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'button', new import3.InlineArray2(2, 'class', 'btn_depth_style'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                    Lock screen\n                ', null);
        this._text_8 = this.renderer.createText(this._el_1, '\n            ', null);
        this._text_9 = this.renderer.createText(null, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        this.init(this._text_9, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9
        ]), [disposable_0]);
        return null;
    };
    View_WizardsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._text_0, ctx);
        cb(this._el_1, ctx);
        cb(this._text_9, ctx);
    };
    View_WizardsComponent1.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.close('Close click') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_WizardsComponent1;
}(import1.AppView));
//# sourceMappingURL=wizards.component.ngfactory.js.map