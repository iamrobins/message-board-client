import { Input, Button, Text, Popover, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup } from "@chakra-ui/react"
import {chats} from "../apis";
import {useState} from "react";

export default function DeleteWithToken({ isOpen, onClose, onToggle, id }) {
    const [secret, setSecret] = useState("");

    const deleteMessages = async () => {
        if(!secret) return;
        await chats.deleteMessage(secret, id);
        setSecret("");
        onToggle();
    }

    return (
        <Popover
            returnFocusOnClose={false}
            isOpen={isOpen}
            onClose={onClose}
            placement='right'
            closeOnBlur={false}
        >
            <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Are you sure you want to delete?</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>
                        Enter token to delete message
                    </Text>
                    <Input value={secret} onChange={e => setSecret(e.target.value)} />
                </PopoverBody>
                <PopoverFooter display='flex' justifyContent='flex-end'>
                    <ButtonGroup size='sm'>
                        <Button onClick={onToggle} variant='outline'>Cancel</Button>
                        <Button onClick={deleteMessages} colorScheme='red'>OK</Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}