import { Children } from "react";

type Props = {
    children: React.ReactChild[];
};

export default function Pages({ children }: Props) {
    return (
        <div className="pages">
            {Children.map(children, child => (
                <div className="page">{child}</div>
            ))}
            <style jsx>{`
                .pages {
                    display: grid;
                    width: 100vw;
                    height: 100vh;
                    overflow-y: auto;
                    grid-template-columns: repeat(${children.length}, 1fr);
                    scroll-snap-type: x mandatory;
                }

                .page {
                    scroll-snap-align: start;
                }
            `}</style>
        </div>
    );
}
