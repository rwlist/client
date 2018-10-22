import React, { Component } from "react"
import Article from "./Article"

class ArticleList extends Component {
    render() {
        const { articles } = this.props
        if (!articles || articles.length === 0) {
            return <div>Ничего нет =(</div>
        }
        return (
            <div>
                <p>Ага, вот и ваши артикли:</p>
                <br />

                {articles.map(it => (
                    <Article key={it.id} data={it} />
                ))}
            </div>
        )
    }
}

export default ArticleList
