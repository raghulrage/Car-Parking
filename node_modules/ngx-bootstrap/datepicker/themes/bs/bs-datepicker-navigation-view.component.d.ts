import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, DaysCalendarViewModel } from '../../models';
import * as ɵngcc0 from '@angular/core';
export declare class BsDatepickerNavigationViewComponent {
    calendar: DaysCalendarViewModel;
    onNavigate: EventEmitter<BsNavigationDirection>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    navTo(down: boolean): void;
    view(viewMode: BsDatepickerViewMode): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDatepickerNavigationViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDatepickerNavigationViewComponent, "bs-datepicker-navigation-view", never, { "calendar": "calendar"; }, { "onNavigate": "onNavigate"; "onViewMode": "onViewMode"; }, never, never>;
}

//# sourceMappingURL=bs-datepicker-navigation-view.component.d.ts.map