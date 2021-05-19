import React, { Component } from 'react'
    
export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission,
        }
    }
    
    isChange(event){
                 const name = event.target.name;
                 const value = event.target.value; 
                 this.setState({[name]:value});
    }
    saveButton = () => {
            var info = {};
            info.id = this.state.id;
            info.name = this.state.name;
            info.tel = this.state.tel;
            info.Permission = this.state.Permission;
            this.props.getUserEditInfo(info);
            this.props.changeEditUserStatus();
        }  

            
    render() {
        console.log(this.state);
        return (
            <div className="col">
             <form>
                <div className="card border-primary mt-2">
                    <h4 className="card-header text-center">Sửa thông tin</h4>
                    <div className="card-body text-primary">
                        <div className="card-title" />
                        <div className="form-group">
                        <input defaultValue={this.props.userEditObject.name} type="text" onChange={(event)=> {this.isChange(event)}} name="name" className="form-control" placeholder="Tên user" />
                        </div> 
                        <div className="form-group">
                        <input defaultValue={this.props.userEditObject.tel} type="text" onChange={(event)=> {this.isChange(event)}} name="tel" className="form-control" placeholder="Điện thoại" />
                        </div> 
                        <div className="form-group">
                        <select className="custom-select" defaultValue={this.props.userEditObject.Permission} onChange={(event)=> {this.isChange(event)}} name="Permission" required>
                            <option value>Chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>User</option>
                        </select>
                        </div> 
                        <div className="form-group mt-2 mb-2 mr-2 ml-2">
                            <div className="btn btn-success btn-block"
                            onClick={()=> this.saveButton()}>Lưu thông tin</div>     
                            <input type="reset" className="btn btn-secondary btn-block" value="Hủy bỏ"
                            onClick={()=> this.props.changeEditUserStatus()} />                                     
                        </div>
                    </div>
                </div>
            </form>   
        </div>
        )
    }
}
