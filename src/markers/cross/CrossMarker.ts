import {SvgHelper} from "../../helpers/SvgHelper";
import {LineMarkerBase} from "../LineMarkerBase";

export class CrossMarker extends LineMarkerBase {
    public static createMarker = (): LineMarkerBase => {
        const marker = new CrossMarker();
        marker.setup();
        return marker;
    }

    private readonly ARROW_SIZE = 6;

    private markerCross: SVGPolygonElement;

    constructor() {
        super();
        this.markerTypeName = "CrossMarker";
    }

    protected setup() {
        super.setup();
        SvgHelper.setAttributes(this.visual, [["class", "cross-marker"]]);

        this.markerCross = SvgHelper.createPolygon("490.15,68.476 302.616,256 490.15,443.534 421.674,512 256,346.326 90.326,512 0,421.674 165.674,256 0,90.326 90.326,0 256,165.674 421.674,0 ", [["transform", "translate(0.000000,500.000000) scale(0.0500000,-0.0500000)"], ["fill", "#bc1414"]]);
        // this.defs.push(SvgHelper.createMarker("arrow-marker-head", "auto",
        //     this.ARROW_SIZE, this.ARROW_SIZE, this.ARROW_SIZE - 1, this.ARROW_SIZE / 2, tip));
        this.addToRenderVisual(this.markerCross);
        // this.markerLine.setAttribute("marker-end", "url(#arrow-marker-head)");
    }

}
