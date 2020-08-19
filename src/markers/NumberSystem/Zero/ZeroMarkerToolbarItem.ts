import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { ZeroMarker } from "./ZeroMarker";

import Icon from "./zero-marker-toolbar-icon.svg";

export class ZeroMarkerToolbarItem implements ToolbarItem {
    public name = "rect-marker";
    public tooltipText = "Rectangle";

    public icon = Icon;
    public markerType = ZeroMarker;
}
