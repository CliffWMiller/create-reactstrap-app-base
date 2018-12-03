import React, {Component} from 'react';
import ExampleSmartComponent from '../components/example-components';
import {Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { changeName } from '../store/actions';
import { bindActionCreators } from 'redux';

export function ExampleContainer(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <ExampleSmartComponent name={props.name} editName={props.changeName} />
                </Col>
            </Row>
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        name: state.name,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);

