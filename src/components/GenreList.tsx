import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
        {data.map((genre) => (
          <GenreListItem
            key={genre.id}
            genre={genre}
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
