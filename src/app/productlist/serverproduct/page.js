import Serverproductlist from "../serverproductlist"

async function productlist() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    console.log("Server Data",data);
    return data.products
}
export default async function Serverproduct() {
    let productdata = await productlist()
    return (
        <div style={{ paddingTop: '20px' }}>
            <h1 style={{ textAlign: 'center', position: 'sticky', top: '50px', backgroundColor: 'white', zIndex: 99 }}>Mobile Phones Servers</h1>
            <table style={{ width: '100%', border: 'solid 1px' }}>
                <thead>
                    <tr style={{ border: 'solid 1px' }} >
                        <th style={{ border: 'solid 1px' }}>Id</th>
                        <th style={{ border: 'solid 1px' }}>Title</th>
                        <th style={{ border: 'solid 1px' }}>Category</th>
                        <th style={{ border: 'solid 1px' }}>Price</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        productdata?.map((item, index) => (
                            <tr key={index} style={{ border: 'solid 1px' }}>
                                <td style={{ border: 'solid 1px' }}>{item.id}</td>
                                <td style={{ border: 'solid 1px' }}>{item.title}</td>
                                <td style={{ border: 'solid 1px' }}>{item.category}</td>
                                <td style={{ border: 'solid 1px' }}>Rs.{item.price}/- <Serverproductlist price={item.price}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

