type Props = {
    count: string;
    label: string;
};

export default function Station({ count, label }: Props) {
    return (
        <div>
            <p className="count">{count}</p>
            <p className="label">{label}</p>
            <style jsx>{`
                .count {
                    font-size: 2ovh;
                    font-weight: bold;
                    margin-bottom: 1vh;
                }
            `}</style>
        </div>
    );
}
