import {SvgHelper} from "../../helpers/SvgHelper";
import {TestMarkerBase} from "../TestMarkerBase";

export class OneMarker extends TestMarkerBase {
    public static createMarker = (): TestMarkerBase => {
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
