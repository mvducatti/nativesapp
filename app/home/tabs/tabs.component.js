"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var TabsComponent = (function () {
    function TabsComponent(platform, changeDetectorRef) {
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
        if (this.platform.isAndroid) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
                if (_this.selectedIndex !== 1) {
                    _this.selectedIndex = 1;
                    args.cancel = true;
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-tabs',
        templateUrl: './tabs.component.html',
        styleUrls: ['./tabs.component.css'],
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUU3RSx5Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBRXhCLHVCQUM2QixRQUFRLEVBQzNCLGlCQUFvQztRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ3BCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFDdkQsVUFBQyxJQUF5QztnQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztJQUlHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzZDQUNRLHdCQUFpQjtHQUpuQyxhQUFhLENBdUJ6QjtBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLXRhYnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnBsYXRmb3JtLmlzQW5kcm9pZCA/IDEgOiAzO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQW5kcm9pZCkge1xyXG4gICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKFxyXG4gICAgICAgIGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsXHJcbiAgICAgICAgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIGFyZ3MuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19