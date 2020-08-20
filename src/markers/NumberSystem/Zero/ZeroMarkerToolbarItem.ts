import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { ZeroMarker } from "./ZeroMarker";

import Icon from "./zero-marker-toolbar-icon.svg";

export class ZeroMarkerToolbarItem implements ToolbarItem {
    public name = "zero-marker";
    public tooltipText = "Zero";

    public icon = Icon;
    public markerType = ZeroMarker;
}
