import { HStack, Text, VStack, Link, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FaFacebookMessenger } from "react-icons/fa"
import { useQuery } from "react-query";
import { chats } from "../apis";
import DeleteWithToken from "./DeleteWithToken";

function Message({ name, content, createdAt, id }) {
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
        <VStack border={"dotted"} borderWidth="medium" borderColor="gray.200" pl="4" pr="8" py="2" w={["320px", "380px", "380px"]}>
            <HStack>
                <FaFacebookMessenger />
                <Text fontWeight={"bold"}>~{name} - </Text>
                <Text fontWeight={"light"} fontSize="xs">{new Date(createdAt).toLocaleTimeString()}</Text>
                <Link fontSize={"sm"} color="blue.600" onClick={onToggle}>Delete</Link>
            </HStack>
            <Text color={useColorModeValue("gray.500", "gray.200")} w="100%">{content}</Text>

            {/* Popup for Deletion */}
            <DeleteWithToken isOpen={isOpen} onClose={onClose} onToggle={onToggle} id={id} />
        </VStack>
    )
}

export default function ViewAndDeleteChats() {
    const { isLoading, error, data } = useQuery("messages", chats.getMessages, {
        refetchInterval: 1000
    });

    if (isLoading || error || !data)
        return <></>

    return (
        <VStack w="100%" alignItems="flex-start" spacing={"8"} h="400px" overflowY={"auto"}>
            {data.map(message => 
                <span key={message.id}>
                    <Message name={message.name} content={message.content} createdAt={message.created_at} id={message.id} />
                </span>)}
        </VStack>
    )
}