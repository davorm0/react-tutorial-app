import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`.trim();

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
