import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { FiveMarker } from "./FiveMarker";

import Icon from "./five-marker-toolbar-icon.svg";

export class FiveMarkerToolbarItem implements ToolbarItem {
    public name = "five-marker";
    public tooltipText = "Five";

    public icon = Icon;
    public markerType = FiveMarker;
}
