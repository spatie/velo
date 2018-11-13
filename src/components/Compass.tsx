import { useMemo } from "react";
import { LatLng } from "../types";
import useBearing from "../hooks/useBearing";
import useCompass from "../hooks/useCompass";
import usePosition from "../hooks/usePosition";

type Props = {
    to: LatLng;
};

export default function Compass({ to }: Props) {
    const from = usePosition();
    const direction = useCompass();
    const bearing = useBearing(from, to);
    const rotation = bearing - direction;

    return useMemo(
        () => (
            <div className="compass">
                <div className="north" />
                <div className="south" />
                <style jsx>{`
                    .compass {
                        width: 10px;
                        height: 100px;
                        position: relative;
                        border-radius: 10px;
                        overflow: hidden;
                        transform: rotate(${rotation}deg) translateZ(0);
                        transition: transform 0.1s ease-out;
                    }

                    .north,
                    .south {
                        display: block;
                        width: 10px;
                        height: 50px;
                        position: absolute;
                        background-color: white;
                    }

                    .north {
                        top: 0;
                        left: 0;
                        background-color: red;
                    }

                    .south {
                        bottom: 0;
                        left: 0;
                    }
                `}</style>
            </div>
        ),
        [rotation],
    );
}
