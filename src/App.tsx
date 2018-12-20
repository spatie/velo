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
                        <Compass destination={station.position} />
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
