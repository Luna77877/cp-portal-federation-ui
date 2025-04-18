import { Text } from "@/common/Text";
import { Card } from "@/common/Card";
import { Stack, Flex, Status } from "@chakra-ui/react";
import { BarList, type BarListData, useChart } from "@chakra-ui/charts";

export default function MemberClusterInfo() {
  const CPUChart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [{ name: "CPU", value: 72.5 }],
    series: [{ name: "name", color: "yellow.solid" }],
  });
  const memoryChart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [{ name: "Memory", value: 2.44 }],
    series: [{ name: "name", color: "green.solid" }],
  });

  const items = [0, 1, 2, 3];

  return (
    <>
      <Text type="title">Member Cluster Info</Text>
      <Flex gap="3" wrap="wrap" className="flex-card-list">
        {items.map((item) => (
          <Card.Root type="medium">
            <Card.Header>
              <Card.Title>
                <Flex gap="5">
                  member1 cluster
                  <Flex gap="2">
                    <Status.Root colorPalette="green">
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
                <BarList.Root chart={CPUChart}>
                  <BarList.Content>
                    <BarList.Bar />
                    <BarList.Value />
                  </BarList.Content>
                </BarList.Root>
                <BarList.Root chart={memoryChart}>
                  <BarList.Content>
                    <BarList.Bar />
                    <BarList.Value />
                  </BarList.Content>
                </BarList.Root>
              </Stack>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </>
  );
}
