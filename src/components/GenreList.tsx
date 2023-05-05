import { Heading, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genreService";
import GenreListItem from "./GenreListItem";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];

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
            onSelectGenre={onSelectGenre}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
