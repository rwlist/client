import React, { Component } from "react"
import "./Article.css"
import ReactTimeAgo from "react-time-ago"
import Button from "../Button"
import Rating from "./Rating"

class Article extends Component {
    formatDate(date) {
        return <ReactTimeAgo locale="en">{Date.parse(date)}</ReactTimeAgo>
    }

    render() {
        const { data } = this.props
        const statuses = [
            ["unopened", "#ffffff"],
            ["viewed", "#ffff66"],
            ["completed", "#50c878"],
        ]
        const selected = statuses.find(it => it[0] === data.status.readStatus)

        return (
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
                <div className="Article-below-title">
                    <span className="Article-added">
                        Added: {this.formatDate(data.added)}
                    </span>
                    <span className="Article-id">Id: {data.id}</span>
                </div>
                {data.status.lastClick ? (
                    <p>Last clicked: {data.status.lastClick}</p>
                ) : null}
                {data.status.clicks ? (
                    <p>Clicks: {data.status.clicks}</p>
                ) : null}

                <div className="Article-status-btns">
                    {statuses.map(it => (
                        <Button
                            big
                            key={it[0]}
                            dashed={selected !== it}
                            onClick={() =>
                                this.props.setReadStatus(data, it[0])
                            }
                        >
                            {it[0]}
                        </Button>
                    ))}
                </div>

                <Rating
                    rating={data.status.rating}
                    ratingUp={() => this.props.changeRating(data, +1)}
                    ratingDown={() => this.props.changeRating(data, -1)}
                />

                {data.patching ? <h4>¿PATCHING {data.patching}?</h4> : null}
            </div>
        )
    }
}

export default Article
