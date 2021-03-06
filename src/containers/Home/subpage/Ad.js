import React from 'react';
import { getAdData } from "../../../fetch/home/home";
import HomeAd from "../../../components/HomeAd";

class Ad extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],//不能是data:null，data是一个数组
        }
    }
    render() {
        return (
            <div>
                {this.state.data.length ?
                    <HomeAd data={this.state.data} />
                    : <div>{/*加载中*/}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // fetch 后端取数据
        const result = getAdData();
        // console.log(result)
        result.then((res) => {
            return res.json()
        }).then((json) => {
            if (json.length) {
                this.setState({
                    data: json,
                })
            }
        })
    }
}

export default Ad