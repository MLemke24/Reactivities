import { Button, Container, Menu } from "semantic-ui-react";


interface props {
    openForm: () => void;

}


export default function NavBar({openForm}: props) {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '.625rem'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content="Create Activity" className="ui icon button" onClick={openForm} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}