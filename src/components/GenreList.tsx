import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              _hover={{
                textDecoration: "underline", // Applique un soulignement au survol
                cursor: "pointer", // Change le curseur en pointeur
                transform: "scale(1.01)", // Applique un zoom de 10% au survol
                transition: "transform 0.2s ease-in-out", // Lisse l'animation
              }}
            >
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
