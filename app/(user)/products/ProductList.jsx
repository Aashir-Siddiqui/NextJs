"use client"

import { useSearchParams } from "next/navigation"

const ProductList = () => {

    const searchParams = useSearchParams()

    const category = searchParams.get("category") || "all";
    const sort = searchParams.get("sort") || "default";
    const page = searchParams.getAll("page") || 1;

    return (
        <div>
            <h2>Product List</h2>
            <p>Category: {category}</p>
            <p>Sort: {sort}</p>
            <p>Page: {page}</p>
        </div>
    )
}

export default ProductList