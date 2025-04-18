import { useState } from "react";
import { Card } from "@/common/Card";
import {
  Progress,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  Field,
  FieldLabel,
  Input,
  Portal,
  RadioCard,
  HStack,
  Checkbox,
  NativeSelect,
  Tag,
  CheckboxCard,
  Dialog,
  CloseButton,
  SegmentGroup,
  Collapsible,
  Badge,
  Box,
  CheckboxGroup,
} from "@chakra-ui/react";
import { Text } from "@/common/Text";
import { FaPlus } from "react-icons/fa";

import { toaster } from "../../../common/ui/toaster";

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <>
      <Progress.Root value={progress} mb="5%" mx="5%" colorPalette="blue">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="flex-end">
          <Flex>
            {step !== 1 ? (
              <Button
                colorPalette="blue"
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                disabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5px"
              >
                Back
              </Button>
            ) : null}
            {step !== 3 ? (
              <Button
                ml="5px"
                mr="5px"
                colorPalette="blue"
                w="7rem"
                disabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            ) : null}
          </Flex>
          {step !== 1 ? (
            <Button
              ml="5px"
              colorPalette="blue"
              w="7rem"
              colorScheme="red"
              variant="outline"
              onClick={() => {
                toaster.create({
                  description: "Policy가 생성되었습니다.",
                  // status: "success",
                  duration: 3000,
                  closable: true,
                });
              }}
            >
              Apply
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </>
  );
}

const Form1 = () => {
  const [isNewNamespace, setIsNewNamespace] = useState(false);

  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="300px"
        mb="2%"
        color="#47494d"
      >
        Metadata
      </Heading>
      <Field.Root
        mt="2%"
        className="basic-font"
        orientation="horizontal"
        mb="1%"
        required
      >
        <FieldLabel>
          Level
          <Field.RequiredIndicator />
        </FieldLabel>
        <RadioCard.Root
          width="100%"
          defaultValue="namespace"
          colorPalette="blue"
        >
          <HStack gap="5">
            <RadioCard.Item key="namespace" value="namespace" width="100%">
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemText>Namespace</RadioCard.ItemText>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
            <RadioCard.Item key="cluster" value="cluster" width="100%">
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemText>Cluster</RadioCard.ItemText>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
          </HStack>
        </RadioCard.Root>
      </Field.Root>
      <Field.Root
        mt="2%"
        className="basic-font"
        orientation="horizontal"
        mb="1%"
        required
      >
        <FieldLabel>
          Name
          <Field.RequiredIndicator />
        </FieldLabel>
        <Input placeholder="이름 입력" />
      </Field.Root>
      <Field.Root mt="2%" className="basic-font" mb="1%" required>
        <HStack gap="3" mb="1%">
          <FieldLabel>
            Namespace
            <Field.RequiredIndicator />
          </FieldLabel>
          <Checkbox.Root
            colorPalette="blue"
            onChange={() => setIsNewNamespace(!isNewNamespace)}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label className="basic-font">
              네임스페이스 신규 생성하기
            </Checkbox.Label>
          </Checkbox.Root>
        </HStack>
        {isNewNamespace ? (
          <Input id="namespace" />
        ) : (
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="1">default</option>
              <option value="2">name2</option>
              <option value="3">space2</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        )}
      </Field.Root>
      <Field.Root mt="2%" className="basic-font" mb="1%">
        <Collapsible.Root width="100%">
          <HStack gap="3">
            <FieldLabel>Labels</FieldLabel>
            <Collapsible.Trigger boxSize="10">
              <Button size="2xs" fontSize="lg" colorPalette="blue">
                <FaPlus />
              </Button>
            </Collapsible.Trigger>
            <Flex gap="3" flexWrap="wrap">
              <Tag.Root>
                <Tag.Label>karmada.policy=first-sample</Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
              <Tag.Root>
                <Tag.Label>app=nginx</Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
              <Tag.Root>
                <Tag.Label>karmada.policy=first-sampleeeeeeee</Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
              <Tag.Root>
                <Tag.Label>
                  karmada.policy=first-sampleeeeeeeeeeeeeeeeeee
                </Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
            </Flex>
          </HStack>
          <Collapsible.Content mt="2%" bg="gray.100">
            <HStack gap="4" m="2%">
              <Field.Root required>
                <Field.Label>
                  Key <Field.RequiredIndicator />
                </Field.Label>
                <Input bg="white" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Value <Field.RequiredIndicator />
                </Field.Label>
                <Input bg="white" />
              </Field.Root>
              <Button size="sm" colorPalette="blue" fontSize="xl">
                <FaPlus />
              </Button>
            </HStack>
          </Collapsible.Content>
        </Collapsible.Root>
      </Field.Root>
      <Field.Root mt="2%" className="basic-font" mb="1%">
        <Collapsible.Root width="100%">
          <HStack gap="3">
            <FieldLabel>Annotaions</FieldLabel>
            <Collapsible.Trigger boxSize="10">
              <Button size="2xs" fontSize="lg" colorPalette="blue">
                <FaPlus />
              </Button>
            </Collapsible.Trigger>
            <Flex gap="3" flexWrap="wrap">
              <Tag.Root>
                <Tag.Label>karmada.policy=first-sample</Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
              <Tag.Root>
                <Tag.Label>app=nginx</Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger />
                </Tag.EndElement>
              </Tag.Root>
            </Flex>
          </HStack>
          <Collapsible.Content mt="2%" bg="gray.100">
            <HStack gap="4" m="2%">
              <Field.Root required>
                <Field.Label>
                  Key
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input bg="white" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Value
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input bg="white" />
              </Field.Root>
              <Button size="sm" colorPalette="blue" fontSize="xl">
                <FaPlus />
              </Button>
            </HStack>
          </Collapsible.Content>
        </Collapsible.Root>
      </Field.Root>
    </>
  );
};

