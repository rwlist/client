import React from "react"
import Article from "./Article"
import TComponent from "../TComponent"
import "./Article.css"
import Button from "../Button"

class ArticleList extends TComponent {
    state = {
        page: true,
        pageNumber: 0,
        newerFirst: true,
    }

    prevPage = () => {
        if (this.state.pageNumber > 0) {
            this.setState({
                pageNumber: this.state.pageNumber - 1,
            })
        }
    }

    nextPage = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
        })
    }

    render() {
        const PAGE_SIZE = 16

        const { articles, ...rest } = this.props
        if (!articles || articles.length === 0) {
            return <div>Ничего нет =(</div>
        }
        let arr = articles
        if (this.state.page) {
            arr = arr.slice(
                this.state.pageNumber * PAGE_SIZE,
                (this.state.pageNumber + 1) * PAGE_SIZE
            )
        }
        return (
            <div>
                <p>Ага, вот и ваши артикли:</p>
                <div>
                    <p>Не забудем пофильтровать: (ага забыли)</p>
                    {this.fieldCheckbox("page")}
                    <p>
                        Current page:
                        <span>{+this.state.pageNumber}</span>
                    </p>
                    <p>
                        <Button onClick={this.prevPage}>Prev</Button>
                        <Button onClick={this.nextPage}>Next</Button>
                    </p>

                    {/* {this.fieldCheckbox("newerFirst")} */}
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
