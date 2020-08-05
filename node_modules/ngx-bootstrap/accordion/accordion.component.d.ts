import { AccordionPanelComponent } from './accordion-group.component';
import { AccordionConfig } from './accordion.config';
/** Displays collapsible content panels for presenting information in a limited amount of space. */
import * as ɵngcc0 from '@angular/core';
export declare class AccordionComponent {
    /** turn on/off animation */
    isAnimated: boolean;
    /** if `true` expanding one item will close all others */
    closeOthers: boolean;
    protected groups: AccordionPanelComponent[];
    constructor(config: AccordionConfig);
    closeOtherPanels(openGroup: AccordionPanelComponent): void;
    addGroup(group: AccordionPanelComponent): void;
    removeGroup(group: AccordionPanelComponent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AccordionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AccordionComponent, "accordion", never, { "isAnimated": "isAnimated"; "closeOthers": "closeOthers"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=accordion.component.d.ts.map