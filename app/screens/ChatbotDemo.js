import React from 'react'
import { DialogFlowMessenger } from "react-native-dialogflow-messenger";

function ChatbotDemo({ navigation }) {
    return (
        <>

            <DialogFlowMessenger
                location="3473dc52-9c62-4caf-b09e-e6c7c1849c6a"
                agents="3473dc52-9c62-4caf-b09e-e6c7c1849c6a"
                //Style
                dfMessengerBotMessage="#878fac"
                dfMessengerUserMessage="#479b3d"
                dfMessengerFontColor="#FFFFFF"
                //UI Events 
                dfAccordionClicked={(event) => console.log("Accordion", event)}
                dfButtonClicked={(event) => console.log("Button", event)}
                dfChipClicked={(event) => console.log("Chip", event)}
                dfInfoCardClicked={(event) => console.log("Info", event)}
                dfListElementClicked={(event) => console.log("list", event)}
                //Dialogflow Events
                dfMessengerError={(event) => console.log("Error", event)}
                dfRequestSent={(event) => console.log("Send", event)}
                dfResponseReceived={(event) => console.log("Response", event)}
                dfUserInputEntered={(event) => console.log("UserInput", event)}
            />
        </>
    )
}

export default ChatbotDemo