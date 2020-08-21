import {SvgHelper} from "../helpers/SvgHelper";
import { RectangularMarkerGrips } from "./RectangularMarkerGrips";
import { TestangularMarkerBase } from "./TestangularMarkerBase";

export class TestMarkerBase extends TestangularMarkerBase {
    public static createMarker = (): TestMarkerBase => {
        const marker = new TestMarkerBase();
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
