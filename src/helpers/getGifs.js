
export const getGifs = async( category ) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=ZAGeZIRzeUYaybNrQB8odrsyfw1r4D4Q&q=${ category }&limit=10`;
  const res = await fetch( URL );
  const { data } = await res.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }) )

  // console.log(gifs);
  return gifs;
}