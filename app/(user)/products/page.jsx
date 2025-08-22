import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {
    const searchParam = await searchParams;

    const category = searchParam?.category || "all";
    const sort = searchParam?.sort || "default";
    const page = searchParam?.page || 1

    return (
        <div>
            <ProductList />
            <h1>Products</h1>
            <p>Category: {category}</p>
            <p>Sort: {sort}</p>
            <p>Page: {page}</p>
        </div>
    )
}

export default Products;