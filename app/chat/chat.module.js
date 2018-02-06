"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var shared_module_1 = require("../shared/shared.module");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
var message_box_component_1 = require("./message-box/message-box.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            chat_routing_module_1.ChatRoutingModule,
            shared_module_1.SharedModule,
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
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCx5REFBdUQ7QUFDdkQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBcUJoRixJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFuQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsMkJBQTJCO2FBQ2pDLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFhO1lBQ2IsK0NBQXFCO1lBQ3JCLDJDQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQ2hhdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NoYXQtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VCb3hDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtYm94L21lc3NhZ2UtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZXMtYXJlYS9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgQ2hhdFJvdXRpbmdNb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgbWRpOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcycsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ2hhdENvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnQsXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxyXG4iXX0=