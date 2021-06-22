import React, { Component } from 'react';
import { v4 } from "uuid";///npm install uuidv4
import {UserState} from "./UserState";

interface State {
    id : string;
    name : string;
    phone?: number;
    email : string;
    check:boolean
}

interface Props {
    addUser? : any;
    user : UserState;
    setUser?: any;
}

class NewProductComponent extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            id :  "",
            name : "",
            phone : 0,
            email : "",
            check: false
        };
    }
    
    componentWillReceiveProps(nextProps :any) {
        this.setState({
            name: nextProps.user.name,
            phone: nextProps.user.phone,
            email: nextProps.user.email,
        })
    }
       
    onChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({ [event.target.name]:  event.target.value } as Pick<State, keyof State>);
    };
    
    saveUser = () => {
        this.setState({
            id : v4()
        });
        this.props.addUser(this.state);
    }
    
    clearData = ()=> {
        this.setState({
            phone : Number.NaN,
            name : "",
            email : "",
        });
    }

    setUser = (user : any) =>{
        this.setState({
            id: user.id,
            name: user.name,
        });
    }

    showAdd = () => {
        this.setState({
            check:true,
        });
    }

    hideAdd = () => {
        this.setState({
            check:false,
        });
    }

    render() {
        return (
            <>
             <button type="button" className={this.state.check == true ? "d-none" : "btn btn-primary"} onClick={this.showAdd}>Thêm</button>
            <div className={this.state.check == true ? "" : "d-none"}>
                <div>
                    <h5 className="title mb-4">Thêm người dùng</h5>
                </div>
                <form>
                <div className="row mb-3">
                    <div className="form-group col-md-3">
                        <label>Tên người dùng :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <input id="userName" type="text" name="name" placeholder="" value ={this.state.name} onChange = {this.onChange} className="form-control" />
                        <input id="userId" value ={this.props.user.id} type="hidden" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col-md-3">
                        <label>Số điện thoại :</label>
                    </div>
                    <div className="form-group col-md-6 ">
                        <input type="number" id="userPhone"  name="phone" value = {this.state.phone} onChange = {this.onChange} placeholder="" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col-md-3">
                        <label>Email :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" id="userEmail" name="email" value = {this.state.email} onChange = {this.onChange} placeholder="" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick = {this.saveUser}>Save</button>
                    <button type="button" className="mx-2 btn btn-secondary" onClick = {this.clearData}>Clear</button>
                    <button type="button" className="mx-2 btn btn-secondary" onClick = {this.hideAdd}>Close</button>
                </div>
            </form>
            </div>
            </>
        );
     }
}
export default NewProductComponent;