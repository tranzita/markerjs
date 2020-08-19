import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class OneMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new OneMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'OneMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "one-marker"]]);
    }

}
