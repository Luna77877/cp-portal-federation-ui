import { Input, InputGroup, IconButton, CloseButton } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  return (
    <InputGroup
      startElement={
        <IconButton aria-label="Search database" variant="ghost" size="xl">
          <LuSearch />
        </IconButton>
      }
      endElement={endElement}
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
