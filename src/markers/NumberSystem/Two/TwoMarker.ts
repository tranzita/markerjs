import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class TwoMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new TwoMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'TwoMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "two-marker"]]);
    }

}
