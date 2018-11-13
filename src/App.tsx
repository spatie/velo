import Layout from "./components/Layout";
import Compass from "./components/Compass";
import Station from "./components/Station";
import useStations from "./hooks/useStations";
import SwipeableViews from "react-swipeable-views";

export default function App() {
    const stations = useStations();

    return (
        <Layout>
            <Layout.NavBar />
            <SwipeableViews>
                {stations.map(station => (
                    <Layout.Screen key={station.id} title={station.name.slice(5)} justify="end">
                        <div className="compass">
                            <Compass to={station.position} />
                        </div>
                        <Station
                            available={station.bikes}
                            total={station.bikes + station.slots}
                            loaded={station.loaded}
                        />
                    </Layout.Screen>
                ))}
            </SwipeableViews>
            <style jsx>{`
                .compass {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 34px;
                }
            `}</style>
        </Layout>
    );
}
