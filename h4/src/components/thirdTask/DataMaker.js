import React from "react";
import { useState, useEffect } from "react";

export const DataMaker = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(props.url);
            const json = await response.json();
            setPosts(json)
        } catch (error) {
            console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {props.renderDataUrl(posts)}
        </div>
    )
}