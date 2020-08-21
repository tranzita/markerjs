import { ToolbarItem } from "../../toolbar/ToolbarItem";
import { OneMarker } from "./OneMarker";

import Icon from "./iconmonstr-check-mark-12.svg";

export class OneMarkerToolbarItem implements ToolbarItem {
    public name = "rect-marker";
    public tooltipText = "Rectangle";

    public icon = Icon;
    public markerType = OneMarker;
}
