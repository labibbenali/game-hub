import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlateformList } from "./PlateformList";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlateformList platforms={game.platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};
