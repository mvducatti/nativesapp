"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = (function () {
    function MessagesAreaComponent(platform) {
        this.platform = platform;
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    return MessagesAreaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MessagesAreaComponent.prototype, "messages", void 0);
MessagesAreaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-messages-area',
        templateUrl: './messages-area.component.html',
        styleUrls: ['./messages-area.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object])
], MessagesAreaComponent);
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzRDtBQUN0RCxtQ0FBaUQ7QUFTakQsSUFBYSxxQkFBcUI7SUFHaEMsK0JBQXVDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUcsQ0FBQztJQUVuRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLE9BQWdCO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssaUJBQVUsQ0FBQyxRQUFRO2dCQUN0QixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsS0FBSyxpQkFBVSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBN0JVO0lBQVIsWUFBSyxFQUFFOzt1REFBcUI7QUFEbEIscUJBQXFCO0lBUGpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1FBQzVDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7SUFJYSxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTs7R0FIcEIscUJBQXFCLENBOEJqQztBQTlCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LFxyXG4gICAgICAgICBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgU2VudFN0YXR1cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ25zLW1lc3NhZ2VzLWFyZWEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0pIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMuc2xpY2UoMCwgNTApO1xyXG4gIH1cclxuXHJcbiAgaXNDb250aW51YXRpb24oaWR4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoIXRoaXMubWVzc2FnZXNbaWR4XS5zZW5kZXIgJiYgdGhpcy5tZXNzYWdlc1tpZHggLSAxXSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlc1tpZHggLSAxXS5zZW5kZXIpIHx8XHJcbiAgICAgICAgICAgKHRoaXMubWVzc2FnZXNbaWR4XS5zZW5kZXIgJiYgdGhpcy5tZXNzYWdlc1tpZHggLSAxXSAmJlxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdLnNlbmRlcik7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZS5zZW50KSB7XHJcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5OT1RfU0VOVDpcclxuICAgICAgICByZXR1cm4gJ21kaS1hY2Nlc3MtdGltZSc7XHJcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5TRU5UOlxyXG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUtYWxsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmlld2VkKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBtZXNzYWdlLnNlbnQgPT09IFNlbnRTdGF0dXMuVklFV0VEO1xyXG4gIH1cclxufVxyXG4iXX0=