import { Component } from "react";

const loaderHOC = (WrappedComponent) => {
    return class extends Component{
        render() {
            return (
                !this.props.load ? (
                    <WrappedComponent {...this.props} />
                ) : (
                        <div className="loading">Loading...</div>
                )
            )
        }
    }
}

export default loaderHOC