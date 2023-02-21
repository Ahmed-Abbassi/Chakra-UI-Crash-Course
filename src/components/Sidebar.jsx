import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import {List, ListIcon, ListItem} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
        <List  color={"white"} fontSize="1.2em" spacing={4}>
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} color="black"/>Dashboard </NavLink>
            </ListItem>
            <ListItem>
            <NavLink to="/create">
                <ListIcon as={EditIcon} color="black"/>
                New Task</NavLink>
            </ListItem>
            <ListItem>
            <NavLink to="/profile">
                <ListIcon as={AtSignIcon} color="black"/>
                profile</NavLink>

            </ListItem>
        </List>
    </div>
  )
}

export default Sidebar