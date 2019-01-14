import React from "react";

export function compose<P extends { children?: any }>(wrapperComponents: React.ComponentType[]): React.ComponentType<P> {
    return function WrappedComponent(props: P) {
        return wrapperComponents.reduce((children, WrapperComponent) => {
            return <WrapperComponent>{children}</WrapperComponent>;
        }, props.children);
    };
}
