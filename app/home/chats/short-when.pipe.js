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
    return ShortWhenPipe;
}());
ShortWhenPipe = __decorate([
    core_1.Pipe({
        name: 'shortWhen',
        pure: true,
    })
], ShortWhenPipe);
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTJDO0FBQzNDLHNDQUFvRDtBQUNwRCxxQ0FBa0M7QUFFbEMsMkNBQTZDO0FBQzdDLG1EQUFxRDtBQUNyRCxzQ0FBd0M7QUFNeEMsSUFBYSxhQUFhO0lBQTFCO0lBb0JBLENBQUM7SUFsQkMsaUNBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ3JDLElBQUksUUFBUSxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLElBQUksTUFBSSxpQkFBTSxDQUFDLE1BQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBSnpCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztHQUNXLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ3BsYXRmb3JtJztcclxuXHJcbmltcG9ydCAqIGFzIGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNfdG9kYXknO1xyXG5pbXBvcnQgKiBhcyBpc1llc3RlcmRheSBmcm9tICdkYXRlLWZucy9pc195ZXN0ZXJkYXknO1xyXG5pbXBvcnQgKiBhcyBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Nob3J0V2hlbicsXHJcbiAgcHVyZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3J0V2hlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlKTogc3RyaW5nIHtcclxuICAgIGxldCBsYW5ndWFnZSA9IGRldmljZS5sYW5ndWFnZTtcclxuICAgIGlmIChkZXZpY2UucmVnaW9uKSB7XHJcbiAgICAgIGxhbmd1YWdlICs9IGAtJHtkZXZpY2UucmVnaW9ufWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRlUGlwZSA9IG5ldyBEYXRlUGlwZShsYW5ndWFnZSk7XHJcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2UodmFsdWUpO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KHBhcnNlZERhdGUpKSB7XHJcbiAgICAgIHJldHVybiBkYXRlUGlwZS50cmFuc2Zvcm0ocGFyc2VkRGF0ZSwgJ3Nob3J0VGltZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1llc3RlcmRheShwYXJzZWREYXRlKSkge1xyXG4gICAgICByZXR1cm4gJ3llc3RlcmRheSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGVQaXBlLnRyYW5zZm9ybShwYXJzZWREYXRlLCAnc2hvcnREYXRlJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==