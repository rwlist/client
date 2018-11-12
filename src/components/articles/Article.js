import React, { Component } from "react"
import "./Article.css"

class Article extends Component {
    render() {
        const { data } = this.props
        const statuses = [
            ["unopened", "#ffffff"],
            ["viewed", "#ffff66"],
            ["completed", "#50c878"],
        ]
        const selected = statuses.find(it => it[0] === data.status.readStatus)

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
                        <h3 className="Article-title">{data.title}</h3>
                    </a>
                    <p className="Article-below-title">
                        <span className="Article-added">
                            Added: {data.added}
                        </span>
                        <span className="Article-id">Id: {data.id}</span>
                    </p>
                    {data.status.lastClick ? (
                        <p>Last clicked: {data.status.lastClick}</p>
                    ) : null}
                    {data.status.clicks ? (
                        <p>Clicks: {data.status.clicks}</p>
                    ) : null}

                    {statuses.map(it => (
                        <button
                            key={it[0]}
                            className="Article-status-btn"
                            style={
                                selected !== it
                                    ? {
                                          //   backgroundColor: it[1],
                                          //   borderColor: it[1],
                                          borderStyle: "dashed",
                                      }
                                    : {}
                            }
                            onClick={() =>
                                this.props.setReadStatus(data, it[0])
                            }
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
