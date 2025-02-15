import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! : mean that we tell to typescript this element will never be null

  if (isLoading) return <Spinner />;
  console.log("ERROR ", error);
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};
