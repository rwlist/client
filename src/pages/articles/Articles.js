import React, { Component } from "react"
import { withRouter, Link, Route } from "react-router-dom"
import { connect } from "react-redux"
import { fetchAllArticles } from "../../actions/articles/articles"
import TError from "../../components/TError"
import ArticleList from "../../components/articles/ArticleList"
import Loading from "../../components/Loading"
import AddMany from "./AddMany"
import {
    onClick,
    setReadStatus,
    changeRating,
    removeTag,
    addTag,
    addURL,
} from "../../actions/articles/ops"
import AddArticle from "../../components/articles/AddArticle"

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
                        <Link to={this.props.match.url + "/addMany"}>
                            Дерево отрезков
                        </Link>
                    </li>
                    <li>
                        <Link to={this.props.match.url + "/addURL"}>
                            Добавить ссылочку
                        </Link>
                    </li>
                </ul>
                <br />

                <Route
                    path={this.props.match.url + "/addMany"}
                    component={AddMany}
                />
                <Route
                    path={this.props.match.url + "/addURL"}
                    render={() => <AddArticle add={this.props.addURL} />}
                />
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
    addURL: url => dispatch(addURL(url)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Articles)
)
