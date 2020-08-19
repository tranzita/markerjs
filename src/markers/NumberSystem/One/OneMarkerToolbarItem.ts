import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { OneMarker } from "./OneMarker";

import Icon from "./one-marker-toolbar-icon.svg";

export class OneMarkerToolbarItem implements ToolbarItem {
    public name = "one-marker";
    public tooltipText = "One";

    public icon = Icon;
    public markerType = OneMarker;
}
