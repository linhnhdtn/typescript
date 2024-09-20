
# Defining Component Props Types or Inrerface or FC type and ReactNode 
```typescript
file : app/components/infomation.tsx;
// base
export default function Infomation({id, title, description, image} : {
    id: string | number;,
    title: string,
    description: string;
    image : {
        src: string;
        alt: string;
    }
}){return ();}

// interface
interface Type {
    id: string | number;
    title: string;
    description: string;
    image : {
        src: string;
        alt: string;
    }
}

export default function Infomation({ id, title, description, image}: Type) {
    return ();
}

// FC type
import {type FC} from "react";
const Infomation: FC<Type> = ({ title, description, id, image }) => {
    return();
}
export default Infomation;

// return
return (
    <article>
            <div>
                <img src={image.src} alt={image.alt} />
                // <img {...image} />
                <h2>{id}</h2>
                <h2>{title}</h2>
                <h2>{description}</h2>
            </div>
        </article>
)

// react Node type
import {type ReactNode} from "react";

interface Type {
    children : ReactNode;
}

export default function Hearder({children} : Type){
    return (
         <header>
            {children}
        </header>
    );
}

file : app/routes/learn.tsx;

import Infomation from "~/components/Infomation";
import Header from "~/components/Header";

export function Learn(){
    return(
        <main>
            <Header>Children</Header>
            <Infomation 
                image = {{src: ImageUrl, atl: "image title"}}
                id = "123"
                title = "Title"
                description = "Description"
            / >
        </main>
    );
}

```
# component props & the Special "key" Prop  
```typescript
type UserProps = {
  name: string;
};
 
function User({ name }: UserProps) {
  return <li>User: {name}</li>;
}
 
function App() {
  const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
 
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <User key={user} name={user.name} />
        ))}
      </ul>
    </>
  );
}
```
