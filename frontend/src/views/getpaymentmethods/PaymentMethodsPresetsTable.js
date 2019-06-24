import React from 'react';
import ListGroup from '../../components/ListGroup';

const listItems = [

    {
        "amountValue": 50,
        "countryCode": "NL",
        "currency": "EUR",
        "title": "NL 50 Euro",
    },
    {
        "amountValue": 1000,
        "countryCode": "CN",
        "currency": "CNY",
        "title": "China 1000 CNY",
    },
]

class GetPaymentsPresetsTable extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <ListGroup {...this.props} listItems={listItems} handleClick={this.props.setGetPaymentMethodsPreset} id="getPaymentMethodsPresetsTable" />
        );
    }


}



export default GetPaymentsPresetsTable;
