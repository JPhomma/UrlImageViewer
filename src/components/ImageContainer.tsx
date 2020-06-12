import { Component, ReactNode, createElement } from "react";

export interface ImageContainerProps {
    url?: string;
    height?: number;
    width?: number;
}

export class ImageContainer extends Component<ImageContainerProps> {
    render(): ReactNode {
        const styles = {
            height: this.props.height,
            width: this.props.width,
            cursor: 'context-menu'
        }
        return <img src={this.props.url} style={styles} ></img>
    }
}
