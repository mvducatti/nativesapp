"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message() {
        this.text = '';
        this.created = Date.now();
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUFBO1FBRUUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdULFlBQU8sR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUpDLDBCQUFRLEdBQVI7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLG9CQUFPLEVBQUUsY0FBSSxDQUFVO1FBQy9CLE1BQU0sQ0FBQyx5QkFBdUIsT0FBTyxpQkFBWSxJQUFNLENBQUM7SUFDMUQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4vY2hhdC5tb2RlbCc7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QubW9kZWwnO1xyXG5pbXBvcnQgeyBTZW50U3RhdHVzIH0gZnJvbSAnLi9zZW50LXN0YXR1cy5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgdGV4dDogc3RyaW5nID0gJyc7XHJcbiAgY2hhdDogQ2hhdDtcclxuICBzZW5kZXI6IENvbnRhY3Q7XHJcbiAgcmVhZG9ubHkgY3JlYXRlZDogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICBzZW50OiBTZW50U3RhdHVzO1xyXG5cclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBjcmVhdGVkLCB0ZXh0IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIGBNZXNzYWdlIGNyZWF0ZWQgYXQ6ICR7Y3JlYXRlZH0gLSBUZXh0OiAke3RleHR9YDtcclxuICB9XHJcbn1cclxuIl19