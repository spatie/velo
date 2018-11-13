type Props = {
    available: number;
    total: number;
};

export default function Station({ available, total }: Props) {
    let slotColor = available < 3 ? "#85144b" : "#48d093";

    return (
        <div className="slots">
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} className={i >= available ? "available" : "unavailable"} />
            ))}
            <style jsx>{`
                .slots {
                    --slot-size: calc((100vw - 34px) / 13);
                    --slot-color: ${slotColor};
                    display: grid;
                    grid-template-columns: repeat(7, var(--slot-size));
                    grid-gap: var(--slot-size);
                }

                .slots > .available,
                .slots > .unavailable {
                    width: var(--slot-size);
                    height: var(--slot-size);
                    border-radius: var(--slot-size);
                    border: 5px solid var(--slot-color);
                }

                .slots > .unavailable {
                    background-color: var(--slot-color);
                }
            `}</style>
        </div>
    );
}
