import React, { Component } from "react"
import { withRouter, Link, Route } from "react-router-dom"
import { connect } from "react-redux"
import { fetchAllArticles } from "../../actions/articles/articles"
import TError from "../../components/TError"
import ArticleList from "../../components/articles/ArticleList"
import Loading from "../../components/Loading"
import Add from "./Add"
import {
    onClick,
    setReadStatus,
    changeRating,
    removeTag,
    addTag,
} from "../../actions/articles/ops"

class Articles extends Component {
    render() {
        const { articles, fetchArticles, ...ops } = this.props
        const { isFetching, list, error } = articles
        return (
            <div>
                <h2>Артиклес</h2>

                <ul>
                    <li>
                        <Link to={this.props.match.url}>KEK</Link>
                    </li>
                    <li>
                        <Link to={this.props.match.url + "/add"}>
                            Новые руки
                        </Link>
                    </li>
                </ul>
                <br />

                <Route path={this.props.match.url + "/add"} component={Add} />
                <br />

                <button onClick={fetchArticles}>Обновить</button>
                <br />
                <br />

                <TError err={error} />
                {isFetching ? (
                    <Loading />
                ) : (
                    <ArticleList {...ops} articles={list} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
})

const mapDispatchToProps = dispatch => ({
    fetchArticles: () => dispatch(fetchAllArticles()),
    onClick: article => dispatch(onClick(article)),
    setReadStatus: (article, status) =>
        dispatch(setReadStatus(article, status)),
    changeRating: (article, delta) => dispatch(changeRating(article, delta)),
    removeTag: (article, tag) => dispatch(removeTag(article, tag)),
    addTag: (article, tag) => dispatch(addTag(article, tag)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Articles)
)