const Form2 = () => {
  const [isNewNamespace, setIsNewNamespace] = useState(false);

  return (
    <>
      <Dialog.Root>
        <Heading
          w="100%"
          textAlign={"center"}
          fontWeight="300px"
          mb="2%"
          color="#47494d"
        >
          Resource Selectors
          <Dialog.Trigger asChild>
            <Button size="2xs" colorPalette="blue" ml="3%">
              <FaPlus />
            </Button>
          </Dialog.Trigger>
        </Heading>
        <Flex
          height="400px"
          maxHeight="400px"
          overflow="auto"
          wrap="wrap"
          gap="5"
        >
          <Card.Root type="small">
            <Card.Body type="small">
              <CloseButton position="absolute" top="2" right="2" mr="2.5%" />
              <Field.Root>
                <HStack>
                  <FieldLabel>Kind</FieldLabel>
                  <Text type="small">Deployment</Text>
                </HStack>
              </Field.Root>
              <Field.Root>
                <HStack>
                  <FieldLabel>Name</FieldLabel>
                  <Text type="small">test</Text>
                </HStack>
              </Field.Root>
              <Field.Root>
                <HStack>
                  <FieldLabel>Namespace</FieldLabel>
                  <Text type="small">default</Text>
                </HStack>
              </Field.Root>
              <Field.Root>
                <HStack>
                  <FieldLabel>LabelSelectors</FieldLabel>
                  <Badge>karmada.policy=samle</Badge>
                  <Badge>app=nginx</Badge>
                </HStack>
              </Field.Root>
              <Field.Root>
                <HStack flexWrap="wrap">
                  <FieldLabel>Annotaions</FieldLabel>
                  <Badge>karmada.policy=samle</Badge>
                  <Badge>karmada.policy=samle</Badge>
                  <Badge>karmada.policy=samle</Badge>
                  <Badge>karmada.policy=samle</Badge>
                </HStack>
              </Field.Root>
            </Card.Body>
          </Card.Root>
        </Flex>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content width="800px" maxWidth="700px">
              <Dialog.Body m="3%">
                <Field.Root
                  mt="2%"
                  className="basic-font"
                  orientation="horizontal"
                  mb="1%"
                  required
                >
                  <FieldLabel>
                    Kind
                    <Field.RequiredIndicator />
                  </FieldLabel>
                  <SegmentGroup.Root defaultValue="Deployment" size="sm">
                    <SegmentGroup.Indicator />
                    <SegmentGroup.Items
                      items={[
                        "Deployment",
                        "Statefulset",
                        "Daemonset",
                        "Cronjob",
                        "Job",
                      ]}
                    />
                  </SegmentGroup.Root>
                </Field.Root>
                <Field.Root
                  mt="2%"
                  className="basic-font"
                  orientation="horizontal"
                  mb="1%"
                  required
                >
                  <FieldLabel>
                    Level
                    <Field.RequiredIndicator />
                  </FieldLabel>
                  <RadioCard.Root
                    width="100%"
                    defaultValue="namespace"
                    colorPalette="blue"
                  >
                    <HStack gap="5">
                      <RadioCard.Item
                        key="namespace"
                        value="namespace"
                        width="100%"
                      >
                        <RadioCard.ItemHiddenInput />
                        <RadioCard.ItemControl>
                          <RadioCard.ItemText>Namespace</RadioCard.ItemText>
                          <RadioCard.ItemIndicator />
                        </RadioCard.ItemControl>
                      </RadioCard.Item>
                      <RadioCard.Item
                        key="cluster"
                        value="cluster"
                        width="100%"
                      >
                        <RadioCard.ItemHiddenInput />
                        <RadioCard.ItemControl>
                          <RadioCard.ItemText>Cluster</RadioCard.ItemText>
                          <RadioCard.ItemIndicator />
                        </RadioCard.ItemControl>
                      </RadioCard.Item>
                    </HStack>
                  </RadioCard.Root>
                </Field.Root>
                <Field.Root
                  mt="2%"
                  className="basic-font"
                  orientation="horizontal"
                  mb="1%"
                  required
                >
                  <FieldLabel>
                    Name
                    <Field.RequiredIndicator />
                  </FieldLabel>
                  <Input placeholder="이름 입력" />
                </Field.Root>
                <Field.Root mt="2%" className="basic-font" mb="1%" required>
                  <HStack gap="3" mb="1%">
                    <FieldLabel>
                      Namespace
                      <Field.RequiredIndicator />
                    </FieldLabel>
                    <Checkbox.Root
                      colorPalette="blue"
                      onChange={() => setIsNewNamespace(!isNewNamespace)}
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label className="basic-font">
                        네임스페이스 신규 생성하기
                      </Checkbox.Label>
                    </Checkbox.Root>
                  </HStack>
                  {isNewNamespace ? (
                    <Input id="namespace" />
                  ) : (
                    <NativeSelect.Root>
                      <NativeSelect.Field>
                        <option value="1">default</option>
                        <option value="2">name2</option>
                        <option value="3">space2</option>
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                  )}
                </Field.Root>
                <Field.Root mt="2%" className="basic-font" mb="1%">
                  <Collapsible.Root width="100%">
                    <HStack gap="3">
                      <FieldLabel>Labels</FieldLabel>
                      <Collapsible.Trigger boxSize="10">
                        <Button size="2xs" fontSize="lg" colorPalette="blue">
                          <FaPlus />
                        </Button>
                      </Collapsible.Trigger>
                      <Flex gap="3" flexWrap="wrap">
                        <Tag.Root>
                          <Tag.Label>karmada.policy=first-sample</Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                        <Tag.Root>
                          <Tag.Label>app=nginx</Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                        <Tag.Root>
                          <Tag.Label>
                            karmada.policy=first-sampleeeeeeee
                          </Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                        <Tag.Root>
                          <Tag.Label>
                            karmada.policy=first-sampleeeeeeeeeeeeeeeeeee
                          </Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                      </Flex>
                    </HStack>
                    <Collapsible.Content mt="2%" bg="gray.100">
                      <HStack gap="4" m="2%">
                        <Field.Root required>
                          <Field.Label>
                            Key <Field.RequiredIndicator />
                          </Field.Label>
                          <Input bg="white" />
                        </Field.Root>
                        <Field.Root required>
                          <Field.Label>
                            Value <Field.RequiredIndicator />
                          </Field.Label>
                          <Input bg="white" />
                        </Field.Root>
                        <Button size="sm" colorPalette="blue" fontSize="xl">
                          <FaPlus />
                        </Button>
                      </HStack>
                    </Collapsible.Content>
                  </Collapsible.Root>
                </Field.Root>
                <Field.Root mt="2%" className="basic-font" mb="1%">
                  <Collapsible.Root width="100%">
                    <HStack gap="3">
                      <FieldLabel>Annotaions</FieldLabel>
                      <Collapsible.Trigger boxSize="10">
                        <Button size="2xs" fontSize="lg" colorPalette="blue">
                          <FaPlus />
                        </Button>
                      </Collapsible.Trigger>
                      <Flex gap="3" flexWrap="wrap">
                        <Tag.Root>
                          <Tag.Label>karmada.policy=first-sample</Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                        <Tag.Root>
                          <Tag.Label>app=nginx</Tag.Label>
                          <Tag.EndElement>
                            <Tag.CloseTrigger />
                          </Tag.EndElement>
                        </Tag.Root>
                      </Flex>
                    </HStack>
                    <Collapsible.Content mt="2%" bg="gray.100">
                      <HStack gap="4" m="2%">
                        <Field.Root required>
                          <Field.Label>
                            Key
                            <Field.RequiredIndicator />
                          </Field.Label>
                          <Input bg="white" />
                        </Field.Root>
                        <Field.Root required>
                          <Field.Label>
                            Value
                            <Field.RequiredIndicator />
                          </Field.Label>
                          <Input bg="white" />
                        </Field.Root>
                        <Button size="sm" colorPalette="blue" fontSize="xl">
                          <FaPlus />
                        </Button>
                      </HStack>
                    </Collapsible.Content>
                  </Collapsible.Root>
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" colorPalette="blue">
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Button colorPalette="blue">Save</Button>
                  </Dialog.Trigger>
                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Body mt="12%" ml="8%" mb="5%">
                          host-cluster에 배포되어 있는 리소스인 경우 삭제를
                          진행할까요?
                        </Dialog.Body>
                        <Dialog.Footer>
                          <Dialog.ActionTrigger asChild>
                            <Button colorPalette="blue" variant="outline">
                              No
                            </Button>
                          </Dialog.ActionTrigger>
                          <Button colorPalette="blue">Yes</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                          <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

const Form3 = () => {
  const [isClusterNames, setIsClusterNames] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isDivisionPreference, setIsDivisionPreference] = useState(false);

  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="300px"
        mb="2%"
        color="#47494d"
      >
        Placement
      </Heading>
      <Text type="subTitle">Cluster Affinity</Text>
      <Flex gap="2">
        <Field.Root
          mt="2%"
          className="basic-font"
          orientation="horizontal"
          mb="1%"
          width="180px"
        >
          <FieldLabel>
            <Checkbox.Root
              colorPalette="blue"
              onChange={() => setIsClusterNames(!isClusterNames)}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label width="180px">Cluster Names</Checkbox.Label>
            </Checkbox.Root>
          </FieldLabel>
        </Field.Root>
        {isClusterNames && (
          <CheckboxGroup>
            <Flex gap="2" wrap="wrap" justify="flex-start">
              <Box>
                <CheckboxCard.Root width="auto" colorPalette="blue">
                  <CheckboxCard.HiddenInput />
                  <CheckboxCard.Control>
                    <CheckboxCard.Label>member1</CheckboxCard.Label>
                    <CheckboxCard.Indicator />
                  </CheckboxCard.Control>
                </CheckboxCard.Root>
              </Box>
              <Box>
                <CheckboxCard.Root width="auto" colorPalette="blue">
                  <CheckboxCard.HiddenInput />
                  <CheckboxCard.Control>
                    <CheckboxCard.Label>member2</CheckboxCard.Label>
                    <CheckboxCard.Indicator />
                  </CheckboxCard.Control>
                </CheckboxCard.Root>
              </Box>
              <Box>
                <CheckboxCard.Root width="auto" colorPalette="blue">
                  <CheckboxCard.HiddenInput />
                  <CheckboxCard.Control>
                    <CheckboxCard.Label>member23</CheckboxCard.Label>
                    <CheckboxCard.Indicator />
                  </CheckboxCard.Control>
                </CheckboxCard.Root>
              </Box>
            </Flex>
          </CheckboxGroup>
        )}
      </Flex>
      <Text type="subTitle">Replica Scheduling</Text>
      <Flex gap="2" mb="2%">
        <Field.Root
          mt="2%"
          className="basic-font"
          orientation="horizontal"
          mb="1%"
          width="180px"
        >
          <FieldLabel>
            <Checkbox.Root
              colorPalette="blue"
              onChange={() => setIsType(!isType)}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label width="180px">Type</Checkbox.Label>
            </Checkbox.Root>
          </FieldLabel>
        </Field.Root>
        {isType && (
          <RadioCard.Root width="100%" colorPalette="blue">
            <Flex gap="2" wrap="wrap" justify="flex-start">
              <RadioCard.Item value="duplicated" width="100%">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemText>Duplicated</RadioCard.ItemText>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
              <RadioCard.Item value="divided" width="100%">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemText>Divided</RadioCard.ItemText>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
            </Flex>
          </RadioCard.Root>
        )}
      </Flex>
      <Flex gap="2" mb="2%">
        <Field.Root
          mt="2%"
          className="basic-font"
          orientation="horizontal"
          mb="1%"
          width="180px"
        >
          <FieldLabel>
            <Checkbox.Root
              colorPalette="blue"
              onChange={() => setIsDivisionPreference(!isDivisionPreference)}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label width="180px">Division Preference</Checkbox.Label>
            </Checkbox.Root>
          </FieldLabel>
        </Field.Root>
        {isDivisionPreference && (
          <RadioCard.Root width="100%" colorPalette="blue">
            <Flex gap="2" wrap="wrap" justify="flex-start">
              <RadioCard.Item value="aggregated" width="100%">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemText>Aggregated</RadioCard.ItemText>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
              <RadioCard.Item value="weighted" width="100%">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemText>Weighted</RadioCard.ItemText>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
            </Flex>
          </RadioCard.Root>
        )}
      </Flex>
      <Field.Root className="basic-font" mb="1%">
        <HStack gap="3">
          <FieldLabel> Weight Preference</FieldLabel>
          <Button size="2xs" fontSize="lg" colorPalette="blue">
            <FaPlus />
          </Button>
        </HStack>
      </Field.Root>
      <Flex wrap="wrap" overflowY="auto" maxH="250px">
        <Box p="2%" bg="gray.100" m="1%" position="relative">
          <Flex justifyContent="flex-end" mb="1%">
            <CloseButton position="absolute" top="0.5" right="0" />
          </Flex>
          <Box width="680px">
            <Flex gap="2">
              <Field.Root
                mt="2%"
                className="basic-font"
                orientation="horizontal"
                mb="1%"
                required
                width="130px"
              >
                <FieldLabel whiteSpace="nowrap">
                  - Target Cluster
                  <Field.RequiredIndicator />
                </FieldLabel>
              </Field.Root>
              <CheckboxGroup>
                <Flex gap="2" wrap="wrap" justify="flex-start">
                  <Box>
                    <CheckboxCard.Root width="auto" colorPalette="blue">
                      <CheckboxCard.HiddenInput />
                      <CheckboxCard.Control>
                        <CheckboxCard.Label>member1</CheckboxCard.Label>
                        <CheckboxCard.Indicator />
                      </CheckboxCard.Control>
                    </CheckboxCard.Root>
                  </Box>
                  <Box>
                    <CheckboxCard.Root width="auto" colorPalette="blue">
                      <CheckboxCard.HiddenInput />
                      <CheckboxCard.Control>
                        <CheckboxCard.Label>member2</CheckboxCard.Label>
                        <CheckboxCard.Indicator />
                      </CheckboxCard.Control>
                    </CheckboxCard.Root>
                  </Box>
                  <Box>
                    <CheckboxCard.Root width="auto" colorPalette="blue">
                      <CheckboxCard.HiddenInput />
                      <CheckboxCard.Control>
                        <CheckboxCard.Label>member23</CheckboxCard.Label>
                        <CheckboxCard.Indicator />
                      </CheckboxCard.Control>
                    </CheckboxCard.Root>
                  </Box>
                </Flex>
              </CheckboxGroup>
            </Flex>
            <Field.Root
              mt="2%"
              className="basic-font"
              orientation="horizontal"
              mb="1%"
              required
              width="650px"
            >
              <FieldLabel mr="7%">
                - Weight
                <Field.RequiredIndicator />
              </FieldLabel>
              <Input />
            </Field.Root>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
