import { SvgHelper } from "../../helpers/SvgHelper";
import { RectMarkerBase } from "../RectMarkerBase";

export class NewMarker extends RectMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new NewMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'NewMarker';
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "new-marker"]]);
    }

}
