import {SvgHelper} from "../../helpers/SvgHelper";
import {TestMarkerBase} from "../TestMarkerBase";

export class TwoMarker extends TestMarkerBase {
    public static createMarker = (): TestMarkerBase => {
        const marker = new TwoMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = "TwoMarker";
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "test-marker"]]);
    }

}
