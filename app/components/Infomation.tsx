import { Children, type FC, type PropsWithChildren } from "react";

interface Type {
    title: string;
    description: string;
    id: string | number;
    onDelete: (idr: number | string) => void;
}

export default function Infomation({ title, description, id, onDelete }: Type) {
    return (
        <article>
            <div className="h-full justify-center bg-yellow-100 items-center flex flex-col gap-y-5">
                <h1 className="text-3xl font-extrabold text-black-600 mb-5">Info</h1>
                <div>
                    <h2 className="w-full p-2 rounded-xl my-2 border border-gray-300">{title}</h2>
                    <h2 className="w-full p-2 rounded-xl my-2 border border-gray-300">{description}</h2>
                </div>
                <div className="w-full text-center mt-5">
                    <button type="submit" name="_action" value="Sign In"
                        onClick={() => onDelete(id)}
                        className="w-3xl rounded-xl mt-2 bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600">
                        Delete
                    </button>
                </div>
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