
export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=mMZlF4gWSbzUC4ZiNUnaJWJnUrnPqRRA&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({    // Recorre cada uno y retorna un nuevo objeto con lo seleccionado
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;

}