import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { SixMarker } from "./SixMarker";

import Icon from "./six-marker-toolbar-icon.svg";

export class SixMarkerToolbarItem implements ToolbarItem {
    public name = "six-marker";
    public tooltipText = "Six";

    public icon = Icon;
    public markerType = SixMarker;
}
