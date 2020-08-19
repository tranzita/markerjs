import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class EightMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new EightMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'EightMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "eight-marker"]]);
    }

}
