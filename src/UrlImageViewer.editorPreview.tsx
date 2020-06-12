import { Component, ReactNode, createElement } from "react";
import { ImageContainer } from "./components/ImageContainer";
import { UrlImageViewerPreviewProps } from "../typings/UrlImageViewerProps";

declare function require(name: string): string;

export class preview extends Component<UrlImageViewerPreviewProps> {
    render(): ReactNode {
        return <ImageContainer url={this.props.url} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/UrlImageViewer.css");
}
