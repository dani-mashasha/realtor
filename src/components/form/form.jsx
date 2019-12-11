import React from "react";
import "./form.css";
import FormItem from "./formItem";


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: null
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        this.props.updateGallery(data);

    }

    toggleOpenClass = (index) => {
        if (index === this.state.isOpen) {
            this.setState({
                isOpen: null
            })
        } else {
            this.setState({
                isOpen: index
            })
        }

    };

    render() {
        return (
            <div className={"container-fluid"}>

                <form onSubmit={this.handleSubmit}>
                    <ul className={"formGrid"}>
                        <li>
                            City:
                            <input type="text" name={"city"} onChange={this.handleChange}
                                   placeholder={"Enter city..."}/>
                        </li>
                        <li className={"formItem"}>
                            <button onClick={() => this.toggleOpenClass("price")}>Price</button>
                            {this.state.isOpen === "price" &&
                            <div className={"innerForm"}>
                                <h6>Price range</h6>
                                <select name={"min"} onChange={this.handleChange}>
                                    <option value={""}>Minimum Price</option>
                                    <option value="500000">$500K</option>
                                    <option value="1000000">$1M</option>
                                    <option value="1500000">$1.5M</option>
                                    <option value="2000000">$2M</option>
                                    <option value="2500000">$2.5M</option>
                                    <option value="3000000">$3M</option>
                                    <option value="3500000">$3.5M</option>
                                </select>
                                <span> - </span>
                                <select name={"max"} onChange={this.handleChange}>
                                    <option value={""}>Maximum Price</option>
                                    <option value="2000000">$2M</option>
                                    <option value="2500000">$2.5M</option>
                                    <option value="3000000">$3M</option>
                                    <option value="3500000">$3.5M</option>
                                    <option value="4000000">$4M</option>
                                    <option value="4500000">$4.5M</option>
                                    <option value="5000000">$5M</option>
                                </select>
                            </div>
                            }

                        </li>

                        <li className={"formItem"}>
                            <button onClick={() => this.toggleOpenClass("beds")}>Beds</button>
                            {this.state.isOpen === "beds" &&
                            <FormItem name={"beds"} title={"Badrooms"} handleChange={this.handleChange}/>
                            }
                        </li>

                        <li className={"formItem"}>
                            <button onClick={() => this.toggleOpenClass("baths")}>Baths</button>
                            {this.state.isOpen === "baths" &&
                            <FormItem name={"baths"} title={"Bathrooms"}  handleChange={this.handleChange}/>
                            }
                        </li>

                        <li>
                            <button className={"bntSubmit"} type={"submit"}>Filter</button>
                        </li>
                    </ul>
                </form>
            </div>


        )
    }
}

export default Form;