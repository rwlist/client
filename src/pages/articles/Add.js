import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Loading from "../../components/Loading"
import ReactJson from "react-json-view"
import TComponent from "../../components/TComponent"
import { addURL } from "../../actions/articles/ops"
import "./Add.css"

class Add extends TComponent {
    state = {
        data: "",
    }

    action = () => {
        // try {
        //     const articles = JSON.parse(this.state.data)
        //     this.props.addMany(articles)
        // } catch (err) {
        //     alert(err)
        // }
    }

    addURL = () => {
        this.props.addURL(this.state.data)
    }

    render() {
        const { add } = this.props
        const { isFetching } = add

        return (
            <div className="Articles_Add">
                ДЕРЕВО ОТРЕЗКОВ ВРЕМЕННО РАБОТАЕТ!
                <br />
                <textarea
                    value={this.state.data}
                    onChange={this.text("data")}
                />
                <br />
                <button onClick={this.addURL}>Добавить одну поссылку</button>
                <br />
                <br />
                {isFetching ? <Loading /> : <ReactJson src={add} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    add: state.articles.add,
})

const mapDispatchToProps = dispatch => ({
    addURL: url => dispatch(addURL(url)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Add)
)
