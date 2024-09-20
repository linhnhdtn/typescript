import { TypeData } from "~/routes/learn";

type TypeListData = {
    data: TypeData[];
}

export default function ListData({ data }: TypeListData) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    {item.title}
                    {item.description}
                    {item.id}
                </li>
            ))}
        </ul>
    );
}