import React from "react"
import Article from "./Article"
import TComponent from "../TComponent"
import "./Article.css"

class ArticleList extends TComponent {
    state = {
        first15: false,
        newerFirst: true,
    }

    render() {
        const { articles, ...rest } = this.props
        if (!articles || articles.length === 0) {
            return <div>Ничего нет =(</div>
        }
        const arr = articles.slice(0, this.state.first15 ? 15 : undefined)
        if (this.state.newerFirst) {
            arr.sort((a, b) => {
                const ad = Date.parse(a.added)
                const bd = Date.parse(b.added)
                return bd - ad
            })
        }
        return (
            <div>
                <p>Ага, вот и ваши артикли:</p>
                <div>
                    <p>Не забудем пофильтровать: (ага забыли)</p>
                    {this.fieldCheckbox("first15")}
                    {this.fieldCheckbox("newerFirst")}
                </div>
                <br />

                <div className="Articles-container">
                    {arr.map(it => (
                        <Article {...rest} key={it.id} data={it} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ArticleList
