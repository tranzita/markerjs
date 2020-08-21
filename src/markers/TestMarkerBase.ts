import {SvgHelper} from "../helpers/SvgHelper";
import { RectangularMarkerGrips } from "./RectangularMarkerGrips";
import { RectangularMarkerBase } from "./TestangularMarkerBase";

export class RectMarkerBase extends RectangularMarkerBase {
    public static createMarker = (): RectMarkerBase => {
        const marker = new RectMarkerBase();
        marker.setup();
        return marker;
    }

    private markerTest: SVGPathElement;

    protected setup() {
        super.setup();

        this.markerTest = SvgHelper.createTest(this.d);
        this.addToRenderVisual(this.markerTest);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerTest.setAttribute("d", this.d.toString());
    }
}
