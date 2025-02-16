import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import { GameScreenShots } from "../components/GameScreenShots";
import { GameTrailer } from "../components/GameTrailer";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! : mean that we tell to typescript this element will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  console.log("Id : ", game.id);
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};
