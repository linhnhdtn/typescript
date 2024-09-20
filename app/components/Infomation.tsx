import { Children, type FC, type PropsWithChildren } from "react";

interface Type {
    title: string;
    description: string;
    id: string | number;
}

export default function Infomation({ title, description, id }: Type) {
    return (
        <article>
            <h1>Info</h1>
            <div>
                <h2>{title}</h2>
                <h2>{description}</h2>
                <h2>{id}</h2>
            </div>
        </article>
    );
}


// const Infomation: FC<Type> = ({ title, description, id }) => {
//     return (
//         <article>
//             <h1>Info</h1>
//             <div>
//                 <h2>{title}</h2>
//                 <h2>{description}</h2>
//                 <h2>{id}</h2>
//             </div>
//             <button>
//                 Delete
//             </button>
//         </article>
//     );
// }

// export default Infomation;