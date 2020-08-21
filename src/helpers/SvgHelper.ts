export class SvgHelper {

    public static createRect = (
        width: number | string,
        height: number | string,
        attributes?: Array<[string, string]>,
    ): SVGRectElement => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        rect.setAttribute("width", width.toString());
        rect.setAttribute("height", height.toString());
        if (attributes) {
            SvgHelper.setAttributes(rect, attributes);
        }

        return rect;
    }

    public static createLine = (
        x1: number | string,
        y1: number | string,
        x2: number | string,
        y2: number | string,
        attributes?: Array<[string, string]>,
    ): SVGLineElement => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        if (attributes) {
            SvgHelper.setAttributes(line, attributes);
        }

        return line;
    }

    public static createPolygon = (
        points: string,
        attributes?: Array<[string, string]>,
    ): SVGPolygonElement => {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

        polygon.setAttribute("points", points);
        if (attributes) {
            SvgHelper.setAttributes(polygon, attributes);
        }

        return polygon;
    }

    public static createCircle = (
        radius: number,
        attributes?: Array<[string, string]>,
    ): SVGCircleElement => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        circle.setAttribute("cx", (radius / 2).toString());
        circle.setAttribute("cy", (radius / 2).toString());
        circle.setAttribute("r", radius.toString());
        if (attributes) {
            SvgHelper.setAttributes(circle, attributes);
        }

        return circle;
    }

    public static createEllipse = (
        rx: number,
        ry: number,
        attributes?: Array<[string, string]>,
    ): SVGEllipseElement => {
        const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

        ellipse.setAttribute("cx", (rx / 2).toString());
        ellipse.setAttribute("cy", (ry / 2).toString());
        ellipse.setAttribute("rx", (rx / 2).toString());
        ellipse.setAttribute("ry", (ry / 2).toString());
        if (attributes) {
            SvgHelper.setAttributes(ellipse, attributes);
        }

        return ellipse;
    }

    public static createGroup = (attributes?: Array<[string, string]>): SVGGElement => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (attributes) {
            SvgHelper.setAttributes(g, attributes);
        }
        return g;
    }

    public static setAttributes = (el: SVGElement, attributes: Array<[string, string]>) => {
        for (const [attr, value] of attributes) {
            el.setAttribute(attr, value);
         }
    }

    public static createTransform = (): SVGTransform => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        return svg.createSVGTransform();
    }

    public static createDefs = (): SVGDefsElement => {
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        return defs;
    }

    public static createMarker = (id: string, orient: string,
                                  markerWidth: number | string, markerHeight: number | string,
                                  refX: number | string, refY: number | string,
                                  markerElement: SVGGraphicsElement): SVGMarkerElement => {

        const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        SvgHelper.setAttributes(marker, [
            ["id", id],
            ["orient", orient],
            ["markerWidth", markerWidth.toString()],
            ["markerHeight", markerHeight.toString()],
            ["refX", refX.toString()],
            ["refY", refY.toString()]]);

        marker.appendChild(markerElement);

        return marker;
    }

    public static createText = (
        attributes?: Array<[string, string]>,
    ): SVGTextElement => {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", "0");
        text.setAttribute("y", "0");

        if (attributes) {
            SvgHelper.setAttributes(text, attributes);
        }

        return text;
    }

    public static createTSpan = (
        text: string,
        attributes?: Array<[string, string]>,
    ): SVGTSpanElement => {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.textContent = text;

        if (attributes) {
            SvgHelper.setAttributes(tspan, attributes);
        }

        return tspan;
    }

    public static createTest = (
        d: number | string,
        attributes?: Array<[string, string]>,
    ): SVGPathElement => {
        const test = document.createElementNS("http://www.w3.org/2000/svg", "path");

        // test.setAttribute("d", d.toString());
        test.setAttribute("d", "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z");
        if (attributes) {
            SvgHelper.setAttributes(test, attributes);
        }

        return test;
    }
    public static createTwoNumber = (
        d: number | string,
        attributes?: Array<[string, string]>,
    ): SVGPathElement => {
        const TwoNumber = document.createElementNS("http://www.w3.org/2000/svg", "path");
        // width="25" height="25" viewBox="0 0 810.000000 1280.000000"
        // preserveAspectRatio="xMidYMid meet"
        TwoNumber.setAttribute("width", "25");
        TwoNumber.setAttribute("height", "25");
        TwoNumber.setAttribute("viewBox", "0 0 25.000000 25.000000");
        TwoNumber.setAttribute("preserveAspectRatio", "xMidYMid meet");
        TwoNumber.setAttribute("d", "M3445 12403 c-603 -49 -1043 -156 -1471 -358 -581 -274 -1041 -698\n" +
            "-1289 -1188 -146 -289 -219 -588 -232 -942 -19 -539 124 -953 437 -1265 194\n" +
            "-194 412 -311 693 -372 138 -30 484 -33 619 -5 263 53 486 170 666 348 227\n" +
            "225 340 462 373 782 43 426 -125 829 -430 1031 -36 24 -198 103 -360 176 -162\n" +
            "72 -306 139 -320 148 -41 25 -81 65 -97 94 -45 87 31 236 184 357 259 207 614\n" +
            "321 994 321 850 -1 1367 -467 1517 -1367 36 -214 45 -343 45 -623 -1 -503 -68\n" +
            "-912 -229 -1395 -164 -492 -361 -863 -716 -1345 -284 -385 -570 -731 -1055\n" +
            "-1276 -814 -914 -1076 -1226 -1345 -1605 -715 -1005 -1043 -1906 -1105 -3032\n" +
            "l-7 -128 28 -30 29 -29 3417 0 3416 0 6 33 c2 17 107 771 233 1674 l228 1643\n" +
            "-29 30 -29 30 -388 0 -388 0 -4 -22 c-3 -13 -15 -84 -27 -158 -42 -264 -115\n" +
            "-504 -196 -650 -118 -211 -334 -300 -798 -330 -86 -6 -907 -10 -1934 -10\n" +
            "l-1783 0 7 28 c22 91 169 383 287 572 250 399 666 844 1149 1231 298 239 521\n" +
            "394 964 669 826 512 1176 750 1581 1074 567 452 884 819 1123 1296 245 491\n" +
            "354 1007 338 1610 -6 239 -21 379 -63 579 -174 844 -721 1532 -1559 1962 -484\n" +
            "249 -1031 392 -1680 439 -126 9 -700 12 -800 3z");
        if (attributes) {
            SvgHelper.setAttributes(TwoNumber, attributes);
            // SvgHelper.createGroup(attributes);
        }

        return TwoNumber;
    }

}
