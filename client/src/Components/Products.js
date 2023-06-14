
const data = [
    {
        Id: 1,
        Name: "Nike Air 1",
        Price: 9900,
    },
    {
        Id: 2,
        Name: "Gucci Belt",
        Price: 15000,
    },
    {
        Id: 3,
        Name: "Adidas NMD R2",
        Price: 8000,
    },
    {
        Id: 4,
        Name: "Mc Yeans",
        Price: 2200,
    },
];

const ProductDOM = data.map(a => {
    return (
        <>
            <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/512/43/43777.png"
                alt="product"
                width={100}
                className="flex center"
                />
                <p>{a.Name}</p>
                <p>{a.Price}</p>
            </div>
        </>
    );
})

export default function Product() {
    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {ProductDOM}
            </div >
        </>
    );
}