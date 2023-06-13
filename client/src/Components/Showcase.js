
const data = [
    {
        Id : 1,
        Name : "Nike Air 1",
        Price : 9900,
    },
    {
        Id : 2,
        Name : "Gucci Belt",
        Price : 15000,
    },
    {
        Id : 3,
        Name : "Adidas NMD R2",
        Price : 8000,
    },
    {
        Id : 4,
        Name : "Mc Yeans",
        Price : 2200,
    },
];

const ShowcaseDOM = data.map(a => {return (
    <p>Id : {a.Id}</p>
)})

export default function Showcase() {
    <div className="container mx-auto">
        <ul>
            <li>
                {ShowcaseDOM}
            </li>
        </ul>
    </div>
}