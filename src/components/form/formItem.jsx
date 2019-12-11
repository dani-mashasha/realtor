import React from "react";
import "./form.css"

class FormItem extends React.Component{
    render() {
        const {title,name,handleChange} = this.props;
        return(
                <div className={"innerForm"}>
                    <h6>{title}</h6>
                    <select name={name} onChange={handleChange}>
                        <option value={""}>Number of {title}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
        )
    }
}

export default FormItem;