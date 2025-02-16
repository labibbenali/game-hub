import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGenre from '../hooks/useGenre';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

export const GenreSelector = () => {
  const { data, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  const selectGenre = useGenre(selectedGenreId);

  if(error) return null;
    return (
        <Menu>
          <MenuButton as={Button} fontSize='sm' rightIcon={<BsChevronDown />}>
            {selectGenre?.name || "Genre"}
          </MenuButton>
          <MenuList>
            {data?.results.map((genre) => (
              <MenuItem
                onClick={() => setSelectedGenreId(genre.id)}
                key={genre.id}
              >
                {genre.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
}

