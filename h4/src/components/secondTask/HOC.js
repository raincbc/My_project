import React from "react";

const loaderHOC = (WrappedComponent) => {
    return class extends React.Component{
        render() {
            return (
                this.props.load ? (
                    <WrappedComponent {...this.props} />
                ) : (
                        <div className="loading">Loading...</div>
                )
            )
        }
    }
}

export default loaderHOC