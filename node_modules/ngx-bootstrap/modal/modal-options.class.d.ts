import { StaticProvider } from '@angular/core';
import { ClassName, DismissReasons, Selector, TransitionDurations } from './models';
import * as ɵngcc0 from '@angular/core';
export declare class ModalOptions {
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     */
    backdrop?: boolean | 'static';
    /**
     * Closes the modal when escape key is pressed.
     */
    keyboard?: boolean;
    focus?: boolean;
    /**
     * Shows the modal when initialized.
     */
    show?: boolean;
    /**
     * Ignore the backdrop click
     */
    ignoreBackdropClick?: boolean;
    /**
     * Css class for opened modal
     */
    class?: string;
    /**
     * Toggle animation
     */
    animated?: boolean;
    /**
     * Modal data
     */
    initialState?: Object;
    /**
     * Modal providers
     */
    providers?: StaticProvider[];
    /**
     * aria-labelledby attribute value to set on the modal window
     */
    ariaLabelledBy?: string;
    /**
     * aria-describedby attribute value to set on the modal window
     */
    ariaDescribedby?: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalOptions>;
}
export declare const modalConfigDefaults: ModalOptions;
export declare const CLASS_NAME: ClassName;
export declare const SELECTOR: Selector;
export declare const TRANSITION_DURATIONS: TransitionDurations;
export declare const DISMISS_REASONS: DismissReasons;

//# sourceMappingURL=modal-options.class.d.ts.map