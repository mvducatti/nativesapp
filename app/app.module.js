"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var platform = require("platform");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_2 = require("./core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            core_2.CoreModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader },
            { provide: 'platform', useValue: platform },
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FDaUQ7QUFDakQsZ0ZBQThFO0FBQzlFLHNEQUFvRTtBQUNwRSxtQ0FBcUM7QUFFckMsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQywrQkFBb0M7QUFzQnBDLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXBCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQixxQ0FBZ0I7WUFDaEIsaUJBQVU7U0FDWDtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsOEJBQXFCLEVBQUU7WUFDbkUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7U0FDNUM7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxyXG4gICAgICAgICBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgIENvcmVNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIEFwcENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgeyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSxcclxuICAgICAgeyBwcm92aWRlOiAncGxhdGZvcm0nLCB1c2VWYWx1ZTogcGxhdGZvcm0gfSxcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=