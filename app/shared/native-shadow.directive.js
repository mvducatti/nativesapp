"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === null) {
            return;
        }
        if (typeof this.nsShadow === 'string') {
            this.nsShadow = {
                elevation: this.nsShadow ? parseInt(this.nsShadow, 10) : 2,
                shape: 'RECTANGLE',
                color: '#FFFFFF',
                cornerRadius: 20,
            };
        }
    };
    NativeShadowDirective.prototype.onLoaded = function () {
        if (this.nsShadow === null) {
            return;
        }
        var tnsView = this.el.nativeElement;
        if (tnsView.android && typeof this.nsShadow !== 'string') {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable[this.nsShadow.shape]);
            shape.setColor(android.graphics.Color.parseColor(this.nsShadow.color));
            shape.setCornerRadius(this.nsShadow.cornerRadius);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(this.nsShadow.elevation);
        }
        else if (tnsView.ios && typeof this.nsShadow !== 'string') {
            var elevation = parseFloat((this.nsShadow.elevation - 1).toFixed(2));
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(0, elevation);
            tnsView.ios.layer.shadowOpacity = 0.20;
            tnsView.ios.layer.shadowRadius = elevation - 1;
        }
    };
    return NativeShadowDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NativeShadowDirective.prototype, "nsShadow", void 0);
__decorate([
    core_1.HostListener('loaded'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NativeShadowDirective.prototype, "onLoaded", null);
NativeShadowDirective = __decorate([
    core_1.Directive({ selector: '[nsShadow]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NativeShadowDirective);
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzQztBQUN0QywrQkFBOEI7QUFNOUIsSUFBYSxxQkFBcUI7SUFTaEMsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QywrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsWUFBWSxFQUFFLEVBQUU7YUFDakIsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRXVCLHdDQUFRLEdBQVI7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMvRCxLQUFLLENBQUMsUUFBUSxDQUNaLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hFLENBQUM7WUFDRixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBL0NVO0lBQVIsWUFBSyxFQUFFOzt1REFNSjtBQWtCb0I7SUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7Ozs7cURBc0J0QjtBQS9DVSxxQkFBcUI7SUFEakMsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztxQ0FVWCxpQkFBVTtHQVR2QixxQkFBcUIsQ0FnRGpDO0FBaERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLFxyXG4gICAgICAgICBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcclxuXHJcbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xyXG5kZWNsYXJlIGNvbnN0IENHU2l6ZU1ha2U6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuc1NoYWRvd10nfSlcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZVNoYWRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgbnNTaGFkb3c/OiBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICBlbGV2YXRpb246IG51bWJlcixcclxuICAgICAgc2hhcGU6ICdSRUNUQU5HTEUnIHwgJ09WQUwnLFxyXG4gICAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgICBjb3JuZXJSYWRpdXM6IG51bWJlcixcclxuICAgIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm5zU2hhZG93ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdGhpcy5uc1NoYWRvdyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5uc1NoYWRvdyA9IHtcclxuICAgICAgICBlbGV2YXRpb246IHRoaXMubnNTaGFkb3cgPyBwYXJzZUludCh0aGlzLm5zU2hhZG93LCAxMCkgOiAyLFxyXG4gICAgICAgIHNoYXBlOiAnUkVDVEFOR0xFJyxcclxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgIGNvcm5lclJhZGl1czogMjAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdsb2FkZWQnKSBvbkxvYWRlZCgpIHtcclxuICAgIGlmICh0aGlzLm5zU2hhZG93ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRuc1ZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodG5zVmlldy5hbmRyb2lkICYmIHR5cGVvZiB0aGlzLm5zU2hhZG93ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcclxuICAgICAgc2hhcGUuc2V0U2hhcGUoXHJcbiAgICAgICAgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlW3RoaXMubnNTaGFkb3cuc2hhcGVdLFxyXG4gICAgICApO1xyXG4gICAgICBzaGFwZS5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IodGhpcy5uc1NoYWRvdy5jb2xvcikpO1xyXG4gICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXModGhpcy5uc1NoYWRvdy5jb3JuZXJSYWRpdXMpO1xyXG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcclxuICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEVsZXZhdGlvbih0aGlzLm5zU2hhZG93LmVsZXZhdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKHRuc1ZpZXcuaW9zICYmIHR5cGVvZiB0aGlzLm5zU2hhZG93ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBwYXJzZUZsb2F0KCh0aGlzLm5zU2hhZG93LmVsZXZhdGlvbiAtIDEpLnRvRml4ZWQoMikpO1xyXG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5tYXNrVG9Cb3VuZHMgPSBmYWxzZTtcclxuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKS5pb3MuQ0dDb2xvcjtcclxuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCBlbGV2YXRpb24pO1xyXG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMC4yMDtcclxuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93UmFkaXVzID0gZWxldmF0aW9uIC0gMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19