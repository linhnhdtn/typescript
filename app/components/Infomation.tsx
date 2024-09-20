export default function Infomation({ title, description }: { title: string , description: string}) {
    return (
        <article>
            <h1>Info</h1>
            <div>
                <h2>{title}</h2>
                <h2>{description}</h2>
            </div>
            <button>
                Delete
            </button>
        </article>
    );
}