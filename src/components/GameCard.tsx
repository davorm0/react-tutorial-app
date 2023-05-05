import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
  selectedPlatformId?: number;
}

const GameCard = ({ game, selectedPlatformId }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              selectedPlatformId={selectedPlatformId}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
