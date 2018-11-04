import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Loading from "../../components/Loading"
import ReactJson from "react-json-view"
import TComponent from "../../components/TComponent"
import { addManyArticles } from "../../actions/articles/articles"
import "./AddMany.css"

class AddMany extends TComponent {
    state = {
        data: "",
    }

    action = () => {
        try {
            const articles = JSON.parse(this.state.data)
            this.props.addMany(articles)
        } catch (err) {
            alert(err)
        }
    }

    render() {
        const { state } = this.props
        const { isFetching } = state

        return (
            <div className="Articles_AddMany">
                <textarea
                    value={this.state.data}
                    onChange={this.text("data")}
                />
                <br />

                <button onClick={this.action}>Добавить</button>
                <br />
                <br />

                {isFetching ? <Loading /> : <ReactJson src={state.data} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.articles.addMany,
})

const mapDispatchToProps = dispatch => ({
    addMany: articles => dispatch(addManyArticles(articles)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddMany)
)
