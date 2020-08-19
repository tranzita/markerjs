import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class FiveMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new FiveMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'FiveMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "five-marker"]]);
    }

}
