"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var chats_component_1 = require("./chats/chats.component");
var short_when_pipe_1 = require("./chats/short-when.pipe");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var tabs_component_1 = require("./tabs/tabs.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            home_routing_module_1.HomeRoutingModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                mdi: 'material-design-icons.css',
            }),
        ],
        declarations: [
            home_component_1.HomeComponent,
            tabs_component_1.TabsComponent,
            chats_component_1.ChatsComponent,
            short_when_pipe_1.ShortWhenPipe,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCwyREFBeUQ7QUFDekQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsd0RBQXNEO0FBcUJ0RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFuQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDeEIsR0FBRyxFQUFFLDJCQUEyQjthQUNqQyxDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCwrQkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FBSTtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuaW1wb3J0IHsgQ2hhdHNDb21wb25lbnQgfSBmcm9tICcuL2NoYXRzL2NoYXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNob3J0V2hlblBpcGUgfSBmcm9tICcuL2NoYXRzL3Nob3J0LXdoZW4ucGlwZSc7XHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBIb21lUm91dGluZ01vZHVsZSxcclxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBtZGk6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENoYXRzQ29tcG9uZW50LFxyXG4gICAgU2hvcnRXaGVuUGlwZSxcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XHJcbiJdfQ==