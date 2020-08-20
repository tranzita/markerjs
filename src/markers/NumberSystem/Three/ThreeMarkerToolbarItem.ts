import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { ThreeMarker } from "./ThreeMarker";

import Icon from "./three-marker-toolbar-icon.svg";

export class ThreeMarkerToolbarItem implements ToolbarItem {
    public name = "three-marker";
    public tooltipText = "three";

    public icon = Icon;
    public markerType = ThreeMarker;
}
