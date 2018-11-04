import React from "react"
import Article from "./Article"
import TComponent from "../TComponent"

class ArticleList extends TComponent {
    state = {
        first15: false,
    }

    render() {
        const { articles, ...rest } = this.props
        if (!articles || articles.length === 0) {
            return <div>Ничего нет =(</div>
        }
        const arr = this.state.first15 ? articles.slice(0, 15) : articles
        return (
            <div>
                <p>Ага, вот и ваши артикли:</p>
                <div>
                    <p>Не забудем пофильтровать: (ага забыли)</p>
                    {this.fieldCheckbox("first15")}
                </div>
                <br />

                {arr.map(it => (
                    <Article {...rest} key={it.id} data={it} />
                ))}
            </div>
        )
    }
}

export default ArticleList
