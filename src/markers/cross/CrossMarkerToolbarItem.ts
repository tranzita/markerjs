import {ToolbarItem} from "../../toolbar/ToolbarItem";
import {CrossMarker} from "./CrossMarker";

import Icon from "./cross.svg";

export class CrossMarkerToolbarItem implements ToolbarItem {
    public name = "arrow-marker";
    public tooltipText = "Arrow";

    public icon = Icon;
    public markerType = CrossMarker;
}
