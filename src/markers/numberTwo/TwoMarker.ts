import {SvgHelper} from "../../helpers/SvgHelper";
import {TwoMarkerBase} from "../TwoMarkerBase";

export class TwoMarker extends TwoMarkerBase {
    public static createMarker = (): TwoMarkerBase => {
        const marker = new TwoMarker();
        marker.setup();
        return marker;
    };

    constructor() {
        super();
        this.markerTypeName = "TwoMarker";
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "two-marker"]]);
        // SvgHelper.setAttributes(this.visual,
        //     [["transform", "translate(0.000000,1280.000000) scale(0.100000,-0.100000)"],
        //         ["fill", "#000000"], ["stroke", "none"]]);
    }

}
