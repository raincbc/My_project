import React from "react";
import { DataMaker } from "./DataMaker";
import Posts from "./Posts";

const Base_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

export default class AllPosts extends React.Component{
    render() {
        return (
            <div>
                <DataMaker url={Base_URL} renderDataUrl={(data) => <Posts value={data} />} />
            </div>
        )
    }
}