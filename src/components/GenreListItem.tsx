import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import { Genre } from "../services/genreService";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  genre: Genre;
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, selectedGenreId, onSelectGenre }: Props) => {
  return (
    <>
      <ListItem paddingY="5px">
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
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
