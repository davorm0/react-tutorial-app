import { Heading } from "@chakra-ui/react";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const genre = useGenreLookup(genreId);

  const platformId = useGameQueryStore((g) => g.gameQuery.platformId);
  const platform = usePlatformLookup(platformId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`.trim();

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
