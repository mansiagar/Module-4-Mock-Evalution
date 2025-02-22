import { Box, Text } from "@chakra-ui/react";
import ProductList from "./Component/ProductList";

const App = () => {
  return (
    <div>
      <Box>
        <Text>This is App Component</Text>
        <ProductList />
      </Box>
    </div>
  );
};

export default App;
