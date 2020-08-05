import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsLocaleService } from './bs-locale.service';
import * as ɵngcc0 from '@angular/core';
export declare class BsDaterangepickerInputDirective implements ControlValueAccessor, Validator {
    private _picker;
    private _localeService;
    private _renderer;
    private _elRef;
    private changeDetection;
    private _onChange;
    private _onTouched;
    private _validatorChange;
    private _value;
    constructor(_picker: BsDaterangepickerDirective, _localeService: BsLocaleService, _renderer: Renderer2, _elRef: ElementRef, changeDetection: ChangeDetectorRef);
    onKeydownEvent(event: any): void;
    _setInputValue(date: Date[]): void;
    onChange(event: Event): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    writeValue(value: Date[] | string): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    onBlur(): void;
    hide(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDaterangepickerInputDirective, [{ host: true; }, null, null, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BsDaterangepickerInputDirective, "input[bsDaterangepicker]", never, {}, {}, never>;
}

//# sourceMappingURL=bs-daterangepicker-input.directive.d.ts.map