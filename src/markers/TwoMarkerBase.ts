import {SvgHelper} from "../helpers/SvgHelper";
import {RectangularMarkerGrips} from "./RectangularMarkerGrips";
import {TestangularMarkerBase} from "./TestangularMarkerBase";

export class TestMarkerBase extends TestangularMarkerBase {
    public static createMarker = (): TestMarkerBase => {
        const marker = new TestMarkerBase();
        marker.setup();
        return marker;
    }

    private markerTwo: SVGPathElement;

    protected setup() {
        super.setup();

        this.markerTwo = SvgHelper.createTwoNumber(this.d, [["transform", "translate(0.000000,1280.000000) scale(0.100000,-0.100000)"],
            ["fill", "#000000"], ["stroke", "none"]]);
        this.addToRenderVisual(this.markerTwo);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerTwo.setAttribute("d", this.d.toString());
    }
}
