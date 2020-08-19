import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { EightMarker } from "./EightMarker";

import Icon from "./eight-marker-toolbar-icon.svg";

export class EightMarkerToolbarItem implements ToolbarItem {
    public name = "eight-marker";
    public tooltipText = "Eight";

    public icon = Icon;
    public markerType = EightMarker;
}
