import {SvgHelper} from "../helpers/SvgHelper";
import {RectangularMarkerGrips} from "./RectangularMarkerGrips";
import {TestangularMarkerBase} from "./TestangularMarkerBase";

export class TwoMarkerBase extends TestangularMarkerBase {
    public static createMarker = (): TwoMarkerBase => {
        const marker = new TwoMarkerBase();
        marker.setup();
        return marker;
    };

    private markerTwo: SVGPathElement;

    protected setup() {
        super.setup();

        this.markerTwo = SvgHelper.createTwoNumber(this.d, [["transform", "translate(0.000000,500.000000) scale(0.0100000,-0.0100000)"],
            ["fill", "#bc1414"], ["stroke", "none"]]);
        this.addToRenderVisual(this.markerTwo);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerTwo.setAttribute("d", this.d.toString());
    }
}
