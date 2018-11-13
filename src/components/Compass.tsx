import { useMemo } from "react";
import { LatLng } from "../types";
import useBearing from "../hooks/useBearing";
import useDistance from "../hooks/useDistance";

type Props = {
    from: LatLng;
    to: LatLng;
    offset: number;
};

export default function Compass({ from, to, offset }: Props) {
    const distance = useDistance(from, to);
    const bearing = useBearing(from, to);
    const rotation = bearing - offset;

    return useMemo(
        () => (
            <div className="compass">
                <div className="north" />
                <style jsx>{`
                    .compass {
                        width: 100px;
                        height: 100px;
                        position: relative;
                        border-radius: 100px;
                        box-shadow: 0 0 0 5px white;
                    }

                    .north {
                        display: block;
                        width: 12px;
                        height: 12px;
                        border-radius: 20px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: red;
                        transform: translate(44px, -12px) rotate(${rotation}deg);
                        transform-origin: 6px 62px;
                    }
                `}</style>
            </div>
        ),
        [rotation, distance],
    );
}
