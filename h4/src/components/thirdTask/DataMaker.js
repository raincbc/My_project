import React from "react";
import { useState, useEffect } from "react";

export const DataMaker = (props) => {
    const { renderDataUrl, url } = props;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);
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
            {renderDataUrl(posts)}
        </div>
    )
}