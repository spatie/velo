import { useContext } from "react";
import DeviceOrientationContext from "../contexts/DeviceOrientationContext";

export default function useDeviceOrientation() {
    return useContext(DeviceOrientationContext);
}
