import { Component } from "react"

class Form extends Component {
    initialState = {
        name: "",
        job: "",
    }

    state = this.initialState

    inputHandler = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitHandler = (e) => {
        const { addCharacter } = this.props

        e.preventDefault()
        addCharacter(this.state)
        this.setState({
            ...this.initialState
        })
    }

    render() {
        const { name, job } = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.inputHandler}
                />

                <label htmlFor="name">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.inputHandler}
                />

                <input type="button" value="Submit" onClick={this.submitHandler} />
            </form>
        )
    }
}

export default Form
