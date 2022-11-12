
// import { Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel,Input,ModalFooter, Divider } from '@chakra-ui/react'

// import { useDisclosure } from "@chakra-ui/react"

// import React from 'react'

// export const Login = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const initialRef = React.useRef(null)
//     const finalRef = React.useRef(null)

//   return (
//     <div>
//           <Button onClick={onOpen} >Open Modal</Button>
     
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>First name</FormLabel>
//               <Input ref={initialRef} placeholder='First name' />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Last name</FormLabel>
//               <Input placeholder='Last name' />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   )
  
//   }

