import { debug } from 'console';
import { Component } from 'react';
import Product from "./User"
import {UserState} from "./UserState";

interface Props {
    userList : Array<UserState>;
    delUser? : any;
    editUser?: any;
}

class ProductList extends Component<Props> {
    constructor(props: Props){
        super(props)
        this.state = {
        };
    }
    static defaultProps = {
        userList : []
    }
    delUser = (id : string) => {
        this.props.delUser(id);
    }
    editUser = (product : any) => {
        this.props.editUser(product);
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="bodyTable">
                    {
                        this.props.userList.map((user) => {
                            return <Product index = {this.props.userList.indexOf(user) + 1} 
                                            id = {user.id}
                                            key ={user.id}
                                            name = {user.name}
                                            phone= {user.phone}
                                            email= {user.email}
                                            deleteUser= {this.delUser}
                                            editUser= {this.editUser}
                                    />
                        })
                    }
                </tbody>
            </table>
        );
    }
}
export default ProductList;