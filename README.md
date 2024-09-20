

# Defining Component Props Types ()
```
file : app/components/infomation.tsx;

export default function Infomation(
    { id, title, description }: 
    { id: number | string, title: string , description: string}) {
    return (
        <article>
            <div>
                <h2>{id}</h2>
                <h2>{title}</h2>
                <h2>{description}</h2>
            </div>
        </article>
    );
}

file : app/routes/learn.tsx;

import Infomation from "~/components/Infomation";

export function Learn(){
    return(
        <main>
            <Infomation 
                id = "123"
                title = "Title"
                description = "Description"
            />
        </main>
    );
}
```
# 