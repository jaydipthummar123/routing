const GetMoviesdetails = async ({ params }) => {
  console.log(params);
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${params.moviesId}&apikey=1c12799f`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetMoviesdetails;
