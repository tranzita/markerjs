import { ToolbarItem } from "../../../toolbar/ToolbarItem";
import { NineMarker } from "./NineMarker";

import Icon from "./nine-marker-toolbar-icon.svg";

export class NineMarkerToolbarItem implements ToolbarItem {
    public name = "nine-marker";
    public tooltipText = "Nine";
    public icon = Icon;
    public markerType = NineMarker;
}
