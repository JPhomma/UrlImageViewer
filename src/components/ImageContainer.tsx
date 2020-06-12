import { Component, ReactNode, createElement } from "react";
import { WebImage } from "mendix";


export interface ImageContainerProps {
    url?: string;
    height?: number;
    width?: number;
    defaultImage?: WebImage
}

export class ImageContainer extends Component<ImageContainerProps> {
    render(): ReactNode {
        let styles = {
            height: this.props.height,
            width: this.props.width,
            cursor: 'context-menu'
        }
        const imagePath = this.props.url ? this.props.url : this.props.defaultImage?.uri;

        return <img src={imagePath} style={styles} ></img>
    }
}
