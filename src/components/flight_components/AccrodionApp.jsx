import React from "react";
import '../../assets/css/style.css';
import FlightDetailsDropdown from "./flight-details-dropdown";

class AccordionApp extends React.Component {
    render() {
        const { flight } = this.props; // Accept `flight` as a prop

        const hiddenTexts = [
            { label: 'Flight Details', value: <FlightDetailsDropdown selectedFlight={flight} /> }
        ];

        return (
            <div>
                <Accordion hiddenTexts={hiddenTexts} />
            </div>
        );
    }
}

class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion">
                {this.props.hiddenTexts.map((hiddenText) => (
                    <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
                ))}
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility = () => {
        this.setState((prevState) => ({
            visibility: !prevState.visibility,
        }));
    };

    render() {
        const { label, value } = this.props.hiddenText;
        const activeStatus = this.state.visibility ? 'active' : '';

        return (
            <div>
                <button className="accordion__button" onClick={this.handleToggleVisibility}>
                    {label}
                </button>
                <div className={`accordion__content ${activeStatus}`}>
                    {value}
                </div>
            </div>
        );
    }
}

export default AccordionApp;
