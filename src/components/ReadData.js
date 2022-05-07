import React, {Fragment} from'react'
import useJsonFetch from "./useJsonFetch";


export default function ReadData({title, url, opts}) {

    const [{data, loading, error}] = useJsonFetch(
        url,
        opts
    );

    return (
        <div className="load-component">
            <div className="title">{title}</div>
            <div><span className="name">URL:</span>{url}</div>
            <div><span className="name">STATUS:</span>{loading ? 'В процессе загрузки' : 'Загрузка завершена'}</div>
            <div><span className="name">ERROR:</span>{(error != null) && error}</div>
            <div><span className="name">DATA:</span>{(data != null) && JSON.stringify(data)}</div>
        </div>
    );
}