import { TypeData } from "~/routes/learn";
import Infomation from "./Infomation";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";


type TypeListData = {
    data: TypeData[];
    onDeleteItem: (id: number | string) => void;
}

export default function ListData({ data, onDeleteItem }: TypeListData) {
    if (data.length === 0) {
        return <InfoBox mode="hint"><h2 className="text-3xl font-extrabold text-black-600 mb-5 text-center">No data</h2></InfoBox>;
    }

    let warnign: ReactNode;
    if (data.length > 2) {
        warnign = (<InfoBox mode="warning" severity="high"><h2 className="text-3xl font-extrabold text-black-600 mb-5 text-center">Warning: List is too long</h2> </InfoBox>);
    }

    return (
        <>
            {warnign}
            <ul>
                {data.map((item) => (
                    <li key={item.id} >
                        <Infomation
                            title={item.title}
                            description={item.description}
                            id={item.id}
                            onDelete={onDeleteItem}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}