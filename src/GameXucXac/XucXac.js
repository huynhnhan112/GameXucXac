import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {

    renderKetQua = () => {
        //Tính tổng điểm
        let tongDiem = this.props.mangXucXac.reduce((tong, xxnn, index)=>{
            return tong += xxnn.diem;
        }, 0);

        let ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu'

        return `${tongDiem} - ${ketQua}`
    }

    render() {
        let {mangXucXac} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-danger" onClick={()=>{
                            const action = {
                                type: 'DAT_CUOC',
                                payload: true
                            }
                            this.props.dispatch(action);
                        }}>
                            <span className="p-5 display-4">
                                Tài
                            </span>
                        </button>
                    </div>
                    <div className="col-6 text-center mt-3">
                        <img src={mangXucXac[0].hinhAnh} alt="xucxac" width={50} />
                        <img src={mangXucXac[1].hinhAnh} alt="xucxac" width={50} />
                        <img src={mangXucXac[2].hinhAnh} alt="xucxac" width={50} />
                        <br/>
                        <div className="display-4 mt-3">
                            {this.renderKetQua()}
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn bg-dark text-white" onClick={()=>{
                            const action = {
                                type: 'DAT_CUOC',
                                payload: false
                            }
                            this.props.dispatch(action);
                        }}>
                            <span className="p-5 display-4">
                                Xỉu
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (rootReducer) => {
    return {
        mangXucXac: rootReducer.gameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProp)(XucXac)
