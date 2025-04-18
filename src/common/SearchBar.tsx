import { Input, InputGroup, IconButton, CloseButton } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <InputGroup
      startElement={<LuSearch size="30px" />}
      endElement={
        value.length > 0 ? (
          <CloseButton
            size="xs"
            onClick={() => {
              setValue("");
              inputRef.current?.focus();
            }}
            me="-2"
          />
        ) : undefined
      }
      width="450px"
    >
      <Input
        ref={inputRef}
        size="xl"
        placeholder=" Search Clusters"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </InputGroup>
  );
}
