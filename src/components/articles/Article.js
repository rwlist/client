import React, { Component } from "react"
import "./Article.css"

class Article extends Component {
    render() {
        const { data } = this.props
        const statuses = [
            ["IRL", "#a6caf0"], // interested, read later
            ["AWSM", "#50c878"], // awesome read
            ["DSMS", "#ffff66"], // dismiss
            ["REM", "#ffc0cb"], // remove
        ]
        const selected = statuses.find(it => it[0] === data.tags.status)

        return (
            <div>
                {/* <ReactJson className="overflow-x" src={data} /> */}
                <div
                    className={"Article"}
                    style={
                        selected
                            ? {
                                  backgroundColor: selected[1],
                              }
                            : {}
                    }
                >
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.props.onClick(data)}
                    >
                        <h3 className="Article-title">{data.tags.name}</h3>
                    </a>
                    <p className="Article-undistract">Id: {data.id}</p>
                    <p>Added: {data.added}</p>
                    {data.tags.lastClicked ? (
                        <p>Last clicked: {data.tags.lastClicked}</p>
                    ) : null}
                    {data.tags.clicks ? (
                        <p>Clicks: {data.tags.clicks}</p>
                    ) : null}

                    {statuses.map(it => (
                        <button
                            key={it[0]}
                            className="Article-status-btn"
                            style={
                                selected !== it
                                    ? {
                                          backgroundColor: it[1],
                                          borderColor: it[1],
                                      }
                                    : {}
                            }
                            onClick={() => this.props.changeStatus(data, it[0])}
                        >
                            {it[0]}
                        </button>
                    ))}

                    {data.patching ? <h4>¿PATCHING {data.patching}?</h4> : null}
                </div>
            </div>
        )
    }
}

export default Article
