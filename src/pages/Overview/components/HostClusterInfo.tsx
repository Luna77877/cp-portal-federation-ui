import { Text } from "@/common/Text";
import { Card } from "@/common/Card";
import { Stack, Flex, Status, HStack, Progress } from "@chakra-ui/react";

export default function HostClusterInfo() {
  return (
    <>
      <Text type="title">Host Cluster Info</Text>
      <Card.Root type="wide">
        <Card.Header>
          <Card.Title>
            <Flex gap="5">
              host-cluster
              <Flex gap="2">
                <Status.Root
                  colorPalette="green"
                  fontWeight="500"
                  color="#47494d"
                >
                  <Status.Indicator />
                  running
                </Status.Root>
              </Flex>
            </Flex>
          </Card.Title>
          <Card.Description>Nodes 2/4</Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack>
            <Progress.Root defaultValue={72.5} colorPalette="yellow" size="lg">
              <HStack gap="2">
                <Progress.Label className="card-progress-label">
                  CPU
                </Progress.Label>
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
                <Progress.ValueText className="card-progress-value-text">
                  72.5%
                </Progress.ValueText>
              </HStack>
            </Progress.Root>
            <Progress.Root defaultValue={23.77} colorPalette="green" size="lg">
              <HStack gap="2">
                <Progress.Label className="card-progress-label">
                  Memory
                </Progress.Label>
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
                <Progress.ValueText className="card-progress-value-text">
                  23.77%
                </Progress.ValueText>
              </HStack>
            </Progress.Root>
          </Stack>
        </Card.Body>
      </Card.Root>
    </>
  );
}
