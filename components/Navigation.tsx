type Props = {
    count: number;
};

export default function({ count }: Props) {
    return (
        <ul>
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    );
}
