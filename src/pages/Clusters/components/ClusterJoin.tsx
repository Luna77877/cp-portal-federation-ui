import {
  Button,
  Dialog,
  Portal,
  CloseButton,
  CheckboxCard,
  Input,
  Flex,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function ClusterJoin() {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  return (
    <Dialog.Root scrollBehavior="inside" size="lg">
      <Dialog.Trigger asChild>
        <Button size="lg" colorPalette="blue" fontSize="xl">
          <FaPlus /> Join
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content alignItems="center" height="450px">
            <Dialog.Header>
              <Dialog.Title>Cluster Join</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Flex wrap="wrap" gap="3">
                {items.map((item) => (
                  <CheckboxCard.Root
                    key={item.id}
                    size="lg"
                    onClick={handleClick}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control width="250px" height="150px">
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>{item.name}</CheckboxCard.Label>
                        {isClicked ? (
                          <CheckboxCard.Description hidden>
                            Member cluster Name
                            <Input
                              placeholder=""
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                          </CheckboxCard.Description>
                        ) : (
                          <CheckboxCard.Description>
                            Member cluster Name
                            <Input
                              placeholder=""
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                          </CheckboxCard.Description>
                        )}
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>
                ))}
              </Flex>
            </Dialog.Body>
            <Dialog.Footer paddingTop="30px">
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" colorPalette="blue">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="blue">Apply</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

const items = [
  {
    id: 1,
    name: "nhn-cluster",
    clustername: "not yet",
  },
  {
    id: 2,
    name: "kt-cluster",
    clustername: "",
  },
  {
    id: 3,
    name: "aws-cluster",
    clustername: "",
  },
  {
    id: 4,
    name: "ncp-cluster",
    clustername: "",
  },
  {
    id: 5,
    name: "google-cluster",
    clustername: "",
  },
];
