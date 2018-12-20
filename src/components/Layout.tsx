import React from "react";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";

type LayoutProps = {
    children?: any;
};

export default function Layout({ children }: LayoutProps) {
    return <div className="layout">{children}</div>;
}

type NavBarProps = {
    children?: any;
};

Layout.NavBar = function({ children }: NavBarProps) {
    return <div className="navbar">{children}</div>;
};

type ScreenProps = {
    title: string;
    children?: any;
};

Layout.Screen = function({ title, children }: ScreenProps) {
    return (
        <div className="screen">
            <h1 className="screen-title">{title}</h1>
            <div className="screen-contents">{children}</div>
        </div>
    );
};

type ScreensProps<T> = {
    items: T[];
    title: (item: T) => string;
    children: (item: T) => any;
};

const VirtualizedSwipebleViews = virtualize(SwipeableViews);

Layout.Screens = function<T>({ items, title, children }: ScreensProps<T>) {
    return (
        <VirtualizedSwipebleViews
            slideCount={items.length}
            slideRenderer={({ key, index }: { key: number; index: number }) => (
                <Layout.Screen key={key} title={title(items[index])}>
                    {children(items[index])}
                </Layout.Screen>
            )}
        />
    );
};
