import * as React from "react"
let Logo = "https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";

export default class FirstComponent extends React.Component <{}> {
    render() {
        return (
            <div>
                <h3>A simple component</h3>
                <div>
                    <img height="250" src={Logo} alt="logo"/>
                </div>
                <p>This component shows a logo.</p>

            </div>
        )
    }
}
