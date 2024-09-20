import Header from "~/components/Header";
import Infomation from "~/components/Infomation";
// import MemeEchXanh from "./././public/uploads/search/meme-ech-xanh.jpg"
import { useState } from "react";
import ListData from "~/components/ListData";


export type TypeData = {
    title: string;
    description: string;
    id: string | number;
}

export default function Learn() {

    const [data, setData] = useState<TypeData[]>([]);

    function handleAddData() {
        setData(prevData => {
            const newData: TypeData = {
                title: "Learn",
                description: "Learn TypeScript ",
                id: Math.random().toString(36).substr(2, 9)
            }
            return [...prevData, newData];
        })
    }

    return (
        <main>
            {/* <Header
                image={{ src: MemeEchXanh, alt: "image hearder" }}
            >
                <h2>Learn TypeScript Header Children</h2>
            </Header> */}
            <button onClick={handleAddData}>
                Add data
            </button>
            <ListData data={data} />

        </main>
    );
}