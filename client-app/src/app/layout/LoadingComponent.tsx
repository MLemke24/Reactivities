import { Dimmer, Loader } from "semantic-ui-react";

interface props {
    inverted?: boolean;
    content?: string;
}
export default function LoadingComponent({inverted = true, content}: props)
{
    return (
        <Dimmer active inverted={inverted}>
            <Loader content='Loading...'/>
        </Dimmer>
    )
}