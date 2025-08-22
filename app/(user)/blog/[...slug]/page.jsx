const Blog = async (props) => {

    const { slug } = await props.params

    return (
        <div>Blog: {slug}</div>
    )
}

export default Blog;
