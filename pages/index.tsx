import Station from "../components/Station";
import useStations from "../hooks/useStations";
import SwipeableViews from "react-swipeable-views";
import Layout from "../components/Layout";

export default function Index() {
    const stations = useStations();

    return (
        <SwipeableViews>
            {stations.map(station => (
                <Layout.Screen title={station.name.slice(5)} justify="end">
                    <Station
                        key={station.id}
                        available={station.bikes}
                        total={station.bikes + station.slots}
                    />
                </Layout.Screen>
            ))}
        </SwipeableViews>
    );
}
