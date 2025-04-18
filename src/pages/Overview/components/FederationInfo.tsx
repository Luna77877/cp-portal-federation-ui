import { Table } from "@/common/Table";
import { Text } from "@/common/Text";

export default function FederationInfo() {
  return (
    <>
      <Text type="title">Federation Info</Text>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Karmada Version</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Creation Time</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.version}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell>{item.time}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}

const items = [
  {
    id: 1,
    version: "v1.13.0",
    status: "Running",
    time: "2025-04-05 13:52:32",
  },
];
