import { Status as ChakraStatus } from "@chakra-ui/react";
import type { ComponentProps } from "react";

type Status = "ready" | "not ready" | "unknown";

// type StatusProps = ComponentProps<typeof ChakraStatus> & {
//   status: Status;
// };

// export const Status = ({ staus, ...props }: StatusProps) => {
//   return <ChakraStatus {...staus} {...props} />;
// };
