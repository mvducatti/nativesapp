"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
var message_box_component_1 = require("./message-box/message-box.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                chat_routing_module_1.ChatRoutingModule,
                nativescript_ng_shadow_1.NgShadowModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    mdi: 'material-design-icons.css',
                }),
            ],
            declarations: [
                chat_component_1.ChatComponent,
                messages_area_component_1.MessagesAreaComponent,
                message_box_component_1.MessageBoxComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCxpRUFBd0Q7QUFDeEQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBcUJoRjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbkJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHVDQUFpQjtnQkFDakIsdUNBQWM7Z0JBQ2QsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixHQUFHLEVBQUUsMkJBQTJCO2lCQUNqQyxDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XHJcbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGF0LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQm94Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWJveC9tZXNzYWdlLWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc0FyZWFDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2VzLWFyZWEvbWVzc2FnZXMtYXJlYS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIENoYXRSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmdTaGFkb3dNb2R1bGUsXHJcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgbWRpOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcycsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ2hhdENvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnQsXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxyXG4iXX0=