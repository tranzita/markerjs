import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class SevenMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new SevenMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'SevenMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "seven-marker"]]);
    }

}
