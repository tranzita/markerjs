import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class FourMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new FourMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'RectMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "zero-marker"]]);
    }

}
