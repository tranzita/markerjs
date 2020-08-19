import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectMarkerBase } from "../../RectMarkerBase";

export class NineMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new NineMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'NineMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "nine-marker"]]);
    }

}
