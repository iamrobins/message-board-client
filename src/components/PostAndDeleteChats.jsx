import { FormControl, FormLabel, Input, Button, HStack, useToast, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { chats } from "../apis"
import DeleteWithToken from "./DeleteWithToken";

export default function PostAndDeleteChats() {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const [message, setMessage] = useState("");
    const toast = useToast();

    const sendMessage = async () => {
        try {
            await chats.postMessage(message);
        } catch {
            toast({
                title: "Toxicity Not Allowed",
                status: "error",
                isClosable: true,
                duration: 5000
            })
        }
        setMessage("");
    }

    return (
        <FormControl isRequired>
            <FormLabel>Type something is the box below, then hit "Post"</FormLabel>
            <HStack alignItems={"center"}>
                <Input placeholder="hey buddy👋" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                    if (e.code === "Enter")
                        sendMessage();
                }} />
                <Button colorScheme='teal' size='xs' px="4" onClick={sendMessage}>
                    Post
                </Button>
                <Button colorScheme='red' size='xs' px="4" onClick={onToggle}>
                    Delete All
                </Button>
            </HStack>

            {/* Popup for Deletion */}
            <DeleteWithToken isOpen={isOpen} onClose={onClose} onToggle={onToggle} id={""}/>
        </FormControl>
    )
}