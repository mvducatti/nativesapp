import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AndroidActivityBackPressedEventData } from 'application';
import * as application from 'application';

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  selectedIndex: number;
  constructor(
    @Inject('platform') public platform,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.selectedIndex = this.platform.isAndroid ? 0 : 1;

    if (this.platform.isAndroid) {
      application.android.on(
        application.AndroidApplication.activityBackPressedEvent,
        (args: AndroidActivityBackPressedEventData) => {
          if (this.selectedIndex !== 0) {
            this.selectedIndex = 0;
            args.cancel = true;
            this.changeDetectorRef.detectChanges();
          }
        },
      );
    }
  }
}
