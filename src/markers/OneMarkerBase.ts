import { SvgHelper } from "../helpers/SvgHelper";
import { RectangularMarkerBase } from "./RectangularMarkerBase";
// import { RectangularMarkerGrips } from "./RectangularMarkerGrips";

export class OneMarkerBase extends RectangularMarkerBase {
    public static createMarker = (): OneMarkerBase => {
        const marker = new OneMarkerBase();
        marker.setup();
        return marker;
    }

    private markerRect: SVGRectElement;

    protected setup() {
        super.setup();

        this.markerRect = SvgHelper.createRect(this.width, this.height);
        this.addToRenderVisual(this.markerRect);
    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.markerRect.setAttribute("width", this.width.toString());
        this.markerRect.setAttribute("height", this.height.toString());
    }
}
