
import { Avatar } from "../../avatar";
import { Dropdown } from "../../dropdown";
import { IoMdApps } from 'react-icons/io'
import { HeaderTemplateProps } from "./header.types";
import { Logo } from "../logo";

export function HeaderTemplate({ user, handleLogout }:HeaderTemplateProps) {
  return (
    <header className="flex bg-slate-950 border-b border-b-slate-950 h-16 px-4">
      <Logo/>
      <div className="flex flex-1 justify-center items-center">
        {import.meta.env.VITE_APP_TITLE}
      </div>
      <div className="flex items-center gap-2">
        <Dropdown.Wrapper>
          <IoMdApps className="text-md h-10 w-10 text-gray-100"/> 
          <Dropdown.Content>
            <Dropdown.Group>
              <Dropdown.Item href={"http://app1.authentication-poc.com.br"}> IRM </Dropdown.Item>
              <Dropdown.Item href={"http://app2.authentication-poc.com.br"}> Shareholders </Dropdown.Item>
            </Dropdown.Group>
          </Dropdown.Content>
        </Dropdown.Wrapper>
        { user && 
          <Dropdown.Wrapper>
            <Avatar name={user.name}/>
            <Dropdown.Content>
              <Dropdown.Group>
                <Dropdown.Item> Dashboard </Dropdown.Item>
                <Dropdown.Item> Settings </Dropdown.Item>
                <Dropdown.Item> Profile </Dropdown.Item>
              </Dropdown.Group>
              <Dropdown.Group>
                <Dropdown.Item onClick={handleLogout}> Logout </Dropdown.Item>
              </Dropdown.Group>
            </Dropdown.Content>
          </Dropdown.Wrapper>
        }
      </div>
    </header>
  )
}