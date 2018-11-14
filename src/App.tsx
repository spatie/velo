import Layout from "./components/Layout";
import Compass from "./components/Compass";
import Station from "./components/Station";
import useStations from "./hooks/useStations";
import useCurrentPosition from "./hooks/useCurrentPosition";
import useDeviceOrientation from "./hooks/useDeviceOrientation";

export default function App() {
    const stations = useStations();
    const currentPosition = useCurrentPosition();
    const deviceOrientation = useDeviceOrientation();

    return (
        <Layout>
            <Layout.NavBar />
            <Layout.Screens items={stations} title={station => station.name.slice(5)}>
                {station => (
                    <div>
                        <div className="compass">
                            {currentPosition && (
                                <Compass
                                    from={currentPosition}
                                    to={station.position}
                                    offset={deviceOrientation}
                                />
                            )}
                        </div>
                        <Station
                            available={station.bikes}
                            total={station.bikes + station.slots}
                            loaded={station.loaded}
                        />
                    </div>
                )}
            </Layout.Screens>
            <style jsx>{`
                .compass {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 150px;
                    left: 0;
                    width: 100%;
                }
            `}</style>
        </Layout>
    );
}
