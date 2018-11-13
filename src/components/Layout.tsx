import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";

type LayoutProps = {
    children?: any;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            {children}
            <style jsx>{`
                .layout {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
}

type NavBarProps = {
    children?: any;
};

Layout.NavBar = function({ children }: NavBarProps) {
    return (
        <div className="navbar">
            {children}
            <style jsx>{`
                .navbar {
                    height: 44px;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

type ScreenProps = {
    title: string;
    children?: any;
};

Layout.Screen = function({ title, children }: ScreenProps) {
    return (
        <div className="screen">
            <h1 className="title">{title}</h1>
            <div className="contents">{children}</div>
            <style jsx>{`
                .screen {
                    display: flex;
                    flex-direction: column;
                    min-height: calc(100vh - 44px);
                    position: relative;
                }

                .title {
                    font-size: 34px;
                    padding: 0 17px;
                    line-height: 1.2;
                }

                .contents {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 17px 17px 34px;
                }
            `}</style>
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
