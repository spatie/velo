import React from "react";

export function compose<P>(
    wrapperComponents: React.ComponentType[],
): (InnerComponent: React.ComponentType<P>) => React.ComponentType<P> {
    return function createComposedComponent(InnerComponent) {
        return function WrappedComponent(props: P) {
            return wrapperComponents.reduce((children, WrapperComponent) => {
                return <WrapperComponent>{children}</WrapperComponent>;
            }, <InnerComponent {...props} />);
        };
    };
}
