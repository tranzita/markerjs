import { SvgHelper } from "../../helpers/SvgHelper";
import { LineMarkerBase } from "../LineMarkerBase";

export class LineMarker extends LineMarkerBase {
    public static createMarker = (): LineMarkerBase => {
        const marker = new LineMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = "LineMarker";
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "line-marker"]]);
    }

}
