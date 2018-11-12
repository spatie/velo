import Pages from "../components/Pages";
import Station from "../components/Station";
import useStations from "../hooks/useStations";

export default function Index() {
    const stations = useStations();

    return (
        <>
            <Pages>
                {stations.map(station => (
                    <Station
                        key={station.id}
                        name={station.name.slice(5)}
                        available={station.bikes}
                        total={station.bikes + station.slots}
                    />
                ))}
            </Pages>
        </>
    );
}
