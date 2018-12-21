import React from "react";
import Layout from "./components/Layout";
import Compass from "./components/Compass";
import Station from "./components/Station";
import useStations from "./hooks/useStations";

export default function App() {
    const stations = useStations();

    return (
        <Layout>
            <Layout.NavBar />
            <Layout.Screens items={stations} title={station => station.name.slice(5)}>
                {station => (
                    <div>
                        <div className="compass-wrapper">
                            <Compass destination={station.position} />
                        </div>
                        <Station
                            available={station.bikes}
                            total={station.bikes + station.slots}
                            loaded={station.loaded}
                        />
                    </div>
                )}
            </Layout.Screens>
        </Layout>
    );
}
