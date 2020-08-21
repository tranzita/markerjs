import {SvgHelper} from "../../helpers/SvgHelper";
import {RectMarkerBase} from "../TestMarkerBase";

export class OneMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new OneMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = "TestMarker";
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "test-marker"]]);
    }

}
