import React from "react";

type Props = {
    available: number;
    total: number;
    loaded: boolean;
};

export default function Station({ available, total, loaded }: Props) {
    let slotColor = available < 3 ? "#85144b" : "#48d093";

    if (!loaded) {
        slotColor = "grey";
    }

    return (
        <div className="station-slots" style={{ "--slot-color": slotColor }}>
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} className={i >= available ? "available" : "unavailable"} />
            ))}
        </div>
    );
}
