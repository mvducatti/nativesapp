"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var chats_service_1 = require("./chats.service");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
        ],
        declarations: [],
        providers: [
            chats_service_1.ChatsService,
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFFOUUsaURBQStDO0FBVy9DLElBQWEsVUFBVTtJQUF2QjtJQUEwQixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsVUFBVTtJQVR0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7U0FDbkI7UUFDRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixTQUFTLEVBQUU7WUFDVCw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FBSTtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuL2NoYXRzLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ2hhdHNTZXJ2aWNlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxyXG4iXX0=