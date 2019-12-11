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
                                    <option value="50000">$50k</option>
                                    <option value="70000">$70k</option>
                                    <option value="90000">$90k</option>
                                    <option value="100000">$100k</option>
                                    <option value="150000">$150k</option>
                                    <option value="200000">$200k</option>
                                    <option value="250000">$250k</option>
                                </select>
                                <span> - </span>
                                <select name={"max"} onChange={this.handleChange}>
                                    <option value={""}>Maximum Price</option>
                                    <option value="300000">$300k</option>
                                    <option value="350000">$350k</option>
                                    <option value="400000">$400k</option>
                                    <option value="450000">$450k</option>
                                    <option value="500000">$500k</option>
                                    <option value="550000">$550k</option>
                                    <option value="600000">$600k</option>
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