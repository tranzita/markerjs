import { ToolbarItem } from "../../toolbar/ToolbarItem";
import { TwoMarker } from "./TwoMarker";

import Icon from "./NumberTwoIcon.svg";

export class TwoMarkerToolbarItem implements ToolbarItem {
    public name = "rect-marker";
    public tooltipText = "NumberTwo";

    public icon = Icon;
    public markerType = TwoMarker;
}
