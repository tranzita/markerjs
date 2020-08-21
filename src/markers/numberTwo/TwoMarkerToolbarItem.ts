import { ToolbarItem } from "../../toolbar/ToolbarItem";
import { TwoMarker } from "./TwoMarker";

import Icon from "./NumberTwoIcon.svg";

export class OneMarkerToolbarItem implements ToolbarItem {
    public name = "rect-marker";
    public tooltipText = "Rectangle";

    public icon = Icon;
    public markerType = TwoMarker;
}
