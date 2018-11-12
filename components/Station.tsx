type Props = {
    name: string;
    available: number;
    total: number;
};

export default function Station({ name, available, total }: Props) {
    let slotColor = available < 3 ? "#85144b" : "#3D9970";

    return (
        <div className="station">
            <div className="slots">
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} className={i >= available ? "available" : "unavailable"} />
                ))}
            </div>
            <h1 className="name">{name}</h1>
            <style jsx>{`
                .station {
                    --slot-size: calc(100vw / 13);
                    --slot-color: ${slotColor};
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: var(--slot-size);
                }

                .slots {
                    display: grid;
                    grid-template-columns: repeat(6, var(--slot-size));
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

                .name {
                    bottom: calc(100vw / 11);
                    font-size: 7vw;
                }
            `}</style>
        </div>
    );
}
