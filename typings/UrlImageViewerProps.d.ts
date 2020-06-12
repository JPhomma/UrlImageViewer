/**
 * This file was generated from UrlImageViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface UrlImageViewerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    url: DynamicValue<string>;
    sampleText?: string;
    height: number;
    width: number;
}

export interface UrlImageViewerPreviewProps {
    class: string;
    style: string;
    url: string;
    sampleText: string;
    height: number | null;
    width: number | null;
}
