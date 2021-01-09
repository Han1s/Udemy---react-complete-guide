import React, { Fragment, Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        constructor(props) {
            let error = null
            super(props);
            axios.interceptors.request.use(req => {
                return req;
            });
            axios.interceptors.response.use(res => res, err => {
                error = err;
            });
            this.state = {
                error: error,
            }
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Fragment>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;