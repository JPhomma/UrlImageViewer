/**
 * This file was generated from UrlImageViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, WebImage } from "mendix";

export interface UrlImageViewerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    url: DynamicValue<string>;
    defaultImage?: DynamicValue<WebImage>;
    height: number;
    width: number;
}

export interface UrlImageViewerPreviewProps {
    class: string;
    style: string;
    url: string;
    defaultImage: string;
    height: number | null;
    width: number | null;
}
