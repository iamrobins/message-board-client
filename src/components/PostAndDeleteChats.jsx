import { FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { chats } from "../apis"

export default function PostAndDeleteChats() {
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        await chats.postMessage(message);
        setMessage("");
    }

    return (
        <FormControl isRequired>
            <FormLabel>Type something is the box below, then hit "Post"</FormLabel>
            <HStack alignItems={"center"}>
                <Input placeholder="Hello" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                    if (e.code === "Enter")
                        sendMessage();
                }} />
                <Button colorScheme='teal' size='xs' px="4" onClick={sendMessage}>
                    Post
                </Button>
                <Button colorScheme='red' size='xs' px="4">
                    Delete All
                </Button>
            </HStack>
        </FormControl>
    )
}