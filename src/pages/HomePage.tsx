import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/icons'
import { GameGrid } from '../components/GameGrid'
import { GameHeading } from '../components/GameHeading'
import { GenreList } from '../components/GenreList'
import { PlatformSelector } from '../components/PlatformSelector'
import { SortSelector } from '../components/SortSelector'

export const HomePage = () => {
  return (
    <>
    <Grid
      templateAreas={{
        base: ` "main"`, //mobile devices , we have just nav and main
        lg: `"aside main"`, // large devices (wide than 1024px)  like laptop
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        {/*so grid item on ASIDE will showed only in large  screen above="lg" */}
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
    </>
  )
}
