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
    ChatsService = __decorate([
        core_1.Injectable()
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0M7SUFBQTtJQWtEQSxDQUFDO0lBakRDLHNCQUFJLCtCQUFLO2FBQVQ7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztnQkFDNUMsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSw4Q0FDRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxVQUM3QixHQUFHLFNBQU07b0JBQ3JCLGVBQWU7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDYixDQUFDLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzswQkFDNUQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEU7Z0JBQ0QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNwQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pELG9CQUFvQjtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLCtDQUErQztvQkFDL0Msd0NBQXdDO29CQUN4Qyx3REFBd0Q7b0JBQ3hELG9EQUFvRDtvQkFDcEQsK0NBQStDO29CQUMvQywwQkFBMEI7b0JBQzFCLCtDQUErQztpQkFDaEQsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ1gsQ0FBQyxFQXhCMkMsQ0F3QjNDLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBQ0Qsa0NBQVcsR0FBWCxVQUFZLElBQVU7UUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7WUFDNUMsb0JBQW9CO1lBQ3BCLElBQUksRUFBRTtnQkFDSiwrQ0FBK0M7Z0JBQy9DLHdDQUF3QztnQkFDeEMsd0RBQXdEO2dCQUN4RCxvREFBb0Q7Z0JBQ3BELCtDQUErQztnQkFDL0MsMEJBQTBCO2dCQUMxQiwrQ0FBK0M7Z0JBQy9DLCtDQUErQztnQkFDL0MsMkJBQTJCO2dCQUMzQixnREFBZ0Q7b0JBQzlDLHlDQUF5QzthQUM1QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksTUFBQTtZQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtZQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbEQsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQyxDQUFDLEVBbkIyQyxDQW1CM0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWpEVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7T0FDQSxZQUFZLENBa0R4QjtJQUFELG1CQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSAnLi9tb2RlbHMvY2hhdC5tb2RlbCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21vZGVscy9tZXNzYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgU2VudFN0YXR1cyB9IGZyb20gJy4vbW9kZWxzL3NlbnQtc3RhdHVzLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYXRzU2VydmljZSB7XHJcbiAgZ2V0IGNoYXRzKCk6IENoYXRbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xyXG4gICAgICBjb250YWN0OiB7XHJcbiAgICAgICAgYXZhdGFyOiBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkLyR7XHJcbiAgICAgICAgICAgICAgICAgIGlkeCAlIDIgPT09IDAgPyAnd29tZW4nIDogJ21lbidcclxuICAgICAgICAgICAgICAgIH0vJHtpZHh9LmpwZ2AsXHJcbiAgICAgICAgLy8gUmFuZG9tIG5hbWVzXHJcbiAgICAgICAgbmFtZTogaWR4ICUgMiA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgKFsnTGVlYW5uYSBNdW5veicsICdZb2xhbmRhIEthcmxpbicsICdUcmlzaCBQZWVyJ11baWR4ICUgM10pXHJcbiAgICAgICAgICAgIDogKFsnQ2h1Y2sgUHVsdmVyJywgJ09zY2FyIEJsdW5kZWxsJywgJ0lyd2luIFdlYXRoZXJzYnknXVtpZHggJSAzXSksXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6ICdESVJFQ1QnLFxyXG4gICAgICB3aGVuOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDQwICogNjAgKiAxMDAwKSxcclxuICAgICAgbXV0ZWQ6IGlkeCAlIDcgPT09IDAsXHJcbiAgICAgIHVucmVhZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwICsgJycsIDEwKSAtIDMsXHJcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXHJcbiAgICAgIHRleHQ6IFtcclxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxyXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxyXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxyXG4gICAgICAgICdUaGF0IHN0b2xlbiBmaWd1cmluZSBpcyBvZnRlbiBvbmUgZmxvb3IgYWJvdmUgeW91LicsXHJcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcclxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUuJyxcclxuICAgICAgICAnV2hpc2tleSBvbiB0aGUgdGFibGUgc2V0IGEgdHJlZWhvdXNlIG9uIGZpcmUuJyxcclxuICAgICAgXVtpZHggJSA3XSxcclxuICAgIH0pKTtcclxuICB9XHJcbiAgZ2V0TWVzc2FnZXMoY2hhdDogQ2hhdCk6IE1lc3NhZ2VbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xyXG4gICAgICAvLyBOb24tc2Vuc2UgcGhyYXNlc1xyXG4gICAgICB0ZXh0OiBbXHJcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcclxuICAgICAgICAnU2l4dHktZm91ciBkb2VzblxcJ3QgbGlrZSBwYXlpbmcgdGF4ZXMuJyxcclxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcclxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxyXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXHJcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlIScsXHJcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLicsXHJcbiAgICAgICAgJ1RoYXQgbWVtb3J5IHdlIHVzZWQgdG8gc2hhcmUgc3RvbGUgdGhlIGdvb2RzLicsXHJcbiAgICAgICAgJ0NsZWFyIHdhdGVyIHJhaW5zIGhlYXZpbHknLFxyXG4gICAgICAgICdTdHlsZSBpcyBpbnRlcmRlcGVuZGFudCBvbiB0aGUgcmVsYXRlZG5lc3Mgb2YgJyArXHJcbiAgICAgICAgICAnbW90aXZhdGlvbiwgc3ViY3VsdHVyZXMsIGFuZCBtYW5hZ2VtZW50JyxcclxuICAgICAgXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldLFxyXG4gICAgICBjaGF0LFxyXG4gICAgICBzZW5kZXI6IE1hdGgucmFuZG9tKCkgPiAuNSA/IGNoYXQuY29udGFjdCA6IG51bGwsXHJcbiAgICAgIGNyZWF0ZWQ6IERhdGUubm93KCkgLSAoKGlkeCArIDEpICogNDAgKiA2MCAqIDEwMDApLFxyXG4gICAgICBzZW50OiBNYXRoLmZsb29yKDQgKiBNYXRoLnJhbmRvbSgpKSxcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19