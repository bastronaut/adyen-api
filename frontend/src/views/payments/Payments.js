
import React from 'react';
import PaymentsiDeal from './PaymentsiDeal';
import PaymentsCard from './PaymentsCard';
import PaymentsDropIn from './PaymentsDropIn';
import Title from '../../components/Title';

class Payments extends React.Component {

    constructor(props) {
        super(props);

        // Defaults
        this.state = {
            activeTab: "ideal"
        }
    }

    render() {
        return (
            <div className="my-5">
                <Title text="Payments" type="h1" />
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs my-4">
                            <li className="nav-item">
                                <a className={"nav-link " + (this.state.activeTab === 'ideal' ? 'active' : '')} onClick={() => this.setState({ activeTab: "ideal" })}> iDEAL payment</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (this.state.activeTab === 'card' ? 'active' : '')} onClick={() => this.setState({ activeTab: "card" })}>Credit Card payment</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (this.state.activeTab === 'drop-in' ? 'active' : '')} onClick={() => this.setState({ activeTab: "drop-in" })}>Drop-in components  </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className={"tab-pane " + (this.state.activeTab === 'ideal' ? 'active' : '')} id="home" role="tabpanel" aria-labelledby="home-tab">
                        <PaymentsiDeal {...this.props} />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === 'card' ? 'active' : '')} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <PaymentsCard {...this.props} />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === 'drop-in' ? 'active' : '')} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <PaymentsDropIn {...this.props} />
                    </div>
                </div>

                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        );
    }
}

export default Payments;


