import { ReactElement } from "react";

type LayoutProps = {
    children: ReactElement<any>;
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
    children: ReactElement<any>;
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

type TitleBarProps = {
    title: string;
    children: ReactElement<any>;
    justify: "start" | "end";
};

Layout.Screen = function({ title, children, justify = "start" }: TitleBarProps) {
    return (
        <div className="screen">
            <h1 className="title">{title}</h1>
            <div className="contents">{children}</div>
            <style jsx>{`
                .screen {
                    display: flex;
                    flex-direction: column;
                    min-height: calc(100vh - 44px);
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
                    justify-content: ${`flex-${justify}`};
                    padding: 17px 17px 34px;
                }
            `}</style>
        </div>
    );
};
