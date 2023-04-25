import { HStack, ListItem, Image, Text, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, selectedGenre, onSelectGenre }: Props) => {
  return (
    <>
      <ListItem paddingY="5px">
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            fontSize="lg"
            variant="link"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreListItem;
