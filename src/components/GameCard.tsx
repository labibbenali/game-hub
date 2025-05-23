import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import Game  from "../entities/Game";
import { PlateformList } from "./PlateformList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Emoji } from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlateformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
