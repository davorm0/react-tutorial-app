import { Heading, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import GenreListItem from "./GenreListItem";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];

  const selectedGenreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const selectGenreId = useGameQueryStore((g) => g.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && skeleton.map((id) => <GenreListItemSkeleton key={id} />)}
        {data?.results?.map((genre) => (
          <GenreListItem
            key={genre.id}
            genre={genre}
            selectedGenreId={selectedGenreId}
            onSelectGenre={() => selectGenreId(genre.id)}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
