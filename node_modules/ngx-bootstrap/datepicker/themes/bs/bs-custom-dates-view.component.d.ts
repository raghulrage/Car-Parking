import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface BsCustomDates {
    label: string;
    value: Date | Date[];
}
export declare class BsCustomDatesViewComponent {
    ranges: BsCustomDates[];
    selectedRange: Date[];
    onSelect: EventEmitter<BsCustomDates>;
    customRange: any;
    selectFromRanges(range: BsCustomDates): void;
    checkRange(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsCustomDatesViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsCustomDatesViewComponent, "bs-custom-date-view", never, { "ranges": "ranges"; "selectedRange": "selectedRange"; }, { "onSelect": "onSelect"; }, never, never>;
}

//# sourceMappingURL=bs-custom-dates-view.component.d.ts.map