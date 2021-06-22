import React, { Component } from 'react';

interface Props {
    id : string;
    name : string;
    phone : number;
    index : number;
    email? : string;
    deleteUser? : any;
    editUser? : any;
}
class Product extends Component<Props> {
    constructor(props: Props){
        super(props)
        this.state = {
        };
    }
    deleteUser = () =>{
        this.props.deleteUser(this.props.id);
    }

    editUser = () => {
        this.props.editUser({
            id : this.props.id,
            name : this.props.name,
            phone : this.props.phone,
            email : this.props.email,
        });
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.email}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick = {this.editUser}>Edit</button>
                    <button type="button" className="btn btn-danger mx-2" onClick = {this.deleteUser}>Delete</button>
                </td>
            </tr>
        );
    }
}
export default Product;