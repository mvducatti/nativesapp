"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.goToChat = function (args) {
        var extras = {
            queryParams: {
                unread: 2,
            },
        };
        this.routerExtensions.navigate([
            'chat',
            args.index,
        ], extras);
    };
    return ChatsComponent;
}());
ChatsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chats',
        templateUrl: './chats.component.html',
        styleUrls: ['./chats.component.css'],
    }),
    __metadata("design:paramtypes", [core_2.ChatsService,
        router_1.RouterExtensions])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUUvRCxtQ0FBMEM7QUFRMUMsSUFBYSxjQUFjO0lBRXpCLHdCQUNFLFlBQTBCLEVBQ2xCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDVDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFLVCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBTSxNQUFNLEdBQXFCO1lBQy9CLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsQ0FBQzthQUNWO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDN0IsTUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLO1NBQ1gsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQztxQ0FJZ0IsbUJBQVk7UUFDQSx5QkFBZ0I7R0FKakMsY0FBYyxDQW9CMUI7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICducy1jaGF0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0cy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCB7XHJcbiAgY2hhdHMgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICkge1xyXG4gICAgdGhpcy5jaGF0cyA9IGNoYXRzU2VydmljZS5jaGF0cztcclxuICB9XHJcblxyXG4gIGdvVG9DaGF0KGFyZ3MpIHtcclxuICAgIGNvbnN0IGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICB1bnJlYWQ6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcclxuICAgICAgJ2NoYXQnLFxyXG4gICAgICBhcmdzLmluZGV4LFxyXG4gICAgXSwgZXh0cmFzKTtcclxuICB9XHJcbn1cclxuIl19