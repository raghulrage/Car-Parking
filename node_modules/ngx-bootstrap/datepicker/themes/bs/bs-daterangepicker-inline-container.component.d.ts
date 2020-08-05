import { OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { BsDaterangepickerContainerComponent } from './bs-daterangepicker-container.component';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as ɵngcc0 from '@angular/core';
export declare class BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent implements OnInit, OnDestroy {
    constructor(_renderer: Renderer2, _config: BsDatepickerConfig, _store: BsDatepickerStore, _element: ElementRef, _actions: BsDatepickerActions, _effects: BsDatepickerEffects, _positioningService: PositioningService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDaterangepickerInlineContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDaterangepickerInlineContainerComponent, "bs-daterangepicker-inline-container", never, {}, {}, never, never>;
}

//# sourceMappingURL=bs-daterangepicker-inline-container.component.d.ts.map