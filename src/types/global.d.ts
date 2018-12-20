declare module "csstype" {
    export interface CSSProperties {
        [k: string]: any;
    }
}

declare module "react-swipeable-views-utils" {
    export function virtualize(component: any): any;
}
