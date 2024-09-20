import Header from "~/components/Header";
import Infomation from "~/components/Infomation";
import MemeEchXanh from "./././public/uploads/search/meme-ech-xanh.jpg"
export default function Learn() {
    return (
        <main>
            <Header
                image={{ src: MemeEchXanh, alt: "image hearder" }}
            >
                <h2>Learn TypeScript Header Children</h2>
            </Header>
            <Infomation
                title="Learn"
                description="Learn TypeScript"
                id="123"
            />
        </main>
    );
}