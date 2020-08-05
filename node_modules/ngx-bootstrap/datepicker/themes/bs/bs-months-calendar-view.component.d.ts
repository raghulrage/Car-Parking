import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, BsNavigationEvent, CellHoverEvent, MonthsCalendarViewModel, CalendarCellViewModel } from '../../models';
import * as ɵngcc0 from '@angular/core';
export declare class BsMonthCalendarViewComponent {
    calendar: MonthsCalendarViewModel;
    onNavigate: EventEmitter<BsNavigationEvent>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    onSelect: EventEmitter<CalendarCellViewModel>;
    onHover: EventEmitter<CellHoverEvent>;
    navigateTo(event: BsNavigationDirection): void;
    viewMonth(month: CalendarCellViewModel): void;
    hoverMonth(cell: CalendarCellViewModel, isHovered: boolean): void;
    changeViewMode(event: BsDatepickerViewMode): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsMonthCalendarViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsMonthCalendarViewComponent, "bs-month-calendar-view", never, { "calendar": "calendar"; }, { "onNavigate": "onNavigate"; "onViewMode": "onViewMode"; "onSelect": "onSelect"; "onHover": "onHover"; }, never, never>;
}

//# sourceMappingURL=bs-months-calendar-view.component.d.ts.map