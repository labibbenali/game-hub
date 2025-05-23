import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";


export const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage} //Le double point d'exclamation !! est un idiome JavaScript pour convertir une valeur en booléen1.  
        //Si hasNextPage est une valeur truthy (comme un objet, un nombre non nul, ou true), !!hasNextPage sera true.    
        //Si hasNextPage est une valeur falsy (comme null, undefined, 0, ou false), !!hasNextPage sera false.
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={4}>
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )} */}
    </Box>
  );
};
