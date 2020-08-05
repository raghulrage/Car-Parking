import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { DayViewModel } from '../../models';
import * as ɵngcc0 from '@angular/core';
export declare class BsDatepickerDayDecoratorComponent implements OnInit {
    private _config;
    private _elRef;
    private _renderer;
    day: DayViewModel;
    constructor(_config: BsDatepickerConfig, _elRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDatepickerDayDecoratorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDatepickerDayDecoratorComponent, "[bsDatepickerDayDecorator]", never, { "day": "day"; }, {}, never, never>;
}

//# sourceMappingURL=bs-datepicker-day-decorator.directive.d.ts.map