import { useRoute } from "../hooks";
import Station from "../components/Station";

export default function Index() {
    const { origin, destination, reverse } = useRoute();

    if (!origin || !destination) {
        return null;
    }

    return (
        <div>
            <Station label={`bikes at ${origin.name}`} count={origin.bikes} />
            <Station label={`slots at ${destination.name}`} count={destination.slots} />
            <button onClick={reverse}>Reverse</button>
        </div>
    );
}
