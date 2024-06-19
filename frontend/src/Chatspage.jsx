import { MultiChatSocket, useMultiChatLogic } from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "ad98d9ef-ba36-4899-910f-5b30cdd6bd99",
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket {...chatProps} />
            <PrettyChatWindow {...chatProps} style={{ height: "100%" }} />
        </div>
    );
};
export default ChatsPage;
