import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, BsNavigationEvent, CellHoverEvent, DatepickerRenderOptions, DaysCalendarViewModel, DayViewModel, WeekViewModel } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import * as ɵngcc0 from '@angular/core';
export declare class BsDaysCalendarViewComponent {
    private _config;
    calendar: DaysCalendarViewModel;
    options: DatepickerRenderOptions;
    onNavigate: EventEmitter<BsNavigationEvent>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    onSelect: EventEmitter<DayViewModel>;
    onHover: EventEmitter<CellHoverEvent>;
    onHoverWeek: EventEmitter<WeekViewModel>;
    isWeekHovered: boolean;
    constructor(_config: BsDatepickerConfig);
    navigateTo(event: BsNavigationDirection): void;
    changeViewMode(event: BsDatepickerViewMode): void;
    selectDay(event: DayViewModel): void;
    selectWeek(week: WeekViewModel): void;
    weekHoverHandler(cell: WeekViewModel, isHovered: boolean): void;
    hoverDay(cell: DayViewModel, isHovered: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDaysCalendarViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDaysCalendarViewComponent, "bs-days-calendar-view", never, { "calendar": "calendar"; "options": "options"; }, { "onNavigate": "onNavigate"; "onViewMode": "onViewMode"; "onSelect": "onSelect"; "onHover": "onHover"; "onHoverWeek": "onHoverWeek"; }, never, never>;
}

//# sourceMappingURL=bs-days-calendar-view.component.d.ts.map