
// import { useState } from "react";
// import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";

// export const InputSearch = () => {
//   const [showInput, setShowInput] = useState(false);

//   const toggleShowInput = () => {
//     setShowInput(!showInput);
//   };

//   return (
//     <>
//       <Button leftIcon={<SearchIcon />} onClick={toggleShowInput}>
//         Search
//       </Button>
//       {showInput && (
//         <InputGroup mt={4}>
//           <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
//           <Input type="text" placeholder="Buscar..." />
//         </InputGroup>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext } from "react"
import { Context } from "../../context/Context"

export const SearchButton = () => {
  const [showInput, setShowInput] = useState(false);
  const context = useContext(Context)


  const handleClick = () => {
    setShowInput(true);
  };

  return (
    <>
      {!showInput ? (
        <Button leftIcon={<SearchIcon />} onClick={handleClick}>
          {context.language ==='es'?'Busca':"Search"}
        </Button>
      ) : (
        <Input placeholder={context.language ==='es'?'Busca':"Search"} />
      )}
    </>
  );
}
