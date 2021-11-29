import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQuaTroChoi extends Component {
    render() {

        let { soBanChoi, soBanThang, banChon } = this.props;

        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn: <span className="text-warning">{banChon ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary">{soBanChoi}</span>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn mt-5 bg-success" onClick={() => {
                            const action = {
                                type: 'PLAY_GAME'
                            }
                            this.props.dispatch(action)
                        }}>
                            <div className="display-4">Play game</div>
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn mt-5 bg-primary" onClick={() => {
                            const action = {
                                type: 'RESET_GAME'
                            }
                            this.props.dispatch(action)
                        }}>
                            <div className="display-4">Reset game</div>
                        </button>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProp = (rootReducer) => {
    return {
        soBanChoi: rootReducer.gameXucXacReducer.soBanChoi,
        soBanThang: rootReducer.gameXucXacReducer.soBanThang,
        banChon: rootReducer.gameXucXacReducer.banChon
    }
}

export default connect(mapStateToProp)(KetQuaTroChoi)