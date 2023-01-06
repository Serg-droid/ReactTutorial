import React, { Component } from "react"
import Table from "./Table"
import Form from "./Form";

class App extends Component {
    state = {
        characters: [
            // {
            // 	name: "Charlie",
            // 	job: "Janitor",
            // },
            // {
            // 	name: "Mac",
            // 	job: "Bouncer",
            // },
            // {
            // 	name: "Dee",
            // 	job: "Aspring actress",
            // },
            // {
            // 	name: "Dennis",
            // 	job: "Bartender",
            // },
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
            characters: [
                ...characters.slice(0, index),
                ...characters.slice(index + 1),
            ],
        })
    }

    addCharacter = (character) => {
        this.setState({
            characters: [...this.state.characters, character],
        })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />

                <Form addCharacter={this.addCharacter}/>
            </div>
        )
    }
}

export default App
