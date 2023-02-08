export async function getPosts() {
    const response = await fetch("http://localhost:3030/blog")

    const data = await response.json()

    return data;
}
