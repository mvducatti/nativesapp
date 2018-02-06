"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatsService = (function () {
    function ChatsService() {
    }
    Object.defineProperty(ChatsService.prototype, "chats", {
        get: function () {
            return Array(200).fill('').map(function (ele, idx) { return ({
                contact: {
                    avatar: "https://randomuser.me/api/portraits/med/" + (idx % 2 === 0 ? 'women' : 'men') + "/" + idx + ".jpg",
                    // Random names
                    name: idx % 2 === 0 ?
                        (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
                        : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3]),
                },
                type: 'DIRECT',
                when: Date.now() - ((idx + 1) * 40 * 60 * 1000),
                muted: idx % 7 === 0,
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                // Non-sense phrases
                text: [
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Sixty-four doesn\'t like paying taxes.',
                    'A river a thousand paces wide ever stuns the onlooker.',
                    'That stolen figurine is often one floor above you.',
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Spam sat down once more.',
                    'Whiskey on the table set a treehouse on fire.',
                ][idx % 7],
            }); });
        },
        enumerable: true,
        configurable: true
    });
    ChatsService.prototype.getMessages = function (chat) {
        return Array(200).fill('').map(function (ele, idx) { return ({
            // Non-sense phrases
            text: [
                '\u263A Yay, this course is amazing !!! \u270C',
                'Sixty-four doesn\'t like paying taxes.',
                'A river a thousand paces wide ever stuns the onlooker.',
                'That stolen figurine is often one floor above you.',
                '\u263A Yay, this course is amazing !!! \u270C',
                'Spam sat down once more!',
                'Whiskey on the table set a treehouse on fire.',
                'That memory we used to share stole the goods.',
                'Clear water rains heavily',
                'Style is interdependant on the relatedness of ' +
                    'motivation, subcultures, and management',
            ][Math.floor(Math.random() * 10)],
            chat: chat,
            sender: Math.random() > .5 ? chat.contact : null,
            created: Date.now() - ((idx + 1) * 40 * 60 * 1000),
            sent: Math.floor(4 * Math.random()),
        }); });
    };
    return ChatsService;
}());
ChatsService = __decorate([
    core_1.Injectable()
], ChatsService);
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0MsSUFBYSxZQUFZO0lBQXpCO0lBa0RBLENBQUM7SUFqREMsc0JBQUksK0JBQUs7YUFBVDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDO2dCQUM1QyxPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLDhDQUNFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQzdCLEdBQUcsU0FBTTtvQkFDckIsZUFBZTtvQkFDZixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzBCQUM1RCxDQUFDLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4RTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDakQsb0JBQW9CO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0osK0NBQStDO29CQUMvQyx3Q0FBd0M7b0JBQ3hDLHdEQUF3RDtvQkFDeEQsb0RBQW9EO29CQUNwRCwrQ0FBK0M7b0JBQy9DLDBCQUEwQjtvQkFDMUIsK0NBQStDO2lCQUNoRCxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLEVBeEIyQyxDQXdCM0MsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFDRCxrQ0FBVyxHQUFYLFVBQVksSUFBVTtRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztZQUM1QyxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLCtDQUErQztnQkFDL0Msd0NBQXdDO2dCQUN4Qyx3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUMvQywwQkFBMEI7Z0JBQzFCLCtDQUErQztnQkFDL0MsK0NBQStDO2dCQUMvQywyQkFBMkI7Z0JBQzNCLGdEQUFnRDtvQkFDOUMseUNBQXlDO2FBQzVDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1lBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BDLENBQUMsRUFuQjJDLENBbUIzQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtHQUNBLFlBQVksQ0FrRHhCO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4vbW9kZWxzL2NoYXQubW9kZWwnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbHMvbWVzc2FnZS5tb2RlbCc7XHJcbmltcG9ydCB7IFNlbnRTdGF0dXMgfSBmcm9tICcuL21vZGVscy9zZW50LXN0YXR1cy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xyXG4gIGdldCBjaGF0cygpOiBDaGF0W10ge1xyXG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcclxuICAgICAgY29udGFjdDoge1xyXG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lZC8ke1xyXG4gICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ3dvbWVuJyA6ICdtZW4nXHJcbiAgICAgICAgICAgICAgICB9LyR7aWR4fS5qcGdgLFxyXG4gICAgICAgIC8vIFJhbmRvbSBuYW1lc1xyXG4gICAgICAgIG5hbWU6IGlkeCAlIDIgPT09IDAgP1xyXG4gICAgICAgICAgICAgIChbJ0xlZWFubmEgTXVub3onLCAnWW9sYW5kYSBLYXJsaW4nLCAnVHJpc2ggUGVlciddW2lkeCAlIDNdKVxyXG4gICAgICAgICAgICA6IChbJ0NodWNrIFB1bHZlcicsICdPc2NhciBCbHVuZGVsbCcsICdJcndpbiBXZWF0aGVyc2J5J11baWR4ICUgM10pLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiAnRElSRUNUJyxcclxuICAgICAgd2hlbjogRGF0ZS5ub3coKSAtICgoaWR4ICsgMSkgKiA0MCAqIDYwICogMTAwMCksXHJcbiAgICAgIG11dGVkOiBpZHggJSA3ID09PSAwLFxyXG4gICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxyXG4gICAgICAvLyBOb24tc2Vuc2UgcGhyYXNlc1xyXG4gICAgICB0ZXh0OiBbXHJcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcclxuICAgICAgICAnU2l4dHktZm91ciBkb2VzblxcJ3QgbGlrZSBwYXlpbmcgdGF4ZXMuJyxcclxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcclxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxyXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXHJcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlLicsXHJcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLicsXHJcbiAgICAgIF1baWR4ICUgN10sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGdldE1lc3NhZ2VzKGNoYXQ6IENoYXQpOiBNZXNzYWdlW10ge1xyXG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcclxuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcclxuICAgICAgdGV4dDogW1xyXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXHJcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXHJcbiAgICAgICAgJ0Egcml2ZXIgYSB0aG91c2FuZCBwYWNlcyB3aWRlIGV2ZXIgc3R1bnMgdGhlIG9ubG9va2VyLicsXHJcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcclxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxyXG4gICAgICAgICdTcGFtIHNhdCBkb3duIG9uY2UgbW9yZSEnLFxyXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nLFxyXG4gICAgICAgICdUaGF0IG1lbW9yeSB3ZSB1c2VkIHRvIHNoYXJlIHN0b2xlIHRoZSBnb29kcy4nLFxyXG4gICAgICAgICdDbGVhciB3YXRlciByYWlucyBoZWF2aWx5JyxcclxuICAgICAgICAnU3R5bGUgaXMgaW50ZXJkZXBlbmRhbnQgb24gdGhlIHJlbGF0ZWRuZXNzIG9mICcgK1xyXG4gICAgICAgICAgJ21vdGl2YXRpb24sIHN1YmN1bHR1cmVzLCBhbmQgbWFuYWdlbWVudCcsXHJcbiAgICAgIF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSxcclxuICAgICAgY2hhdCxcclxuICAgICAgc2VuZGVyOiBNYXRoLnJhbmRvbSgpID4gLjUgPyBjaGF0LmNvbnRhY3QgOiBudWxsLFxyXG4gICAgICBjcmVhdGVkOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDQwICogNjAgKiAxMDAwKSxcclxuICAgICAgc2VudDogTWF0aC5mbG9vcig0ICogTWF0aC5yYW5kb20oKSksXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==