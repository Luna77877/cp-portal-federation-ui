import SearchBar from "components/common/SearchBar";
import ClusterJoin from "components/federation/clusters/ClusterJoin";
import ClusterList from "components/federation/clusters/ClusterList";
import Pages from "components/common/Pages";
import { Flex, Button } from "@chakra-ui/react";
import { Toaster, toaster } from "components/ui/toaster";

export default function Clusters() {
  return (
    <>
      <Flex className="flex-clusters-header" justify="flex-end" gap="5">
        <SearchBar />
        <ClusterJoin />
      </Flex>
      <ClusterList />
      <Pages />
      <Button
        variant="outline"
        size="xs"
        onClick={() => {
          console.log("cliked");
          toaster.create({
            description: "멤버클러스터에서 제외되었습니다.",
            type: "info",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
}
