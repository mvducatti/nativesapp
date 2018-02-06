"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_model_1 = require("./message.model");
var ImageMessage = (function (_super) {
    __extends(ImageMessage, _super);
    function ImageMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '';
        _this.thumbnail = '';
        return _this;
    }
    /**
     * Method overriden
     * @returns String
     */
    ImageMessage.prototype.toString = function () {
        return "Photo" + _super.prototype.toString.call(this) + " " +
            ("- Url: " + this.url + " ") +
            ("- Thumbnail: " + this.thumbnail);
    };
    return ImageMessage;
}(message_model_1.Message));
exports.ImageMessage = ImageMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLW1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBMEM7QUFFMUM7SUFBa0MsZ0NBQU87SUFBekM7UUFBQSxxRUFhQztRQVpDLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFXekIsQ0FBQztJQVRDOzs7T0FHRztJQUNILCtCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsVUFBUSxpQkFBTSxRQUFRLFdBQUUsTUFBRzthQUMzQixZQUFVLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQTthQUNyQixrQkFBZ0IsSUFBSSxDQUFDLFNBQVcsQ0FBQSxDQUFDO0lBQzFDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFiRCxDQUFrQyx1QkFBTyxHQWF4QztBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XHJcbiAgdXJsOiBzdHJpbmcgPSAnJztcclxuICB0aHVtYm5haWw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBNZXRob2Qgb3ZlcnJpZGVuXHJcbiAgICogQHJldHVybnMgU3RyaW5nXHJcbiAgICovXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgUGhvdG8ke3N1cGVyLnRvU3RyaW5nKCl9IGAgK1xyXG4gICAgICAgICAgIGAtIFVybDogJHt0aGlzLnVybH0gYCArXHJcbiAgICAgICAgICAgYC0gVGh1bWJuYWlsOiAke3RoaXMudGh1bWJuYWlsfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==