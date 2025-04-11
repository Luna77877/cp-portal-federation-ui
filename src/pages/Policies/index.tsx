import useApi from "../../hooks/usdApi";
import SearchBar from "components/common/SearchBar";
import LevelSelect from "components/federation/policies/LevelSelect";
import Namespace from "components/federation/policies/Namespace";
import PolicyAdd from "components/federation/policies/PolicyAdd";
import PolicyList from "components/federation/policies/PolicyList";
import Pages from "components/common/Pages";
import { FEDERATION_API_BASE_URL } from "../../config/config";
import { Flex, Button } from "@chakra-ui/react";
import { Toaster, toaster } from "components/ui/toaster";

export default function Policies() {
  return (
    <>
      <Flex
        className="flex-policy-header"
        justify="space-between"
        align="center"
      >
        <Flex gap="1">
          <LevelSelect />
          <Namespace />
        </Flex>
        <Flex justify="flex-end" gap="5">
          <SearchBar />
          <PolicyAdd />
        </Flex>
      </Flex>
      <PolicyList />
      <Pages />
      <Button
        variant="outline"
        size="xs"
        onClick={() => {
          console.log("cliked");
          toaster.create({
            description: "정책이 삭제되었습니다.",
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

function apitest() {
  // const apiUrl = FEDERATION_API_BASE_URL + `/api/v1/propagationpolicy`;
  const apiUrl = FEDERATION_API_BASE_URL + `/api/v1/overview`;

  // const {
  //   data: data,
  //   loading,
  //   error,
  //   refetch,
  // }: UseApiResult = useApi({ apiUrl: apiUrl });

  // console.log(`data: ${data}`);

  // if (data === null && loading === true) {
  //   return <div> 로딩중이여.....</div>;
  // }

  // return (
  //   <>
  //     <h1>Propagation Policy API 불러옴</h1>
  //     <ul>
  //       {data && data.length > 0 ? (
  //         data.map((policy: Policy, index: number) => (
  //           <li key={index}>{policy.name}</li>
  //         ))
  //       ) : (
  //         <li>목록이 없습니다.</li>
  //       )}
  //     </ul>
  //   </>
  // );

  // sessionStorage.setItem(
  //   "token",
  //   "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJBdXRoSWQiOiIxOTcyNGMxMi03YjNkLTRlNDYtYWQzZC05ZDViYmFmMTQ2MDciLCJyb2xlc0luZm8iOnsiaG9zdC1jbHVzdGVyIjp7InVzZXJUeXBlIjoiU1VQRVJfQURNSU4iLCJuYW1lc3BhY2VMaXN0IjpudWxsfSwia2poLWNsdXN0ZXIiOnsidXNlclR5cGUiOiJTVVBFUl9BRE1JTiIsIm5hbWVzcGFjZUxpc3QiOm51bGx9LCJjbHVzdGVyMyI6eyJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwibmFtZXNwYWNlTGlzdCI6bnVsbH0sImNsdXN0ZXIyIjp7InVzZXJUeXBlIjoiU1VQRVJfQURNSU4iLCJuYW1lc3BhY2VMaXN0IjpudWxsfX0sIklQIjpudWxsLCJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwiZXhwIjoxNzQ0MjU2MzE4LCJpYXQiOjE3NDQyNDU1MTgsIkJyb3dzZXIiOm51bGx9.AbuVNC9DU94j8pbbYg76SgJXgYVdLwZ1tiNp4sKnqdOzvZS7sw80xx1ywwjfKj4mqD4WaQpT28yvkg8NTPcDWw"
  // );
  const token = sessionStorage.getItem("token");
  console.log(`token : ${token}`);
  return <div>{token}</div>;
}
