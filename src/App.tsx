import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile devices , we have just nav and main
        lg: `"nav nav" "aside main"`, // large devices (wide than 1024px)  like laptop
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        {" "}
        {/*so grid item on ASIDE will showed only in large  screen above="lg" */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

