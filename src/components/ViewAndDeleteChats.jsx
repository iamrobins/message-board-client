import { HStack, Text, VStack, Link, useColorModeValue} from "@chakra-ui/react"
import { FaFacebookMessenger } from "react-icons/fa"
import {useQuery} from "react-query";
import {chats} from "../apis";
 
function Message({content, created_at}) {
    return (
        <VStack border={"dotted"} borderWidth="medium" borderColor="gray.200" pl="4" pr="8" py="2">
            <HStack>
                <FaFacebookMessenger />
                <Text fontWeight={"bold"}>~anonymous - </Text>
                <Text fontWeight={"light"} fontSize="xs">{new Date(created_at).toLocaleTimeString()}</Text>
                <Link fontSize={"sm"} color="blue.600">Delete</Link>
            </HStack>
            <Text color={useColorModeValue("gray.500", "gray.200")} w="100%">{content}</Text>
        </VStack>
    )
}

export default function ViewAndDeleteChats() {
    const {isLoading, error, data} = useQuery("messages", chats.getMessages, {
        refetchInterval: 1000
    });

    if(isLoading || error || !data)
        return <></>

    return (
        <VStack w="100%" alignItems="flex-start" spacing={"8"} h="400px" overflowY={"auto"}>
            {data.map(message => <span key={message.id}><Message content={message.content} created_at={message.created_at} /></span>)}
        </VStack>
    )
}