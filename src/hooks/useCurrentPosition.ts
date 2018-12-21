import { useContext } from "react";
import CurrentPositionContext from "../contexts/CurrentPositionContext";

export default function useCurrentPosition() {
    return useContext(CurrentPositionContext);
}
