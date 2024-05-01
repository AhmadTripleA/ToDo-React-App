import React from "react";

function TodoArchive({ archiveList }) {
    return (
        <div className="container mt-3">
            <h2 className="mb-3">Archive:</h2>
            <ul className="list-group mb-3">
                {archiveList.map(item => (
                    <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center list-group-item-secondary`}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoArchive;