import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class ThreeMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new ThreeMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'ThreeMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "three-marker"]]);
    }

}
