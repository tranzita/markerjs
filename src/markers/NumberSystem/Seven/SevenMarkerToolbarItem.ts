import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { SevenMarker } from "./SevenMarker";

import Icon from "./seven-marker-toolbar-icon.svg";

export class SevenMarkerToolbarItem implements ToolbarItem {
    public name = "seven-marker";
    public tooltipText = "Seven";

    public icon = Icon;
    public markerType = SevenMarker;
}
