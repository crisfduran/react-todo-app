import React, {Component} from "react"

import { Form, FormGroup, FormCheckbox } from "shards-react"

export default class App extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.state = {
            one: false,
            two: false,
            three: false
        }
    }
    handleChange (e, todos) {
        const newState = {}
        newState[todos] = !this.state[todos]
        this.setState({ ...this.state, ...newState})
    }
    render() {
        return (
            <Form>
                <h1>ToDo-list</h1>
                
                    <FormCheckbox
                        checked={this.state.one}
                        onChange={e => this.handleChange(e,"one")}
                    >
                    One
                    </FormCheckbox>
                
                    <FormCheckbox
                        checked={this.state.two}
                        onChange={e => this.handleChange(e,"three")}
                    >
                    Two
                    </FormCheckbox>
                    <FormCheckbox
                        checked={this.state.three}
                        onChange={e => this.handleChange(e,"three")}
                    >
                    Three
                    </FormCheckbox>
                
            </Form>
        )
    }
}
    
