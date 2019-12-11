import React from "react";
import "./test.css"


class Counter extends React.Component{
    render() {
        const {count, index, onIncrease, onDecrease, onDouble, customUpdate} = this.props ;

        return(
            <div className={"bntWrapper"}>
                <input type="text" value={count} onChange={(e) => customUpdate(index, e.target.value)}/>

                <button onClick={() => onIncrease(index)} className={"myBnt plus"}>+</button>
                <button onClick={() => onDecrease(index)} className={"myBnt minus"}>-</button>
                <button onClick={() => onDouble(index)} className={"myBnt multi"}>*2</button>

            </div>
        )
    }
}


class CounterContainer extends React.Component{
    constructor() {
        super();

        this.state = {
            count: [0, 0, 0],
            sum:0
        }
    }
    customUpdate =(index,value)=>{
        if(value.length == 0){
            value = 0;
        }
        let countList = this.state.count;
        countList[index] = parseInt(value);
        this.setState(
            {count: countList})
        this.updateSum();
    }
    updateSum =()=>{
        let sum= 0;
        const list = this.state.count;
        for (let i = 0 ; i < list.length; i++){
            sum += list[i];
        }
        this.setState(
            { sum: sum}
        )
    }


    onDecrease =(index)=>{
        let countList = this.state.count;
        countList[index] -= 1;
    this.setState(
        {count: countList})
        this.updateSum();
    }

    onIncrease =(index)=> {
        let countList = this.state.count;
         countList[index] += 1;
    this.setState(
        {count: countList})
        this.updateSum();
    }
    onDouble =(index)=>{
        let countList = this.state.count;
        countList[index] *= 2;
    this.setState(
        {count: countList})
        this.updateSum();
    }



    increaseAll =()=>{
        let countList = this.state.count;
        countList.map((val,i) => (this.onIncrease(i)));
        this.updateSum();
    }
    decreaseAll =()=>{
        let countList = this.state.count;
        countList.map((val,i) => (this.onDecrease(i)));
        this.updateSum();
    }
    doubleAll =()=>{
        let countList = this.state.count;
        countList.map((val,i) => (this.onDouble(i)));
        this.updateSum();
    }
    reset =()=>{
        let countList = this.state.count.map(val=> val=0);
        this.setState(
            {count: countList,
            sum:0})


    }
    render(){
        const count = this.state.count;
        return(
            <div className={"counterWrapper"}>
                <div>
                {count.map((val,i)=> <Counter onIncrease={this.onIncrease}
                                              onDecrease={this.onDecrease}
                                              onDouble={this.onDouble}
                                              customUpdate={this.customUpdate}
                                              count={val} index={i}/>)}


                </div>
                    <div>
                    <button className={"myBnt plus"} onClick={()=>this.increaseAll()}>+ all</button>
                    <button className={"myBnt minus"} onClick={()=>this.decreaseAll()}>- all</button>
                    <button className={"myBnt multi"} onClick={()=>this.doubleAll()}>*2 all</button>
                    <button className={"myBnt reset"} onClick={()=>this.reset()}>reset all</button>
                    </div>
                    <span>SUM : {this.state.sum}</span>
                </div>

        )
    }
}

export default CounterContainer;