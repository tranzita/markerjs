import { ToolbarItem } from "../../toolbar/ToolbarItem";
import { NewMarker } from "./NewMarker";

import Icon from "./new-marker-toolbar.svg";

export class NewMarkerToolbarItem implements ToolbarItem {
    public name = "new-marker";
    public tooltipText = "New Marker";

    public icon = Icon;
    public markerType = NewMarker;
}
