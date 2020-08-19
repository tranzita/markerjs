import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { TwoMarker } from "./TwoMarker";

import Icon from "./two-marker-toolbar-icon.svg";

export class TwoMarkerToolbarItem implements ToolbarItem {
    public name = "two-marker";
    public tooltipText = "Two";

    public icon = Icon;
    public markerType = TwoMarker;
}
