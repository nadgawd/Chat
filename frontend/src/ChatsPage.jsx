import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('1a72d862-7448-4eeb-920c-8633a2c8ed89', props.user.username, props.user.secret);
    return (<div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}

export default ChatsPage