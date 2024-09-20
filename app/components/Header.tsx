import { ReactNode } from "react";

interface HeaderType {
    image: {
        src: string,
        alt: string,
    }
    children: ReactNode
}

export default function Header({ image, children }: HeaderType) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {/* <img {...image} /> */}
            {children}
        </header>
    );
}