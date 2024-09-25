import Header from "~/components/Header";
import Infomation from "~/components/Infomation";
// import MemeEchXanh from "./././public/uploads/search/meme-ech-xanh.jpg"
import { useState } from "react";
import ListData from "~/components/ListData";
import NewData from "~/components/NewData";


export type TypeData = {
    title: string;
    description: string;
    id: string | number;
}

export default function Learn() {

    const [data, setData] = useState<TypeData[]>([]);

    function handleAddData(title: string, description: string) {
        setData((prevData) => {
            const newData: TypeData = {
                title: title,
                description: description,
                id: Math.random().toString(36).substr(2, 9)
            }
            return [...prevData, newData];
        })
    }

    function deteleItemData(id : number | string){
        setData(prevData => prevData.filter(item => item.id!== id))
    }

    return (
        <main>
            {/* <Header
                image={{ src: MemeEchXanh, alt: "image hearder" }}
            >
                <h2>Learn TypeScript Header Children</h2>
            </Header> */}
        
            <NewData onNewData={handleAddData} />

            <ListData data={data} onDeleteItem={deteleItemData}  />

        </main>
    );
}