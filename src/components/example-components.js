import React, {Component} from 'react';
import {Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';

export default class ExampleSmartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEdit: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            showEdit: !this.state.showEdit
        });
    }

    render() {
        const header = this.props.name.display? `Hello ${this.props.name.display}!` : "Hello there!";

        const editNameForm = (
            <Form>
                <ExampleDumbComponent currentName={this.props.name.actual} editName={this.props.editName} />
            </Form>);

        return (<div>
            <h1>{header}</h1>
            <Button onClick={this.toggleEdit}>edit name</Button>
            {this.state.showEdit === true? editNameForm : null}
        </div>);
    }
}

export function ExampleDumbComponent(props) {
    return (
        <FormGroup>
            <Label for="name">Input a name</Label>
            <Input onChange={(e)=>props.editName(e.target.value)} />
            <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
    );
}