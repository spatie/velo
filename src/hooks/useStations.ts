import { useContext } from "react";
import StationsContext from "../contexts/StationsContext";

export default function useStations() {
    return useContext(StationsContext);
}
