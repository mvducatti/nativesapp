"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var native_shadow_directive_1 = require("./native-shadow.directive");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            native_shadow_directive_1.NativeShadowDirective,
        ],
        exports: [
            native_shadow_directive_1.NativeShadowDirective,
        ],
        providers: [],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMscUVBQWtFO0FBWWxFLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFWeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxZQUFZLEVBQUU7WUFDWiwrQ0FBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCwrQ0FBcUI7U0FDdEI7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2hhZG93RGlyZWN0aXZlIH0gZnJvbSAnLi9uYXRpdmUtc2hhZG93LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmF0aXZlU2hhZG93RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmF0aXZlU2hhZG93RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cclxuIl19