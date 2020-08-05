import { Subject } from 'rxjs';
import { DraggableItem } from './draggable-item';
import * as ɵngcc0 from '@angular/core';
export declare class DraggableItemService {
    private draggableItem;
    private onCapture;
    dragStart(item: DraggableItem): void;
    getItem(): DraggableItem;
    captureItem(overZoneIndex: number, newIndex: number): DraggableItem;
    onCaptureItem(): Subject<DraggableItem>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DraggableItemService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DraggableItemService>;
}

//# sourceMappingURL=draggable-item.service.d.ts.map