import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { FourMarker } from "./FourMarker";

import Icon from "./four-marker-toolbar-icon.svg";

export class FourMarkerToolbarItem implements ToolbarItem {
    public name = "four-marker";
    public tooltipText = "Four";

    public icon = Icon;
    public markerType = FourMarker;
}
