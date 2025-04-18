import SearchBar from "common/SearchBar";
import ClusterJoin from "pages/Clusters/components/ClusterJoin";
import ClusterList from "pages/Clusters/components/ClusterList";
import Pagination from "common/Pagination";
import { Flex, Button } from "@chakra-ui/react";
import { toaster } from "common/ui/toaster";

export default function Clusters() {
  return (
    <>
      <Flex className="flex-clusters-header" justify="flex-end" gap="5">
        <SearchBar />
        <ClusterJoin />
      </Flex>
      <ClusterList />
      <Pagination />
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
    </>
  );
}
