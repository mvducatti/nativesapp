"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var parse = require("date-fns/parse");
var ShortWhenPipe = (function () {
    function ShortWhenPipe() {
    }
    ShortWhenPipe.prototype.transform = function (value) {
        var language = platform_1.device.language;
        if (platform_1.device.region) {
            language += "-" + platform_1.device.region;
        }
        var datePipe = new common_1.DatePipe(language);
        var parsedDate = parse(value);
        if (isToday(parsedDate)) {
            return datePipe.transform(parsedDate, 'shortTime');
        }
        if (isYesterday(parsedDate)) {
            return 'yesterday';
        }
        return datePipe.transform(parsedDate, 'shortDate');
    };
    ShortWhenPipe = __decorate([
        core_1.Pipe({
            name: 'shortWhen',
            pure: true,
        })
    ], ShortWhenPipe);
    return ShortWhenPipe;
}());
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTJDO0FBQzNDLHNDQUFvRDtBQUNwRCxxQ0FBa0M7QUFFbEMsMkNBQTZDO0FBQzdDLG1EQUFxRDtBQUNyRCxzQ0FBd0M7QUFNeEM7SUFBQTtJQW9CQSxDQUFDO0lBbEJDLGlDQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxpQkFBTSxDQUFDLFFBQVEsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxJQUFJLE1BQUksaUJBQU0sQ0FBQyxNQUFRLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLElBQUksaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFuQlUsYUFBYTtRQUp6QixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7T0FDVyxhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5cclxuaW1wb3J0ICogYXMgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc190b2RheSc7XHJcbmltcG9ydCAqIGFzIGlzWWVzdGVyZGF5IGZyb20gJ2RhdGUtZm5zL2lzX3llc3RlcmRheSc7XHJcbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2hvcnRXaGVuJyxcclxuICBwdXJlOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcnRXaGVuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBzdHJpbmcge1xyXG4gICAgbGV0IGxhbmd1YWdlID0gZGV2aWNlLmxhbmd1YWdlO1xyXG4gICAgaWYgKGRldmljZS5yZWdpb24pIHtcclxuICAgICAgbGFuZ3VhZ2UgKz0gYC0ke2RldmljZS5yZWdpb259YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKGxhbmd1YWdlKTtcclxuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKGlzVG9kYXkocGFyc2VkRGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIGRhdGVQaXBlLnRyYW5zZm9ybShwYXJzZWREYXRlLCAnc2hvcnRUaW1lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzWWVzdGVyZGF5KHBhcnNlZERhdGUpKSB7XHJcbiAgICAgIHJldHVybiAneWVzdGVyZGF5JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydERhdGUnKTtcclxuICB9XHJcbn1cclxuIl19