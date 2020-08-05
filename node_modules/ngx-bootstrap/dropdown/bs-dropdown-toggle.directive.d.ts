import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownToggleDirective implements OnDestroy {
    private _changeDetectorRef;
    private _dropdown;
    private _element;
    private _renderer;
    private _state;
    isDisabled: boolean;
    isOpen: boolean;
    private _subscriptions;
    private _documentClickListener;
    private _escKeyUpListener;
    constructor(_changeDetectorRef: ChangeDetectorRef, _dropdown: BsDropdownDirective, _element: ElementRef, _renderer: Renderer2, _state: BsDropdownState);
    onClick(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownToggleDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BsDropdownToggleDirective, "[bsDropdownToggle],[dropdownToggle]", ["bs-dropdown-toggle"], {}, {}, never>;
}

//# sourceMappingURL=bs-dropdown-toggle.directive.d.ts.map