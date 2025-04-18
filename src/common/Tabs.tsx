import { Tabs as ChakraTabs } from "@chakra-ui/react";

export const Tabs = {
  Root: (props: React.ComponentProps<typeof ChakraTabs.Root>) => (
    <ChakraTabs.Root {...props} size="lg" />
  ),
  List: ChakraTabs.List,
  Trigger: ChakraTabs.Trigger,
  Content: (props: React.ComponentProps<typeof ChakraTabs.Content>) => (
    <ChakraTabs.Content {...props} padding="15px" />
  ),
};
