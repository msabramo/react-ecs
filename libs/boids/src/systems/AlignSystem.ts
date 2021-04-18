import {
    useQuery,
    useSystem,
} from "@react-ecs/core";
import { FC } from "react";
import { Vector3 } from "three";

import {
    Acceleration,
    Neighbor,
    Velocity,
} from "../facets";

type AlignSystemProps = {
    amount: number;
}

export const AlignSystem: FC<AlignSystemProps> = (props) => {
    const query = useQuery(e => e.hasAll(Neighbor, Velocity, Acceleration));

    return useSystem((dt) => {
        query.loop([Neighbor, Velocity, Acceleration], (e, [neighbor, velocity, acceleration]) => {
            const steering = new Vector3(0, 0, 0);
            const neighbors = neighbor.meta.neighbors;

            for (const other of neighbor.meta.neighbors) {
                const otherVelocity = other.get(Velocity).amount;
                steering.add(otherVelocity);
            }

            if (neighbors.length) {
                steering.divideScalar(neighbors.length)
                steering.setLength(1)
                steering.sub(velocity.amount)
                steering.clampLength(0, 10)
            }

            acceleration.amount = steering.normalize().clone().multiplyScalar(props.amount);
        });
    })
};
