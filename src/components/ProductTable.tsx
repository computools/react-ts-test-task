import React from "react";
import {calcAveragePrice, calcTotalCount, Product} from "../model";


interface ProductsTableProps {
    products: Product[]
}

export const ProductTable: React.FC<ProductsTableProps> = ({products}) => {

    const totalCount = calcTotalCount(products);
    const averagePrice = calcAveragePrice(products);

    return (
        <table className="products-table">
            <thead className="products-table__head">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Count
                </th>
                <th>
                    Price
                </th>
            </tr>
            </thead>
            <tbody className="products-table__body">
            {products.map(product => (
                //I consider product name is unique in this case, in other case I would add and use product ID as key
                <tr key={product.name}>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.count}
                    </td>
                    <td>
                        {product.price}
                    </td>
                </tr>
            ))}
            </tbody>
            <tfoot className="products-table__footer">
                <tr>
                    <td>

                    </td>
                    <td>
                        Total: {totalCount}
                    </td>
                    <td>
                        Avg. price: {averagePrice}
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}