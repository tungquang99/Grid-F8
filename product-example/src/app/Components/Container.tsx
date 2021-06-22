import {Component} from 'react';
import NewUser from "../User/NewUser";
import UserList from "../User/UserList";
import {UserState} from "../User/UserState";

interface State {
    userList : Array<UserState>;
    user : UserState;
}

class Container extends Component<any,State> {
    constructor(props: any){
        super(props)
        this.state = {
            userList : [],
            user : {
                id : "",
                name : "",
                email : "",
                phone : 0
            } as UserState
        }
    }

    addUser = (user : UserState) => {
        this.setState({
            userList : [...this.state.userList,user]
        });
    }

    delUser = (id : string) =>{
        let newUserList = [...this.state.userList];
        newUserList = newUserList.filter(function( user ) {
            return user.id !== id;
        });
        this.setState({
            userList : [...newUserList]
        });
    }

    editUser = (userItem : any) =>{
        this.setState({
            user : userItem
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <UserList userList = {this.state.userList} delUser={this.delUser} editUser={this.editUser}/>
                </div>
                <div className="col-md-4">
                    <NewUser user = {this.state.user} addUser = {this.addUser}/>
                </div>
            </div>
        )
    }
}
export default Container;