import useGenres from "./useGenres";

const useGenreLookup = (id?: number) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === id);

  return genre;
};

export default useGenreLookup;
