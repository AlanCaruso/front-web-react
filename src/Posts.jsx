export async function getPosts() {
    const response = await fetch("http://127.0.0.1:3001/blogs")

    const data = await response.json()

    return data;
}
