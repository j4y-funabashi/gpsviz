import { PropsWithChildren } from "react";

export const MapStats: React.FC<PropsWithChildren> = () => {
    return (
        <dl>
            <dt>Total time</dt>
            <dd>10hr 8mins</dd>

            <dt>Ascent</dt>
            <dd>700m</dd>
        </dl>
    )
}
