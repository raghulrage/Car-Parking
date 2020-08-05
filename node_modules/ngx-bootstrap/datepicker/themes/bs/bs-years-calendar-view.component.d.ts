import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, BsNavigationEvent, CalendarCellViewModel, CellHoverEvent, YearsCalendarViewModel } from '../../models';
import * as ɵngcc0 from '@angular/core';
export declare class BsYearsCalendarViewComponent {
    calendar: YearsCalendarViewModel;
    onNavigate: EventEmitter<BsNavigationEvent>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    onSelect: EventEmitter<CalendarCellViewModel>;
    onHover: EventEmitter<CellHoverEvent>;
    navigateTo(event: BsNavigationDirection): void;
    viewYear(year: CalendarCellViewModel): void;
    hoverYear(cell: CalendarCellViewModel, isHovered: boolean): void;
    changeViewMode(event: BsDatepickerViewMode): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsYearsCalendarViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsYearsCalendarViewComponent, "bs-years-calendar-view", never, { "calendar": "calendar"; }, { "onNavigate": "onNavigate"; "onViewMode": "onViewMode"; "onSelect": "onSelect"; "onHover": "onHover"; }, never, never>;
}

//# sourceMappingURL=bs-years-calendar-view.component.d.ts.map