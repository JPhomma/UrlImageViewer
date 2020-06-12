import { Component, ReactNode, createElement } from "react";
import { ImageContainer } from "./components/ImageContainer";
import { hot } from "react-hot-loader/root";
import { UrlImageViewerContainerProps } from "../typings/UrlImageViewerProps";

import "./ui/UrlImageViewer.css";

class UrlImageViewer extends Component<UrlImageViewerContainerProps> {
    render(): ReactNode {
        return <ImageContainer 
                    url={this.props.url.value} 
                    height={this.props.height} 
                    width={this.props.width} 
                    defaultImage={this.props.defaultImage?.value}/>;
    }
}

export default hot(UrlImageViewer);
