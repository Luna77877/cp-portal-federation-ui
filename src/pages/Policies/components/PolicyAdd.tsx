import {
  Dialog,
  Button,
  Portal,
  CloseButton,
  Progress,
} from "@chakra-ui/react";
import Multistep from "pages/Policies/components/Multistep";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function PolicyAdd() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="lg" colorPalette="blue" fontSize="xl">
          <FaPlus />
          Add
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
          >
            <Multistep />
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );

  // const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(33.33);

  // return (
  //   <Dialog.Root>
  //     <Dialog.Trigger>
  //       <Button size="xl" colorPalette="blue">
  //         + Add
  //       </Button>
  //     </Dialog.Trigger>
  //     <Portal>
  //       <Dialog.Backdrop />
  //       <Dialog.Positioner>
  //         <Dialog.Content
  //           borderWidth="1px"
  //           rounded="lg"
  //           shadow="1px 1px 3px rgba(0,0,0,0.3)"
  //           maxWidth={800}
  //           p={6}
  //           m="10px auto"
  //           as="form"
  //         >
  //           <Progress.Root
  //             value={progress}
  //             mb="5%"
  //             mx="5%"
  //             colorPalette="blue"
  //             variant="outline"
  //           >
  //             <Progress.Track>
  //               <Progress.Range />
  //             </Progress.Track>
  //           </Progress.Root>
  //           <Dialog.Header>
  //             <Dialog.Title>Metadata</Dialog.Title>
  //           </Dialog.Header>
  //           <Dialog.Body></Dialog.Body>
  //           <Dialog.Footer>
  //             <Dialog.ActionTrigger asChild>
  //               <Button variant="outline">Cancel</Button>
  //             </Dialog.ActionTrigger>
  //             <Button>Save</Button>
  //           </Dialog.Footer>
  //           <Dialog.CloseTrigger asChild>
  //             <CloseButton size="sm" />
  //           </Dialog.CloseTrigger>
  //         </Dialog.Content>
  //       </Dialog.Positioner>
  //     </Portal>
  //   </Dialog.Root>
  // );
}
