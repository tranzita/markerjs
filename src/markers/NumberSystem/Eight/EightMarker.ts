import { SvgHelper } from "../../../helpers/SvgHelper";
import { RectangularMarkerBase } from "../../RectangularMarkerBase";

// import OkIcon from "./check.svg";
// import CancelIcon from "./times.svg";
import { EightMarkerState } from './EightMarkerState';

export class EightMarker extends RectangularMarkerBase {
    public static createMarker = (): EightMarker => {
        const marker = new EightMarker();
        marker.setup();
        return marker;
    }

    constructor() {
        super();
        this.markerTypeName = 'EightMarker';
    }
    protected readonly MIN_SIZE = 50;

    private readonly DEFAULT_TEXT = "8";
    private text: string = this.DEFAULT_TEXT;
    private textElement: SVGTextElement;
    private inDoubleTap = false;
    private editor: HTMLDivElement;
    private editorTextArea: HTMLTextAreaElement;
    public getState(): EightMarkerState {
        const state: EightMarkerState = Object.assign(
            { text: this.text }, super.getState()); 
        return state;
    }
    public restoreState(state: EightMarkerState) {
        this.text = state.text;
        super.restoreState(state);
        this.renderText();
    }
    protected setup() {
        super.setup();
        this.textElement = SvgHelper.createText();
        this.addToRenderVisual(this.textElement);
        SvgHelper.setAttributes(this.visual, [["class", "eight-marker"]]);
        this.textElement.transform.baseVal.appendItem(SvgHelper.createTransform()); // translate transorm
        this.textElement.transform.baseVal.appendItem(SvgHelper.createTransform()); // scale transorm
        this.renderText();
        //
        // this.visual.addEventListener("dblclick", this.onDblClick);
        // this.visual.addEventListener("touchstart", this.onTap);

    }

    protected resize(x: number, y: number) {
        super.resize(x, y);
        this.sizeText();
    }

    private renderText = () => {
        const LINE_SIZE = "1.2em";

        while (this.textElement.lastChild) {
            this.textElement.removeChild(this.textElement.lastChild);
        }
        const lines = this.text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
        for (let line of lines) {
            if (line.trim() === "") {
                line = " "; // workaround for swallowed empty lines
            }
            this.textElement.appendChild(SvgHelper.createTSpan(line, [["x", "0"], ["dy", LINE_SIZE]]));
        }

        setTimeout(this.sizeText, 10);
    }

    private sizeText = () => {
        const textSize = this.textElement.getBBox();
        let x = 0;
        let y = 0;
        let scale = 1.0;
        if (textSize.width > 0 && textSize.height > 0) {
            const xScale = this.width * 1.0 / textSize.width;
            const yScale = this.height * 1.0 / textSize.height;
            scale = Math.min(xScale, yScale);
            x = (this.width - textSize.width * scale) / 2;
            y = (this.height - textSize.height * scale) / 2;
        }
        this.textElement.transform.baseVal.getItem(0).setTranslate(x, y);
        this.textElement.transform.baseVal.getItem(1).setScale(scale, scale);
    }

    // private onDblClick = (ev: MouseEvent) => {
    //     this.showEditor();
    // }

    // private onTap = (ev: TouchEvent) => {
    //     if (this.inDoubleTap) {
    //         this.inDoubleTap = false;
    //         this.showEditor();
    //     } else {
    //         this.inDoubleTap = true;
    //         setTimeout(() => { this.inDoubleTap = false; }, 300);
    //     }
    // }

    // private showEditor = () => {
    //     this.editor = document.createElement("div");
    //     this.editor.className = "markerjs-text-editor";
    //
    //     this.editorTextArea = document.createElement("textarea");
    //     if (this.text !== this.DEFAULT_TEXT) {
    //         this.editorTextArea.value = this.text;
    //     }
    //     this.editorTextArea.addEventListener("keydown", this.onEditorKeyDown);
    //     this.editor.appendChild(this.editorTextArea);
    //
    //     document.body.appendChild(this.editor);
    //
    //     const buttons = document.createElement("div");
    //     buttons.className = "markerjs-text-editor-button-bar";
    //     this.editor.appendChild(buttons);

        // const okButton = document.createElement("div");
        // okButton.className = "markerjs-text-editor-button";
        // okButton.innerHTML = OkIcon;
        // okButton.addEventListener("click", this.onEditorOkClick);
        // buttons.appendChild(okButton);

        // const cancelButton = document.createElement("div");
        // cancelButton.className = "markerjs-text-editor-button";
        // cancelButton.innerHTML = CancelIcon;
        // cancelButton.addEventListener("click", this.closeEditor);
        // buttons.appendChild(cancelButton);
    // }

    // private onEditorOkClick = (ev: MouseEvent) => {
    //     if (this.editorTextArea.value.trim()) {
    //         this.text = this.editorTextArea.value;
    //     } else {
    //         this.text = this.DEFAULT_TEXT;
    //     }
    //     this.renderText();
    //     this.closeEditor();
    // }
    //
    // private closeEditor = () => {
    //     document.body.removeChild(this.editor);
    // }
    //
    // private onEditorKeyDown = (ev: KeyboardEvent) => {
    //     if (ev.key === "Enter" && ev.ctrlKey) {
    //         ev.preventDefault();
    //         this.onEditorOkClick(null);
    //     }
    // }
}
