import React from "react";
import { useState, useEffect } from "react";

export const DataMaker = (renderDataUrl, url) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json)
                } else {
                    throw new Error('err')
                }
                
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